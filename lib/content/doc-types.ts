import type { Locale } from "@/lib/i18n";
import type { FaqItem } from "./types";

export interface LocalizedTable {
  headers: string[];
  rows: string[][];
}

export interface LocalizedSection {
  id: string;
  title: string;
  paragraphs?: string[];
  list?: string[];
  table?: LocalizedTable;
  code?: string;
}

export interface LocalizedDoc {
  faq: FaqItem[];
  sections: LocalizedSection[];
  note?: string;
  ui?: Record<string, unknown>;
}

export type LocalizedDocMap = Record<Locale, LocalizedDoc>;

export function getLocalizedDoc(
  contentMap: LocalizedDocMap,
  locale: Locale,
): LocalizedDoc {
  return contentMap[locale] || contentMap.en;
}
