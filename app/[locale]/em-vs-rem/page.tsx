import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { buildAlternates, localizedPath } from "@/lib/alternates";
import { getDictionary } from "@/lib/translations";
import { BlogLayout } from "@/components/blog/BlogLayout";
import { getBreadcrumbs } from "@/lib/content-utils";
import { StructuredDoc } from "@/components/content/StructuredDoc";
import { getLocalizedDoc } from "@/lib/content/doc-types";
import { content } from "@/lib/content/em-vs-rem";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["em-vs-rem"];

  return {
    title: pageDict?.title || "em-vs-rem",
    description: pageDict?.description || "",
    alternates: buildAlternates(locale, "em-vs-rem"),
    openGraph: {
      title: pageDict?.title || "em-vs-rem",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
      images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: pageDict?.title || "em-vs-rem" }],
    },
  };
}



export default async function EmVsRemPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const doc = getLocalizedDoc(content, validLocale);
  const toc = doc.sections.map((section) => ({ id: section.id, label: section.title }));

  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "learn", href: "/learn", label: dict.nav.learn },
    { slug: "em-vs-rem", href: "/em-vs-rem" },
  ]);

  const relatedArticles = [
    { title: dict.pages["what-is-a-pixel"]?.title || "What Is a Pixel?", href: "/what-is-a-pixel", description: dict.navDescriptions["what-is-a-pixel"] || "The fundamental unit of digital images" },
    { title: dict.pages["pixels-per-inch"]?.title || "Pixels Per Inch Explained", href: "/pixels-per-inch", description: dict.navDescriptions["pixels-per-inch"] || "PPI reference guide" },
    { title: dict.pages["common-resolutions"]?.title || "Common Screen Resolutions", href: "/common-resolutions", description: dict.navDescriptions["common-resolutions"] || "Display resolution reference" },
  ];
  return (
    <BlogLayout
      locale={validLocale}
      title={dict.pages["em-vs-rem"]?.title || "EM vs REM in CSS"}
      extractiveAnswer={dict.pages["em-vs-rem"]?.extractive || "REM is relative to the root element's font size (default 16px). EM is relative to the parent element's font size. Use rem for consistent, predictable sizing across your site. Use em for proportional spacing within components."}
      breadcrumbs={breadcrumbs}
      faqItems={doc.faq}
      relatedArticles={relatedArticles}
      cta={{ label: "Try the PX to REM Converter", href: "/px-to-rem" }}
      toc={toc}
      labels={{
        readyToConvert: dict.tool.readyToConvert,
        relatedArticles: dict.tool.relatedArticles,
        onThisPage: dict.nav.onThisPage,
      }}
      slug="em-vs-rem"
    >
      <StructuredDoc sections={doc.sections} />
    
    
    </BlogLayout>
  );
}
