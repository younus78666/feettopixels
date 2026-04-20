import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import { ConverterLayout } from "@/components/tools/ConverterLayout";
import { CssConverter } from "./CssConverter";
import { getBreadcrumbs, getRelatedTools } from "@/lib/content-utils";
import { StructuredDoc } from "@/components/content/StructuredDoc";
import { getLocalizedDoc } from "@/lib/content/doc-types";
import { content } from "@/lib/content/px-to-rem";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["px-to-rem"];

  return {
    title: pageDict?.title || "px-to-rem",
    description: pageDict?.description || "",
    alternates: {
      canonical: `/${locale}/px-to-rem`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/px-to-rem`]),
      ),
    },
    openGraph: {
      title: pageDict?.title || "px-to-rem",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}


export default async function PxToRemPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const doc = getLocalizedDoc(content, validLocale);
  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "css-units", href: "/css-units", label: "CSS Units" },
    { slug: "px-to-rem", href: "/px-to-rem" },
  ]);
  const relatedTools = getRelatedTools(dict, [
    { slug: "px-to-em", href: "/px-to-em", icon: "🔤" },
    { slug: "px-to-pt", href: "/px-to-pt", icon: "📝" },
    { slug: "px-to-vw", href: "/px-to-vw", icon: "📏" },
    { slug: "pixels-to-inches", href: "/pixels-to-inches", icon: "📐" },
    { slug: "pixels-to-cm", href: "/pixels-to-cm", icon: "🔄" },
  ]);
  return (
    <ConverterLayout
      locale={validLocale}
      title={dict.pages["px-to-rem"]?.title || "PX to REM Converter"}
      description={dict.pages["px-to-rem"]?.description || "Convert pixels to rem units with adjustable base font size."}
      slug="/px-to-rem"
      extractiveAnswer={dict.pages["px-to-rem"]?.extractive || "To convert px to rem, divide the pixel value by the base font size. With the default 16px base: 16px = 1rem, 24px = 1.5rem, 32px = 2rem. Adjust the base if your root font size differs from 16px."}
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
        mode="px-to-rem"
        fromLabel="Pixels (px)"
        toLabel="REM"
        baseLabel="Base Font Size (px)"
        defaultBase={16}
        formula="rem = px / base font size"
      />
    </ConverterLayout>
  );
}
