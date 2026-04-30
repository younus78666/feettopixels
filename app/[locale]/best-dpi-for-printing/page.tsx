import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { buildAlternates, localizedPath } from "@/lib/alternates";
import { getDictionary } from "@/lib/translations";
import { BlogLayout } from "@/components/blog/BlogLayout";
import { getBreadcrumbs } from "@/lib/content-utils";
import { getPageContent } from "@/lib/content/types";
import { content } from "@/lib/content/best-dpi-for-printing";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["best-dpi-for-printing"];

  return {
    title: pageDict?.title || "best-dpi-for-printing",
    description: pageDict?.description || "",
    alternates: buildAlternates(locale, "best-dpi-for-printing"),
    openGraph: {
      title: pageDict?.title || "best-dpi-for-printing",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
      images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: pageDict?.title || "best-dpi-for-printing" }],
    },
  };
}

export default async function BestDpiForPrintingPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const pc = getPageContent(content, validLocale);
  const toc = [
    { id: "dpi-recommendations", label: pc.body.heading1 },
    { id: "photos", label: pc.body.heading2 },
    { id: "documents", label: pc.body.heading3 },
    { id: "large-format", label: pc.body.heading4 },
    { id: "quality-vs-filesize", label: pc.body.heading5 },
  ];

  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "learn", href: "/learn", label: dict.nav.learn },
    { slug: "best-dpi-for-printing", href: "/best-dpi-for-printing" },
  ]);

  const relatedArticles = [
    {
      title: dict.pages["what-is-dpi"]?.title || "What Is DPI?",
      href: "/what-is-dpi",
      description:
        dict.navDescriptions["what-is-dpi"] || "Complete DPI explainer",
    },
    {
      title: dict.pages["best-dpi-for-web"]?.title || "Best DPI for Web",
      href: "/best-dpi-for-web",
      description:
        dict.navDescriptions["best-dpi-for-web"] ||
        "Why DPI doesn't matter for web",
    },
    {
      title:
        dict.pages["paper-sizes-in-pixels"]?.title ||
        "Paper Sizes in Pixels",
      href: "/paper-sizes-in-pixels",
      description:
        dict.navDescriptions["paper-sizes-in-pixels"] ||
        "A4, Letter at various DPIs",
    },
    {
      title:
        dict.pages["standard-image-sizes"]?.title ||
        "Standard Image Sizes",
      href: "/standard-image-sizes",
      description:
        dict.navDescriptions["standard-image-sizes"] ||
        "Photo print sizes in pixels",
    },
  ];

  return (
    <BlogLayout
      locale={validLocale}
      title={
        dict.pages["best-dpi-for-printing"]?.title || "Best DPI for Printing"
      }
      extractiveAnswer={
        dict.pages["best-dpi-for-printing"]?.extractive ||
        "The best DPI for printing depends on the output type: 300 DPI for photos and brochures, 150 DPI for documents and newspapers, 72-100 DPI for posters, and 25-72 DPI for billboards. Higher DPI produces sharper prints but increases file size."
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
      slug="best-dpi-for-printing"
    >
      <h2 id="dpi-recommendations">{pc.body.heading1}</h2>
      <table>
        <thead>
          <tr>
            <th>{pc.body.tableHead1}</th>
            <th>{pc.body.tableHead2}</th>
            <th>{pc.body.tableHead3}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{pc.body.row1col1}</td>
            <td>{pc.body.row1col2}</td>
            <td>{pc.body.row1col3}</td>
          </tr>
          <tr>
            <td>{pc.body.row2col1}</td>
            <td>{pc.body.row2col2}</td>
            <td>{pc.body.row2col3}</td>
          </tr>
          <tr>
            <td>{pc.body.row3col1}</td>
            <td>{pc.body.row3col2}</td>
            <td>{pc.body.row3col3}</td>
          </tr>
          <tr>
            <td>{pc.body.row4col1}</td>
            <td>{pc.body.row4col2}</td>
            <td>{pc.body.row4col3}</td>
          </tr>
          <tr>
            <td>{pc.body.row5col1}</td>
            <td>{pc.body.row5col2}</td>
            <td>{pc.body.row5col3}</td>
          </tr>
          <tr>
            <td>{pc.body.row6col1}</td>
            <td>{pc.body.row6col2}</td>
            <td>{pc.body.row6col3}</td>
          </tr>
          <tr>
            <td>{pc.body.row7col1}</td>
            <td>{pc.body.row7col2}</td>
            <td>{pc.body.row7col3}</td>
          </tr>
          <tr>
            <td>{pc.body.row8col1}</td>
            <td>{pc.body.row8col2}</td>
            <td>{pc.body.row8col3}</td>
          </tr>
        </tbody>
      </table>

      <h2 id="photos">{pc.body.heading2}</h2>
      <p>{pc.body.p1}</p>
      <p>{pc.body.p2}</p>

      <h2 id="documents">{pc.body.heading3}</h2>
      <p>{pc.body.p3}</p>

      <h2 id="large-format">{pc.body.heading4}</h2>
      <p>{pc.body.p4}</p>

      <h2 id="quality-vs-filesize">{pc.body.heading5}</h2>
      <p>{pc.body.p5}</p>
      <p>{pc.body.p6}</p>
    </BlogLayout>
  );
}
