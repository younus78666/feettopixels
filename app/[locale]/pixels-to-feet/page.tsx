import type { Metadata } from "next";
import { locales, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import { ConverterLayout } from "@/components/tools/ConverterLayout";
import { UnitConverter } from "@/components/tools/UnitConverter";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["pixels-to-feet"];

  return {
    title: pageDict?.title || "pixels-to-feet",
    description: pageDict?.description || "",
    alternates: {
      canonical: `/${locale}/pixels-to-feet`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/pixels-to-feet`]),
      ),
    },
  };
}

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Pixel Converter", href: "/pixel-converter" },
  { label: "Pixels to Feet", href: "/pixels-to-feet" },
];

const relatedTools = [
  { name: "Feet to Pixels", description: "Convert feet to pixel dimensions", href: "/feet-to-pixels", icon: "🔄" },
  { name: "Pixels to Inches", description: "Convert pixels to inches", href: "/pixels-to-inches", icon: "📐" },
  { name: "Pixels to CM", description: "Convert pixels to centimeters", href: "/pixels-to-cm", icon: "📏" },
  { name: "Inches to Pixels", description: "Convert inches to pixels", href: "/inches-to-pixels", icon: "📐" },
  { name: "Pixels to MM", description: "Convert pixels to millimeters", href: "/pixels-to-mm", icon: "📎" },
];

const faqItems = [
  {
    question: "How do I convert pixels to feet?",
    answer:
      "Divide the pixel count by DPI, then divide by 12. For example, 3,456 pixels at 96 DPI equals 3 feet (3,456 / 96 / 12 = 3).",
  },
  {
    question: "How many feet is a 1920-pixel wide image?",
    answer:
      "At 96 DPI, a 1920-pixel wide image spans approximately 1.67 feet (about 20 inches). At 300 DPI, it spans about 0.53 feet (about 6.4 inches). The physical size depends on the DPI.",
  },
  {
    question: "Can I print a web image as a large banner?",
    answer:
      "It depends on the pixel count. A 1920 x 1080 image at 150 DPI would print at about 12.8 x 7.2 inches, which is only about 1 foot wide. For a 4-foot banner, you would need at least 7,200 pixels wide at 150 DPI.",
  },
  {
    question: "What resolution do I need for a readable print at 3 feet?",
    answer:
      "For a print viewed from 3-5 feet away, 150 DPI is sufficient. A 3-foot wide print at 150 DPI needs 5,400 pixels wide. For closer viewing, use 300 DPI which requires 10,800 pixels.",
  },
  {
    question: "How do I calculate the maximum print size of my image?",
    answer:
      "Divide the image width in pixels by your target DPI, then divide by 12 to get feet. For example, a 6000-pixel image at 150 DPI can print up to 3.33 feet wide (6000 / 150 / 12 = 3.33).",
  },
];

export default async function PixelsToFeetPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  return (
    <ConverterLayout
      locale={validLocale}
      title="Pixels to Feet Converter"
      description="Convert pixel dimensions to feet for large-format design and print."
      slug="/pixels-to-feet"
      extractiveAnswer="To convert pixels to feet, divide pixels by DPI, then divide by 12. At 96 DPI, 3,456 pixels equals 3 feet. At 150 DPI, 5,400 pixels equals 3 feet."
      breadcrumbs={breadcrumbs}
      relatedTools={relatedTools}
      faqItems={faqItems}
      content={
        <div>
          <h2>How Pixel to Feet Conversion Works</h2>
          <p>
            Converting pixels to feet helps you understand the physical scale of digital designs, especially for large-format projects. The formula is:
          </p>
          <p>
            <strong>Feet = Pixels / (DPI x 12)</strong>
          </p>
          <p>
            This first converts pixels to inches (pixels / DPI), then inches to feet (inches / 12).
          </p>

          <h3>Common Use Cases</h3>
          <ul>
            <li><strong>Print size estimation:</strong> Determine how large a digital image will print in feet.</li>
            <li><strong>Resolution checking:</strong> Verify if an image has enough pixels for a target print size.</li>
            <li><strong>Large-format planning:</strong> Plan banner, poster, and signage dimensions.</li>
            <li><strong>Photo enlargement:</strong> Calculate maximum enlargement size before quality degrades.</li>
          </ul>

          <h3>Image Resolution to Print Size (at 150 DPI)</h3>
          <ul>
            <li><strong>1920 x 1080 px</strong> — 1.07 x 0.6 feet (about 12.8 x 7.2 inches)</li>
            <li><strong>3840 x 2160 px</strong> — 2.13 x 1.2 feet (about 25.6 x 14.4 inches)</li>
            <li><strong>7200 x 4800 px</strong> — 4 x 2.67 feet (48 x 32 inches)</li>
            <li><strong>10800 x 7200 px</strong> — 6 x 4 feet (72 x 48 inches)</li>
          </ul>

          <h2>Can You Print a Smartphone Photo as a Large Banner?</h2>
          <p>
            A 12 MP smartphone camera produces images around 4,000 x 3,000 pixels. At 150 DPI (suitable for trade show displays), that prints at 2.22 x 1.67 feet, roughly 26 x 20 inches. At 72 DPI (acceptable for billboards), the same image stretches to 4.63 x 3.47 feet. A 48 MP phone camera captures 8,000 x 6,000 pixels, which prints at 4.44 x 3.33 feet at 150 DPI. Modern high-megapixel phones can produce surprisingly large prints, but quality depends on sensor size, lighting conditions, and image noise.
          </p>

          <h2>How Do You Calculate Maximum Print Size from Pixel Count?</h2>
          <p>
            Take the image width in pixels, divide by your target DPI, then divide by 12 to get feet. For a 6,000-pixel-wide image at 150 DPI: 6,000 / 150 = 40 inches, 40 / 12 = 3.33 feet. If the calculated size is smaller than your desired print, you either need a higher-resolution source image or must accept a lower DPI (which is acceptable for distant viewing). Most print shops can advise on minimum acceptable DPI for specific viewing distances.
          </p>

          <h2>What Resolution Do Professional Cameras Produce in Feet?</h2>
          <ul>
            <li><strong>24 MP DSLR (6000 x 4000)</strong> — 3.33 x 2.22 feet at 150 DPI</li>
            <li><strong>45 MP mirrorless (8192 x 5464)</strong> — 4.55 x 3.04 feet at 150 DPI</li>
            <li><strong>61 MP (9504 x 6336)</strong> — 5.28 x 3.52 feet at 150 DPI</li>
            <li><strong>100 MP medium format (11,648 x 8,736)</strong> — 6.47 x 4.85 feet at 150 DPI</li>
          </ul>
        </div>
      }
    >
      <UnitConverter
        fromUnit="Pixels"
        toUnit="Feet"
        conversionType="px-to-ft"
        formula="feet = pixels / (DPI x 12)"
        commonValues={[100, 500, 1000, 1920, 3840, 5400, 7200, 10800]}
      />
    </ConverterLayout>
  );
}
