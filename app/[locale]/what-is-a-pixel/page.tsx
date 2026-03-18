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
  const pageDict = dict.pages["what-is-a-pixel"];

  return {
    title: pageDict?.title || "what-is-a-pixel",
    description: pageDict?.description || "",
    alternates: {
      canonical: `/${locale}/what-is-a-pixel`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/what-is-a-pixel`]),
      ),
    },
    openGraph: {
      title: pageDict?.title || "what-is-a-pixel",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Learn", href: "/what-is-a-pixel" },
  { label: "What Is a Pixel?", href: "/what-is-a-pixel" },
];

const toc = [
  { id: "pixel-definition", label: "Pixel Definition" },
  { id: "subpixels", label: "Subpixels (RGB)" },
  { id: "megapixels", label: "Megapixels" },
  { id: "pixel-size", label: "Pixel Size at Different DPIs" },
  { id: "history", label: "History of Pixels" },
];

const faqItems = [
  {
    question: "How big is a pixel?",
    answer: "A pixel has no fixed physical size. Its size depends on the display's PPI. At 96 PPI, one pixel is about 0.26mm. At 300 PPI (print), one pixel is 0.085mm. On a 460 PPI phone, one pixel is just 0.055mm.",
  },
  {
    question: "What are subpixels?",
    answer: "Each pixel on an LCD or OLED screen is composed of three subpixels: red, green, and blue (RGB). By varying the intensity of each subpixel, the pixel can produce millions of different colors. Some displays use RGBW (adding white) subpixel arrangements.",
  },
  {
    question: "What does megapixel mean?",
    answer: "One megapixel equals one million pixels. A 12-megapixel camera sensor captures images with roughly 12 million individual pixels, such as 4000 x 3000 pixels. More megapixels allows for larger prints and more cropping flexibility.",
  },
  {
    question: "Are CSS pixels the same as device pixels?",
    answer: "No. CSS pixels are an abstract unit used in web design. On a 2x retina display, one CSS pixel equals four device pixels (2x2). This distinction is why images need to be 2x or 3x resolution for sharp rendering on HiDPI screens.",
  },
];

const relatedArticles = [
  { title: "Pixels Per Inch Explained", href: "/pixels-per-inch", description: "Complete PPI reference guide" },
  { title: "What Is DPI?", href: "/what-is-dpi", description: "Dots per inch for print" },
  { title: "Common Screen Resolutions", href: "/common-resolutions", description: "From HD to 8K" },
  { title: "EM vs REM in CSS", href: "/em-vs-rem", description: "CSS unit comparison guide" },
];

export default async function WhatIsAPixelPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  return (
    <BlogLayout
      locale={validLocale}
      title={dict.pages["what-is-a-pixel"]?.title || "What Is a Pixel?"}
      extractiveAnswer={dict.pages["what-is-a-pixel"]?.extractive || "A pixel (short for 'picture element') is the smallest controllable unit of a digital image or display. Each pixel holds color information and, together, millions of pixels form the images you see on screens. Pixel size varies by display density."}
      breadcrumbs={breadcrumbs}
      faqItems={faqItems}
      relatedArticles={relatedArticles}
      cta={{ label: "Try the Pixel Converter", href: "/pixel-converter" }}
      toc={toc}
      labels={{
        readyToConvert: dict.tool.readyToConvert,
        relatedArticles: dict.tool.relatedArticles,
        onThisPage: dict.nav.onThisPage,
      }}
      slug="what-is-a-pixel"
    >
      <h2 id="pixel-definition">Pixel Definition</h2>
      <p>
        A <strong>pixel</strong> (short for &ldquo;picture element&rdquo;) is the smallest addressable unit of a raster image or digital display. Every photo you view, every icon on your screen, and every frame of video is composed of thousands or millions of individual pixels arranged in a rectangular grid.
      </p>
      <p>
        Each pixel stores color information, typically as a combination of red, green, and blue values (RGB). In an 8-bit-per-channel image, each channel ranges from 0 to 255, giving each pixel the ability to represent one of over 16.7 million colors.
      </p>

      <h2 id="subpixels">Subpixels (RGB)</h2>
      <p>
        On LCD and OLED screens, each visible pixel is actually composed of three <strong>subpixels</strong>: one red, one green, and one blue. These subpixels are too small to see individually at normal viewing distance. By adjusting the brightness of each subpixel independently, the display creates the full range of colors you perceive.
      </p>
      <p>
        Some display technologies use different subpixel arrangements. Samsung&rsquo;s PenTile layout uses an RGBG pattern, while some LCDs add a white subpixel (RGBW) to improve brightness efficiency.
      </p>

      <h2 id="megapixels">Megapixels</h2>
      <p>
        One <strong>megapixel (MP)</strong> equals one million pixels. Camera sensors and image files are rated in megapixels to indicate their total resolution. A 48 MP smartphone camera captures images of roughly 8000 &times; 6000 pixels. More megapixels provide greater detail and allow for larger prints or more aggressive cropping.
      </p>
      <table>
        <thead>
          <tr><th>Megapixels</th><th>Typical Dimensions</th><th>Max Print Size (300 DPI)</th></tr>
        </thead>
        <tbody>
          <tr><td>2 MP</td><td>1600 &times; 1200</td><td>5.3 &times; 4&quot;</td></tr>
          <tr><td>8 MP</td><td>3264 &times; 2448</td><td>10.9 &times; 8.2&quot;</td></tr>
          <tr><td>12 MP</td><td>4000 &times; 3000</td><td>13.3 &times; 10&quot;</td></tr>
          <tr><td>24 MP</td><td>6000 &times; 4000</td><td>20 &times; 13.3&quot;</td></tr>
          <tr><td>48 MP</td><td>8000 &times; 6000</td><td>26.7 &times; 20&quot;</td></tr>
        </tbody>
      </table>

      <h2 id="pixel-size">Pixel Size at Different DPIs</h2>
      <p>
        A pixel has no inherent physical size &mdash; its real-world dimensions depend on the display or print density. Here is the physical size of one pixel at common DPI/PPI values:
      </p>
      <ul>
        <li><strong>72 PPI:</strong> 0.353 mm (0.0139&quot;)</li>
        <li><strong>96 PPI:</strong> 0.265 mm (0.0104&quot;)</li>
        <li><strong>150 PPI:</strong> 0.169 mm (0.0067&quot;)</li>
        <li><strong>300 PPI:</strong> 0.085 mm (0.0033&quot;)</li>
        <li><strong>460 PPI:</strong> 0.055 mm (0.0022&quot;)</li>
      </ul>

      <h2 id="history">History of Pixels</h2>
      <p>
        The concept of a pixel dates back to the 1960s, with the term first used in the context of early digital image processing. Frederic Billingsley of JPL is often credited with popularizing the word &ldquo;pixel&rdquo; in 1965. Early digital displays had very low pixel counts &mdash; the Apple II (1977) displayed 280 &times; 192 pixels, while modern 8K displays render over 33 million pixels.
      </p>
      <p>
        Today, pixel technology continues to evolve with micro-LED displays, foldable screens, and displays exceeding 1000 PPI for VR headsets. The pixel remains the fundamental building block of every digital visual experience. Explore how pixels map to physical units with our <Link href="/pixel-converter">Pixel Converter</Link>.
      </p>
    </BlogLayout>
  );
}
