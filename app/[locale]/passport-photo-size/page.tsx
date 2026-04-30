import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { buildAlternates, localizedPath } from "@/lib/alternates";
import { getDictionary } from "@/lib/translations";
import { BlogLayout } from "@/components/blog/BlogLayout";
import { getBreadcrumbs } from "@/lib/content-utils";
import { StructuredDoc } from "@/components/content/StructuredDoc";
import { getLocalizedDoc } from "@/lib/content/doc-types";
import { content } from "@/lib/content/passport-photo-size";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["passport-photo-size"];

  return {
    title: pageDict?.title || "passport-photo-size",
    description: pageDict?.description || "",
    alternates: buildAlternates(locale, "passport-photo-size"),
    openGraph: {
      title: pageDict?.title || "passport-photo-size",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
      images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: pageDict?.title || "passport-photo-size" }],
    },
  };
}



export default async function PassportPhotoSizePage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const doc = getLocalizedDoc(content, validLocale);
  const toc = doc.sections.map((section) => ({ id: section.id, label: section.title }));

  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "learn", href: "/learn", label: dict.nav.learn },
    { slug: "passport-photo-size", href: "/passport-photo-size" },
  ]);

  const relatedArticles = [
    { title: dict.pages["standard-image-sizes"]?.title || "Standard Image Sizes", href: "/standard-image-sizes", description: dict.navDescriptions["standard-image-sizes"] || "Photo print sizes in pixels" },
    { title: dict.pages["paper-sizes-in-pixels"]?.title || "Paper Sizes in Pixels", href: "/paper-sizes-in-pixels", description: dict.navDescriptions["paper-sizes-in-pixels"] || "A4, Letter at various DPIs" },
    { title: dict.pages["pixels-per-mm"]?.title || "Pixels Per MM", href: "/pixels-per-mm", description: dict.navDescriptions["pixels-per-mm"] || "Millimeter to pixel conversion" },
    { title: dict.pages["best-dpi-for-printing"]?.title || "Best DPI for Printing", href: "/best-dpi-for-printing", description: dict.navDescriptions["best-dpi-for-printing"] || "DPI recommendations" },
  ];
  return (
    <BlogLayout
      locale={validLocale}
      title={dict.pages["passport-photo-size"]?.title || "Passport Photo Size in Pixels"}
      extractiveAnswer={dict.pages["passport-photo-size"]?.extractive || "A US passport photo (2 x 2 inches) at 300 DPI is 600 x 600 pixels. A UK passport photo (35 x 45 mm) at 300 DPI is 413 x 531 pixels. EU standard is 35 x 45 mm (413 x 531 px). Canadian passports require 50 x 70 mm (591 x 827 px)."}
      breadcrumbs={breadcrumbs}
      faqItems={doc.faq}
      relatedArticles={relatedArticles}
      cta={{ label: "Try the Image Size Calculator", href: "/image-size-calculator" }}
      toc={toc}
      labels={{
        readyToConvert: dict.tool.readyToConvert,
        relatedArticles: dict.tool.relatedArticles,
        onThisPage: dict.nav.onThisPage,
      }}
      slug="passport-photo-size"
    >
      <StructuredDoc sections={doc.sections} />
    
    </BlogLayout>
  );
}
