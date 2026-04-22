import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { FAQ } from "@/components/tools/FAQ";
import { MinimalPpiCalculator } from "@/components/tools/MinimalPpiCalculator";
import { siteConfig } from "@/content/site-config";
import { isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { buildAlternates, localizedPath } from "@/lib/alternates";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const pageTitle = "Pixels Per Inch (PPI): Calculator, Formula, and Reference";
const pageDescription =
  "Calculate pixels per inch for any screen. Free PPI calculator with formula, device reference table, 1920x1080 and 4K values, retina thresholds, and PPI vs DPI explained.";
const pageHeadline = "Pixels Per Inch";
const pageSubheadline =
  "Calculate screen PPI, compare pixel density across devices, and see every PPI value that matters for web, print, and UI work.";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  return {
    title: { absolute: pageTitle },
    description: pageDescription,
    keywords: [
      "pixels per inch",
      "ppi calculator",
      "pixels per inch calculator",
      "pixel density",
      "pixels per inch for printing",
      "screen ppi",
      "monitor ppi",
      "ppi formula",
      "ppi vs dpi",
      "retina display ppi",
      "4k ppi",
      "1920x1080 pixels per inch",
      "pixel density calculator",
      "how to calculate ppi",
    ],
    alternates: buildAlternates(locale, "pixels-per-inch"),
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      locale: "en_US",
      type: "article",
      url: `${siteConfig.url}/pixels-per-inch`,
      siteName: "FeetToPixels",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
    },
  };
}

const deviceTable = [
  { device: "iPhone 16 Pro", resolution: "2622 x 1206", diagonal: "6.3 in", ppi: 460, note: "Ultra HiDPI, 3x pixel ratio" },
  { device: "iPhone SE (2022)", resolution: "1334 x 750", diagonal: "4.7 in", ppi: 326, note: "Baseline Retina" },
  { device: "Samsung Galaxy S24", resolution: "2340 x 1080", diagonal: "6.2 in", ppi: 416, note: "Ultra HiDPI" },
  { device: "iPad Pro 12.9", resolution: "2732 x 2048", diagonal: "12.9 in", ppi: 264, note: "Tablet Retina" },
  { device: "iPad (10th gen)", resolution: "2360 x 1640", diagonal: "10.9 in", ppi: 264, note: "Tablet Retina" },
  { device: "MacBook Pro 14 (2024)", resolution: "3024 x 1964", diagonal: "14.2 in", ppi: 254, note: "Laptop Retina" },
  { device: "MacBook Air 13 M3", resolution: "2560 x 1664", diagonal: "13.6 in", ppi: 224, note: "Laptop Retina" },
  { device: "Studio Display 27", resolution: "5120 x 2880", diagonal: "27 in", ppi: 218, note: "5K Retina" },
  { device: "Dell 27 4K (U2723QE)", resolution: "3840 x 2160", diagonal: "27 in", ppi: 163, note: "Sharp desktop" },
  { device: "24 FHD monitor (typical)", resolution: "1920 x 1080", diagonal: "24 in", ppi: 92, note: "Web standard baseline" },
  { device: "27 1440p monitor", resolution: "2560 x 1440", diagonal: "27 in", ppi: 109, note: "Standard desktop" },
  { device: "55 4K TV (10 ft viewing)", resolution: "3840 x 2160", diagonal: "55 in", ppi: 80, note: "Low PPI, distance viewing" },
];

const ppiTable = [
  { ppi: "72", usage: "Legacy Mac screen reference, ignored for most modern workflows", pixelsPerCm: "28.35", pixelsPerMm: "2.83" },
  { ppi: "96", usage: "Windows default, CSS reference pixel, web baseline", pixelsPerCm: "37.80", pixelsPerMm: "3.78" },
  { ppi: "120", usage: "125 percent Windows scaling, entry-level HiDPI", pixelsPerCm: "47.24", pixelsPerMm: "4.72" },
  { ppi: "144", usage: "150 percent scaling, common on Surface devices", pixelsPerCm: "56.69", pixelsPerMm: "5.67" },
  { ppi: "163", usage: "27 inch 4K desktop monitor, crisp without scaling", pixelsPerCm: "64.17", pixelsPerMm: "6.42" },
  { ppi: "218", usage: "Apple Studio Display 5K, 2x Retina", pixelsPerCm: "85.83", pixelsPerMm: "8.58" },
  { ppi: "264", usage: "iPad Pro, iPad Air Retina", pixelsPerCm: "103.94", pixelsPerMm: "10.39" },
  { ppi: "326", usage: "Classic iPhone Retina baseline", pixelsPerCm: "128.35", pixelsPerMm: "12.83" },
  { ppi: "458 - 460", usage: "iPhone Pro Super Retina XDR", pixelsPerCm: "180.31", pixelsPerMm: "18.03" },
];

