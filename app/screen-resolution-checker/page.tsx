import type { Metadata } from "next";
import { ConverterLayout } from "@/components/tools/ConverterLayout";
import { ScreenChecker } from "./ScreenChecker";

export const metadata: Metadata = {
  title: "Screen Resolution Checker — Detect Your Display Resolution & DPR",
  description:
    "Instantly detect your screen resolution, device pixel ratio, color depth, and compare to HD, Full HD, QHD, and 4K standards. Free online tool.",
  alternates: {
    canonical: "/screen-resolution-checker",
  },
  openGraph: {
    title: "Screen Resolution Checker — Detect Your Display Resolution & DPR",
    description:
      "Auto-detect your screen resolution, pixel ratio, and color depth. Compare to industry standards.",
    url: "/screen-resolution-checker",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Pixel Converter", href: "/pixel-converter" },
  { label: "Screen Resolution Checker", href: "/screen-resolution-checker" },
];

const relatedTools = [
  { name: "PPI Calculator", description: "Calculate pixels per inch", href: "/ppi-calculator", icon: "🖥️" },
  { name: "DPI Calculator", description: "Calculate dots per inch", href: "/dpi-calculator", icon: "📐" },
  { name: "PX to VW Converter", description: "Convert pixels to viewport width", href: "/px-to-vw", icon: "📏" },
  { name: "Aspect Ratio Calculator", description: "Calculate aspect ratio", href: "/aspect-ratio-calculator", icon: "🔄" },
  { name: "Image Size Calculator", description: "Calculate physical image size", href: "/image-size-calculator", icon: "📷" },
];

const faqItems = [
  {
    question: "What is the difference between screen resolution and CSS pixels?",
    answer:
      "Screen resolution is the physical pixel count of your display. CSS pixels are the logical pixels used by browsers. On a device with 2x pixel ratio (like Retina displays), 1 CSS pixel equals 4 physical pixels (2x2). This is why CSS pixel dimensions are often half the physical resolution.",
  },
  {
    question: "What is Device Pixel Ratio (DPR)?",
    answer:
      "Device Pixel Ratio is the ratio between physical pixels and CSS pixels. A DPR of 1 means each CSS pixel maps to one physical pixel. A DPR of 2 (Retina) means each CSS pixel uses a 2x2 grid of physical pixels for sharper rendering.",
  },
  {
    question: "Why does my screen show a different resolution than expected?",
    answer:
      "Your operating system may be using display scaling (e.g., 125% or 150% on Windows). This changes the effective CSS resolution while the physical resolution stays the same. The reported values reflect your current scaling settings.",
  },
  {
    question: "What is color depth?",
    answer:
      "Color depth indicates how many bits are used to represent each pixel's color. 24-bit (8 bits per channel) supports 16.7 million colors and is standard. 30-bit (10 bits per channel) supports 1.07 billion colors for HDR content.",
  },
  {
    question: "How do I check my actual monitor resolution?",
    answer:
      "This tool detects the resolution reported by your browser. For the true physical resolution, check your monitor specifications or operating system display settings. If scaling is applied, multiply the CSS resolution by the device pixel ratio.",
  },
];

export default function ScreenResolutionCheckerPage() {
  return (
    <ConverterLayout
      title="Screen Resolution Checker"
      description="Instantly detect your screen resolution, pixel ratio, and color depth."
      slug="/screen-resolution-checker"
      extractiveAnswer="This tool auto-detects your screen resolution, device pixel ratio (DPR), color depth, and total megapixels. It compares your display to HD (1280x720), Full HD (1920x1080), QHD (2560x1440), 4K (3840x2160), and higher standards."
      breadcrumbs={breadcrumbs}
      relatedTools={relatedTools}
      faqItems={faqItems}
      content={
        <div>
          <h2>Understanding Screen Resolution</h2>
          <p>
            Screen resolution defines the number of pixels your display can show. Higher resolution means more detail and sharper images. Modern displays range from HD (720p) to 8K, with 4K becoming increasingly common.
          </p>

          <h3>Resolution Standards</h3>
          <ul>
            <li><strong>HD (720p):</strong> 1280x720 — Entry-level for small screens and streaming.</li>
            <li><strong>Full HD (1080p):</strong> 1920x1080 — The most common standard for monitors and TVs.</li>
            <li><strong>QHD (1440p):</strong> 2560x1440 — Popular for gaming monitors and laptops.</li>
            <li><strong>4K UHD:</strong> 3840x2160 — Professional and entertainment standard with 4x the pixels of 1080p.</li>
            <li><strong>5K:</strong> 5120x2880 — Used in professional displays like the Apple Studio Display.</li>
          </ul>

          <h3>Device Pixel Ratio Explained</h3>
          <p>
            Modern high-resolution devices use a device pixel ratio (DPR) greater than 1. A DPR of 2 means the screen has 2x the pixels in each dimension, rendering everything at double density for sharper visuals. Web developers use this to serve appropriately sized images.
          </p>
        </div>
      }
    >
      <ScreenChecker />
    </ConverterLayout>
  );
}
