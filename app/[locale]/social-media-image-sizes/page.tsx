import type { Metadata } from "next";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import Link from "next/link";
import { BlogLayout } from "@/components/blog/BlogLayout";

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
    alternates: {
      canonical: `/${locale}/social-media-image-sizes`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/social-media-image-sizes`]),
      ),
    },
    openGraph: {
      title: pageDict?.title || "social-media-image-sizes",
      description: pageDict?.description || "",
      locale: ogLocaleMap[locale],
    },
  };
}

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Learn", href: "/social-media-image-sizes" },
  { label: "Social Media Image Sizes", href: "/social-media-image-sizes" },
];

const toc = [
  { id: "instagram", label: "Instagram" },
  { id: "facebook", label: "Facebook" },
  { id: "youtube", label: "YouTube" },
  { id: "linkedin", label: "LinkedIn" },
  { id: "x-twitter", label: "X (Twitter)" },
];

const faqItems = [
  {
    question: "What size should an Instagram post be?",
    answer: "The recommended size for an Instagram feed post is 1080 x 1080 pixels (square), 1080 x 1350 pixels (portrait, 4:5 ratio), or 1080 x 566 pixels (landscape). Portrait posts take up more screen space and tend to perform best.",
  },
  {
    question: "What is the ideal YouTube thumbnail size?",
    answer: "YouTube thumbnails should be 1280 x 720 pixels with a 16:9 aspect ratio. The minimum width is 640 pixels. Use JPG, PNG, or GIF format under 2 MB.",
  },
  {
    question: "What resolution should I use for social media images?",
    answer: "DPI does not matter for social media — only pixel dimensions matter. Social platforms compress and serve images at screen resolution regardless of the DPI metadata in the file.",
  },
  {
    question: "What size is a Facebook cover photo?",
    answer: "Facebook cover photos should be 820 x 312 pixels on desktop and 640 x 360 pixels on mobile. Upload at 851 x 315 pixels for the best cross-device display.",
  },
];

const relatedArticles = [
  { title: "Standard Image Sizes", href: "/standard-image-sizes", description: "Photo print dimensions in pixels" },
  { title: "Common Screen Resolutions", href: "/common-resolutions", description: "HD to 8K display reference" },
  { title: "Best DPI for Web", href: "/best-dpi-for-web", description: "Why DPI doesn't matter online" },
  { title: "Pixels Per Inch Explained", href: "/pixels-per-inch", description: "PPI reference guide" },
];

export default async function SocialMediaImageSizesPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  return (
    <BlogLayout
      locale={validLocale}
      title={dict.pages["social-media-image-sizes"]?.title || "Social Media Image Sizes (2026)"}
      extractiveAnswer={dict.pages["social-media-image-sizes"]?.extractive || "Instagram posts should be 1080 x 1080 px (square) or 1080 x 1350 px (portrait). YouTube thumbnails are 1280 x 720 px. Facebook covers are 851 x 315 px. DPI does not matter for social media — only pixel dimensions affect display quality."}
      breadcrumbs={breadcrumbs}
      faqItems={faqItems}
      relatedArticles={relatedArticles}
      cta={{ label: "Try the Image Size Calculator", href: "/image-size-calculator" }}
      toc={toc}
      labels={{
        readyToConvert: dict.tool.readyToConvert,
        relatedArticles: dict.tool.relatedArticles,
        onThisPage: dict.nav.onThisPage,
      }}
      slug="social-media-image-sizes"
    >
      <h2 id="instagram">Instagram</h2>
      <table>
        <thead>
          <tr><th>Format</th><th>Dimensions (px)</th><th>Aspect Ratio</th></tr>
        </thead>
        <tbody>
          <tr><td>Feed post (square)</td><td>1080 &times; 1080</td><td>1:1</td></tr>
          <tr><td>Feed post (portrait)</td><td>1080 &times; 1350</td><td>4:5</td></tr>
          <tr><td>Feed post (landscape)</td><td>1080 &times; 566</td><td>1.91:1</td></tr>
          <tr><td>Story / Reel</td><td>1080 &times; 1920</td><td>9:16</td></tr>
          <tr><td>Profile photo</td><td>320 &times; 320</td><td>1:1</td></tr>
          <tr><td>Carousel</td><td>1080 &times; 1080</td><td>1:1</td></tr>
        </tbody>
      </table>

      <h2 id="facebook">Facebook</h2>
      <table>
        <thead>
          <tr><th>Format</th><th>Dimensions (px)</th><th>Aspect Ratio</th></tr>
        </thead>
        <tbody>
          <tr><td>Cover photo</td><td>851 &times; 315</td><td>2.7:1</td></tr>
          <tr><td>Profile photo</td><td>170 &times; 170</td><td>1:1</td></tr>
          <tr><td>Feed post (image)</td><td>1200 &times; 630</td><td>1.91:1</td></tr>
          <tr><td>Story</td><td>1080 &times; 1920</td><td>9:16</td></tr>
          <tr><td>Event cover</td><td>1920 &times; 1005</td><td>1.91:1</td></tr>
          <tr><td>Group cover</td><td>1640 &times; 856</td><td>1.91:1</td></tr>
        </tbody>
      </table>

      <h2 id="youtube">YouTube</h2>
      <table>
        <thead>
          <tr><th>Format</th><th>Dimensions (px)</th><th>Aspect Ratio</th></tr>
        </thead>
        <tbody>
          <tr><td>Thumbnail</td><td>1280 &times; 720</td><td>16:9</td></tr>
          <tr><td>Channel banner</td><td>2560 &times; 1440</td><td>16:9</td></tr>
          <tr><td>Channel icon</td><td>800 &times; 800</td><td>1:1</td></tr>
          <tr><td>Video (1080p)</td><td>1920 &times; 1080</td><td>16:9</td></tr>
          <tr><td>Video (4K)</td><td>3840 &times; 2160</td><td>16:9</td></tr>
        </tbody>
      </table>

      <h2 id="linkedin">LinkedIn</h2>
      <table>
        <thead>
          <tr><th>Format</th><th>Dimensions (px)</th><th>Aspect Ratio</th></tr>
        </thead>
        <tbody>
          <tr><td>Profile banner</td><td>1584 &times; 396</td><td>4:1</td></tr>
          <tr><td>Profile photo</td><td>400 &times; 400</td><td>1:1</td></tr>
          <tr><td>Feed post (image)</td><td>1200 &times; 627</td><td>1.91:1</td></tr>
          <tr><td>Company logo</td><td>300 &times; 300</td><td>1:1</td></tr>
          <tr><td>Company cover</td><td>1128 &times; 191</td><td>5.9:1</td></tr>
        </tbody>
      </table>

      <h2 id="x-twitter">X (Twitter)</h2>
      <table>
        <thead>
          <tr><th>Format</th><th>Dimensions (px)</th><th>Aspect Ratio</th></tr>
        </thead>
        <tbody>
          <tr><td>Header photo</td><td>1500 &times; 500</td><td>3:1</td></tr>
          <tr><td>Profile photo</td><td>400 &times; 400</td><td>1:1</td></tr>
          <tr><td>In-stream image</td><td>1200 &times; 675</td><td>16:9</td></tr>
          <tr><td>Card image</td><td>1200 &times; 628</td><td>1.91:1</td></tr>
        </tbody>
      </table>
      <p>
        All social media platforms compress uploaded images, so start with the recommended pixel dimensions for the best quality after compression. Use our <Link href="/image-size-calculator">Image Size Calculator</Link> to verify your images meet the requirements.
      </p>
    </BlogLayout>
  );
}
