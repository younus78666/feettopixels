import { siteConfig } from "@/content/site-config";
import { locales } from "@/lib/i18n";

export const dynamic = "force-static";

function escapeXml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function GET() {
  const baseUrl = siteConfig.url;
  const now = new Date().toISOString();

  const staticPages = [
    "",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ];

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

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

  for (const locale of locales) {
    for (const pagePath of allPages) {
      const url = `${baseUrl}/${locale}${pagePath}`;
      const changefreq = pagePath === "" ? "weekly" : "monthly";
      const priority = pagePath === ""
        ? "1.0"
        : toolPages.includes(pagePath)
          ? "0.8"
          : "0.6";

      xml += `  <url>
    <loc>${escapeXml(url)}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
`;
      for (const altLocale of locales) {
        const altUrl = `${baseUrl}/${altLocale}${pagePath}`;
        xml += `    <xhtml:link rel="alternate" hreflang="${altLocale}" href="${escapeXml(altUrl)}" />\n`;
      }
      xml += `  </url>\n`;
    }
  }

  xml += `</urlset>\n`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
