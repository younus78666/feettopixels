import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { buildAlternates, localizedPath } from "@/lib/alternates";
import { getDictionary } from "@/lib/translations";
import { BlogLayout } from "@/components/blog/BlogLayout";
import { getBreadcrumbs } from "@/lib/content-utils";
import { StructuredDoc } from "@/components/content/StructuredDoc";
import { getLocalizedDoc } from "@/lib/content/doc-types";
import { content } from "@/lib/content/best-dpi-for-scanning";

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
  const pageDict = dict.pages["best-dpi-for-scanning"];

  return {
    title: pageDict?.title || "Best DPI for Scanning Photos and Documents",
    description: pageDict?.description || "",
    alternates: buildAlternates(locale, "best-dpi-for-scanning"),
    openGraph: {
      title: pageDict?.title || "Best DPI for Scanning",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: pageDict?.title || "Best DPI for Scanning" }],
    },
  };
}

export default async function BestDpiForScanningPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const doc = getLocalizedDoc(content, validLocale);
  const toc = doc.sections.map((section) => ({ id: section.id, label: section.title }));

  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "learn", href: "/learn", label: dict.nav.learn },
    { slug: "best-dpi-for-scanning", href: "/best-dpi-for-scanning" },
  ]);

  const relatedArticles = [
    { title: dict.pages["what-is-dpi"]?.title || "What Is DPI?", href: "/what-is-dpi", description: dict.navDescriptions["what-is-dpi"] || "Understanding dots per inch" },
    { title: dict.pages["best-dpi-for-printing"]?.title || "Best DPI for Printing", href: "/best-dpi-for-printing", description: dict.navDescriptions["best-dpi-for-printing"] || "Recommended DPI for every print type" },
    { title: dict.pages["image-dpi-checker"]?.title || "Image DPI Checker", href: "/image-dpi-checker", description: dict.navDescriptions["image-dpi-checker"] || "Check DPI of any image file" },
    { title: dict.pages["standard-image-sizes"]?.title || "Standard Image Sizes", href: "/standard-image-sizes", description: dict.navDescriptions["standard-image-sizes"] || "Photo print sizes in pixels" },
  ];

  return (
    <BlogLayout
      locale={validLocale}
      title={dict.pages["best-dpi-for-scanning"]?.title || "Best DPI for Scanning Photos and Documents"}
      extractiveAnswer={dict.pages["best-dpi-for-scanning"]?.extractive || "Scan photos at 600 DPI for archiving. Use 300 DPI for digital sharing. Scan 35mm slides at 2400-4000 DPI. Scan documents at 300 DPI for OCR. Higher DPI creates larger files but allows bigger prints."}
      breadcrumbs={breadcrumbs}
      faqItems={doc.faq}
      relatedArticles={relatedArticles}
      cta={{ label: "Check Image DPI", href: "/image-dpi-checker" }}
      toc={toc}
      labels={{
        readyToConvert: dict.tool.readyToConvert,
        relatedArticles: dict.tool.relatedArticles,
        onThisPage: dict.nav.onThisPage,
      }}
      slug="best-dpi-for-scanning"
    >
      <StructuredDoc sections={doc.sections} />
    </BlogLayout>
  );
}
