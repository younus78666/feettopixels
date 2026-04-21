import type { Locale } from "@/lib/i18n";

const homeLabels: { [locale: string]: string } = {
  en: "Home",
};

export function getHomeLabel(locale: Locale): string {
  return homeLabels[locale] || homeLabels.en;
}
