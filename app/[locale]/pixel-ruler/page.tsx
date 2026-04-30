import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { buildAlternates, localizedPath } from "@/lib/alternates";
import { getDictionary } from "@/lib/translations";
import { ConverterLayout } from "@/components/tools/ConverterLayout";
import { getBreadcrumbs, getRelatedTools } from "@/lib/content-utils";
import { StructuredDoc } from "@/components/content/StructuredDoc";
import { getLocalizedDoc } from "@/lib/content/doc-types";
import { content } from "@/lib/content/pixel-ruler";
import { PixelRulerTool } from "./PixelRulerTool";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["pixel-ruler"];

  return {
    title: pageDict?.title || "pixel-ruler",
    description: pageDict?.description || "",
    alternates: buildAlternates(locale, "pixel-ruler"),
    openGraph: {
      title: pageDict?.title || "pixel-ruler",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
      images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: pageDict?.title || "pixel-ruler" }],
    },
  };
}


export default async function PixelRulerPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const doc = getLocalizedDoc(content, validLocale);
  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "pixel-converter", href: "/pixel-converter" },
    { slug: "pixel-ruler", href: "/pixel-ruler" },
  ]);
  const relatedTools = getRelatedTools(dict, [
    { slug: "screen-resolution-checker", href: "/screen-resolution-checker", icon: "📺" },
    { slug: "ppi-calculator", href: "/ppi-calculator", icon: "🖥️" },
    { slug: "pixels-to-inches", href: "/pixels-to-inches", icon: "📐" },
    { slug: "pixels-to-cm", href: "/pixels-to-cm", icon: "📏" },
    { slug: "dpi-calculator", href: "/dpi-calculator", icon: "🔄" },
  ]);
  return (
    <ConverterLayout
      locale={validLocale}
      title={dict.pages["pixel-ruler"]?.title || "Pixel Ruler"}
      description={dict.pages["pixel-ruler"]?.description || "An on-screen ruler showing pixels, inches, and centimeters."}
      slug="/pixel-ruler"
      extractiveAnswer={dict.pages["pixel-ruler"]?.extractive || "This pixel ruler displays measurements in pixels, inches, or centimeters directly on your screen. Calibrate it using a credit card (3.375 inches wide) for accurate physical measurements. Without calibration, it uses the default 96 PPI."}
      breadcrumbs={breadcrumbs}
      relatedTools={relatedTools}
      faqItems={doc.faq}
      labels={{
        relatedTools: dict.tool.relatedTools,
        faq: dict.tool.faq,
      }}
      content={<StructuredDoc sections={doc.sections} />}
    >
      <PixelRulerTool locale={validLocale} />
    </ConverterLayout>
  );
}
