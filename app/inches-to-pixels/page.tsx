import type { Metadata } from "next";
import { ConverterLayout } from "@/components/tools/ConverterLayout";
import { UnitConverter } from "@/components/tools/UnitConverter";

export const metadata: Metadata = {
  title: "Inches to Pixels Converter — Instant IN to PX with DPI",
  description:
    "Convert inches to pixels with adjustable DPI settings. Free calculator for designers converting physical measurements to digital dimensions.",
  openGraph: {
    title: "Inches to Pixels Converter — Instant IN to PX with DPI",
    description:
      "Convert inches to pixels with adjustable DPI. Free calculator for web and print design.",
    url: "/inches-to-pixels",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Pixel Converter", href: "/pixel-converter" },
  { label: "Inches to Pixels", href: "/inches-to-pixels" },
];

const relatedTools = [
  { name: "Pixels to Inches", description: "Convert pixels back to inches", href: "/pixels-to-inches", icon: "🔄" },
  { name: "CM to Pixels", description: "Convert centimeters to pixels", href: "/cm-to-pixels", icon: "📏" },
  { name: "MM to Pixels", description: "Convert millimeters to pixels", href: "/mm-to-pixels", icon: "📎" },
  { name: "Feet to Pixels", description: "Convert feet to pixel dimensions", href: "/feet-to-pixels", icon: "📐" },
  { name: "Pixels to CM", description: "Convert pixels to centimeters", href: "/pixels-to-cm", icon: "🔄" },
];

const faqItems = [
  {
    question: "How do I convert inches to pixels?",
    answer:
      "Multiply the number of inches by the DPI (dots per inch). For example, 10 inches at 96 DPI equals 960 pixels (10 x 96 = 960). The DPI setting determines how many pixels represent one physical inch.",
  },
  {
    question: "How many pixels is 1 inch at 96 DPI?",
    answer:
      "At 96 DPI, 1 inch equals exactly 96 pixels. This is the standard DPI for web design on Windows displays and is the most commonly used value for screen-based design work.",
  },
  {
    question: "How many pixels is 1 inch at 300 DPI?",
    answer:
      "At 300 DPI, 1 inch equals 300 pixels. This is the standard resolution for professional print output, including magazines, brochures, and high-quality photo prints.",
  },
  {
    question: "What size in pixels is an 8.5 x 11 inch document?",
    answer:
      "At 96 DPI (web), it is 816 x 1056 pixels. At 300 DPI (print), it is 2550 x 3300 pixels. The pixel dimensions scale directly with the DPI setting.",
  },
  {
    question: "Does changing DPI change the number of pixels?",
    answer:
      "When converting from inches to pixels, yes — a higher DPI produces more pixels for the same physical size. When an image already exists, changing DPI in metadata only changes its print size, not the actual pixel count.",
  },
];

export default function InchesToPixelsPage() {
  return (
    <ConverterLayout
      title="Inches to Pixels Converter"
      description="Convert inches to pixel dimensions with DPI control for web and print design."
      extractiveAnswer="To convert inches to pixels, multiply the inch value by DPI. At 96 DPI (web standard), 10 inches equals 960 pixels. At 300 DPI (print quality), 10 inches equals 3,000 pixels."
      breadcrumbs={breadcrumbs}
      relatedTools={relatedTools}
      faqItems={faqItems}
      content={
        <div>
          <h2>How Inch to Pixel Conversion Works</h2>
          <p>
            Converting inches to pixels is essential when translating physical design specifications into digital formats. The formula is simple:
          </p>
          <p>
            <strong>Pixels = Inches x DPI</strong>
          </p>
          <p>
            The DPI setting determines the resolution. Web designs typically use 96 DPI, while print projects require 300 DPI for sharp, professional output.
          </p>

          <h3>Common Use Cases</h3>
          <ul>
            <li><strong>Creating print-ready files:</strong> Set up a document at the correct pixel dimensions for print at 300 DPI.</li>
            <li><strong>Banner and signage:</strong> Calculate pixel requirements for large-format printing.</li>
            <li><strong>Photo cropping:</strong> Determine the pixel dimensions needed for a specific print size.</li>
            <li><strong>UI design specs:</strong> Convert physical size requirements into pixel values for screen layouts.</li>
          </ul>

          <h3>Standard Document Sizes in Pixels</h3>
          <ul>
            <li><strong>Letter (8.5 x 11 in)</strong> — 816 x 1056 px at 96 DPI, 2550 x 3300 px at 300 DPI</li>
            <li><strong>A4 (8.27 x 11.69 in)</strong> — 794 x 1123 px at 96 DPI, 2481 x 3507 px at 300 DPI</li>
            <li><strong>4 x 6 in photo</strong> — 384 x 576 px at 96 DPI, 1200 x 1800 px at 300 DPI</li>
            <li><strong>5 x 7 in photo</strong> — 480 x 672 px at 96 DPI, 1500 x 2100 px at 300 DPI</li>
          </ul>
        </div>
      }
    >
      <UnitConverter
        fromUnit="Inches"
        toUnit="Pixels"
        conversionType="in-to-px"
        formula="pixels = inches x DPI"
        commonValues={[0.5, 1, 2, 3, 4, 5, 6, 8, 10, 12]}
      />
    </ConverterLayout>
  );
}
