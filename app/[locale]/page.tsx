import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { JsonLd } from "@/components/seo/JsonLd";
import { FAQ } from "@/components/tools/FAQ";
import { ToolIcon, getToolVisualMeta } from "@/components/tools/ToolIcon";
import { UnitConverter } from "@/components/tools/UnitConverter";
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

const englishHomeTitle = "Feet to Pixels Converter - Convert ft to px at Any DPI";
const englishHomeDescription =
  "Feet to pixels converter with 72, 96, 150, and 300 DPI presets. Convert ft to px instantly for print, signage, screens, and large-format design.";

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
          "feet to pixels",
          "feet to pixels converter",
          "ft to px",
          "convert feet to pixels",
          "pixel conversion",
          "pixel converter",
          "pixels to inches",
          "dpi calculator",
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

function getCompactToolLabel(label: string): string {
  return label
    .split(":")[0]
    .split(" - ")[0]
    .split(" – ")[0]
    .split(" — ")[0]
    .replace(/\s+Converter$/i, "")
    .trim();
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
    { slug: "feet-to-pixels", href: "/feet-to-pixels", icon: "FT" },
    { slug: "pixel-converter", href: "/pixel-converter", icon: "HUB" },
    { slug: "pixels-to-feet", href: "/pixels-to-feet", icon: "REV" },
    { slug: "pixels-to-inches", href: "/pixels-to-inches", icon: "IN" },
    { slug: "inches-to-pixels", href: "/inches-to-pixels", icon: "OUT" },
    { slug: "dpi-calculator", href: "/dpi-calculator", icon: "DPI" },
  ]);

  const heroConverterLinks = [
    "/feet-to-pixels",
    "/pixels-to-feet",
    "/inches-to-pixels",
    "/pixels-to-inches",
  ]
    .map((href) => toolsDropdown.groups[0].links.find((tool) => tool.href === href))
    .filter((tool): tool is (typeof toolsDropdown.groups)[0]["links"][number] => Boolean(tool));
  const primaryHeroTool = heroConverterLinks[0];
  const primaryHeroShortLabel = primaryHeroTool
    ? getCompactToolLabel(getNavLabel(primaryHeroTool, dict))
    : "Feet to Pixels";

  const featuredGuides = getRelatedTools(dict, [
    { slug: "pixels-per-inch", href: "/pixels-per-inch", icon: "PPI" },
    { slug: "what-is-dpi", href: "/what-is-dpi", icon: "DPI" },
    { slug: "best-dpi-for-printing", href: "/best-dpi-for-printing", icon: "300" },
    { slug: "paper-sizes-in-pixels", href: "/paper-sizes-in-pixels", icon: "A4" },
  ]);

  const heroPoints = isEnglish
    ? [
        "72, 96, 150, and 300 DPI presets",
        "Fast ft to px and px to ft workflows",
        "Built for print, signage, and mockups",
      ]
    : [dict.home.dpiAwareDesc, dict.home.instantDesc, dict.home.devFriendlyDesc];

  const heroUseCases = [
    "Posters",
    "Signage",
    "Stage backdrops",
    "Large-format print",
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
        { id: "quick-start-guide", label: "Quick Start Guide" },
        { id: "reference-sources", label: "Reference Sources" },
        { id: "homepage-faq", label: "FAQ" },
      ]
    : [];

  const homepageFaqItems = isEnglish
    ? [
        {
          question: "How do I convert feet to pixels?",
          answer:
            "Use the formula pixels = feet x 12 x DPI. For example, 1 foot at 96 DPI equals 1152 pixels, while 1 foot at 300 DPI equals 3600 pixels. That is why DPI matters before you size artwork for print or screens.",
        },
        {
          question: "How many pixels are in 1 foot?",
          answer:
            "It depends on DPI. At 72 DPI, 1 foot equals 864 pixels. At 96 DPI, it equals 1152 pixels. At 150 DPI, it equals 1800 pixels. At 300 DPI, it equals 3600 pixels.",
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
    about: ["Feet to pixels converter", "ft to px conversion", "DPI calculator", "Print and screen sizing"],
  };

  const siteNavigationJsonLd = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: [
      dict.pages["feet-to-pixels"]?.title || "Feet to Pixels",
      dict.pages["pixel-converter"]?.title || "Pixel Converter",
      dict.pages["pixels-to-inches"]?.title || "Pixels to Inches",
      dict.pages["dpi-calculator"]?.title || "DPI Calculator",
      dict.pages["pixels-to-feet"]?.title || "Pixels to Feet",
      dict.pages["best-dpi-for-printing"]?.title || "Best DPI for Printing",
    ],
    url: [
      `${siteConfig.url}/${validLocale}/feet-to-pixels`,
      `${siteConfig.url}/${validLocale}/pixel-converter`,
      `${siteConfig.url}/${validLocale}/pixels-to-inches`,
      `${siteConfig.url}/${validLocale}/dpi-calculator`,
      `${siteConfig.url}/${validLocale}/pixels-to-feet`,
      `${siteConfig.url}/${validLocale}/best-dpi-for-printing`,
    ],
  };

  return (
    <>
      <JsonLd data={webPageJsonLd} />
      <JsonLd data={siteNavigationJsonLd} />

      <SectionWrapper className="relative overflow-hidden pb-10 pt-12 sm:pb-14 sm:pt-16 lg:pb-16 lg:pt-18">
        <div className="absolute inset-x-0 top-0 h-[78%] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_58%),radial-gradient(circle_at_left,rgba(20,184,166,0.14),transparent_42%)]" />
        <div className="absolute left-[8%] top-24 h-40 w-40 rounded-full bg-primary-100 blur-3xl" />
        <div className="absolute right-[6%] top-16 h-64 w-64 rounded-full bg-sky-100 blur-3xl" />

        <Container as="article" className="relative">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
              <div className="order-2 max-w-2xl">
                <p className="inline-flex rounded-full border border-primary-200 bg-white/85 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary-700 shadow-soft">
                  {isEnglish ? "Feet to pixels" : dict.pages["feet-to-pixels"]?.title || dict.home.freeOnlineTools}
                </p>
                <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-[-0.05em] text-neutral-950 sm:text-5xl lg:text-[3.4rem] lg:leading-[1.02]">
                  {isEnglish ? "Feet to Pixels Converter" : dict.pages["feet-to-pixels"]?.title || dict.home.hero}
                </h1>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-600">
                  {isEnglish
                    ? "Convert feet to pixels instantly with DPI-aware presets for web, print, signage, and large-format layouts."
                    : dict.pages["feet-to-pixels"]?.description || dict.home.heroSub}
                </p>
                <p className="mt-3 max-w-xl text-base leading-7 text-neutral-500">
                  {isEnglish
                    ? "Use the calculator first, then open the dedicated tool page if you want more guidance, conversion tables, or reverse-unit options."
                    : dict.site.description}
                </p>

                {isEnglish && (
                  <div className="mt-5 rounded-[28px] border border-neutral-200/80 bg-white/80 p-5 shadow-[0_18px_45px_-36px_rgba(15,23,42,0.3)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-700">
                      Best for
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {heroUseCases.map((useCase) => (
                        <span
                          key={useCase}
                          className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-sm font-medium text-neutral-600"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {heroPoints.map((point, index) => (
                    <div
                      key={point}
                      className="rounded-[24px] border border-neutral-200/80 bg-white/78 p-4 shadow-[0_16px_40px_-36px_rgba(15,23,42,0.32)]"
                    >
                      <p className="mono-display text-xs font-semibold uppercase tracking-[0.22em] text-primary-700">
                        0{index + 1}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-neutral-600">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={`/${validLocale}/feet-to-pixels`}
                    className="inline-flex h-12 items-center justify-center rounded-full bg-neutral-950 px-6 text-base font-medium text-white shadow-[0_18px_40px_-26px_rgba(15,23,42,0.75)] transition-transform hover:-translate-y-0.5 hover:bg-neutral-900"
                  >
                    {isEnglish ? "Open full feet to pixels page" : dict.home.browseTools}
                  </Link>
                  <Link
                    href={`/${validLocale}/pixel-converter`}
                    className="inline-flex h-12 items-center justify-center rounded-full border border-neutral-300 bg-white/70 px-6 text-base font-medium text-neutral-700 transition-colors hover:border-primary-300 hover:text-primary-700"
                  >
                    {isEnglish ? "Browse all tools" : dict.home.browseTools}
                  </Link>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-neutral-500">
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
              </div>

              <div className="order-1 relative lg:pr-4">
                <div className="absolute inset-4 rounded-full bg-primary-200/40 blur-3xl" />
                <div
                  id="start-converting"
                  className="relative overflow-hidden rounded-[34px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.95))] p-5 shadow-[0_28px_80px_-44px_rgba(15,23,42,0.5)] backdrop-blur sm:p-6"
                >
                  <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_68%)]" />
                  <div className="border-b border-neutral-200/80 pb-4">
                    <div className="max-w-xl">
                      <h2 className="max-w-lg text-2xl font-semibold tracking-[-0.03em] text-neutral-950 sm:text-[2rem]">
                        {isEnglish ? "Convert Feet to Pixels" : primaryHeroShortLabel}
                      </h2>
                      <p className="mt-2 max-w-lg text-sm leading-7 text-neutral-600">
                        {isEnglish
                          ? "Enter feet, choose your DPI, and get the pixel value immediately."
                          : dict.pages["feet-to-pixels"]?.description || dict.site.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {heroConverterLinks.map((tool) => {
                      const active = tool.href === "/feet-to-pixels";
                      const compactLabel = getCompactToolLabel(getNavLabel(tool, dict));

                      return (
                        <Link
                          key={tool.href}
                          href={`/${validLocale}${tool.href}`}
                          className={
                            active
                              ? "rounded-full border border-neutral-950 bg-neutral-950 px-4 py-2 text-sm font-medium text-white transition-colors"
                              : "rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:border-primary-300 hover:text-primary-700"
                          }
                        >
                          {compactLabel}
                        </Link>
                      );
                    })}
                  </div>

                  <div className="mt-4">
                    <UnitConverter
                      locale={validLocale}
                      fromUnit="Feet"
                      toUnit="Pixels"
                      conversionType="ft-to-px"
                      formula="px = ft x 12 x DPI"
                      defaultDpi={96}
                      compact
                      showFormulaCard={false}
                      showConversionTable={false}
                      className="border-0 bg-transparent p-0 shadow-none"
                    />
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-neutral-200/80 pt-4 text-sm text-neutral-500">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                      {isEnglish ? "Formula" : dict.tool.formula}
                    </span>
                    <span className="mono-display font-medium text-neutral-700">
                      px = ft x 12 x DPI
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {tocItems.length > 0 && (
              <div className="mt-6 border-t border-neutral-200/70 pt-4">
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-700">
                    {dict.nav.onThisPage}
                  </p>
                </div>
                <ul className="mt-3 grid gap-2 text-sm text-neutral-600 sm:grid-cols-2 lg:grid-cols-5">
                  {tocItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="block rounded-full border border-neutral-200/70 bg-white/55 px-3 py-2 transition-colors hover:border-primary-200 hover:bg-primary-50 hover:text-primary-700"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
        </Container>
      </SectionWrapper>

      <SectionWrapper id="top-pixel-conversion-tools" className="pt-8 sm:pt-10">
        <Container>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-700">
                {dict.nav.tools}
              </p>
              <h2 className="mt-3">{isEnglish ? "Feet to Pixels and Related Tools" : dict.home.conversionTools}</h2>
              <p className="mt-4 max-w-2xl text-neutral-600">
                {isEnglish
                  ? "Start with feet to pixels, then move into reverse conversion, inches, and DPI tools when the same project needs a second step."
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
                eyebrow={getToolVisualMeta(tool.href, tool.name).label}
                image={<ToolIcon href={tool.href} name={tool.name} />}
                className="h-full overflow-hidden border-white/80 bg-white/90 shadow-[0_18px_45px_-32px_rgba(15,23,42,0.35)]"
              >
                <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
                  <span>{tool.icon || getToolVisualMeta(tool.href, tool.name).label}</span>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper
        id="pixel-conversion-guides"
        className="theme-dark relative overflow-hidden bg-neutral-950 text-neutral-100"
      >
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
                <div className="flex items-center gap-3">
                  <ToolIcon
                    href={guide.href}
                    name={guide.name}
                    className="h-11 w-11 rounded-xl border-white/15 bg-white/8 text-primary-200"
                  />
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-300">
                      {getToolVisualMeta(guide.href, guide.name).label}
                    </p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-white/60">
                      {guide.icon}
                    </p>
                  </div>
                </div>
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
        <SectionWrapper alt id="quick-start-guide">
          <Container>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-700">
                Quick start
              </p>
              <h2 className="mt-3">Choose the Right Tool</h2>
              <p className="mt-4 max-w-2xl text-neutral-600">
                Use this practical guide to jump straight to the calculator or reference page that
                matches your task.
              </p>
            </div>

            <div className="table-scroll-shell mt-10 rounded-[28px] border border-neutral-200 bg-white shadow-[0_18px_45px_-36px_rgba(15,23,42,0.42)]">
              <table className="min-w-full divide-y divide-neutral-200 text-left text-sm">
                <thead className="bg-neutral-50 text-neutral-700">
                  <tr>
                    <th className="px-5 py-4 font-semibold">Task</th>
                    <th className="px-5 py-4 font-semibold">Best Page</th>
                    <th className="px-5 py-4 font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-600">
                  <tr>
                    <td className="px-5 py-4">Convert pixels to inches</td>
                    <td className="px-5 py-4">
                      <Link
                        href={`/${validLocale}/pixels-to-inches`}
                        className="font-medium text-primary-700 hover:text-primary-800"
                      >
                        {dict.pages["pixels-to-inches"]?.title || "Pixels to Inches"}
                      </Link>
                    </td>
                    <td className="px-5 py-4">Print sizing, image exports, and layout checks.</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4">Convert inches to pixels</td>
                    <td className="px-5 py-4">
                      <Link
                        href={`/${validLocale}/inches-to-pixels`}
                        className="font-medium text-primary-700 hover:text-primary-800"
                      >
                        {dict.pages["inches-to-pixels"]?.title || "Inches to Pixels"}
                      </Link>
                    </td>
                    <td className="px-5 py-4">Canvas setup, print layouts, and digital signage work.</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4">Convert between multiple units</td>
                    <td className="px-5 py-4">
                      <Link
                        href={`/${validLocale}/pixel-converter`}
                        className="font-medium text-primary-700 hover:text-primary-800"
                      >
                        {dict.pages["pixel-converter"]?.title || "Pixel Converter"}
                      </Link>
                    </td>
                    <td className="px-5 py-4">Quick switching between px, in, cm, mm, ft, and CSS units.</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4">Check print resolution</td>
                    <td className="px-5 py-4">
                      <Link
                        href={`/${validLocale}/dpi-calculator`}
                        className="font-medium text-primary-700 hover:text-primary-800"
                      >
                        {dict.pages["dpi-calculator"]?.title || "DPI Calculator"}
                      </Link>
                    </td>
                    <td className="px-5 py-4">Photo printing, scanned artwork, and image prep workflows.</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4">Find paper sizes in pixels</td>
                    <td className="px-5 py-4">
                      <Link
                        href={`/${validLocale}/paper-sizes-in-pixels`}
                        className="font-medium text-primary-700 hover:text-primary-800"
                      >
                        {dict.pages["paper-sizes-in-pixels"]?.title || "Paper Sizes in Pixels"}
                      </Link>
                    </td>
                    <td className="px-5 py-4">A4, Letter, A3, A5, and other standard page sizes.</td>
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
                eyebrow={getToolVisualMeta(tool.href, getNavLabel(tool, dict)).label}
                image={<ToolIcon href={tool.href} name={getNavLabel(tool, dict)} />}
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
                These external references support this page&apos;s pixel conversion explanations and
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
