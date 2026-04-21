import { en } from "./en";
import type { Dictionary } from "./en";
import type { Locale } from "@/lib/i18n";
import { englishSeoPageOverrides } from "@/lib/page-seo";

export type { Dictionary };

export const dictionaries: Record<Locale, Dictionary> = {
  en,
};

export function getDictionary(_locale: Locale): Dictionary {
  return {
    ...en,
    pages: {
      ...en.pages,
      ...englishSeoPageOverrides,
    },
  };
}
