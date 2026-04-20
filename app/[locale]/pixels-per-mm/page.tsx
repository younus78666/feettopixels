import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { buildAlternates, localizedPath } from "@/lib/alternates";
import { getDictionary } from "@/lib/translations";
import { BlogLayout } from "@/components/blog/BlogLayout";
import { getBreadcrumbs } from "@/lib/content-utils";
import { StructuredDoc } from "@/components/content/StructuredDoc";
import { getLocalizedDoc } from "@/lib/content/doc-types";
import { content } from "@/lib/content/pixels-per-mm";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["pixels-per-mm"];

  return {
    title: pageDict?.title || "pixels-per-mm",
    description: pageDict?.description || "",
    alternates: buildAlternates(locale, "pixels-per-mm"),
    openGraph: {
      title: pageDict?.title || "pixels-per-mm",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}



export default async function PixelsPerMmPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const doc = getLocalizedDoc(content, validLocale);
  const toc = doc.sections.map((section) => ({ id: section.id, label: section.title }));

  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "pixels-per-mm", href: "/pixels-per-mm" },
  ]);

  const relatedArticles = [
    { title: dict.pages["pixels-per-cm"]?.title || "Pixels Per CM", href: "/pixels-per-cm", description: dict.navDescriptions["pixels-per-cm"] || "Pixel density per centimeter" },
    { title: dict.pages["pixels-per-inch"]?.title || "Pixels Per Inch Explained", href: "/pixels-per-inch", description: dict.navDescriptions["pixels-per-inch"] || "Complete PPI reference" },
    { title: dict.pages["passport-photo-size"]?.title || "Passport Photo Size", href: "/passport-photo-size", description: dict.navDescriptions["passport-photo-size"] || "ID photo dimensions in pixels" },
    { title: dict.pages["dpi-conversion-table"]?.title || "DPI Conversion Table", href: "/dpi-conversion-table", description: dict.navDescriptions["dpi-conversion-table"] || "Comprehensive DPI reference" },
  ];
  return (
    <BlogLayout
      locale={validLocale}
      title={dict.pages["pixels-per-mm"]?.title || "Pixels Per Millimeter"}
      extractiveAnswer={dict.pages["pixels-per-mm"]?.extractive || "At 96 DPI, there are 3.78 pixels per millimeter. At 300 DPI, there are 11.81 pixels per millimeter. The formula is: pixels per mm = DPI / 25.4, because one inch contains 25.4 millimeters."}
      breadcrumbs={breadcrumbs}
      faqItems={doc.faq}
      relatedArticles={relatedArticles}
      cta={{ label: "Try the MM to Pixels Converter", href: "/mm-to-pixels" }}
      toc={toc}
      labels={{
        readyToConvert: dict.tool.readyToConvert,
        relatedArticles: dict.tool.relatedArticles,
        onThisPage: dict.nav.onThisPage,
      }}
      slug="pixels-per-mm"
    >
      <StructuredDoc sections={doc.sections} />
    
    
    </BlogLayout>
  );
}
