import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
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
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
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
    { slug: "pixel-converter", href: "/pixel-converter", icon: "HUB" },
    { slug: "pixels-to-inches", href: "/pixels-to-inches", icon: "IN" },
    { slug: "inches-to-pixels", href: "/inches-to-pixels", icon: "OUT" },
    { slug: "dpi-calculator", href: "/dpi-calculator", icon: "DPI" },
    { slug: "ppi-calculator", href: "/ppi-calculator", icon: "PPI" },
    { slug: "image-size-calculator", href: "/image-size-calculator", icon: "SIZE" },
  ]);

  const featuredGuides = getRelatedTools(dict, [
    { slug: "pixels-per-inch", href: "/pixels-per-inch", icon: "PPI" },
    { slug: "what-is-dpi", href: "/what-is-dpi", icon: "DPI" },
    { slug: "best-dpi-for-printing", href: "/best-dpi-for-printing", icon: "300" },
    { slug: "paper-sizes-in-pixels", href: "/paper-sizes-in-pixels", icon: "A4" },
  ]);

  const heroMetrics = [
    { value: "15+", label: dict.nav.tools, detail: "px / in / cm / mm" },
    { value: "4", label: dict.categories.physical, detail: "ft / in / cm / mm" },
    { value: "72 / 150 / 300", label: "DPI", detail: "PPI / DPI" },
    { value: "px / rem / em", label: dict.categories.css, detail: "rem / em / vw" },
  ];

  const homepageValueProps = [
    { count: "01", title: dict.home.dpiAware, desc: dict.home.dpiAwareDesc },
    { count: "02", title: dict.home.instant, desc: dict.home.instantDesc },
    { count: "03", title: dict.home.devFriendly, desc: dict.home.devFriendlyDesc },
  ];

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
    about: ["Pixel conversion", "DPI calculator", "PPI guide", "Print and screen sizing"],
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

  const heroAltText = isEnglish
    ? "Abstract pixel conversion workspace with DPI, PPI, and unit cards"
    : dict.site.description;

  return (
    <>
      <JsonLd data={webPageJsonLd} />
      <JsonLd data={siteNavigationJsonLd} />

      <SectionWrapper className="relative overflow-hidden pb-14 pt-14 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
        <div className="absolute inset-x-0 top-0 h-[78%] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_58%),radial-gradient(circle_at_left,rgba(20,184,166,0.14),transparent_42%)]" />
        <div className="absolute left-[8%] top-24 h-40 w-40 rounded-full bg-primary-100 blur-3xl" />
        <div className="absolute right-[6%] top-16 h-64 w-64 rounded-full bg-sky-100 blur-3xl" />

        <Container as="article" className="relative">
          <div className="overflow-hidden rounded-[32px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(248,250,252,0.78))] p-6 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.45)] sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
              <div>
                <p className="inline-flex rounded-full border border-primary-200 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary-700 shadow-soft">
                  {dict.home.freeOnlineTools}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {featuredTools.slice(0, 3).map((tool) => (
                    <Link
                      key={tool.href}
                      href={`/${validLocale}${tool.href}`}
                      className="rounded-full border border-neutral-200 bg-white/70 px-3 py-1.5 text-xs font-medium text-neutral-600 transition-colors hover:border-primary-300 hover:text-primary-700"
                    >
                      {tool.name}
                    </Link>
                  ))}
                </div>
                <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-[-0.045em] text-neutral-950 sm:text-5xl lg:text-[3.65rem] lg:leading-[1.02]">
                  {dict.home.hero}
                </h1>
                <div className="mt-5 h-1 w-24 rounded-full bg-[linear-gradient(90deg,#0f766e,#22d3ee)]" />
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
                  {dict.home.heroSub}
                </p>
                <p className="mt-5 max-w-3xl text-base leading-8 text-neutral-600">
                  {isEnglish ? (
                    <>
                      Use these tools for fast <strong>pixel conversion</strong> work across inches,
                      centimeters, millimeters, feet, and CSS units. Whether you need a print-ready
                      DPI setting, a screen PPI check, or a quick pixels-to-inches answer, the
                      homepage links below map directly to the highest-priority tools and guides from
                      the FeetToPixels topical map.
                    </>
                  ) : (
                    dict.site.description
                  )}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={`/${validLocale}/pixel-converter`}
                    className="inline-flex h-12 items-center justify-center rounded-full bg-neutral-950 px-6 text-base font-medium text-white shadow-[0_18px_40px_-26px_rgba(15,23,42,0.75)] transition-transform hover:-translate-y-0.5 hover:bg-neutral-900"
                  >
                    {dict.home.browseTools}
                  </Link>
                  <Link
                    href={`/${validLocale}/what-is-dpi`}
                    className="inline-flex h-12 items-center justify-center rounded-full border border-neutral-300 bg-white/70 px-6 text-base font-medium text-neutral-700 transition-colors hover:border-primary-300 hover:text-primary-700"
                  >
                    {dict.home.learnDpi}
                  </Link>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-neutral-500">
                  <Link
                    href={`/${validLocale}/about`}
                    className="font-medium text-primary-700 hover:text-primary-800"
                  >
                    FeetToPixels Editorial Team
                  </Link>
                  <span aria-hidden="true">/</span>
                  <time dateTime={updatedDateIso} className="font-medium text-neutral-700">
                    {updatedDateLabel}
                  </time>
                </div>
                <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {heroMetrics.map((metric) => (
                    <div
                      key={`${metric.label}-${metric.value}`}
                      className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-soft"
                    >
                      <p className="mono-display text-sm font-semibold uppercase tracking-[0.18em] text-primary-700">
                        {metric.value}
                      </p>
                      <p className="mt-2 text-sm font-medium text-neutral-900">
                        {metric.label}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-neutral-400">
                        {metric.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-6 rounded-full bg-primary-200/50 blur-3xl" />
                <div className="relative overflow-hidden rounded-[28px] border border-white/70 bg-white/70 p-3 shadow-[0_28px_70px_-40px_rgba(15,23,42,0.7)]">
                  <Image
                    src="/home-hero-visual.svg"
                    alt={heroAltText}
                    width={1200}
                    height={900}
                    priority
                    className="h-auto w-full rounded-[22px] border border-white/70"
                  />
                </div>
              </div>
            </div>

            {tocItems.length > 0 && (
              <div className="mt-8 rounded-[28px] border border-white/70 bg-white/70 p-6 shadow-soft">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-700">
                    {dict.nav.onThisPage}
                  </p>
                  <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
                    SEO / Homepage
                  </p>
                </div>
                <ul className="mt-4 grid gap-2 text-sm text-neutral-600 sm:grid-cols-2 lg:grid-cols-5">
                  {tocItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="block rounded-full border border-transparent px-3 py-2 transition-colors hover:border-primary-200 hover:bg-primary-50 hover:text-primary-700"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper id="top-pixel-conversion-tools" className="pt-8 sm:pt-10">
        <Container>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-700">
                {dict.nav.tools}
              </p>
              <h2 className="mt-3">{isEnglish ? "Top Pixel Conversion Tools" : dict.home.conversionTools}</h2>
              <p className="mt-4 max-w-2xl text-neutral-600">
                {isEnglish
                  ? "The keyword research and topical map point to three core hubs: Pixel Converter, Pixels Per Inch, and DPI Calculator. These pages cover the strongest conversion, print, and resolution intents first."
                  : dict.home.whySub}
              </p>
            </div>
            <Link
              href={`/${validLocale}/pixel-converter`}
              className="inline-flex h-11 items-center justify-center rounded-full border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-700 transition-colors hover:border-primary-300 hover:text-primary-700"
            >
              {dict.home.browseTools}
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredTools.map((tool, index) => (
              <Card
                key={tool.href}
                title={tool.name}
                description={tool.description}
                href={`/${validLocale}${tool.href}`}
                className="h-full overflow-hidden border-white/80 bg-white/90 shadow-[0_18px_45px_-32px_rgba(15,23,42,0.35)]"
              >
                <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
                  <span>{tool.icon}</span>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper id="pixel-conversion-guides" className="relative overflow-hidden bg-neutral-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(20,184,166,0.2),transparent_34%)]" />
        <Container className="relative">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-300">
              DPI / PPI
            </p>
            <h2 className="mt-3 text-white">
              {isEnglish ? "Pixel Conversion Guides for DPI, PPI, and Print" : dict.home.learnDpi}
            </h2>
            <p className="mt-4 max-w-2xl text-neutral-300">
              {isEnglish
                ? "Informational guides support the tool pages by explaining what DPI means, how PPI affects screens, and which print settings to choose before you convert dimensions."
                : dict.site.description}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featuredGuides.map((guide) => (
              <Link
                key={guide.href}
                href={`/${validLocale}${guide.href}`}
                className="group rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1 hover:border-primary-400/40 hover:bg-white/10"
              >
                <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-300">
                  {guide.icon}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">{guide.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                  {guide.description}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {isEnglish && (
        <SectionWrapper alt id="pixel-conversion-reference-table">
          <Container>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-700">
                Research snapshot
              </p>
              <h2 className="mt-3">Pixel Conversion Quick Reference Table</h2>
              <p className="mt-4 max-w-2xl text-neutral-600">
                These homepage priorities come directly from the FeetToPixels keyword research. They
                cover the strongest search demand, the best AI-answer potential, and the main
                conversion intents users have on first visit.
              </p>
            </div>

            <div className="mt-10 overflow-x-auto rounded-[28px] border border-neutral-200 bg-white shadow-[0_18px_45px_-36px_rgba(15,23,42,0.42)]">
              <table className="min-w-full divide-y divide-neutral-200 text-left text-sm">
                <thead className="bg-neutral-50 text-neutral-700">
                  <tr>
                    <th className="px-5 py-4 font-semibold">Query Cluster</th>
                    <th className="px-5 py-4 font-semibold">Monthly Volume</th>
                    <th className="px-5 py-4 font-semibold">Best Page</th>
                    <th className="px-5 py-4 font-semibold">Why It Matters</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-600">
                  <tr>
                    <td className="px-5 py-4">Pixels per inch</td>
                    <td className="px-5 py-4 mono-display">90,500</td>
                    <td className="px-5 py-4">
                      <Link
                        href={`/${validLocale}/pixels-per-inch`}
                        className="font-medium text-primary-700 hover:text-primary-800"
                      >
                        {dict.pages["pixels-per-inch"]?.title || "Pixels Per Inch"}
                      </Link>
                    </td>
                    <td className="px-5 py-4">Highest-volume informational topic and the main guide hub.</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4">Pixel to inch conversion</td>
                    <td className="px-5 py-4 mono-display">22,200</td>
                    <td className="px-5 py-4">
                      <Link
                        href={`/${validLocale}/pixels-to-inches`}
                        className="font-medium text-primary-700 hover:text-primary-800"
                      >
                        {dict.pages["pixels-to-inches"]?.title || "Pixels to Inches"}
                      </Link>
                    </td>
                    <td className="px-5 py-4">Core physical converter intent with strong tool demand.</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4">Pixels to inches / inches to pixels</td>
                    <td className="px-5 py-4 mono-display">18,100</td>
                    <td className="px-5 py-4">
                      <Link
                        href={`/${validLocale}/pixel-converter`}
                        className="font-medium text-primary-700 hover:text-primary-800"
                      >
                        {dict.pages["pixel-converter"]?.title || "Pixel Converter"}
                      </Link>
                    </td>
                    <td className="px-5 py-4">Best homepage hub for users who have not chosen a unit yet.</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4">DPI calculator</td>
                    <td className="px-5 py-4 mono-display">5,400</td>
                    <td className="px-5 py-4">
                      <Link
                        href={`/${validLocale}/dpi-calculator`}
                        className="font-medium text-primary-700 hover:text-primary-800"
                      >
                        {dict.pages["dpi-calculator"]?.title || "DPI Calculator"}
                      </Link>
                    </td>
                    <td className="px-5 py-4">Supports print sizing, screen density, and image prep workflows.</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4">Best DPI for printing</td>
                    <td className="px-5 py-4 mono-display">Support Topic</td>
                    <td className="px-5 py-4">
                      <Link
                        href={`/${validLocale}/best-dpi-for-printing`}
                        className="font-medium text-primary-700 hover:text-primary-800"
                      >
                        {dict.pages["best-dpi-for-printing"]?.title || "Best DPI for Printing"}
                      </Link>
                    </td>
                    <td className="px-5 py-4">Turns calculator traffic into practical print guidance.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Container>
        </SectionWrapper>
      )}

      <SectionWrapper>
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.92fr,1.08fr] lg:items-start">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-700">
                {dict.home.whyTitle}
              </p>
              <h2 className="mt-3">{dict.home.whyTitle}</h2>
              <p className="mt-4 text-neutral-600">
                {dict.home.whySub}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {homepageValueProps.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-neutral-200 bg-white p-6 shadow-[0_16px_40px_-34px_rgba(15,23,42,0.45)]"
                >
                  <p className="mono-display text-xs font-semibold uppercase tracking-[0.24em] text-primary-700">
                    {item.count}
                  </p>
                  <h3 className="mt-4 text-lg font-semibold text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper alt>
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-700">
                {dict.nav.tools}
            </p>
            <h2 className="mt-3">{dict.home.conversionTools}</h2>
            <p className="mt-4 max-w-2xl text-neutral-600">
              {dict.site.description}
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {allTools.map((tool) => (
              <Card
                key={tool.href}
                title={getNavLabel(tool, dict)}
                description={getNavDescription(tool, dict)}
                href={`/${validLocale}${tool.href}`}
                className="h-full border-white/80 bg-white/90 shadow-soft"
              />
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {isEnglish && (
        <SectionWrapper id="reference-sources">
          <Container>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-700">
                Sources
              </p>
              <h2 className="mt-3">Reference Sources</h2>
              <p className="mt-4 max-w-2xl text-neutral-600">
                These external references support the homepage&apos;s pixel conversion explanations and
                help users verify DPI, PPI, screen, and CSS sizing concepts.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
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

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
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
          </Container>
        </SectionWrapper>
      )}

      {homepageFaqItems.length > 0 && (
        <SectionWrapper id="homepage-faq" className="pt-0">
          <Container>
            <div className="rounded-[32px] border border-neutral-200 bg-white p-6 shadow-[0_18px_48px_-38px_rgba(15,23,42,0.4)] sm:p-8">
              <FAQ items={homepageFaqItems} label={dict.tool.faq} />
            </div>
          </Container>
        </SectionWrapper>
      )}
    </>
  );
}
