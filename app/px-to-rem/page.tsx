import type { Metadata } from "next";
import { ConverterLayout } from "@/components/tools/ConverterLayout";
import { CssConverter } from "./CssConverter";

export const metadata: Metadata = {
  title: "PX to REM Converter — Convert Pixels to REM Units",
  description:
    "Convert pixels to rem units instantly. Bidirectional converter with adjustable base font size (default 16px). Quick reference table for common values.",
  alternates: {
    canonical: "/px-to-rem",
  },
  openGraph: {
    title: "PX to REM Converter — Convert Pixels to REM Units",
    description:
      "Convert between px and rem CSS units with adjustable base font size. Free online tool for web developers.",
    url: "/px-to-rem",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Pixel Converter", href: "/pixel-converter" },
  { label: "PX to REM", href: "/px-to-rem" },
];

const relatedTools = [
  { name: "PX to EM", description: "Convert pixels to em units", href: "/px-to-em", icon: "🔤" },
  { name: "PX to PT", description: "Convert pixels to points", href: "/px-to-pt", icon: "📝" },
  { name: "PX to VW", description: "Convert pixels to viewport width", href: "/px-to-vw", icon: "📏" },
  { name: "Pixels to Inches", description: "Convert pixels to inches", href: "/pixels-to-inches", icon: "📐" },
  { name: "Pixels to CM", description: "Convert pixels to centimeters", href: "/pixels-to-cm", icon: "🔄" },
];

const faqItems = [
  {
    question: "What is the difference between px and rem?",
    answer:
      "Pixels (px) are fixed-size units that do not scale with user preferences. REM units are relative to the root element's font size (typically 16px). Using rem allows your layout to scale when users change their browser's default font size.",
  },
  {
    question: "How do I convert px to rem?",
    answer:
      "Divide the pixel value by the root font size. With the default 16px base: 24px / 16 = 1.5rem. If the root font size is changed to 10px for easier math: 24px / 10 = 2.4rem.",
  },
  {
    question: "Why should I use rem instead of px?",
    answer:
      "REM units respect user accessibility settings. If a user sets their browser default font to 20px (for better readability), rem-based layouts scale accordingly while px-based layouts remain fixed. This improves accessibility compliance.",
  },
  {
    question: "What is the default root font size?",
    answer:
      "The default root font size in all major browsers is 16px. This means 1rem = 16px by default. Some developers set html { font-size: 62.5% } to make 1rem = 10px for easier mental math.",
  },
  {
    question: "Can I use rem for spacing and sizing too?",
    answer:
      "Yes. REM units work for any CSS property — margin, padding, width, height, border-radius, and more. Using rem for spacing alongside font sizes creates a consistently scalable design system.",
  },
];

export default function PxToRemPage() {
  return (
    <ConverterLayout
      title="PX to REM Converter"
      description="Convert pixels to rem units with adjustable base font size."
      slug="/px-to-rem"
      extractiveAnswer="To convert px to rem, divide the pixel value by the base font size. With the default 16px base: 16px = 1rem, 24px = 1.5rem, 32px = 2rem. Adjust the base if your root font size differs from 16px."
      breadcrumbs={breadcrumbs}
      relatedTools={relatedTools}
      faqItems={faqItems}
      content={
        <div>
          <h2>Understanding PX to REM Conversion</h2>
          <p>
            REM (root em) is a CSS unit relative to the root element&apos;s font size. Unlike pixels, rem scales with user preferences, making it essential for accessible web design. The conversion is straightforward: <strong>rem = px / base font size</strong>.
          </p>

          <h3>Why REM Matters for Accessibility</h3>
          <p>
            Users with visual impairments often increase their browser&apos;s default font size. Designs using rem units respect this preference and scale proportionally. Designs using only px ignore the user&apos;s setting, creating accessibility barriers.
          </p>

          <h3>Common Conversion Values (Base 16px)</h3>
          <ul>
            <li><strong>12px = 0.75rem</strong> — Small text, captions</li>
            <li><strong>14px = 0.875rem</strong> — Body text (compact)</li>
            <li><strong>16px = 1rem</strong> — Default body text</li>
            <li><strong>18px = 1.125rem</strong> — Large body text</li>
            <li><strong>24px = 1.5rem</strong> — Headings</li>
            <li><strong>32px = 2rem</strong> — Large headings</li>
            <li><strong>48px = 3rem</strong> — Hero text</li>
          </ul>

          <h3>The 62.5% Trick</h3>
          <p>
            Setting <code>html &#123; font-size: 62.5% &#125;</code> makes 1rem = 10px, simplifying mental math. Then 16px = 1.6rem, 24px = 2.4rem, etc. Remember to set the body font size back to 1.6rem to maintain default text sizing.
          </p>

          <h2>Why Is REM Better Than PX for Responsive Design?</h2>
          <p>
            Pixels create fixed-size elements that ignore user preferences. If someone increases their browser default font from 16px to 20px for readability, rem-based layouts scale up by 25% while px-based layouts stay the same size. This makes rem essential for WCAG 2.1 AA compliance, which requires text to be resizable up to 200% without loss of content. Using rem for font sizes, spacing, and component dimensions creates designs that adapt gracefully to any user's accessibility settings.
          </p>

          <h2>What Is the Browser Default Font Size?</h2>
          <p>
            Every major browser (Chrome, Firefox, Safari, Edge) defaults to a 16px root font size. This means 1rem equals 16px unless you override it. Users can change this default in their browser settings, and some operating systems apply system-wide font scaling. The 16px default has been the standard since the early days of CSS and is the baseline that all rem calculations reference. If your design assumes a different base, set it explicitly on the html element.
          </p>

          <h2>When Should You Use REM vs EM vs PX?</h2>
          <p>
            Use rem for global sizing: page-level typography, layout spacing, container widths, and media queries. Use em for component-internal scaling: button padding that should grow proportionally with button text, icon sizes that match adjacent labels. Use px only for values that should never scale: 1px borders, box shadows, and hairline dividers. This three-tier approach gives you accessible global scaling (rem), self-contained component proportions (em), and precise decorative details (px).
          </p>
        </div>
      }
    >
      <CssConverter
        mode="px-to-rem"
        fromLabel="Pixels (px)"
        toLabel="REM"
        baseLabel="Base Font Size (px)"
        defaultBase={16}
        formula="rem = px / base font size"
      />
    </ConverterLayout>
  );
}
