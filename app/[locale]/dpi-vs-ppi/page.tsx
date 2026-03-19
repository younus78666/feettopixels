import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import { BlogLayout } from "@/components/blog/BlogLayout";
import { getBreadcrumbs } from "@/lib/content-utils";
import { getPageContent } from "@/lib/content/types";
import { content } from "@/lib/content/dpi-vs-ppi";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["dpi-vs-ppi"];

  return {
    title: pageDict?.title || "dpi-vs-ppi",
    description: pageDict?.description || "",
    alternates: {
      canonical: `/${locale}/dpi-vs-ppi`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/dpi-vs-ppi`]),
      ),
    },
    openGraph: {
      title: pageDict?.title || "dpi-vs-ppi",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}

export default async function DpiVsPpiPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const pc = getPageContent(content, validLocale);
  const toc = [
    { id: "quick-answer", label: pc.body.heading1 },
    { id: "comparison-table", label: pc.body.heading2 },
    { id: "when-dpi-applies", label: pc.body.heading3 },
    { id: "when-ppi-applies", label: pc.body.heading4 },
    { id: "common-confusion", label: pc.body.heading5 },
  ];

  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "dpi-vs-ppi", href: "/dpi-vs-ppi" },
  ]);

  const relatedArticles = [
    {
      title: dict.pages["what-is-dpi"]?.title || "What Is DPI?",
      href: "/what-is-dpi",
      description:
        dict.navDescriptions["what-is-dpi"] ||
        "Full DPI guide for print and screen",
    },
    {
      title: dict.pages["what-is-ppi"]?.title || "What Is PPI?",
      href: "/what-is-ppi",
      description:
        dict.navDescriptions["what-is-ppi"] || "PPI for screens and displays",
    },
    {
      title:
        dict.pages["best-dpi-for-printing"]?.title ||
        "Best DPI for Printing",
      href: "/best-dpi-for-printing",
      description:
        dict.navDescriptions["best-dpi-for-printing"] ||
        "DPI recommendations by print type",
    },
    {
      title: dict.pages["best-dpi-for-web"]?.title || "Best DPI for Web",
      href: "/best-dpi-for-web",
      description:
        dict.navDescriptions["best-dpi-for-web"] ||
        "Why DPI doesn't matter online",
    },
  ];

  return (
    <BlogLayout
      locale={validLocale}
      title={
        dict.pages["dpi-vs-ppi"]?.title || "DPI vs PPI: What's the Difference?"
      }
      extractiveAnswer={
        dict.pages["dpi-vs-ppi"]?.extractive ||
        "DPI (dots per inch) measures printer resolution - how many ink dots per inch. PPI (pixels per inch) measures screen or image pixel density. DPI applies to physical printing, PPI applies to digital displays. They are related but not identical concepts."
      }
      breadcrumbs={breadcrumbs}
      faqItems={pc.faq}
      relatedArticles={relatedArticles}
      cta={{
        label: dict.pages["dpi-calculator"]?.title || "DPI Calculator",
        href: "/dpi-calculator",
      }}
      toc={toc}
      labels={{
        readyToConvert: dict.tool.readyToConvert,
        relatedArticles: dict.tool.relatedArticles,
        onThisPage: dict.nav.onThisPage,
      }}
      slug="dpi-vs-ppi"
    >
      <h2 id="quick-answer">{pc.body.heading1}</h2>
      <p>{pc.body.p1}</p>

      <h2 id="comparison-table">{pc.body.heading2}</h2>
      <table>
        <thead>
          <tr>
            <th>{pc.body.th1}</th>
            <th>{pc.body.th2}</th>
            <th>{pc.body.th3}</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>{pc.body.td1_1}</td><td>{pc.body.td1_2}</td><td>{pc.body.td1_3}</td></tr>
          <tr><td>{pc.body.td2_1}</td><td>{pc.body.td2_2}</td><td>{pc.body.td2_3}</td></tr>
          <tr><td>{pc.body.td3_1}</td><td>{pc.body.td3_2}</td><td>{pc.body.td3_3}</td></tr>
          <tr><td>{pc.body.td4_1}</td><td>{pc.body.td4_2}</td><td>{pc.body.td4_3}</td></tr>
          <tr><td>{pc.body.td5_1}</td><td>{pc.body.td5_2}</td><td>{pc.body.td5_3}</td></tr>
          <tr><td>{pc.body.td6_1}</td><td>{pc.body.td6_2}</td><td>{pc.body.td6_3}</td></tr>
          <tr><td>{pc.body.td7_1}</td><td>{pc.body.td7_2}</td><td>{pc.body.td7_3}</td></tr>
        </tbody>
      </table>

      <h2 id="when-dpi-applies">{pc.body.heading3}</h2>
      <p>{pc.body.p2}</p>
      <p>{pc.body.p3}</p>

      <h2 id="when-ppi-applies">{pc.body.heading4}</h2>
      <p>{pc.body.p4}</p>

      <h2 id="common-confusion">{pc.body.heading5}</h2>
      <p>{pc.body.p5}</p>
      <p>{pc.body.p6}</p>
    </BlogLayout>
  );
}
