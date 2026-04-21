import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { FAQ } from "@/components/tools/FAQ";
import { UnitConverter } from "@/components/tools/UnitConverter";
import { siteConfig } from "@/content/site-config";
import { isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { buildAlternates, localizedPath } from "@/lib/alternates";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const homeTitle = "Feet to Pixels Converter - Convert FT to PX at Any DPI";
const homeDescription =
  "Convert feet to pixels at 72, 96, 150, and 300 DPI. Free FT to PX calculator for signage, banners, displays, print prep, and layout planning.";
const homeHeadline = "Feet to Pixels Converter";
const homeSubheadline =
  "Convert feet to pixels for banners, signage, wall graphics, displays, and print layouts. Choose any DPI and get the exact pixel width instantly.";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  return {
    title: { absolute: homeTitle },
    description: homeDescription,
    keywords: [
      "feet to pixels",
      "feet to pixels converter",
      "ft to px",
      "convert feet to pixels",
      "pixel converter",
      "pixels to inches",
      "pixels to cm",
      "pixels to feet",
      "px to rem",
      "dpi calculator",
      "ppi calculator",
    ],
    alternates: buildAlternates(locale, ""),
    openGraph: {
      title: homeTitle,
      description: homeDescription,
      locale: "en_US",
      type: "website",
      url: siteConfig.url,
      siteName: "FeetToPixels",
    },
    twitter: {
      card: "summary_large_image",
      title: homeTitle,
      description: homeDescription,
    },
  };
}

const quickConverters = [
  {
    title: "Feet to Pixels",
    href: "/feet-to-pixels",
    description: "Convert feet to px for signage",
    formula: "px = ft x 12 x DPI",
  },
  {
    title: "Pixels to Feet",
    href: "/pixels-to-feet",
    description: "Convert px to feet for large format",
    formula: "ft = px / (DPI x 12)",
  },
  {
    title: "Pixels to Inches",
    href: "/pixels-to-inches",
    description: "Convert px to inches at any DPI",
    formula: "in = px / DPI",
  },
  {
    title: "Inches to Pixels",
    href: "/inches-to-pixels",
    description: "Convert inches to px for print",
    formula: "px = in x DPI",
  },
  {
    title: "Pixels to CM",
    href: "/pixels-to-cm",
    description: "Convert px to centimeters",
    formula: "cm = px x 2.54 / DPI",
  },
  {
    title: "PX to REM",
    href: "/px-to-rem",
    description: "Convert pixels to REM for CSS",
    formula: "rem = px / 16",
  },
  {
    title: "DPI Calculator",
    href: "/dpi-calculator",
    description: "Calculate screen or image DPI",
    formula: "sqrt(W^2 + H^2) / diag",
  },
  {
    title: "PPI Calculator",
    href: "/ppi-calculator",
    description: "Find pixels per inch for any display",
    formula: "Same as DPI, for screens",
  },
  {
    title: "Aspect Ratio Calculator",
    href: "/aspect-ratio-calculator",
    description: "Resize and compare aspect ratios",
    formula: "W : H with GCD simplification",
  },
] as const;

const learnCards = [
  {
    title: "What is a Pixel?",
    href: "/what-is-a-pixel",
    description: "The building block of every digital image.",
  },
  {
    title: "What is DPI?",
    href: "/what-is-dpi",
    description: "How print resolution works and when 300 DPI matters.",
  },
  {
    title: "What is PPI?",
    href: "/what-is-ppi",
    description: "Screen pixel density explained with real device numbers.",
  },
  {
    title: "Pixels Per Inch",
    href: "/pixels-per-inch",
    description: "Complete PPI reference with formula and device table.",
  },
] as const;

const commonValues96 = [
  ["0.5 ft", "576 px"],
  ["1 ft", "1,152 px"],
  ["2 ft", "2,304 px"],
  ["3 ft", "3,456 px"],
  ["4 ft", "4,608 px"],
  ["8 ft", "9,216 px"],
];

const commonValues300 = [
  ["0.5 ft", "1,800 px"],
  ["1 ft", "3,600 px"],
  ["2 ft", "7,200 px"],
  ["3 ft", "10,800 px"],
  ["4 ft", "14,400 px"],
  ["8 ft", "28,800 px"],
];

