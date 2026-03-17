import type { Metadata } from "next";
import { ConverterLayout } from "@/components/tools/ConverterLayout";
import { UnitConverter } from "@/components/tools/UnitConverter";

export const metadata: Metadata = {
  title: "MM to Pixels Converter — Millimeters to PX with DPI",
  description:
    "Convert millimeters to pixels with adjustable DPI. Free online calculator for precise metric-to-digital conversion in design and engineering.",
  openGraph: {
    title: "MM to Pixels Converter — Millimeters to PX with DPI",
    description:
      "Convert millimeters to pixels with DPI control. Free precision tool for designers and engineers.",
    url: "/mm-to-pixels",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Pixel Converter", href: "/pixel-converter" },
  { label: "MM to Pixels", href: "/mm-to-pixels" },
];

const relatedTools = [
  { name: "Pixels to MM", description: "Convert pixels to millimeters", href: "/pixels-to-mm", icon: "🔄" },
  { name: "CM to Pixels", description: "Convert centimeters to pixels", href: "/cm-to-pixels", icon: "📏" },
  { name: "Inches to Pixels", description: "Convert inches to pixels", href: "/inches-to-pixels", icon: "📐" },
  { name: "Pixels to CM", description: "Convert pixels to centimeters", href: "/pixels-to-cm", icon: "🔄" },
  { name: "Pixels to Inches", description: "Convert pixels to inches", href: "/pixels-to-inches", icon: "📐" },
];

const faqItems = [
  {
    question: "How do I convert millimeters to pixels?",
    answer:
      "Multiply the millimeters by DPI and divide by 25.4 (since there are 25.4 mm per inch). For example, 100 mm at 96 DPI equals about 378 pixels (100 x 96 / 25.4 = 377.95).",
  },
  {
    question: "How many pixels is 1 mm at 96 DPI?",
    answer:
      "At 96 DPI, 1 millimeter equals approximately 3.78 pixels (96 / 25.4 = 3.78). This is the standard for web design on most desktop displays.",
  },
  {
    question: "How many pixels is 1 mm at 300 DPI?",
    answer:
      "At 300 DPI, 1 millimeter equals approximately 11.81 pixels (300 / 25.4 = 11.81). This precision is standard for high-quality print output.",
  },
  {
    question: "When would I need mm to pixel conversion?",
    answer:
      "This conversion is common in precision design work such as product labels, business cards, engineering drawings, and any project where specifications are provided in millimeters but output is digital.",
  },
  {
    question: "What is the relationship between mm and inches for pixel conversion?",
    answer:
      "There are exactly 25.4 millimeters in one inch. This constant is used in the conversion formula: pixels = mm x DPI / 25.4. It bridges metric measurements to the inch-based DPI system.",
  },
];

export default function MmToPixelsPage() {
  return (
    <ConverterLayout
      title="Millimeters to Pixels Converter"
      description="Convert millimeters to pixel dimensions with precise DPI control."
      extractiveAnswer="To convert millimeters to pixels, multiply millimeters by DPI and divide by 25.4. At 96 DPI, 100 mm equals 378 pixels. At 300 DPI, 100 mm equals 1,181 pixels."
      breadcrumbs={breadcrumbs}
      relatedTools={relatedTools}
      faqItems={faqItems}
      content={
        <div>
          <h2>How Millimeter to Pixel Conversion Works</h2>
          <p>
            Millimeters provide the highest precision among common metric units. Converting to pixels requires the DPI value and the mm-to-inch constant:
          </p>
          <p>
            <strong>Pixels = (MM x DPI) / 25.4</strong>
          </p>
          <p>
            Since there are 25.4 millimeters in one inch, dividing by 25.4 converts millimeters to inches, which is then multiplied by DPI to get pixel count.
          </p>

          <h3>Common Use Cases</h3>
          <ul>
            <li><strong>Business card design:</strong> Standard sizes like 85 x 55 mm converted to pixel dimensions.</li>
            <li><strong>Product labels:</strong> Small labels where millimeter precision matters.</li>
            <li><strong>Engineering drawings:</strong> Technical illustrations specified in millimeters.</li>
            <li><strong>Precision printing:</strong> Fine-detail work requiring exact pixel-to-mm mapping.</li>
          </ul>

          <h3>Common Sizes in Pixels (at 300 DPI)</h3>
          <ul>
            <li><strong>Business card (85 x 55 mm)</strong> — 1004 x 650 pixels</li>
            <li><strong>Credit card (85.6 x 53.98 mm)</strong> — 1011 x 638 pixels</li>
            <li><strong>Postage stamp (25 x 30 mm)</strong> — 295 x 354 pixels</li>
            <li><strong>SD card label (24 x 32 mm)</strong> — 283 x 378 pixels</li>
          </ul>
        </div>
      }
    >
      <UnitConverter
        fromUnit="Millimeters"
        toUnit="Pixels"
        conversionType="mm-to-px"
        formula="pixels = (mm x DPI) / 25.4"
        commonValues={[1, 5, 10, 25, 50, 55, 85, 100, 210, 297]}
      />
    </ConverterLayout>
  );
}
