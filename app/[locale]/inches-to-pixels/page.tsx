import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import { ConverterLayout } from "@/components/tools/ConverterLayout";
import { UnitConverter } from "@/components/tools/UnitConverter";
import { getBreadcrumbs, getRelatedTools } from "@/lib/content-utils";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["inches-to-pixels"];

  return {
    title: pageDict?.title || "inches-to-pixels",
    description: pageDict?.description || "",
    alternates: {
      canonical: `/${locale}/inches-to-pixels`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/inches-to-pixels`]),
      ),
    },
    openGraph: {
      title: pageDict?.title || "inches-to-pixels",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}

const faqItems = [
  {
    question: "How do I convert inches to pixels?",
    answer:
      "Multiply the number of inches by the DPI (dots per inch). For example, 10 inches at 96 DPI equals 960 pixels (10 x 96 = 960). The DPI setting determines how many pixels represent one physical inch.",
  },
  {
    question: "How many pixels is 1 inch at 96 DPI?",
    answer:
      "At 96 DPI, 1 inch equals exactly 96 pixels. This is the standard DPI for web design on Windows displays and is the most commonly used value for screen-based design work.",
  },
  {
    question: "How many pixels is 1 inch at 300 DPI?",
    answer:
      "At 300 DPI, 1 inch equals 300 pixels. This is the standard resolution for professional print output, including magazines, brochures, and high-quality photo prints.",
  },
  {
    question: "What size in pixels is an 8.5 x 11 inch document?",
    answer:
      "At 96 DPI (web), it is 816 x 1056 pixels. At 300 DPI (print), it is 2550 x 3300 pixels. The pixel dimensions scale directly with the DPI setting.",
  },
  {
    question: "Does changing DPI change the number of pixels?",
    answer:
      "When converting from inches to pixels, yes — a higher DPI produces more pixels for the same physical size. When an image already exists, changing DPI in metadata only changes its print size, not the actual pixel count.",
  },
];

export default async function InchesToPixelsPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "pixel-converter", href: "/pixel-converter" },
    { slug: "inches-to-pixels", href: "/inches-to-pixels" },
  ]);
  const relatedTools = getRelatedTools(dict, [
    { slug: "pixels-to-inches", href: "/pixels-to-inches", icon: "🔄" },
    { slug: "cm-to-pixels", href: "/cm-to-pixels", icon: "📏" },
    { slug: "mm-to-pixels", href: "/mm-to-pixels", icon: "📎" },
    { slug: "feet-to-pixels", href: "/feet-to-pixels", icon: "📐" },
    { slug: "pixels-to-cm", href: "/pixels-to-cm", icon: "🔄" },
  ]);
  return (
    <ConverterLayout
      locale={validLocale}
      title={dict.pages["inches-to-pixels"]?.title || "Inches to Pixels Converter"}
      description={dict.pages["inches-to-pixels"]?.description || "Convert inches to pixel dimensions with DPI control for web and print design."}
      slug="/inches-to-pixels"
      extractiveAnswer={dict.pages["inches-to-pixels"]?.extractive || "To convert inches to pixels, multiply the inch value by DPI. At 96 DPI (web standard), 10 inches equals 960 pixels. At 300 DPI (print quality), 10 inches equals 3,000 pixels."}
      breadcrumbs={breadcrumbs}
      relatedTools={relatedTools}
      faqItems={faqItems}
      labels={{
        relatedTools: dict.tool.relatedTools,
        faq: dict.tool.faq,
      }}
      content={
        <div>
          <h2>How Inch to Pixel Conversion Works</h2>
          <p>
            Converting inches to pixels is essential when translating physical design specifications into digital formats. The formula is simple:
          </p>
          <p>
            <strong>Pixels = Inches x DPI</strong>
          </p>
          <p>
            The DPI setting determines the resolution. Web designs typically use 96 DPI, while print projects require 300 DPI for sharp, professional output.
          </p>

          <h3>Common Use Cases</h3>
          <ul>
            <li><strong>Creating print-ready files:</strong> Set up a document at the correct pixel dimensions for print at 300 DPI.</li>
            <li><strong>Banner and signage:</strong> Calculate pixel requirements for large-format printing.</li>
            <li><strong>Photo cropping:</strong> Determine the pixel dimensions needed for a specific print size.</li>
            <li><strong>UI design specs:</strong> Convert physical size requirements into pixel values for screen layouts.</li>
          </ul>

          <h3>Standard Document Sizes in Pixels</h3>
          <ul>
            <li><strong>Letter (8.5 x 11 in)</strong> — 816 x 1056 px at 96 DPI, 2550 x 3300 px at 300 DPI</li>
            <li><strong>A4 (8.27 x 11.69 in)</strong> — 794 x 1123 px at 96 DPI, 2481 x 3507 px at 300 DPI</li>
            <li><strong>4 x 6 in photo</strong> — 384 x 576 px at 96 DPI, 1200 x 1800 px at 300 DPI</li>
            <li><strong>5 x 7 in photo</strong> — 480 x 672 px at 96 DPI, 1500 x 2100 px at 300 DPI</li>
          </ul>

          <h2>Why Does DPI Matter for Inch-to-Pixel Conversion?</h2>
          <p>
            DPI directly determines how many pixels fit inside each physical inch. A higher DPI packs more pixels per inch, producing sharper detail at the same physical size. When you convert 8 inches at 96 DPI, the result is 768 pixels. The same 8 inches at 300 DPI yields 2,400 pixels. That difference of 1,632 pixels translates to roughly 4x more image data, which is why print files are significantly larger than web graphics. Choosing the wrong DPI produces images that are either too small (blurry when printed) or unnecessarily large (slow to load on the web).
          </p>

          <h2>How Do You Set Up a Print-Ready Document?</h2>
          <p>
            Start by determining the final print size in inches. Multiply width and height by 300 to get the pixel dimensions for professional quality. A 5x7 inch photo print needs a 1,500 x 2,100 pixel canvas. For large posters viewed from several feet away, 150 DPI is acceptable, so a 24x36 inch poster only needs 3,600 x 5,400 pixels instead of 7,200 x 10,800. Always add 0.125 inches (bleed) to each edge when preparing files for commercial printing, as the trimming process can cut into the design area.
          </p>

          <h2>Common Inch Measurements Converted to Pixels</h2>
          <ul>
            <li><strong>1 inch</strong> — 96 px at 96 DPI, 300 px at 300 DPI</li>
            <li><strong>2 inches</strong> — 192 px at 96 DPI, 600 px at 300 DPI</li>
            <li><strong>4 inches</strong> — 384 px at 96 DPI, 1,200 px at 300 DPI</li>
            <li><strong>6 inches</strong> — 576 px at 96 DPI, 1,800 px at 300 DPI</li>
            <li><strong>8 inches</strong> — 768 px at 96 DPI, 2,400 px at 300 DPI</li>
            <li><strong>12 inches</strong> — 1,152 px at 96 DPI, 3,600 px at 300 DPI</li>
          </ul>
        </div>
      }
    >
      <UnitConverter
        fromUnit="Inches"
        toUnit="Pixels"
        conversionType="in-to-px"
        formula="pixels = inches x DPI"
        commonValues={[0.5, 1, 2, 3, 4, 5, 6, 8, 10, 12]}
      />
    </ConverterLayout>
  );
}
