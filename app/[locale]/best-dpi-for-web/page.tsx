import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { buildAlternates, localizedPath } from "@/lib/alternates";
import { getDictionary } from "@/lib/translations";
import { BlogLayout } from "@/components/blog/BlogLayout";
import { getBreadcrumbs } from "@/lib/content-utils";
import { StructuredDoc } from "@/components/content/StructuredDoc";
import { getLocalizedDoc } from "@/lib/content/doc-types";
import { content } from "@/lib/content/best-dpi-for-web";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["best-dpi-for-web"];

  return {
    title: pageDict?.title || "best-dpi-for-web",
    description: pageDict?.description || "",
    alternates: buildAlternates(locale, "best-dpi-for-web"),
    openGraph: {
      title: pageDict?.title || "best-dpi-for-web",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}



export default async function BestDpiForWebPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const doc = getLocalizedDoc(content, validLocale);
  const toc = doc.sections.map((section) => ({ id: section.id, label: section.title }));

  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "learn", href: "/learn", label: dict.nav.learn },
    { slug: "best-dpi-for-web", href: "/best-dpi-for-web" },
  ]);

  const relatedArticles = [
    { title: dict.pages["what-is-dpi"]?.title || "What Is DPI?", href: "/what-is-dpi", description: dict.navDescriptions["what-is-dpi"] || "Complete DPI guide" },
    { title: dict.pages["best-dpi-for-printing"]?.title || "Best DPI for Printing", href: "/best-dpi-for-printing", description: dict.navDescriptions["best-dpi-for-printing"] || "DPI recommendations for print" },
    { title: dict.pages["social-media-image-sizes"]?.title || "Social Media Image Sizes", href: "/social-media-image-sizes", description: dict.navDescriptions["social-media-image-sizes"] || "Platform-specific dimensions" },
    { title: dict.pages["dpi-vs-ppi"]?.title || "DPI vs PPI", href: "/dpi-vs-ppi", description: dict.navDescriptions["dpi-vs-ppi"] || "Understanding the difference" },
  ];
  return (
    <BlogLayout
      locale={validLocale}
      title={dict.pages["best-dpi-for-web"]?.title || "Best DPI for Web Images"}
      extractiveAnswer={dict.pages["best-dpi-for-web"]?.extractive || "DPI does not affect how images display on the web. Browsers render images based on pixel dimensions only, ignoring the DPI metadata in image files. Focus on pixel dimensions, file format (WebP/AVIF), and compression for web optimization."}
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
      slug="best-dpi-for-web"
    >
      <StructuredDoc sections={doc.sections} />
    
    </BlogLayout>
  );
}
