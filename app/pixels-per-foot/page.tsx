import type { Metadata } from "next";
import Link from "next/link";
import { BlogLayout } from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Pixels Per Foot — Large Format Pixel Density Reference",
  description:
    "How many pixels per foot at different DPIs. Reference table for large format printing, banners, and signage. Includes 72, 96, 150, and 300 DPI.",
  alternates: {
    canonical: "/pixels-per-foot",
  },
  openGraph: {
    title: "Pixels Per Foot — Large Format Reference",
    description: "Pixels per foot at various DPIs for banners, signage, and large format printing.",
    url: "/pixels-per-foot",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Learn", href: "/pixels-per-foot" },
  { label: "Pixels Per Foot", href: "/pixels-per-foot" },
];

const toc = [
  { id: "formula", label: "Formula" },
  { id: "reference-table", label: "Reference Table" },
  { id: "large-format", label: "Large Format Use Cases" },
];

const faqItems = [
  {
    question: "How many pixels are in one foot?",
    answer: "At 96 DPI, one foot contains 1,152 pixels (96 × 12). At 300 DPI, one foot contains 3,600 pixels. At 72 DPI (common for large banners), one foot contains 864 pixels.",
  },
  {
    question: "What DPI should I use for a large banner?",
    answer: "For banners viewed from 6-10 feet away, 72-100 DPI is sufficient. For banners viewed closer (3-6 feet), use 150 DPI. Billboard-style signage viewed from 30+ feet can use 25-50 DPI.",
  },
  {
    question: "How many pixels do I need for a 3x6 foot banner at 100 DPI?",
    answer: "A 3x6 foot banner at 100 DPI needs 3,600 x 7,200 pixels (25.9 megapixels). At 72 DPI, the same banner needs 2,592 x 5,184 pixels (13.4 megapixels).",
  },
];

const relatedArticles = [
  { title: "Pixels Per Inch Explained", href: "/pixels-per-inch", description: "Complete PPI reference" },
  { title: "Pixels Per CM", href: "/pixels-per-cm", description: "Metric pixel density" },
  { title: "Best DPI for Printing", href: "/best-dpi-for-printing", description: "DPI recommendations by type" },
  { title: "Standard Image Sizes", href: "/standard-image-sizes", description: "Photo print pixel dimensions" },
];

export default function PixelsPerFootPage() {
  return (
    <BlogLayout
      title="Pixels Per Foot"
      extractiveAnswer="At 96 DPI, one foot contains 1,152 pixels (96 x 12 inches). At 300 DPI, one foot is 3,600 pixels. At 72 DPI (common for large format), one foot is 864 pixels. Multiply DPI by 12 to get pixels per foot."
      breadcrumbs={breadcrumbs}
      faqItems={faqItems}
      relatedArticles={relatedArticles}
      cta={{ label: "Try the Feet to Pixels Converter", href: "/feet-to-pixels" }}
      toc={toc}
      slug="pixels-per-foot"
    >
      <h2 id="formula">Formula</h2>
      <p>
        Since one foot equals 12 inches, the formula is simple:
      </p>
      <p>
        <strong>Pixels per foot = DPI &times; 12</strong>
      </p>
      <p>
        Multiply the DPI by 12 to get the total number of pixels in one foot of length.
      </p>

      <h2 id="reference-table">Pixels Per Foot Reference Table</h2>
      <table>
        <thead>
          <tr><th>DPI</th><th>Pixels per Foot</th><th>Pixels per 3 Feet</th><th>Pixels per 6 Feet</th><th>Use Case</th></tr>
        </thead>
        <tbody>
          <tr><td>25</td><td>300</td><td>900</td><td>1,800</td><td>Billboards (30+ ft viewing)</td></tr>
          <tr><td>50</td><td>600</td><td>1,800</td><td>3,600</td><td>Large outdoor signage</td></tr>
          <tr><td>72</td><td>864</td><td>2,592</td><td>5,184</td><td>Trade show banners</td></tr>
          <tr><td>96</td><td>1,152</td><td>3,456</td><td>6,912</td><td>Indoor signage</td></tr>
          <tr><td>100</td><td>1,200</td><td>3,600</td><td>7,200</td><td>Quality banners</td></tr>
          <tr><td>150</td><td>1,800</td><td>5,400</td><td>10,800</td><td>Close-view posters</td></tr>
          <tr><td>300</td><td>3,600</td><td>10,800</td><td>21,600</td><td>Photo quality</td></tr>
        </tbody>
      </table>

      <h2 id="large-format">Large Format Use Cases</h2>
      <p>
        Feet-based measurements are common in large format printing across the US:
      </p>
      <ul>
        <li><strong>Trade show backdrops (8 &times; 10 ft):</strong> At 72 DPI, this requires a 6,912 &times; 8,640 pixel image (59.7 MP). Manageable for modern cameras and design software.</li>
        <li><strong>Vehicle wraps (5 &times; 15 ft):</strong> At 100 DPI, this requires 6,000 &times; 18,000 pixels (108 MP). Typically created in vector or tiled raster artwork.</li>
        <li><strong>Real estate banners (3 &times; 6 ft):</strong> At 100 DPI, 3,600 &times; 7,200 pixels (25.9 MP) is easily achievable.</li>
        <li><strong>Billboards (14 &times; 48 ft):</strong> At 25 DPI, this requires just 4,200 &times; 14,400 pixels (60.5 MP), since billboards are viewed from 100+ feet away.</li>
      </ul>
      <p>
        Convert specific foot measurements to pixel dimensions with our <Link href="/feet-to-pixels">Feet to Pixels Converter</Link>.
      </p>
    </BlogLayout>
  );
}
