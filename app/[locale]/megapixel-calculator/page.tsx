import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import { ConverterLayout } from "@/components/tools/ConverterLayout";
import { getBreadcrumbs, getRelatedTools } from "@/lib/content-utils";
import { MegapixelCalc } from "./MegapixelCalc";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["megapixel-calculator"];

  return {
    title: pageDict?.title || "megapixel-calculator",
    description: pageDict?.description || "",
    alternates: {
      canonical: `/${locale}/megapixel-calculator`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/megapixel-calculator`]),
      ),
    },
    openGraph: {
      title: pageDict?.title || "megapixel-calculator",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}

const faqItems = [
  {
    question: "What is a megapixel?",
    answer:
      "A megapixel (MP) equals one million pixels. A 12 MP camera produces images with 12 million total pixels. The actual dimensions depend on the aspect ratio — a 12 MP image at 4:3 is 4000x3000 pixels, while at 16:9 it is 4619x2598 pixels.",
  },
  {
    question: "Do more megapixels mean better photo quality?",
    answer:
      "Not necessarily. Megapixels determine resolution (detail and print size), but image quality also depends on sensor size, lens quality, image processing, and dynamic range. A 12 MP full-frame sensor often produces better images than a 48 MP phone sensor.",
  },
  {
    question: "How many megapixels do I need for printing?",
    answer:
      "At 300 DPI (professional quality): 2 MP for a 4x6 print, 7 MP for an 8x10 print, 14 MP for an 11x14 print, and 29 MP for a 16x20 print. For large posters at 150 DPI, you need roughly half the megapixels.",
  },
  {
    question: "Why does aspect ratio affect pixel dimensions?",
    answer:
      "Megapixels define total pixel count (width x height), not the shape. A 12 MP image could be 4000x3000 (4:3), 4243x2829 (3:2), or 3464x3464 (1:1). The aspect ratio determines how those 12 million pixels are distributed between width and height.",
  },
  {
    question: "How do phone camera megapixels compare to DSLRs?",
    answer:
      "Modern phones range from 12 MP to 200 MP, while professional DSLRs typically use 20-60 MP. Despite higher megapixel counts, phone sensors are much smaller, so each pixel captures less light. DSLR images generally have better dynamic range and low-light performance.",
  },
];

export default async function MegapixelCalculatorPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "pixel-converter", href: "/pixel-converter" },
    { slug: "megapixel-calculator", href: "/megapixel-calculator" },
  ]);
  const relatedTools = getRelatedTools(dict, [
    { slug: "image-size-calculator", href: "/image-size-calculator", icon: "📐" },
    { slug: "image-dpi-checker", href: "/image-dpi-checker", icon: "🔍" },
    { slug: "aspect-ratio-calculator", href: "/aspect-ratio-calculator", icon: "🔄" },
    { slug: "dpi-calculator", href: "/dpi-calculator", icon: "🖥️" },
    { slug: "pixels-to-inches", href: "/pixels-to-inches", icon: "📏" },
  ]);
  return (
    <ConverterLayout
      locale={validLocale}
      title={dict.pages["megapixel-calculator"]?.title || "Megapixel Calculator"}
      description={dict.pages["megapixel-calculator"]?.description || "Convert between megapixels and pixel dimensions at any aspect ratio."}
      slug="/megapixel-calculator"
      extractiveAnswer={dict.pages["megapixel-calculator"]?.extractive || "A megapixel equals 1 million pixels. To find dimensions from megapixels, use the aspect ratio: for 12 MP at 4:3, width = sqrt(12M x 4/3) = 4000px, height = 3000px. To find megapixels from dimensions: MP = (width x height) / 1,000,000."}
      breadcrumbs={breadcrumbs}
      relatedTools={relatedTools}
      faqItems={faqItems}
      labels={{
        relatedTools: dict.tool.relatedTools,
        faq: dict.tool.faq,
      }}
      content={
        <div>
          <h2>Understanding Megapixels</h2>
          <p>
            Megapixels measure the total number of pixels a camera sensor or image contains. One megapixel equals one million pixels. This calculator converts between megapixel counts and actual pixel dimensions based on the aspect ratio.
          </p>

          <h3>The Math Behind Megapixels</h3>
          <p>
            Given megapixels (MP) and aspect ratio (W:H): <strong>height = sqrt(MP x 1,000,000 x H / W)</strong> and <strong>width = height x W / H</strong>. The total pixels always equal width x height.
          </p>

          <h3>Camera Megapixel Guide</h3>
          <ul>
            <li><strong>8 MP</strong> — Entry-level smartphones. Good for social media and small prints up to 5x7.</li>
            <li><strong>12 MP</strong> — Standard for iPhones and many flagship phones. Excellent for 8x10 prints.</li>
            <li><strong>24-26 MP</strong> — Standard for mid-range DSLRs and mirrorless cameras. Great for large prints.</li>
            <li><strong>48 MP</strong> — Common in modern smartphones with pixel binning. Captures 12 MP in low light.</li>
            <li><strong>108 MP</strong> — High-end smartphone sensors. Massive detail for cropping and large prints.</li>
          </ul>

          <h3>Megapixels vs Print Size</h3>
          <p>
            Print quality depends on both megapixels and print DPI. Professional printing at 300 DPI requires more pixels per inch than web display at 96 DPI. Use this calculator alongside the Image Size Calculator to determine maximum print sizes.
          </p>
        </div>
      }
    >
      <MegapixelCalc />
    </ConverterLayout>
  );
}
