import type { Metadata } from "next";
import { ConverterLayout } from "@/components/tools/ConverterLayout";
import { UnitConverter } from "@/components/tools/UnitConverter";

export const metadata: Metadata = {
  title: "Feet to Pixels Converter — FT to PX with DPI",
  description:
    "Convert feet to pixels with adjustable DPI. Free online calculator for large-format design, signage, banners, and architectural visualization.",
  openGraph: {
    title: "Feet to Pixels Converter — FT to PX with DPI",
    description:
      "Convert feet to pixels with DPI control. Free tool for large-format and architectural design.",
    url: "/feet-to-pixels",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Pixel Converter", href: "/pixel-converter" },
  { label: "Feet to Pixels", href: "/feet-to-pixels" },
];

const relatedTools = [
  { name: "Pixels to Feet", description: "Convert pixels to feet", href: "/pixels-to-feet", icon: "🔄" },
  { name: "Inches to Pixels", description: "Convert inches to pixels", href: "/inches-to-pixels", icon: "📐" },
  { name: "Pixels to Inches", description: "Convert pixels to inches", href: "/pixels-to-inches", icon: "📏" },
  { name: "CM to Pixels", description: "Convert centimeters to pixels", href: "/cm-to-pixels", icon: "📏" },
  { name: "MM to Pixels", description: "Convert millimeters to pixels", href: "/mm-to-pixels", icon: "📎" },
];

const faqItems = [
  {
    question: "How do I convert feet to pixels?",
    answer:
      "Multiply the feet by 12 (to get inches), then multiply by DPI. For example, 3 feet at 96 DPI equals 3,456 pixels (3 x 12 x 96 = 3,456).",
  },
  {
    question: "How many pixels is 1 foot at 96 DPI?",
    answer:
      "At 96 DPI, 1 foot equals 1,152 pixels (12 inches x 96 pixels per inch = 1,152). This is the standard for web-resolution large-format design.",
  },
  {
    question: "How many pixels is 1 foot at 300 DPI?",
    answer:
      "At 300 DPI, 1 foot equals 3,600 pixels (12 inches x 300 pixels per inch = 3,600). This high resolution is used for print-quality large-format output.",
  },
  {
    question: "What DPI should I use for large-format printing?",
    answer:
      "Large-format prints viewed from a distance (banners, billboards) can use 72-150 DPI. Prints viewed up close (trade show displays, posters) should use 150-300 DPI for sharp details.",
  },
  {
    question: "How large of a file do I need for a 4-foot banner at 150 DPI?",
    answer:
      "A 4-foot wide banner at 150 DPI requires 7,200 pixels wide (4 x 12 x 150 = 7,200). For a 4 x 8 foot banner, the file would be 7,200 x 14,400 pixels.",
  },
];

export default function FeetToPixelsPage() {
  return (
    <ConverterLayout
      title="Feet to Pixels Converter"
      description="Convert feet to pixel dimensions with DPI control for large-format design."
      extractiveAnswer="To convert feet to pixels, multiply feet by 12 (inches per foot) then by DPI. At 96 DPI, 3 feet equals 3,456 pixels. At 150 DPI, 3 feet equals 5,400 pixels."
      breadcrumbs={breadcrumbs}
      relatedTools={relatedTools}
      faqItems={faqItems}
      content={
        <div>
          <h2>How Feet to Pixel Conversion Works</h2>
          <p>
            Converting feet to pixels is essential for large-format design projects like banners, signage, and wall graphics. The formula is:
          </p>
          <p>
            <strong>Pixels = Feet x 12 x DPI</strong>
          </p>
          <p>
            Since there are 12 inches in a foot, you first convert feet to inches, then multiply by DPI to get the pixel count.
          </p>

          <h3>Common Use Cases</h3>
          <ul>
            <li><strong>Banner design:</strong> Calculate pixel dimensions for trade show banners and event signage.</li>
            <li><strong>Wall murals:</strong> Determine the resolution needed for wall-sized prints.</li>
            <li><strong>Billboard design:</strong> Plan pixel dimensions for large outdoor advertising.</li>
            <li><strong>Architectural visualization:</strong> Convert room dimensions to pixel sizes for renderings.</li>
          </ul>

          <h3>Large-Format DPI Guidelines</h3>
          <ul>
            <li><strong>72 DPI</strong> — Billboards viewed from 50+ feet away.</li>
            <li><strong>100 DPI</strong> — Large banners viewed from 10-20 feet.</li>
            <li><strong>150 DPI</strong> — Trade show displays and posters viewed from 3-10 feet.</li>
            <li><strong>300 DPI</strong> — Close-up print quality, rarely needed for large format.</li>
          </ul>

          <h3>Common Banner Sizes in Pixels (at 150 DPI)</h3>
          <ul>
            <li><strong>2 x 4 feet</strong> — 3,600 x 7,200 pixels</li>
            <li><strong>3 x 6 feet</strong> — 5,400 x 10,800 pixels</li>
            <li><strong>4 x 8 feet</strong> — 7,200 x 14,400 pixels</li>
            <li><strong>8 x 10 feet</strong> — 14,400 x 18,000 pixels</li>
          </ul>
        </div>
      }
    >
      <UnitConverter
        fromUnit="Feet"
        toUnit="Pixels"
        conversionType="ft-to-px"
        formula="pixels = feet x 12 x DPI"
        commonValues={[0.5, 1, 2, 3, 4, 5, 6, 8, 10, 12]}
      />
    </ConverterLayout>
  );
}
