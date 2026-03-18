import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

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

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip internal Next.js routes, API routes, static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".") // static files like .ico, .png, .xml, etc.
  ) {
    return NextResponse.next();
  }

  // Check if locale is already in the path
  const localeInPath = getLocaleFromPath(pathname);
  if (localeInPath) {
    return NextResponse.next();
  }

  // No locale in path - redirect to /en/...
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // Match all paths except _next, api, and static files
    "/((?!_next|api|favicon\\.ico|.*\\..*).*)",
  ],
};
