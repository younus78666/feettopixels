import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import { BlogLayout } from "@/components/blog/BlogLayout";
import { getBreadcrumbs } from "@/lib/content-utils";
import { StructuredDoc } from "@/components/content/StructuredDoc";
import { getLocalizedDoc } from "@/lib/content/doc-types";
import { content } from "@/lib/content/what-is-dpi";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["what-is-dpi"];

  return {
    title: pageDict?.title || "what-is-dpi",
    description: pageDict?.description || "",
    alternates: {
      canonical: `/${locale}/what-is-dpi`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/what-is-dpi`]),
      ),
    },
    openGraph: {
      title: pageDict?.title || "what-is-dpi",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}



export default async function WhatIsDpiPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const doc = getLocalizedDoc(content, validLocale);
  const toc = doc.sections.map((section) => ({ id: section.id, label: section.title }));

  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "what-is-dpi", href: "/what-is-dpi" },
  ]);

  const relatedArticles = [
    { title: dict.pages["what-is-ppi"]?.title || "What Is PPI?", href: "/what-is-ppi", description: dict.navDescriptions["what-is-ppi"] || "Understanding pixels per inch for screens" },
    { title: dict.pages["dpi-vs-ppi"]?.title || "DPI vs PPI", href: "/dpi-vs-ppi", description: dict.navDescriptions["dpi-vs-ppi"] || "Key differences explained side by side" },
    { title: dict.pages["best-dpi-for-printing"]?.title || "Best DPI for Printing", href: "/best-dpi-for-printing", description: dict.navDescriptions["best-dpi-for-printing"] || "Recommended DPI for every print type" },
    { title: dict.pages["pixels-per-inch"]?.title || "Pixels Per Inch Explained", href: "/pixels-per-inch", description: dict.navDescriptions["pixels-per-inch"] || "Complete PPI reference guide" },
  ];
  return (
    <BlogLayout
      locale={validLocale}
      title={dict.pages["what-is-dpi"]?.title || "What Is DPI?"}
      extractiveAnswer={dict.pages["what-is-dpi"]?.extractive || "DPI (dots per inch) measures print resolution - how many ink dots a printer places in one linear inch. Standard print DPI is 300 for photos, 150 for documents, and 72 for large posters. Higher DPI produces sharper, more detailed prints."}
      breadcrumbs={breadcrumbs}
      faqItems={doc.faq}
      relatedArticles={relatedArticles}
      cta={{ label: "Try the DPI Calculator", href: "/dpi-calculator" }}
      toc={toc}
      labels={{
        readyToConvert: dict.tool.readyToConvert,
        relatedArticles: dict.tool.relatedArticles,
        onThisPage: dict.nav.onThisPage,
      }}
      slug="what-is-dpi"
    >
      <StructuredDoc sections={doc.sections} />
    
    
    </BlogLayout>
  );
}