const faqItems = [
  {
    question: "How do I convert feet to pixels?",
    answer:
      "Multiply feet by 12 to convert feet to inches, then multiply by DPI. The formula is pixels = feet x 12 x DPI. For example, 3 feet at 96 DPI equals 3,456 pixels.",
  },
  {
    question: "How many pixels are in 1 foot?",
    answer:
      "It depends on DPI. At 72 DPI, 1 foot equals 864 pixels. At 96 DPI, 1 foot equals 1,152 pixels. At 150 DPI, 1 foot equals 1,800 pixels. At 300 DPI, 1 foot equals 3,600 pixels.",
  },
  {
    question: "What DPI should I use for banners and signs?",
    answer:
      "Use 72-100 DPI for large banners viewed from a distance, 150 DPI for trade show displays and posters viewed a few feet away, and 300 DPI for close-up print work where small text or fine detail must stay sharp.",
  },
  {
    question: "How many pixels wide is a 4 foot banner?",
    answer:
      "A 4 foot banner is 4,608 pixels wide at 96 DPI, 7,200 pixels wide at 150 DPI, and 14,400 pixels wide at 300 DPI. Multiply 4 by 12 and then by your selected DPI.",
  },
  {
    question: "Is 300 DPI always required for large-format printing?",
    answer:
      "No. 300 DPI is useful for close viewing, but large-format graphics are often viewed from farther away. A billboard, wall mural, or event backdrop can look clean at 72-150 DPI when viewed from normal distance.",
  },
  {
    question: "Can I convert pixels back to feet?",
    answer:
      "Yes. Use the pixels to feet converter or divide pixels by DPI, then divide by 12. For example, 3,456 pixels at 96 DPI equals 3 feet.",
  },
  {
    question: "What is the difference between DPI and PPI for this calculator?",
    answer:
      "DPI (dots per inch) measures print resolution, the number of ink dots a printer places per inch. PPI (pixels per inch) measures digital resolution, the number of pixels in one inch of a screen or image. Designers often use the terms interchangeably, but DPI belongs to print and PPI belongs to screens.",
  },
  {
    question: "Is the FeetToPixels converter free and do I need to sign up?",
    answer:
      "Every tool on FeetToPixels is free, requires no signup, and works entirely in your browser. Nothing is uploaded or stored on a server.",
  },
];

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const homeUrl = `${siteConfig.url}${localizedPath(validLocale, "")}`;

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: "FeetToPixels",
    url: siteConfig.url,
    logo: `${siteConfig.url}/brand-mark.svg`,
    description:
      "Free feet to pixels and DPI-aware pixel conversion tools for designers, developers, print shops, and sign makers.",
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: "FeetToPixels",
    description: homeDescription,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "en",
  };

  const webApplicationJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${siteConfig.url}/#app`,
    name: homeHeadline,
    url: homeUrl,
    description: homeDescription,
    applicationCategory: "UtilityApplication",
    applicationSubCategory: "Unit Converter",
    operatingSystem: "Any (Web Browser)",
    browserRequirements: "Requires JavaScript",
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    featureList: [
      "Convert feet to pixels at any DPI",
      "Convert pixels to feet for large-format layouts",
      "Convert pixels to inches, centimeters, millimeters",
      "Convert pixels to REM, EM, PT, VW",
      "DPI presets: 72, 96, 150, 300, 600",
      "Copy to clipboard",
      "Works offline after first load",
      "No signup required",
    ],
    creator: { "@id": `${siteConfig.url}/#organization` },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
    ],
  };

  return (
    <>
      <JsonLd data={organizationJsonLd} />
      <JsonLd data={websiteJsonLd} />
      <JsonLd data={webApplicationJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <Container className="py-10 md:py-14">
        <section aria-labelledby="hero-heading" className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
            Free online tool
          </p>
          <h1
            id="hero-heading"
            className="mt-4 text-balance text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl"
          >
            {homeHeadline}
          </h1>
          <p className="mt-5 text-balance text-lg leading-relaxed text-neutral-600 sm:text-xl">
            {homeSubheadline}
          </p>
        </section>

        <section aria-label="Feet to pixels calculator" className="mx-auto mt-10 max-w-2xl">
          <UnitConverter
            locale={validLocale}
            fromUnit="Feet"
            toUnit="Pixels"
            conversionType="ft-to-px"
            formula="pixels = feet x 12 x DPI"
            defaultValue="1"
            commonValues={[0.5, 1, 2, 3, 4, 5, 6, 8, 10, 12]}
          />
        </section>

        <section aria-labelledby="quick-converters-heading" className="mt-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="quick-converters-heading"
              className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl"
            >
              Explore Related Pixel Converters
            </h2>
            <p className="mt-3 text-neutral-600">
              Feet to pixels is the primary calculator. These supporting tools
              cover reverse conversion, inches, centimeters, CSS units, and DPI.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {quickConverters.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group flex flex-col gap-2 rounded-xl border border-neutral-200 bg-white p-4 transition-colors hover:border-neutral-900 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
              >
                <span className="text-sm font-semibold text-neutral-900 group-hover:text-neutral-950">
                  {tool.title}
                </span>
                <span className="text-xs leading-relaxed text-neutral-500">
                  {tool.description}
                </span>
                <span className="mt-auto font-mono text-[11px] uppercase tracking-[0.1em] text-neutral-400">
                  {tool.formula}
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section aria-labelledby="how-it-works-heading" className="mt-16">
          <div className="mx-auto max-w-3xl">
            <h2
              id="how-it-works-heading"
              className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl"
            >
              How Feet to Pixels Conversion Works
            </h2>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-neutral-700">
              <p>
                Feet to pixels conversion starts with the physical size in feet,
                converts that value to inches, then multiplies by DPI. Because
                one foot equals 12 inches, the formula is pixels = feet x 12 x
                DPI. At 96 DPI, one foot equals 1,152 pixels. At 300 DPI, one
                foot equals 3,600 pixels.
              </p>
              <p>
                This matters most when a digital layout needs to become a real
                physical object: a banner, billboard, wall mural, trade show
                backdrop, room mockup, or display graphic. The same 4-foot
                design can need 4,608 pixels at 96 DPI, 7,200 pixels at 150 DPI,
                or 14,400 pixels at 300 DPI.
              </p>
              <p className="text-neutral-600">
                Read more:{" "}
                <Link
                  href="/what-is-a-pixel"
                  className="font-medium text-neutral-900 underline underline-offset-4 hover:no-underline"
                >
                  What is a Pixel
                </Link>
                ,{" "}
                <Link
                  href="/what-is-dpi"
                  className="font-medium text-neutral-900 underline underline-offset-4 hover:no-underline"
                >
                  What is DPI
                </Link>
                , and{" "}
                <Link
                  href="/what-is-ppi"
                  className="font-medium text-neutral-900 underline underline-offset-4 hover:no-underline"
                >
                  What is PPI
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="common-values-heading" className="mt-16">
          <div className="mx-auto max-w-3xl">
            <h2
              id="common-values-heading"
              className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl"
            >
              Common Feet to Pixels Conversions
            </h2>
            <p className="mt-3 text-neutral-600">
              Quick reference values for common large-format widths.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-neutral-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  At 96 DPI (web)
                </p>
                <dl className="mt-4 divide-y divide-neutral-100">
                  {commonValues96.map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between py-2 text-sm"
                    >
                      <dt className="text-neutral-700">{label}</dt>
                      <dd className="font-mono font-medium text-neutral-950">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  At 300 DPI (print)
                </p>
                <dl className="mt-4 divide-y divide-neutral-100">
                  {commonValues300.map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between py-2 text-sm"
                    >
                      <dt className="text-neutral-700">{label}</dt>
                      <dd className="font-mono font-medium text-neutral-950">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="learn-heading" className="mt-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="learn-heading"
              className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl"
            >
              Learn DPI and Pixel Basics
            </h2>
            <p className="mt-3 text-neutral-600">
              Short guides that explain why DPI, PPI, and pixel density change
              the final result.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {learnCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group flex flex-col gap-2 rounded-xl border border-neutral-200 bg-white p-4 transition-colors hover:border-neutral-900 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
              >
                <span className="text-sm font-semibold text-neutral-900 group-hover:text-neutral-950">
                  {card.title}
                </span>
                <span className="text-xs leading-relaxed text-neutral-500">
                  {card.description}
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section aria-labelledby="faq-heading" className="mt-16">
          <div className="mx-auto max-w-3xl">
            <h2
              id="faq-heading"
              className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl"
            >
              Frequently Asked Questions
            </h2>
            <div className="mt-6">
              <FAQ items={faqItems} label="Frequently Asked Questions" />
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
