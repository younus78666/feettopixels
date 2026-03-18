import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FAQ } from "@/components/tools/FAQ";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/content/site-config";

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
  locale?: string;
}

function prefixHref(href: string, locale?: string): string {
  if (!locale) return href;
  if (href === "/") return `/${locale}`;
  return `/${locale}${href}`;
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
  datePublished = "2026-03-18",
  dateModified = "2026-03-18",
  slug,
  locale,
}: BlogLayoutProps) {
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

  const localizedSlug = locale ? `${locale}/${slug}` : slug;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: extractiveAnswer,
    datePublished,
    dateModified,
    url: `${siteConfig.url}/${localizedSlug}`,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/${localizedSlug}`,
    },
  };

  return (
    <Container className="py-8 md:py-12">
      <JsonLd data={articleJsonLd} />
      <Breadcrumbs items={localizedBreadcrumbs} />

      <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12">
        {/* Main content */}
        <div className="min-w-0">
          <h1 className="mb-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            {title}
          </h1>

          {/* Extractive answer box */}
          <div className="mb-8 rounded-xl border border-primary-200 bg-primary-50 px-5 py-4">
            <p className="text-sm font-medium text-primary-900 leading-relaxed">
              {extractiveAnswer}
            </p>
          </div>

          {/* Prose content */}
          <div className="prose prose-neutral max-w-none">
            {children}
          </div>

          {/* CTA */}
          <div className="mt-10 rounded-xl border border-primary-200 bg-primary-50 p-6 text-center">
            <p className="mb-3 text-base font-semibold text-neutral-900">
              Ready to convert?
            </p>
            <Link
              href={localizedCta.href}
              className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-700"
            >
              {localizedCta.label}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          {/* Related articles */}
          <div className="mt-12">
            <h2 className="mb-6 text-2xl font-semibold text-neutral-900">
              Related Articles
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
          </div>

          {/* FAQ */}
          <FAQ items={faqItems} />
        </div>

        {/* Table of contents sidebar (desktop) */}
        <aside className="hidden lg:block">
          <nav className="sticky top-24" aria-label="Table of contents">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">
              On this page
            </p>
            <ul className="space-y-2 border-l border-neutral-200 pl-4">
              {toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block text-sm text-neutral-500 transition-colors hover:text-primary-600"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </Container>
  );
}
