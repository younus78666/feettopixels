import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { FAQ } from "@/components/tools/FAQ";
import { toolsDropdown } from "@/content/navigation";
import { siteConfig } from "@/content/site-config";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import { getNavLabel, getNavDescription } from "@/lib/nav-utils";
import { getRelatedTools } from "@/lib/content-utils";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const englishHomeTitle = "Pixel Conversion Tools: 15+ DPI Calculators [2026]";
const englishHomeDescription =
  "Pixel conversion tools for inches, cm, mm, feet, and CSS units. Compare 15+ DPI-aware calculators, PPI guides, and print/web size references for designers.";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const isEnglish = locale === "en";
  const description = isEnglish
    ? englishHomeDescription
    : `${dict.site.description} ${dict.navDescriptions["pixel-converter"] || ""}`.trim();

  return {
    title: isEnglish ? { absolute: englishHomeTitle } : dict.home.hero,
    description,
    keywords: isEnglish
      ? [
          "pixel conversion",
          "pixel converter",
          "feet to pixels",
          "pixels to inches",
          "inches to pixels",
          "dpi calculator",
          "pixels per inch",
        ]
      : undefined,
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}`]),
      ),
    },
    openGraph: {
      title: isEnglish ? englishHomeTitle : dict.home.hero,
      description,
      locale: ogLocaleMap[locale],
    },
    twitter: {
      card: "summary_large_image",
      title: isEnglish ? englishHomeTitle : dict.home.hero,
      description,
    },
  };
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const allTools = toolsDropdown.groups.flatMap((g) => g.links);
  const isEnglish = validLocale === "en";
  const updatedDateIso = "2026-03-19";
  const updatedDateLabel = "March 19, 2026";

  const featuredTools = getRelatedTools(dict, [
    { slug: "pixel-converter", href: "/pixel-converter", icon: "↔" },
    { slug: "pixels-to-inches", href: "/pixels-to-inches", icon: "↔" },
    { slug: "inches-to-pixels", href: "/inches-to-pixels", icon: "↔" },
    { slug: "dpi-calculator", href: "/dpi-calculator", icon: "◌" },
    { slug: "ppi-calculator", href: "/ppi-calculator", icon: "◍" },
    { slug: "image-size-calculator", href: "/image-size-calculator", icon: "▣" },
  ]);

  const featuredGuides = getRelatedTools(dict, [
    { slug: "pixels-per-inch", href: "/pixels-per-inch", icon: "PPI" },
    { slug: "what-is-dpi", href: "/what-is-dpi", icon: "DPI" },
    { slug: "best-dpi-for-printing", href: "/best-dpi-for-printing", icon: "300" },
    { slug: "paper-sizes-in-pixels", href: "/paper-sizes-in-pixels", icon: "A4" },
  ]);

  const tocItems = isEnglish
    ? [
        { id: "top-pixel-conversion-tools", label: "Top Pixel Conversion Tools" },
        { id: "pixel-conversion-guides", label: "Pixel Conversion Guides" },
        { id: "pixel-conversion-reference-table", label: "Pixel Conversion Reference Table" },
        { id: "reference-sources", label: "Reference Sources" },
        { id: "homepage-faq", label: "Homepage FAQ" },
      ]
    : [];

  const homepageFaqItems = isEnglish
    ? [
        {
          question: "How do pixel conversion tools work?",
          answer:
            "Pixel conversion tools use a simple formula: physical size multiplied by DPI gives pixels, and pixels divided by DPI gives physical size. That is why the same image can have different print dimensions at 72, 96, 150, or 300 DPI.",
        },
        {
          question: "How many pixels are in 1 inch?",
          answer:
            "The answer depends on DPI. At 96 DPI, 1 inch equals 96 pixels. At 300 DPI, 1 inch equals 300 pixels. For screens you usually use 96 PPI as a reference, while print projects often use 300 DPI.",
        },
        {
          question: "What is the difference between DPI and PPI?",
          answer:
            "PPI describes pixel density on screens, while DPI describes print dots on paper. People often use them interchangeably in everyday searches, but for accurate screen and print planning it helps to know which one applies to your project.",
        },
        {
          question: "Which page should I use first on FeetToPixels?",
          answer:
            "Start with the Pixel Converter hub if you need a quick answer, the DPI Calculator if you need density calculations, or the Pixels Per Inch guide if you want the highest-volume reference topic explained clearly before converting anything.",
        },
      ]
    : [];

  const breadcrumbItems = [
    { label: isEnglish ? "Home" : dict.site.name, href: "/" },
    {
      label: isEnglish ? "Pixel Conversion Tools" : dict.home.conversionTools,
      href: `/${validLocale}`,
    },
  ];

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}/${validLocale}#webpage`,
    url: `${siteConfig.url}/${validLocale}`,
    name: isEnglish ? englishHomeTitle : dict.home.hero,
    description: isEnglish ? englishHomeDescription : dict.site.description,
    dateModified: updatedDateIso,
    inLanguage: validLocale,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: [
      "Pixel conversion",
      "DPI calculator",
      "PPI guide",
      "Print and screen sizing",
    ],
  };

  const siteNavigationJsonLd = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: [
      dict.pages["pixel-converter"]?.title || "Pixel Converter",
      dict.pages["pixels-to-inches"]?.title || "Pixels to Inches",
      dict.pages["dpi-calculator"]?.title || "DPI Calculator",
      dict.pages["pixels-per-inch"]?.title || "Pixels Per Inch",
      dict.pages["best-dpi-for-printing"]?.title || "Best DPI for Printing",
    ],
    url: [
      `${siteConfig.url}/${validLocale}/pixel-converter`,
      `${siteConfig.url}/${validLocale}/pixels-to-inches`,
      `${siteConfig.url}/${validLocale}/dpi-calculator`,
      `${siteConfig.url}/${validLocale}/pixels-per-inch`,
      `${siteConfig.url}/${validLocale}/best-dpi-for-printing`,
    ],
  };

  return (
    <>
      <JsonLd data={webPageJsonLd} />
      <JsonLd data={siteNavigationJsonLd} />

      {/* Hero */}
      <SectionWrapper className="pt-16 pb-12 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-20">
        <Container as="article">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-600">
              {dict.home.freeOnlineTools}
            </p>
            <h1 className="gradient-text">
              {dict.home.hero}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-neutral-500">
              {dict.home.heroSub}
            </p>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-neutral-600">
              {isEnglish ? (
                <>
                  Use these tools for fast <strong>pixel conversion</strong> work across inches, centimeters,
                  millimeters, feet, and CSS units. Whether you need a print-ready DPI setting, a
                  screen PPI check, or a quick pixels-to-inches answer, the homepage links below map
                  directly to the highest-priority tools and guides from the FeetToPixels topical map.
                </>
              ) : (
                dict.site.description
              )}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href={`/${validLocale}/pixel-converter`}
                className="inline-flex items-center justify-center font-medium rounded-lg bg-primary-600 text-white hover:bg-primary-700 shadow-sm h-12 px-6 text-base transition-colors"
              >
                {dict.home.browseTools}
              </Link>
              <Link
                href={`/${validLocale}/what-is-dpi`}
                className="inline-flex items-center justify-center font-medium rounded-lg border border-neutral-300 text-neutral-700 hover:border-primary-400 hover:text-primary-700 hover:bg-primary-50 h-12 px-6 text-base transition-colors"
              >
                {dict.home.learnDpi}
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-neutral-500">
              <span>
                By{" "}
                <Link href={`/${validLocale}/about`} className="font-medium text-primary-700 hover:text-primary-800">
                  FeetToPixels Editorial Team
                </Link>
              </span>
              <span aria-hidden="true">•</span>
              <span>
                Updated{" "}
                <time dateTime={updatedDateIso} className="font-medium text-neutral-700">
                  {updatedDateLabel}
                </time>
              </span>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-4xl">
            <Image
              src="/pixel-conversion-tools-2026.svg"
              alt="Pixel conversion tools guide for DPI, PPI, inches, and pixels"
              width={1200}
              height={675}
              priority
              className="h-auto w-full rounded-3xl border border-neutral-200 bg-white shadow-elevated"
            />
          </div>

          {tocItems.length > 0 && (
            <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-neutral-200 bg-white p-6 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-700">
                {dict.nav.onThisPage}
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-neutral-600 sm:grid-cols-2">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="transition-colors hover:text-primary-700">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
      </SectionWrapper>

      <SectionWrapper alt id="top-pixel-conversion-tools">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4">
              {isEnglish ? "Top Pixel Conversion Tools" : dict.home.conversionTools}
            </h2>
            <p className="mx-auto max-w-2xl text-neutral-600">
              {isEnglish
                ? "The keyword research and topical map point to three core hubs: Pixel Converter, Pixels Per Inch, and DPI Calculator. These pages cover the strongest conversion, print, and resolution intents first."
                : dict.home.whySub}
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTools.map((tool) => (
              <Card
                key={tool.href}
                title={tool.name}
                description={tool.description}
                href={`/${validLocale}${tool.href}`}
              >
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-primary-700">
                  {tool.icon}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper id="pixel-conversion-guides">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4">
              {isEnglish ? "Pixel Conversion Guides for DPI, PPI, and Print" : dict.home.learnDpi}
            </h2>
            <p className="mx-auto max-w-2xl text-neutral-600">
              {isEnglish
                ? "Informational guides support the tool pages by explaining what DPI means, how PPI affects screens, and which print settings to choose before you convert dimensions."
                : dict.site.description}
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {featuredGuides.map((guide) => (
              <Card
                key={guide.href}
                title={guide.name}
                description={guide.description}
                href={`/${validLocale}${guide.href}`}
              >
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-primary-700">
                  {guide.icon}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper alt id="pixel-conversion-reference-table">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4">
              {isEnglish ? "Pixel Conversion Quick Reference Table" : dict.home.conversionTools}
            </h2>
            <p className="mx-auto max-w-2xl text-neutral-600">
              {isEnglish
                ? "These homepage priorities come directly from the FeetToPixels keyword research. They cover the strongest search demand, the best AI-answer potential, and the main conversion intents users have on first visit."
                : dict.home.whySub}
            </p>
          </div>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-neutral-200 bg-white shadow-soft">
            <table className="min-w-full divide-y divide-neutral-200 text-left text-sm">
              <thead className="bg-neutral-50 text-neutral-700">
                <tr>
                  <th className="px-4 py-3 font-semibold">Query Cluster</th>
                  <th className="px-4 py-3 font-semibold">Monthly Volume</th>
                  <th className="px-4 py-3 font-semibold">Best Page</th>
                  <th className="px-4 py-3 font-semibold">Why It Matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 text-neutral-600">
                <tr>
                  <td className="px-4 py-3">Pixels per inch</td>
                  <td className="px-4 py-3 mono-display">90,500</td>
                  <td className="px-4 py-3">
                    <Link href={`/${validLocale}/pixels-per-inch`} className="font-medium text-primary-700 hover:text-primary-800">
                      {dict.pages["pixels-per-inch"]?.title || "Pixels Per Inch"}
                    </Link>
                  </td>
                  <td className="px-4 py-3">Highest-volume informational topic and the main guide hub.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Pixel to inch conversion</td>
                  <td className="px-4 py-3 mono-display">22,200</td>
                  <td className="px-4 py-3">
                    <Link href={`/${validLocale}/pixels-to-inches`} className="font-medium text-primary-700 hover:text-primary-800">
                      {dict.pages["pixels-to-inches"]?.title || "Pixels to Inches"}
                    </Link>
                  </td>
                  <td className="px-4 py-3">Core physical converter intent with strong tool demand.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Pixels to inches / inches to pixels</td>
                  <td className="px-4 py-3 mono-display">18,100</td>
                  <td className="px-4 py-3">
                    <Link href={`/${validLocale}/pixel-converter`} className="font-medium text-primary-700 hover:text-primary-800">
                      {dict.pages["pixel-converter"]?.title || "Pixel Converter"}
                    </Link>
                  </td>
                  <td className="px-4 py-3">Best homepage hub for users who have not chosen a unit yet.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">DPI calculator</td>
                  <td className="px-4 py-3 mono-display">5,400</td>
                  <td className="px-4 py-3">
                    <Link href={`/${validLocale}/dpi-calculator`} className="font-medium text-primary-700 hover:text-primary-800">
                      {dict.pages["dpi-calculator"]?.title || "DPI Calculator"}
                    </Link>
                  </td>
                  <td className="px-4 py-3">Supports print sizing, screen density, and image prep workflows.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Best DPI for printing</td>
                  <td className="px-4 py-3 mono-display">Support Topic</td>
                  <td className="px-4 py-3">
                    <Link href={`/${validLocale}/best-dpi-for-printing`} className="font-medium text-primary-700 hover:text-primary-800">
                      {dict.pages["best-dpi-for-printing"]?.title || "Best DPI for Printing"}
                    </Link>
                  </td>
                  <td className="px-4 py-3">Turns calculator traffic into practical print guidance.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </SectionWrapper>

      {/* Tools grid */}
      <SectionWrapper>
        <Container>
          <h2 className="mb-8 text-center">{dict.home.conversionTools}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {allTools.map((tool) => (
              <Card
                key={tool.href}
                title={getNavLabel(tool, dict)}
                description={getNavDescription(tool, dict)}
                href={`/${validLocale}${tool.href}`}
              />
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Value proposition */}
      <SectionWrapper>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4">{dict.home.whyTitle}</h2>
            <p className="mx-auto max-w-xl text-neutral-500">
              {dict.home.whySub}
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-8 sm:grid-cols-3">
            {[
              { title: dict.home.dpiAware, desc: dict.home.dpiAwareDesc },
              { title: dict.home.instant, desc: dict.home.instantDesc },
              { title: dict.home.devFriendly, desc: dict.home.devFriendlyDesc },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-base font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper alt id="reference-sources">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4">{isEnglish ? "Reference Sources" : dict.tool.relatedArticles}</h2>
            <p className="mx-auto max-w-2xl text-neutral-600">
              {isEnglish
                ? "These external references support the homepage's pixel conversion explanations and help users verify DPI, PPI, screen, and CSS sizing concepts."
                : dict.site.description}
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-3">
            <a
              href="https://en.wikipedia.org/wiki/Pixel"
              target="_blank"
              rel="noreferrer"
              className="tool-card group"
            >
              <h3 className="text-lg font-semibold text-neutral-900">Pixel</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                Background on what a pixel is and how digital image dimensions work.
              </p>
            </a>
            <a
              href="https://en.wikipedia.org/wiki/Dots_per_inch"
              target="_blank"
              rel="noreferrer"
              className="tool-card group"
            >
              <h3 className="text-lg font-semibold text-neutral-900">Dots Per Inch</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                A reference source for print resolution, output quality, and DPI terminology.
              </p>
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units"
              target="_blank"
              rel="noreferrer"
              className="tool-card group"
            >
              <h3 className="text-lg font-semibold text-neutral-900">CSS Units</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                MDN guide to px, rem, em, viewport units, and layout sizing basics.
              </p>
            </a>
          </div>

          {isEnglish && (
            <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-3 text-sm">
              <span className="font-medium text-neutral-700">Share this page:</span>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${siteConfig.url}/en`)}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-neutral-300 px-3 py-1.5 text-neutral-600 transition-colors hover:border-primary-300 hover:text-primary-700"
              >
                LinkedIn
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`${siteConfig.url}/en`)}&text=${encodeURIComponent(englishHomeTitle)}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-neutral-300 px-3 py-1.5 text-neutral-600 transition-colors hover:border-primary-300 hover:text-primary-700"
              >
                X
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${siteConfig.url}/en`)}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-neutral-300 px-3 py-1.5 text-neutral-600 transition-colors hover:border-primary-300 hover:text-primary-700"
              >
                Facebook
              </a>
            </div>
          )}
        </Container>
      </SectionWrapper>

      {homepageFaqItems.length > 0 && (
        <SectionWrapper id="homepage-faq">
          <Container>
            <div className="mx-auto max-w-4xl">
              <FAQ items={homepageFaqItems} label={dict.tool.faq} />
            </div>
          </Container>
        </SectionWrapper>
      )}
    </>
  );
}
