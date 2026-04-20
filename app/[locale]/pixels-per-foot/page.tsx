import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { buildAlternates, localizedPath } from "@/lib/alternates";
import { getDictionary } from "@/lib/translations";
import { BlogLayout } from "@/components/blog/BlogLayout";
import { getBreadcrumbs } from "@/lib/content-utils";
import { StructuredDoc } from "@/components/content/StructuredDoc";
import { getLocalizedDoc } from "@/lib/content/doc-types";
import { content } from "@/lib/content/pixels-per-foot";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["pixels-per-foot"];

  return {
    title: pageDict?.title || "pixels-per-foot",
    description: pageDict?.description || "",
    alternates: buildAlternates(locale, "pixels-per-foot"),
    openGraph: {
      title: pageDict?.title || "pixels-per-foot",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}



export default async function PixelsPerFootPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const doc = getLocalizedDoc(content, validLocale);
  const toc = doc.sections.map((section) => ({ id: section.id, label: section.title }));

  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "pixels-per-foot", href: "/pixels-per-foot" },
  ]);

  const relatedArticles = [
    { title: dict.pages["pixels-per-inch"]?.title || "Pixels Per Inch Explained", href: "/pixels-per-inch", description: dict.navDescriptions["pixels-per-inch"] || "Complete PPI reference" },
    { title: dict.pages["pixels-per-cm"]?.title || "Pixels Per CM", href: "/pixels-per-cm", description: dict.navDescriptions["pixels-per-cm"] || "Metric pixel density" },
    { title: dict.pages["best-dpi-for-printing"]?.title || "Best DPI for Printing", href: "/best-dpi-for-printing", description: dict.navDescriptions["best-dpi-for-printing"] || "DPI recommendations by type" },
    { title: dict.pages["standard-image-sizes"]?.title || "Standard Image Sizes", href: "/standard-image-sizes", description: dict.navDescriptions["standard-image-sizes"] || "Photo print pixel dimensions" },
  ];
  return (
    <BlogLayout
      locale={validLocale}
      title={dict.pages["pixels-per-foot"]?.title || "Pixels Per Foot"}
      extractiveAnswer={dict.pages["pixels-per-foot"]?.extractive || "At 96 DPI, one foot contains 1,152 pixels (96 x 12 inches). At 300 DPI, one foot is 3,600 pixels. At 72 DPI (common for large format), one foot is 864 pixels. Multiply DPI by 12 to get pixels per foot."}
      breadcrumbs={breadcrumbs}
      faqItems={doc.faq}
      relatedArticles={relatedArticles}
      cta={{ label: "Try the Feet to Pixels Converter", href: "/feet-to-pixels" }}
      toc={toc}
      labels={{
        readyToConvert: dict.tool.readyToConvert,
        relatedArticles: dict.tool.relatedArticles,
        onThisPage: dict.nav.onThisPage,
      }}
      slug="pixels-per-foot"
    >
      <StructuredDoc sections={doc.sections} />
    
    
    </BlogLayout>
  );
}
