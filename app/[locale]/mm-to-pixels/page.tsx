import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
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
  const pageDict = dict.pages["mm-to-pixels"];

  return {
    title: pageDict?.title || "mm-to-pixels",
    description: pageDict?.description || "",
    alternates: {
      canonical: `/${locale}/mm-to-pixels`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/mm-to-pixels`]),
      ),
    },
    openGraph: {
      title: pageDict?.title || "mm-to-pixels",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Pixel Converter", href: "/pixel-converter" },
  { label: "MM to Pixels", href: "/mm-to-pixels" },
];

const relatedTools = [
  { name: "Pixels to MM", description: "Convert pixels to millimeters", href: "/pixels-to-mm", icon: "🔄" },
  { name: "CM to Pixels", description: "Convert centimeters to pixels", href: "/cm-to-pixels", icon: "📏" },
  { name: "Inches to Pixels", description: "Convert inches to pixels", href: "/inches-to-pixels", icon: "📐" },
  { name: "Pixels to CM", description: "Convert pixels to centimeters", href: "/pixels-to-cm", icon: "🔄" },
  { name: "Pixels to Inches", description: "Convert pixels to inches", href: "/pixels-to-inches", icon: "📐" },
];

const faqItems = [
  {
    question: "How do I convert millimeters to pixels?",
    answer:
      "Multiply the millimeters by DPI and divide by 25.4 (since there are 25.4 mm per inch). For example, 100 mm at 96 DPI equals about 378 pixels (100 x 96 / 25.4 = 377.95).",
  },
  {
    question: "How many pixels is 1 mm at 96 DPI?",
    answer:
      "At 96 DPI, 1 millimeter equals approximately 3.78 pixels (96 / 25.4 = 3.78). This is the standard for web design on most desktop displays.",
  },
  {
    question: "How many pixels is 1 mm at 300 DPI?",
    answer:
      "At 300 DPI, 1 millimeter equals approximately 11.81 pixels (300 / 25.4 = 11.81). This precision is standard for high-quality print output.",
  },
  {
    question: "When would I need mm to pixel conversion?",
    answer:
      "This conversion is common in precision design work such as product labels, business cards, engineering drawings, and any project where specifications are provided in millimeters but output is digital.",
  },
  {
    question: "What is the relationship between mm and inches for pixel conversion?",
    answer:
      "There are exactly 25.4 millimeters in one inch. This constant is used in the conversion formula: pixels = mm x DPI / 25.4. It bridges metric measurements to the inch-based DPI system.",
  },
];

export default async function MmToPixelsPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  return (
    <ConverterLayout
      locale={validLocale}
      title={dict.pages["mm-to-pixels"]?.title || "Millimeters to Pixels Converter"}
      description={dict.pages["mm-to-pixels"]?.description || "Convert millimeters to pixel dimensions with precise DPI control."}
      slug="/mm-to-pixels"
      extractiveAnswer={dict.pages["mm-to-pixels"]?.extractive || "To convert millimeters to pixels, multiply millimeters by DPI and divide by 25.4. At 96 DPI, 100 mm equals 378 pixels. At 300 DPI, 100 mm equals 1,181 pixels."}
      breadcrumbs={breadcrumbs}
      relatedTools={relatedTools}
      faqItems={faqItems}
      labels={{
        relatedTools: dict.tool.relatedTools,
        faq: dict.tool.faq,
      }}
      content={
        <div>
          <h2>How Millimeter to Pixel Conversion Works</h2>
          <p>
            Millimeters provide the highest precision among common metric units. Converting to pixels requires the DPI value and the mm-to-inch constant:
          </p>
          <p>
            <strong>Pixels = (MM x DPI) / 25.4</strong>
          </p>
          <p>
            Since there are 25.4 millimeters in one inch, dividing by 25.4 converts millimeters to inches, which is then multiplied by DPI to get pixel count.
          </p>

          <h3>Common Use Cases</h3>
          <ul>
            <li><strong>Business card design:</strong> Standard sizes like 85 x 55 mm converted to pixel dimensions.</li>
            <li><strong>Product labels:</strong> Small labels where millimeter precision matters.</li>
            <li><strong>Engineering drawings:</strong> Technical illustrations specified in millimeters.</li>
            <li><strong>Precision printing:</strong> Fine-detail work requiring exact pixel-to-mm mapping.</li>
          </ul>

          <h3>Common Sizes in Pixels (at 300 DPI)</h3>
          <ul>
            <li><strong>Business card (85 x 55 mm)</strong> — 1004 x 650 pixels</li>
            <li><strong>Credit card (85.6 x 53.98 mm)</strong> — 1011 x 638 pixels</li>
            <li><strong>Postage stamp (25 x 30 mm)</strong> — 295 x 354 pixels</li>
            <li><strong>SD card label (24 x 32 mm)</strong> — 283 x 378 pixels</li>
          </ul>

          <h2>Why Use Millimeters Instead of Centimeters?</h2>
          <p>
            Millimeters provide whole-number precision for small objects. A business card is 85 x 55 mm, not 8.5 x 5.5 cm. In engineering, manufacturing, and precision printing, specs are given in mm to avoid decimal ambiguity. When you specify 3 mm bleed on a print file, the printer knows exactly how much extra area to include. Using centimeters for the same bleed (0.3 cm) introduces potential rounding errors. For any object smaller than about 30 cm, millimeters are the standard unit in most industries worldwide.
          </p>

          <h2>How Many Pixels Per Millimeter at Different DPIs?</h2>
          <p>
            The pixels-per-mm ratio is straightforward to calculate: divide DPI by 25.4. At 72 DPI, each millimeter contains 2.835 pixels. At 96 DPI, the ratio is 3.78 pixels per mm. At 150 DPI, you get 5.906 pixels per mm. At 300 DPI, each millimeter holds 11.811 pixels. For ultra-high quality printing at 600 DPI, that jumps to 23.622 pixels per mm. These fixed ratios make batch conversions simple once you know your target DPI.
          </p>

          <h2>When Do Designers Need MM-to-Pixel Conversion?</h2>
          <p>
            Business card designers work in millimeters because the ISO 7810 standard defines card dimensions as 85.6 x 53.98 mm. Packaging designers receive label specs from manufacturers in mm. Jewelers creating product images need exact mm-to-pixel mapping for catalog layouts. Watch face designers for smartwatches convert the 40 mm or 44 mm display diameter to pixels for UI mockups. Any project where physical precision below one centimeter matters will benefit from mm-to-pixel conversion.
          </p>
        </div>
      }
    >
      <UnitConverter
        fromUnit="Millimeters"
        toUnit="Pixels"
        conversionType="mm-to-px"
        formula="pixels = (mm x DPI) / 25.4"
        commonValues={[1, 5, 10, 25, 50, 55, 85, 100, 210, 297]}
      />
    </ConverterLayout>
  );
}