const pixelRatioTable = [
  { ppi: "96", ratio: "1.00x", notes: "CSS reference. One CSS pixel equals one device pixel." },
  { ppi: "120", ratio: "1.25x", notes: "Windows 125 percent scaling, most 1080p laptops." },
  { ppi: "144", ratio: "1.50x", notes: "Windows 150 percent, Surface devices." },
  { ppi: "192", ratio: "2.00x", notes: "Retina MacBook, iPad. Use 2x image assets." },
  { ppi: "288", ratio: "3.00x", notes: "iPhone Pro class. Use 3x image assets." },
];

const faqItems = [
  {
    question: "What does pixels per inch (PPI) mean?",
    answer:
      "PPI is pixel density. It measures how many individual pixels are packed into one linear inch of a screen or image. Higher PPI means smaller, denser pixels and a sharper picture. A 6.1 inch iPhone has 460 PPI. A 24 inch 1080p monitor has about 92 PPI. The first looks razor sharp at 10 inches from your face; the second has visible pixels if you lean in close.",
  },
  {
    question: "How do I calculate PPI?",
    answer:
      "Find the diagonal pixel count with the Pythagorean theorem, then divide by the diagonal screen size in inches. Formula: PPI = sqrt(width squared plus height squared) divided by diagonal in inches. Example: a 2560 by 1440 screen at 27 inches has a diagonal of sqrt(2560 squared plus 1440 squared) = 2938 pixels. 2938 divided by 27 equals 108.8 PPI. Use the calculator at the top of this page to skip the math.",
  },
  {
    question: "How many pixels per inch is 1920x1080?",
    answer:
      "1920 by 1080 is a resolution, not a pixel density. The PPI depends on screen size. On a 24 inch monitor 1920 by 1080 is about 92 PPI. On a 27 inch monitor it drops to 82 PPI. On a 15.6 inch laptop it rises to 141 PPI. Same resolution, different pixel density, because PPI is pixels divided by physical inches.",
  },
  {
    question: "What is a good PPI for printing?",
    answer:
      "300 PPI is the professional print standard for photographs, books, and magazines viewed at arm's length. For newspapers and coarser paper, 150 to 200 PPI is fine because the paper cannot hold finer detail. For large posters viewed from a few feet away, 150 PPI is plenty. For billboards viewed from across a parking lot, 25 to 50 PPI works because the eye cannot resolve more at that distance.",
  },
  {
    question: "What is the PPI of a retina display?",
    answer:
      "Apple's marketing term retina kicks in at roughly 218 PPI for desktops (Studio Display), 224 to 254 PPI for MacBooks, 264 PPI for iPads, and 326 to 460 PPI for iPhones. The underlying definition is pixels so small the eye cannot distinguish them at normal viewing distance. For a phone held 10 inches away that starts around 300 PPI. For a laptop 20 inches away it starts around 150 PPI.",
  },
  {
    question: "Is PPI the same as DPI?",
    answer:
      "Not exactly. PPI measures pixels on a screen or in an image file. DPI measures ink dots a printer lays on paper. One image pixel printed on a 1200 DPI printer uses roughly 16 ink dots of varied color to reproduce the pixel. Photoshop and most software label this field DPI even when they mean PPI, and the terms are used interchangeably in practice. The useful distinction: PPI is digital, DPI is physical.",
  },
  {
    question: "What is 441 PPI considered?",
    answer:
      "441 PPI is a high-end phone pixel density, roughly matching the Galaxy S24 Ultra or similar flagship devices. It is Ultra HiDPI territory: well above the retina threshold of about 300 PPI at 10 inches viewing distance, enough to render 4K video downscaled onto a 6 inch screen without visible pixelation, and enough headroom for VR headsets when magnified by a lens.",
  },
  {
    question: "How much PPI is good for a mobile phone?",
    answer:
      "Anything above 320 PPI looks sharp on a phone. Most flagships ship between 400 and 500 PPI, which is overkill for flat content but useful for VR passthrough and small text at a glance. The human eye caps out around 300 to 400 PPI at 10 inch viewing distance, so PPI beyond 500 rarely shows visible benefit on a flat screen.",
  },
  {
    question: "Is higher PPI always better?",
    answer:
      "Only up to a point. Above the retina threshold for your viewing distance, higher PPI wastes rendering power and battery life with no visible improvement. A 27 inch 5K monitor at 218 PPI looks identical to an 8K version at 326 PPI to most viewers at normal desk distance. Pay for higher PPI when content is small, close, or magnified (phones, VR). Skip it for TVs, billboards, and large monitors.",
  },
  {
    question: "How do I change PPI without losing quality?",
    answer:
      "You cannot add real detail by raising PPI in software. Changing the PPI metadata in Photoshop just tells a printer to render smaller or larger, the pixel count stays the same. To physically fit more pixels per inch you need the original source at higher resolution, AI upscaling, or rescanning. A 1000 by 1000 image at 300 PPI prints at 3.33 inches; the same file at 600 PPI prints at 1.67 inches with the exact same image data.",
  },
];

