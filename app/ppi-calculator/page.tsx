import type { Metadata } from "next";
import { ConverterLayout } from "@/components/tools/ConverterLayout";
import { PpiCalculator } from "./PpiCalculator";

export const metadata: Metadata = {
  title: "PPI Calculator — Pixels Per Inch for Any Display",
  description:
    "Calculate PPI (pixels per inch) for any screen. Compare pixel density across iPhones, Samsung Galaxy, MacBooks, iPads, and desktop monitors.",
  alternates: {
    canonical: "/ppi-calculator",
  },
  openGraph: {
    title: "PPI Calculator — Pixels Per Inch for Any Display",
    description:
      "Calculate PPI for any screen and compare device pixel densities side by side.",
    url: "/ppi-calculator",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Pixel Converter", href: "/pixel-converter" },
  { label: "PPI Calculator", href: "/ppi-calculator" },
];

const relatedTools = [
  { name: "DPI Calculator", description: "Calculate dots per inch for screens", href: "/dpi-calculator", icon: "🖥️" },
  { name: "DPI Converter", description: "Convert between DPI resolutions", href: "/dpi-converter", icon: "🔄" },
  { name: "Screen Resolution Checker", description: "Detect your screen resolution", href: "/screen-resolution-checker", icon: "📺" },
  { name: "Image Size Calculator", description: "Calculate physical size from pixels", href: "/image-size-calculator", icon: "📐" },
  { name: "Pixels to Inches", description: "Convert pixels to inches", href: "/pixels-to-inches", icon: "📏" },
];

const faqItems = [
  {
    question: "What is PPI and how does it differ from DPI?",
    answer:
      "PPI (pixels per inch) measures the pixel density of a display screen. DPI (dots per inch) traditionally refers to print resolution. For screens, PPI and DPI are often used interchangeably, though PPI is the technically correct term for displays.",
  },
  {
    question: "What PPI makes a display 'Retina'?",
    answer:
      "Apple's Retina standard means pixels are indistinguishable at typical viewing distance. For phones (held at 10-12 inches), this is about 300+ PPI. For laptops (18-24 inches), around 220+ PPI. For desktop monitors (24-30 inches), roughly 110+ PPI.",
  },
  {
    question: "Why do phones have higher PPI than monitors?",
    answer:
      "Phones are viewed much closer to the eye than monitors. A higher PPI is needed at close range to prevent visible pixels. A 460 PPI phone at 10 inches gives the same visual sharpness as a 110 PPI monitor at 24 inches.",
  },
  {
    question: "Does higher PPI always mean better display quality?",
    answer:
      "Not necessarily. Beyond the point where individual pixels become invisible at your typical viewing distance, higher PPI provides diminishing returns. Other factors like color accuracy, contrast ratio, and brightness also determine display quality.",
  },
  {
    question: "How do I find my device's PPI?",
    answer:
      "Enter your screen's resolution (found in display settings) and diagonal size (from device specifications) into the calculator. Alternatively, select a preset for common devices like iPhones, Samsung Galaxy phones, MacBooks, and Dell monitors.",
  },
];

export default function PpiCalculatorPage() {
  return (
    <ConverterLayout
      title="PPI Calculator"
      description="Calculate pixels per inch for any screen and compare across devices."
      slug="/ppi-calculator"
      extractiveAnswer="PPI (pixels per inch) measures screen pixel density. Calculate it with: PPI = sqrt(width² + height²) / diagonal. An iPhone 15 Pro has 460 PPI, a MacBook Pro 14-inch has 254 PPI, and a 27-inch 4K monitor has 163 PPI."
      breadcrumbs={breadcrumbs}
      relatedTools={relatedTools}
      faqItems={faqItems}
      content={
        <div>
          <h2>Understanding Pixels Per Inch</h2>
          <p>
            PPI (pixels per inch) quantifies how densely pixels are packed on a display. Higher PPI means smaller pixels, resulting in sharper images and smoother text. This metric is essential when comparing displays or designing for specific devices.
          </p>

          <h3>PPI Ranges by Device Type</h3>
          <ul>
            <li><strong>Desktop monitors:</strong> 72-163 PPI. Standard 1080p monitors at 24 inches have about 92 PPI; 4K monitors at 27 inches reach 163 PPI.</li>
            <li><strong>Laptops:</strong> 110-254 PPI. Standard laptops are around 120 PPI, while Retina/HiDPI laptops reach 220+ PPI.</li>
            <li><strong>Tablets:</strong> 130-265 PPI. The iPad Pro achieves 264 PPI for crisp text and detailed graphics.</li>
            <li><strong>Smartphones:</strong> 300-570 PPI. Modern flagship phones exceed 400 PPI for pixel-perfect display at close range.</li>
          </ul>

          <h3>Why PPI Matters for Designers</h3>
          <ul>
            <li><strong>Asset preparation:</strong> Create @2x and @3x assets for high-PPI screens to avoid blurry images.</li>
            <li><strong>Font rendering:</strong> Higher PPI allows for thinner, more elegant font weights without losing readability.</li>
            <li><strong>UI scaling:</strong> Understanding PPI helps set appropriate CSS device-pixel-ratio media queries.</li>
            <li><strong>Print-to-screen:</strong> Match print DPI expectations to screen PPI for accurate previews.</li>
          </ul>
        </div>
      }
    >
      <PpiCalculator />
    </ConverterLayout>
  );
}
