import type { Metadata } from "next";
import Link from "next/link";
import { BlogLayout } from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Standard Image Sizes in Pixels — Photo Print Dimensions",
  description:
    "Reference table for standard photo print sizes in pixels at 150 and 300 DPI. Covers 4x6, 5x7, 8x10, 11x14, 16x20, and 24x36 inch prints.",
  alternates: {
    canonical: "/standard-image-sizes",
  },
  openGraph: {
    title: "Standard Image Sizes in Pixels",
    description: "Photo print sizes (4x6, 5x7, 8x10, 16x20, 24x36) in pixels at 150 and 300 DPI.",
    url: "/standard-image-sizes",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Learn", href: "/standard-image-sizes" },
  { label: "Standard Image Sizes", href: "/standard-image-sizes" },
];

const toc = [
  { id: "photo-print-sizes", label: "Photo Print Sizes" },
  { id: "poster-sizes", label: "Poster Sizes" },
  { id: "minimum-megapixels", label: "Minimum Megapixels" },
];

const faqItems = [
  {
    question: "What size is a 4x6 photo in pixels?",
    answer: "A 4x6 inch photo at 300 DPI is 1200 x 1800 pixels. At 150 DPI (acceptable quality), it is 600 x 900 pixels. Most smartphone cameras produce more than enough pixels for 4x6 prints.",
  },
  {
    question: "What resolution do I need for an 8x10 print?",
    answer: "For a high-quality 8x10 inch print at 300 DPI, you need an image of at least 2400 x 3000 pixels (7.2 megapixels). At 150 DPI (acceptable), you need 1200 x 1500 pixels.",
  },
  {
    question: "How many megapixels do I need for a 16x20 print?",
    answer: "For a 16x20 inch print at 300 DPI, you need 4800 x 6000 pixels, or 28.8 megapixels. At 200 DPI (still good quality at typical viewing distance), you need 3200 x 4000 pixels (12.8 MP).",
  },
];

const relatedArticles = [
  { title: "Paper Sizes in Pixels", href: "/paper-sizes-in-pixels", description: "A4, Letter, A3 at various DPIs" },
  { title: "Best DPI for Printing", href: "/best-dpi-for-printing", description: "DPI recommendations by print type" },
  { title: "Passport Photo Size", href: "/passport-photo-size", description: "Passport and ID photo dimensions" },
  { title: "Social Media Image Sizes", href: "/social-media-image-sizes", description: "Platform-specific image dimensions" },
];

export default function StandardImageSizesPage() {
  return (
    <BlogLayout
      title="Standard Image Sizes in Pixels"
      extractiveAnswer="A 4x6 photo at 300 DPI is 1200 x 1800 pixels. An 8x10 at 300 DPI is 2400 x 3000 pixels. A 24x36 poster at 300 DPI is 7200 x 10800 pixels. Multiply inches by DPI to calculate pixel dimensions for any standard print size."
      breadcrumbs={breadcrumbs}
      faqItems={faqItems}
      relatedArticles={relatedArticles}
      cta={{ label: "Try the Image Size Calculator", href: "/image-size-calculator" }}
      toc={toc}
      slug="standard-image-sizes"
    >
      <h2 id="photo-print-sizes">Standard Photo Print Sizes</h2>
      <p>
        The table below lists common photo print sizes with pixel dimensions at both 150 DPI (acceptable quality) and 300 DPI (professional quality).
      </p>
      <table>
        <thead>
          <tr><th>Print Size (inches)</th><th>150 DPI</th><th>300 DPI</th><th>Megapixels (300 DPI)</th></tr>
        </thead>
        <tbody>
          <tr><td>4 &times; 6</td><td>600 &times; 900</td><td>1200 &times; 1800</td><td>2.2 MP</td></tr>
          <tr><td>5 &times; 7</td><td>750 &times; 1050</td><td>1500 &times; 2100</td><td>3.2 MP</td></tr>
          <tr><td>8 &times; 10</td><td>1200 &times; 1500</td><td>2400 &times; 3000</td><td>7.2 MP</td></tr>
          <tr><td>8.5 &times; 11</td><td>1275 &times; 1650</td><td>2550 &times; 3300</td><td>8.4 MP</td></tr>
          <tr><td>11 &times; 14</td><td>1650 &times; 2100</td><td>3300 &times; 4200</td><td>13.9 MP</td></tr>
          <tr><td>11 &times; 17</td><td>1650 &times; 2550</td><td>3300 &times; 5100</td><td>16.8 MP</td></tr>
          <tr><td>16 &times; 20</td><td>2400 &times; 3000</td><td>4800 &times; 6000</td><td>28.8 MP</td></tr>
          <tr><td>20 &times; 30</td><td>3000 &times; 4500</td><td>6000 &times; 9000</td><td>54 MP</td></tr>
          <tr><td>24 &times; 36</td><td>3600 &times; 5400</td><td>7200 &times; 10800</td><td>77.8 MP</td></tr>
        </tbody>
      </table>

      <h2 id="poster-sizes">Poster and Large Format Sizes</h2>
      <p>
        Large prints are viewed from a distance, so lower DPI is acceptable. Here are common poster sizes at 100 and 150 DPI:
      </p>
      <table>
        <thead>
          <tr><th>Poster Size (inches)</th><th>100 DPI</th><th>150 DPI</th></tr>
        </thead>
        <tbody>
          <tr><td>18 &times; 24</td><td>1800 &times; 2400</td><td>2700 &times; 3600</td></tr>
          <tr><td>24 &times; 36</td><td>2400 &times; 3600</td><td>3600 &times; 5400</td></tr>
          <tr><td>27 &times; 40</td><td>2700 &times; 4000</td><td>4050 &times; 6000</td></tr>
          <tr><td>36 &times; 48</td><td>3600 &times; 4800</td><td>5400 &times; 7200</td></tr>
        </tbody>
      </table>

      <h2 id="minimum-megapixels">Minimum Megapixels by Print Size</h2>
      <p>
        To print at 300 DPI, you need at minimum the following megapixel counts. Most modern cameras (12+ MP) can handle prints up to 11 &times; 14 with ease. For larger prints, use 200 DPI and a typical viewing distance of 3+ feet.
      </p>
      <ul>
        <li><strong>4 &times; 6:</strong> 2.2 MP (any modern camera)</li>
        <li><strong>8 &times; 10:</strong> 7.2 MP (any smartphone from the last decade)</li>
        <li><strong>16 &times; 20:</strong> 28.8 MP (high-end smartphones, most mirrorless cameras)</li>
        <li><strong>24 &times; 36:</strong> 77.8 MP at 300 DPI, or 17.3 MP at 200 DPI (practical for most cameras)</li>
      </ul>
      <p>
        Use our <Link href="/image-size-calculator">Image Size Calculator</Link> to check if your image has enough pixels for a specific print size.
      </p>
    </BlogLayout>
  );
}
