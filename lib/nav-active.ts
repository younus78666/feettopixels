import type { NavDropdown } from "@/content/navigation";
import type { Locale } from "@/lib/i18n";

function normalizePath(path: string): string {
  if (!path) return "/";
  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }
  return path;
}

export function localizeNavHref(href: string, locale: Locale): string {
  return href === "/" ? `/${locale}` : `/${locale}${href}`;
}

export function isCurrentPath(
  pathname: string,
  href: string,
  locale: Locale,
): boolean {
  const current = normalizePath(pathname);
  const target = normalizePath(localizeNavHref(href, locale));

  if (current === target) return true;
  if (href === "/") return false;

  return current.startsWith(`${target}/`);
}

export function isDropdownCurrent(
  pathname: string,
  dropdown: NavDropdown,
  locale: Locale,
): boolean {
  return dropdown.groups.some((group) =>
    group.links.some((link) => isCurrentPath(pathname, link.href, locale)),
  );
}
