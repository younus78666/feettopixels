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
  const pageDict = dict.pages["dpi-vs-ppi"];

  return {
    title: pageDict?.title || "dpi-vs-ppi",
    description: pageDict?.description || "",
    alternates: {
      canonical: `/${locale}/dpi-vs-ppi`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/dpi-vs-ppi`]),
      ),
    },
    openGraph: {
      title: pageDict?.title || "dpi-vs-ppi",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Learn", href: "/dpi-vs-ppi" },
  { label: "DPI vs PPI", href: "/dpi-vs-ppi" },
];

const toc = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "comparison-table", label: "Comparison Table" },
  { id: "when-dpi-applies", label: "When DPI Applies" },
  { id: "when-ppi-applies", label: "When PPI Applies" },
  { id: "common-confusion", label: "Common Confusion" },
];

const faqItems = [
  {
    question: "Can I use DPI and PPI interchangeably?",
    answer: "In casual use, many people swap the terms. However, DPI technically applies to printers (ink dots per inch), while PPI applies to screens and digital images (pixels per inch). Using the correct term avoids ambiguity in professional settings.",
  },
  {
    question: "Is 300 DPI the same as 300 PPI?",
    answer: "When referring to an image file, '300 DPI' usually means 300 PPI — the image has 300 pixels per inch at its intended print size. The printer's actual DPI (often 720-2880) determines how finely those pixels are reproduced with ink dots.",
  },
  {
    question: "Which matters more for web design, DPI or PPI?",
    answer: "Neither. Web browsers ignore the DPI/PPI metadata in image files. Only pixel dimensions matter for web display. A 1200x800 image renders the same on screen regardless of its DPI setting.",
  },
  {
    question: "Why do image editors default to 72 or 96 DPI?",
    answer: "72 DPI was the legacy Mac screen resolution, and 96 DPI is the Windows default. These defaults have no impact on how the image appears on screen — they only affect the default print size calculation.",
  },
];

const relatedArticles = [
  { title: "What Is DPI?", href: "/what-is-dpi", description: "Full DPI guide for print and screen" },
  { title: "What Is PPI?", href: "/what-is-ppi", description: "PPI for screens and displays" },
  { title: "Best DPI for Printing", href: "/best-dpi-for-printing", description: "DPI recommendations by print type" },
  { title: "Best DPI for Web", href: "/best-dpi-for-web", description: "Why DPI doesn't matter online" },
];

export default async function DpiVsPpiPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  return (
    <BlogLayout
      locale={validLocale}
      title={dict.pages["dpi-vs-ppi"]?.title || "DPI vs PPI: What's the Difference?"}
      extractiveAnswer={dict.pages["dpi-vs-ppi"]?.extractive || "DPI (dots per inch) measures printer resolution — how many ink dots per inch. PPI (pixels per inch) measures screen or image pixel density. DPI applies to physical printing, PPI applies to digital displays. They are related but not identical concepts."}
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
      slug="dpi-vs-ppi"
    >
      <h2 id="quick-answer">Quick Answer</h2>
      <p>
        <strong>DPI</strong> (dots per inch) is a printer metric. It measures how many tiny ink dots a printer deposits per inch. <strong>PPI</strong> (pixels per inch) is a screen and image metric. It measures how many pixels are packed into each inch of a display or digital file. Both describe density per inch, but they apply to different contexts.
      </p>

      <h2 id="comparison-table">Side-by-Side Comparison</h2>
      <table>
        <thead>
          <tr><th>Attribute</th><th>DPI (Dots Per Inch)</th><th>PPI (Pixels Per Inch)</th></tr>
        </thead>
        <tbody>
          <tr><td>Stands for</td><td>Dots per inch</td><td>Pixels per inch</td></tr>
          <tr><td>Applies to</td><td>Printers and printing</td><td>Screens and digital images</td></tr>
          <tr><td>Measures</td><td>Ink dot density</td><td>Pixel density</td></tr>
          <tr><td>Typical values</td><td>600&ndash;2880 (printers)</td><td>72&ndash;460 (screens)</td></tr>
          <tr><td>Higher value means</td><td>Smoother, finer prints</td><td>Sharper, crisper display</td></tr>
          <tr><td>Controlled by</td><td>Printer hardware/driver</td><td>Display hardware</td></tr>
          <tr><td>Affects file size?</td><td>No (metadata only)</td><td>No (metadata only)</td></tr>
        </tbody>
      </table>

      <h2 id="when-dpi-applies">When DPI Applies</h2>
      <p>
        DPI is relevant when you are <strong>printing</strong>. Your printer&rsquo;s DPI setting determines how finely it can reproduce the image data. A 1200 DPI laser printer can lay down ink dots much more precisely than a 300 DPI printer, producing smoother gradients and finer text.
      </p>
      <p>
        When someone says &ldquo;save this image at 300 DPI,&rdquo; they usually mean 300 PPI &mdash; they want 300 pixels per inch at the intended print size. The printer&rsquo;s actual DPI is a separate hardware specification.
      </p>

      <h2 id="when-ppi-applies">When PPI Applies</h2>
      <p>
        PPI is relevant for <strong>screens and image files</strong>. Your monitor has a fixed PPI determined by its resolution and physical size. When preparing images for a specific print size, PPI tells you how many pixels you need. At 300 PPI, a 10&times;8-inch print requires a 3000&times;2400 pixel image.
      </p>

      <h2 id="common-confusion">Common Confusion</h2>
      <p>
        The confusion arises because software like Photoshop labels image resolution as &ldquo;DPI&rdquo; even though it is technically PPI. The image file stores pixels, not dots. The dots only exist when the image is printed. In practice, understanding that <strong>pixel dimensions are what matter</strong> &mdash; for both screen and print &mdash; resolves most confusion.
      </p>
      <p>
        Use our <Link href="/dpi-calculator">DPI Calculator</Link> to determine print dimensions, or the <Link href="/ppi-calculator">PPI Calculator</Link> to find the pixel density of any screen.
      </p>
    </BlogLayout>
  );
}
