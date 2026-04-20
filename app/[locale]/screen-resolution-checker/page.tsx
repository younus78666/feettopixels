import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { buildAlternates, localizedPath } from "@/lib/alternates";
import { getDictionary } from "@/lib/translations";
import { ConverterLayout } from "@/components/tools/ConverterLayout";
import { getBreadcrumbs, getRelatedTools } from "@/lib/content-utils";
import { StructuredDoc } from "@/components/content/StructuredDoc";
import { getLocalizedDoc } from "@/lib/content/doc-types";
import { content } from "@/lib/content/screen-resolution-checker";
import { ScreenChecker } from "./ScreenChecker";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["screen-resolution-checker"];

  return {
    title: pageDict?.title || "screen-resolution-checker",
    description: pageDict?.description || "",
    alternates: buildAlternates(locale, "screen-resolution-checker"),
    openGraph: {
      title: pageDict?.title || "screen-resolution-checker",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}


export default async function ScreenResolutionCheckerPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const doc = getLocalizedDoc(content, validLocale);
  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "pixel-converter", href: "/pixel-converter" },
    { slug: "screen-resolution-checker", href: "/screen-resolution-checker" },
  ]);
  const relatedTools = getRelatedTools(dict, [
    { slug: "ppi-calculator", href: "/ppi-calculator", icon: "🖥️" },
    { slug: "dpi-calculator", href: "/dpi-calculator", icon: "📐" },
    { slug: "px-to-vw", href: "/px-to-vw", icon: "📏" },
    { slug: "aspect-ratio-calculator", href: "/aspect-ratio-calculator", icon: "🔄" },
    { slug: "image-size-calculator", href: "/image-size-calculator", icon: "📷" },
  ]);
  return (
    <ConverterLayout
      locale={validLocale}
      title={dict.pages["screen-resolution-checker"]?.title || "Screen Resolution Checker"}
      description={dict.pages["screen-resolution-checker"]?.description || "Instantly detect your screen resolution, pixel ratio, and color depth."}
      slug="/screen-resolution-checker"
      extractiveAnswer={dict.pages["screen-resolution-checker"]?.extractive || "This tool auto-detects your screen resolution, device pixel ratio (DPR), color depth, and total megapixels. It compares your display to HD (1280x720), Full HD (1920x1080), QHD (2560x1440), 4K (3840x2160), and higher standards."}
      breadcrumbs={breadcrumbs}
      relatedTools={relatedTools}
      faqItems={doc.faq}
      labels={{
        relatedTools: dict.tool.relatedTools,
        faq: dict.tool.faq,
      }}
      content={<StructuredDoc sections={doc.sections} />}
    >
      <ScreenChecker locale={validLocale} />
    </ConverterLayout>
  );
}
