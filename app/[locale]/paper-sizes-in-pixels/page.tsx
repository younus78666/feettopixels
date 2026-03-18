import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import Link from "next/link";
import { BlogLayout } from "@/components/blog/BlogLayout";
import { getBreadcrumbs } from "@/lib/content-utils";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["paper-sizes-in-pixels"];

  return {
    title: pageDict?.title || "paper-sizes-in-pixels",
    description: pageDict?.description || "",
    alternates: {
      canonical: `/${locale}/paper-sizes-in-pixels`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/paper-sizes-in-pixels`]),
      ),
    },
    openGraph: {
      title: pageDict?.title || "paper-sizes-in-pixels",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}

const toc = [
  { id: "iso-a-series", label: "ISO A Series" },
  { id: "us-paper-sizes", label: "US Paper Sizes" },
  { id: "how-to-calculate", label: "How to Calculate" },
];

const faqItems = [
  {
    question: "What is A4 size in pixels at 300 DPI?",
    answer: "A4 paper (210 x 297 mm or 8.27 x 11.69 inches) at 300 DPI is 2480 x 3508 pixels. This is the standard resolution for professional print-quality A4 documents.",
  },
  {
    question: "What is US Letter size in pixels at 300 DPI?",
    answer: "US Letter (8.5 x 11 inches) at 300 DPI is 2550 x 3300 pixels. This is the standard for print-ready documents in North America.",
  },
  {
    question: "What DPI should I use for paper size conversions?",
    answer: "Use 300 DPI for professional printing, 150 DPI for draft prints and home use, 96 DPI for screen mockups, and 72 DPI for web-only documents.",
  },
  {
    question: "What is A3 size in pixels?",
    answer: "A3 (297 x 420 mm) at 300 DPI is 3508 x 4961 pixels. At 150 DPI, it is 1754 x 2480 pixels. At 72 DPI, it is 842 x 1191 pixels.",
  },
];

export default async function PaperSizesInPixelsPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);

  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "paper-sizes-in-pixels", href: "/paper-sizes-in-pixels" },
  ]);

  const relatedArticles = [
    { title: dict.pages["standard-image-sizes"]?.title || "Standard Image Sizes", href: "/standard-image-sizes", description: dict.navDescriptions["standard-image-sizes"] || "Photo print sizes in pixels" },
    { title: dict.pages["best-dpi-for-printing"]?.title || "Best DPI for Printing", href: "/best-dpi-for-printing", description: dict.navDescriptions["best-dpi-for-printing"] || "DPI recommendations by print type" },
    { title: dict.pages["pixels-per-inch"]?.title || "Pixels Per Inch Explained", href: "/pixels-per-inch", description: dict.navDescriptions["pixels-per-inch"] || "Complete PPI reference" },
    { title: dict.pages["dpi-conversion-table"]?.title || "DPI Conversion Table", href: "/dpi-conversion-table", description: dict.navDescriptions["dpi-conversion-table"] || "Comprehensive DPI reference" },
  ];
  return (
    <BlogLayout
      locale={validLocale}
      title={dict.pages["paper-sizes-in-pixels"]?.title || "Paper Sizes in Pixels"}
      extractiveAnswer={dict.pages["paper-sizes-in-pixels"]?.extractive || "A4 paper at 300 DPI is 2480 x 3508 pixels. US Letter at 300 DPI is 2550 x 3300 pixels. The pixel dimensions of any paper size depend on the DPI: multiply the paper width in inches by the DPI to get the width in pixels."}
      breadcrumbs={breadcrumbs}
      faqItems={faqItems}
      relatedArticles={relatedArticles}
      cta={{ label: "Try the Image Size Calculator", href: "/image-size-calculator" }}
      toc={toc}
      labels={{
        readyToConvert: dict.tool.readyToConvert,
        relatedArticles: dict.tool.relatedArticles,
        onThisPage: dict.nav.onThisPage,
      }}
      slug="paper-sizes-in-pixels"
    >
      <h2 id="iso-a-series">ISO A Series Paper Sizes</h2>
      <p>
        The ISO 216 standard defines the A series of paper sizes used worldwide. Each size is derived by halving the next larger size along its longer dimension. All values below are in pixels (width &times; height).
      </p>
      <table>
        <thead>
          <tr><th>Size</th><th>mm</th><th>Inches</th><th>72 DPI</th><th>96 DPI</th><th>150 DPI</th><th>300 DPI</th></tr>
        </thead>
        <tbody>
          <tr><td>A3</td><td>297 &times; 420</td><td>11.69 &times; 16.54</td><td>842 &times; 1191</td><td>1123 &times; 1588</td><td>1754 &times; 2480</td><td>3508 &times; 4961</td></tr>
          <tr><td>A4</td><td>210 &times; 297</td><td>8.27 &times; 11.69</td><td>595 &times; 842</td><td>794 &times; 1123</td><td>1240 &times; 1754</td><td>2480 &times; 3508</td></tr>
          <tr><td>A5</td><td>148 &times; 210</td><td>5.83 &times; 8.27</td><td>420 &times; 595</td><td>560 &times; 794</td><td>874 &times; 1240</td><td>1748 &times; 2480</td></tr>
          <tr><td>A6</td><td>105 &times; 148</td><td>4.13 &times; 5.83</td><td>298 &times; 420</td><td>397 &times; 560</td><td>620 &times; 874</td><td>1240 &times; 1748</td></tr>
          <tr><td>A2</td><td>420 &times; 594</td><td>16.54 &times; 23.39</td><td>1191 &times; 1684</td><td>1588 &times; 2245</td><td>2480 &times; 3508</td><td>4961 &times; 7016</td></tr>
          <tr><td>A1</td><td>594 &times; 841</td><td>23.39 &times; 33.11</td><td>1684 &times; 2384</td><td>2245 &times; 3179</td><td>3508 &times; 4967</td><td>7016 &times; 9933</td></tr>
          <tr><td>A0</td><td>841 &times; 1189</td><td>33.11 &times; 46.81</td><td>2384 &times; 3370</td><td>3179 &times; 4494</td><td>4967 &times; 7022</td><td>9933 &times; 14043</td></tr>
        </tbody>
      </table>

      <h2 id="us-paper-sizes">US Paper Sizes</h2>
      <table>
        <thead>
          <tr><th>Size</th><th>Inches</th><th>72 DPI</th><th>96 DPI</th><th>150 DPI</th><th>300 DPI</th></tr>
        </thead>
        <tbody>
          <tr><td>Letter</td><td>8.5 &times; 11</td><td>612 &times; 792</td><td>816 &times; 1056</td><td>1275 &times; 1650</td><td>2550 &times; 3300</td></tr>
          <tr><td>Legal</td><td>8.5 &times; 14</td><td>612 &times; 1008</td><td>816 &times; 1344</td><td>1275 &times; 2100</td><td>2550 &times; 4200</td></tr>
          <tr><td>Tabloid</td><td>11 &times; 17</td><td>792 &times; 1224</td><td>1056 &times; 1632</td><td>1650 &times; 2550</td><td>3300 &times; 5100</td></tr>
          <tr><td>Executive</td><td>7.25 &times; 10.5</td><td>522 &times; 756</td><td>696 &times; 1008</td><td>1088 &times; 1575</td><td>2175 &times; 3150</td></tr>
        </tbody>
      </table>

      <h2 id="how-to-calculate">How to Calculate Paper Size in Pixels</h2>
      <p>
        The formula is simple: <strong>pixels = inches &times; DPI</strong>. For metric measurements, first convert millimeters to inches by dividing by 25.4, then multiply by DPI.
      </p>
      <p>
        For example, A4 width: 210 mm / 25.4 = 8.27 inches &times; 300 DPI = <strong>2480 pixels</strong>.
      </p>
      <p>
        Use our <Link href="/image-size-calculator">Image Size Calculator</Link> for quick conversions, or browse our <Link href="/inches-to-pixels">Inches to Pixels</Link> converter for custom dimensions.
      </p>
    </BlogLayout>
  );
}
