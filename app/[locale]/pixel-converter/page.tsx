import type { Metadata } from "next";
import { locales, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { PixelConverterHub } from "./PixelConverterHub";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["pixel-converter"];

  return {
    title: pageDict?.title || "pixel-converter",
    description: pageDict?.description || "",
    alternates: {
      canonical: `/${locale}/pixel-converter`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/pixel-converter`]),
      ),
    },
  };
}

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Pixel Converter", href: "/pixel-converter" },
];

const converterTools = [
  {
    name: "Pixels to Inches",
    description: "Convert pixel dimensions to inches for print and display sizing.",
    href: "/pixels-to-inches",
    icon: "📐",
    formula: "inches = px / DPI",
  },
  {
    name: "Inches to Pixels",
    description: "Convert physical inches to pixel dimensions at any DPI.",
    href: "/inches-to-pixels",
    icon: "📏",
    formula: "px = inches x DPI",
  },
  {
    name: "Pixels to CM",
    description: "Convert pixels to centimeters for metric design work.",
    href: "/pixels-to-cm",
    icon: "🔄",
    formula: "cm = px x 2.54 / DPI",
  },
  {
    name: "CM to Pixels",
    description: "Convert centimeters to pixel dimensions with DPI control.",
    href: "/cm-to-pixels",
    icon: "📏",
    formula: "px = cm x DPI / 2.54",
  },
  {
    name: "Pixels to MM",
    description: "Convert pixels to millimeters for precision design.",
    href: "/pixels-to-mm",
    icon: "📎",
    formula: "mm = px x 25.4 / DPI",
  },
  {
    name: "MM to Pixels",
    description: "Convert millimeters to pixel dimensions with DPI.",
    href: "/mm-to-pixels",
    icon: "📎",
    formula: "px = mm x DPI / 25.4",
  },
  {
    name: "Feet to Pixels",
    description: "Convert feet to pixels for large-format and signage design.",
    href: "/feet-to-pixels",
    icon: "📐",
    formula: "px = ft x 12 x DPI",
  },
  {
    name: "Pixels to Feet",
    description: "Convert pixel dimensions to feet for large-format output.",
    href: "/pixels-to-feet",
    icon: "📐",
    formula: "ft = px / (DPI x 12)",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Pixel Converter",
  description:
    "Free all-in-one pixel converter. Convert between pixels, inches, centimeters, millimeters, and feet with adjustable DPI.",
  url: "https://feettopixels.com/pixel-converter",
};

export default async function PixelConverterPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  return (
    <Container className="py-8 md:py-12">
      <JsonLd data={jsonLd} />
      <Breadcrumbs items={breadcrumbs} />

      <h1 className="mb-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
        Pixel Converter
      </h1>
      <p className="mb-8 max-w-2xl text-base leading-relaxed text-neutral-600">
        Convert between pixels and physical units with DPI awareness. Select a conversion below or use the quick converter to get instant results.
      </p>

      {/* Quick converter widget */}
      <div className="mb-12">
        <PixelConverterHub />
      </div>

      {/* All converter tools grid */}
      <h2 className="mb-6 text-2xl font-semibold text-neutral-900">
        All Pixel Converters
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {converterTools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="tool-card group"
          >
            <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-lg transition-colors group-hover:bg-primary-100">
              {tool.icon}
            </span>
            <h3 className="text-sm font-semibold text-neutral-900 group-hover:text-primary-700">
              {tool.name}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-neutral-500">
              {tool.description}
            </p>
            <p className="mono-display mt-2 text-xs text-neutral-400">
              {tool.formula}
            </p>
          </Link>
        ))}
      </div>

      {/* SEO content */}
      <div className="prose prose-neutral mt-12 max-w-none">
        <h2>About Pixel Conversion</h2>
        <p>
          Pixel conversion is the process of translating between digital pixel dimensions and physical measurements like inches, centimeters, millimeters, and feet. The bridge between these two worlds is DPI (dots per inch), which defines how many pixels fit into one physical inch.
        </p>
        <p>
          Understanding pixel conversion is critical for anyone working across digital and physical media. Web designers need to know how their layouts translate to different screen sizes. Print designers need to ensure their digital files produce sharp output at the intended physical dimensions.
        </p>

        <h3>Key Concepts</h3>
        <ul>
          <li><strong>DPI (Dots Per Inch):</strong> The number of individual dots (or pixels) that fit within a one-inch line. Higher DPI means more detail in the same physical space.</li>
          <li><strong>96 DPI:</strong> The standard for web design, used by Windows and most browsers for CSS pixel calculations.</li>
          <li><strong>300 DPI:</strong> The professional standard for print output, providing sharp detail at normal viewing distances.</li>
          <li><strong>PPI vs DPI:</strong> PPI (pixels per inch) refers to screen displays, while DPI technically refers to print output. For conversion purposes, they function identically.</li>
        </ul>

        <h3>When to Use Each Converter</h3>
        <p>
          Choose the converter that matches your source and target units. If you have a design measured in centimeters and need to know the pixel count for digital production, use the CM to Pixels converter. If you have a digital image and want to know how large it will print, use the Pixels to Inches (or CM, MM, Feet) converter.
        </p>
      </div>
    </Container>
  );
}
