import type { Metadata } from "next";
import Link from "next/link";
import { BlogLayout } from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Common Screen Resolutions — HD, 4K, 5K, 8K Reference Guide",
  description:
    "Complete reference of common screen resolutions: HD, Full HD, QHD, 4K, 5K, and 8K. Pixel dimensions, aspect ratios, and device comparisons.",
  openGraph: {
    title: "Common Screen Resolutions — Complete Reference",
    description: "HD, Full HD, QHD, 4K, 5K, and 8K screen resolutions with pixel dimensions and device comparisons.",
    url: "/common-resolutions",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Learn", href: "/common-resolutions" },
  { label: "Common Resolutions", href: "/common-resolutions" },
];

const toc = [
  { id: "resolution-table", label: "Resolution Table" },
  { id: "by-device-type", label: "By Device Type" },
  { id: "aspect-ratios", label: "Aspect Ratios" },
  { id: "choosing-resolution", label: "Choosing a Resolution" },
];

const faqItems = [
  {
    question: "What is the most common screen resolution?",
    answer: "As of 2026, 1920 x 1080 (Full HD) remains the most common desktop resolution worldwide, used by approximately 55% of desktop users. 2560 x 1440 (QHD) is the second most common at around 15%.",
  },
  {
    question: "What is 4K resolution in pixels?",
    answer: "4K (also called UHD) is 3840 x 2160 pixels, exactly four times the pixel count of Full HD (1920 x 1080). Cinema 4K (DCI 4K) is slightly wider at 4096 x 2160 pixels.",
  },
  {
    question: "Is QHD the same as 2K?",
    answer: "Not exactly. QHD is 2560 x 1440 pixels. True 2K (DCI 2K) is 2048 x 1080 pixels. However, QHD is commonly (if inaccurately) marketed as '2K' because its horizontal resolution is close to 2560.",
  },
  {
    question: "How many pixels does 8K have?",
    answer: "8K resolution (7680 x 4320) contains 33.2 million pixels — 16 times the pixel count of Full HD. 8K displays are primarily used for professional video production and large-format commercial displays.",
  },
];

const relatedArticles = [
  { title: "Pixels Per Inch Explained", href: "/pixels-per-inch", description: "Complete PPI reference guide" },
  { title: "What Is a Pixel?", href: "/what-is-a-pixel", description: "The building block of displays" },
  { title: "Social Media Image Sizes", href: "/social-media-image-sizes", description: "Platform image dimensions" },
  { title: "What Is PPI?", href: "/what-is-ppi", description: "Screen pixel density explained" },
];

export default function CommonResolutionsPage() {
  return (
    <BlogLayout
      title="Common Screen Resolutions"
      extractiveAnswer="Full HD (1920 x 1080) is the most common desktop resolution. 4K UHD is 3840 x 2160 pixels. QHD is 2560 x 1440. 8K is 7680 x 4320. Resolution determines the total number of pixels a display renders."
      breadcrumbs={breadcrumbs}
      faqItems={faqItems}
      relatedArticles={relatedArticles}
      cta={{ label: "Check Your Screen Resolution", href: "/screen-resolution-checker" }}
      toc={toc}
      slug="common-resolutions"
    >
      <h2 id="resolution-table">Common Display Resolutions</h2>
      <table>
        <thead>
          <tr><th>Name</th><th>Resolution (px)</th><th>Aspect Ratio</th><th>Total Pixels</th></tr>
        </thead>
        <tbody>
          <tr><td>HD (720p)</td><td>1280 &times; 720</td><td>16:9</td><td>921,600</td></tr>
          <tr><td>Full HD (1080p)</td><td>1920 &times; 1080</td><td>16:9</td><td>2,073,600</td></tr>
          <tr><td>QHD (1440p)</td><td>2560 &times; 1440</td><td>16:9</td><td>3,686,400</td></tr>
          <tr><td>WQHD+ (Ultrawide)</td><td>3440 &times; 1440</td><td>21:9</td><td>4,953,600</td></tr>
          <tr><td>4K UHD (2160p)</td><td>3840 &times; 2160</td><td>16:9</td><td>8,294,400</td></tr>
          <tr><td>5K</td><td>5120 &times; 2880</td><td>16:9</td><td>14,745,600</td></tr>
          <tr><td>8K UHD (4320p)</td><td>7680 &times; 4320</td><td>16:9</td><td>33,177,600</td></tr>
        </tbody>
      </table>

      <h2 id="by-device-type">Resolutions by Device Type</h2>
      <h3>Laptops</h3>
      <table>
        <thead>
          <tr><th>Screen Size</th><th>Common Resolutions</th><th>PPI Range</th></tr>
        </thead>
        <tbody>
          <tr><td>13&ndash;14&quot;</td><td>1920 &times; 1080, 2560 &times; 1600</td><td>157&ndash;227</td></tr>
          <tr><td>15&ndash;16&quot;</td><td>1920 &times; 1080, 2880 &times; 1800</td><td>127&ndash;218</td></tr>
          <tr><td>17&quot;</td><td>1920 &times; 1080, 2560 &times; 1440</td><td>127&ndash;170</td></tr>
        </tbody>
      </table>

      <h3>Desktop Monitors</h3>
      <table>
        <thead>
          <tr><th>Screen Size</th><th>Common Resolutions</th><th>PPI Range</th></tr>
        </thead>
        <tbody>
          <tr><td>24&quot;</td><td>1920 &times; 1080, 2560 &times; 1440</td><td>92&ndash;122</td></tr>
          <tr><td>27&quot;</td><td>2560 &times; 1440, 3840 &times; 2160</td><td>109&ndash;163</td></tr>
          <tr><td>32&quot;</td><td>2560 &times; 1440, 3840 &times; 2160</td><td>92&ndash;138</td></tr>
        </tbody>
      </table>

      <h2 id="aspect-ratios">Common Aspect Ratios</h2>
      <ul>
        <li><strong>16:9</strong> — Standard widescreen (most monitors, TVs, phones in landscape)</li>
        <li><strong>16:10</strong> — Common for productivity laptops (1920 &times; 1200, 2560 &times; 1600)</li>
        <li><strong>21:9</strong> — Ultrawide monitors (3440 &times; 1440)</li>
        <li><strong>32:9</strong> — Super ultrawide (5120 &times; 1440)</li>
        <li><strong>4:3</strong> — Legacy (1024 &times; 768), still used in some tablets</li>
        <li><strong>3:2</strong> — Surface devices, some Chromebooks (2256 &times; 1504)</li>
      </ul>

      <h2 id="choosing-resolution">Choosing the Right Resolution</h2>
      <p>
        For general productivity, <strong>QHD (2560 &times; 1440)</strong> on a 27-inch monitor offers an excellent balance of screen real estate and text clarity at 109 PPI. For photo and video editing, <strong>4K (3840 &times; 2160)</strong> provides the detail needed to evaluate fine image quality. For gaming, resolution should match your GPU capability — 1080p for budget setups, 1440p for mid-range, and 4K for high-end systems.
      </p>
      <p>
        Check your current display resolution with our <Link href="/screen-resolution-checker">Screen Resolution Checker</Link>, or calculate pixel density with the <Link href="/ppi-calculator">PPI Calculator</Link>.
      </p>
    </BlogLayout>
  );
}
