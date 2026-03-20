import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { EditorialMeta } from "@/components/seo/EditorialMeta";
import { FAQ } from "@/components/tools/FAQ";
import { JsonLd } from "@/components/seo/JsonLd";
import { ReferenceSources } from "@/components/seo/ReferenceSources";
import { StructuredDoc } from "@/components/content/StructuredDoc";
import { Container } from "@/components/ui/Container";
import { content } from "@/lib/content/pixel-converter";
import { getLocalizedDoc } from "@/lib/content/doc-types";
import { getBreadcrumbs } from "@/lib/content-utils";
import { isValidLocale, locales, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { DEFAULT_PAGE_DATE, getReferenceSources } from "@/lib/page-seo";
import { getDictionary } from "@/lib/translations";
import { siteConfig } from "@/content/site-config";
import { PixelConverterHub } from "./PixelConverterHub";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["pixel-converter"];

  return {
    title: pageDict?.title || "pixel-converter",
    description: pageDict?.description || "",
    alternates: {
      canonical: `/${locale}/pixel-converter`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/pixel-converter`]),
      ),
    },
    openGraph: {
      title: pageDict?.title || "pixel-converter",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}

const converterTools = [
  {
    slug: "pixels-to-inches",
    href: "/pixels-to-inches",
    icon: "PX",
    formula: "inches = px / DPI",
  },
  {
    slug: "inches-to-pixels",
    href: "/inches-to-pixels",
    icon: "IN",
    formula: "px = inches x DPI",
  },
  {
    slug: "pixels-to-cm",
    href: "/pixels-to-cm",
    icon: "CM",
    formula: "cm = px x 2.54 / DPI",
  },
  {
    slug: "cm-to-pixels",
    href: "/cm-to-pixels",
    icon: "CM",
    formula: "px = cm x DPI / 2.54",
  },
  {
    slug: "pixels-to-mm",
    href: "/pixels-to-mm",
    icon: "MM",
    formula: "mm = px x 25.4 / DPI",
  },
  {
    slug: "mm-to-pixels",
    href: "/mm-to-pixels",
    icon: "MM",
    formula: "px = mm x DPI / 25.4",
  },
  {
    slug: "feet-to-pixels",
    href: "/feet-to-pixels",
    icon: "FT",
    formula: "px = ft x 12 x DPI",
  },
  {
    slug: "pixels-to-feet",
    href: "/pixels-to-feet",
    icon: "FT",
    formula: "ft = px / (DPI x 12)",
  },
] as const;

export default async function PixelConverterPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const pageDict = dict.pages["pixel-converter"];
  const doc = getLocalizedDoc(content, validLocale);
  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "pixel-converter", href: "/pixel-converter" },
  ]);
  const quickLinks = converterTools.slice(0, 4);
  const pageUrl = `${siteConfig.url}/${validLocale}/pixel-converter`;
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    name: pageDict?.title || "Pixel Converter",
    description: pageDict?.extractive || pageDict?.description || "",
    url: pageUrl,
    inLanguage: validLocale,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    mainEntity: {
      "@id": `${pageUrl}#tool`,
    },
    dateModified: DEFAULT_PAGE_DATE,
  };
  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${pageUrl}#tool`,
    name: pageDict?.title || "Pixel Converter",
    description: pageDict?.description || "",
    url: pageUrl,
    inLanguage: validLocale,
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
    creator: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
    },
    mainEntityOfPage: {
      "@id": `${pageUrl}#webpage`,
    },
    featureList: converterTools.map((tool) => dict.pages[tool.slug]?.title || tool.slug),
  };
  const relatedToolsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: converterTools.map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: dict.pages[tool.slug]?.title || tool.slug,
      url: `${siteConfig.url}/${validLocale}${tool.href}`,
    })),
  };
  const tocItems =
    validLocale === "en"
      ? [
          { id: "converter-tools", label: dict.home.conversionTools },
          { id: "guide", label: dict.nav.learn },
          { id: "reference-sources", label: "Reference Sources" },
          { id: "faq", label: dict.tool.faq },
        ]
      : [];

  return (
    <Container className="py-8 md:py-12">
      <JsonLd data={webPageJsonLd} />
      <JsonLd data={webAppJsonLd} />
      <JsonLd data={relatedToolsJsonLd} />
      <Breadcrumbs items={breadcrumbs} />

      <section className="relative overflow-hidden rounded-[32px] border border-neutral-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.95))] p-6 shadow-[0_24px_70px_-46px_rgba(15,23,42,0.38)] sm:p-8">
        <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_68%)]" />
        <div className="absolute -left-8 top-10 h-32 w-32 rounded-full bg-primary-100/80 blur-3xl" />
        <div className="absolute -right-8 top-8 h-40 w-40 rounded-full bg-sky-100/70 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-center">
          <div className="order-1">
            <div className="rounded-[28px] border border-white/80 bg-white/92 p-4 shadow-[0_18px_45px_-34px_rgba(15,23,42,0.34)] backdrop-blur sm:p-5">
              <PixelConverterHub locale={validLocale} />
            </div>
          </div>

          <div className="order-2">
            <p className="inline-flex rounded-full border border-primary-200 bg-white/85 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary-700 shadow-soft">
              {dict.nav.tools}
            </p>
            <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-[-0.05em] text-neutral-950 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.04]">
              {pageDict?.title || "Pixel Converter"}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600">
              {pageDict?.extractive ||
                "Convert between pixels and physical units with DPI awareness. Select a conversion below or use the quick converter to get instant results."}
            </p>
            {pageDict?.description && (
              <p className="mt-3 max-w-2xl text-base leading-7 text-neutral-500">
                {pageDict.description}
              </p>
            )}

            <EditorialMeta locale={validLocale} dateModified={DEFAULT_PAGE_DATE} />

            <div className="mt-6 rounded-[24px] border border-neutral-200/80 bg-white/78 p-5 shadow-[0_16px_40px_-34px_rgba(15,23,42,0.28)]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-700">
                {dict.tool.relatedTools}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {quickLinks.map((tool) => (
                  <Link
                    key={tool.href}
                    href={`/${validLocale}${tool.href}`}
                    className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-sm font-medium text-neutral-600 transition-colors hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700"
                  >
                    {dict.pages[tool.slug]?.title || tool.slug}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {tocItems.length > 0 && (
        <nav
          aria-label={dict.nav.onThisPage}
          className="mt-6 rounded-[28px] border border-neutral-200/80 bg-neutral-50/70 p-4"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-700">
            {dict.nav.onThisPage}
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {tocItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block rounded-full border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-600 transition-colors hover:border-primary-200 hover:text-primary-700"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <section id="converter-tools" className="mt-10">
        <h2 className="mb-6 text-2xl font-semibold text-neutral-900">
          {dict.home.conversionTools}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {converterTools.map((tool) => (
            <Link
              key={tool.href}
              href={`/${validLocale}${tool.href}`}
              className="tool-card group"
            >
              <span className="mono-display mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-xs font-semibold uppercase tracking-[0.16em] text-primary-700 transition-colors group-hover:bg-primary-100">
                {tool.icon}
              </span>
              <h3 className="text-sm font-semibold text-neutral-900 group-hover:text-primary-700">
                {dict.pages[tool.slug]?.title || tool.slug}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-neutral-500">
                {dict.navDescriptions[tool.slug] || ""}
              </p>
              <p className="mono-display mt-2 text-xs text-neutral-400">
                {tool.formula}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <div
        id="guide"
        className="prose prose-neutral mt-10 max-w-none rounded-[30px] border border-neutral-200/80 bg-white/92 p-6 shadow-[0_18px_48px_-38px_rgba(15,23,42,0.28)] sm:p-8"
      >
        <StructuredDoc sections={doc.sections} />
      </div>

      {validLocale === "en" && (
        <ReferenceSources sources={getReferenceSources("pixel-converter")} />
      )}

      <FAQ items={doc.faq} label={dict.tool.faq} />
    </Container>
  );
}
