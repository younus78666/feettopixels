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
  "Convert REM to pixels with a custom base font size. Free REM to PX calculator with reverse conversion, formula examples, and responsive CSS layout guidance.";
const extractive =
  "To convert REM to pixels, multiply the rem value by the root font size (default 16px). 1rem = 16px. 2rem = 32px. 1.5rem = 24px. Change the base font size if your project uses a different root.";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  return {
    title,
    description,
    alternates: buildAlternates(locale, "rem-to-px"),
    openGraph: { title, description, locale: ogLocaleMap[locale], images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: title }] },
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
      "Yes, and that is why you tune it at the project root. If you set html { font-size: 10px } mid-project, every rem-based measurement on the page rescales. This is useful for simplifying math but requires caution when adopting a new design system.",
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
      content={
        <>
          <h3 id="how-rem-resolves">How REM resolves in CSS</h3>
          <p>
            REM means root em. Every REM value is calculated from the computed
            font size of the root html element, not from the parent component.
            In a default browser setup, that root size is 16px, so 1rem equals
            16px and 2rem equals 32px.
          </p>
          <p>
            Projects sometimes change the root size. A common legacy pattern is
            html {"{ font-size: 62.5%; }"}, which makes 1rem equal 10px when the
            browser default remains 16px. That makes mental math easy, but it
            can surprise users who increase their default font size for
            accessibility. Check the computed html font size before converting.
          </p>
          <h3 id="common-rem-values">Common REM to PX values</h3>
          <table>
            <thead>
              <tr>
                <th>REM</th>
                <th>16px root</th>
                <th>18px root</th>
                <th>20px root</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>0.5rem</td><td>8px</td><td>9px</td><td>10px</td></tr>
              <tr><td>0.875rem</td><td>14px</td><td>15.75px</td><td>17.5px</td></tr>
              <tr><td>1rem</td><td>16px</td><td>18px</td><td>20px</td></tr>
              <tr><td>1.5rem</td><td>24px</td><td>27px</td><td>30px</td></tr>
              <tr><td>2rem</td><td>32px</td><td>36px</td><td>40px</td></tr>
            </tbody>
          </table>
          <h3 id="when-to-convert-rem">When designers need the pixel value</h3>
          <p>
            REM is the right unit for scalable CSS, but pixels are still useful
            when communicating with designers, comparing browser output, or
            matching screenshots. A design token such as 1.25rem is clearer to
            an engineer; the equivalent 20px value is clearer in a Figma spec or
            bug report.
          </p>
          <ul>
            <li>Use REM for type size, spacing tokens, layout width, and component rhythm.</li>
            <li>Convert to PX when checking computed browser output or comparing screenshots.</li>
            <li>Keep root-size changes documented, because every REM value depends on it.</li>
          </ul>
          <h3 id="accessibility-note">Accessibility note</h3>
          <p>
            REM respects the root font size, so it responds better to user
            preferences than hard-coded pixel typography. If a user increases
            default text size, REM-based type and spacing can scale together.
            That is usually better than forcing a fixed 14px or 16px size
            everywhere.
          </p>
        </>
      }
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
