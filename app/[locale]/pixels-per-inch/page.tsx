import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import { BlogLayout } from "@/components/blog/BlogLayout";
import { getBreadcrumbs } from "@/lib/content-utils";
import { getPageContent } from "@/lib/content/types";
import { content } from "@/lib/content/pixels-per-inch";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["pixels-per-inch"];

  return {
    title: pageDict?.title || "pixels-per-inch",
    description: pageDict?.description || "",
    alternates: {
      canonical: `/${locale}/pixels-per-inch`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/pixels-per-inch`]),
      ),
    },
    openGraph: {
      title: pageDict?.title || "pixels-per-inch",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}

export default async function PixelsPerInchPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const pc = getPageContent(content, validLocale);
  const toc = [
    { id: "what-is-ppi", label: pc.body.heading1 },
    { id: "how-to-calculate", label: pc.body.heading2 },
    { id: "ppi-reference-table", label: pc.body.heading3 },
    { id: "retina-displays", label: pc.body.heading4 },
    { id: "ppi-by-use-case", label: pc.body.heading5 },
  ];

  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "learn", href: "/learn", label: dict.nav.learn },
    { slug: "pixels-per-inch", href: "/pixels-per-inch" },
  ]);

  const relatedArticles = [
    {
      title: dict.pages["what-is-dpi"]?.title || "What Is DPI?",
      href: "/what-is-dpi",
      description:
        dict.navDescriptions["what-is-dpi"] ||
        "Understanding dots per inch for print and design",
    },
    {
      title: dict.pages["dpi-vs-ppi"]?.title || "DPI vs PPI",
      href: "/dpi-vs-ppi",
      description:
        dict.navDescriptions["dpi-vs-ppi"] ||
        "Key differences between DPI and PPI explained",
    },
    {
      title: dict.pages["what-is-a-pixel"]?.title || "What Is a Pixel?",
      href: "/what-is-a-pixel",
      description:
        dict.navDescriptions["what-is-a-pixel"] ||
        "The fundamental building block of digital images",
    },
    {
      title:
        dict.pages["common-resolutions"]?.title ||
        "Common Screen Resolutions",
      href: "/common-resolutions",
      description:
        dict.navDescriptions["common-resolutions"] ||
        "HD, 4K, 5K, and 8K resolution reference",
    },
    {
      title:
        dict.pages["paper-sizes-in-pixels"]?.title ||
        "Paper Sizes in Pixels",
      href: "/paper-sizes-in-pixels",
      description:
        dict.navDescriptions["paper-sizes-in-pixels"] ||
        "A4, Letter, and more at various DPIs",
    },
  ];

  return (
    <BlogLayout
      locale={validLocale}
      title={
        dict.pages["pixels-per-inch"]?.title ||
        "Pixels Per Inch (PPI) Explained"
      }
      extractiveAnswer={
        dict.pages["pixels-per-inch"]?.extractive ||
        "Pixels per inch (PPI) measures how many pixels fit into one linear inch of a display or image. At 96 PPI (web standard), one inch contains 96 pixels. At 300 PPI (print standard), one inch contains 300 pixels, producing sharper output."
      }
      breadcrumbs={breadcrumbs}
      faqItems={pc.faq}
      relatedArticles={relatedArticles}
      cta={{
        label: dict.pages["ppi-calculator"]?.title || "PPI Calculator",
        href: "/ppi-calculator",
      }}
      toc={toc}
      labels={{
        readyToConvert: dict.tool.readyToConvert,
        relatedArticles: dict.tool.relatedArticles,
        onThisPage: dict.nav.onThisPage,
      }}
      slug="pixels-per-inch"
    >
      <h2 id="what-is-ppi">{pc.body.heading1}</h2>
      <p>{pc.body.p1}</p>
      <p>{pc.body.p2}</p>

      <h2 id="how-to-calculate">{pc.body.heading2}</h2>
      <p>{pc.body.p3}</p>
      <p><strong>{pc.body.p4}</strong></p>
      <p>{pc.body.p5}</p>

      <h2 id="ppi-reference-table">{pc.body.heading3}</h2>
      <p>{pc.body.p6}</p>
      <table>
        <thead>
          <tr>
            <th>{pc.body.th1}</th>
            <th>{pc.body.th2}</th>
            <th>{pc.body.th3}</th>
            <th>{pc.body.th4}</th>
            <th>{pc.body.th5}</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>{pc.body.td1_1}</td><td>{pc.body.td1_2}</td><td>{pc.body.td1_3}</td><td>{pc.body.td1_4}</td><td>{pc.body.td1_5}</td></tr>
          <tr><td>{pc.body.td2_1}</td><td>{pc.body.td2_2}</td><td>{pc.body.td2_3}</td><td>{pc.body.td2_4}</td><td>{pc.body.td2_5}</td></tr>
          <tr><td>{pc.body.td3_1}</td><td>{pc.body.td3_2}</td><td>{pc.body.td3_3}</td><td>{pc.body.td3_4}</td><td>{pc.body.td3_5}</td></tr>
          <tr><td>{pc.body.td4_1}</td><td>{pc.body.td4_2}</td><td>{pc.body.td4_3}</td><td>{pc.body.td4_4}</td><td>{pc.body.td4_5}</td></tr>
          <tr><td>{pc.body.td5_1}</td><td>{pc.body.td5_2}</td><td>{pc.body.td5_3}</td><td>{pc.body.td5_4}</td><td>{pc.body.td5_5}</td></tr>
          <tr><td>{pc.body.td6_1}</td><td>{pc.body.td6_2}</td><td>{pc.body.td6_3}</td><td>{pc.body.td6_4}</td><td>{pc.body.td6_5}</td></tr>
        </tbody>
      </table>

      <h2 id="retina-displays">{pc.body.heading4}</h2>
      <p>{pc.body.p7}</p>
      <p>{pc.body.p8}</p>

      <h2 id="ppi-by-use-case">{pc.body.heading5}</h2>
      <ul>
        <li>{pc.body.li1}</li>
        <li>{pc.body.li2}</li>
        <li>{pc.body.li3}</li>
        <li>{pc.body.li4}</li>
        <li>{pc.body.li5}</li>
      </ul>
      <p>{pc.body.p9}</p>
    </BlogLayout>
  );
}
