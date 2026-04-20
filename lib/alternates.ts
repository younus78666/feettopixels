import type { Locale } from "./i18n";
import { locales } from "./i18n";

const DEFAULT_LOCALE: Locale = "en";

/**
 * Build a path for a given locale + slug.
 * English (default locale) lives at root: "/", "/about", "/what-is-dpi".
 * Other locales keep a prefix: "/es", "/es/about", "/fr/what-is-dpi".
 */
export function localizedPath(locale: Locale, slug: string): string {
  if (locale === DEFAULT_LOCALE) {
    return slug ? `/${slug}` : "/";
  }
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

/**
 * Build the Next.js `alternates` block (canonical + hreflang languages)
 * for a page identified by slug ("" for the homepage).
 */
export function buildAlternates(locale: Locale, slug: string) {
  return {
    canonical: localizedPath(locale, slug),
    languages: Object.fromEntries(
      locales.map((l) => [l, localizedPath(l, slug)]),
    ),
  };
}

/**
 * Build the absolute URL for a given locale + slug.
 * Use when generating JSON-LD @id / url fields.
 */
export function localizedAbsoluteUrl(
  baseUrl: string,
  locale: Locale,
  slug: string,
): string {
  return `${baseUrl}${localizedPath(locale, slug)}`;
}
