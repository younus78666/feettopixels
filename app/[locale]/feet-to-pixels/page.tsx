import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { buildAlternates, localizedPath } from "@/lib/alternates";
import { getDictionary } from "@/lib/translations";
import { ConverterLayout } from "@/components/tools/ConverterLayout";
import { UnitConverter } from "@/components/tools/UnitConverter";
import { getBreadcrumbs, getRelatedTools } from "@/lib/content-utils";
import { getPageContent } from "@/lib/content/types";
import { content } from "@/lib/content/feet-to-pixels";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["feet-to-pixels"];

  return {
    title: pageDict?.title || "feet-to-pixels",
    description: pageDict?.description || "",
    alternates: buildAlternates(locale, "feet-to-pixels"),
    openGraph: {
      title: pageDict?.title || "feet-to-pixels",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
      images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: pageDict?.title || "feet-to-pixels" }],
    },
  };
}

export default async function FeetToPixelsPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const pc = getPageContent(content, validLocale);
  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "pixel-converter", href: "/pixel-converter" },
    { slug: "feet-to-pixels", href: "/feet-to-pixels" },
  ]);
  const relatedTools = getRelatedTools(dict, [
    { slug: "pixels-to-feet", href: "/pixels-to-feet", icon: "🔄" },
    { slug: "inches-to-pixels", href: "/inches-to-pixels", icon: "📐" },
    { slug: "pixels-to-inches", href: "/pixels-to-inches", icon: "📏" },
    { slug: "cm-to-pixels", href: "/cm-to-pixels", icon: "📏" },
    { slug: "mm-to-pixels", href: "/mm-to-pixels", icon: "📎" },
  ]);
  return (
    <ConverterLayout
      locale={validLocale}
      title={dict.pages["feet-to-pixels"]?.title || "Feet to Pixels Converter"}
      description={dict.pages["feet-to-pixels"]?.description || "Convert feet to pixel dimensions with DPI control for large-format design."}
      slug="/feet-to-pixels"
      extractiveAnswer={dict.pages["feet-to-pixels"]?.extractive || "To convert feet to pixels, multiply feet by 12 (inches per foot) then by DPI. At 96 DPI, 3 feet equals 3,456 pixels. At 150 DPI, 3 feet equals 5,400 pixels."}
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

          <h3>{pc.body.heading4}</h3>
          <ul>
            <li>{pc.body.li9}</li>
            <li>{pc.body.li10}</li>
            <li>{pc.body.li11}</li>
            <li>{pc.body.li12}</li>
          </ul>

          <h2>{pc.body.heading5}</h2>
          <p>{pc.body.p3}</p>

          <h2>{pc.body.heading6}</h2>
          <p>{pc.body.p4}</p>

          <h2>{pc.body.heading7}</h2>
          <p>{pc.body.p5}</p>
        </div>
      }
    >
      <UnitConverter
        locale={validLocale}
        fromUnit="Feet"
        toUnit="Pixels"
        conversionType="ft-to-px"
        formula="pixels = feet x 12 x DPI"
        commonValues={[0.5, 1, 2, 3, 4, 5, 6, 8, 10, 12]}
      />
    </ConverterLayout>
  );
}
