import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import { ConverterLayout } from "@/components/tools/ConverterLayout";
import { UnitConverter } from "@/components/tools/UnitConverter";
import { getBreadcrumbs, getRelatedTools } from "@/lib/content-utils";
import { getPageContent } from "@/lib/content/types";
import { content } from "@/lib/content/inches-to-pixels";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["inches-to-pixels"];

  return {
    title: pageDict?.title || "inches-to-pixels",
    description: pageDict?.description || "",
    alternates: {
      canonical: `/${locale}/inches-to-pixels`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/inches-to-pixels`]),
      ),
    },
    openGraph: {
      title: pageDict?.title || "inches-to-pixels",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}

export default async function InchesToPixelsPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const pc = getPageContent(content, validLocale);
  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "pixel-converter", href: "/pixel-converter" },
    { slug: "inches-to-pixels", href: "/inches-to-pixels" },
  ]);
  const relatedTools = getRelatedTools(dict, [
    { slug: "pixels-to-inches", href: "/pixels-to-inches", icon: "🔄" },
    { slug: "cm-to-pixels", href: "/cm-to-pixels", icon: "📏" },
    { slug: "mm-to-pixels", href: "/mm-to-pixels", icon: "📎" },
    { slug: "feet-to-pixels", href: "/feet-to-pixels", icon: "📐" },
    { slug: "pixels-to-cm", href: "/pixels-to-cm", icon: "🔄" },
  ]);
  return (
    <ConverterLayout
      locale={validLocale}
      title={dict.pages["inches-to-pixels"]?.title || "Inches to Pixels Converter"}
      description={dict.pages["inches-to-pixels"]?.description || "Convert inches to pixel dimensions with DPI control for web and print design."}
      slug="/inches-to-pixels"
      extractiveAnswer={dict.pages["inches-to-pixels"]?.extractive || "To convert inches to pixels, multiply the inch value by DPI. At 96 DPI (web standard), 10 inches equals 960 pixels. At 300 DPI (print quality), 10 inches equals 3,000 pixels."}
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
          <ul>
            <li>{pc.body.li9}</li>
            <li>{pc.body.li10}</li>
            <li>{pc.body.li11}</li>
            <li>{pc.body.li12}</li>
            <li>{pc.body.li13}</li>
            <li>{pc.body.li14}</li>
          </ul>
        </div>
      }
    >
      <UnitConverter
        locale={validLocale}
        fromUnit="Inches"
        toUnit="Pixels"
        conversionType="in-to-px"
        formula="pixels = inches x DPI"
        commonValues={[0.5, 1, 2, 3, 4, 5, 6, 8, 10, 12]}
      />
    </ConverterLayout>
  );
}
