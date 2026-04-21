import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FAQ } from "@/components/tools/FAQ";
import { JsonLd } from "@/components/seo/JsonLd";
import { StructuredDoc } from "@/components/content/StructuredDoc";
import { Container } from "@/components/ui/Container";
import { content } from "@/lib/content/learn";
import { getLocalizedDoc } from "@/lib/content/doc-types";
import { getBreadcrumbs } from "@/lib/content-utils";
import { isValidLocale, locales, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { buildAlternates, localizedPath, localizeHref } from "@/lib/alternates";
import { DEFAULT_PAGE_DATE } from "@/lib/page-seo";
import { getDictionary } from "@/lib/translations";
import { siteConfig } from "@/content/site-config";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const title = "Learn Pixel Conversion, DPI, PPI, and CSS Units";
const description =
  "The complete educational hub for pixel, DPI, PPI, and CSS unit concepts. Guides, comparisons, and reference tables for print, screen, and web design.";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  return {
    title,
    description,
    alternates: buildAlternates(locale, "learn"),
    openGraph: {
      title,
      description,
      locale: ogLocaleMap[locale],
    },
  };
}

const foundationalGuides = [
  { slug: "what-is-a-pixel", href: "/what-is-a-pixel", icon: "PX" },
  { slug: "what-is-dpi", href: "/what-is-dpi", icon: "DPI" },
  { slug: "what-is-ppi", href: "/what-is-ppi", icon: "PPI" },
  { slug: "pixels-per-inch", href: "/pixels-per-inch", icon: "/IN" },
] as const;

const comparisonGuides = [
  { slug: "dpi-vs-ppi", href: "/dpi-vs-ppi", icon: "VS" },
  { slug: "em-vs-rem", href: "/em-vs-rem", icon: "VS" },
] as const;

const referencePages = [
  { slug: "best-dpi-for-printing", href: "/best-dpi-for-printing", icon: "300" },
  { slug: "best-dpi-for-web", href: "/best-dpi-for-web", icon: "WEB" },
  { slug: "paper-sizes-in-pixels", href: "/paper-sizes-in-pixels", icon: "A4" },
  { slug: "standard-image-sizes", href: "/standard-image-sizes", icon: "IMG" },
  { slug: "social-media-image-sizes", href: "/social-media-image-sizes", icon: "SOC" },
  { slug: "common-resolutions", href: "/common-resolutions", icon: "4K" },
  { slug: "dpi-conversion-table", href: "/dpi-conversion-table", icon: "TBL" },
  { slug: "passport-photo-size", href: "/passport-photo-size", icon: "ID" },
  { slug: "pixels-per-foot", href: "/pixels-per-foot", icon: "FT" },
  { slug: "pixels-per-cm", href: "/pixels-per-cm", icon: "CM" },
  { slug: "pixels-per-mm", href: "/pixels-per-mm", icon: "MM" },
] as const;

function PageCard({
  locale,
  href,
  slug,
  icon,
  dict,
}: {
  locale: Locale;
  href: string;
  slug: string;
  icon: string;
  dict: ReturnType<typeof getDictionary>;
}) {
  const pageTitle = dict.pages[slug]?.title || slug;
  const pageDescription = dict.navDescriptions[slug] || "";
  return (
    <Link
      href={localizeHref(locale, href)}
      className="group flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white p-4 transition-colors hover:border-primary-200 hover:bg-primary-50/30"
    >
      <span className="mono-display inline-flex h-10 min-w-10 items-center justify-center rounded-lg bg-neutral-900 px-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-semibold text-neutral-900 group-hover:text-primary-700">
          {pageTitle}
        </h3>
        {pageDescription && (
          <p className="mt-1 text-xs leading-relaxed text-neutral-500">
            {pageDescription}
          </p>
        )}
      </div>
    </Link>
  );
}

export default async function LearnPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const doc = getLocalizedDoc(content, validLocale);
  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "learn", href: "/learn" },
  ]);
  const pageUrl = `${siteConfig.url}${localizedPath(validLocale, "learn")}`;

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#webpage`,
    name: title,
    description,
    url: pageUrl,
    inLanguage: validLocale,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    dateModified: DEFAULT_PAGE_DATE,
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      ...foundationalGuides,
      ...comparisonGuides,
      ...referencePages,
    ].map((p, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: dict.pages[p.slug]?.title || p.slug,
      url: `${siteConfig.url}${localizedPath(validLocale, p.href.replace(/^\//, ""))}`,
    })),
  };

  return (
    <Container className="py-8 md:py-12">
      <JsonLd data={webPageJsonLd} />
      <JsonLd data={itemListJsonLd} />
      <Breadcrumbs items={breadcrumbs} />

      <section className="mt-4">
        <p className="inline-flex rounded-full border border-primary-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary-700">
          {dict.nav.learn}
        </p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] text-neutral-950 sm:text-5xl">
          Learn Pixel Conversion
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-600">
          Every educational guide, comparison, and reference page on FeetToPixels.
          Start with the foundations, then explore comparisons and references.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-neutral-900">Foundational Guides</h2>
        <p className="mt-2 max-w-2xl text-neutral-600">
          Core concepts: what pixels are, what DPI means, what PPI means, and how they relate.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {foundationalGuides.map((page) => (
            <PageCard
              key={page.href}
              locale={validLocale}
              href={page.href}
              slug={page.slug}
              icon={page.icon}
              dict={dict}
            />
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-neutral-900">Comparison Guides</h2>
        <p className="mt-2 max-w-2xl text-neutral-600">
          Clarify the concepts that confuse most designers and developers.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {comparisonGuides.map((page) => (
            <PageCard
              key={page.href}
              locale={validLocale}
              href={page.href}
              slug={page.slug}
              icon={page.icon}
              dict={dict}
            />
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-neutral-900">Reference Pages</h2>
        <p className="mt-2 max-w-2xl text-neutral-600">
          Quick-lookup tables for print sizes, social media, paper, resolutions, and metric density.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {referencePages.map((page) => (
            <PageCard
              key={page.href}
              locale={validLocale}
              href={page.href}
              slug={page.slug}
              icon={page.icon}
              dict={dict}
            />
          ))}
        </div>
      </section>

      <div className="prose prose-neutral mt-10 max-w-none rounded-[24px] border border-neutral-200 bg-white p-6 sm:p-8">
        <StructuredDoc sections={doc.sections} />
      </div>

      <section className="mt-10 rounded-[24px] border border-primary-200 bg-primary-50/40 p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-neutral-900">Ready to Convert?</h2>
        <p className="mt-2 max-w-2xl text-neutral-600">
          When concepts are clear, use the interactive tools to do actual conversions.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href={localizeHref(validLocale, "/pixel-converter")}
            className="inline-flex h-11 items-center rounded-full bg-neutral-950 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-900"
          >
            Pixel Converter Hub
          </Link>
          <Link
            href={localizeHref(validLocale, "/css-units")}
            className="inline-flex h-11 items-center rounded-full border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-700 transition-colors hover:border-primary-300 hover:text-primary-700"
          >
            CSS Unit Converters
          </Link>
          <Link
            href={localizeHref(validLocale, "/dpi-calculator")}
            className="inline-flex h-11 items-center rounded-full border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-700 transition-colors hover:border-primary-300 hover:text-primary-700"
          >
            DPI Calculator
          </Link>
        </div>
      </section>

      <FAQ items={doc.faq} label={dict.tool.faq} />
    </Container>
  );
}
