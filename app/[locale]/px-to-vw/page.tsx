import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { buildAlternates, localizedPath } from "@/lib/alternates";
import { getDictionary } from "@/lib/translations";
import { ConverterLayout } from "@/components/tools/ConverterLayout";
import { CssConverter } from "@/app/[locale]/px-to-rem/CssConverter";
import { getBreadcrumbs, getRelatedTools } from "@/lib/content-utils";
import { StructuredDoc } from "@/components/content/StructuredDoc";
import { getLocalizedDoc } from "@/lib/content/doc-types";
import { content } from "@/lib/content/px-to-vw";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["px-to-vw"];

  return {
    title: pageDict?.title || "px-to-vw",
    description: pageDict?.description || "",
    alternates: buildAlternates(locale, "px-to-vw"),
    openGraph: {
      title: pageDict?.title || "px-to-vw",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}


export default async function PxToVwPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const doc = getLocalizedDoc(content, validLocale);
  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "css-units", href: "/css-units", label: "CSS Units" },
    { slug: "px-to-vw", href: "/px-to-vw" },
  ]);
  const relatedTools = getRelatedTools(dict, [
    { slug: "px-to-rem", href: "/px-to-rem", icon: "🔤" },
    { slug: "px-to-em", href: "/px-to-em", icon: "📝" },
    { slug: "px-to-pt", href: "/px-to-pt", icon: "📏" },
    { slug: "screen-resolution-checker", href: "/screen-resolution-checker", icon: "📺" },
    { slug: "aspect-ratio-calculator", href: "/aspect-ratio-calculator", icon: "📐" },
  ]);
  return (
    <ConverterLayout
      locale={validLocale}
      title={dict.pages["px-to-vw"]?.title || "PX to VW Converter"}
      description={dict.pages["px-to-vw"]?.description || "Convert pixels to viewport width units for fluid responsive design."}
      slug="/px-to-vw"
      extractiveAnswer={dict.pages["px-to-vw"]?.extractive || "To convert px to vw, use the formula: vw = (px / viewport width) x 100. On a 1440px viewport: 16px = 1.111vw, 100px = 6.944vw. VW units create fluid layouts that scale with the browser width. Adjust the viewport width to match your design target."}
      breadcrumbs={breadcrumbs}
      relatedTools={relatedTools}
      faqItems={doc.faq}
      labels={{
        relatedTools: dict.tool.relatedTools,
        faq: dict.tool.faq,
      }}
      content={<StructuredDoc sections={doc.sections} />}
    >
      <CssConverter locale={validLocale}
        mode="px-to-vw"
        fromLabel="Pixels (px)"
        toLabel="VW"
        baseLabel="Viewport Width (px)"
        defaultBase={1440}
        formula="vw = (px / viewport width) x 100"
        autoDetectBase
      />
    </ConverterLayout>
  );
}
