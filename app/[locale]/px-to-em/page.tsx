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
import { content } from "@/lib/content/px-to-em";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["px-to-em"];

  return {
    title: pageDict?.title || "px-to-em",
    description: pageDict?.description || "",
    alternates: buildAlternates(locale, "px-to-em"),
    openGraph: {
      title: pageDict?.title || "px-to-em",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}


export default async function PxToEmPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const doc = getLocalizedDoc(content, validLocale);
  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "css-units", href: "/css-units", label: "CSS Units" },
    { slug: "px-to-em", href: "/px-to-em" },
  ]);
  const relatedTools = getRelatedTools(dict, [
    { slug: "px-to-rem", href: "/px-to-rem", icon: "🔤" },
    { slug: "px-to-pt", href: "/px-to-pt", icon: "📝" },
    { slug: "px-to-vw", href: "/px-to-vw", icon: "📏" },
    { slug: "pixels-to-inches", href: "/pixels-to-inches", icon: "📐" },
    { slug: "pixels-to-mm", href: "/pixels-to-mm", icon: "📎" },
  ]);
  return (
    <ConverterLayout
      locale={validLocale}
      title={dict.pages["px-to-em"]?.title || "PX to EM Converter"}
      description={dict.pages["px-to-em"]?.description || "Convert pixels to em units with adjustable parent font size."}
      slug="/px-to-em"
      extractiveAnswer={dict.pages["px-to-em"]?.extractive || "To convert px to em, divide the pixel value by the parent element's font size. With a 16px parent: 16px = 1em, 24px = 1.5em, 32px = 2em. Unlike rem, em is relative to the parent element, not the root."}
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
        mode="px-to-em"
        fromLabel="Pixels (px)"
        toLabel="EM"
        baseLabel="Parent Font Size (px)"
        defaultBase={16}
        formula="em = px / parent font size"
      />
    </ConverterLayout>
  );
}
