import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const COOKIE_NAME = "admin-session";
const ROOT_HOST = "feettopixels.com";
const CANONICAL_HOST = `www.${ROOT_HOST}`;
const DEFAULT_LOCALE = "en";

function getSecret(): Uint8Array | null {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) return null;
  return new TextEncoder().encode(secret);
}

async function isAuthenticated(request: NextRequest): Promise<boolean> {
  const secret = getSecret();
  if (!secret) return false;

  const token = request.cookies.get(COOKIE_NAME)?.value;
  if (!token) return false;

  try {
    await jwtVerify(token, secret);
    return true;
  } catch {
    return false;
  }
}

function addSecurityHeaders(response: NextResponse): NextResponse {
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload"
  );
  response.headers.set("X-DNS-Prefetch-Control", "on");
  return response;
}

export async function middleware(request: NextRequest) {
  const requestUrl = request.nextUrl.clone();
  const { pathname } = requestUrl;

  if (requestUrl.hostname === ROOT_HOST) {
    requestUrl.hostname = CANONICAL_HOST;
    return NextResponse.redirect(requestUrl, 308);
  }

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/api/admin")) {
    if (pathname === "/api/admin/auth") {
      return addSecurityHeaders(NextResponse.next());
    }
    const authed = await isAuthenticated(request);
    if (!authed) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return addSecurityHeaders(NextResponse.next());
  }

  if (pathname.startsWith("/admin")) {
    if (pathname === "/admin/login") {
      const authed = await isAuthenticated(request);
      if (authed) {
        return NextResponse.redirect(new URL("/admin", request.url));
      }
      return addSecurityHeaders(NextResponse.next());
    }
    const authed = await isAuthenticated(request);
    if (!authed) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
    return addSecurityHeaders(NextResponse.next());
  }

  if (pathname.startsWith("/api")) {
    return addSecurityHeaders(NextResponse.next());
  }

  if (pathname === `/${DEFAULT_LOCALE}` || pathname.startsWith(`/${DEFAULT_LOCALE}/`)) {
    return addSecurityHeaders(NextResponse.next());
  }

  const rewriteUrl = request.nextUrl.clone();
  rewriteUrl.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
  return addSecurityHeaders(NextResponse.rewrite(rewriteUrl));
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/api/admin/:path*",
    "/((?!_next|favicon\\.ico|.*\\..*).*)",
  ],
};
