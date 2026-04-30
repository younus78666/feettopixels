import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { buildAlternates, localizedPath } from "@/lib/alternates";
import { getDictionary } from "@/lib/translations";
import { ConverterLayout } from "@/components/tools/ConverterLayout";
import { getBreadcrumbs, getRelatedTools } from "@/lib/content-utils";
import { getPageContent } from "@/lib/content/types";
import { content } from "@/lib/content/image-size-calculator";
import { ImageSizeCalc } from "./ImageSizeCalc";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["image-size-calculator"];

  return {
    title: pageDict?.title || "image-size-calculator",
    description: pageDict?.description || "",
    alternates: buildAlternates(locale, "image-size-calculator"),
    openGraph: {
      title: pageDict?.title || "image-size-calculator",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
      images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: pageDict?.title || "image-size-calculator" }],
    },
  };
}

export default async function ImageSizeCalculatorPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const pc = getPageContent(content, validLocale);
  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "pixel-converter", href: "/pixel-converter" },
    { slug: "image-size-calculator", href: "/image-size-calculator" },
  ]);
  const relatedTools = getRelatedTools(dict, [
    { slug: "dpi-calculator", href: "/dpi-calculator", icon: "🖥️" },
    { slug: "megapixel-calculator", href: "/megapixel-calculator", icon: "📷" },
    { slug: "aspect-ratio-calculator", href: "/aspect-ratio-calculator", icon: "📐" },
    { slug: "pixels-to-inches", href: "/pixels-to-inches", icon: "📏" },
    { slug: "dpi-converter", href: "/dpi-converter", icon: "🔄" },
  ]);

  return (
    <ConverterLayout
      locale={validLocale}
      title={dict.pages["image-size-calculator"]?.title || "Image Size Calculator"}
      description={
        dict.pages["image-size-calculator"]?.description ||
        "Calculate the physical print size and file size from pixel dimensions."
      }
      slug="/image-size-calculator"
      extractiveAnswer={
        dict.pages["image-size-calculator"]?.extractive ||
        "To find an image's physical size, divide pixels by DPI. A 1920x1080 image at 300 DPI prints at 6.4 x 3.6 inches (16.3 x 9.1 cm). At 96 DPI, it prints at 20 x 11.25 inches. File size depends on pixel count, bit depth, and compression format."
      }
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

          <h3>{pc.body.heading2}</h3>
          <p><strong>{pc.body.formula}</strong></p>
          <p>{pc.body.p2}</p>

          <h3>{pc.body.heading3}</h3>
          <ul>
            <li>{pc.body.li1}</li>
            <li>{pc.body.li2}</li>
            <li>{pc.body.li3}</li>
          </ul>

          <h3>{pc.body.heading4}</h3>
          <ul>
            <li>{pc.body.li4}</li>
            <li>{pc.body.li5}</li>
            <li>{pc.body.li6}</li>
            <li>{pc.body.li7}</li>
          </ul>
        </div>
      }
    >
      <ImageSizeCalc locale={validLocale} />
    </ConverterLayout>
  );
}
