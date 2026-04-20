import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { buildAlternates, localizedPath } from "@/lib/alternates";
import { getDictionary } from "@/lib/translations";
import { ConverterLayout } from "@/components/tools/ConverterLayout";
import { getBreadcrumbs, getRelatedTools } from "@/lib/content-utils";
import { StructuredDoc } from "@/components/content/StructuredDoc";
import { getLocalizedDoc } from "@/lib/content/doc-types";
import { content } from "@/lib/content/dpi-converter";
import { DpiConverterTool } from "./DpiConverterTool";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["dpi-converter"];

  return {
    title: pageDict?.title || "dpi-converter",
    description: pageDict?.description || "",
    alternates: buildAlternates(locale, "dpi-converter"),
    openGraph: {
      title: pageDict?.title || "dpi-converter",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}


export default async function DpiConverterPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const doc = getLocalizedDoc(content, validLocale);
  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "pixel-converter", href: "/pixel-converter" },
    { slug: "dpi-converter", href: "/dpi-converter" },
  ]);
  const relatedTools = getRelatedTools(dict, [
    { slug: "dpi-calculator", href: "/dpi-calculator", icon: "🖥️" },
    { slug: "image-dpi-checker", href: "/image-dpi-checker", icon: "🔍" },
    { slug: "image-size-calculator", href: "/image-size-calculator", icon: "📐" },
    { slug: "pixels-to-inches", href: "/pixels-to-inches", icon: "📏" },
    { slug: "ppi-calculator", href: "/ppi-calculator", icon: "📺" },
  ]);
  return (
    <ConverterLayout
      locale={validLocale}
      title={dict.pages["dpi-converter"]?.title || "DPI Converter"}
      description={dict.pages["dpi-converter"]?.description || "Convert image dimensions between different DPI resolutions for web and print."}
      slug="/dpi-converter"
      extractiveAnswer={dict.pages["dpi-converter"]?.extractive || "To convert between DPI resolutions, multiply the current size by the current DPI, then divide by the target DPI. For example, a 10-inch image at 72 DPI becomes 2.4 inches at 300 DPI because (10 x 72) / 300 = 2.4."}
      breadcrumbs={breadcrumbs}
      relatedTools={relatedTools}
      faqItems={doc.faq}
      labels={{
        relatedTools: dict.tool.relatedTools,
        faq: dict.tool.faq,
      }}
      content={<StructuredDoc sections={doc.sections} />}
    >
      <DpiConverterTool locale={validLocale} />
    </ConverterLayout>
  );
}
