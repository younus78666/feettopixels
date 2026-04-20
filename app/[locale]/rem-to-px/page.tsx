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

const title = "REM to PX Converter: Convert REM Units to Pixels Online";
const description =
  "Convert REM to pixels with a custom base font size. Free REM to PX calculator with reverse conversion for responsive CSS layouts.";
const extractive =
  "To convert REM to pixels, multiply the rem value by the root font size (default 16px). 1rem = 16px. 2rem = 32px. 1.5rem = 24px. Change the base font size if your project uses a different root.";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  return {
    title,
    description,
    alternates: buildAlternates(locale, "rem-to-px"),
    openGraph: { title, description, locale: ogLocaleMap[locale] },
  };
}

const faq = [
  {
    question: "How do I convert REM to pixels?",
    answer:
      "Multiply the rem value by the root font size. Most browsers default to 16px, so 1rem = 16px, 2rem = 32px, 0.5rem = 8px. If your CSS changes the root font-size (e.g., html { font-size: 10px } for a 1rem = 10px setup), use that value as the base.",
  },
  {
    question: "Is REM always equal to 16px?",
    answer:
      "Only when the root font-size is 16px, which is the default in every major browser. Many design systems redefine html font-size for easier math (e.g., font-size: 62.5% makes 1rem = 10px). Always check the computed root font-size in DevTools before assuming.",
  },
  {
    question: "When should I use REM instead of PX in CSS?",
    answer:
      "Use REM for typography, spacing, and layout sizes that should scale with user font preferences. Use PX for borders, shadows, and hairline elements where the exact pixel value matters. REM improves accessibility because it respects the user's browser font-size setting.",
  },
  {
    question: "Does changing html font-size break existing REM values?",
    answer:
      "Yes — and that is why you tune it at the project root. If you set html { font-size: 10px } mid-project, every rem-based measurement on the page rescales. This is useful for simplifying math but requires caution when adopting a new design system.",
  },
  {
    question: "What is the difference between REM and EM?",
    answer:
      "REM is always relative to the ROOT (html) font size. EM is relative to the parent element's font size. REM gives global consistency; EM cascades through nested components. See our EM vs REM guide for a full comparison.",
  },
];

export default async function RemToPxPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "css-units", href: "/css-units", label: "CSS Units" },
    { slug: "rem-to-px", href: "/rem-to-px", label: "REM to PX" },
  ]);
  const relatedTools = getRelatedTools(dict, [
    { slug: "px-to-rem", href: "/px-to-rem", icon: "↔" },
    { slug: "em-to-px", href: "/em-to-px", icon: "EM" },
    { slug: "pt-to-px", href: "/pt-to-px", icon: "PT" },
    { slug: "vw-to-px", href: "/vw-to-px", icon: "VW" },
    { slug: "em-vs-rem", href: "/em-vs-rem", icon: "VS" },
  ]);

  return (
    <ConverterLayout
      locale={validLocale}
      title="REM to PX Converter"
      description={description}
      slug="/rem-to-px"
      extractiveAnswer={extractive}
      breadcrumbs={breadcrumbs}
      relatedTools={relatedTools}
      faqItems={faq}
      labels={{ relatedTools: dict.tool.relatedTools, faq: dict.tool.faq }}
    >
      <CssConverter
        locale={validLocale}
        mode="px-to-rem"
        fromLabel="Pixels (px)"
        toLabel="REM"
        baseLabel="Base Font Size (px)"
        defaultBase={16}
        formula="px = rem x base font size"
        initialReversed
      />
    </ConverterLayout>
  );
}
