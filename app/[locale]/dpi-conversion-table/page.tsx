import type { Metadata } from "next";
import { locales, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import Link from "next/link";
import { BlogLayout } from "@/components/blog/BlogLayout";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["dpi-conversion-table"];

  return {
    title: pageDict?.title || "dpi-conversion-table",
    description: pageDict?.description || "",
    alternates: {
      canonical: `/${locale}/dpi-conversion-table`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/dpi-conversion-table`]),
      ),
    },
  };
}

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Learn", href: "/dpi-conversion-table" },
  { label: "DPI Conversion Table", href: "/dpi-conversion-table" },
];

const toc = [
  { id: "master-table", label: "Master Conversion Table" },
  { id: "paper-at-dpi", label: "Paper Sizes at Each DPI" },
  { id: "formulas", label: "Conversion Formulas" },
];

const faqItems = [
  {
    question: "How do I convert DPI to pixels per cm?",
    answer: "Divide the DPI by 2.54. For example, 300 DPI = 300 / 2.54 = 118.11 pixels per cm. This works because one inch equals 2.54 cm.",
  },
  {
    question: "How do I convert DPI to pixels per mm?",
    answer: "Divide the DPI by 25.4. For example, 300 DPI = 300 / 25.4 = 11.81 pixels per mm. There are 25.4 mm in one inch.",
  },
  {
    question: "What DPI should I choose for my project?",
    answer: "Use 300 DPI for professional print, 150 DPI for draft prints and large posters, 96 DPI for web mockups, and 72 DPI for large-format banners. The right DPI depends on the output medium and viewing distance.",
  },
];

const relatedArticles = [
  { title: "Pixels Per Inch Explained", href: "/pixels-per-inch", description: "Complete PPI reference guide" },
  { title: "Pixels Per CM", href: "/pixels-per-cm", description: "CM-specific pixel density" },
  { title: "Pixels Per MM", href: "/pixels-per-mm", description: "MM-specific pixel density" },
  { title: "Pixels Per Foot", href: "/pixels-per-foot", description: "Large format pixel density" },
];

export default async function DpiConversionTablePage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  return (
    <BlogLayout
      locale={validLocale}
      title="DPI Conversion Table"
      extractiveAnswer="At 300 DPI, there are 300 pixels per inch, 118.11 pixels per cm, and 11.81 pixels per mm. At 96 DPI, there are 96 pixels per inch, 37.80 per cm, and 3.78 per mm. Use DPI / 2.54 for cm and DPI / 25.4 for mm."
      breadcrumbs={breadcrumbs}
      faqItems={faqItems}
      relatedArticles={relatedArticles}
      cta={{ label: "Try the DPI Calculator", href: "/dpi-calculator" }}
      toc={toc}
      slug="dpi-conversion-table"
    >
      <h2 id="master-table">Master DPI Conversion Table</h2>
      <p>
        This comprehensive table shows the pixel density at every standard DPI across inches, centimeters, and millimeters:
      </p>
      <table>
        <thead>
          <tr><th>DPI</th><th>Px/Inch</th><th>Px/CM</th><th>Px/MM</th><th>Px/Foot</th><th>Primary Use</th></tr>
        </thead>
        <tbody>
          <tr><td>25</td><td>25</td><td>9.84</td><td>0.98</td><td>300</td><td>Billboards</td></tr>
          <tr><td>50</td><td>50</td><td>19.69</td><td>1.97</td><td>600</td><td>Outdoor signage</td></tr>
          <tr><td>72</td><td>72</td><td>28.35</td><td>2.83</td><td>864</td><td>Legacy web, banners</td></tr>
          <tr><td>96</td><td>96</td><td>37.80</td><td>3.78</td><td>1,152</td><td>Web standard</td></tr>
          <tr><td>100</td><td>100</td><td>39.37</td><td>3.94</td><td>1,200</td><td>Large posters</td></tr>
          <tr><td>150</td><td>150</td><td>59.06</td><td>5.91</td><td>1,800</td><td>Draft print, docs</td></tr>
          <tr><td>200</td><td>200</td><td>78.74</td><td>7.87</td><td>2,400</td><td>Magazine proofs</td></tr>
          <tr><td>250</td><td>250</td><td>98.43</td><td>9.84</td><td>3,000</td><td>Quality print</td></tr>
          <tr><td>300</td><td>300</td><td>118.11</td><td>11.81</td><td>3,600</td><td>Professional print</td></tr>
          <tr><td>350</td><td>350</td><td>137.80</td><td>13.78</td><td>4,200</td><td>Press / CMYK</td></tr>
          <tr><td>600</td><td>600</td><td>236.22</td><td>23.62</td><td>7,200</td><td>Fine art</td></tr>
          <tr><td>1200</td><td>1,200</td><td>472.44</td><td>47.24</td><td>14,400</td><td>Medical imaging</td></tr>
        </tbody>
      </table>

      <h2 id="paper-at-dpi">Common Paper Sizes at Each DPI</h2>
      <p>
        Quick reference for A4 (210 &times; 297 mm) and US Letter (8.5 &times; 11 in) at standard DPIs:
      </p>
      <table>
        <thead>
          <tr><th>DPI</th><th>A4 (pixels)</th><th>US Letter (pixels)</th></tr>
        </thead>
        <tbody>
          <tr><td>72</td><td>595 &times; 842</td><td>612 &times; 792</td></tr>
          <tr><td>96</td><td>794 &times; 1123</td><td>816 &times; 1056</td></tr>
          <tr><td>150</td><td>1240 &times; 1754</td><td>1275 &times; 1650</td></tr>
          <tr><td>300</td><td>2480 &times; 3508</td><td>2550 &times; 3300</td></tr>
          <tr><td>600</td><td>4961 &times; 7016</td><td>5100 &times; 6600</td></tr>
        </tbody>
      </table>

      <h2 id="formulas">Conversion Formulas</h2>
      <ul>
        <li><strong>Pixels per inch:</strong> equals DPI directly</li>
        <li><strong>Pixels per cm:</strong> DPI / 2.54</li>
        <li><strong>Pixels per mm:</strong> DPI / 25.4</li>
        <li><strong>Pixels per foot:</strong> DPI &times; 12</li>
        <li><strong>Physical size (inches):</strong> pixels / DPI</li>
        <li><strong>Physical size (cm):</strong> pixels / (DPI / 2.54)</li>
        <li><strong>Pixels needed:</strong> physical size (inches) &times; DPI</li>
      </ul>
      <p>
        For interactive conversions, use our <Link href="/dpi-calculator">DPI Calculator</Link>, <Link href="/cm-to-pixels">CM to Pixels</Link>, or <Link href="/mm-to-pixels">MM to Pixels</Link> converters.
      </p>
    </BlogLayout>
  );
}
