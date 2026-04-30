import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FAQ } from "@/components/tools/FAQ";
import { JsonLd } from "@/components/seo/JsonLd";
import { StructuredDoc } from "@/components/content/StructuredDoc";
import { Container } from "@/components/ui/Container";
import { content } from "@/lib/content/css-units";
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

const title = "CSS Unit Converters: PX to REM, EM, PT, and VW";
const description =
  "CSS unit conversion hub for pixels, REM, EM, PT, and VW. Interactive converters plus explainer guides for responsive web design and front-end development.";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  return {
    title,
    description,
    alternates: buildAlternates(locale, "css-units"),
    openGraph: {
      title,
      description,
      locale: ogLocaleMap[locale],
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: title }],
    },
  };
}

const cssConverters = [
  {
    slug: "px-to-rem",
    href: "/px-to-rem",
    icon: "REM",
    formula: "REM = PX / 16",
  },
  {
    slug: "rem-to-px",
    href: "/rem-to-px",
    icon: "REM",
    formula: "PX = REM x 16",
  },
  {
    slug: "px-to-em",
    href: "/px-to-em",
    icon: "EM",
    formula: "EM = PX / parent font size",
  },
  {
    slug: "em-to-px",
    href: "/em-to-px",
    icon: "EM",
    formula: "PX = EM x parent font size",
  },
  {
    slug: "px-to-pt",
    href: "/px-to-pt",
    icon: "PT",
    formula: "PT = PX x 0.75 (at 96 DPI)",
  },
  {
    slug: "pt-to-px",
    href: "/pt-to-px",
    icon: "PT",
    formula: "PX = PT x 1.333 (at 96 DPI)",
  },
  {
    slug: "px-to-vw",
    href: "/px-to-vw",
    icon: "VW",
    formula: "VW = (PX / viewport) x 100",
  },
  {
    slug: "vw-to-px",
    href: "/vw-to-px",
    icon: "VW",
    formula: "PX = VW x viewport / 100",
  },
] as const;

const conceptGuides = [
  { slug: "em-vs-rem", href: "/em-vs-rem", icon: "VS" },
  { slug: "what-is-a-pixel", href: "/what-is-a-pixel", icon: "PX" },
] as const;

export default async function CssUnitsPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const doc = getLocalizedDoc(content, validLocale);
  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "css-units", href: "/css-units" },
  ]);
  const pageUrl = `${siteConfig.url}${localizedPath(validLocale, "css-units")}`;

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
    itemListElement: cssConverters.map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: dict.pages[tool.slug]?.title || tool.slug,
      url: `${siteConfig.url}${localizedPath(validLocale, tool.href.replace(/^\//, ""))}`,
    })),
  };

  return (
    <Container className="py-8 md:py-12">
      <JsonLd data={webPageJsonLd} />
      <JsonLd data={itemListJsonLd} />
      <Breadcrumbs items={breadcrumbs} />

      <section className="mt-4">
        <p className="inline-flex rounded-full border border-sky-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
          CSS Units
        </p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] text-neutral-950 sm:text-5xl">
          CSS Unit Converters
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-600">
          Convert pixels to REM, EM, PT, and VW. Every converter includes a reverse
          calculation and works for any base font size or viewport width.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-neutral-900">Converters</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cssConverters.map((tool) => (
            <Link
              key={tool.href}
              href={localizeHref(validLocale, tool.href)}
              className="tool-card group"
            >
              <span className="mono-display mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700 transition-colors group-hover:bg-sky-100">
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

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-neutral-900">CSS Concept Resources</h2>
        <p className="mt-2 max-w-2xl text-neutral-600">
          Understand the fundamentals before converting.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {conceptGuides.map((page) => (
            <Link
              key={page.href}
              href={localizeHref(validLocale, page.href)}
              className="group flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white p-4 transition-colors hover:border-primary-200 hover:bg-primary-50/30"
            >
              <span className="mono-display inline-flex h-10 min-w-10 items-center justify-center rounded-lg bg-neutral-900 px-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                {page.icon}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-neutral-900 group-hover:text-primary-700">
                  {dict.pages[page.slug]?.title || page.slug}
                </h3>
                {dict.navDescriptions[page.slug] && (
                  <p className="mt-1 text-xs leading-relaxed text-neutral-500">
                    {dict.navDescriptions[page.slug]}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="prose prose-neutral mt-10 max-w-none rounded-[24px] border border-neutral-200 bg-white p-6 sm:p-8">
        <StructuredDoc sections={doc.sections} />
      </div>

      <section className="mt-10 rounded-[24px] border border-primary-200 bg-primary-50/40 p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-neutral-900">Related Resources</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href={localizeHref(validLocale, "/pixel-converter")}
            className="inline-flex h-11 items-center rounded-full bg-neutral-950 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-900"
          >
            Pixel Converter Hub
          </Link>
          <Link
            href={localizeHref(validLocale, "/learn")}
            className="inline-flex h-11 items-center rounded-full border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-700 transition-colors hover:border-primary-300 hover:text-primary-700"
          >
            Learn Hub
          </Link>
        </div>
      </section>

      <FAQ items={doc.faq} label={dict.tool.faq} />
    </Container>
  );
}
