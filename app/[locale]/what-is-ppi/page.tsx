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
  const pageDict = dict.pages["what-is-ppi"];

  return {
    title: pageDict?.title || "what-is-ppi",
    description: pageDict?.description || "",
    alternates: {
      canonical: `/${locale}/what-is-ppi`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/what-is-ppi`]),
      ),
    },
    openGraph: {
      title: pageDict?.title || "what-is-ppi",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}

const toc = [
  { id: "ppi-definition", label: "PPI Definition" },
  { id: "ppi-vs-dpi", label: "PPI vs DPI" },
  { id: "device-ppi-values", label: "Device PPI Values" },
  { id: "calculating-ppi", label: "Calculating PPI" },
  { id: "retina-hidpi", label: "Retina & HiDPI" },
];

const faqItems = [
  {
    question: "What is a good PPI for a monitor?",
    answer: "For desktop monitors, 90-110 PPI is standard (1080p on 24 inches). For sharp text and images, 140+ PPI (such as 4K on 27 inches at 163 PPI) is considered excellent. Retina-class displays start around 200+ PPI.",
  },
  {
    question: "How does PPI affect image quality?",
    answer: "Higher PPI means more pixels packed into each inch, producing sharper, more detailed images with smoother edges. At normal viewing distances, most people cannot distinguish individual pixels above 300 PPI.",
  },
  {
    question: "What PPI do smartphones use?",
    answer: "Modern smartphones typically range from 326 PPI (iPhone SE) to 576 PPI (Samsung Galaxy S24 Ultra). Most flagship phones operate between 400-520 PPI, well above the threshold for perceiving individual pixels.",
  },
];

export default async function WhatIsPpiPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);

  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "what-is-ppi", href: "/what-is-ppi" },
  ]);

  const relatedArticles = [
    { title: dict.pages["what-is-dpi"]?.title || "What Is DPI?", href: "/what-is-dpi", description: dict.navDescriptions["what-is-dpi"] || "Dots per inch for print explained" },
    { title: dict.pages["dpi-vs-ppi"]?.title || "DPI vs PPI", href: "/dpi-vs-ppi", description: dict.navDescriptions["dpi-vs-ppi"] || "Side-by-side comparison" },
    { title: dict.pages["pixels-per-inch"]?.title || "Pixels Per Inch Guide", href: "/pixels-per-inch", description: dict.navDescriptions["pixels-per-inch"] || "Comprehensive PPI reference tables" },
    { title: dict.pages["common-resolutions"]?.title || "Common Screen Resolutions", href: "/common-resolutions", description: dict.navDescriptions["common-resolutions"] || "HD to 8K resolution reference" },
  ];
  return (
    <BlogLayout
      locale={validLocale}
      title={dict.pages["what-is-ppi"]?.title || "What Is PPI?"}
      extractiveAnswer={dict.pages["what-is-ppi"]?.extractive || "PPI (pixels per inch) measures the pixel density of a screen or digital image. It tells you how many pixels are packed into each linear inch. Higher PPI means sharper visuals. Typical values are 96 PPI for desktop monitors and 326-460 PPI for smartphones."}
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
      slug="what-is-ppi"
    >
      <h2 id="ppi-definition">PPI Definition</h2>
      <p>
        PPI stands for <strong>pixels per inch</strong>. It is a measure of pixel density &mdash; how many pixels exist within one linear inch of a display. PPI applies to screens, scanners, and digital images. A 27-inch monitor running at 2560 &times; 1440 has about 109 PPI, while a 6.1-inch iPhone at 2532 &times; 1170 has 460 PPI.
      </p>
      <p>
        PPI is critical for determining how sharp text and images appear on a given display. Higher pixel density produces smoother curves, finer text, and more lifelike images.
      </p>

      <h2 id="ppi-vs-dpi">PPI vs DPI</h2>
      <p>
        While often used interchangeably, <strong>PPI refers to screens</strong> (pixel density) and <strong>DPI refers to printers</strong> (ink dot density). A screen has pixels; a printer has dots. When someone says &ldquo;300 DPI image,&rdquo; they usually mean the image is 300 PPI at its intended print size. For a detailed breakdown, see our <Link href="/dpi-vs-ppi">DPI vs PPI</Link> comparison.
      </p>

      <h2 id="device-ppi-values">Device PPI Values</h2>
      <table>
        <thead>
          <tr><th>Device</th><th>Resolution</th><th>Screen Size</th><th>PPI</th></tr>
        </thead>
        <tbody>
          <tr><td>MacBook Air 15&quot; M3</td><td>2880 &times; 1864</td><td>15.3&quot;</td><td>224</td></tr>
          <tr><td>Dell U2723QE 27&quot;</td><td>3840 &times; 2160</td><td>27&quot;</td><td>163</td></tr>
          <tr><td>iPhone 16 Pro</td><td>2622 &times; 1206</td><td>6.3&quot;</td><td>460</td></tr>
          <tr><td>Samsung Galaxy S24</td><td>2340 &times; 1080</td><td>6.2&quot;</td><td>416</td></tr>
          <tr><td>iPad Pro 13&quot; M4</td><td>2752 &times; 2064</td><td>13&quot;</td><td>264</td></tr>
          <tr><td>Standard 24&quot; 1080p</td><td>1920 &times; 1080</td><td>24&quot;</td><td>92</td></tr>
        </tbody>
      </table>

      <h2 id="calculating-ppi">Calculating PPI</h2>
      <p>
        To calculate PPI for any display, use this formula:
      </p>
      <p>
        <code>PPI = &radic;(width&sup2; + height&sup2;) / diagonal inches</code>
      </p>
      <p>
        For a 27-inch 4K monitor (3840 &times; 2160): diagonal pixels = &radic;(3840&sup2; + 2160&sup2;) = 4406, so PPI = 4406 / 27 = <strong>163 PPI</strong>. Use our <Link href="/ppi-calculator">PPI Calculator</Link> to compute this automatically.
      </p>

      <h2 id="retina-hidpi">Retina and HiDPI Displays</h2>
      <p>
        Apple markets displays as &ldquo;Retina&rdquo; when individual pixels become invisible at a normal viewing distance. For laptops, this threshold is roughly 220+ PPI. For phones held closer, it is 300+ PPI. Windows calls equivalent displays &ldquo;HiDPI,&rdquo; and the operating system applies 125&ndash;200% scaling to keep UI elements at comfortable sizes despite the higher pixel density.
      </p>
      <p>
        Web developers serving HiDPI screens should provide images at 2&times; or 3&times; resolution using <code>srcset</code> or the <code>&lt;picture&gt;</code> element to ensure crisp rendering.
      </p>
    </BlogLayout>
  );
}
