import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { buildAlternates, localizedPath } from "@/lib/alternates";
import { getDictionary } from "@/lib/translations";
import { BlogLayout } from "@/components/blog/BlogLayout";
import { getBreadcrumbs } from "@/lib/content-utils";
import { StructuredDoc } from "@/components/content/StructuredDoc";
import { getLocalizedDoc } from "@/lib/content/doc-types";
import { content } from "@/lib/content/paper-sizes-in-pixels";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["paper-sizes-in-pixels"];

  return {
    title: pageDict?.title || "paper-sizes-in-pixels",
    description: pageDict?.description || "",
    alternates: buildAlternates(locale, "paper-sizes-in-pixels"),
    openGraph: {
      title: pageDict?.title || "paper-sizes-in-pixels",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}



export default async function PaperSizesInPixelsPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const doc = getLocalizedDoc(content, validLocale);
  const toc = doc.sections.map((section) => ({ id: section.id, label: section.title }));

  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "learn", href: "/learn", label: dict.nav.learn },
    { slug: "paper-sizes-in-pixels", href: "/paper-sizes-in-pixels" },
  ]);

  const relatedArticles = [
    { title: dict.pages["standard-image-sizes"]?.title || "Standard Image Sizes", href: "/standard-image-sizes", description: dict.navDescriptions["standard-image-sizes"] || "Photo print sizes in pixels" },
    { title: dict.pages["best-dpi-for-printing"]?.title || "Best DPI for Printing", href: "/best-dpi-for-printing", description: dict.navDescriptions["best-dpi-for-printing"] || "DPI recommendations by print type" },
    { title: dict.pages["pixels-per-inch"]?.title || "Pixels Per Inch Explained", href: "/pixels-per-inch", description: dict.navDescriptions["pixels-per-inch"] || "Complete PPI reference" },
    { title: dict.pages["dpi-conversion-table"]?.title || "DPI Conversion Table", href: "/dpi-conversion-table", description: dict.navDescriptions["dpi-conversion-table"] || "Comprehensive DPI reference" },
  ];
  return (
    <BlogLayout
      locale={validLocale}
      title={dict.pages["paper-sizes-in-pixels"]?.title || "Paper Sizes in Pixels"}
      extractiveAnswer={dict.pages["paper-sizes-in-pixels"]?.extractive || "A4 paper at 300 DPI is 2480 x 3508 pixels. US Letter at 300 DPI is 2550 x 3300 pixels. The pixel dimensions of any paper size depend on the DPI: multiply the paper width in inches by the DPI to get the width in pixels."}
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
      slug="paper-sizes-in-pixels"
    >
      <StructuredDoc sections={doc.sections} />
    
    </BlogLayout>
  );
}
