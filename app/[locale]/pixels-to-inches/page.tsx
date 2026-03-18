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
  const pageDict = dict.pages["pixels-to-inches"];

  return {
    title: pageDict?.title || "pixels-to-inches",
    description: pageDict?.description || "",
    alternates: {
      canonical: `/${locale}/pixels-to-inches`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/pixels-to-inches`]),
      ),
    },
    openGraph: {
      title: pageDict?.title || "pixels-to-inches",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Pixel Converter", href: "/pixel-converter" },
  { label: "Pixels to Inches", href: "/pixels-to-inches" },
];

const relatedTools = [
  { name: "Inches to Pixels", description: "Convert inches to pixel dimensions", href: "/inches-to-pixels", icon: "📐" },
  { name: "CM to Pixels", description: "Convert centimeters to pixels", href: "/cm-to-pixels", icon: "📏" },
  { name: "Pixels to CM", description: "Convert pixels to centimeters", href: "/pixels-to-cm", icon: "🔄" },
  { name: "Pixels to MM", description: "Convert pixels to millimeters", href: "/pixels-to-mm", icon: "📎" },
  { name: "Feet to Pixels", description: "Convert feet to pixel dimensions", href: "/feet-to-pixels", icon: "📐" },
];

const faqItems = [
  {
    question: "How do I convert pixels to inches?",
    answer:
      "Divide the number of pixels by the DPI (dots per inch). For example, 960 pixels at 96 DPI equals 10 inches (960 / 96 = 10). The DPI determines how many pixels fit in one inch.",
  },
  {
    question: "What DPI should I use for web design?",
    answer:
      "The standard DPI for web design is 96 DPI, which is the default on most Windows displays. Mac Retina displays use a higher pixel density, but CSS pixels still map to 96 DPI in standard web rendering.",
  },
  {
    question: "What DPI is used for print design?",
    answer:
      "Professional print typically uses 300 DPI for high-quality output. Magazine printing may use 300-350 DPI, while newspaper printing can use 150-200 DPI. The higher the DPI, the smaller the physical size for the same pixel count.",
  },
  {
    question: "Why does the same pixel count produce different inch values at different DPIs?",
    answer:
      "DPI defines how densely pixels are packed per inch. At 96 DPI, 960 pixels span 10 inches. At 300 DPI, those same 960 pixels span only 3.2 inches because each inch contains more pixels.",
  },
  {
    question: "How many pixels are in one inch?",
    answer:
      "It depends on the DPI setting. At 96 DPI (web standard), one inch equals 96 pixels. At 72 DPI, one inch equals 72 pixels. At 300 DPI (print standard), one inch equals 300 pixels.",
  },
];

export default async function PixelsToInchesPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  return (
    <ConverterLayout
      locale={validLocale}
      title={dict.pages["pixels-to-inches"]?.title || "Pixels to Inches Converter"}
      description={dict.pages["pixels-to-inches"]?.description || "Convert pixels to inches with DPI awareness for web and print design."}
      slug="/pixels-to-inches"
      extractiveAnswer={dict.pages["pixels-to-inches"]?.extractive || "To convert pixels to inches, divide the pixel count by DPI. At 96 DPI (web standard), 960 pixels equals 10 inches. At 300 DPI (print quality), 960 pixels equals 3.2 inches."}
      breadcrumbs={breadcrumbs}
      relatedTools={relatedTools}
      faqItems={faqItems}
      labels={{
        relatedTools: dict.tool.relatedTools,
        faq: dict.tool.faq,
      }}
      content={
        <div>
          <h2>How Pixel to Inch Conversion Works</h2>
          <p>
            Converting pixels to inches requires knowing the DPI (dots per inch) of your target output. DPI defines how many pixels are packed into each physical inch. The formula is straightforward:
          </p>
          <p>
            <strong>Inches = Pixels / DPI</strong>
          </p>
          <p>
            For web design, the standard is 96 DPI. For professional print, 300 DPI is the norm. Choosing the right DPI ensures your designs display at the intended physical size.
          </p>

          <h3>Common Use Cases</h3>
          <ul>
            <li><strong>Print design:</strong> Determine the physical size of a digital image when printed at a specific DPI.</li>
            <li><strong>Web-to-print conversion:</strong> Check how web graphics will translate to physical print dimensions.</li>
            <li><strong>Photo printing:</strong> Calculate the maximum print size while maintaining quality at 300 DPI.</li>
            <li><strong>Display sizing:</strong> Understand how screen content maps to real-world measurements.</li>
          </ul>

          <h3>DPI Reference Guide</h3>
          <ul>
            <li><strong>72 DPI</strong> — Legacy Mac screen resolution, common for older web graphics.</li>
            <li><strong>96 DPI</strong> — Windows default, standard for modern web design.</li>
            <li><strong>150 DPI</strong> — Medium-quality print, suitable for large-format posters.</li>
            <li><strong>300 DPI</strong> — Professional print quality for brochures, magazines, and photos.</li>
          </ul>

          <h2>How Many Pixels Are in One Inch?</h2>
          <p>
            The number of pixels in one inch depends entirely on the DPI setting. At 96 DPI (the web standard used by Windows and most browsers), one inch contains exactly 96 pixels. At 72 DPI (the legacy Mac standard), one inch contains 72 pixels. At 300 DPI (professional print), one inch packs 300 pixels into the same physical space. This means a 300 DPI image appears much sharper than a 96 DPI image when printed at the same size, because each inch contains over 3x more pixel data.
          </p>

          <h2>Common Pixel Widths Converted to Inches</h2>
          <p>
            The table below shows how common pixel dimensions translate to inches at both 96 DPI (web) and 300 DPI (print). These values help you quickly estimate physical sizes without manual calculation.
          </p>
          <ul>
            <li><strong>640 px</strong> — 6.67 inches at 96 DPI, 2.13 inches at 300 DPI</li>
            <li><strong>800 px</strong> — 8.33 inches at 96 DPI, 2.67 inches at 300 DPI</li>
            <li><strong>1024 px</strong> — 10.67 inches at 96 DPI, 3.41 inches at 300 DPI</li>
            <li><strong>1080 px</strong> — 11.25 inches at 96 DPI, 3.6 inches at 300 DPI</li>
            <li><strong>1920 px</strong> — 20 inches at 96 DPI, 6.4 inches at 300 DPI</li>
            <li><strong>3840 px</strong> — 40 inches at 96 DPI, 12.8 inches at 300 DPI</li>
          </ul>

          <h2>When Do You Need to Convert Pixels to Inches?</h2>
          <p>
            Pixel-to-inch conversion comes up regularly in four situations. First, print preparation: before sending a digital file to a printer, you need to confirm the image will print at the correct physical dimensions. Second, photo printing: knowing that a 3000x2000 pixel photo prints at 10x6.67 inches at 300 DPI helps you choose the right paper size. Third, large format signage: banner and poster designers use lower DPI values (100-150) because viewers stand farther away, making each pixel stretch across more physical space. Fourth, web-to-print workflows: designers who repurpose web assets for brochures or business cards need to verify that 96 DPI screen graphics have enough resolution for 300 DPI print output.
          </p>
        </div>
      }
    >
      <UnitConverter
        fromUnit="Pixels"
        toUnit="Inches"
        conversionType="px-to-in"
        formula="inches = pixels / DPI"
        commonValues={[1, 10, 72, 96, 100, 150, 300, 500, 1000, 1920]}
      />
    </ConverterLayout>
  );
}
