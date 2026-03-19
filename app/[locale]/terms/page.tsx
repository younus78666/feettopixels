import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { getBreadcrumbs } from "@/lib/content-utils";
import { getPageContent } from "@/lib/content/types";
import { content } from "@/lib/content/terms";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["terms"];

  return {
    title: pageDict?.title || "terms",
    description: pageDict?.description || "",
    alternates: {
      canonical: `/${locale}/terms`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/terms`]),
      ),
    },
    openGraph: {
      title: pageDict?.title || "Terms of Service",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const pc = getPageContent(content, validLocale);

  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "terms", href: "/terms" },
  ]);

  return (
    <Container className="py-8 md:py-12">
      <Breadcrumbs items={breadcrumbs} />

      <div className="mx-auto max-w-3xl">
        <h1 className="mb-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          {dict.pages["terms"]?.title || "Terms of Service"}
        </h1>
        <p className="mb-8 text-sm text-neutral-500">{pc.body.lastUpdated}</p>

        <div className="prose prose-neutral max-w-none">
          <h2>{pc.body.heading1}</h2>
          <p>{pc.body.p1}</p>

          <h2>{pc.body.heading2}</h2>
          <p>{pc.body.p2}</p>

          <h2>{pc.body.heading3}</h2>
          <p>{pc.body.p3}</p>
          <ul>
            <li>{pc.body.li1}</li>
            <li>{pc.body.li2}</li>
            <li>{pc.body.li3}</li>
            <li>{pc.body.li4}</li>
            <li>{pc.body.li5}</li>
          </ul>

          <h2>{pc.body.heading4}</h2>
          <p>{pc.body.p4}</p>

          <h2>{pc.body.heading5}</h2>
          <p>{pc.body.p5}</p>

          <h2>{pc.body.heading6}</h2>
          <p>{pc.body.p6}</p>

          <h2>{pc.body.heading7}</h2>
          <p>{pc.body.p7}</p>

          <h2>{pc.body.heading8}</h2>
          <p>{pc.body.p8}</p>

          <h2>{pc.body.heading9}</h2>
          <p>{pc.body.p9}</p>

          <h2>{pc.body.heading10}</h2>
          <p>{pc.body.p10}</p>

          <h2>{pc.body.heading11}</h2>
          <p>{pc.body.p11}</p>

          <h2>{pc.body.heading12}</h2>
          <p>{pc.body.p12}</p>

          <h2>{pc.body.heading13}</h2>
          <p>{pc.body.p13}</p>

          <h2>{pc.body.heading14}</h2>
          <p>{pc.body.p14}</p>
        </div>
      </div>
    </Container>
  );
}
