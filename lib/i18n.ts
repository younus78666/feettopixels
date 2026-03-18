export const defaultLocale = "en";

export const locales = [
  "en",
  "es",
  "fr",
  "de",
  "pt",
  "hi",
  "ja",
  "ko",
  "it",
  "nl",
  "ar",
  "tr",
  "pl",
  "id",
  "ru",
] as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  pt: "Português",
  hi: "हिन्दी",
  ja: "日本語",
  ko: "한국어",
  it: "Italiano",
  nl: "Nederlands",
  ar: "العربية",
  tr: "Türkçe",
  pl: "Polski",
  id: "Indonesia",
  ru: "Русский",
};

export const rtlLocales: Locale[] = ["ar"];

export function isRtl(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
