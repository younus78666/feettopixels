import type { Metadata } from "next";
import { ConverterLayout } from "@/components/tools/ConverterLayout";
import { UnitConverter } from "@/components/tools/UnitConverter";

export const metadata: Metadata = {
  title: "Pixels to Inches Converter — Instant PX to IN with DPI",
  description:
    "Convert pixels to inches instantly with adjustable DPI. Free online calculator for web designers and print professionals. Supports 72, 96, 150, and 300 DPI.",
  openGraph: {
    title: "Pixels to Inches Converter — Instant PX to IN with DPI",
    description:
      "Convert pixels to inches instantly with adjustable DPI. Free online calculator for web, print, and graphic design.",
    url: "/pixels-to-inches",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Pixel Converter", href: "/pixel-converter" },
  { label: "Pixels to Inches", href: "/pixels-to-inches" },
];

const relatedTools = [
  { name: "Inches to Pixels", description: "Convert inches to pixel dimensions", href: "/inches-to-pixels", icon: "📐" },
  { name: "CM to Pixels", description: "Convert centimeters to pixels", href: "/cm-to-pixels", icon: "📏" },
  { name: "Pixels to CM", description: "Convert pixels to centimeters", href: "/pixels-to-cm", icon: "🔄" },
  { name: "Pixels to MM", description: "Convert pixels to millimeters", href: "/pixels-to-mm", icon: "📎" },
  { name: "Feet to Pixels", description: "Convert feet to pixel dimensions", href: "/feet-to-pixels", icon: "📐" },
];

const faqItems = [
  {
    question: "How do I convert pixels to inches?",
    answer:
      "Divide the number of pixels by the DPI (dots per inch). For example, 960 pixels at 96 DPI equals 10 inches (960 / 96 = 10). The DPI determines how many pixels fit in one inch.",
  },
  {
    question: "What DPI should I use for web design?",
    answer:
      "The standard DPI for web design is 96 DPI, which is the default on most Windows displays. Mac Retina displays use a higher pixel density, but CSS pixels still map to 96 DPI in standard web rendering.",
  },
  {
    question: "What DPI is used for print design?",
    answer:
      "Professional print typically uses 300 DPI for high-quality output. Magazine printing may use 300-350 DPI, while newspaper printing can use 150-200 DPI. The higher the DPI, the smaller the physical size for the same pixel count.",
  },
  {
    question: "Why does the same pixel count produce different inch values at different DPIs?",
    answer:
      "DPI defines how densely pixels are packed per inch. At 96 DPI, 960 pixels span 10 inches. At 300 DPI, those same 960 pixels span only 3.2 inches because each inch contains more pixels.",
  },
  {
    question: "How many pixels are in one inch?",
    answer:
      "It depends on the DPI setting. At 96 DPI (web standard), one inch equals 96 pixels. At 72 DPI, one inch equals 72 pixels. At 300 DPI (print standard), one inch equals 300 pixels.",
  },
];

export default function PixelsToInchesPage() {
  return (
    <ConverterLayout
      title="Pixels to Inches Converter"
      description="Convert pixels to inches with DPI awareness for web and print design."
      extractiveAnswer="To convert pixels to inches, divide the pixel count by DPI. At 96 DPI (web standard), 960 pixels equals 10 inches. At 300 DPI (print quality), 960 pixels equals 3.2 inches."
      breadcrumbs={breadcrumbs}
      relatedTools={relatedTools}
      faqItems={faqItems}
      content={
        <div>
          <h2>How Pixel to Inch Conversion Works</h2>
          <p>
            Converting pixels to inches requires knowing the DPI (dots per inch) of your target output. DPI defines how many pixels are packed into each physical inch. The formula is straightforward:
          </p>
          <p>
            <strong>Inches = Pixels / DPI</strong>
          </p>
          <p>
            For web design, the standard is 96 DPI. For professional print, 300 DPI is the norm. Choosing the right DPI ensures your designs display at the intended physical size.
          </p>

          <h3>Common Use Cases</h3>
          <ul>
            <li><strong>Print design:</strong> Determine the physical size of a digital image when printed at a specific DPI.</li>
            <li><strong>Web-to-print conversion:</strong> Check how web graphics will translate to physical print dimensions.</li>
            <li><strong>Photo printing:</strong> Calculate the maximum print size while maintaining quality at 300 DPI.</li>
            <li><strong>Display sizing:</strong> Understand how screen content maps to real-world measurements.</li>
          </ul>

          <h3>DPI Reference Guide</h3>
          <ul>
            <li><strong>72 DPI</strong> — Legacy Mac screen resolution, common for older web graphics.</li>
            <li><strong>96 DPI</strong> — Windows default, standard for modern web design.</li>
            <li><strong>150 DPI</strong> — Medium-quality print, suitable for large-format posters.</li>
            <li><strong>300 DPI</strong> — Professional print quality for brochures, magazines, and photos.</li>
          </ul>
        </div>
      }
    >
      <UnitConverter
        fromUnit="Pixels"
        toUnit="Inches"
        conversionType="px-to-in"
        formula="inches = pixels / DPI"
        commonValues={[1, 10, 72, 96, 100, 150, 300, 500, 1000, 1920]}
      />
    </ConverterLayout>
  );
}
