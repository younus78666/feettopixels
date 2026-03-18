import { notFound } from "next/navigation";
import { locales, isRtl, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/content/site-config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const validLocale = locale as Locale;
  const dict = getDictionary(validLocale);
  const dir = isRtl(validLocale) ? "rtl" : "ltr";

  return (
    <>
      <head>
        {locales.map((l) => (
          <link
            key={l}
            rel="alternate"
            hrefLang={l}
            href={`${siteConfig.url}/${l}`}
          />
        ))}
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${siteConfig.url}/en`}
        />
      </head>
      <div lang={validLocale} dir={dir}>
        <a href="#main-content" className="skip-to-content">
          {dict.nav.skipToContent}
        </a>
        <Header locale={validLocale} />
        <main id="main-content">{children}</main>
        <Footer locale={validLocale} />
      </div>
    </>
  );
}
