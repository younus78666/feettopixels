import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { FAQ } from "@/components/tools/FAQ";
import { MultiUnitConverter } from "@/components/tools/MultiUnitConverter";
import { siteConfig } from "@/content/site-config";
import { isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { buildAlternates, localizedPath } from "@/lib/alternates";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const homeTitle = "Pixel Converter: Online Pixel Size and Dimension Tool";
const homeDescription =
  "Free online pixel converter. Convert pixels to inches, cm, mm, feet, rem, em, and points at 72, 96, 150, or 300 DPI. Instant, accurate, no signup.";
const homeHeadline = "Online Pixel Converter";
const homeSubheadline =
  "Convert pixels to inches, centimeters, millimeters, feet, rem, em, and points at any DPI. Instant, accurate, no signup.";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  return {
    title: { absolute: homeTitle },
    description: homeDescription,
    keywords: [
      "pixel converter",
      "online pixel converter",
      "pixel size converter",
      "pixel dimension converter",
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
    title: "Feet to Pixels",
    href: "/feet-to-pixels",
    description: "Convert feet to px for signage",
    formula: "px = ft x 12 x DPI",
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
  ["1 inch", "96 px"],
  ["1 cm", "37.80 px"],
  ["1 mm", "3.78 px"],
  ["1 foot", "1,152 px"],
  ["1 rem", "16 px"],
  ["1 pt", "1.333 px"],
];

const commonValues300 = [
  ["1 inch", "300 px"],
  ["1 cm", "118.11 px"],
  ["1 mm", "11.81 px"],
  ["1 foot", "3,600 px"],
  ["A4 page (8.27 in)", "2,480 px wide"],
  ["4x6 photo", "1,200 x 1,800 px"],
];

const faqItems = [
  {
    question: "What is an online pixel converter?",
    answer:
      "An online pixel converter translates pixel values to physical units (inches, centimeters, millimeters, feet) or CSS units (REM, EM, points) based on a target DPI. FeetToPixels runs entirely in your browser, so conversions are instant and no data leaves your device.",
  },
  {
    question: "How do I convert pixels to inches?",
    answer:
      "Divide the pixel count by your target DPI. At the web standard of 96 DPI, 960 pixels equals 10 inches. At 300 DPI (professional print), 960 pixels equals 3.2 inches. Use the converter above or the dedicated Pixels to Inches page for more examples.",
  },
  {
    question: "How many pixels are in one inch?",
    answer:
      "It depends on DPI. At 72 DPI there are 72 pixels per inch. At 96 DPI (Windows and web default) there are 96 pixels per inch. At 300 DPI (print standard) there are 300 pixels per inch. Choose the DPI that matches your output device.",
  },
  {
    question: "What is 300 DPI in pixels per inch?",
    answer:
      "300 DPI means 300 pixels per inch. This is the professional standard for magazines, photo books, and most print marketing materials. A 4 x 6 inch photo at 300 DPI needs a 1,200 x 1,800 pixel image to print sharply.",
  },
  {
    question: "How do I convert pixels to centimeters?",
    answer:
      "Use the formula cm = pixels x 2.54 / DPI. At 96 DPI, 100 pixels equals about 2.65 cm. At 300 DPI, 100 pixels equals about 0.85 cm. The converter above shows this value instantly alongside every other unit.",
  },
  {
    question: "How big is 1920x1080 pixels in inches?",
    answer:
      "On a screen, 1920 x 1080 is a resolution. Its physical size depends on screen diagonal. On a 24-inch monitor, 1920 x 1080 measures about 20.9 x 11.8 inches. On a 27-inch monitor, it measures about 23.5 x 13.2 inches. See our Common Resolutions page for more screen sizes.",
  },
  {
    question: "What is the difference between DPI and PPI?",
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
      "Free online pixel conversion tools for designers, developers, and print professionals.",
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
      "Convert pixels to inches at any DPI",
      "Convert pixels to centimeters, millimeters, feet",
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

        <section aria-label="Pixel converter" className="mx-auto mt-10 max-w-2xl">
          <MultiUnitConverter />
        </section>

        <section aria-labelledby="quick-converters-heading" className="mt-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="quick-converters-heading"
              className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl"
            >
              Jump to a Specific Converter
            </h2>
            <p className="mt-3 text-neutral-600">
              Every unit has its own dedicated page with more examples, tables,
              and formula explanations.
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
              How Pixel Conversion Works
            </h2>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-neutral-700">
              <p>
                A pixel is a unit of digital display. Converting pixels into a
                physical measurement like inches or centimeters depends on DPI
                (dots per inch), which tells the output device how many pixels
                fit in one linear inch. At 96 DPI, the modern browser default,
                one inch of screen space holds 96 pixels. At 300 DPI, the
                professional print standard, one inch holds 300 pixels.
              </p>
              <p>
                CSS units like REM and EM resolve differently. REM is always
                relative to the root font size (16 pixels by default), so 1 REM
                equals 16 pixels. EM is relative to the parent element font
                size. Points (PT) come from typography and are always 72 to the
                inch, so 1 PT equals 1.333 pixels at 96 DPI.
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
              Common Pixel Conversions
            </h2>
            <p className="mt-3 text-neutral-600">
              Reference values at the two most common DPI settings.
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
              Learn the Basics
            </h2>
            <p className="mt-3 text-neutral-600">
              Short guides that make every pixel conversion obvious.
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
