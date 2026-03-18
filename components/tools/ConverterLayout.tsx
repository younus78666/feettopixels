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
  labels?: {
    relatedTools: string;
    faq: string;
  };
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
  labels,
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
          "@id": `https://feettopixels.com${localizedSlug}/#tool`,
          name: title,
          description: description,
          url: `https://feettopixels.com${localizedSlug}`,
          inLanguage: locale || "en",
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
            "@id": "https://feettopixels.com/#organization",
            name: "FeetToPixels",
          },
          isPartOf: {
            "@type": "WebSite",
            "@id": "https://feettopixels.com/#website",
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

      <div className="mb-12">{children}</div>

      <div className="prose prose-neutral max-w-none">{content}</div>

      <RelatedTools tools={localizedRelatedTools} label={labels?.relatedTools} />

      <FAQ items={faqItems} label={labels?.faq} />
    </Container>
  );
}
