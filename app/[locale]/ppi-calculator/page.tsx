import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { buildAlternates, localizedPath } from "@/lib/alternates";
import { getDictionary } from "@/lib/translations";
import { ConverterLayout } from "@/components/tools/ConverterLayout";
import { getBreadcrumbs, getRelatedTools } from "@/lib/content-utils";
import { StructuredDoc } from "@/components/content/StructuredDoc";
import { getLocalizedDoc } from "@/lib/content/doc-types";
import { content } from "@/lib/content/ppi-calculator";
import { PpiCalculator } from "./PpiCalculator";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["ppi-calculator"];

  return {
    title: pageDict?.title || "ppi-calculator",
    description: pageDict?.description || "",
    alternates: buildAlternates(locale, "ppi-calculator"),
    openGraph: {
      title: pageDict?.title || "ppi-calculator",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}


export default async function PpiCalculatorPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const doc = getLocalizedDoc(content, validLocale);
  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "pixel-converter", href: "/pixel-converter" },
    { slug: "ppi-calculator", href: "/ppi-calculator" },
  ]);
  const relatedTools = getRelatedTools(dict, [
    { slug: "dpi-calculator", href: "/dpi-calculator", icon: "🖥️" },
    { slug: "dpi-converter", href: "/dpi-converter", icon: "🔄" },
    { slug: "screen-resolution-checker", href: "/screen-resolution-checker", icon: "📺" },
    { slug: "image-size-calculator", href: "/image-size-calculator", icon: "📐" },
    { slug: "pixels-to-inches", href: "/pixels-to-inches", icon: "📏" },
  ]);
  return (
    <ConverterLayout
      locale={validLocale}
      title={dict.pages["ppi-calculator"]?.title || "PPI Calculator"}
      description={dict.pages["ppi-calculator"]?.description || "Calculate pixels per inch for any screen and compare across devices."}
      slug="/ppi-calculator"
      extractiveAnswer={dict.pages["ppi-calculator"]?.extractive || "PPI (pixels per inch) measures screen pixel density. Calculate it with: PPI = sqrt(width² + height²) / diagonal. An iPhone 15 Pro has 460 PPI, a MacBook Pro 14-inch has 254 PPI, and a 27-inch 4K monitor has 163 PPI."}
      breadcrumbs={breadcrumbs}
      relatedTools={relatedTools}
      faqItems={doc.faq}
      labels={{
        relatedTools: dict.tool.relatedTools,
        faq: dict.tool.faq,
      }}
      content={<StructuredDoc sections={doc.sections} />}
    >
      <PpiCalculator locale={validLocale} />
    </ConverterLayout>
  );
}
