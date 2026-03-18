import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { RelatedTools } from "./RelatedTools";
import { FAQ } from "./FAQ";

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
  locale?: string;
}

function prefixHref(href: string, locale?: string): string {
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
}: ConverterLayoutProps) {
  const localizedBreadcrumbs = breadcrumbs.map((b) => ({
    ...b,
    href: prefixHref(b.href, locale),
  }));

  const localizedRelatedTools = relatedTools.map((t) => ({
    ...t,
    href: prefixHref(t.href, locale),
  }));

  const localizedSlug = prefixHref(slug, locale);

  return (
    <Container className="py-8 md:py-12">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: title,
          description: description,
          url: `https://feettopixels.com${localizedSlug}`,
          applicationCategory: "UtilityApplication",
          operatingSystem: "Any",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
        }}
      />
      <Breadcrumbs items={localizedBreadcrumbs} />

      <h1 className="mb-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
        {title}
      </h1>

      <p className="mb-8 max-w-2xl text-base leading-relaxed text-neutral-600">
        {extractiveAnswer}
      </p>

      <div className="mb-12">{children}</div>

      <div className="prose prose-neutral max-w-none">{content}</div>

      <RelatedTools tools={localizedRelatedTools} />

      <FAQ items={faqItems} />
    </Container>
  );
}
