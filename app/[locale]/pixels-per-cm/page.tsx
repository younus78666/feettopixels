import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { buildAlternates, localizedPath } from "@/lib/alternates";
import { getDictionary } from "@/lib/translations";
import { BlogLayout } from "@/components/blog/BlogLayout";
import { getBreadcrumbs } from "@/lib/content-utils";
import { StructuredDoc } from "@/components/content/StructuredDoc";
import { getLocalizedDoc } from "@/lib/content/doc-types";
import { content } from "@/lib/content/pixels-per-cm";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["pixels-per-cm"];

  return {
    title: pageDict?.title || "pixels-per-cm",
    description: pageDict?.description || "",
    alternates: buildAlternates(locale, "pixels-per-cm"),
    openGraph: {
      title: pageDict?.title || "pixels-per-cm",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}



export default async function PixelsPerCmPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const doc = getLocalizedDoc(content, validLocale);
  const toc = doc.sections.map((section) => ({ id: section.id, label: section.title }));

  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "learn", href: "/learn", label: dict.nav.learn },
    { slug: "pixels-per-cm", href: "/pixels-per-cm" },
  ]);

  const relatedArticles = [
    { title: dict.pages["pixels-per-mm"]?.title || "Pixels Per MM", href: "/pixels-per-mm", description: dict.navDescriptions["pixels-per-mm"] || "Pixel density per millimeter" },
    { title: dict.pages["pixels-per-inch"]?.title || "Pixels Per Inch Explained", href: "/pixels-per-inch", description: dict.navDescriptions["pixels-per-inch"] || "Complete PPI reference" },
    { title: dict.pages["pixels-per-foot"]?.title || "Pixels Per Foot", href: "/pixels-per-foot", description: dict.navDescriptions["pixels-per-foot"] || "Large format pixel density" },
    { title: dict.pages["dpi-conversion-table"]?.title || "DPI Conversion Table", href: "/dpi-conversion-table", description: dict.navDescriptions["dpi-conversion-table"] || "Comprehensive DPI reference" },
  ];
  return (
    <BlogLayout
      locale={validLocale}
      title={dict.pages["pixels-per-cm"]?.title || "Pixels Per Centimeter"}
      extractiveAnswer={dict.pages["pixels-per-cm"]?.extractive || "At 96 DPI, there are 37.80 pixels per centimeter. At 300 DPI, there are 118.11 pixels per centimeter. The formula is: pixels per cm = DPI / 2.54. One inch equals 2.54 cm, so divide the DPI by 2.54."}
      breadcrumbs={breadcrumbs}
      faqItems={doc.faq}
      relatedArticles={relatedArticles}
      cta={{ label: "Try the CM to Pixels Converter", href: "/cm-to-pixels" }}
      toc={toc}
      labels={{
        readyToConvert: dict.tool.readyToConvert,
        relatedArticles: dict.tool.relatedArticles,
        onThisPage: dict.nav.onThisPage,
      }}
      slug="pixels-per-cm"
    >
      <StructuredDoc sections={doc.sections} />
    
    </BlogLayout>
  );
}
