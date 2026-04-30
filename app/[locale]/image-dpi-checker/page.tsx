import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { buildAlternates, localizedPath } from "@/lib/alternates";
import { getDictionary } from "@/lib/translations";
import { ConverterLayout } from "@/components/tools/ConverterLayout";
import { getBreadcrumbs, getRelatedTools } from "@/lib/content-utils";
import { StructuredDoc } from "@/components/content/StructuredDoc";
import { getLocalizedDoc } from "@/lib/content/doc-types";
import { content } from "@/lib/content/image-dpi-checker";
import { DpiChecker } from "./DpiChecker";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["image-dpi-checker"];

  return {
    title: pageDict?.title || "image-dpi-checker",
    description: pageDict?.description || "",
    alternates: buildAlternates(locale, "image-dpi-checker"),
    openGraph: {
      title: pageDict?.title || "image-dpi-checker",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
      images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: pageDict?.title || "image-dpi-checker" }],
    },
  };
}


export default async function ImageDpiCheckerPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const doc = getLocalizedDoc(content, validLocale);
  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "pixel-converter", href: "/pixel-converter" },
    { slug: "image-dpi-checker", href: "/image-dpi-checker" },
  ]);
  const relatedTools = getRelatedTools(dict, [
    { slug: "dpi-calculator", href: "/dpi-calculator", icon: "🖥️" },
    { slug: "dpi-converter", href: "/dpi-converter", icon: "🔄" },
    { slug: "image-size-calculator", href: "/image-size-calculator", icon: "📐" },
    { slug: "megapixel-calculator", href: "/megapixel-calculator", icon: "📷" },
    { slug: "pixels-to-inches", href: "/pixels-to-inches", icon: "📏" },
  ]);
  return (
    <ConverterLayout
      locale={validLocale}
      title={dict.pages["image-dpi-checker"]?.title || "Image DPI Checker"}
      description={dict.pages["image-dpi-checker"]?.description || "Upload an image to check its resolution and print quality."}
      slug="/image-dpi-checker"
      extractiveAnswer={dict.pages["image-dpi-checker"]?.extractive || "Upload any image to instantly see its pixel dimensions, megapixel count, and maximum print size at 300 DPI (professional), 150 DPI (large format), and 96 DPI (screen). Images of 2+ megapixels are considered print quality at 300 DPI."}
      breadcrumbs={breadcrumbs}
      relatedTools={relatedTools}
      faqItems={doc.faq}
      labels={{
        relatedTools: dict.tool.relatedTools,
        faq: dict.tool.faq,
      }}
      content={<StructuredDoc sections={doc.sections} />}
    >
      <DpiChecker locale={validLocale} />
    </ConverterLayout>
  );
}
