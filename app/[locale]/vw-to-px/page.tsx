import type { Metadata } from "next";
import { isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { buildAlternates } from "@/lib/alternates";
import { getDictionary } from "@/lib/translations";
import { ConverterLayout } from "@/components/tools/ConverterLayout";
import { CssConverter } from "@/app/[locale]/px-to-rem/CssConverter";
import { getBreadcrumbs, getRelatedTools } from "@/lib/content-utils";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const title = "VW to PX Converter: Convert Viewport Width Units to Pixels";
const description =
  "Convert VW to pixels for responsive design. Enter viewport width and vw value to get the computed pixel width. Free VW to PX calculator.";
const extractive =
  "To convert VW to pixels, multiply the vw value by the viewport width and divide by 100. On a 1920px viewport: 10vw = 192px, 50vw = 960px, 100vw = 1920px. VW units scale proportionally as the viewport resizes.";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  return {
    title,
    description,
    alternates: buildAlternates(locale, "vw-to-px"),
    openGraph: { title, description, locale: ogLocaleMap[locale] },
  };
}

const faq = [
  {
    question: "How do I convert VW to pixels?",
    answer:
      "Multiply the vw value by the viewport width and divide by 100. Formula: px = vw × viewport / 100. On a 1440px viewport: 5vw = 72px, 25vw = 360px, 100vw = 1440px.",
  },
  {
    question: "What is 100vw in pixels?",
    answer:
      "100vw equals the full viewport width. On a 1920×1080 desktop: 100vw = 1920px. On a 375px iPhone: 100vw = 375px. VW always matches the browser's inner width (excluding scrollbars).",
  },
  {
    question: "When should I use VW instead of percent (%)?",
    answer:
      "Use VW when sizing should be relative to the viewport regardless of parent container. Percent is relative to the direct parent's width. VW is ideal for fluid typography, full-bleed backgrounds, and hero sections that span the whole browser. Percent is better for layout within a fixed-width parent.",
  },
  {
    question: "Why does VW break on ultra-wide monitors?",
    answer:
      "Because VW scales linearly with viewport width, a font set in pure VW grows absurdly large on 3440px+ displays. The fix is clamp(): clamp(1rem, 2vw, 1.5rem) gives VW fluidity bounded by minimum and maximum. Use clamp() for any VW-driven typography.",
  },
  {
    question: "Is VH different from VW?",
    answer:
      "Yes — VH is based on viewport HEIGHT, VW on viewport WIDTH. 50vh on a 1080px-tall window = 540px. VH is useful for full-screen sections; VW for horizontal layout. Most designs use VW more often because width-based responsiveness is more common than height-based.",
  },
];

export default async function VwToPxPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "css-units", href: "/css-units", label: "CSS Units" },
    { slug: "vw-to-px", href: "/vw-to-px", label: "VW to PX" },
  ]);
  const relatedTools = getRelatedTools(dict, [
    { slug: "px-to-vw", href: "/px-to-vw", icon: "↔" },
    { slug: "rem-to-px", href: "/rem-to-px", icon: "REM" },
    { slug: "em-to-px", href: "/em-to-px", icon: "EM" },
    { slug: "pt-to-px", href: "/pt-to-px", icon: "PT" },
    { slug: "screen-resolution-checker", href: "/screen-resolution-checker", icon: "SCR" },
  ]);

  return (
    <ConverterLayout
      locale={validLocale}
      title="VW to PX Converter"
      description={description}
      slug="/vw-to-px"
      extractiveAnswer={extractive}
      breadcrumbs={breadcrumbs}
      relatedTools={relatedTools}
      faqItems={faq}
      labels={{ relatedTools: dict.tool.relatedTools, faq: dict.tool.faq }}
    >
      <CssConverter
        locale={validLocale}
        mode="px-to-vw"
        fromLabel="Pixels (px)"
        toLabel="VW"
        baseLabel="Viewport Width (px)"
        defaultBase={1920}
        formula="px = vw x viewport / 100"
        initialReversed
      />
    </ConverterLayout>
  );
}
