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
  const pageDict = dict.pages["best-dpi-for-web"];

  return {
    title: pageDict?.title || "best-dpi-for-web",
    description: pageDict?.description || "",
    alternates: {
      canonical: `/${locale}/best-dpi-for-web`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/best-dpi-for-web`]),
      ),
    },
    openGraph: {
      title: pageDict?.title || "best-dpi-for-web",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Learn", href: "/best-dpi-for-web" },
  { label: "Best DPI for Web", href: "/best-dpi-for-web" },
];

const toc = [
  { id: "dpi-irrelevant", label: "Why DPI Is Irrelevant" },
  { id: "what-matters", label: "What Actually Matters" },
  { id: "responsive-images", label: "Responsive Images" },
  { id: "optimization-tips", label: "Optimization Tips" },
];

const faqItems = [
  {
    question: "Should I save web images at 72 DPI?",
    answer: "It doesn't matter. Browsers ignore DPI metadata entirely. A 1200x800 image displays identically whether saved at 72, 96, or 300 DPI. Only the pixel dimensions and file format affect web display.",
  },
  {
    question: "Why do some people recommend 72 DPI for web?",
    answer: "This is a persistent myth from early Mac displays, which had 72 PPI screens. Setting images to 72 DPI made 'points' and 'pixels' match 1:1 in early design software. Modern browsers render by pixel count, not DPI.",
  },
  {
    question: "How do I optimize images for web performance?",
    answer: "Use modern formats like WebP or AVIF. Resize to the actual display dimensions (no larger than needed). Compress with tools like Squoosh or ImageOptim. Use responsive images with srcset for different screen sizes.",
  },
];

const relatedArticles = [
  { title: "What Is DPI?", href: "/what-is-dpi", description: "Complete DPI guide" },
  { title: "Best DPI for Printing", href: "/best-dpi-for-printing", description: "DPI recommendations for print" },
  { title: "Social Media Image Sizes", href: "/social-media-image-sizes", description: "Platform-specific dimensions" },
  { title: "DPI vs PPI", href: "/dpi-vs-ppi", description: "Understanding the difference" },
];

export default async function BestDpiForWebPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  return (
    <BlogLayout
      locale={validLocale}
      title={dict.pages["best-dpi-for-web"]?.title || "Best DPI for Web Images"}
      extractiveAnswer={dict.pages["best-dpi-for-web"]?.extractive || "DPI does not affect how images display on the web. Browsers render images based on pixel dimensions only, ignoring the DPI metadata in image files. Focus on pixel dimensions, file format (WebP/AVIF), and compression for web optimization."}
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
      slug="best-dpi-for-web"
    >
      <h2 id="dpi-irrelevant">Why DPI Is Irrelevant for Web</h2>
      <p>
        Web browsers completely ignore the DPI (or PPI) metadata embedded in image files. When a browser renders an image, it uses <strong>only the pixel dimensions</strong>. A 1200 &times; 800 image saved at 72 DPI is rendered identically to the same image saved at 300 DPI. The files may differ slightly in metadata size, but the visual output is the same.
      </p>
      <p>
        This is a common source of confusion: designers accustomed to print workflows assume they should set web images to 72 or 96 DPI. In reality, you can save at any DPI &mdash; it will not affect rendering, file size, or quality.
      </p>

      <h2 id="what-matters">What Actually Matters for Web Images</h2>
      <ul>
        <li><strong>Pixel dimensions:</strong> Serve images at the size they will display (or 2&times; for retina). A hero image displayed at 1200 CSS pixels wide should be 1200 px (standard) or 2400 px (retina).</li>
        <li><strong>File format:</strong> Use WebP for broad compatibility with excellent compression. Use AVIF for even better compression where supported. Fall back to JPEG for photos and PNG for graphics with transparency.</li>
        <li><strong>Compression:</strong> A well-compressed WebP image can be 25&ndash;35% smaller than an equivalent JPEG with no visible quality loss.</li>
        <li><strong>Lazy loading:</strong> Add <code>loading=&quot;lazy&quot;</code> to images below the fold to defer loading until they enter the viewport.</li>
      </ul>

      <h2 id="responsive-images">Responsive Images for HiDPI Screens</h2>
      <p>
        On retina (2&times;) and high-density (3&times;) screens, images need more pixels to appear sharp. Use the HTML <code>srcset</code> attribute to serve different resolutions:
      </p>
      <pre><code>{`<img
  src="hero-800w.webp"
  srcset="hero-800w.webp 800w,
          hero-1200w.webp 1200w,
          hero-2400w.webp 2400w"
  sizes="(max-width: 600px) 100vw, 1200px"
  alt="Hero image"
  loading="lazy"
/>`}</code></pre>
      <p>
        The browser selects the appropriate image based on the viewport width and device pixel ratio, ensuring sharp images without wasting bandwidth on standard displays.
      </p>

      <h2 id="optimization-tips">Web Image Optimization Checklist</h2>
      <ul>
        <li>Resize images to their maximum display size (do not serve a 4000 px image for a 1200 px container).</li>
        <li>Use WebP or AVIF format with quality setting of 75&ndash;85%.</li>
        <li>Provide 1&times; and 2&times; versions via <code>srcset</code>.</li>
        <li>Add <code>width</code> and <code>height</code> attributes to prevent layout shift.</li>
        <li>Use lazy loading for images below the initial viewport.</li>
        <li>Consider using a CDN with automatic format negotiation.</li>
      </ul>
      <p>
        Calculate the exact pixel dimensions you need for any layout with our <Link href="/image-size-calculator">Image Size Calculator</Link>.
      </p>
    </BlogLayout>
  );
}
