import { en } from "./en";
import type { Dictionary } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { de } from "./de";
import { pt } from "./pt";
import { hi } from "./hi";
import { ja } from "./ja";
import { ko } from "./ko";
import { it } from "./it";
import { nl } from "./nl";
import { ar } from "./ar";
import { tr } from "./tr";
import { pl } from "./pl";
import { id } from "./id";
import { ru } from "./ru";
import type { Locale } from "@/lib/i18n";

export type { Dictionary };

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  es,
  fr,
  de,
  pt,
  hi,
  ja,
  ko,
  it,
  nl,
  ar,
  tr,
  pl,
  id,
  ru,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
