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

const title = "PT to PX Converter: Convert Points to Pixels for Typography";
const description =
  "Convert typographic points to pixels. At 96 DPI: 1pt = 1.333px, 12pt = 16px, 18pt = 24px. Free PT to PX calculator for print-to-screen typography.";
const extractive =
  "At 96 DPI, 1 point equals 1.333 pixels. The formula is: px = pt x DPI / 72. A 12pt font equals 16 pixels at standard screen DPI. Points are absolute print-world units; pixels vary by display density.";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  return {
    title,
    description,
    alternates: buildAlternates(locale, "pt-to-px"),
    openGraph: { title, description, locale: ogLocaleMap[locale] },
  };
}

const faq = [
  {
    question: "How do I convert points (pt) to pixels?",
    answer:
      "Multiply the pt value by DPI and divide by 72. At the web-standard 96 DPI: 1pt = 1.333px. At 72 DPI (legacy Mac): 1pt = 1px exactly. The formula: px = pt × DPI / 72.",
  },
  {
    question: "What is 12pt in pixels?",
    answer:
      "12pt equals 16 pixels at 96 DPI, which is the standard for modern browsers. 12pt is also the default body font size in most print documents, which is why 16px is the default browser font size — they were deliberately aligned.",
  },
  {
    question: "When should I use PT instead of PX?",
    answer:
      "Use PT for print-specific stylesheets (via @media print) or when importing print typography specs into a web project. For screen display, stick with PX, REM, or EM — PT metadata gets rasterized to pixels by the browser anyway.",
  },
  {
    question: "Why is 1pt equal to 1.333px?",
    answer:
      "Because 1 inch = 72 points (a historical typography standard) and modern browsers assume 96 CSS pixels per inch. So 1 inch = 72pt = 96px, which means 1pt = 96/72 = 1.333px. This ratio is locked for web rendering regardless of actual physical display density.",
  },
  {
    question: "Does PT scale with device pixel ratio (DPR)?",
    answer:
      "No — PT resolves to CSS pixels first, then the browser applies DPR scaling to physical pixels at render time. 12pt on a 1x display and a 2x Retina display both compute to 16 CSS pixels, rendered with 16 or 32 physical pixels respectively.",
  },
];

export default async function PtToPxPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "css-units", href: "/css-units", label: "CSS Units" },
    { slug: "pt-to-px", href: "/pt-to-px", label: "PT to PX" },
  ]);
  const relatedTools = getRelatedTools(dict, [
    { slug: "px-to-pt", href: "/px-to-pt", icon: "↔" },
    { slug: "rem-to-px", href: "/rem-to-px", icon: "REM" },
    { slug: "em-to-px", href: "/em-to-px", icon: "EM" },
    { slug: "vw-to-px", href: "/vw-to-px", icon: "VW" },
    { slug: "em-vs-rem", href: "/em-vs-rem", icon: "VS" },
  ]);

  return (
    <ConverterLayout
      locale={validLocale}
      title="PT to PX Converter"
      description={description}
      slug="/pt-to-px"
      extractiveAnswer={extractive}
      breadcrumbs={breadcrumbs}
      relatedTools={relatedTools}
      faqItems={faq}
      labels={{ relatedTools: dict.tool.relatedTools, faq: dict.tool.faq }}
    >
      <CssConverter
        locale={validLocale}
        mode="px-to-pt"
        fromLabel="Pixels (px)"
        toLabel="Points (pt)"
        baseLabel="DPI"
        defaultBase={96}
        formula="px = pt x DPI / 72"
        initialReversed
      />
    </ConverterLayout>
  );
}
