import type { Metadata } from "next";
import { ConverterLayout } from "@/components/tools/ConverterLayout";
import { UnitConverter } from "@/components/tools/UnitConverter";

export const metadata: Metadata = {
  title: "Pixels to MM Converter — PX to Millimeters with DPI",
  description:
    "Convert pixels to millimeters with adjustable DPI settings. Free precision tool for designers converting digital dimensions to metric measurements.",
  openGraph: {
    title: "Pixels to MM Converter — PX to Millimeters with DPI",
    description:
      "Convert pixels to millimeters instantly. Free DPI-aware calculator for precision design work.",
    url: "/pixels-to-mm",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Pixel Converter", href: "/pixel-converter" },
  { label: "Pixels to MM", href: "/pixels-to-mm" },
];

const relatedTools = [
  { name: "MM to Pixels", description: "Convert millimeters to pixels", href: "/mm-to-pixels", icon: "🔄" },
  { name: "Pixels to CM", description: "Convert pixels to centimeters", href: "/pixels-to-cm", icon: "📏" },
  { name: "Pixels to Inches", description: "Convert pixels to inches", href: "/pixels-to-inches", icon: "📐" },
  { name: "CM to Pixels", description: "Convert centimeters to pixels", href: "/cm-to-pixels", icon: "📏" },
  { name: "Pixels to Feet", description: "Convert pixels to feet", href: "/pixels-to-feet", icon: "📐" },
];

const faqItems = [
  {
    question: "How do I convert pixels to millimeters?",
    answer:
      "Multiply the pixel count by 25.4, then divide by DPI. For example, 378 pixels at 96 DPI equals approximately 100 mm (378 x 25.4 / 96 = 100.01).",
  },
  {
    question: "How many millimeters is 1 pixel?",
    answer:
      "At 96 DPI, 1 pixel equals approximately 0.265 mm. At 300 DPI, 1 pixel equals approximately 0.085 mm. The physical size of a pixel depends entirely on the DPI setting.",
  },
  {
    question: "How do I find the size of a pixel on my screen?",
    answer:
      "Divide your screen's physical width (in mm) by its horizontal pixel resolution. For example, a 27-inch (686 mm wide) display at 2560 pixels has pixels approximately 0.268 mm wide.",
  },
  {
    question: "Why use millimeters instead of centimeters?",
    answer:
      "Millimeters provide 10x the precision of centimeters without decimals. In fields like engineering, packaging, and precision printing, specifications are commonly given in millimeters for accuracy.",
  },
  {
    question: "What pixel count do I need for a 100 mm print at 300 DPI?",
    answer:
      "For 100 mm at 300 DPI, you need approximately 1,181 pixels (100 x 300 / 25.4 = 1181.1). This ensures sharp, professional-quality output at the specified size.",
  },
];

export default function PixelsToMmPage() {
  return (
    <ConverterLayout
      title="Pixels to Millimeters Converter"
      description="Convert pixel dimensions to millimeters with precision DPI control."
      extractiveAnswer="To convert pixels to millimeters, multiply pixels by 25.4 and divide by DPI. At 96 DPI, 378 pixels equals 100 mm. At 300 DPI, 1,181 pixels equals 100 mm."
      breadcrumbs={breadcrumbs}
      relatedTools={relatedTools}
      faqItems={faqItems}
      content={
        <div>
          <h2>How Pixel to Millimeter Conversion Works</h2>
          <p>
            Converting pixels to millimeters gives you precise physical measurements from digital dimensions. The formula is:
          </p>
          <p>
            <strong>Millimeters = (Pixels x 25.4) / DPI</strong>
          </p>
          <p>
            This formula converts pixels to inches first (pixels / DPI), then to millimeters (inches x 25.4). The result tells you the exact physical width or height at the given DPI.
          </p>

          <h3>Common Use Cases</h3>
          <ul>
            <li><strong>Quality verification:</strong> Check if an image has enough resolution for a specific print size in mm.</li>
            <li><strong>Manufacturing specs:</strong> Convert digital mockup dimensions to production measurements.</li>
            <li><strong>Precision layout:</strong> Verify that screen elements correspond to intended physical sizes.</li>
            <li><strong>Medical imaging:</strong> Convert digital scan dimensions to real-world measurements.</li>
          </ul>

          <h3>Pixel Size Reference</h3>
          <ul>
            <li><strong>At 72 DPI</strong> — 1 pixel = 0.353 mm (typical older Mac display)</li>
            <li><strong>At 96 DPI</strong> — 1 pixel = 0.265 mm (standard web/Windows)</li>
            <li><strong>At 150 DPI</strong> — 1 pixel = 0.169 mm (medium print quality)</li>
            <li><strong>At 300 DPI</strong> — 1 pixel = 0.085 mm (professional print)</li>
          </ul>
        </div>
      }
    >
      <UnitConverter
        fromUnit="Pixels"
        toUnit="Millimeters"
        conversionType="px-to-mm"
        formula="mm = (pixels x 25.4) / DPI"
        commonValues={[1, 50, 100, 300, 500, 1000, 1920, 3840]}
      />
    </ConverterLayout>
  );
}
