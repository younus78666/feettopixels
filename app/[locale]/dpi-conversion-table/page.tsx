import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { buildAlternates, localizedPath } from "@/lib/alternates";
import { getDictionary } from "@/lib/translations";
import { BlogLayout } from "@/components/blog/BlogLayout";
import { getBreadcrumbs } from "@/lib/content-utils";
import { StructuredDoc } from "@/components/content/StructuredDoc";
import { getLocalizedDoc } from "@/lib/content/doc-types";
import { content } from "@/lib/content/dpi-conversion-table";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["dpi-conversion-table"];

  return {
    title: pageDict?.title || "dpi-conversion-table",
    description: pageDict?.description || "",
    alternates: buildAlternates(locale, "dpi-conversion-table"),
    openGraph: {
      title: pageDict?.title || "dpi-conversion-table",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}



export default async function DpiConversionTablePage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const doc = getLocalizedDoc(content, validLocale);
  const toc = doc.sections.map((section) => ({ id: section.id, label: section.title }));

  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "learn", href: "/learn", label: dict.nav.learn },
    { slug: "dpi-conversion-table", href: "/dpi-conversion-table" },
  ]);

  const relatedArticles = [
    { title: dict.pages["pixels-per-inch"]?.title || "Pixels Per Inch Explained", href: "/pixels-per-inch", description: dict.navDescriptions["pixels-per-inch"] || "Complete PPI reference guide" },
    { title: dict.pages["pixels-per-cm"]?.title || "Pixels Per CM", href: "/pixels-per-cm", description: dict.navDescriptions["pixels-per-cm"] || "CM-specific pixel density" },
    { title: dict.pages["pixels-per-mm"]?.title || "Pixels Per MM", href: "/pixels-per-mm", description: dict.navDescriptions["pixels-per-mm"] || "MM-specific pixel density" },
    { title: dict.pages["pixels-per-foot"]?.title || "Pixels Per Foot", href: "/pixels-per-foot", description: dict.navDescriptions["pixels-per-foot"] || "Large format pixel density" },
  ];
  return (
    <BlogLayout
      locale={validLocale}
      title={dict.pages["dpi-conversion-table"]?.title || "DPI Conversion Table"}
      extractiveAnswer={dict.pages["dpi-conversion-table"]?.extractive || "At 300 DPI, there are 300 pixels per inch, 118.11 pixels per cm, and 11.81 pixels per mm. At 96 DPI, there are 96 pixels per inch, 37.80 per cm, and 3.78 per mm. Use DPI / 2.54 for cm and DPI / 25.4 for mm."}
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
      slug="dpi-conversion-table"
    >
      <StructuredDoc sections={doc.sections} />
    
    
    </BlogLayout>
  );
}
