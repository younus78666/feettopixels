import Link from "next/link";
import { isValidElement } from "react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { EditorialMeta } from "@/components/seo/EditorialMeta";
import { FAQ } from "@/components/tools/FAQ";
import { JsonLd } from "@/components/seo/JsonLd";
import { ReferenceSources } from "@/components/seo/ReferenceSources";
import { HelpfulContentNotes } from "@/components/content/HelpfulContentNotes";
import { siteConfig } from "@/content/site-config";
import { getDictionary } from "@/lib/translations";
import type { Locale } from "@/lib/i18n";
import { localizedPath, localizeHref } from "@/lib/alternates";
import { DEFAULT_PAGE_DATE, getReferenceSources } from "@/lib/page-seo";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface RelatedArticle {
  title: string;
  href: string;
  description: string;
}

interface CTAProps {
  label: string;
  href: string;
}

interface TableOfContentsItem {
  id: string;
  label: string;
}

interface BlogLayoutProps {
  title: string;
  extractiveAnswer: string;
  breadcrumbs: BreadcrumbItem[];
  faqItems: FAQItem[];
  relatedArticles: RelatedArticle[];
  cta: CTAProps;
  children: React.ReactNode;
  toc: TableOfContentsItem[];
  datePublished?: string;
  dateModified?: string;
  slug: string;
  locale?: Locale;
  labels?: {
    readyToConvert: string;
    relatedArticles: string;
    onThisPage: string;
    faq?: string;
  };
}

function prefixHref(href: string, locale?: Locale): string {
  if (!locale) return href;
  return localizeHref(locale, href);
}

function hasRenderableArticleContent(content: React.ReactNode): boolean {
  if (isValidElement<{ sections?: unknown[] }>(content)) {
    const sections = content.props?.sections;
    if (Array.isArray(sections)) {
      return sections.length > 0;
    }
  }

  return Boolean(content);
}

