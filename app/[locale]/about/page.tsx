import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { buildAlternates, localizedPath, localizeHref } from "@/lib/alternates";
import { getDictionary } from "@/lib/translations";
import Link from "next/link";
import { DocSectionNav } from "@/components/content/DocSectionNav";
import { EditorialMeta } from "@/components/seo/EditorialMeta";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { StructuredDoc } from "@/components/content/StructuredDoc";
import { siteConfig } from "@/content/site-config";
import { getBreadcrumbs } from "@/lib/content-utils";
import { getLocalizedDoc } from "@/lib/content/doc-types";
import { content } from "@/lib/content/about";
import { DEFAULT_PAGE_DATE } from "@/lib/page-seo";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["about"];

  return {
    title: pageDict?.title || "about",
    description: pageDict?.description || "",
    alternates: buildAlternates(locale, "about"),
    openGraph: {
      title: pageDict?.title || "About FeetToPixels",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const doc = getLocalizedDoc(content, validLocale);
  const pageDict = dict.pages.about;
  const tocItems = doc.sections.map((section) => ({
    id: section.id,
    label: section.title,
  }));

  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "about", href: "/about" },
  ]);
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: dict.site.description,
    logo: `${siteConfig.url}/icon.svg`,
  };
  const aboutPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: pageDict?.title || "About FeetToPixels",
    description: pageDict?.description || dict.site.description,
    url: `${siteConfig.url}${localizedPath(validLocale, "about")}`,
    inLanguage: validLocale,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };

  return (
    <Container className="py-8 md:py-12">
      <JsonLd data={orgJsonLd} />
      <JsonLd data={aboutPageJsonLd} />
      <Breadcrumbs items={breadcrumbs} />

      <div className="mx-auto max-w-3xl">
        <h1 className="mb-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          {pageDict?.title || "About FeetToPixels"}
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-neutral-600">
          {pageDict?.extractive || dict.site.description}
        </p>

        <EditorialMeta locale={validLocale} dateModified={DEFAULT_PAGE_DATE} />
        <DocSectionNav items={tocItems} label={dict.nav.onThisPage} />

        <div className="prose prose-neutral mt-8 max-w-none">
          <StructuredDoc sections={doc.sections} />
        </div>

        <section className="mt-10 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-700">
            Core tools
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-neutral-900">
            Start with the tools people use most
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              {
                href: localizeHref(validLocale, "/pixel-converter"),
                title: dict.pages["pixel-converter"]?.title || "Pixel Converter",
                description: "Switch between pixels, physical units, and CSS units from one tool.",
              },
              {
                href: localizeHref(validLocale, "/dpi-calculator"),
                title: dict.pages["dpi-calculator"]?.title || "DPI Calculator",
                description: "Check print density before you size or export an image.",
              },
              {
                href: localizeHref(validLocale, "/pixels-to-inches"),
                title: dict.pages["pixels-to-inches"]?.title || "Pixels to Inches",
                description: "Jump straight into the most common physical conversion workflow.",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-neutral-200 bg-white p-4 transition-colors hover:border-primary-200 hover:text-primary-700"
              >
                <p className="text-base font-semibold text-neutral-900">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">{item.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-8 rounded-xl border border-primary-200 bg-primary-50 p-6 text-center">
          <p className="mb-3 text-base font-semibold text-neutral-900">
            {dict.tool.readyToConvert}
          </p>
          <Link
            href={localizeHref(validLocale, "/pixel-converter")}
            className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-700"
          >
            {dict.pages["pixel-converter"]?.title || "Pixel Converter"}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </Container>
  );
}
