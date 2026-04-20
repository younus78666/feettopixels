import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const COOKIE_NAME = "admin-session";
const ROOT_HOST = "feettopixels.com";
const CANONICAL_HOST = `www.${ROOT_HOST}`;

const locales = [
  "en", "es", "fr", "de", "pt", "hi", "ja", "ko",
  "it", "nl", "ar", "tr", "pl", "id", "ru",
];

const defaultLocale = "en";

function getLocaleFromPath(pathname: string): string | null {
  const segments = pathname.split("/");
  const maybeLocale = segments[1];
  if (locales.includes(maybeLocale)) {
    return maybeLocale;
  }
  return null;
}

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

  // Force a single public host so the live URL matches the canonical tag.
  if (requestUrl.hostname === ROOT_HOST) {
    requestUrl.hostname = CANONICAL_HOST;
    return NextResponse.redirect(requestUrl, 308);
  }

  // Skip internal Next.js routes, static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".") // static files like .ico, .png, .xml, etc.
  ) {
    return NextResponse.next();
  }

  // --- Admin API route protection ---
  if (pathname.startsWith("/api/admin")) {
    // Allow auth endpoint without auth (login/logout)
    if (pathname === "/api/admin/auth") {
      return addSecurityHeaders(NextResponse.next());
    }

    // All other /api/admin/* routes require auth
    const authed = await isAuthenticated(request);
    if (!authed) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return addSecurityHeaders(NextResponse.next());
  }

  // --- Admin page protection ---
  if (pathname.startsWith("/admin")) {
    // Allow login page without auth
    if (pathname === "/admin/login") {
      const authed = await isAuthenticated(request);
      if (authed) {
        return NextResponse.redirect(new URL("/admin", request.url));
      }
      return addSecurityHeaders(NextResponse.next());
    }

    // Check auth for all other admin routes
    const authed = await isAuthenticated(request);
    if (!authed) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    return addSecurityHeaders(NextResponse.next());
  }

  // --- API routes: skip locale redirect, add security headers ---
  if (pathname.startsWith("/api")) {
    return addSecurityHeaders(NextResponse.next());
  }

  // --- Legacy /en/* URLs → permanent redirect to root (English now lives at /)
  if (pathname === `/${defaultLocale}` || pathname.startsWith(`/${defaultLocale}/`)) {
    const stripped = pathname.slice(defaultLocale.length + 1) || "/";
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = stripped;
    return NextResponse.redirect(redirectUrl, 301);
  }

  // --- Non-default locales (es, fr, …) → serve as-is
  const localeInPath = getLocaleFromPath(pathname);
  if (localeInPath && localeInPath !== defaultLocale) {
    return addSecurityHeaders(NextResponse.next());
  }

  // --- No locale in path → internally rewrite to /en/<path> so the
  //     [locale] route tree renders English while the user URL stays clean.
  const rewriteUrl = request.nextUrl.clone();
  rewriteUrl.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  const response = NextResponse.rewrite(rewriteUrl);
  return addSecurityHeaders(response);
}

export const config = {
  matcher: [
    // Match admin routes
    "/admin/:path*",
    // Match admin API routes
    "/api/admin/:path*",
    // Match all paths except _next and static files (for locale routing + security headers)
    "/((?!_next|favicon\\.ico|.*\\..*).*)",
  ],
};
