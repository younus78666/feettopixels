import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-config";
import { locales } from "@/lib/i18n";

// Generate Allow rules for all locale prefixes: /en/, /es/, /fr/, etc.
const localeAllowRules = locales.map((l) => `/${l}/`);

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Main rules — allow only locale-prefixed paths, block non-locale duplicates
      {
        userAgent: "Googlebot",
        allow: [...localeAllowRules, "/sitemap.xml"],
        disallow: ["/api/", "/admin/", "/"],
      },
      {
        userAgent: "Bingbot",
        allow: [...localeAllowRules, "/sitemap.xml"],
        disallow: ["/api/", "/admin/", "/"],
      },
      // Block SEO tool crawlers (they consume bandwidth, no benefit)
      {
        userAgent: "AhrefsBot",
        disallow: "/",
      },
      {
        userAgent: "SemrushBot",
        disallow: "/",
      },
      {
        userAgent: "MJ12bot",
        disallow: "/",
      },
      {
        userAgent: "DotBot",
        disallow: "/",
      },
      {
        userAgent: "BLEXBot",
        disallow: "/",
      },
      {
        userAgent: "rogerbot",
        disallow: "/",
      },
      // Block WayBack Machine / Archive.org
      {
        userAgent: "ia_archiver",
        disallow: "/",
      },
      // Block bad bots and scrapers
      {
        userAgent: "MauiBot",
        disallow: "/",
      },
      {
        userAgent: "SeznamBot",
        disallow: "/",
      },
      {
        userAgent: "Xenu",
        disallow: "/",
      },
      {
        userAgent: "Bytespider",
        disallow: "/",
      },
      {
        userAgent: "GPTBot",
        disallow: "/",
      },
      {
        userAgent: "CCBot",
        disallow: "/",
      },
      {
        userAgent: "anthropic-ai",
        disallow: "/",
      },
      {
        userAgent: "ClaudeBot",
        disallow: "/",
      },
      {
        userAgent: "Google-Extended",
        disallow: "/",
      },
      {
        userAgent: "FacebookBot",
        disallow: "/",
      },
      // Default rule for all other bots — only allow locale paths
      {
        userAgent: "*",
        allow: [...localeAllowRules, "/sitemap.xml"],
        disallow: ["/api/", "/admin/", "/*?*", "/search", "/"],
        crawlDelay: 10,
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
