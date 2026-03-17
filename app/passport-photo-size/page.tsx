import type { Metadata } from "next";
import Link from "next/link";
import { BlogLayout } from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Passport Photo Size in Pixels — US, UK, EU & Canada",
  description:
    "Passport photo pixel dimensions for US (2x2 inches), UK (35x45mm), EU, and Canadian passports at 300 DPI. Plus business card and poster sizes.",
  alternates: {
    canonical: "/passport-photo-size",
  },
  openGraph: {
    title: "Passport Photo Size in Pixels",
    description: "US, UK, EU, and Canadian passport photo dimensions in pixels at 300 DPI.",
    url: "/passport-photo-size",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Learn", href: "/passport-photo-size" },
  { label: "Passport Photo Size", href: "/passport-photo-size" },
];

const toc = [
  { id: "passport-photos", label: "Passport Photo Sizes" },
  { id: "id-photos", label: "ID & Visa Photos" },
  { id: "business-cards", label: "Business Card Sizes" },
  { id: "poster-sizes", label: "Poster Sizes" },
];

const faqItems = [
  {
    question: "What size is a US passport photo in pixels?",
    answer: "A US passport photo is 2 x 2 inches. At 300 DPI, that equals 600 x 600 pixels. The US State Department requires photos to be between 600 x 600 and 1200 x 1200 pixels for online submissions.",
  },
  {
    question: "What size is a UK passport photo in pixels?",
    answer: "A UK passport photo is 35 x 45 mm. At 300 DPI, that equals 413 x 531 pixels. For digital submissions, the UK government specifies at least 600 x 750 pixels.",
  },
  {
    question: "What DPI should I use for passport photos?",
    answer: "Use 300 DPI for passport photos. This is the standard for all government photo submissions. Lower DPI may result in a blurry or rejected photo.",
  },
  {
    question: "What is the standard business card size in pixels?",
    answer: "A standard US business card is 3.5 x 2 inches. At 300 DPI, that equals 1050 x 600 pixels. Include 1/8 inch bleed (37 pixels at 300 DPI) on each side for print-ready files.",
  },
];

const relatedArticles = [
  { title: "Standard Image Sizes", href: "/standard-image-sizes", description: "Photo print sizes in pixels" },
  { title: "Paper Sizes in Pixels", href: "/paper-sizes-in-pixels", description: "A4, Letter at various DPIs" },
  { title: "Pixels Per MM", href: "/pixels-per-mm", description: "Millimeter to pixel conversion" },
  { title: "Best DPI for Printing", href: "/best-dpi-for-printing", description: "DPI recommendations" },
];

export default function PassportPhotoSizePage() {
  return (
    <BlogLayout
      title="Passport Photo Size in Pixels"
      extractiveAnswer="A US passport photo (2 x 2 inches) at 300 DPI is 600 x 600 pixels. A UK passport photo (35 x 45 mm) at 300 DPI is 413 x 531 pixels. EU standard is 35 x 45 mm (413 x 531 px). Canadian passports require 50 x 70 mm (591 x 827 px)."
      breadcrumbs={breadcrumbs}
      faqItems={faqItems}
      relatedArticles={relatedArticles}
      cta={{ label: "Try the Image Size Calculator", href: "/image-size-calculator" }}
      toc={toc}
      slug="passport-photo-size"
    >
      <h2 id="passport-photos">Passport Photo Sizes by Country</h2>
      <table>
        <thead>
          <tr><th>Country</th><th>Physical Size</th><th>Pixels at 300 DPI</th><th>Digital Requirements</th></tr>
        </thead>
        <tbody>
          <tr><td>United States</td><td>2 &times; 2 in (51 &times; 51 mm)</td><td>600 &times; 600</td><td>600&ndash;1200 px square</td></tr>
          <tr><td>United Kingdom</td><td>35 &times; 45 mm</td><td>413 &times; 531</td><td>Min 600 &times; 750 px</td></tr>
          <tr><td>EU / Schengen</td><td>35 &times; 45 mm</td><td>413 &times; 531</td><td>Varies by country</td></tr>
          <tr><td>Canada</td><td>50 &times; 70 mm</td><td>591 &times; 827</td><td>Min 420 &times; 540 px</td></tr>
          <tr><td>Australia</td><td>35 &times; 45 mm</td><td>413 &times; 531</td><td>Min 413 &times; 531 px</td></tr>
          <tr><td>India</td><td>35 &times; 35 mm</td><td>413 &times; 413</td><td>350 &times; 350 px</td></tr>
          <tr><td>China</td><td>33 &times; 48 mm</td><td>390 &times; 567</td><td>354 &times; 472 px</td></tr>
          <tr><td>Japan</td><td>35 &times; 45 mm</td><td>413 &times; 531</td><td>Min 413 &times; 531 px</td></tr>
        </tbody>
      </table>

      <h2 id="id-photos">ID and Visa Photo Sizes</h2>
      <table>
        <thead>
          <tr><th>Document Type</th><th>Physical Size</th><th>Pixels at 300 DPI</th></tr>
        </thead>
        <tbody>
          <tr><td>US Visa</td><td>2 &times; 2 in</td><td>600 &times; 600</td></tr>
          <tr><td>Schengen Visa</td><td>35 &times; 45 mm</td><td>413 &times; 531</td></tr>
          <tr><td>US Green Card</td><td>2 &times; 2 in</td><td>600 &times; 600</td></tr>
          <tr><td>Driver&rsquo;s License (US)</td><td>Varies by state</td><td>Typically 600 &times; 600+</td></tr>
        </tbody>
      </table>

      <h2 id="business-cards">Business Card Sizes in Pixels</h2>
      <table>
        <thead>
          <tr><th>Region</th><th>Physical Size</th><th>Pixels at 300 DPI</th><th>With Bleed</th></tr>
        </thead>
        <tbody>
          <tr><td>US / Canada</td><td>3.5 &times; 2 in</td><td>1050 &times; 600</td><td>1125 &times; 675</td></tr>
          <tr><td>EU Standard</td><td>85 &times; 55 mm</td><td>1004 &times; 650</td><td>1063 &times; 709</td></tr>
          <tr><td>UK</td><td>85 &times; 55 mm</td><td>1004 &times; 650</td><td>1063 &times; 709</td></tr>
          <tr><td>Japan</td><td>91 &times; 55 mm</td><td>1075 &times; 650</td><td>1134 &times; 709</td></tr>
        </tbody>
      </table>

      <h2 id="poster-sizes">Common Poster Sizes in Pixels</h2>
      <table>
        <thead>
          <tr><th>Poster Size</th><th>150 DPI</th><th>300 DPI</th></tr>
        </thead>
        <tbody>
          <tr><td>11 &times; 17 in</td><td>1650 &times; 2550</td><td>3300 &times; 5100</td></tr>
          <tr><td>18 &times; 24 in</td><td>2700 &times; 3600</td><td>5400 &times; 7200</td></tr>
          <tr><td>24 &times; 36 in</td><td>3600 &times; 5400</td><td>7200 &times; 10800</td></tr>
          <tr><td>A2 (420 &times; 594 mm)</td><td>2480 &times; 3508</td><td>4961 &times; 7016</td></tr>
        </tbody>
      </table>
      <p>
        Calculate pixel dimensions for any custom size with our <Link href="/image-size-calculator">Image Size Calculator</Link> or <Link href="/inches-to-pixels">Inches to Pixels Converter</Link>.
      </p>
    </BlogLayout>
  );
}
