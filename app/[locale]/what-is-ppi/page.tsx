import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import { BlogLayout } from "@/components/blog/BlogLayout";
import { getBreadcrumbs } from "@/lib/content-utils";
import { StructuredDoc } from "@/components/content/StructuredDoc";
import { getLocalizedDoc } from "@/lib/content/doc-types";
import { content } from "@/lib/content/what-is-ppi";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["what-is-ppi"];

  return {
    title: pageDict?.title || "what-is-ppi",
    description: pageDict?.description || "",
    alternates: {
      canonical: `/${locale}/what-is-ppi`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/what-is-ppi`]),
      ),
    },
    openGraph: {
      title: pageDict?.title || "what-is-ppi",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}



export default async function WhatIsPpiPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const doc = getLocalizedDoc(content, validLocale);
  const toc = doc.sections.map((section) => ({ id: section.id, label: section.title }));

  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "learn", href: "/learn", label: dict.nav.learn },
    { slug: "what-is-ppi", href: "/what-is-ppi" },
  ]);

  const relatedArticles = [
    { title: dict.pages["what-is-dpi"]?.title || "What Is DPI?", href: "/what-is-dpi", description: dict.navDescriptions["what-is-dpi"] || "Dots per inch for print explained" },
    { title: dict.pages["dpi-vs-ppi"]?.title || "DPI vs PPI", href: "/dpi-vs-ppi", description: dict.navDescriptions["dpi-vs-ppi"] || "Side-by-side comparison" },
    { title: dict.pages["pixels-per-inch"]?.title || "Pixels Per Inch Guide", href: "/pixels-per-inch", description: dict.navDescriptions["pixels-per-inch"] || "Comprehensive PPI reference tables" },
    { title: dict.pages["common-resolutions"]?.title || "Common Screen Resolutions", href: "/common-resolutions", description: dict.navDescriptions["common-resolutions"] || "HD to 8K resolution reference" },
  ];
  return (
    <BlogLayout
      locale={validLocale}
      title={dict.pages["what-is-ppi"]?.title || "What Is PPI?"}
      extractiveAnswer={dict.pages["what-is-ppi"]?.extractive || "PPI (pixels per inch) measures the pixel density of a screen or digital image. It tells you how many pixels are packed into each linear inch. Higher PPI means sharper visuals. Typical values are 96 PPI for desktop monitors and 326-460 PPI for smartphones."}
      breadcrumbs={breadcrumbs}
      faqItems={doc.faq}
      relatedArticles={relatedArticles}
      cta={{ label: "Try the PPI Calculator", href: "/ppi-calculator" }}
      toc={toc}
      labels={{
        readyToConvert: dict.tool.readyToConvert,
        relatedArticles: dict.tool.relatedArticles,
        onThisPage: dict.nav.onThisPage,
      }}
      slug="what-is-ppi"
    >
      <StructuredDoc sections={doc.sections} />
    
    
    </BlogLayout>
  );
}
