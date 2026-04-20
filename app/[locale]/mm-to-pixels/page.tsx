import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { buildAlternates, localizedPath } from "@/lib/alternates";
import { getDictionary } from "@/lib/translations";
import { ConverterLayout } from "@/components/tools/ConverterLayout";
import { UnitConverter } from "@/components/tools/UnitConverter";
import { getBreadcrumbs, getRelatedTools } from "@/lib/content-utils";
import { getPageContent } from "@/lib/content/types";
import { content } from "@/lib/content/mm-to-pixels";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["mm-to-pixels"];

  return {
    title: pageDict?.title || "mm-to-pixels",
    description: pageDict?.description || "",
    alternates: buildAlternates(locale, "mm-to-pixels"),
    openGraph: {
      title: pageDict?.title || "mm-to-pixels",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}

export default async function MmToPixelsPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const pc = getPageContent(content, validLocale);
  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "pixel-converter", href: "/pixel-converter" },
    { slug: "mm-to-pixels", href: "/mm-to-pixels" },
  ]);
  const relatedTools = getRelatedTools(dict, [
    { slug: "pixels-to-mm", href: "/pixels-to-mm", icon: "🔄" },
    { slug: "cm-to-pixels", href: "/cm-to-pixels", icon: "📏" },
    { slug: "inches-to-pixels", href: "/inches-to-pixels", icon: "📐" },
    { slug: "pixels-to-cm", href: "/pixels-to-cm", icon: "🔄" },
    { slug: "pixels-to-inches", href: "/pixels-to-inches", icon: "📐" },
  ]);
  return (
    <ConverterLayout
      locale={validLocale}
      title={dict.pages["mm-to-pixels"]?.title || "Millimeters to Pixels Converter"}
      description={dict.pages["mm-to-pixels"]?.description || "Convert millimeters to pixel dimensions with precise DPI control."}
      slug="/mm-to-pixels"
      extractiveAnswer={dict.pages["mm-to-pixels"]?.extractive || "To convert millimeters to pixels, multiply millimeters by DPI and divide by 25.4. At 96 DPI, 100 mm equals 378 pixels. At 300 DPI, 100 mm equals 1,181 pixels."}
      breadcrumbs={breadcrumbs}
      relatedTools={relatedTools}
      faqItems={pc.faq}
      labels={{
        relatedTools: dict.tool.relatedTools,
        faq: dict.tool.faq,
      }}
      content={
        <div>
          <h2>{pc.body.heading1}</h2>
          <p>{pc.body.p1}</p>
          <p><strong>{pc.body.formula}</strong></p>
          <p>{pc.body.p2}</p>

          <h3>{pc.body.heading2}</h3>
          <ul>
            <li>{pc.body.li1}</li>
            <li>{pc.body.li2}</li>
            <li>{pc.body.li3}</li>
            <li>{pc.body.li4}</li>
          </ul>

          <h3>{pc.body.heading3}</h3>
          <ul>
            <li>{pc.body.li5}</li>
            <li>{pc.body.li6}</li>
            <li>{pc.body.li7}</li>
            <li>{pc.body.li8}</li>
          </ul>

          <h2>{pc.body.heading4}</h2>
          <p>{pc.body.p3}</p>

          <h2>{pc.body.heading5}</h2>
          <p>{pc.body.p4}</p>

          <h2>{pc.body.heading6}</h2>
          <p>{pc.body.p5}</p>
        </div>
      }
    >
      <UnitConverter
        locale={validLocale}
        fromUnit="Millimeters"
        toUnit="Pixels"
        conversionType="mm-to-px"
        formula="pixels = (mm x DPI) / 25.4"
        commonValues={[1, 5, 10, 25, 50, 55, 85, 100, 210, 297]}
      />
    </ConverterLayout>
  );
}
