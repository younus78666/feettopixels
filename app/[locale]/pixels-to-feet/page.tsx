import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import { ConverterLayout } from "@/components/tools/ConverterLayout";
import { UnitConverter } from "@/components/tools/UnitConverter";
import { getBreadcrumbs, getRelatedTools } from "@/lib/content-utils";
import { getPageContent } from "@/lib/content/types";
import { content } from "@/lib/content/pixels-to-feet";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["pixels-to-feet"];

  return {
    title: pageDict?.title || "pixels-to-feet",
    description: pageDict?.description || "",
    alternates: {
      canonical: `/${locale}/pixels-to-feet`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/pixels-to-feet`]),
      ),
    },
    openGraph: {
      title: pageDict?.title || "pixels-to-feet",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}

export default async function PixelsToFeetPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const pc = getPageContent(content, validLocale);
  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "pixel-converter", href: "/pixel-converter" },
    { slug: "pixels-to-feet", href: "/pixels-to-feet" },
  ]);
  const relatedTools = getRelatedTools(dict, [
    { slug: "feet-to-pixels", href: "/feet-to-pixels", icon: "🔄" },
    { slug: "pixels-to-inches", href: "/pixels-to-inches", icon: "📐" },
    { slug: "pixels-to-cm", href: "/pixels-to-cm", icon: "📏" },
    { slug: "inches-to-pixels", href: "/inches-to-pixels", icon: "📐" },
    { slug: "pixels-to-mm", href: "/pixels-to-mm", icon: "📎" },
  ]);
  return (
    <ConverterLayout
      locale={validLocale}
      title={dict.pages["pixels-to-feet"]?.title || "Pixels to Feet Converter"}
      description={dict.pages["pixels-to-feet"]?.description || "Convert pixel dimensions to feet for large-format design and print."}
      slug="/pixels-to-feet"
      extractiveAnswer={dict.pages["pixels-to-feet"]?.extractive || "To convert pixels to feet, divide pixels by DPI, then divide by 12. At 96 DPI, 3,456 pixels equals 3 feet. At 150 DPI, 5,400 pixels equals 3 feet."}
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
          </ul>
        </div>
      }
    >
      <UnitConverter
        fromUnit="Pixels"
        toUnit="Feet"
        conversionType="px-to-ft"
        formula="feet = pixels / (DPI x 12)"
        commonValues={[100, 500, 1000, 1920, 3840, 5400, 7200, 10800]}
      />
    </ConverterLayout>
  );
}
