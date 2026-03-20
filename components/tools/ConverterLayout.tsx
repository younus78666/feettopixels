import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { EditorialMeta } from "@/components/seo/EditorialMeta";
import { JsonLd } from "@/components/seo/JsonLd";
import { ReferenceSources } from "@/components/seo/ReferenceSources";
import { RelatedTools } from "./RelatedTools";
import { FAQ } from "./FAQ";
import { getDictionary } from "@/lib/translations";
import type { Locale } from "@/lib/i18n";
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
  content: React.ReactNode;
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

function prefixHref(href: string, locale?: Locale): string {
  if (!locale) return href;
  if (href === "/") return `/${locale}`;
  return `/${locale}${href}`;
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
  const tocItems =
    locale === "en" || !locale
      ? [
          { id: "calculator", label: "Calculator" },
          { id: "guide", label: "Guide" },
          {
            id: "related-tools",
            label: labels?.relatedTools || dict?.tool.relatedTools || "Related Tools",
          },
          { id: "reference-sources", label: "Reference Sources" },
          { id: "faq", label: labels?.faq || dict?.tool.faq || "Frequently Asked Questions" },
        ]
      : [];

  return (
    <Container className="py-8 md:py-12">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "@id": `${siteConfig.url}${localizedSlug}/#tool`,
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
          isPartOf: {
            "@type": "WebSite",
            "@id": `${siteConfig.url}/#website`,
          },
        }}
      />
      {faqItems.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: [".faq-question", ".faq-answer"],
            },
          }}
        />
      )}
      {extractiveAnswer && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: `How to use ${title}`,
            description: extractiveAnswer,
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

      <h1 className="mb-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
        {title}
      </h1>

      <p className="mb-8 max-w-2xl text-base leading-relaxed text-neutral-600">
        {extractiveAnswer}
      </p>

      <EditorialMeta locale={locale} dateModified={dateModified} />

      {tocItems.length > 0 && (
        <nav
          aria-label="On this page"
          className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50/70 p-4"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-700">
            On this page
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

      <div id="calculator" className="mb-12 mt-8">
        {children}
      </div>

      <div id="guide" className="prose prose-neutral max-w-none">
        {content}
      </div>

      <RelatedTools
        tools={localizedRelatedTools}
        label={labels?.relatedTools || dict?.tool.relatedTools}
      />

      {(locale === "en" || !locale) && (
        <ReferenceSources sources={getReferenceSources(slug.replace(/^\//, ""))} />
      )}

      <FAQ items={faqItems} label={labels?.faq || dict?.tool.faq} />
    </Container>
  );
}
