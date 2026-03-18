import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import { ConverterLayout } from "@/components/tools/ConverterLayout";
import { DpiConverterTool } from "./DpiConverterTool";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["dpi-converter"];

  return {
    title: pageDict?.title || "dpi-converter",
    description: pageDict?.description || "",
    alternates: {
      canonical: `/${locale}/dpi-converter`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/dpi-converter`]),
      ),
    },
    openGraph: {
      title: pageDict?.title || "dpi-converter",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Pixel Converter", href: "/pixel-converter" },
  { label: "DPI Converter", href: "/dpi-converter" },
];

const relatedTools = [
  { name: "DPI Calculator", description: "Calculate DPI for any screen", href: "/dpi-calculator", icon: "🖥️" },
  { name: "Image DPI Checker", description: "Check DPI of an uploaded image", href: "/image-dpi-checker", icon: "🔍" },
  { name: "Image Size Calculator", description: "Calculate physical size from pixels", href: "/image-size-calculator", icon: "📐" },
  { name: "Pixels to Inches", description: "Convert pixels to inches", href: "/pixels-to-inches", icon: "📏" },
  { name: "PPI Calculator", description: "Calculate pixels per inch", href: "/ppi-calculator", icon: "📺" },
];

const faqItems = [
  {
    question: "What happens when I convert from 72 DPI to 300 DPI?",
    answer:
      "The pixel count stays the same, but the physical print size decreases. A 10-inch wide image at 72 DPI (720 pixels) becomes only 2.4 inches wide at 300 DPI, because more pixels are packed into each inch.",
  },
  {
    question: "Can I increase DPI without losing quality?",
    answer:
      "Simply changing the DPI metadata does not add pixels — it only changes how densely existing pixels are printed. To maintain print size at a higher DPI, you would need to upscale the image, which may reduce quality unless done with AI upscaling tools.",
  },
  {
    question: "What DPI should I use for printing?",
    answer:
      "300 DPI is the standard for professional printing (brochures, magazines, photos). 150 DPI is acceptable for large-format posters viewed from a distance. Billboard printing can use as low as 30-50 DPI.",
  },
  {
    question: "What DPI are web images typically?",
    answer:
      "Web images are typically 72 or 96 DPI. However, DPI does not matter on screen — only pixel dimensions matter for web display. A 1000px wide image appears the same on screen whether it is set to 72, 96, or 300 DPI.",
  },
  {
    question: "How do I convert a web image for print?",
    answer:
      "Enter the web DPI (usually 72) as current DPI and 300 as target DPI, along with the current print size. The calculator shows the new (smaller) print size. If the result is too small, you will need a higher-resolution source image.",
  },
];

export default async function DpiConverterPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  return (
    <ConverterLayout
      locale={validLocale}
      title={dict.pages["dpi-converter"]?.title || "DPI Converter"}
      description={dict.pages["dpi-converter"]?.description || "Convert image dimensions between different DPI resolutions for web and print."}
      slug="/dpi-converter"
      extractiveAnswer={dict.pages["dpi-converter"]?.extractive || "To convert between DPI resolutions, multiply the current size by the current DPI, then divide by the target DPI. For example, a 10-inch image at 72 DPI becomes 2.4 inches at 300 DPI because (10 x 72) / 300 = 2.4."}
      breadcrumbs={breadcrumbs}
      relatedTools={relatedTools}
      faqItems={faqItems}
      labels={{
        relatedTools: dict.tool.relatedTools,
        faq: dict.tool.faq,
      }}
      content={
        <div>
          <h2>How DPI Conversion Works</h2>
          <p>
            DPI conversion recalculates the physical print dimensions of an image when changing resolution. The total pixel count remains unchanged — only how densely those pixels are packed per inch changes.
          </p>
          <p>
            <strong>New Size = (Original Size x Current DPI) / Target DPI</strong>
          </p>

          <h3>Web to Print Workflow</h3>
          <p>
            When preparing web graphics for print, you typically need to convert from 72 DPI to 300 DPI. This means your image will print at roughly one-quarter of its screen size. Plan ahead by starting with high-resolution source files.
          </p>

          <h3>Common DPI Standards</h3>
          <ul>
            <li><strong>72 DPI</strong> — Legacy web standard, common in older design software defaults.</li>
            <li><strong>96 DPI</strong> — Modern web standard, Windows default screen resolution.</li>
            <li><strong>150 DPI</strong> — Large-format printing, newspaper ads, posters.</li>
            <li><strong>300 DPI</strong> — Professional print quality, the industry standard for offset printing.</li>
            <li><strong>600 DPI</strong> — Ultra-high quality for fine art reproduction and medical imaging.</li>
          </ul>
        </div>
      }
    >
      <DpiConverterTool />
    </ConverterLayout>
  );
}
