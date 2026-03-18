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
  const pageDict = dict.pages["px-to-vw"];

  return {
    title: pageDict?.title || "px-to-vw",
    description: pageDict?.description || "",
    alternates: {
      canonical: `/${locale}/px-to-vw`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/px-to-vw`]),
      ),
    },
    openGraph: {
      title: pageDict?.title || "px-to-vw",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}

const faqItems = [
  {
    question: "What is vw in CSS?",
    answer:
      "VW (viewport width) is a CSS unit equal to 1% of the viewport's width. If the viewport is 1440px wide, 1vw = 14.4px. VW units create fluid layouts that scale proportionally with the browser window width.",
  },
  {
    question: "How do I convert px to vw?",
    answer:
      "Divide the pixel value by the viewport width, then multiply by 100. For example, on a 1440px viewport: 100px / 1440 x 100 = 6.944vw. The result changes based on the viewport width you design for.",
  },
  {
    question: "Should I use vw for font sizes?",
    answer:
      "Pure vw font sizes can be too small on mobile or too large on wide screens. Best practice is to use CSS clamp(): clamp(1rem, 2.5vw, 2rem). This sets minimum and maximum sizes while scaling fluidly between breakpoints.",
  },
  {
    question: "What is the difference between vw and percentage?",
    answer:
      "VW is always relative to the viewport width, regardless of parent element. Percentage (%) is relative to the parent element's width. In most cases for width, they produce similar results, but vw ignores container constraints.",
  },
  {
    question: "Does vw include the scrollbar width?",
    answer:
      "Yes, vw includes the scrollbar. On Windows (where scrollbars take space), 100vw is wider than the visible area. This can cause horizontal scrolling. Use width: 100% instead of 100vw for full-width elements to avoid this issue.",
  },
];

export default async function PxToVwPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "pixel-converter", href: "/pixel-converter" },
    { slug: "px-to-vw", href: "/px-to-vw" },
  ]);
  const relatedTools = getRelatedTools(dict, [
    { slug: "px-to-rem", href: "/px-to-rem", icon: "🔤" },
    { slug: "px-to-em", href: "/px-to-em", icon: "📝" },
    { slug: "px-to-pt", href: "/px-to-pt", icon: "📏" },
    { slug: "screen-resolution-checker", href: "/screen-resolution-checker", icon: "📺" },
    { slug: "aspect-ratio-calculator", href: "/aspect-ratio-calculator", icon: "📐" },
  ]);
  return (
    <ConverterLayout
      locale={validLocale}
      title={dict.pages["px-to-vw"]?.title || "PX to VW Converter"}
      description={dict.pages["px-to-vw"]?.description || "Convert pixels to viewport width units for fluid responsive design."}
      slug="/px-to-vw"
      extractiveAnswer={dict.pages["px-to-vw"]?.extractive || "To convert px to vw, use the formula: vw = (px / viewport width) x 100. On a 1440px viewport: 16px = 1.111vw, 100px = 6.944vw. VW units create fluid layouts that scale with the browser width. Adjust the viewport width to match your design target."}
      breadcrumbs={breadcrumbs}
      relatedTools={relatedTools}
      faqItems={faqItems}
      labels={{
        relatedTools: dict.tool.relatedTools,
        faq: dict.tool.faq,
      }}
      content={
        <div>
          <h2>Understanding PX to VW Conversion</h2>
          <p>
            VW (viewport width) units make elements scale proportionally with the browser width. One vw equals 1% of the viewport width. The formula is: <strong>vw = (px / viewport width) x 100</strong>.
          </p>

          <h3>Fluid Typography with VW</h3>
          <p>
            VW units enable fluid typography that scales between breakpoints without media queries. However, pure vw font sizes can be unpredictable. Modern best practice uses CSS <code>clamp()</code>:
          </p>
          <p>
            <code>font-size: clamp(1rem, 2.5vw, 2rem);</code> — This sets a minimum of 1rem, scales with viewport, and caps at 2rem.
          </p>

          <h3>Common Viewport Widths</h3>
          <ul>
            <li><strong>320px</strong> — Small mobile (iPhone SE)</li>
            <li><strong>375px</strong> — Standard mobile (iPhone)</li>
            <li><strong>768px</strong> — Tablet (iPad portrait)</li>
            <li><strong>1024px</strong> — Tablet landscape / small desktop</li>
            <li><strong>1280px</strong> — Laptop</li>
            <li><strong>1440px</strong> — Standard desktop (common design target)</li>
            <li><strong>1920px</strong> — Full HD desktop</li>
          </ul>

          <h3>VW Gotchas</h3>
          <ul>
            <li><strong>Scrollbar issue:</strong> 100vw includes scrollbar width on Windows, potentially causing horizontal scroll.</li>
            <li><strong>Mobile keyboard:</strong> VW does not change when the mobile keyboard opens (viewport height does).</li>
            <li><strong>Zoom:</strong> VW units respond to browser zoom, which can affect fixed layouts.</li>
          </ul>
        </div>
      }
    >
      <CssConverter
        mode="px-to-vw"
        fromLabel="Pixels (px)"
        toLabel="VW"
        baseLabel="Viewport Width (px)"
        defaultBase={1440}
        formula="vw = (px / viewport width) x 100"
        autoDetectBase
      />
    </ConverterLayout>
  );
}
