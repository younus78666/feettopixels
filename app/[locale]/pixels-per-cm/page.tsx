import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
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
  const pageDict = dict.pages["pixels-per-cm"];

  return {
    title: pageDict?.title || "pixels-per-cm",
    description: pageDict?.description || "",
    alternates: {
      canonical: `/${locale}/pixels-per-cm`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/pixels-per-cm`]),
      ),
    },
    openGraph: {
      title: pageDict?.title || "pixels-per-cm",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Learn", href: "/pixels-per-cm" },
  { label: "Pixels Per CM", href: "/pixels-per-cm" },
];

const toc = [
  { id: "formula", label: "Formula" },
  { id: "reference-table", label: "Reference Table" },
  { id: "practical-use", label: "Practical Use" },
];

const faqItems = [
  {
    question: "How many pixels are in 1 cm?",
    answer: "At 96 DPI (web standard), 1 cm equals 37.80 pixels. At 300 DPI (print standard), 1 cm equals 118.11 pixels. The conversion depends on the DPI of the output device.",
  },
  {
    question: "What is the formula for pixels per cm?",
    answer: "Pixels per cm = DPI / 2.54. Since there are 2.54 centimeters in one inch, divide the DPI by 2.54 to get pixels per centimeter. For example, 300 DPI / 2.54 = 118.11 pixels per cm.",
  },
  {
    question: "How do I convert cm to pixels?",
    answer: "Multiply the centimeter value by (DPI / 2.54). For example, 10 cm at 300 DPI = 10 × 118.11 = 1181 pixels.",
  },
];

const relatedArticles = [
  { title: "Pixels Per MM", href: "/pixels-per-mm", description: "Pixel density per millimeter" },
  { title: "Pixels Per Inch Explained", href: "/pixels-per-inch", description: "Complete PPI reference" },
  { title: "Pixels Per Foot", href: "/pixels-per-foot", description: "Large format pixel density" },
  { title: "DPI Conversion Table", href: "/dpi-conversion-table", description: "Comprehensive DPI reference" },
];

export default async function PixelsPerCmPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  return (
    <BlogLayout
      locale={validLocale}
      title={dict.pages["pixels-per-cm"]?.title || "Pixels Per Centimeter"}
      extractiveAnswer={dict.pages["pixels-per-cm"]?.extractive || "At 96 DPI, there are 37.80 pixels per centimeter. At 300 DPI, there are 118.11 pixels per centimeter. The formula is: pixels per cm = DPI / 2.54. One inch equals 2.54 cm, so divide the DPI by 2.54."}
      breadcrumbs={breadcrumbs}
      faqItems={faqItems}
      relatedArticles={relatedArticles}
      cta={{ label: "Try the CM to Pixels Converter", href: "/cm-to-pixels" }}
      toc={toc}
      labels={{
        readyToConvert: dict.tool.readyToConvert,
        relatedArticles: dict.tool.relatedArticles,
        onThisPage: dict.nav.onThisPage,
      }}
      slug="pixels-per-cm"
    >
      <h2 id="formula">Formula</h2>
      <p>
        To calculate how many pixels fit in one centimeter at a given DPI:
      </p>
      <p>
        <strong>Pixels per cm = DPI / 2.54</strong>
      </p>
      <p>
        This works because one inch equals exactly 2.54 centimeters. DPI tells you pixels per inch, so dividing by 2.54 gives you pixels per centimeter.
      </p>

      <h2 id="reference-table">Pixels Per CM Reference Table</h2>
      <table>
        <thead>
          <tr><th>DPI</th><th>Pixels per CM</th><th>Pixels per 5 CM</th><th>Pixels per 10 CM</th><th>Use Case</th></tr>
        </thead>
        <tbody>
          <tr><td>72</td><td>28.35</td><td>141.73</td><td>283.46</td><td>Legacy web, large banners</td></tr>
          <tr><td>96</td><td>37.80</td><td>188.98</td><td>377.95</td><td>Web standard (Windows)</td></tr>
          <tr><td>150</td><td>59.06</td><td>295.28</td><td>590.55</td><td>Draft print, documents</td></tr>
          <tr><td>200</td><td>78.74</td><td>393.70</td><td>787.40</td><td>Medium-quality print</td></tr>
          <tr><td>300</td><td>118.11</td><td>590.55</td><td>1181.10</td><td>Professional print</td></tr>
          <tr><td>600</td><td>236.22</td><td>1181.10</td><td>2362.20</td><td>Fine art, medical</td></tr>
        </tbody>
      </table>

      <h2 id="practical-use">Practical Use Cases</h2>
      <p>
        Pixels-per-centimeter conversion is especially useful in countries using the metric system for design and print specifications. Common scenarios include:
      </p>
      <ul>
        <li><strong>European print design:</strong> Paper and image dimensions are specified in centimeters (A4 is 21 &times; 29.7 cm).</li>
        <li><strong>Scientific publications:</strong> Figure dimensions are often required in centimeters at a specific DPI.</li>
        <li><strong>Product packaging:</strong> Label dimensions use metric measurements that need conversion to pixel dimensions for design software.</li>
      </ul>
      <p>
        Convert specific centimeter values to pixels with our <Link href="/cm-to-pixels">CM to Pixels Converter</Link>, or see the full conversion matrix in our <Link href="/dpi-conversion-table">DPI Conversion Table</Link>.
      </p>
    </BlogLayout>
  );
}
