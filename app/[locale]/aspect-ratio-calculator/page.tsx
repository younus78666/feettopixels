import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import { ConverterLayout } from "@/components/tools/ConverterLayout";
import { getBreadcrumbs, getRelatedTools } from "@/lib/content-utils";
import { AspectRatioCalc } from "./AspectRatioCalc";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["aspect-ratio-calculator"];

  return {
    title: pageDict?.title || "aspect-ratio-calculator",
    description: pageDict?.description || "",
    alternates: {
      canonical: `/${locale}/aspect-ratio-calculator`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/aspect-ratio-calculator`]),
      ),
    },
    openGraph: {
      title: pageDict?.title || "aspect-ratio-calculator",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}

const faqItems = [
  {
    question: "What is aspect ratio?",
    answer:
      "Aspect ratio is the proportional relationship between width and height. It is expressed as two numbers separated by a colon (e.g., 16:9). An image with a 16:9 aspect ratio is 16 units wide for every 9 units tall, regardless of actual pixel dimensions.",
  },
  {
    question: "How do I calculate aspect ratio from pixel dimensions?",
    answer:
      "Divide both the width and height by their greatest common divisor (GCD). For example, 1920x1080: GCD is 120, so 1920/120 = 16 and 1080/120 = 9, giving a 16:9 ratio.",
  },
  {
    question: "What aspect ratio should I use for YouTube videos?",
    answer:
      "YouTube recommends 16:9 (widescreen). Standard resolutions are 1920x1080 (1080p), 2560x1440 (1440p), and 3840x2160 (4K). YouTube Shorts use 9:16 (vertical).",
  },
  {
    question: "What is the difference between 16:9 and 21:9?",
    answer:
      "16:9 is the standard widescreen format used by most monitors and TVs. 21:9 (ultrawide) is wider, providing more horizontal screen space. Ultrawide monitors at 21:9 are popular for productivity and immersive gaming.",
  },
  {
    question: "How do I resize an image while maintaining aspect ratio?",
    answer:
      "Lock the aspect ratio and change one dimension. The calculator will compute the other dimension automatically. For example, if you set a 16:9 ratio and enter 1280 as width, the height will be calculated as 720.",
  },
];

export default async function AspectRatioCalculatorPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "pixel-converter", href: "/pixel-converter" },
    { slug: "aspect-ratio-calculator", href: "/aspect-ratio-calculator" },
  ]);
  const relatedTools = getRelatedTools(dict, [
    { slug: "image-size-calculator", href: "/image-size-calculator", icon: "📐" },
    { slug: "screen-resolution-checker", href: "/screen-resolution-checker", icon: "📺" },
    { slug: "megapixel-calculator", href: "/megapixel-calculator", icon: "📷" },
    { slug: "pixels-to-inches", href: "/pixels-to-inches", icon: "📏" },
    { slug: "dpi-calculator", href: "/dpi-calculator", icon: "🖥️" },
  ]);
  return (
    <ConverterLayout
      locale={validLocale}
      title={dict.pages["aspect-ratio-calculator"]?.title || "Aspect Ratio Calculator"}
      description={dict.pages["aspect-ratio-calculator"]?.description || "Calculate width, height, or aspect ratio from any two known values."}
      slug="/aspect-ratio-calculator"
      extractiveAnswer={dict.pages["aspect-ratio-calculator"]?.extractive || "To find an aspect ratio, divide width and height by their greatest common divisor. For 1920x1080, the GCD is 120, yielding 16:9. To find a missing dimension, lock the ratio and enter one dimension to calculate the other."}
      breadcrumbs={breadcrumbs}
      relatedTools={relatedTools}
      faqItems={faqItems}
      labels={{
        relatedTools: dict.tool.relatedTools,
        faq: dict.tool.faq,
      }}
      content={
        <div>
          <h2>Understanding Aspect Ratios</h2>
          <p>
            Aspect ratio defines the shape of an image or screen by comparing its width to its height. It determines how content is displayed across different devices and formats. Maintaining the correct aspect ratio prevents distortion when resizing images or video.
          </p>

          <h3>Common Aspect Ratios</h3>
          <ul>
            <li><strong>16:9</strong> — Standard widescreen for monitors, TVs, and YouTube. Used by 1080p, 1440p, and 4K resolutions.</li>
            <li><strong>4:3</strong> — Classic TV and monitor format. Still used for presentations and some tablets.</li>
            <li><strong>1:1</strong> — Square format popular on Instagram and social media profile pictures.</li>
            <li><strong>3:2</strong> — Common in DSLR photography and some laptop screens like the Surface Pro.</li>
            <li><strong>21:9</strong> — Ultrawide cinematic format for immersive gaming and movie viewing.</li>
          </ul>

          <h3>How the Calculator Works</h3>
          <p>
            Select which value to lock (ratio, width, or height), then enter the other two values. The calculator computes the missing value. It also shows the simplified ratio and decimal ratio for your dimensions.
          </p>
        </div>
      }
    >
      <AspectRatioCalc />
    </ConverterLayout>
  );
}
