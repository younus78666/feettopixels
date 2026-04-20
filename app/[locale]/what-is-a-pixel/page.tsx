import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { buildAlternates, localizedPath } from "@/lib/alternates";
import { getDictionary } from "@/lib/translations";
import { BlogLayout } from "@/components/blog/BlogLayout";
import { getBreadcrumbs } from "@/lib/content-utils";
import { StructuredDoc } from "@/components/content/StructuredDoc";
import { getLocalizedDoc } from "@/lib/content/doc-types";
import { content } from "@/lib/content/what-is-a-pixel";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["what-is-a-pixel"];

  return {
    title: pageDict?.title || "what-is-a-pixel",
    description: pageDict?.description || "",
    alternates: buildAlternates(locale, "what-is-a-pixel"),
    openGraph: {
      title: pageDict?.title || "what-is-a-pixel",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}



export default async function WhatIsAPixelPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const doc = getLocalizedDoc(content, validLocale);
  const toc = doc.sections.map((section) => ({ id: section.id, label: section.title }));

  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "learn", href: "/learn", label: dict.nav.learn },
    { slug: "what-is-a-pixel", href: "/what-is-a-pixel" },
  ]);

  const relatedArticles = [
    { title: dict.pages["pixels-per-inch"]?.title || "Pixels Per Inch Explained", href: "/pixels-per-inch", description: dict.navDescriptions["pixels-per-inch"] || "Complete PPI reference guide" },
    { title: dict.pages["what-is-dpi"]?.title || "What Is DPI?", href: "/what-is-dpi", description: dict.navDescriptions["what-is-dpi"] || "Dots per inch for print" },
    { title: dict.pages["common-resolutions"]?.title || "Common Screen Resolutions", href: "/common-resolutions", description: dict.navDescriptions["common-resolutions"] || "From HD to 8K" },
    { title: dict.pages["em-vs-rem"]?.title || "EM vs REM in CSS", href: "/em-vs-rem", description: dict.navDescriptions["em-vs-rem"] || "CSS unit comparison guide" },
  ];
  return (
    <BlogLayout
      locale={validLocale}
      title={dict.pages["what-is-a-pixel"]?.title || "What Is a Pixel?"}
      extractiveAnswer={dict.pages["what-is-a-pixel"]?.extractive || "A pixel (short for 'picture element') is the smallest controllable unit of a digital image or display. Each pixel holds color information and, together, millions of pixels form the images you see on screens. Pixel size varies by display density."}
      breadcrumbs={breadcrumbs}
      faqItems={doc.faq}
      relatedArticles={relatedArticles}
      cta={{ label: "Try the Pixel Converter", href: "/pixel-converter" }}
      toc={toc}
      labels={{
        readyToConvert: dict.tool.readyToConvert,
        relatedArticles: dict.tool.relatedArticles,
        onThisPage: dict.nav.onThisPage,
      }}
      slug="what-is-a-pixel"
    >
      <StructuredDoc sections={doc.sections} />
    
    
    </BlogLayout>
  );
}
