import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import { ConverterLayout } from "@/components/tools/ConverterLayout";
import { getBreadcrumbs, getRelatedTools } from "@/lib/content-utils";
import { DpiChecker } from "./DpiChecker";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["image-dpi-checker"];

  return {
    title: pageDict?.title || "image-dpi-checker",
    description: pageDict?.description || "",
    alternates: {
      canonical: `/${locale}/image-dpi-checker`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/image-dpi-checker`]),
      ),
    },
    openGraph: {
      title: pageDict?.title || "image-dpi-checker",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}

const faqItems = [
  {
    question: "Can this tool read the DPI metadata from an image?",
    answer:
      "Browser-based tools cannot directly read EXIF DPI metadata. This tool reads the pixel dimensions and calculates maximum print sizes at various DPI settings. For embedded DPI metadata, use desktop software like Photoshop or GIMP.",
  },
  {
    question: "What resolution is needed for quality printing?",
    answer:
      "Professional printing requires 300 DPI. For a 4x6 inch print, you need at least 1200x1800 pixels. For an 8x10 print, you need 2400x3000 pixels. Images below these thresholds will appear pixelated when printed.",
  },
  {
    question: "Is my image good enough for a specific print size?",
    answer:
      "Upload your image and check the maximum print size table at 300 DPI. If the listed dimensions are larger than your desired print size, the image has sufficient resolution. If smaller, the print may appear blurry.",
  },
  {
    question: "What is the difference between web and print quality images?",
    answer:
      "Web images typically need only 72-96 pixels per inch since screens display at fixed pixel density. Print images need 300 pixels per inch for sharp output. A 1000x1000 web image prints at only 3.3x3.3 inches at professional quality.",
  },
  {
    question: "Does this tool upload my image to a server?",
    answer:
      "No. All processing happens locally in your browser. Your image never leaves your device. The tool uses the browser's Image API to read dimensions and the File API to read the file size.",
  },
];

export default async function ImageDpiCheckerPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "pixel-converter", href: "/pixel-converter" },
    { slug: "image-dpi-checker", href: "/image-dpi-checker" },
  ]);
  const relatedTools = getRelatedTools(dict, [
    { slug: "dpi-calculator", href: "/dpi-calculator", icon: "🖥️" },
    { slug: "dpi-converter", href: "/dpi-converter", icon: "🔄" },
    { slug: "image-size-calculator", href: "/image-size-calculator", icon: "📐" },
    { slug: "megapixel-calculator", href: "/megapixel-calculator", icon: "📷" },
    { slug: "pixels-to-inches", href: "/pixels-to-inches", icon: "📏" },
  ]);
  return (
    <ConverterLayout
      locale={validLocale}
      title={dict.pages["image-dpi-checker"]?.title || "Image DPI Checker"}
      description={dict.pages["image-dpi-checker"]?.description || "Upload an image to check its resolution and print quality."}
      slug="/image-dpi-checker"
      extractiveAnswer={dict.pages["image-dpi-checker"]?.extractive || "Upload any image to instantly see its pixel dimensions, megapixel count, and maximum print size at 300 DPI (professional), 150 DPI (large format), and 96 DPI (screen). Images of 2+ megapixels are considered print quality at 300 DPI."}
      breadcrumbs={breadcrumbs}
      relatedTools={relatedTools}
      faqItems={faqItems}
      labels={{
        relatedTools: dict.tool.relatedTools,
        faq: dict.tool.faq,
      }}
      content={
        <div>
          <h2>How the Image DPI Checker Works</h2>
          <p>
            This tool reads your image&apos;s pixel dimensions directly in the browser and calculates print sizes at various DPI settings. It assesses whether your image is suitable for professional printing, large-format output, or web use only.
          </p>

          <h3>Quality Assessment Criteria</h3>
          <ul>
            <li><strong>Print Quality (2+ MP):</strong> Sufficient pixels for a 5x7 inch print or larger at 300 DPI. Suitable for brochures and photos.</li>
            <li><strong>Medium Quality (0.5-2 MP):</strong> Good for web use and small prints. May show artifacts in large format printing.</li>
            <li><strong>Web Only (under 0.5 MP):</strong> Best suited for web thumbnails and social media. Not recommended for any print use.</li>
          </ul>

          <h3>Print Size Guidelines</h3>
          <ul>
            <li><strong>4x6 photo:</strong> Minimum 1200x1800 pixels (2.16 MP)</li>
            <li><strong>8x10 photo:</strong> Minimum 2400x3000 pixels (7.2 MP)</li>
            <li><strong>11x14 print:</strong> Minimum 3300x4200 pixels (13.86 MP)</li>
            <li><strong>16x20 poster:</strong> Minimum 4800x6000 pixels (28.8 MP)</li>
          </ul>

          <h3>Privacy</h3>
          <p>
            Your images are processed entirely in the browser. No data is uploaded to any server. The tool uses the HTML5 File and Image APIs to read dimensions locally.
          </p>
        </div>
      }
    >
      <DpiChecker />
    </ConverterLayout>
  );
}
