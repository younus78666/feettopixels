import type { Metadata } from "next";
import { ConverterLayout } from "@/components/tools/ConverterLayout";
import { CssConverter } from "@/app/px-to-rem/CssConverter";

export const metadata: Metadata = {
  title: "PX to EM Converter — Convert Pixels to EM Units",
  description:
    "Convert pixels to em units with adjustable parent font size. Bidirectional conversion with quick reference table for common CSS values.",
  openGraph: {
    title: "PX to EM Converter — Convert Pixels to EM Units",
    description:
      "Convert between px and em CSS units with adjustable parent element font size.",
    url: "/px-to-em",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Pixel Converter", href: "/pixel-converter" },
  { label: "PX to EM", href: "/px-to-em" },
];

const relatedTools = [
  { name: "PX to REM", description: "Convert pixels to rem units", href: "/px-to-rem", icon: "🔤" },
  { name: "PX to PT", description: "Convert pixels to points", href: "/px-to-pt", icon: "📝" },
  { name: "PX to VW", description: "Convert pixels to viewport width", href: "/px-to-vw", icon: "📏" },
  { name: "Pixels to Inches", description: "Convert pixels to inches", href: "/pixels-to-inches", icon: "📐" },
  { name: "Pixels to MM", description: "Convert pixels to millimeters", href: "/pixels-to-mm", icon: "📎" },
];

const faqItems = [
  {
    question: "What is the difference between em and rem?",
    answer:
      "EM is relative to the parent element's font size, while REM is relative to the root (html) element's font size. EM compounds — if a parent is 2em inside another 2em parent, it becomes 4x the root size. REM always references the root, avoiding compounding.",
  },
  {
    question: "How do I convert px to em?",
    answer:
      "Divide the pixel value by the parent element's font size. If the parent is 16px: 24px / 16 = 1.5em. If the parent is 20px: 24px / 20 = 1.2em. The parent context matters for em calculations.",
  },
  {
    question: "When should I use em instead of rem?",
    answer:
      "Use em when you want sizing relative to the component's own font size. For example, padding of 1em around text always creates proportional spacing regardless of the text size. Use rem for consistent sizing across the entire page.",
  },
  {
    question: "Why is em useful for component design?",
    answer:
      "EM allows components to scale proportionally. A button with font-size, padding, and border-radius all in em units will scale up or down uniformly when you change just the font-size, making responsive component design easier.",
  },
  {
    question: "What is the compounding problem with em?",
    answer:
      "When nested elements use em, sizes multiply. A 1.5em font inside a 1.5em container becomes 2.25x the root size (1.5 x 1.5). This cascading effect can cause unexpected sizing. REM solves this by always referencing the root element.",
  },
];

export default function PxToEmPage() {
  return (
    <ConverterLayout
      title="PX to EM Converter"
      description="Convert pixels to em units with adjustable parent font size."
      extractiveAnswer="To convert px to em, divide the pixel value by the parent element's font size. With a 16px parent: 16px = 1em, 24px = 1.5em, 32px = 2em. Unlike rem, em is relative to the parent element, not the root."
      breadcrumbs={breadcrumbs}
      relatedTools={relatedTools}
      faqItems={faqItems}
      content={
        <div>
          <h2>Understanding PX to EM Conversion</h2>
          <p>
            The em unit is relative to the font size of the parent element. Unlike rem (which references the root), em creates a cascading relationship where nested elements multiply their parent&apos;s size. The formula is: <strong>em = px / parent font size</strong>.
          </p>

          <h3>EM vs REM</h3>
          <ul>
            <li><strong>em:</strong> Relative to parent. Compounds when nested. Best for component-level proportional sizing.</li>
            <li><strong>rem:</strong> Relative to root. No compounding. Best for page-level consistent sizing.</li>
          </ul>

          <h3>Best Practices for EM Units</h3>
          <ul>
            <li><strong>Component padding:</strong> Use em for padding and margins within components so spacing scales with text size.</li>
            <li><strong>Media queries:</strong> EM-based media queries respect user font size preferences better than pixel-based ones.</li>
            <li><strong>Icon sizing:</strong> Set icon width/height to 1em to match adjacent text size automatically.</li>
            <li><strong>Line height:</strong> Unitless values (like 1.5) work similarly to em for line-height and are preferred.</li>
          </ul>

          <h3>The Compounding Effect</h3>
          <p>
            If a list has <code>font-size: 1.2em</code>, nested lists compound: the first level is 1.2x, the second is 1.44x (1.2 x 1.2), the third is 1.728x. This is why rem is often preferred for font sizes in modern CSS.
          </p>
        </div>
      }
    >
      <CssConverter
        mode="px-to-em"
        fromLabel="Pixels (px)"
        toLabel="EM"
        baseLabel="Parent Font Size (px)"
        defaultBase={16}
        formula="em = px / parent font size"
      />
    </ConverterLayout>
  );
}
