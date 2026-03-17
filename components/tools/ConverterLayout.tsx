import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
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
  extractiveAnswer: string;
  children: React.ReactNode;
  content: React.ReactNode;
  relatedTools: RelatedTool[];
  faqItems: FAQItem[];
  breadcrumbs: BreadcrumbItem[];
}

export function ConverterLayout({
  title,
  extractiveAnswer,
  children,
  content,
  relatedTools,
  faqItems,
  breadcrumbs,
}: ConverterLayoutProps) {
  return (
    <Container className="py-8 md:py-12">
      <Breadcrumbs items={breadcrumbs} />

      <h1 className="mb-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
        {title}
      </h1>

      <p className="mb-8 max-w-2xl text-base leading-relaxed text-neutral-600">
        {extractiveAnswer}
      </p>

      <div className="mb-12">{children}</div>

      <div className="prose prose-neutral max-w-none">{content}</div>

      <RelatedTools tools={relatedTools} />

      <FAQ items={faqItems} />
    </Container>
  );
}
