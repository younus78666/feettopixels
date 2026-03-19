import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import { BlogLayout } from "@/components/blog/BlogLayout";
import { getBreadcrumbs } from "@/lib/content-utils";
import { getPageContent } from "@/lib/content/types";
import { content } from "@/lib/content/common-resolutions";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["common-resolutions"];

  return {
    title: pageDict?.title || "common-resolutions",
    description: pageDict?.description || "",
    alternates: {
      canonical: `/${locale}/common-resolutions`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/common-resolutions`]),
      ),
    },
    openGraph: {
      title: pageDict?.title || "common-resolutions",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}

export default async function CommonResolutionsPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const pc = getPageContent(content, validLocale);
  const toc = [
    { id: "resolution-table", label: pc.body.heading1 },
    { id: "by-device-type", label: pc.body.heading2 },
    { id: "aspect-ratios", label: pc.body.heading3 },
    { id: "choosing-resolution", label: pc.body.heading4 },
  ];

  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "common-resolutions", href: "/common-resolutions" },
  ]);

  const relatedArticles = [
    {
      title:
        dict.pages["pixels-per-inch"]?.title || "Pixels Per Inch Explained",
      href: "/pixels-per-inch",
      description:
        dict.navDescriptions["pixels-per-inch"] ||
        "Complete PPI reference guide",
    },
    {
      title: dict.pages["what-is-a-pixel"]?.title || "What Is a Pixel?",
      href: "/what-is-a-pixel",
      description:
        dict.navDescriptions["what-is-a-pixel"] ||
        "The building block of displays",
    },
    {
      title:
        dict.pages["social-media-image-sizes"]?.title ||
        "Social Media Image Sizes",
      href: "/social-media-image-sizes",
      description:
        dict.navDescriptions["social-media-image-sizes"] ||
        "Platform image dimensions",
    },
    {
      title: dict.pages["what-is-ppi"]?.title || "What Is PPI?",
      href: "/what-is-ppi",
      description:
        dict.navDescriptions["what-is-ppi"] ||
        "Screen pixel density explained",
    },
  ];

  return (
    <BlogLayout
      locale={validLocale}
      title={dict.pages["common-resolutions"]?.title || "Common Screen Resolutions"}
      extractiveAnswer={
        dict.pages["common-resolutions"]?.extractive ||
        "Full HD (1920 x 1080) is the most common desktop resolution. 4K UHD is 3840 x 2160 pixels. QHD is 2560 x 1440. 8K is 7680 x 4320. Resolution determines the total number of pixels a display renders."
      }
      breadcrumbs={breadcrumbs}
      faqItems={pc.faq}
      relatedArticles={relatedArticles}
      cta={{
        label:
          dict.pages["screen-resolution-checker"]?.title ||
          "Screen Resolution Checker",
        href: "/screen-resolution-checker",
      }}
      toc={toc}
      labels={{
        readyToConvert: dict.tool.readyToConvert,
        relatedArticles: dict.tool.relatedArticles,
        onThisPage: dict.nav.onThisPage,
      }}
      slug="common-resolutions"
    >
      <h2 id="resolution-table">{pc.body.heading1}</h2>
      <table>
        <thead>
          <tr>
            <th>{pc.body.tableHead1}</th>
            <th>{pc.body.tableHead2}</th>
            <th>{pc.body.tableHead3}</th>
            <th>{pc.body.tableHead4}</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>HD (720p)</td><td>1280 x 720</td><td>16:9</td><td>921,600</td></tr>
          <tr><td>Full HD (1080p)</td><td>1920 x 1080</td><td>16:9</td><td>2,073,600</td></tr>
          <tr><td>QHD (1440p)</td><td>2560 x 1440</td><td>16:9</td><td>3,686,400</td></tr>
          <tr><td>WQHD+ (Ultrawide)</td><td>3440 x 1440</td><td>21:9</td><td>4,953,600</td></tr>
          <tr><td>4K UHD (2160p)</td><td>3840 x 2160</td><td>16:9</td><td>8,294,400</td></tr>
          <tr><td>5K</td><td>5120 x 2880</td><td>16:9</td><td>14,745,600</td></tr>
          <tr><td>8K UHD (4320p)</td><td>7680 x 4320</td><td>16:9</td><td>33,177,600</td></tr>
        </tbody>
      </table>

      <h2 id="by-device-type">{pc.body.heading2}</h2>
      <h3>{pc.body.heading2a}</h3>
      <table>
        <thead>
          <tr>
            <th>{pc.body.tableHead5}</th>
            <th>{pc.body.tableHead6}</th>
            <th>{pc.body.tableHead7}</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>13-14&quot;</td><td>1920 x 1080, 2560 x 1600</td><td>157-227</td></tr>
          <tr><td>15-16&quot;</td><td>1920 x 1080, 2880 x 1800</td><td>127-218</td></tr>
          <tr><td>17&quot;</td><td>1920 x 1080, 2560 x 1440</td><td>127-170</td></tr>
        </tbody>
      </table>

      <h3>{pc.body.heading2b}</h3>
      <table>
        <thead>
          <tr>
            <th>{pc.body.tableHead5}</th>
            <th>{pc.body.tableHead6}</th>
            <th>{pc.body.tableHead7}</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>24&quot;</td><td>1920 x 1080, 2560 x 1440</td><td>92-122</td></tr>
          <tr><td>27&quot;</td><td>2560 x 1440, 3840 x 2160</td><td>109-163</td></tr>
          <tr><td>32&quot;</td><td>2560 x 1440, 3840 x 2160</td><td>92-138</td></tr>
        </tbody>
      </table>

      <h2 id="aspect-ratios">{pc.body.heading3}</h2>
      <ul>
        <li>{pc.body.li1}</li>
        <li>{pc.body.li2}</li>
        <li>{pc.body.li3}</li>
        <li>{pc.body.li4}</li>
        <li>{pc.body.li5}</li>
        <li>{pc.body.li6}</li>
      </ul>

      <h2 id="choosing-resolution">{pc.body.heading4}</h2>
      <p>{pc.body.p1}</p>
      <p>{pc.body.p2}</p>
    </BlogLayout>
  );
}
