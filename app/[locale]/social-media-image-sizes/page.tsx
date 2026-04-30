import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { buildAlternates, localizedPath } from "@/lib/alternates";
import { getDictionary } from "@/lib/translations";
import { BlogLayout } from "@/components/blog/BlogLayout";
import { getBreadcrumbs } from "@/lib/content-utils";
import { getPageContent } from "@/lib/content/types";
import { content } from "@/lib/content/social-media-image-sizes";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["social-media-image-sizes"];

  return {
    title: pageDict?.title || "social-media-image-sizes",
    description: pageDict?.description || "",
    alternates: buildAlternates(locale, "social-media-image-sizes"),
    openGraph: {
      title: pageDict?.title || "social-media-image-sizes",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
      images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: pageDict?.title || "social-media-image-sizes" }],
    },
  };
}

export default async function SocialMediaImageSizesPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const pc = getPageContent(content, validLocale);
  const toc = [
    { id: "instagram", label: pc.body.heading1 },
    { id: "facebook", label: pc.body.heading2 },
    { id: "youtube", label: pc.body.heading3 },
    { id: "linkedin", label: pc.body.heading4 },
    { id: "x-twitter", label: pc.body.heading5 },
  ];

  const breadcrumbs = getBreadcrumbs(validLocale, dict, [
    { slug: "learn", href: "/learn", label: dict.nav.learn },
    { slug: "social-media-image-sizes", href: "/social-media-image-sizes" },
  ]);

  const relatedArticles = [
    {
      title:
        dict.pages["standard-image-sizes"]?.title || "Standard Image Sizes",
      href: "/standard-image-sizes",
      description:
        dict.navDescriptions["standard-image-sizes"] ||
        "Photo print dimensions in pixels",
    },
    {
      title:
        dict.pages["common-resolutions"]?.title ||
        "Common Screen Resolutions",
      href: "/common-resolutions",
      description:
        dict.navDescriptions["common-resolutions"] ||
        "HD to 8K display reference",
    },
    {
      title: dict.pages["best-dpi-for-web"]?.title || "Best DPI for Web",
      href: "/best-dpi-for-web",
      description:
        dict.navDescriptions["best-dpi-for-web"] ||
        "Why DPI doesn't matter online",
    },
    {
      title:
        dict.pages["pixels-per-inch"]?.title || "Pixels Per Inch Explained",
      href: "/pixels-per-inch",
      description:
        dict.navDescriptions["pixels-per-inch"] || "PPI reference guide",
    },
  ];

  return (
    <BlogLayout
      locale={validLocale}
      title={
        dict.pages["social-media-image-sizes"]?.title ||
        "Social Media Image Sizes (2026)"
      }
      extractiveAnswer={
        dict.pages["social-media-image-sizes"]?.extractive ||
        "Instagram posts should be 1080 x 1080 px (square) or 1080 x 1350 px (portrait). YouTube thumbnails are 1280 x 720 px. Facebook covers are 851 x 315 px. DPI does not matter for social media - only pixel dimensions affect display quality."
      }
      breadcrumbs={breadcrumbs}
      faqItems={pc.faq}
      relatedArticles={relatedArticles}
      cta={{
        label:
          dict.pages["image-size-calculator"]?.title ||
          "Image Size Calculator",
        href: "/image-size-calculator",
      }}
      toc={toc}
      labels={{
        readyToConvert: dict.tool.readyToConvert,
        relatedArticles: dict.tool.relatedArticles,
        onThisPage: dict.nav.onThisPage,
      }}
      slug="social-media-image-sizes"
    >
      <h2 id="instagram">{pc.body.heading1}</h2>
      <table>
        <thead>
          <tr>
            <th>{pc.body.tableHead1}</th>
            <th>{pc.body.tableHead2}</th>
            <th>{pc.body.tableHead3}</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>{pc.body.igRow1}</td><td>{pc.body.igRow1dim}</td><td>{pc.body.igRow1ratio}</td></tr>
          <tr><td>{pc.body.igRow2}</td><td>{pc.body.igRow2dim}</td><td>{pc.body.igRow2ratio}</td></tr>
          <tr><td>{pc.body.igRow3}</td><td>{pc.body.igRow3dim}</td><td>{pc.body.igRow3ratio}</td></tr>
          <tr><td>{pc.body.igRow4}</td><td>{pc.body.igRow4dim}</td><td>{pc.body.igRow4ratio}</td></tr>
          <tr><td>{pc.body.igRow5}</td><td>{pc.body.igRow5dim}</td><td>{pc.body.igRow5ratio}</td></tr>
          <tr><td>{pc.body.igRow6}</td><td>{pc.body.igRow6dim}</td><td>{pc.body.igRow6ratio}</td></tr>
        </tbody>
      </table>

      <h2 id="facebook">{pc.body.heading2}</h2>
      <table>
        <thead>
          <tr>
            <th>{pc.body.tableHead1}</th>
            <th>{pc.body.tableHead2}</th>
            <th>{pc.body.tableHead3}</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>{pc.body.fbRow1}</td><td>{pc.body.fbRow1dim}</td><td>{pc.body.fbRow1ratio}</td></tr>
          <tr><td>{pc.body.fbRow2}</td><td>{pc.body.fbRow2dim}</td><td>{pc.body.fbRow2ratio}</td></tr>
          <tr><td>{pc.body.fbRow3}</td><td>{pc.body.fbRow3dim}</td><td>{pc.body.fbRow3ratio}</td></tr>
          <tr><td>{pc.body.fbRow4}</td><td>{pc.body.fbRow4dim}</td><td>{pc.body.fbRow4ratio}</td></tr>
          <tr><td>{pc.body.fbRow5}</td><td>{pc.body.fbRow5dim}</td><td>{pc.body.fbRow5ratio}</td></tr>
          <tr><td>{pc.body.fbRow6}</td><td>{pc.body.fbRow6dim}</td><td>{pc.body.fbRow6ratio}</td></tr>
        </tbody>
      </table>

      <h2 id="youtube">{pc.body.heading3}</h2>
      <table>
        <thead>
          <tr>
            <th>{pc.body.tableHead1}</th>
            <th>{pc.body.tableHead2}</th>
            <th>{pc.body.tableHead3}</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>{pc.body.ytRow1}</td><td>{pc.body.ytRow1dim}</td><td>{pc.body.ytRow1ratio}</td></tr>
          <tr><td>{pc.body.ytRow2}</td><td>{pc.body.ytRow2dim}</td><td>{pc.body.ytRow2ratio}</td></tr>
          <tr><td>{pc.body.ytRow3}</td><td>{pc.body.ytRow3dim}</td><td>{pc.body.ytRow3ratio}</td></tr>
          <tr><td>{pc.body.ytRow4}</td><td>{pc.body.ytRow4dim}</td><td>{pc.body.ytRow4ratio}</td></tr>
          <tr><td>{pc.body.ytRow5}</td><td>{pc.body.ytRow5dim}</td><td>{pc.body.ytRow5ratio}</td></tr>
        </tbody>
      </table>

      <h2 id="linkedin">{pc.body.heading4}</h2>
      <table>
        <thead>
          <tr>
            <th>{pc.body.tableHead1}</th>
            <th>{pc.body.tableHead2}</th>
            <th>{pc.body.tableHead3}</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>{pc.body.liRow1}</td><td>{pc.body.liRow1dim}</td><td>{pc.body.liRow1ratio}</td></tr>
          <tr><td>{pc.body.liRow2}</td><td>{pc.body.liRow2dim}</td><td>{pc.body.liRow2ratio}</td></tr>
          <tr><td>{pc.body.liRow3}</td><td>{pc.body.liRow3dim}</td><td>{pc.body.liRow3ratio}</td></tr>
          <tr><td>{pc.body.liRow4}</td><td>{pc.body.liRow4dim}</td><td>{pc.body.liRow4ratio}</td></tr>
          <tr><td>{pc.body.liRow5}</td><td>{pc.body.liRow5dim}</td><td>{pc.body.liRow5ratio}</td></tr>
        </tbody>
      </table>

      <h2 id="x-twitter">{pc.body.heading5}</h2>
      <table>
        <thead>
          <tr>
            <th>{pc.body.tableHead1}</th>
            <th>{pc.body.tableHead2}</th>
            <th>{pc.body.tableHead3}</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>{pc.body.twRow1}</td><td>{pc.body.twRow1dim}</td><td>{pc.body.twRow1ratio}</td></tr>
          <tr><td>{pc.body.twRow2}</td><td>{pc.body.twRow2dim}</td><td>{pc.body.twRow2ratio}</td></tr>
          <tr><td>{pc.body.twRow3}</td><td>{pc.body.twRow3dim}</td><td>{pc.body.twRow3ratio}</td></tr>
          <tr><td>{pc.body.twRow4}</td><td>{pc.body.twRow4dim}</td><td>{pc.body.twRow4ratio}</td></tr>
        </tbody>
      </table>
      <p>{pc.body.p1}</p>
    </BlogLayout>
  );
}
