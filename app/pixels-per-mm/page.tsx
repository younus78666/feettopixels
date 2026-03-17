import type { Metadata } from "next";
import Link from "next/link";
import { BlogLayout } from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Pixels Per MM — Pixels Per Millimeter at Different DPIs",
  description:
    "Reference table for pixels per millimeter at 72, 96, 150, 300, and 600 DPI. Formula for converting between pixels and millimeters.",
  openGraph: {
    title: "Pixels Per MM — Reference Table & Formula",
    description: "How many pixels per millimeter at standard DPIs with formula and reference chart.",
    url: "/pixels-per-mm",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Learn", href: "/pixels-per-mm" },
  { label: "Pixels Per MM", href: "/pixels-per-mm" },
];

const toc = [
  { id: "formula", label: "Formula" },
  { id: "reference-table", label: "Reference Table" },
  { id: "practical-use", label: "Practical Use" },
];

const faqItems = [
  {
    question: "How many pixels are in 1 mm?",
    answer: "At 96 DPI (web standard), 1 mm equals 3.78 pixels. At 300 DPI (print standard), 1 mm equals 11.81 pixels. The conversion depends entirely on the DPI of your output.",
  },
  {
    question: "What is the formula for pixels per mm?",
    answer: "Pixels per mm = DPI / 25.4. Since there are 25.4 millimeters in one inch, divide the DPI by 25.4 to get pixels per millimeter.",
  },
  {
    question: "When would I need to convert mm to pixels?",
    answer: "Common scenarios include designing for precision-measured items like business cards (85 x 55 mm), passport photos (35 x 45 mm), or product labels where dimensions are specified in millimeters.",
  },
];

const relatedArticles = [
  { title: "Pixels Per CM", href: "/pixels-per-cm", description: "Pixel density per centimeter" },
  { title: "Pixels Per Inch Explained", href: "/pixels-per-inch", description: "Complete PPI reference" },
  { title: "Passport Photo Size", href: "/passport-photo-size", description: "ID photo dimensions in pixels" },
  { title: "DPI Conversion Table", href: "/dpi-conversion-table", description: "Comprehensive DPI reference" },
];

export default function PixelsPerMmPage() {
  return (
    <BlogLayout
      title="Pixels Per Millimeter"
      extractiveAnswer="At 96 DPI, there are 3.78 pixels per millimeter. At 300 DPI, there are 11.81 pixels per millimeter. The formula is: pixels per mm = DPI / 25.4, because one inch contains 25.4 millimeters."
      breadcrumbs={breadcrumbs}
      faqItems={faqItems}
      relatedArticles={relatedArticles}
      cta={{ label: "Try the MM to Pixels Converter", href: "/mm-to-pixels" }}
      toc={toc}
      slug="pixels-per-mm"
    >
      <h2 id="formula">Formula</h2>
      <p>
        To calculate how many pixels fit in one millimeter at a given DPI:
      </p>
      <p>
        <strong>Pixels per mm = DPI / 25.4</strong>
      </p>
      <p>
        One inch equals exactly 25.4 millimeters. Since DPI measures pixels per inch, dividing by 25.4 gives you the number of pixels in a single millimeter.
      </p>

      <h2 id="reference-table">Pixels Per MM Reference Table</h2>
      <table>
        <thead>
          <tr><th>DPI</th><th>Pixels per MM</th><th>Pixels per 5 MM</th><th>Pixels per 10 MM</th><th>Use Case</th></tr>
        </thead>
        <tbody>
          <tr><td>72</td><td>2.83</td><td>14.17</td><td>28.35</td><td>Legacy web, large banners</td></tr>
          <tr><td>96</td><td>3.78</td><td>18.90</td><td>37.80</td><td>Web standard (Windows)</td></tr>
          <tr><td>150</td><td>5.91</td><td>29.53</td><td>59.06</td><td>Draft print, documents</td></tr>
          <tr><td>200</td><td>7.87</td><td>39.37</td><td>78.74</td><td>Medium-quality print</td></tr>
          <tr><td>300</td><td>11.81</td><td>59.06</td><td>118.11</td><td>Professional print</td></tr>
          <tr><td>600</td><td>23.62</td><td>118.11</td><td>236.22</td><td>Fine art, medical</td></tr>
        </tbody>
      </table>

      <h2 id="practical-use">Practical Use Cases</h2>
      <p>
        Millimeter-to-pixel conversion is essential for precision design work:
      </p>
      <ul>
        <li><strong>Passport and ID photos:</strong> US passport photos are 51 &times; 51 mm. At 300 DPI: 51 &times; 11.81 = 602 pixels per side.</li>
        <li><strong>Business cards:</strong> Standard size is 85 &times; 55 mm. At 300 DPI: 1004 &times; 650 pixels.</li>
        <li><strong>Product labels:</strong> Dimensions in mm convert to exact pixel counts for print-ready artwork.</li>
        <li><strong>Precision engineering:</strong> Technical drawings scanned or created at specific mm-per-pixel ratios.</li>
      </ul>
      <p>
        Convert millimeter values to pixels with our <Link href="/mm-to-pixels">MM to Pixels Converter</Link>.
      </p>
    </BlogLayout>
  );
}
