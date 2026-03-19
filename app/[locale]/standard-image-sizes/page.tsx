import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import { BlogLayout } from "@/components/blog/BlogLayout";
import { getBreadcrumbs } from "@/lib/content-utils";
import { StructuredDoc } from "@/components/content/StructuredDoc";
import { getLocalizedDoc } from "@/lib/content/doc-types";
import { content } from "@/lib/content/standard-image-sizes";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["standard-image-sizes"];

  return {
    title: pageDict?.title || "standard-image-sizes",
    description: pageDict?.description || "",
    alternates: {
      canonical: `/${locale}/standard-image-sizes`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/standard-image-sizes`]),
      ),
    },
    openGraph: {
      title: pageDict?.title || "standard-image-sizes",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}



export default async function StandardImageSizesPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const doc = getLocalizedDoc(content, validLocale);
  const toc = doc.sections.map((section) => ({ id: section.id, label: section.title }));

  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "standard-image-sizes", href: "/standard-image-sizes" },
  ]);

  const relatedArticles = [
    { title: dict.pages["paper-sizes-in-pixels"]?.title || "Paper Sizes in Pixels", href: "/paper-sizes-in-pixels", description: dict.navDescriptions["paper-sizes-in-pixels"] || "A4, Letter, A3 at various DPIs" },
    { title: dict.pages["best-dpi-for-printing"]?.title || "Best DPI for Printing", href: "/best-dpi-for-printing", description: dict.navDescriptions["best-dpi-for-printing"] || "DPI recommendations by print type" },
    { title: dict.pages["passport-photo-size"]?.title || "Passport Photo Size", href: "/passport-photo-size", description: dict.navDescriptions["passport-photo-size"] || "Passport and ID photo dimensions" },
    { title: dict.pages["social-media-image-sizes"]?.title || "Social Media Image Sizes", href: "/social-media-image-sizes", description: dict.navDescriptions["social-media-image-sizes"] || "Platform-specific image dimensions" },
  ];
  return (
    <BlogLayout
      locale={validLocale}
      title={dict.pages["standard-image-sizes"]?.title || "Standard Image Sizes in Pixels"}
      extractiveAnswer={dict.pages["standard-image-sizes"]?.extractive || "A 4x6 photo at 300 DPI is 1200 x 1800 pixels. An 8x10 at 300 DPI is 2400 x 3000 pixels. A 24x36 poster at 300 DPI is 7200 x 10800 pixels. Multiply inches by DPI to calculate pixel dimensions for any standard print size."}
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
      slug="standard-image-sizes"
    >
      <StructuredDoc sections={doc.sections} />
    
    </BlogLayout>
  );
}
