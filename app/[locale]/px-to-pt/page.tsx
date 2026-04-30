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
import { content } from "@/lib/content/px-to-pt";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["px-to-pt"];

  return {
    title: pageDict?.title || "px-to-pt",
    description: pageDict?.description || "",
    alternates: buildAlternates(locale, "px-to-pt"),
    openGraph: {
      title: pageDict?.title || "px-to-pt",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
      images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: pageDict?.title || "px-to-pt" }],
    },
  };
}


export default async function PxToPtPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const doc = getLocalizedDoc(content, validLocale);
  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "css-units", href: "/css-units", label: "CSS Units" },
    { slug: "px-to-pt", href: "/px-to-pt" },
  ]);
  const relatedTools = getRelatedTools(dict, [
    { slug: "px-to-rem", href: "/px-to-rem", icon: "🔤" },
    { slug: "px-to-em", href: "/px-to-em", icon: "📝" },
    { slug: "px-to-vw", href: "/px-to-vw", icon: "📏" },
    { slug: "pixels-to-inches", href: "/pixels-to-inches", icon: "📐" },
    { slug: "dpi-calculator", href: "/dpi-calculator", icon: "🖥️" },
  ]);
  return (
    <ConverterLayout
      locale={validLocale}
      title={dict.pages["px-to-pt"]?.title || "PX to PT Converter"}
      description={dict.pages["px-to-pt"]?.description || "Convert CSS pixels to typographic points for web and print design."}
      slug="/px-to-pt"
      extractiveAnswer={dict.pages["px-to-pt"]?.extractive || "To convert pixels to points, multiply by 0.75 (or 72/96). At 96 DPI: 16px = 12pt, 24px = 18pt, 32px = 24pt. Points are the standard unit in print design (1pt = 1/72 inch), while CSS pixels are defined as 1/96 inch."}
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
        mode="px-to-pt"
        fromLabel="Pixels (px)"
        toLabel="Points (pt)"
        baseLabel="DPI"
        defaultBase={96}
        formula="pt = px x 72 / DPI"
        quickRef={[8, 10, 12, 13, 14, 16, 18, 20, 24, 28, 32, 36, 48, 64, 72, 96]}
      />
    </ConverterLayout>
  );
}
