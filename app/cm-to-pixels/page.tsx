import type { Metadata } from "next";
import { ConverterLayout } from "@/components/tools/ConverterLayout";
import { UnitConverter } from "@/components/tools/UnitConverter";

export const metadata: Metadata = {
  title: "CM to Pixels Converter — Centimeters to PX with DPI",
  description:
    "Convert centimeters to pixels with adjustable DPI. Free online tool for designers working with metric measurements and digital dimensions.",
  openGraph: {
    title: "CM to Pixels Converter — Centimeters to PX with DPI",
    description:
      "Convert centimeters to pixels with DPI control. Free tool for metric to digital conversion.",
    url: "/cm-to-pixels",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Pixel Converter", href: "/pixel-converter" },
  { label: "CM to Pixels", href: "/cm-to-pixels" },
];

const relatedTools = [
  { name: "Pixels to CM", description: "Convert pixels to centimeters", href: "/pixels-to-cm", icon: "🔄" },
  { name: "MM to Pixels", description: "Convert millimeters to pixels", href: "/mm-to-pixels", icon: "📎" },
  { name: "Inches to Pixels", description: "Convert inches to pixels", href: "/inches-to-pixels", icon: "📐" },
  { name: "Pixels to Inches", description: "Convert pixels to inches", href: "/pixels-to-inches", icon: "📏" },
  { name: "Feet to Pixels", description: "Convert feet to pixels", href: "/feet-to-pixels", icon: "📐" },
];

const faqItems = [
  {
    question: "How do I convert centimeters to pixels?",
    answer:
      "Multiply the centimeters by DPI, then divide by 2.54 (since there are 2.54 cm per inch). For example, 10 cm at 96 DPI equals about 378 pixels (10 x 96 / 2.54 = 377.95).",
  },
  {
    question: "How many pixels is 1 cm at 96 DPI?",
    answer:
      "At 96 DPI, 1 centimeter equals approximately 37.8 pixels (96 / 2.54 = 37.795). This is the standard pixel density for web content on Windows displays.",
  },
  {
    question: "How many pixels is 1 cm at 300 DPI?",
    answer:
      "At 300 DPI, 1 centimeter equals approximately 118.1 pixels (300 / 2.54 = 118.11). This resolution is standard for professional print output.",
  },
  {
    question: "Why do I need to know the DPI for this conversion?",
    answer:
      "DPI (dots per inch) defines how many pixels represent one physical inch. Since centimeters are a physical unit, you need DPI to bridge the gap between physical and digital measurements.",
  },
  {
    question: "What is the relationship between cm, inches, and pixels?",
    answer:
      "There are 2.54 centimeters per inch. Pixels per inch is determined by DPI. So pixels = cm x DPI / 2.54. This three-way relationship connects metric measurements to digital dimensions.",
  },
];

export default function CmToPixelsPage() {
  return (
    <ConverterLayout
      title="Centimeters to Pixels Converter"
      description="Convert centimeters to pixel dimensions with DPI control."
      extractiveAnswer="To convert centimeters to pixels, multiply centimeters by DPI and divide by 2.54. At 96 DPI, 10 cm equals 378 pixels. At 300 DPI, 10 cm equals 1,181 pixels."
      breadcrumbs={breadcrumbs}
      relatedTools={relatedTools}
      faqItems={faqItems}
      content={
        <div>
          <h2>How CM to Pixel Conversion Works</h2>
          <p>
            Converting centimeters to pixels requires an intermediate step through inches, since DPI is defined as dots per <em>inch</em>. The formula is:
          </p>
          <p>
            <strong>Pixels = (CM x DPI) / 2.54</strong>
          </p>
          <p>
            The constant 2.54 represents the number of centimeters in one inch. This conversion is essential for designers in countries using the metric system who need to create digital assets at specific physical sizes.
          </p>

          <h3>Common Use Cases</h3>
          <ul>
            <li><strong>International print design:</strong> Convert metric specifications to pixel dimensions for digital production.</li>
            <li><strong>Product packaging:</strong> Calculate pixel dimensions for labels and packaging measured in centimeters.</li>
            <li><strong>Photo sizing:</strong> Determine pixel requirements for metric-sized photo prints.</li>
            <li><strong>A-series paper:</strong> Convert A4, A3, and other ISO paper sizes to pixel dimensions.</li>
          </ul>

          <h3>Common Paper Sizes in Pixels (at 300 DPI)</h3>
          <ul>
            <li><strong>A4 (21 x 29.7 cm)</strong> — 2480 x 3508 pixels</li>
            <li><strong>A3 (29.7 x 42 cm)</strong> — 3508 x 4961 pixels</li>
            <li><strong>A5 (14.8 x 21 cm)</strong> — 1748 x 2480 pixels</li>
            <li><strong>10 x 15 cm photo</strong> — 1181 x 1772 pixels</li>
          </ul>
        </div>
      }
    >
      <UnitConverter
        fromUnit="Centimeters"
        toUnit="Pixels"
        conversionType="cm-to-px"
        formula="pixels = (cm x DPI) / 2.54"
        commonValues={[1, 2, 5, 10, 15, 20, 21, 29.7, 42]}
      />
    </ConverterLayout>
  );
}
