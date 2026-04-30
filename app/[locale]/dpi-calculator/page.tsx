import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { buildAlternates, localizedPath } from "@/lib/alternates";
import { getDictionary } from "@/lib/translations";
import { ConverterLayout } from "@/components/tools/ConverterLayout";
import { getBreadcrumbs, getRelatedTools } from "@/lib/content-utils";
import { StructuredDoc } from "@/components/content/StructuredDoc";
import { getLocalizedDoc } from "@/lib/content/doc-types";
import { content } from "@/lib/content/dpi-calculator";
import { DpiCalculator } from "./DpiCalculator";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["dpi-calculator"];

  return {
    title: pageDict?.title || "dpi-calculator",
    description: pageDict?.description || "",
    alternates: buildAlternates(locale, "dpi-calculator"),
    openGraph: {
      title: pageDict?.title || "dpi-calculator",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
      images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: pageDict?.title || "dpi-calculator" }],
    },
  };
}


export default async function DpiCalculatorPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const doc = getLocalizedDoc(content, validLocale);
  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "pixel-converter", href: "/pixel-converter" },
    { slug: "dpi-calculator", href: "/dpi-calculator" },
  ]);
  const relatedTools = getRelatedTools(dict, [
    { slug: "ppi-calculator", href: "/ppi-calculator", icon: "🖥️" },
    { slug: "dpi-converter", href: "/dpi-converter", icon: "🔄" },
    { slug: "image-dpi-checker", href: "/image-dpi-checker", icon: "🔍" },
    { slug: "screen-resolution-checker", href: "/screen-resolution-checker", icon: "📺" },
    { slug: "pixels-to-inches", href: "/pixels-to-inches", icon: "📐" },
  ]);
  return (
    <ConverterLayout
      locale={validLocale}
      title={dict.pages["dpi-calculator"]?.title || "DPI Calculator"}
      description={dict.pages["dpi-calculator"]?.description || "Calculate the DPI (dots per inch) of any screen or display."}
      slug="/dpi-calculator"
      extractiveAnswer={dict.pages["dpi-calculator"]?.extractive || "To calculate DPI, use the formula: DPI = sqrt(width² + height²) / diagonal. For example, a 24-inch 1080p monitor (1920x1080) has a DPI of 91.79, while a 27-inch 4K display (3840x2160) has 163.18 DPI."}
      breadcrumbs={breadcrumbs}
      relatedTools={relatedTools}
      faqItems={doc.faq}
      labels={{
        relatedTools: dict.tool.relatedTools,
        faq: dict.tool.faq,
      }}
      content={<StructuredDoc sections={doc.sections} />}
    >
      <DpiCalculator locale={validLocale} />
    </ConverterLayout>
  );
}
