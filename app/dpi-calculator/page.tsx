import type { Metadata } from "next";
import { ConverterLayout } from "@/components/tools/ConverterLayout";
import { DpiCalculator } from "./DpiCalculator";

export const metadata: Metadata = {
  title: "DPI Calculator — Calculate Dots Per Inch for Any Screen",
  description:
    "Calculate DPI (dots per inch) for any screen by entering width, height, and diagonal size. Includes presets for popular monitors, laptops, and phones.",
  alternates: {
    canonical: "/dpi-calculator",
  },
  openGraph: {
    title: "DPI Calculator — Calculate Dots Per Inch for Any Screen",
    description:
      "Calculate DPI for any display. Enter resolution and screen size to find pixel density instantly.",
    url: "/dpi-calculator",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Pixel Converter", href: "/pixel-converter" },
  { label: "DPI Calculator", href: "/dpi-calculator" },
];

const relatedTools = [
  { name: "PPI Calculator", description: "Calculate pixels per inch for screens", href: "/ppi-calculator", icon: "🖥️" },
  { name: "DPI Converter", description: "Convert between DPI resolutions", href: "/dpi-converter", icon: "🔄" },
  { name: "Image DPI Checker", description: "Check the DPI of uploaded images", href: "/image-dpi-checker", icon: "🔍" },
  { name: "Screen Resolution Checker", description: "Detect your screen resolution", href: "/screen-resolution-checker", icon: "📺" },
  { name: "Pixels to Inches", description: "Convert pixels to inches", href: "/pixels-to-inches", icon: "📐" },
];

const faqItems = [
  {
    question: "What is DPI and how is it calculated?",
    answer:
      "DPI (dots per inch) measures pixel density on a screen. It is calculated using the formula: DPI = sqrt(width² + height²) / diagonal. This gives you the number of pixels packed into each inch of the display diagonal.",
  },
  {
    question: "What is a good DPI for a monitor?",
    answer:
      "For general desktop use at arm's length, 90-110 DPI is comfortable. For high-resolution work, 150+ DPI (like Retina displays) provides sharper text and images. A 27-inch 4K monitor has about 163 DPI, which is considered excellent.",
  },
  {
    question: "What is the difference between DPI and PPI?",
    answer:
      "DPI (dots per inch) traditionally refers to print resolution, while PPI (pixels per inch) refers to screen resolution. In practice, these terms are often used interchangeably when discussing displays. Both measure pixel density.",
  },
  {
    question: "Why does DPI matter for design work?",
    answer:
      "DPI determines how sharp content appears on screen and in print. Higher DPI means more pixels per inch, resulting in crisper text and images. Designers need to know DPI to ensure their work looks correct at the intended viewing distance.",
  },
  {
    question: "How do I find the DPI of my current screen?",
    answer:
      "Enter your screen's resolution (width and height in pixels) and diagonal size in inches into the calculator above. You can find resolution in display settings and diagonal size in your monitor's specifications or by measuring corner to corner.",
  },
];

export default function DpiCalculatorPage() {
  return (
    <ConverterLayout
      title="DPI Calculator"
      description="Calculate the DPI (dots per inch) of any screen or display."
      slug="/dpi-calculator"
      extractiveAnswer="To calculate DPI, use the formula: DPI = sqrt(width² + height²) / diagonal. For example, a 24-inch 1080p monitor (1920x1080) has a DPI of 91.79, while a 27-inch 4K display (3840x2160) has 163.18 DPI."
      breadcrumbs={breadcrumbs}
      relatedTools={relatedTools}
      faqItems={faqItems}
      content={
        <div>
          <h2>Understanding DPI for Screens</h2>
          <p>
            DPI (dots per inch) measures how many pixels are packed into each inch of a display. Higher DPI means sharper, more detailed images and text. This calculator uses the Pythagorean theorem to find the diagonal pixel count, then divides by the physical diagonal size.
          </p>

          <h3>How the Calculation Works</h3>
          <p>
            The formula calculates the total number of pixels along the screen diagonal using <strong>sqrt(width² + height²)</strong>, then divides by the physical diagonal measurement in inches to determine how many pixels occupy each inch.
          </p>

          <h3>DPI Ranges by Use Case</h3>
          <ul>
            <li><strong>72-96 DPI</strong> — Standard office monitors, comfortable for reading at arm&apos;s length.</li>
            <li><strong>110-140 DPI</strong> — High-quality desktop displays, noticeably sharper text.</li>
            <li><strong>140-220 DPI</strong> — Retina/HiDPI laptop screens, where individual pixels are not visible.</li>
            <li><strong>300+ DPI</strong> — Smartphone displays, extremely sharp at close viewing distances.</li>
          </ul>

          <h3>Common Use Cases</h3>
          <ul>
            <li><strong>Monitor shopping:</strong> Compare pixel density across different display sizes and resolutions.</li>
            <li><strong>Design work:</strong> Ensure your designs will appear at the correct physical size on target displays.</li>
            <li><strong>Accessibility:</strong> Choose a DPI that provides comfortable reading at your typical viewing distance.</li>
            <li><strong>Multi-monitor setups:</strong> Match DPI across displays for consistent sizing.</li>
          </ul>

          <h2>How Is DPI Calculated Step by Step?</h2>
          <p>
            The DPI formula has three steps. First, square the width and height pixel counts: for a 1920x1080 display, that gives 3,686,400 and 1,166,400. Second, add those together and take the square root: sqrt(4,852,800) = 2,202.9 pixels along the diagonal. Third, divide by the physical diagonal in inches: 2,202.9 / 24 = 91.79 DPI for a 24-inch monitor. The same calculation for a 27-inch 4K display (3840x2160) yields sqrt(14,745,600 + 4,665,600) / 27 = 4,406.8 / 27 = 163.18 DPI.
          </p>

          <h2>Why Does DPI Matter for Different Devices?</h2>
          <p>
            Viewing distance determines how much DPI you need. Smartphones are held 10-12 inches from your eyes, so they need 300+ DPI for pixels to be invisible. Laptops sit at 18-24 inches and need about 200-250 DPI for "Retina" clarity. Desktop monitors at arm's length (24-30 inches) look sharp at 110+ DPI. Television screens viewed from a couch (6-10 feet away) only need 40-80 DPI. This is why a 55-inch 4K TV has just 80 DPI but still looks perfectly sharp from across the room.
          </p>

          <h2>DPI Ranges by Device Category</h2>
          <ul>
            <li><strong>Web/screen standard:</strong> 72-96 DPI. The CSS specification defines 1 px as 1/96 inch.</li>
            <li><strong>Standard print:</strong> 150 DPI. Suitable for newspapers, flyers, and drafts.</li>
            <li><strong>Professional print:</strong> 300 DPI. The industry standard for magazines, brochures, and photos.</li>
            <li><strong>Commercial/fine art:</strong> 600 DPI. Used for fine art reproduction, detailed technical drawings, and medical imaging.</li>
            <li><strong>Ultra-high resolution:</strong> 1200+ DPI. Specialty applications like microprinting and security documents.</li>
          </ul>
        </div>
      }
    >
      <DpiCalculator />
    </ConverterLayout>
  );
}
