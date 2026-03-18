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
  const pageDict = dict.pages["pixels-per-inch"];

  return {
    title: pageDict?.title || "pixels-per-inch",
    description: pageDict?.description || "",
    alternates: {
      canonical: `/${locale}/pixels-per-inch`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/pixels-per-inch`]),
      ),
    },
    openGraph: {
      title: pageDict?.title || "pixels-per-inch",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}

const toc = [
  { id: "what-is-ppi", label: "What Is PPI?" },
  { id: "how-to-calculate", label: "How to Calculate PPI" },
  { id: "ppi-reference-table", label: "PPI Reference Table" },
  { id: "retina-displays", label: "Retina & HiDPI Displays" },
  { id: "ppi-by-use-case", label: "PPI by Use Case" },
];

const faqItems = [
  {
    question: "What is a good PPI for printing?",
    answer:
      "300 PPI is the standard for high-quality photo printing. For large-format posters viewed from a distance, 150 PPI is often sufficient. Newspapers typically use 150-170 PPI.",
  },
  {
    question: "How do I find the PPI of my screen?",
    answer:
      "Divide the screen's horizontal pixel count by its physical width in inches. For example, a 24-inch monitor with 1920 horizontal pixels has approximately 92 PPI (1920 / 20.9 inches of width).",
  },
  {
    question: "Is PPI the same as DPI?",
    answer:
      "Not exactly. PPI (pixels per inch) refers to screen pixel density, while DPI (dots per inch) refers to print resolution. They are often used interchangeably, but technically PPI applies to screens and DPI applies to printers.",
  },
  {
    question: "What PPI do retina displays use?",
    answer:
      "Apple Retina displays typically have 218-264 PPI for laptops and 326-460 PPI for iPhones. The term 'retina' means pixels are small enough that the human eye cannot distinguish individual pixels at normal viewing distance.",
  },
  {
    question: "Does higher PPI mean better quality?",
    answer:
      "Higher PPI means more pixels packed into each inch, resulting in sharper, more detailed images. However, beyond about 300 PPI for print or 220+ PPI for screens at normal viewing distance, the human eye cannot perceive further improvement.",
  },
];

export default async function PixelsPerInchPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);

  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "pixels-per-inch", href: "/pixels-per-inch" },
  ]);

  const relatedArticles = [
    { title: dict.pages["what-is-dpi"]?.title || "What Is DPI?", href: "/what-is-dpi", description: dict.navDescriptions["what-is-dpi"] || "Understanding dots per inch for print and design" },
    { title: dict.pages["dpi-vs-ppi"]?.title || "DPI vs PPI", href: "/dpi-vs-ppi", description: dict.navDescriptions["dpi-vs-ppi"] || "Key differences between DPI and PPI explained" },
    { title: dict.pages["what-is-a-pixel"]?.title || "What Is a Pixel?", href: "/what-is-a-pixel", description: dict.navDescriptions["what-is-a-pixel"] || "The fundamental building block of digital images" },
    { title: dict.pages["common-resolutions"]?.title || "Common Screen Resolutions", href: "/common-resolutions", description: dict.navDescriptions["common-resolutions"] || "HD, 4K, 5K, and 8K resolution reference" },
    { title: dict.pages["paper-sizes-in-pixels"]?.title || "Paper Sizes in Pixels", href: "/paper-sizes-in-pixels", description: dict.navDescriptions["paper-sizes-in-pixels"] || "A4, Letter, and more at various DPIs" },
  ];
  return (
    <BlogLayout
      locale={validLocale}
      title={dict.pages["pixels-per-inch"]?.title || "Pixels Per Inch (PPI) Explained"}
      extractiveAnswer={dict.pages["pixels-per-inch"]?.extractive || "Pixels per inch (PPI) measures how many pixels fit into one linear inch of a display or image. At 96 PPI (web standard), one inch contains 96 pixels. At 300 PPI (print standard), one inch contains 300 pixels, producing sharper output."}
      breadcrumbs={breadcrumbs}
      faqItems={faqItems}
      relatedArticles={relatedArticles}
      cta={{ label: "Try the PPI Calculator", href: "/ppi-calculator" }}
      toc={toc}
      labels={{
        readyToConvert: dict.tool.readyToConvert,
        relatedArticles: dict.tool.relatedArticles,
        onThisPage: dict.nav.onThisPage,
      }}
      slug="pixels-per-inch"
    >
      <h2 id="what-is-ppi">What Is PPI?</h2>
      <p>
        PPI stands for <strong>pixels per inch</strong>. It describes the pixel density of a digital screen or image &mdash; how many individual pixels are packed into each linear inch. A higher PPI means smaller pixels, which produces sharper, more detailed images. PPI is the primary metric for evaluating display sharpness on monitors, phones, and tablets.
      </p>
      <p>
        For web design, the standard assumption is <strong>96 PPI</strong> (Windows default). For print workflows, <strong>300 PPI</strong> is the gold standard for photo-quality output. Understanding PPI helps designers ensure their work looks crisp on every device and medium.
      </p>

      <h2 id="how-to-calculate">How to Calculate PPI</h2>
      <p>
        The formula for calculating PPI is straightforward:
      </p>
      <p>
        <strong>PPI = Diagonal pixels / Diagonal screen size (inches)</strong>
      </p>
      <p>
        To find diagonal pixels, use the Pythagorean theorem: <code>diagonal px = &radic;(width&sup2; + height&sup2;)</code>. For example, a 27-inch monitor at 2560 &times; 1440 resolution has a diagonal of 2938 pixels, giving it <strong>108.8 PPI</strong>.
      </p>

      <h2 id="ppi-reference-table">PPI Reference Table</h2>
      <p>
        This table shows how many pixels fit in common physical measurements at standard PPI values:
      </p>
      <table>
        <thead>
          <tr>
            <th>PPI</th>
            <th>Pixels per Inch</th>
            <th>Pixels per CM</th>
            <th>Pixels per MM</th>
            <th>Common Use</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>72</td><td>72</td><td>28.35</td><td>2.83</td><td>Legacy Mac screens</td></tr>
          <tr><td>96</td><td>96</td><td>37.80</td><td>3.78</td><td>Web standard (Windows)</td></tr>
          <tr><td>150</td><td>150</td><td>59.06</td><td>5.91</td><td>Draft print, posters</td></tr>
          <tr><td>200</td><td>200</td><td>78.74</td><td>7.87</td><td>Magazine proofs</td></tr>
          <tr><td>300</td><td>300</td><td>118.11</td><td>11.81</td><td>Professional print</td></tr>
          <tr><td>600</td><td>600</td><td>236.22</td><td>23.62</td><td>Fine art, medical imaging</td></tr>
        </tbody>
      </table>

      <h2 id="retina-displays">Retina and HiDPI Displays</h2>
      <p>
        Apple coined the term <strong>Retina display</strong> for screens where individual pixels are indistinguishable to the naked eye at typical viewing distance. Retina MacBooks run at 220+ PPI, while iPhones reach 326&ndash;460 PPI. Android devices with &ldquo;HiDPI&rdquo; screens offer similar densities.
      </p>
      <p>
        For web developers, HiDPI screens mean images need to be served at <strong>2&times; or 3&times; resolution</strong> to appear sharp. A 100 &times; 100 CSS-pixel image should be 200 &times; 200 or 300 &times; 300 actual pixels on these devices.
      </p>

      <h2 id="ppi-by-use-case">PPI by Use Case</h2>
      <ul>
        <li><strong>Web and UI design:</strong> 72&ndash;96 PPI. CSS pixels are the reference unit; actual device PPI varies widely.</li>
        <li><strong>Photo printing:</strong> 300 PPI ensures no visible pixelation in handheld prints.</li>
        <li><strong>Large-format banners:</strong> 72&ndash;150 PPI is acceptable because viewers stand farther away.</li>
        <li><strong>Magazine and book publishing:</strong> 300 PPI minimum, with 350 PPI for CMYK press workflows.</li>
        <li><strong>Billboard printing:</strong> 25&ndash;50 PPI is standard since billboards are viewed from 30+ feet away.</li>
      </ul>
      <p>
        Use our <Link href="/ppi-calculator">PPI Calculator</Link> to compute the exact pixel density of any screen, or the <Link href="/dpi-calculator">DPI Calculator</Link> to determine the right resolution for your print project.
      </p>
    </BlogLayout>
  );
}
