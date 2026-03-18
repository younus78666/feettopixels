import type { Locale } from "@/lib/i18n";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PageContent {
  faq: FaqItem[];
  body: Record<string, string>;
}

export type PageContentMap = Record<Locale, PageContent>;

/**
 * Get localized page content, falling back to English.
 */
export function getPageContent(
  contentMap: PageContentMap,
  locale: Locale,
): PageContent {
  return contentMap[locale] || contentMap.en;
}
