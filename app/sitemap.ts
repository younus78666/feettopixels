import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-config";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const lastModified = new Date();

  // Static pages
  const staticPages = [
    "",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ];

  // Tool pages
  const toolPages = [
    "/pixel-converter",
    "/pixels-to-inches",
    "/inches-to-pixels",
    "/pixels-to-cm",
    "/cm-to-pixels",
    "/pixels-to-mm",
    "/mm-to-pixels",
    "/pixels-to-feet",
    "/feet-to-pixels",
    "/px-to-rem",
    "/px-to-em",
    "/px-to-pt",
    "/px-to-vw",
    "/dpi-calculator",
    "/ppi-calculator",
    "/dpi-converter",
    "/image-dpi-checker",
    "/image-size-calculator",
    "/megapixel-calculator",
    "/aspect-ratio-calculator",
    "/pixel-ruler",
    "/screen-resolution-checker",
  ];

  // Blog / informational pages
  const blogPages = [
    "/pixels-per-inch",
    "/what-is-dpi",
    "/what-is-ppi",
    "/what-is-a-pixel",
    "/dpi-vs-ppi",
    "/best-dpi-for-printing",
    "/paper-sizes-in-pixels",
    "/standard-image-sizes",
    "/social-media-image-sizes",
    "/em-vs-rem",
    "/common-resolutions",
    "/best-dpi-for-web",
    "/pixels-per-cm",
    "/pixels-per-mm",
    "/pixels-per-foot",
    "/dpi-conversion-table",
    "/passport-photo-size",
  ];

  const allPages = [...staticPages, ...toolPages, ...blogPages];
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const pagePath of allPages) {
      const localePath = `/${locale}${pagePath}`;
      entries.push({
        url: `${baseUrl}${localePath}`,
        lastModified,
        changeFrequency: pagePath === "" ? "weekly" : "monthly",
        priority: pagePath === "" ? 1.0 : toolPages.includes(pagePath) ? 0.8 : 0.6,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}${pagePath}`]),
          ),
        },
      });
    }
  }

  return entries;
}
