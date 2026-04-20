import type { Metadata } from "next";
import Link from "next/link";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { buildAlternates, localizedPath } from "@/lib/alternates";
import { getDictionary } from "@/lib/translations";
import { DocSectionNav } from "@/components/content/DocSectionNav";
import { EditorialMeta } from "@/components/seo/EditorialMeta";
import { StructuredDoc } from "@/components/content/StructuredDoc";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbs } from "@/lib/content-utils";
import { getLocalizedDoc } from "@/lib/content/doc-types";
import { content } from "@/lib/content/privacy";
import { siteConfig } from "@/content/site-config";
import { DEFAULT_PAGE_DATE } from "@/lib/page-seo";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["privacy"];

  return {
    title: pageDict?.title || "privacy",
    description: pageDict?.description || "",
    alternates: buildAlternates(locale, "privacy"),
    openGraph: {
      title: pageDict?.title || "Privacy Policy",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}

export default async function PrivacyPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const doc = getLocalizedDoc(content, validLocale);
  const pageDict = dict.pages.privacy;
  const tocItems = doc.sections.map((section) => ({
    id: section.id,
    label: section.title,
  }));

  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "privacy", href: "/privacy" },
  ]);
  const privacyPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageDict?.title || "Privacy Policy",
    description: pageDict?.description || "",
    url: `${siteConfig.url}${localizedPath(validLocale, "privacy")}`,
    inLanguage: validLocale,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
  };

  return (
    <Container className="py-8 md:py-12">
      <JsonLd data={privacyPageJsonLd} />
      <Breadcrumbs items={breadcrumbs} />

      <div className="mx-auto max-w-3xl">
        <h1 className="mb-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          {pageDict?.title || "Privacy Policy"}
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
          <h2 className="text-xl font-semibold text-neutral-900">Questions about privacy?</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600">
            If you want to ask about data handling, cookies, or how browser-based tools work on
            FeetToPixels, use the contact page and include the page you were using when the
            question came up.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={`/${validLocale}/contact`}
              className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:border-primary-300 hover:text-primary-700"
            >
              Contact support
            </Link>
            <Link
              href={`/${validLocale}/terms`}
              className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:border-primary-300 hover:text-primary-700"
            >
              Review terms
            </Link>
          </div>
        </section>
      </div>
    </Container>
  );
}
