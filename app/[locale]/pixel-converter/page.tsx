import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { StructuredDoc } from "@/components/content/StructuredDoc";
import { Container } from "@/components/ui/Container";
import { content } from "@/lib/content/pixel-converter";
import { getLocalizedDoc } from "@/lib/content/doc-types";
import { getBreadcrumbs } from "@/lib/content-utils";
import { isValidLocale, locales, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
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

  return (
    <Container className="py-8 md:py-12">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: pageDict?.title || "Pixel Converter",
          description: pageDict?.description || "",
          url: `${siteConfig.url}/${validLocale}/pixel-converter`,
          inLanguage: validLocale,
        }}
      />
      <Breadcrumbs items={breadcrumbs} />

      <h1 className="mb-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
        {pageDict?.title || "Pixel Converter"}
      </h1>
      <p className="mb-8 max-w-2xl text-base leading-relaxed text-neutral-600">
        {pageDict?.extractive ||
          "Convert between pixels and physical units with DPI awareness. Select a conversion below or use the quick converter to get instant results."}
      </p>

      <div className="mb-12">
        <PixelConverterHub locale={validLocale} />
      </div>

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
            <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-sm font-semibold tracking-wide text-primary-700 transition-colors group-hover:bg-primary-100">
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

      <div className="prose prose-neutral mt-12 max-w-none">
        <StructuredDoc sections={doc.sections} />
      </div>
    </Container>
  );
}
