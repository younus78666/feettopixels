import type { Dictionary } from "./translations";
import type { Locale } from "./i18n";

export interface LocalizedBreadcrumb {
  label: string;
  href: string;
}

export interface LocalizedRelatedTool {
  name: string;
  description: string;
  href: string;
  icon: string;
}

/**
 * Generate localized breadcrumbs from slug path.
 * Uses dict.pages[slug].title for the label, falling back to the slug.
 */
export function getBreadcrumbs(
  locale: Locale,
  dict: Dictionary,
  crumbs: { slug: string; href: string; label?: string }[],
): LocalizedBreadcrumb[] {
  const home: LocalizedBreadcrumb = {
    label: dict.site.name,
    href: "/",
  };

  return [
    home,
    ...crumbs.map((crumb) => ({
      label: crumb.label || dict.pages[crumb.slug]?.title || crumb.slug,
      href: crumb.href,
    })),
  ];
}

/**
 * Generate localized related tools from slugs.
 * Uses dict.pages[slug].title for name and dict.navDescriptions[slug] for description.
 */
export function getRelatedTools(
  dict: Dictionary,
  tools: { slug: string; href: string; icon: string }[],
): LocalizedRelatedTool[] {
  return tools.map((tool) => ({
    name: dict.pages[tool.slug]?.title || tool.slug,
    description: dict.navDescriptions[tool.slug] || "",
    href: tool.href,
    icon: tool.icon,
  }));
}
