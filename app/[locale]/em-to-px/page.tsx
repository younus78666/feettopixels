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

const title = "EM to PX Converter: Convert EM Units to Pixels Online";
const description =
  "Convert EM to pixels for CSS. Set parent font size and convert em values to absolute pixel widths. Free online EM to PX calculator.";
const extractive =
  "To convert EM to pixels, multiply the em value by the parent element's font size. If the parent is 16px: 1em = 16px, 1.5em = 24px, 2em = 32px. Unlike REM, EM is relative to the parent, not the root.";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  return {
    title,
    description,
    alternates: buildAlternates(locale, "em-to-px"),
    openGraph: { title, description, locale: ogLocaleMap[locale] },
  };
}

const faq = [
  {
    question: "How do I convert EM to pixels?",
    answer:
      "Multiply the em value by the parent element's computed font size. If the parent is 16px: 1em = 16px, 2em = 32px. If the parent is 18px: 1em = 18px, 2em = 36px. EM is always relative to its immediate parent (or its own font-size when used on the font-size property itself).",
  },
  {
    question: "Why does EM compound in nested elements?",
    answer:
      "Because each EM resolves against its parent, nested components multiply. A 1.2em font on a child of a 1.2em parent renders at 1.44x the root size (1.2 × 1.2). This makes EM powerful for modular scaling but tricky for global consistency — use REM when you want predictable site-wide sizing.",
  },
  {
    question: "When should I use EM over REM or PX?",
    answer:
      "Use EM for component-level scaling where child elements should track their parent's size (e.g., a card component whose padding and border-radius scale with its font-size). Use REM for global consistency across the whole page. Use PX for exact values unaffected by font-size changes.",
  },
  {
    question: "Does 1em always equal 16px?",
    answer:
      "Only when the parent element's computed font size is 16px. Most browsers default to 16px for the root, so a top-level 1em usually equals 16px. But once you nest inside elements that change font-size, EM multiplies accordingly.",
  },
  {
    question: "How is EM different from PX in responsive design?",
    answer:
      "PX is absolute — 16px is always 16 physical pixels (adjusted for device pixel ratio). EM is relative — 16em is 16 times the parent's font-size, which may itself scale with user preferences or media queries. EM makes typography more accessible and responsive; PX is predictable but rigid.",
  },
];

export default async function EmToPxPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "css-units", href: "/css-units", label: "CSS Units" },
    { slug: "em-to-px", href: "/em-to-px", label: "EM to PX" },
  ]);
  const relatedTools = getRelatedTools(dict, [
    { slug: "px-to-em", href: "/px-to-em", icon: "↔" },
    { slug: "rem-to-px", href: "/rem-to-px", icon: "REM" },
    { slug: "pt-to-px", href: "/pt-to-px", icon: "PT" },
    { slug: "vw-to-px", href: "/vw-to-px", icon: "VW" },
    { slug: "em-vs-rem", href: "/em-vs-rem", icon: "VS" },
  ]);

  return (
    <ConverterLayout
      locale={validLocale}
      title="EM to PX Converter"
      description={description}
      slug="/em-to-px"
      extractiveAnswer={extractive}
      breadcrumbs={breadcrumbs}
      relatedTools={relatedTools}
      faqItems={faq}
      labels={{ relatedTools: dict.tool.relatedTools, faq: dict.tool.faq }}
    >
      <CssConverter
        locale={validLocale}
        mode="px-to-em"
        fromLabel="Pixels (px)"
        toLabel="EM"
        baseLabel="Parent Font Size (px)"
        defaultBase={16}
        formula="px = em x parent font size"
        initialReversed
      />
    </ConverterLayout>
  );
}
