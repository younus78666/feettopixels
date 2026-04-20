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

function hasRenderableSection(section: LocalizedSection): boolean {
  const paragraphs = section.paragraphs?.some((paragraph) => paragraph.trim()) || false;
  const list = section.list?.some((item) => item.trim()) || false;
  const table =
    Boolean(section.table?.headers.length) && Boolean(section.table?.rows.length);
  const code = Boolean(section.code?.trim());

  return paragraphs || list || table || code;
}

export function getLocalizedDoc(
  contentMap: LocalizedDocMap,
  locale: Locale,
): LocalizedDoc {
  const localeDoc = contentMap[locale];
  const localeHasContent =
    (localeDoc?.sections.some(hasRenderableSection) ?? false) ||
    (localeDoc?.faq.length ?? 0) > 0;
  const doc = localeHasContent ? localeDoc : contentMap.en;

  return {
    ...doc,
    sections: doc.sections.filter(hasRenderableSection),
  };
}