export default async function PixelsPerInchPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const pageUrl = `${siteConfig.url}${localizedPath(validLocale, "pixels-per-inch")}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${pageUrl}#article`,
    headline: pageTitle,
    description: pageDescription,
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    inLanguage: "en",
    datePublished: "2025-03-01",
    dateModified: "2026-04-21",
    author: { "@id": `${siteConfig.url}/#organization` },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    articleSection: "Pixel Reference",
    keywords:
      "pixels per inch, ppi calculator, pixel density, ppi formula, retina display ppi, ppi vs dpi, 1920x1080 pixels per inch, 4k ppi",
    about: [
      { "@type": "Thing", name: "Pixel density" },
      { "@type": "Thing", name: "Screen resolution" },
      { "@type": "Thing", name: "Print resolution" },
    ],
  };

  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${pageUrl}#calculator`,
    name: "PPI Calculator",
    url: pageUrl,
    description:
      "Calculate pixels per inch from screen width, height, and diagonal. Free online PPI and pixel density calculator.",
    applicationCategory: "UtilityApplication",
    applicationSubCategory: "PPI Calculator",
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
      "Calculate PPI for any screen",
      "Diagonal pixel count and megapixels",
      "Dot pitch in millimeters",
      "Retina and HiDPI classification",
      "Presets for common monitors, laptops, phones, and tablets",
    ],
    creator: { "@id": `${siteConfig.url}/#organization` },
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
      {
        "@type": "ListItem",
        position: 2,
        name: "Pixels Per Inch",
        item: pageUrl,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Calculate Pixels Per Inch",
    description:
      "Calculate PPI for any screen using width, height, and diagonal measurements.",
    totalTime: "PT1M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Find your screen width and height in pixels",
        text: "Look up your screen resolution. A 1920 by 1080 display has a width of 1920 pixels and a height of 1080 pixels.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Measure the screen diagonal in inches",
        text: "Check the product spec sheet or measure corner to corner. A 24 inch monitor has a diagonal of 24 inches.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Compute the diagonal in pixels",
        text: "Apply the Pythagorean theorem: diagonal pixels equals the square root of width squared plus height squared.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Divide diagonal pixels by diagonal inches",
        text: "The result is PPI. A 1920 by 1080 display at 24 inches diagonal gives about 92 PPI.",
      },
    ],
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={webAppJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={howToJsonLd} />

      <Container className="py-10 md:py-14">
        <nav
          aria-label="Breadcrumb"
          className="mx-auto max-w-3xl text-xs font-medium text-neutral-500"
        >
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-neutral-900">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-neutral-900">Pixels Per Inch</li>
          </ol>
        </nav>

        <section aria-labelledby="hero-heading" className="mx-auto mt-6 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
            Pixel density reference
          </p>
          <h1
            id="hero-heading"
            className="mt-4 text-balance text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl"
          >
            {pageHeadline}
          </h1>
          <p className="mt-5 text-balance text-lg leading-relaxed text-neutral-600 sm:text-xl">
            {pageSubheadline}
          </p>
        </section>

        <section aria-label="PPI calculator" className="mx-auto mt-10 max-w-3xl">
          <MinimalPpiCalculator />
        </section>

        <section aria-labelledby="what-is-heading" className="mx-auto mt-16 max-w-3xl">
          <h2
            id="what-is-heading"
            className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl"
          >
            What Is Pixels Per Inch?
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-neutral-700">
            <p>
              Pixels per inch is a measurement of pixel density. It tells you how
              many individual pixels a screen or image packs into one linear inch.
              Higher PPI means smaller, denser pixels. Lower PPI means larger, more
              visible pixels. PPI is the single most important number for judging
              how sharp a display will look at a given viewing distance.
            </p>
            <p>
              The web reference pixel density is 96 PPI, a holdover from early
              Windows displays. Modern phones now ship at 400 to 500 PPI. The gap
              between those numbers is why CSS uses an abstract reference pixel
              rather than a physical one: at 96 PPI one CSS pixel equals one
              device pixel, but at 460 PPI a single CSS pixel is actually rendered
              with around 5 device pixels, preserving readable sizes across
              wildly different hardware.
            </p>
            <p>
              PPI and DPI are used interchangeably in most software, but the
              technical split is clean: PPI describes pixels in a digital image or
              on a screen. DPI describes ink dots a printer physically places on
              paper. A 300 PPI image sent to a 1200 DPI printer produces a print
              where each image pixel is reproduced using roughly 16 ink dots of
              different colors. See the{" "}
              <Link
                href="/dpi-vs-ppi"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:no-underline"
              >
                full DPI vs PPI breakdown
              </Link>{" "}
              for when the distinction matters.
            </p>
          </div>
        </section>

        <section aria-labelledby="formula-heading" className="mx-auto mt-16 max-w-3xl">
          <h2
            id="formula-heading"
            className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl"
          >
            The PPI Formula
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-neutral-700">
            <p>
              PPI is diagonal pixels divided by diagonal inches. To get the
              diagonal in pixels, use the Pythagorean theorem on width and height.
              Written as a single line:
            </p>
            <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-5 py-4">
              <p className="font-mono text-sm text-neutral-800">
                PPI = sqrt(width_px^2 + height_px^2) / diagonal_inches
              </p>
            </div>
            <p>
              Worked example for a 27 inch 4K monitor at 3840 by 2160:
            </p>
            <ul className="list-disc space-y-1 pl-6 text-[15px]">
              <li>width squared = 3840 x 3840 = 14,745,600</li>
              <li>height squared = 2160 x 2160 = 4,665,600</li>
              <li>sum = 19,411,200</li>
              <li>square root = 4405.8 pixels diagonal</li>
              <li>4405.8 / 27 = 163.2 PPI</li>
            </ul>
            <p>
              The calculator above runs this math live. If you already know the
              resolution and physical size, just pick a preset.
            </p>
          </div>
        </section>

        <section aria-labelledby="devices-heading" className="mx-auto mt-16 max-w-4xl">
          <h2
            id="devices-heading"
            className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl"
          >
            PPI on Common Devices
          </h2>
          <p className="mt-3 text-neutral-600">
            Pixel density for phones, tablets, laptops, monitors, and TVs you
            probably use. Values are rounded to the nearest whole PPI.
          </p>
          <div className="mt-6 overflow-x-auto rounded-xl border border-neutral-200 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50 text-left text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
                  <th className="px-4 py-3">Device</th>
                  <th className="px-4 py-3">Resolution</th>
                  <th className="px-4 py-3">Diagonal</th>
                  <th className="px-4 py-3">PPI</th>
                  <th className="hidden px-4 py-3 md:table-cell">Class</th>
                </tr>
              </thead>
              <tbody>
                {deviceTable.map((row) => (
                  <tr key={row.device} className="border-b border-neutral-100 last:border-b-0">
                    <td className="px-4 py-3 font-medium text-neutral-900">{row.device}</td>
                    <td className="px-4 py-3 font-mono text-neutral-700">{row.resolution}</td>
                    <td className="px-4 py-3 text-neutral-700">{row.diagonal}</td>
                    <td className="px-4 py-3 font-mono font-semibold text-neutral-950">{row.ppi}</td>
                    <td className="hidden px-4 py-3 text-neutral-500 md:table-cell">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="ppi-reference-heading" className="mx-auto mt-16 max-w-4xl">
          <h2
            id="ppi-reference-heading"
            className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl"
          >
            PPI Reference Table
          </h2>
          <p className="mt-3 text-neutral-600">
            Pixels per inch, centimeter, and millimeter at every standard density.
          </p>
          <div className="mt-6 overflow-x-auto rounded-xl border border-neutral-200 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50 text-left text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
                  <th className="px-4 py-3">PPI</th>
                  <th className="px-4 py-3">Pixels per cm</th>
                  <th className="px-4 py-3">Pixels per mm</th>
                  <th className="px-4 py-3">Typical usage</th>
                </tr>
              </thead>
              <tbody>
                {ppiTable.map((row) => (
                  <tr key={row.ppi} className="border-b border-neutral-100 last:border-b-0">
                    <td className="px-4 py-3 font-mono font-semibold text-neutral-950">{row.ppi}</td>
                    <td className="px-4 py-3 font-mono text-neutral-700">{row.pixelsPerCm}</td>
                    <td className="px-4 py-3 font-mono text-neutral-700">{row.pixelsPerMm}</td>
                    <td className="px-4 py-3 text-neutral-700">{row.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="retina-heading" className="mx-auto mt-16 max-w-3xl">
          <h2
            id="retina-heading"
            className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl"
          >
            Retina, HiDPI, and Device Pixel Ratio
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-neutral-700">
            <p>
              Apple coined the term retina in 2010 for displays dense enough that
              the eye cannot resolve individual pixels at normal viewing distance.
              The threshold depends on distance: about 300 PPI at 10 inches for a
              phone, 220 PPI at 20 inches for a laptop, 120 PPI at 4 feet for a
              TV. Beyond the threshold, more PPI does not produce visibly sharper
              output.
            </p>
            <p>
              On the web, the browser exposes this through{" "}
              <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm text-neutral-900">
                window.devicePixelRatio
              </code>
              . Ratio 1 is a 96 PPI display. Ratio 2 is any 2x Retina device.
              Ratio 3 is iPhone Pro class. When you serve images, match the ratio:
              a 100 by 100 CSS pixel image should be 200 by 200 actual pixels on
              2x devices and 300 by 300 on 3x, otherwise the image looks soft.
            </p>
          </div>
          <div className="mt-6 overflow-x-auto rounded-xl border border-neutral-200 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50 text-left text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
                  <th className="px-4 py-3">PPI</th>
                  <th className="px-4 py-3">Pixel ratio</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody>
                {pixelRatioTable.map((row) => (
                  <tr key={row.ppi} className="border-b border-neutral-100 last:border-b-0">
                    <td className="px-4 py-3 font-mono font-semibold text-neutral-950">{row.ppi}</td>
                    <td className="px-4 py-3 font-mono text-neutral-700">{row.ratio}</td>
                    <td className="px-4 py-3 text-neutral-700">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="print-heading" className="mx-auto mt-16 max-w-3xl">
          <h2
            id="print-heading"
            className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl"
          >
            Pixels Per Inch for Printing
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-neutral-700">
            <p>
              For print, 300 PPI is the professional benchmark for anything viewed
              at reading distance: photographs, magazines, books, brochures. 150
              PPI is acceptable for newspapers, flyers on coarse paper, and
              posters seen from a few feet. 72 to 96 PPI is enough for banners
              viewed from 10 feet or more. Billboards seen from across a parking
              lot can print as low as 25 to 50 PPI.
            </p>
            <p>
              The rule of thumb: every foot of viewing distance buys you roughly
              30 PPI of headroom. A print viewed from 1 foot needs 300 PPI. A
              print viewed from 10 feet is fine at 30 PPI. Beyond the distance
              threshold, adding more pixels just wastes file size and RIP time.
            </p>
            <p>
              To find pixel requirements for a specific print size, use the{" "}
              <Link
                href="/dpi-calculator"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:no-underline"
              >
                DPI Calculator
              </Link>{" "}
              or the{" "}
              <Link
                href="/image-size-calculator"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:no-underline"
              >
                Image Size Calculator
              </Link>
              . For the inverse problem (how large a given image can safely print)
              both tools invert the math automatically.
            </p>
          </div>
        </section>

        <section aria-labelledby="related-heading" className="mt-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="related-heading"
              className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl"
            >
              Related Tools and Guides
            </h2>
            <p className="mt-3 text-neutral-600">
              Every pixel measurement, formula, and reference you need.
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "PPI Calculator",
                href: "/ppi-calculator",
                description: "Standalone calculator with save and compare.",
              },
              {
                title: "DPI Calculator",
                href: "/dpi-calculator",
                description: "Find print DPI from pixels and inches.",
              },
              {
                title: "Pixels to Inches",
                href: "/pixels-to-inches",
                description: "Convert px to inches at any DPI.",
              },
              {
                title: "DPI vs PPI",
                href: "/dpi-vs-ppi",
                description: "Why the two are not interchangeable.",
              },
              {
                title: "What Is a Pixel?",
                href: "/what-is-a-pixel",
                description: "The unit behind every digital image.",
              },
              {
                title: "Common Screen Resolutions",
                href: "/common-resolutions",
                description: "HD, 2K, 4K, 5K, 8K reference chart.",
              },
            ].map((card) => (
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
              <FAQ
                items={faqItems}
                label="Frequently Asked Questions"
                showHeading={false}
                includeJsonLd={false}
              />
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
