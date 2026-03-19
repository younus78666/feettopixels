import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import { ConverterLayout } from "@/components/tools/ConverterLayout";
import { getBreadcrumbs, getRelatedTools } from "@/lib/content-utils";
import { StructuredDoc } from "@/components/content/StructuredDoc";
import { getLocalizedDoc } from "@/lib/content/doc-types";
import { content } from "@/lib/content/megapixel-calculator";
import { MegapixelCalc } from "./MegapixelCalc";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["megapixel-calculator"];

  return {
    title: pageDict?.title || "megapixel-calculator",
    description: pageDict?.description || "",
    alternates: {
      canonical: `/${locale}/megapixel-calculator`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/megapixel-calculator`]),
      ),
    },
    openGraph: {
      title: pageDict?.title || "megapixel-calculator",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}


export default async function MegapixelCalculatorPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const doc = getLocalizedDoc(content, validLocale);
  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "pixel-converter", href: "/pixel-converter" },
    { slug: "megapixel-calculator", href: "/megapixel-calculator" },
  ]);
  const relatedTools = getRelatedTools(dict, [
    { slug: "image-size-calculator", href: "/image-size-calculator", icon: "📐" },
    { slug: "image-dpi-checker", href: "/image-dpi-checker", icon: "🔍" },
    { slug: "aspect-ratio-calculator", href: "/aspect-ratio-calculator", icon: "🔄" },
    { slug: "dpi-calculator", href: "/dpi-calculator", icon: "🖥️" },
    { slug: "pixels-to-inches", href: "/pixels-to-inches", icon: "📏" },
  ]);
  return (
    <ConverterLayout
      locale={validLocale}
      title={dict.pages["megapixel-calculator"]?.title || "Megapixel Calculator"}
      description={dict.pages["megapixel-calculator"]?.description || "Convert between megapixels and pixel dimensions at any aspect ratio."}
      slug="/megapixel-calculator"
      extractiveAnswer={dict.pages["megapixel-calculator"]?.extractive || "A megapixel equals 1 million pixels. To find dimensions from megapixels, use the aspect ratio: for 12 MP at 4:3, width = sqrt(12M x 4/3) = 4000px, height = 3000px. To find megapixels from dimensions: MP = (width x height) / 1,000,000."}
      breadcrumbs={breadcrumbs}
      relatedTools={relatedTools}
      faqItems={doc.faq}
      labels={{
        relatedTools: dict.tool.relatedTools,
        faq: dict.tool.faq,
      }}
      content={<StructuredDoc sections={doc.sections} />}
    >
      <MegapixelCalc locale={validLocale} />
    </ConverterLayout>
  );
}
