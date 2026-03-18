import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import { ConverterLayout } from "@/components/tools/ConverterLayout";
import { getBreadcrumbs, getRelatedTools } from "@/lib/content-utils";
import { PixelRulerTool } from "./PixelRulerTool";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["pixel-ruler"];

  return {
    title: pageDict?.title || "pixel-ruler",
    description: pageDict?.description || "",
    alternates: {
      canonical: `/${locale}/pixel-ruler`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/pixel-ruler`]),
      ),
    },
    openGraph: {
      title: pageDict?.title || "pixel-ruler",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}

const faqItems = [
  {
    question: "How accurate is the on-screen ruler?",
    answer:
      "Without calibration, accuracy depends on your operating system's reported PPI, which may not match physical pixel density. After calibrating with a credit card or other known-size object, accuracy improves significantly to within 1-2% for most displays.",
  },
  {
    question: "How do I calibrate the ruler?",
    answer:
      "Place a standard credit card (3.375 inches / 85.6mm wide) against your screen. Adjust the calibration slider until the colored bar matches the card's width exactly, then click Calibrate. This calculates your screen's true PPI.",
  },
  {
    question: "Why do pixels not correspond to real-world measurements?",
    answer:
      "Pixels are digital units with no fixed physical size. Their physical size depends on the screen's PPI (pixels per inch). A pixel on a 27-inch 4K monitor is much smaller than one on a 24-inch 1080p monitor.",
  },
  {
    question: "Can I use this ruler to measure physical objects?",
    answer:
      "Yes, after calibrating. Place the object against the screen and read the measurement. Switch between pixels, inches, and centimeters as needed. For best accuracy, place objects flat against the screen surface.",
  },
  {
    question: "Does display scaling affect the ruler?",
    answer:
      "Yes, operating system scaling (e.g., 125% on Windows) changes the relationship between CSS pixels and physical pixels. Calibration accounts for this automatically, giving you accurate physical measurements regardless of scaling.",
  },
];

export default async function PixelRulerPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "pixel-converter", href: "/pixel-converter" },
    { slug: "pixel-ruler", href: "/pixel-ruler" },
  ]);
  const relatedTools = getRelatedTools(dict, [
    { slug: "screen-resolution-checker", href: "/screen-resolution-checker", icon: "📺" },
    { slug: "ppi-calculator", href: "/ppi-calculator", icon: "🖥️" },
    { slug: "pixels-to-inches", href: "/pixels-to-inches", icon: "📐" },
    { slug: "pixels-to-cm", href: "/pixels-to-cm", icon: "📏" },
    { slug: "dpi-calculator", href: "/dpi-calculator", icon: "🔄" },
  ]);
  return (
    <ConverterLayout
      locale={validLocale}
      title={dict.pages["pixel-ruler"]?.title || "Pixel Ruler"}
      description={dict.pages["pixel-ruler"]?.description || "An on-screen ruler showing pixels, inches, and centimeters."}
      slug="/pixel-ruler"
      extractiveAnswer={dict.pages["pixel-ruler"]?.extractive || "This pixel ruler displays measurements in pixels, inches, or centimeters directly on your screen. Calibrate it using a credit card (3.375 inches wide) for accurate physical measurements. Without calibration, it uses the default 96 PPI."}
      breadcrumbs={breadcrumbs}
      relatedTools={relatedTools}
      faqItems={faqItems}
      labels={{
        relatedTools: dict.tool.relatedTools,
        faq: dict.tool.faq,
      }}
      content={
        <div>
          <h2>How the Pixel Ruler Works</h2>
          <p>
            The on-screen ruler renders tick marks at intervals based on your screen&apos;s pixel density. By default, it assumes 96 PPI (the CSS standard). Calibrating with a physical reference object like a credit card lets the ruler display accurate inch and centimeter measurements.
          </p>

          <h3>Calibration Method</h3>
          <p>
            The calibration uses a standard credit card width (3.375 inches / 85.6mm, per ISO/IEC 7810). By matching the on-screen bar to the physical card, the tool calculates your true PPI: <strong>PPI = bar width in pixels / 3.375 inches</strong>.
          </p>

          <h3>Measurement Units</h3>
          <ul>
            <li><strong>Pixels:</strong> Major ticks every 100px, minor ticks every 50px. Useful for web and UI design.</li>
            <li><strong>Inches:</strong> Major ticks every inch, minor ticks every quarter inch. Useful for print design and physical measurements.</li>
            <li><strong>Centimeters:</strong> Major ticks every centimeter, minor ticks every half centimeter. Useful for metric measurements.</li>
          </ul>

          <h3>Use Cases</h3>
          <ul>
            <li><strong>UI design:</strong> Measure element spacing and sizing in pixels.</li>
            <li><strong>Quick measurements:</strong> Measure small objects without a physical ruler.</li>
            <li><strong>Screen calibration:</strong> Determine your actual screen PPI for accurate design work.</li>
            <li><strong>Accessibility testing:</strong> Verify minimum touch target sizes meet guidelines.</li>
          </ul>
        </div>
      }
    >
      <PixelRulerTool />
    </ConverterLayout>
  );
}
