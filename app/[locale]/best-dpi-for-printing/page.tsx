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
  const pageDict = dict.pages["best-dpi-for-printing"];

  return {
    title: pageDict?.title || "best-dpi-for-printing",
    description: pageDict?.description || "",
    alternates: {
      canonical: `/${locale}/best-dpi-for-printing`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/best-dpi-for-printing`]),
      ),
    },
    openGraph: {
      title: pageDict?.title || "best-dpi-for-printing",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}

const toc = [
  { id: "dpi-recommendations", label: "DPI Recommendations" },
  { id: "photos", label: "Photos & Fine Art" },
  { id: "documents", label: "Documents & Text" },
  { id: "large-format", label: "Large Format & Banners" },
  { id: "quality-vs-filesize", label: "Quality vs File Size" },
];

const faqItems = [
  {
    question: "Is 300 DPI always necessary for printing?",
    answer: "No. 300 DPI is the standard for handheld prints viewed up close (photos, brochures). For posters, 150 DPI is fine. For billboards viewed from 30+ feet, 25-72 DPI works. The required DPI depends on viewing distance.",
  },
  {
    question: "What happens if I print at low DPI?",
    answer: "Printing at low DPI causes visible pixelation — individual pixels become noticeable, edges look jagged, and details appear blurry. For photos, anything below 200 DPI at print size begins to show quality loss.",
  },
  {
    question: "How do I check if my image has enough DPI for printing?",
    answer: "Divide your image's pixel dimensions by the desired print size in inches. If the result is 300 or higher, you have sufficient resolution. For example, a 3600x2400 pixel image can print at 12x8 inches at 300 DPI.",
  },
  {
    question: "Does increasing DPI in Photoshop improve print quality?",
    answer: "Only if you resample (add pixels). Changing DPI without resampling simply changes the print size — the pixel data remains unchanged. Upsampling adds pixels through interpolation but cannot create detail that wasn't originally captured.",
  },
];

export default async function BestDpiForPrintingPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);

  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "best-dpi-for-printing", href: "/best-dpi-for-printing" },
  ]);

  const relatedArticles = [
    { title: dict.pages["what-is-dpi"]?.title || "What Is DPI?", href: "/what-is-dpi", description: dict.navDescriptions["what-is-dpi"] || "Complete DPI explainer" },
    { title: dict.pages["best-dpi-for-web"]?.title || "Best DPI for Web", href: "/best-dpi-for-web", description: dict.navDescriptions["best-dpi-for-web"] || "Why DPI doesn't matter for web" },
    { title: dict.pages["paper-sizes-in-pixels"]?.title || "Paper Sizes in Pixels", href: "/paper-sizes-in-pixels", description: dict.navDescriptions["paper-sizes-in-pixels"] || "A4, Letter at various DPIs" },
    { title: dict.pages["standard-image-sizes"]?.title || "Standard Image Sizes", href: "/standard-image-sizes", description: dict.navDescriptions["standard-image-sizes"] || "Photo print sizes in pixels" },
  ];
  return (
    <BlogLayout
      locale={validLocale}
      title={dict.pages["best-dpi-for-printing"]?.title || "Best DPI for Printing"}
      extractiveAnswer={dict.pages["best-dpi-for-printing"]?.extractive || "The best DPI for printing depends on the output type: 300 DPI for photos and brochures, 150 DPI for documents and newspapers, 72-100 DPI for posters, and 25-72 DPI for billboards. Higher DPI produces sharper prints but increases file size."}
      breadcrumbs={breadcrumbs}
      faqItems={faqItems}
      relatedArticles={relatedArticles}
      cta={{ label: "Try the DPI Calculator", href: "/dpi-calculator" }}
      toc={toc}
      labels={{
        readyToConvert: dict.tool.readyToConvert,
        relatedArticles: dict.tool.relatedArticles,
        onThisPage: dict.nav.onThisPage,
      }}
      slug="best-dpi-for-printing"
    >
      <h2 id="dpi-recommendations">DPI Recommendations by Print Type</h2>
      <table>
        <thead>
          <tr><th>Print Type</th><th>Recommended DPI</th><th>Viewing Distance</th></tr>
        </thead>
        <tbody>
          <tr><td>Photo prints (4x6, 5x7, 8x10)</td><td>300 DPI</td><td>Hand-held (1-2 ft)</td></tr>
          <tr><td>Magazines, brochures</td><td>300-350 DPI</td><td>Arm&rsquo;s length (1-2 ft)</td></tr>
          <tr><td>Business cards</td><td>300 DPI</td><td>Hand-held</td></tr>
          <tr><td>Documents, letters</td><td>150-200 DPI</td><td>Desktop (1-2 ft)</td></tr>
          <tr><td>Newspapers</td><td>150-170 DPI</td><td>Arm&rsquo;s length</td></tr>
          <tr><td>Posters (18x24, 24x36)</td><td>100-150 DPI</td><td>3-6 feet</td></tr>
          <tr><td>Trade show banners</td><td>72-100 DPI</td><td>6-10 feet</td></tr>
          <tr><td>Billboards</td><td>25-72 DPI</td><td>30+ feet</td></tr>
        </tbody>
      </table>

      <h2 id="photos">Photos and Fine Art</h2>
      <p>
        For photo prints viewed at arm&rsquo;s length, <strong>300 DPI</strong> is the industry standard. This ensures no visible pixelation and smooth tonal gradients. Fine art giclée prints often use 300&ndash;360 DPI for maximum detail reproduction.
      </p>
      <p>
        To print a 300 DPI photo at 8&times;10 inches, you need an image of at least <strong>2400&times;3000 pixels</strong> (7.2 megapixels). Most modern smartphones exceed this easily.
      </p>

      <h2 id="documents">Documents and Text</h2>
      <p>
        Text-heavy documents are less demanding than photographs. <strong>150&ndash;200 DPI</strong> produces clean, readable text for letters, reports, and invoices. Vector elements like logos and text remain sharp at any DPI because they are resolution-independent.
      </p>

      <h2 id="large-format">Large Format and Banners</h2>
      <p>
        Large prints are viewed from greater distances, so the eye cannot resolve fine detail. A 24&times;36-inch poster at <strong>100&ndash;150 DPI</strong> looks sharp from 3&ndash;5 feet. Trade show banners work well at <strong>72&ndash;100 DPI</strong>, and billboards are commonly printed at just <strong>25&ndash;50 DPI</strong>.
      </p>

      <h2 id="quality-vs-filesize">Quality vs File Size Tradeoff</h2>
      <p>
        Doubling the DPI quadruples the pixel count (and roughly the file size). A 10&times;8-inch image at 150 DPI is 1500&times;1200 pixels (1.8 MP, ~5 MB TIFF). At 300 DPI, it becomes 3000&times;2400 pixels (7.2 MP, ~20 MB TIFF). Choose the minimum DPI that meets your quality needs to keep files manageable.
      </p>
      <p>
        Calculate the exact pixel dimensions you need for any print size with our <Link href="/dpi-calculator">DPI Calculator</Link> or check our <Link href="/standard-image-sizes">Standard Image Sizes</Link> reference.
      </p>
    </BlogLayout>
  );
}
