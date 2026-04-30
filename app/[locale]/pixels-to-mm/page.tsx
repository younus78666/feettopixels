import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { buildAlternates, localizedPath } from "@/lib/alternates";
import { getDictionary } from "@/lib/translations";
import { ConverterLayout } from "@/components/tools/ConverterLayout";
import { UnitConverter } from "@/components/tools/UnitConverter";
import { getBreadcrumbs, getRelatedTools } from "@/lib/content-utils";
import { getPageContent } from "@/lib/content/types";
import { content } from "@/lib/content/pixels-to-mm";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["pixels-to-mm"];

  return {
    title: pageDict?.title || "pixels-to-mm",
    description: pageDict?.description || "",
    alternates: buildAlternates(locale, "pixels-to-mm"),
    openGraph: {
      title: pageDict?.title || "pixels-to-mm",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
      images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: pageDict?.title || "pixels-to-mm" }],
    },
  };
}

export default async function PixelsToMmPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const pc = getPageContent(content, validLocale);
  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "pixel-converter", href: "/pixel-converter" },
    { slug: "pixels-to-mm", href: "/pixels-to-mm" },
  ]);
  const relatedTools = getRelatedTools(dict, [
    { slug: "mm-to-pixels", href: "/mm-to-pixels", icon: "🔄" },
    { slug: "pixels-to-cm", href: "/pixels-to-cm", icon: "📏" },
    { slug: "pixels-to-inches", href: "/pixels-to-inches", icon: "📐" },
    { slug: "cm-to-pixels", href: "/cm-to-pixels", icon: "📏" },
    { slug: "pixels-to-feet", href: "/pixels-to-feet", icon: "📐" },
  ]);
  return (
    <ConverterLayout
      locale={validLocale}
      title={dict.pages["pixels-to-mm"]?.title || "Pixels to Millimeters Converter"}
      description={dict.pages["pixels-to-mm"]?.description || "Convert pixel dimensions to millimeters with precision DPI control."}
      slug="/pixels-to-mm"
      extractiveAnswer={dict.pages["pixels-to-mm"]?.extractive || "To convert pixels to millimeters, multiply pixels by 25.4 and divide by DPI. At 96 DPI, 378 pixels equals 100 mm. At 300 DPI, 1,181 pixels equals 100 mm."}
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
        fromUnit="Pixels"
        toUnit="Millimeters"
        conversionType="px-to-mm"
        formula="mm = (pixels x 25.4) / DPI"
        commonValues={[1, 50, 100, 300, 500, 1000, 1920, 3840]}
      />
    </ConverterLayout>
  );
}
