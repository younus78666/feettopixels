import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import { ConverterLayout } from "@/components/tools/ConverterLayout";
import { ImageSizeCalc } from "./ImageSizeCalc";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["image-size-calculator"];

  return {
    title: pageDict?.title || "image-size-calculator",
    description: pageDict?.description || "",
    alternates: {
      canonical: `/${locale}/image-size-calculator`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/image-size-calculator`]),
      ),
    },
    openGraph: {
      title: pageDict?.title || "image-size-calculator",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Pixel Converter", href: "/pixel-converter" },
  { label: "Image Size Calculator", href: "/image-size-calculator" },
];

const relatedTools = [
  { name: "DPI Calculator", description: "Calculate dots per inch for screens", href: "/dpi-calculator", icon: "🖥️" },
  { name: "Megapixel Calculator", description: "Convert megapixels to dimensions", href: "/megapixel-calculator", icon: "📷" },
  { name: "Aspect Ratio Calculator", description: "Calculate aspect ratio", href: "/aspect-ratio-calculator", icon: "📐" },
  { name: "Pixels to Inches", description: "Convert pixels to inches", href: "/pixels-to-inches", icon: "📏" },
  { name: "DPI Converter", description: "Convert between DPI resolutions", href: "/dpi-converter", icon: "🔄" },
];

const faqItems = [
  {
    question: "How do I calculate the physical size of an image?",
    answer:
      "Divide the pixel dimensions by the DPI. For example, a 1920x1080 image at 300 DPI is 6.4 x 3.6 inches. At 96 DPI (screen), the same image is 20 x 11.25 inches.",
  },
  {
    question: "How accurate are the file size estimates?",
    answer:
      "The uncompressed size is exact based on pixel count and bit depth. JPEG and PNG estimates are approximations — actual file size depends on image complexity, compression settings, and content. Simple images compress more than detailed photos.",
  },
  {
    question: "What does bit depth mean for image size?",
    answer:
      "Bit depth determines how many bits store each pixel. 8-bit stores 256 shades (grayscale), 24-bit stores 16.7 million colors (RGB), and 32-bit adds transparency (RGBA). Higher bit depth means larger file sizes.",
  },
  {
    question: "What resolution do I need for a specific print size?",
    answer:
      "Multiply the desired print size in inches by the target DPI. For a 10x8 inch print at 300 DPI, you need 3000x2400 pixels. For web display at 96 DPI, a 10x8 area only requires 960x768 pixels.",
  },
  {
    question: "Why does the same image look different sizes on different screens?",
    answer:
      "Screens have different pixel densities (PPI). A 1920px wide image fills a 24-inch 1080p monitor entirely, but only half of a 27-inch 4K monitor. The physical size depends on the screen's PPI, not the image's DPI metadata.",
  },
];

export default async function ImageSizeCalculatorPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  return (
    <ConverterLayout
      locale={validLocale}
      title={dict.pages["image-size-calculator"]?.title || "Image Size Calculator"}
      description={dict.pages["image-size-calculator"]?.description || "Calculate the physical print size and file size from pixel dimensions."}
      slug="/image-size-calculator"
      extractiveAnswer={dict.pages["image-size-calculator"]?.extractive || "To find an image's physical size, divide pixels by DPI. A 1920x1080 image at 300 DPI prints at 6.4 x 3.6 inches (16.3 x 9.1 cm). At 96 DPI, it prints at 20 x 11.25 inches. File size depends on pixel count, bit depth, and compression format."}
      breadcrumbs={breadcrumbs}
      relatedTools={relatedTools}
      faqItems={faqItems}
      labels={{
        relatedTools: dict.tool.relatedTools,
        faq: dict.tool.faq,
      }}
      content={
        <div>
          <h2>Understanding Image Size</h2>
          <p>
            Image size encompasses both the pixel dimensions (digital size) and the physical dimensions (print size). The relationship between these depends on DPI — how many pixels are packed into each inch of output.
          </p>

          <h3>Physical Size Formula</h3>
          <p>
            <strong>Size in inches = Pixels / DPI</strong>. To convert to centimeters, multiply inches by 2.54. To convert to millimeters, multiply centimeters by 10.
          </p>

          <h3>File Size Estimation</h3>
          <ul>
            <li><strong>Uncompressed:</strong> Width x Height x (Bit Depth / 8) bytes. A 1920x1080 24-bit image is about 5.9 MB uncompressed.</li>
            <li><strong>JPEG:</strong> Typically 1/10 to 1/20 of uncompressed size, depending on quality setting and image complexity.</li>
            <li><strong>PNG:</strong> Typically 1/3 to 1/2 of uncompressed size for photos; much smaller for graphics with solid colors.</li>
          </ul>

          <h3>Common Image Dimensions</h3>
          <ul>
            <li><strong>Web banner:</strong> 1920x600 pixels at 72 DPI.</li>
            <li><strong>Social media post:</strong> 1080x1080 pixels (Instagram) or 1200x630 pixels (Facebook).</li>
            <li><strong>Print photo (4x6):</strong> 1200x1800 pixels at 300 DPI.</li>
            <li><strong>Print poster (24x36):</strong> 7200x10800 pixels at 300 DPI.</li>
          </ul>
        </div>
      }
    >
      <ImageSizeCalc />
    </ConverterLayout>
  );
}
