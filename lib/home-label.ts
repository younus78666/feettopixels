import type { Locale } from "@/lib/i18n";

const homeLabels: Record<Locale, string> = {
  en: "Home",
  es: "Inicio",
  fr: "Accueil",
  de: "Start",
  pt: "Inicio",
  hi: "होम",
  ja: "ホーム",
  ko: "홈",
  it: "Home",
  nl: "Home",
  ar: "الرئيسية",
  tr: "Ana Sayfa",
  pl: "Start",
  id: "Beranda",
  ru: "Главная",
};

export function getHomeLabel(locale: Locale): string {
  return homeLabels[locale] || homeLabels.en;
}
