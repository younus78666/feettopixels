import Link from "next/link";
import { isValidElement } from "react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { EditorialMeta } from "@/components/seo/EditorialMeta";
import { JsonLd } from "@/components/seo/JsonLd";
import { ReferenceSources } from "@/components/seo/ReferenceSources";
import { HelpfulContentNotes } from "@/components/content/HelpfulContentNotes";
import { RelatedTools } from "./RelatedTools";
import { FAQ } from "./FAQ";
import { getDictionary } from "@/lib/translations";
import type { Locale } from "@/lib/i18n";
import { localizeHref } from "@/lib/alternates";
import { DEFAULT_PAGE_DATE, getReferenceSources } from "@/lib/page-seo";
import { siteConfig } from "@/content/site-config";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface RelatedTool {
  name: string;
  description: string;
  href: string;
  icon: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface ConverterLayoutProps {
  title: string;
  description: string;
  slug: string;
  extractiveAnswer: string;
  children: React.ReactNode;
  content?: React.ReactNode;
  relatedTools: RelatedTool[];
  faqItems: FAQItem[];
  breadcrumbs: BreadcrumbItem[];
  locale?: Locale;
  datePublished?: string;
  dateModified?: string;
  labels?: {
    relatedTools: string;
    faq: string;
  };
}

const cssToolSlugs = new Set(["px-to-rem", "px-to-em", "px-to-pt", "px-to-vw"]);

const physicalToolSlugs = new Set([
  "pixels-to-inches",
  "inches-to-pixels",
  "pixels-to-cm",
  "cm-to-pixels",
  "pixels-to-mm",
  "mm-to-pixels",
  "feet-to-pixels",
  "pixels-to-feet",
]);

function normalizeSlug(slug: string): string {
  return slug.replace(/^\/|\/$/g, "");
}

function prefixHref(href: string, locale?: Locale): string {
  if (!locale) return href;
  return localizeHref(locale, href);
}

function hasRenderableContent(content: React.ReactNode): boolean {
  if (isValidElement<{ sections?: unknown[] }>(content)) {
    const sections = content.props?.sections;
    if (Array.isArray(sections)) {
      return sections.length > 0;
    }
  }

  return Boolean(content);
}

export function ConverterLayout({
  title,
  description,
  slug,
  extractiveAnswer,
  children,
  content,
  relatedTools,
  faqItems,
  breadcrumbs,
  locale,
  datePublished = DEFAULT_PAGE_DATE,
  dateModified = DEFAULT_PAGE_DATE,
  labels,
}: ConverterLayoutProps) {
  const dict = locale ? getDictionary(locale) : null;
  const localizedBreadcrumbs = breadcrumbs.map((b) => ({
    ...b,
    href: prefixHref(b.href, locale),
  }));

  const localizedRelatedTools = relatedTools.map((t) => ({
    ...t,
    href: prefixHref(t.href, locale),
  }));

  const localizedSlug = prefixHref(slug, locale);
  const normalizedSlug = normalizeSlug(slug);
  const heroSummary = extractiveAnswer || description;
  const relatedToolLabel =
    labels?.relatedTools || dict?.tool.relatedTools || "Related Tools";
  const faqLabel = labels?.faq || dict?.tool.faq || "Frequently Asked Questions";
  const toolCategoryLabel = cssToolSlugs.has(normalizedSlug)
    ? dict?.categories.css || "CSS Converters"
    : physicalToolSlugs.has(normalizedSlug)
      ? dict?.categories.physical || "Physical Converters"
      : dict?.categories.calculators || dict?.nav.tools || "Tools";
  const browseToolsHref = prefixHref("/pixel-converter", locale);
  const secondaryHeroTool = localizedRelatedTools[0];
  const hasGuideContent = hasRenderableContent(content);
  const tocItems =
    locale === "en" || !locale
      ? [
          { id: "calculator", label: "Calculator" },
          { id: "overview", label: "Overview" },
          {
            id: "related-tools",
            label: relatedToolLabel,
          },
          { id: "reference-sources", label: "Reference Sources" },
          { id: "faq", label: faqLabel },
        ]
      : [];
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}${localizedSlug}#webpage`,
    url: `${siteConfig.url}${localizedSlug}`,
    name: title,
    description: heroSummary,
    inLanguage: locale || "en",
    datePublished,
    dateModified,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    mainEntity: {
      "@id": `${siteConfig.url}${localizedSlug}#tool`,
    },
  };

  return (
    <Container className="py-8 md:py-12">
      <JsonLd data={webPageJsonLd} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "@id": `${siteConfig.url}${localizedSlug}#tool`,
          name: title,
          description: description,
          url: `${siteConfig.url}${localizedSlug}`,
          inLanguage: locale || "en",
          datePublished,
          dateModified,
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
            name: "FeetToPixels",
          },
          mainEntityOfPage: {
            "@id": `${siteConfig.url}${localizedSlug}#webpage`,
          },
          featureList: localizedRelatedTools.slice(0, 4).map((tool) => tool.name),
          isPartOf: {
            "@type": "WebSite",
            "@id": `${siteConfig.url}/#website`,
          },
        }}
      />
      {heroSummary && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: `How to use ${title}`,
            description: heroSummary,
            step: [
              {
                "@type": "HowToStep",
                name: "Enter your value",
                text: "Type the value you want to convert in the input field.",
              },
              {
                "@type": "HowToStep",
                name: "Set DPI (if applicable)",
                text: "Choose your target DPI setting for accurate conversion.",
              },
              {
                "@type": "HowToStep",
                name: "Get your result",
                text: "The converted value appears instantly. Click copy to use it.",
              },
            ],
            tool: {
              "@type": "HowToTool",
              name: "FeetToPixels Online Converter",
            },
          }}
        />
      )}
      <Breadcrumbs items={localizedBreadcrumbs} />

      <section className="relative overflow-hidden rounded-[32px] border border-neutral-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.95))] p-6 shadow-[0_24px_70px_-46px_rgba(15,23,42,0.38)] sm:p-8">
        <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_68%)]" />
        <div className="absolute -left-10 top-10 h-28 w-28 rounded-full bg-primary-100/80 blur-3xl" />
        <div className="absolute -right-8 top-8 h-36 w-36 rounded-full bg-sky-100/70 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-center">
          <div id="calculator" className="order-1">
            <div className="rounded-[28px] border border-white/80 bg-white/92 p-4 shadow-[0_18px_45px_-34px_rgba(15,23,42,0.34)] backdrop-blur sm:p-5">
              {children}
            </div>
          </div>

          <div className="order-2">
            <p className="inline-flex rounded-full border border-primary-200 bg-white/85 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary-700 shadow-soft">
              {toolCategoryLabel}
            </p>
            <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-[-0.05em] text-neutral-950 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.04]">
              {title}
            </h1>
            {heroSummary && (
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600">
                {heroSummary}
              </p>
            )}
            {description && description.trim() !== heroSummary.trim() && (
              <p className="mt-3 max-w-2xl text-base leading-7 text-neutral-500">
                {description}
              </p>
            )}

            <EditorialMeta locale={locale} dateModified={dateModified} />

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              {normalizedSlug !== "pixel-converter" && (
                <Link
                  href={browseToolsHref}
                  className="inline-flex h-11 items-center justify-center rounded-full bg-neutral-950 px-5 text-sm font-medium text-white shadow-[0_18px_40px_-26px_rgba(15,23,42,0.75)] transition-transform hover:-translate-y-0.5 hover:bg-neutral-900"
                >
                  {dict?.home.browseTools || "Browse All Tools"}
                </Link>
              )}
              {secondaryHeroTool && (
                <Link
                  href={secondaryHeroTool.href}
                  className="inline-flex h-11 items-center justify-center rounded-full border border-neutral-300 bg-white/72 px-5 text-sm font-medium text-neutral-700 transition-colors hover:border-primary-300 hover:text-primary-700"
                >
                  {secondaryHeroTool.name}
                </Link>
              )}
            </div>

            {localizedRelatedTools.length > 0 && (
              <div className="mt-6 rounded-[24px] border border-neutral-200/80 bg-white/78 p-5 shadow-[0_16px_40px_-34px_rgba(15,23,42,0.28)]">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-700">
                  {relatedToolLabel}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {localizedRelatedTools.slice(0, 4).map((tool) => (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-sm font-medium text-neutral-600 transition-colors hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700"
                    >
                      {tool.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {tocItems.length > 0 && (
        <nav
          aria-label="On this page"
          className="mt-6 rounded-[28px] border border-neutral-200/80 bg-neutral-50/70 p-4"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-700">
            {dict?.nav.onThisPage || "On this page"}
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
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

      <div className="mt-10 rounded-[30px] border border-neutral-200/80 bg-white/92 p-6 shadow-[0_18px_48px_-38px_rgba(15,23,42,0.28)] sm:p-8">
        <section
          id="overview"
          className="rounded-[24px] border border-primary-100 bg-primary-50/70 p-5 shadow-[0_16px_40px_-34px_rgba(20,184,166,0.24)]"
        >
          <h2 className="text-2xl font-semibold text-neutral-900">
            {locale === "en" || !locale ? "Overview" : title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-neutral-700">
            {heroSummary}
          </p>
          {description && description.trim() !== heroSummary.trim() && (
            <p className="mt-3 text-sm leading-7 text-neutral-600">
              {description}
            </p>
          )}
        </section>

        {hasGuideContent ? (
          <div className="prose prose-neutral mt-8 max-w-none empty:hidden">
            {content}
            {(locale === "en" || !locale) && (
              <HelpfulContentNotes
                title={title}
                summary={heroSummary}
                slug={normalizedSlug}
                type="tool"
              />
            )}
          </div>
        ) : (
          <div className="prose prose-neutral mt-8 max-w-none">
            <h3 id="how-to-use-this-tool">How to use this tool</h3>
            <p>
              Start with the calculator above, enter the value you want to convert,
              choose the DPI or direction that matches your workflow, and review the
              result instantly. The tool updates in real time so you can test different
              values without leaving the page.
            </p>

            <h3 id="what-this-tool-answers">What this page helps you answer</h3>
            <p>
              {heroSummary} This page is designed to give you a fast answer first,
              then help you move into the right related tool or reference page if you
              need a second step.
            </p>

            {description && description.trim() !== heroSummary.trim() && (
              <p>{description}</p>
            )}

            {localizedRelatedTools.length > 0 && (
              <>
                <h3 id="next-steps">Helpful next steps</h3>
                <ul>
                  {localizedRelatedTools.slice(0, 4).map((tool) => (
                    <li key={tool.href}>
                      <Link href={tool.href}>{tool.name}</Link>
                      {tool.description ? ` - ${tool.description}` : ""}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {(locale === "en" || !locale) && (
              <HelpfulContentNotes
                title={title}
                summary={heroSummary}
                slug={normalizedSlug}
                type="tool"
              />
            )}
          </div>
        )}
      </div>

      <RelatedTools
        tools={localizedRelatedTools}
        label={relatedToolLabel}
      />

      {(locale === "en" || !locale) && (
        <ReferenceSources sources={getReferenceSources(slug.replace(/^\//, ""))} />
      )}

      <FAQ items={faqItems} label={faqLabel} />
    </Container>
  );
}
