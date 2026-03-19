import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import { StructuredDoc } from "@/components/content/StructuredDoc";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { getBreadcrumbs } from "@/lib/content-utils";
import { getLocalizedDoc } from "@/lib/content/doc-types";
import { content } from "@/lib/content/privacy";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["privacy"];

  return {
    title: pageDict?.title || "privacy",
    description: pageDict?.description || "",
    alternates: {
      canonical: `/${locale}/privacy`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/privacy`]),
      ),
    },
    openGraph: {
      title: pageDict?.title || "Privacy Policy",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}

export default async function PrivacyPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const doc = getLocalizedDoc(content, validLocale);

  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "privacy", href: "/privacy" },
  ]);
  return (
    <Container className="py-8 md:py-12">
      <Breadcrumbs items={breadcrumbs} />

      <div className="mx-auto max-w-3xl">
        <h1 className="mb-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          {dict.pages["privacy"]?.title || "Privacy Policy"}
        </h1>

        <div className="prose prose-neutral max-w-none">
          <StructuredDoc sections={doc.sections} />
        </div>
      </div>
    </Container>
  );
}
