import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import { ConverterLayout } from "@/components/tools/ConverterLayout";
import { UnitConverter } from "@/components/tools/UnitConverter";
import { getBreadcrumbs, getRelatedTools } from "@/lib/content-utils";
import { getPageContent } from "@/lib/content/types";
import { content } from "@/lib/content/pixels-to-inches";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["pixels-to-inches"];

  return {
    title: pageDict?.title || "pixels-to-inches",
    description: pageDict?.description || "",
    alternates: {
      canonical: `/${locale}/pixels-to-inches`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/pixels-to-inches`]),
      ),
    },
    openGraph: {
      title: pageDict?.title || "pixels-to-inches",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}

export default async function PixelsToInchesPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const pc = getPageContent(content, validLocale);
  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "pixel-converter", href: "/pixel-converter" },
    { slug: "pixels-to-inches", href: "/pixels-to-inches" },
  ]);
  const relatedTools = getRelatedTools(dict, [
    { slug: "inches-to-pixels", href: "/inches-to-pixels", icon: "📐" },
    { slug: "cm-to-pixels", href: "/cm-to-pixels", icon: "📏" },
    { slug: "pixels-to-cm", href: "/pixels-to-cm", icon: "🔄" },
    { slug: "pixels-to-mm", href: "/pixels-to-mm", icon: "📎" },
    { slug: "feet-to-pixels", href: "/feet-to-pixels", icon: "📐" },
  ]);
  return (
    <ConverterLayout
      locale={validLocale}
      title={dict.pages["pixels-to-inches"]?.title || "Pixels to Inches Converter"}
      description={dict.pages["pixels-to-inches"]?.description || "Convert pixels to inches with DPI awareness for web and print design."}
      slug="/pixels-to-inches"
      extractiveAnswer={dict.pages["pixels-to-inches"]?.extractive || ""}
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
          <ul>
            <li>{pc.body.li9}</li>
            <li>{pc.body.li10}</li>
            <li>{pc.body.li11}</li>
            <li>{pc.body.li12}</li>
            <li>{pc.body.li13}</li>
            <li>{pc.body.li14}</li>
          </ul>

          <h2>{pc.body.heading6}</h2>
          <p>{pc.body.p5}</p>
        </div>
      }
    >
      <UnitConverter
        locale={validLocale}
        fromUnit="Pixels"
        toUnit="Inches"
        conversionType="px-to-in"
        formula="inches = pixels / DPI"
        commonValues={[1, 10, 72, 96, 100, 150, 300, 500, 1000, 1920]}
      />
    </ConverterLayout>
  );
}
