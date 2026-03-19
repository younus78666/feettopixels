import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { StructuredDoc } from "@/components/content/StructuredDoc";
import { siteConfig } from "@/content/site-config";
import { getBreadcrumbs } from "@/lib/content-utils";
import { getLocalizedDoc } from "@/lib/content/doc-types";
import { content } from "@/lib/content/about";

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
    alternates: {
      canonical: `/${locale}/about`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/about`]),
      ),
    },
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

  return (
    <Container className="py-8 md:py-12">
      <JsonLd data={orgJsonLd} />
      <Breadcrumbs items={breadcrumbs} />

      <div className="mx-auto max-w-3xl">
        <h1 className="mb-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          {dict.pages["about"]?.title || "About FeetToPixels"}
        </h1>

        <div className="prose prose-neutral max-w-none">
          <StructuredDoc sections={doc.sections} />
        </div>

        <div className="mt-8 rounded-xl border border-primary-200 bg-primary-50 p-6 text-center">
          <p className="mb-3 text-base font-semibold text-neutral-900">
            {dict.tool.readyToConvert}
          </p>
          <Link
            href={`/${validLocale}/pixel-converter`}
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
