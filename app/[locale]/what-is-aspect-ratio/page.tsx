import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { buildAlternates, localizedPath } from "@/lib/alternates";
import { getDictionary } from "@/lib/translations";
import { BlogLayout } from "@/components/blog/BlogLayout";
import { getBreadcrumbs } from "@/lib/content-utils";
import { StructuredDoc } from "@/components/content/StructuredDoc";
import { getLocalizedDoc } from "@/lib/content/doc-types";
import { content } from "@/lib/content/what-is-aspect-ratio";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["what-is-aspect-ratio"];

  return {
    title: pageDict?.title || "What Is Aspect Ratio?",
    description: pageDict?.description || "",
    alternates: buildAlternates(locale, "what-is-aspect-ratio"),
    openGraph: {
      title: pageDict?.title || "What Is Aspect Ratio?",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: pageDict?.title || "What Is Aspect Ratio?" }],
    },
  };
}

export default async function WhatIsAspectRatioPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const doc = getLocalizedDoc(content, validLocale);
  const toc = doc.sections.map((section) => ({ id: section.id, label: section.title }));

  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "learn", href: "/learn", label: dict.nav.learn },
    { slug: "what-is-aspect-ratio", href: "/what-is-aspect-ratio" },
  ]);

  const relatedArticles = [
    { title: dict.pages["aspect-ratio-calculator"]?.title || "Aspect Ratio Calculator", href: "/aspect-ratio-calculator", description: dict.navDescriptions["aspect-ratio-calculator"] || "Find and convert aspect ratios" },
    { title: dict.pages["what-is-a-pixel"]?.title || "What Is a Pixel?", href: "/what-is-a-pixel", description: dict.navDescriptions["what-is-a-pixel"] || "The building block of digital images" },
    { title: dict.pages["common-resolutions"]?.title || "Common Resolutions", href: "/common-resolutions", description: dict.navDescriptions["common-resolutions"] || "1080p, 4K, 5K explained" },
    { title: dict.pages["social-media-image-sizes"]?.title || "Social Media Image Sizes", href: "/social-media-image-sizes", description: dict.navDescriptions["social-media-image-sizes"] || "Instagram, Facebook, YouTube sizes" },
  ];

  return (
    <BlogLayout
      locale={validLocale}
      title={dict.pages["what-is-aspect-ratio"]?.title || "What Is Aspect Ratio?"}
      extractiveAnswer={dict.pages["what-is-aspect-ratio"]?.extractive || "Aspect ratio is the proportional relationship between width and height, expressed as W:H. 16:9 means 16 units wide for every 9 units tall. Common ratios: 16:9 (widescreen video), 4:3 (classic TV), 1:1 (square), 9:16 (portrait mobile)."}
      breadcrumbs={breadcrumbs}
      faqItems={doc.faq}
      relatedArticles={relatedArticles}
      cta={{ label: "Try the Aspect Ratio Calculator", href: "/aspect-ratio-calculator" }}
      toc={toc}
      labels={{
        readyToConvert: dict.tool.readyToConvert,
        relatedArticles: dict.tool.relatedArticles,
        onThisPage: dict.nav.onThisPage,
      }}
      slug="what-is-aspect-ratio"
    >
      <StructuredDoc sections={doc.sections} />
    </BlogLayout>
  );
}
