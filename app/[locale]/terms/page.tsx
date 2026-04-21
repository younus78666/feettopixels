import type { Metadata } from "next";
import Link from "next/link";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { buildAlternates, localizedPath, localizeHref } from "@/lib/alternates";
import { getDictionary } from "@/lib/translations";
import { DocSectionNav } from "@/components/content/DocSectionNav";
import { EditorialMeta } from "@/components/seo/EditorialMeta";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbs } from "@/lib/content-utils";
import { getPageContent } from "@/lib/content/types";
import { content } from "@/lib/content/terms";
import { siteConfig } from "@/content/site-config";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["terms"];

  return {
    title: pageDict?.title || "terms",
    description: pageDict?.description || "",
    alternates: buildAlternates(locale, "terms"),
    openGraph: {
      title: pageDict?.title || "Terms of Service",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const pc = getPageContent(content, validLocale);
  const pageDict = dict.pages.terms;
  const dateModified = "2026-03-18";
  const tocItems = [
    { id: "acceptance-of-terms", label: pc.body.heading1 },
    { id: "description-of-service", label: pc.body.heading2 },
    { id: "use-of-services", label: pc.body.heading3 },
    { id: "accuracy-of-information", label: pc.body.heading4 },
    { id: "intellectual-property", label: pc.body.heading5 },
    { id: "disclaimer-of-warranties", label: pc.body.heading6 },
    { id: "limitation-of-liability", label: pc.body.heading7 },
    { id: "third-party-content-and-links", label: pc.body.heading8 },
    { id: "advertising", label: pc.body.heading9 },
    { id: "privacy", label: pc.body.heading10 },
    { id: "modifications-to-terms", label: pc.body.heading11 },
    { id: "termination", label: pc.body.heading12 },
    { id: "governing-law", label: pc.body.heading13 },
    { id: "contact", label: pc.body.heading14 },
  ];

  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "terms", href: "/terms" },
  ]);
  const termsPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageDict?.title || "Terms of Service",
    description: pageDict?.description || "",
    url: `${siteConfig.url}${localizedPath(validLocale, "terms")}`,
    inLanguage: validLocale,
    dateModified,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
  };

  return (
    <Container className="py-8 md:py-12">
      <JsonLd data={termsPageJsonLd} />
      <Breadcrumbs items={breadcrumbs} />

      <div className="mx-auto max-w-3xl">
        <h1 className="mb-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          {pageDict?.title || "Terms of Service"}
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-neutral-600">
          {pageDict?.extractive || dict.site.description}
        </p>

        <EditorialMeta locale={validLocale} dateModified={dateModified} />
        <p className="mt-4 text-sm text-neutral-500">{pc.body.lastUpdated}</p>
        <DocSectionNav items={tocItems} label={dict.nav.onThisPage} />

        <div className="prose prose-neutral mt-8 max-w-none">
          <h2 id="acceptance-of-terms">{pc.body.heading1}</h2>
          <p>{pc.body.p1}</p>

          <h2 id="description-of-service">{pc.body.heading2}</h2>
          <p>{pc.body.p2}</p>

          <h2 id="use-of-services">{pc.body.heading3}</h2>
          <p>{pc.body.p3}</p>
          <ul>
            <li>{pc.body.li1}</li>
            <li>{pc.body.li2}</li>
            <li>{pc.body.li3}</li>
            <li>{pc.body.li4}</li>
            <li>{pc.body.li5}</li>
          </ul>

          <h2 id="accuracy-of-information">{pc.body.heading4}</h2>
          <p>{pc.body.p4}</p>

          <h2 id="intellectual-property">{pc.body.heading5}</h2>
          <p>{pc.body.p5}</p>

          <h2 id="disclaimer-of-warranties">{pc.body.heading6}</h2>
          <p>{pc.body.p6}</p>

          <h2 id="limitation-of-liability">{pc.body.heading7}</h2>
          <p>{pc.body.p7}</p>

          <h2 id="third-party-content-and-links">{pc.body.heading8}</h2>
          <p>{pc.body.p8}</p>

          <h2 id="advertising">{pc.body.heading9}</h2>
          <p>{pc.body.p9}</p>

          <h2 id="privacy">{pc.body.heading10}</h2>
          <p>{pc.body.p10}</p>

          <h2 id="modifications-to-terms">{pc.body.heading11}</h2>
          <p>{pc.body.p11}</p>

          <h2 id="termination">{pc.body.heading12}</h2>
          <p>{pc.body.p12}</p>

          <h2 id="governing-law">{pc.body.heading13}</h2>
          <p>{pc.body.p13}</p>

          <h2 id="contact">{pc.body.heading14}</h2>
          <p>{pc.body.p14}</p>
        </div>

        <section className="mt-10 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
          <h2 className="text-xl font-semibold text-neutral-900">Need clarification?</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600">
            If you need help understanding how these terms apply to a calculator, guide, or
            browser-based tool on FeetToPixels, contact us and mention the page you were using.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={localizeHref(validLocale, "/contact")}
              className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:border-primary-300 hover:text-primary-700"
            >
              Contact FeetToPixels
            </Link>
            <Link
              href={localizeHref(validLocale, "/privacy")}
              className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:border-primary-300 hover:text-primary-700"
            >
              Privacy policy
            </Link>
          </div>
        </section>
      </div>
    </Container>
  );
}
