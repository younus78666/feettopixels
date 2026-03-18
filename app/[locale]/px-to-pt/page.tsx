import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import { ConverterLayout } from "@/components/tools/ConverterLayout";
import { CssConverter } from "@/app/[locale]/px-to-rem/CssConverter";
import { getBreadcrumbs, getRelatedTools } from "@/lib/content-utils";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["px-to-pt"];

  return {
    title: pageDict?.title || "px-to-pt",
    description: pageDict?.description || "",
    alternates: {
      canonical: `/${locale}/px-to-pt`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/px-to-pt`]),
      ),
    },
    openGraph: {
      title: pageDict?.title || "px-to-pt",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}

const faqItems = [
  {
    question: "How do I convert pixels to points?",
    answer:
      "Multiply the pixel value by 72/96 (which equals 0.75). For example, 16px x 0.75 = 12pt. This assumes the standard 96 DPI screen resolution. Points are 1/72 of an inch, while CSS pixels are 1/96 of an inch.",
  },
  {
    question: "Why are pixels and points different sizes?",
    answer:
      "Points come from traditional typography where 1 point = 1/72 inch. CSS pixels are defined as 1/96 inch. Since 72/96 = 0.75, one CSS pixel equals 0.75 points. A 12pt font displays at 16px on screen.",
  },
  {
    question: "When should I use points instead of pixels?",
    answer:
      "Use points for print stylesheets (CSS @media print) and when matching web typography to print design specifications. Points are the standard unit in print design software like InDesign and Word.",
  },
  {
    question: "What is the relationship between pt, px, and DPI?",
    answer:
      "At 96 DPI (CSS standard): 1pt = 1.333px. At 72 DPI: 1pt = 1px. The formula is: pt = px x 72 / DPI. The standard conversion assumes 96 DPI, which is the CSS reference pixel.",
  },
  {
    question: "How do common font sizes compare between px and pt?",
    answer:
      "8pt = 10.667px, 10pt = 13.333px, 11pt = 14.667px, 12pt = 16px, 14pt = 18.667px, 18pt = 24px, 24pt = 32px, 36pt = 48px, 72pt = 96px.",
  },
];

export default async function PxToPtPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "pixel-converter", href: "/pixel-converter" },
    { slug: "px-to-pt", href: "/px-to-pt" },
  ]);
  const relatedTools = getRelatedTools(dict, [
    { slug: "px-to-rem", href: "/px-to-rem", icon: "🔤" },
    { slug: "px-to-em", href: "/px-to-em", icon: "📝" },
    { slug: "px-to-vw", href: "/px-to-vw", icon: "📏" },
    { slug: "pixels-to-inches", href: "/pixels-to-inches", icon: "📐" },
    { slug: "dpi-calculator", href: "/dpi-calculator", icon: "🖥️" },
  ]);
  return (
    <ConverterLayout
      locale={validLocale}
      title={dict.pages["px-to-pt"]?.title || "PX to PT Converter"}
      description={dict.pages["px-to-pt"]?.description || "Convert CSS pixels to typographic points for web and print design."}
      slug="/px-to-pt"
      extractiveAnswer={dict.pages["px-to-pt"]?.extractive || "To convert pixels to points, multiply by 0.75 (or 72/96). At 96 DPI: 16px = 12pt, 24px = 18pt, 32px = 24pt. Points are the standard unit in print design (1pt = 1/72 inch), while CSS pixels are defined as 1/96 inch."}
      breadcrumbs={breadcrumbs}
      relatedTools={relatedTools}
      faqItems={faqItems}
      labels={{
        relatedTools: dict.tool.relatedTools,
        faq: dict.tool.faq,
      }}
      content={
        <div>
          <h2>Understanding PX to PT Conversion</h2>
          <p>
            Points (pt) are a typographic unit equal to 1/72 of an inch. CSS pixels (px) are defined as 1/96 of an inch. The conversion factor is <strong>pt = px x 72 / 96 = px x 0.75</strong>.
          </p>

          <h3>Historical Context</h3>
          <p>
            The point originated in traditional metal typesetting. The modern PostScript point (1/72 inch) was standardized by Adobe. When the web adopted 96 DPI as the CSS reference pixel, a 12pt font became 16px — which is why most browsers default to 16px body text.
          </p>

          <h3>Common Font Size Equivalents</h3>
          <ul>
            <li><strong>8pt (10.67px)</strong> — Legal fine print, footnotes</li>
            <li><strong>10pt (13.33px)</strong> — Small body text, captions</li>
            <li><strong>12pt (16px)</strong> — Standard body text (default browser size)</li>
            <li><strong>14pt (18.67px)</strong> — Large body text</li>
            <li><strong>18pt (24px)</strong> — Subheadings</li>
            <li><strong>24pt (32px)</strong> — Headings</li>
            <li><strong>36pt (48px)</strong> — Display text</li>
          </ul>

          <h3>Print Stylesheet Usage</h3>
          <p>
            When creating CSS print stylesheets (<code>@media print</code>), using points ensures text prints at the intended physical size. A 12pt body font in a print stylesheet produces the same physical text size as a 12pt document in Word or InDesign.
          </p>
        </div>
      }
    >
      <CssConverter
        mode="px-to-pt"
        fromLabel="Pixels (px)"
        toLabel="Points (pt)"
        baseLabel="DPI"
        defaultBase={96}
        formula="pt = px x 72 / DPI"
        quickRef={[8, 10, 12, 13, 14, 16, 18, 20, 24, 28, 32, 36, 48, 64, 72, 96]}
      />
    </ConverterLayout>
  );
}
