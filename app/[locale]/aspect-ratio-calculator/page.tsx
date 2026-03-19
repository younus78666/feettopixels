import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import { ConverterLayout } from "@/components/tools/ConverterLayout";
import { getBreadcrumbs, getRelatedTools } from "@/lib/content-utils";
import { StructuredDoc } from "@/components/content/StructuredDoc";
import { getLocalizedDoc } from "@/lib/content/doc-types";
import { content } from "@/lib/content/aspect-ratio-calculator";
import { AspectRatioCalc } from "./AspectRatioCalc";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["aspect-ratio-calculator"];

  return {
    title: pageDict?.title || "aspect-ratio-calculator",
    description: pageDict?.description || "",
    alternates: {
      canonical: `/${locale}/aspect-ratio-calculator`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/aspect-ratio-calculator`]),
      ),
    },
    openGraph: {
      title: pageDict?.title || "aspect-ratio-calculator",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}


export default async function AspectRatioCalculatorPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const doc = getLocalizedDoc(content, validLocale);
  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "pixel-converter", href: "/pixel-converter" },
    { slug: "aspect-ratio-calculator", href: "/aspect-ratio-calculator" },
  ]);
  const relatedTools = getRelatedTools(dict, [
    { slug: "image-size-calculator", href: "/image-size-calculator", icon: "📐" },
    { slug: "screen-resolution-checker", href: "/screen-resolution-checker", icon: "📺" },
    { slug: "megapixel-calculator", href: "/megapixel-calculator", icon: "📷" },
    { slug: "pixels-to-inches", href: "/pixels-to-inches", icon: "📏" },
    { slug: "dpi-calculator", href: "/dpi-calculator", icon: "🖥️" },
  ]);
  return (
    <ConverterLayout
      locale={validLocale}
      title={dict.pages["aspect-ratio-calculator"]?.title || "Aspect Ratio Calculator"}
      description={dict.pages["aspect-ratio-calculator"]?.description || "Calculate width, height, or aspect ratio from any two known values."}
      slug="/aspect-ratio-calculator"
      extractiveAnswer={dict.pages["aspect-ratio-calculator"]?.extractive || "To find an aspect ratio, divide width and height by their greatest common divisor. For 1920x1080, the GCD is 120, yielding 16:9. To find a missing dimension, lock the ratio and enter one dimension to calculate the other."}
      breadcrumbs={breadcrumbs}
      relatedTools={relatedTools}
      faqItems={doc.faq}
      labels={{
        relatedTools: dict.tool.relatedTools,
        faq: dict.tool.faq,
      }}
      content={<StructuredDoc sections={doc.sections} />}
    >
      <AspectRatioCalc locale={validLocale} />
    </ConverterLayout>
  );
}
