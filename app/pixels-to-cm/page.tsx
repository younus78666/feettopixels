import type { Metadata } from "next";
import { ConverterLayout } from "@/components/tools/ConverterLayout";
import { UnitConverter } from "@/components/tools/UnitConverter";

export const metadata: Metadata = {
  title: "Pixels to CM Converter — PX to Centimeters with DPI",
  description:
    "Convert pixels to centimeters with adjustable DPI settings. Free online tool for designers converting digital dimensions to metric measurements.",
  openGraph: {
    title: "Pixels to CM Converter — PX to Centimeters with DPI",
    description:
      "Convert pixels to centimeters instantly. Free DPI-aware calculator for web and print design.",
    url: "/pixels-to-cm",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Pixel Converter", href: "/pixel-converter" },
  { label: "Pixels to CM", href: "/pixels-to-cm" },
];

const relatedTools = [
  { name: "CM to Pixels", description: "Convert centimeters to pixels", href: "/cm-to-pixels", icon: "🔄" },
  { name: "Pixels to Inches", description: "Convert pixels to inches", href: "/pixels-to-inches", icon: "📐" },
  { name: "Pixels to MM", description: "Convert pixels to millimeters", href: "/pixels-to-mm", icon: "📎" },
  { name: "Inches to Pixels", description: "Convert inches to pixels", href: "/inches-to-pixels", icon: "📏" },
  { name: "Pixels to Feet", description: "Convert pixels to feet", href: "/pixels-to-feet", icon: "📐" },
];

const faqItems = [
  {
    question: "How do I convert pixels to centimeters?",
    answer:
      "Multiply the pixel count by 2.54, then divide by DPI. For example, 378 pixels at 96 DPI equals approximately 10 cm (378 x 2.54 / 96 = 10.0).",
  },
  {
    question: "How many centimeters is 1920 pixels at 96 DPI?",
    answer:
      "At 96 DPI, 1920 pixels equals approximately 50.8 cm (1920 x 2.54 / 96 = 50.8). This is the width of a standard 1080p display measured in centimeters.",
  },
  {
    question: "How many centimeters is 100 pixels?",
    answer:
      "At 96 DPI (web standard), 100 pixels equals approximately 2.65 cm. At 300 DPI (print), 100 pixels equals approximately 0.85 cm. The physical size depends on DPI.",
  },
  {
    question: "Why are centimeters useful for pixel conversion?",
    answer:
      "Most countries outside the US use the metric system. Knowing pixel-to-cm conversion is essential for international print design, product packaging, and any project with metric specifications.",
  },
  {
    question: "What is the difference between PPI and DPI?",
    answer:
      "PPI (pixels per inch) refers to screen resolution, while DPI (dots per inch) refers to print resolution. For pixel conversion purposes, they are used interchangeably since both define pixels per physical inch.",
  },
];

export default function PixelsToCmPage() {
  return (
    <ConverterLayout
      title="Pixels to Centimeters Converter"
      description="Convert pixel dimensions to centimeters with DPI awareness."
      extractiveAnswer="To convert pixels to centimeters, multiply pixels by 2.54 and divide by DPI. At 96 DPI, 960 pixels equals 25.4 cm. At 300 DPI, 960 pixels equals 8.13 cm."
      breadcrumbs={breadcrumbs}
      relatedTools={relatedTools}
      faqItems={faqItems}
      content={
        <div>
          <h2>How Pixel to Centimeter Conversion Works</h2>
          <p>
            Converting pixels to centimeters requires knowing the DPI and the relationship between inches and centimeters. The formula is:
          </p>
          <p>
            <strong>Centimeters = (Pixels x 2.54) / DPI</strong>
          </p>
          <p>
            This formula first converts pixels to inches (pixels / DPI), then converts inches to centimeters (inches x 2.54).
          </p>

          <h3>Common Use Cases</h3>
          <ul>
            <li><strong>Print proofing:</strong> Check the physical size of digital designs before printing.</li>
            <li><strong>Screen measurements:</strong> Determine the real-world size of on-screen elements.</li>
            <li><strong>International collaboration:</strong> Communicate pixel dimensions in metric units for global teams.</li>
            <li><strong>Photo sizing:</strong> Determine print dimensions for digital photos.</li>
          </ul>

          <h3>Quick Reference</h3>
          <ul>
            <li><strong>1 pixel at 96 DPI</strong> — 0.0265 cm (about 0.26 mm)</li>
            <li><strong>1 pixel at 300 DPI</strong> — 0.0085 cm (about 0.085 mm)</li>
            <li><strong>1080p width (1920 px) at 96 DPI</strong> — 50.8 cm</li>
            <li><strong>4K width (3840 px) at 96 DPI</strong> — 101.6 cm</li>
          </ul>
        </div>
      }
    >
      <UnitConverter
        fromUnit="Pixels"
        toUnit="Centimeters"
        conversionType="px-to-cm"
        formula="cm = (pixels x 2.54) / DPI"
        commonValues={[1, 50, 100, 300, 500, 1000, 1920, 3840]}
      />
    </ConverterLayout>
  );
}
