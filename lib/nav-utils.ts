import type { Dictionary } from "./translations";
import type { NavLink } from "@/content/navigation";

/**
 * Get a translated label for a navigation link.
 * Falls back to the English label from navigation.ts if no translation exists.
 */
export function getNavLabel(link: NavLink, dict: Dictionary): string {
  const slug = link.href.replace(/^\//, "");
  return dict.pages[slug]?.title || link.label;
}

/**
 * Get a translated short description for a navigation link.
 * Falls back to the English description from navigation.ts.
 */
export function getNavDescription(
  link: NavLink,
  dict: Dictionary,
): string | undefined {
  const slug = link.href.replace(/^\//, "");
  return dict.navDescriptions[slug] || link.description;
}