export function BlogLayout({
  title,
  extractiveAnswer,
  breadcrumbs,
  faqItems,
  relatedArticles,
  cta,
  children,
  toc,
  datePublished = DEFAULT_PAGE_DATE,
  dateModified = DEFAULT_PAGE_DATE,
  slug,
  locale,
  labels,
}: BlogLayoutProps) {
  const dict = locale ? getDictionary(locale) : null;
  const localizedBreadcrumbs = breadcrumbs.map((b) => ({
    ...b,
    href: prefixHref(b.href, locale),
  }));

  const localizedRelatedArticles = relatedArticles.map((a) => ({
    ...a,
    href: prefixHref(a.href, locale),
  }));

  const localizedCta = {
    ...cta,
    href: prefixHref(cta.href, locale),
  };

  const pageLocale = locale || "en";
  const pageUrl = `${siteConfig.url}${localizedPath(pageLocale, slug)}`;
  const relatedArticlesLabel =
    labels?.relatedArticles || dict?.tool.relatedArticles || "Related Articles";
  const onThisPageLabel =
    labels?.onThisPage || dict?.nav.onThisPage || "On this page";
  const readyToConvertLabel =
    labels?.readyToConvert || dict?.tool.readyToConvert || "Ready to convert?";
  const hasArticleContent = hasRenderableArticleContent(children);
  const resolvedToc =
    toc.length > 0
      ? toc
      : [
          { id: "overview", label: "Overview" },
          { id: "why-this-matters", label: "Why This Matters" },
          { id: "next-steps", label: "Next Steps" },
        ];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: title,
    description: extractiveAnswer,
    datePublished,
    dateModified,
    url: pageUrl,
    inLanguage: pageLocale,
    author: {
      "@type": "Organization",
      name: "FeetToPixels Editorial Team",
      url: `${siteConfig.url}${localizeHref(pageLocale, "/about")}`,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
    },
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: title,
    description: extractiveAnswer,
    inLanguage: pageLocale,
    datePublished,
    dateModified,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    mainEntity: {
      "@id": `${pageUrl}#article`,
    },
  };

  const relatedArticlesJsonLd =
    localizedRelatedArticles.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: localizedRelatedArticles.map((article, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: article.title,
            url: `${siteConfig.url}${article.href}`,
          })),
        }
      : null;

  return (
    <Container className="py-8 md:py-12">
      <JsonLd data={webPageJsonLd} />
      <JsonLd data={articleJsonLd} />
      {relatedArticlesJsonLd && <JsonLd data={relatedArticlesJsonLd} />}
      <Breadcrumbs items={localizedBreadcrumbs} />

      <section className="relative overflow-hidden rounded-[32px] border border-neutral-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.95))] p-6 shadow-[0_24px_70px_-46px_rgba(15,23,42,0.38)] sm:p-8">
        <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_68%)]" />
        <div className="absolute -left-8 top-8 h-32 w-32 rounded-full bg-primary-100/80 blur-3xl" />
        <div className="absolute -right-8 top-6 h-40 w-40 rounded-full bg-sky-100/70 blur-3xl" />

        <div className="relative lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-8 lg:items-start">
          <div className="min-w-0">
            <p className="inline-flex rounded-full border border-primary-200 bg-white/85 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary-700 shadow-soft">
              {dict?.nav.learn || "Learn"}
            </p>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold tracking-[-0.05em] text-neutral-950 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.04]">
              {title}
            </h1>

            <div className="mt-5 rounded-[24px] border border-primary-200 bg-primary-50/90 px-5 py-5 shadow-[0_16px_40px_-34px_rgba(20,184,166,0.3)]">
              <p className="text-base font-medium leading-relaxed text-primary-900">
                {extractiveAnswer}
              </p>
            </div>

            <EditorialMeta locale={locale} dateModified={dateModified} />

            {localizedRelatedArticles.length > 0 && (
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-700">
                  {relatedArticlesLabel}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {localizedRelatedArticles.slice(0, 4).map((article) => (
                    <Link
                      key={article.href}
                      href={article.href}
                      className="rounded-full border border-neutral-200 bg-white/82 px-3 py-1.5 text-sm font-medium text-neutral-600 transition-colors hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700"
                    >
                      {article.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="mt-6 lg:mt-0">
            <div className="rounded-[28px] border border-neutral-200/80 bg-white/88 p-5 shadow-[0_18px_45px_-34px_rgba(15,23,42,0.28)]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-700">
                {onThisPageLabel}
              </p>
              <ul className="mt-4 space-y-2 border-l border-neutral-200 pl-4">
                {resolvedToc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="block text-sm leading-6 text-neutral-600 transition-colors hover:text-primary-700"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-5 rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                <p className="text-sm font-semibold text-neutral-900">
                  {readyToConvertLabel}
                </p>
                <Link
                  href={localizedCta.href}
                  className="mt-3 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-900"
                >
                  {localizedCta.label}
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <div className="mt-10 min-w-0">
        <div className="rounded-[30px] border border-neutral-200/80 bg-white/92 p-6 shadow-[0_18px_48px_-38px_rgba(15,23,42,0.28)] sm:p-8">
          <section
            id="overview"
            className="rounded-[24px] border border-primary-100 bg-primary-50/70 p-5 shadow-[0_16px_40px_-34px_rgba(20,184,166,0.24)]"
          >
            <h2 className="text-2xl font-semibold text-neutral-900">Overview</h2>
            <p className="mt-3 text-base leading-relaxed text-neutral-700">
              {extractiveAnswer}
            </p>
          </section>

          {hasArticleContent ? (
            <div className="prose prose-neutral mt-8 max-w-none">
              {children}
              {locale === "en" && (
                <HelpfulContentNotes
                  title={title}
                  summary={extractiveAnswer}
                  slug={slug}
                  type="article"
                />
              )}
            </div>
          ) : (
            <div className="prose prose-neutral mt-8 max-w-none">
              <h2 id="why-this-matters">Why This Matters</h2>
              <p>
                This page is here to answer the question quickly, then help you
                move into the right tool, chart, or follow-up guide without having
                to search around the site. Use the summary above as the short answer
                and the links below when you need the next practical step.
              </p>

              <h2 id="next-steps">Next Steps</h2>
              <ul>
                <li>
                  Open the recommended tool for a live calculation or quick check.
                </li>
                <li>
                  Compare the related guides if you need context before choosing a
                  size, DPI, or unit.
                </li>
                <li>
                  Use the FAQ below for the most common edge cases and follow-up
                  questions.
                </li>
              </ul>

              {localizedRelatedArticles.length > 0 && (
                <>
                  <h2 id="related-reading">Related Reading</h2>
                  <ul>
                    {localizedRelatedArticles.slice(0, 4).map((article) => (
                      <li key={article.href}>
                        <Link href={article.href}>{article.title}</Link>
                        {article.description ? ` - ${article.description}` : ""}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {locale === "en" && (
                <HelpfulContentNotes
                  title={title}
                  summary={extractiveAnswer}
                  slug={slug}
                  type="article"
                />
              )}
            </div>
          )}
        </div>

        <section id="related-articles" className="mt-12">
          <h2 className="mb-6 text-2xl font-semibold text-neutral-900">
            {relatedArticlesLabel}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {localizedRelatedArticles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="tool-card group"
              >
                <p className="text-sm font-semibold text-neutral-900 group-hover:text-primary-700">
                  {article.title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-neutral-500">
                  {article.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {locale === "en" && <ReferenceSources sources={getReferenceSources(slug)} />}

        <FAQ items={faqItems} label={labels?.faq || dict?.tool.faq} />
      </div>
    </Container>
  );
}
