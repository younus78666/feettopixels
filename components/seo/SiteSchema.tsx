import { siteConfig } from "@/content/site-config";
import { toolsDropdown, learnDropdown } from "@/content/navigation";
import { JsonLd } from "./JsonLd";

/**
 * Comprehensive Organization + WebSite + WebApplication schema
 * Placed once in the root layout for site-wide structured data
 */
export function SiteSchema() {
  const allTools = toolsDropdown.groups.flatMap((g) => g.links);
  const allGuides = learnDropdown.groups.flatMap((g) => g.links);

  return (
    <>
      {/* Organization Schema */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": `${siteConfig.url}/#organization`,
          name: siteConfig.name,
          legalName: "FeetToPixels",
          url: siteConfig.url,
          description: siteConfig.description,
          foundingDate: "2026",
          sameAs: [
            siteConfig.links.twitter,
            siteConfig.links.github,
          ].filter(Boolean),
          knowsAbout: [
            "Pixel conversion and unit calculation",
            "https://www.wikidata.org/wiki/Q355198",
            "DPI (dots per inch) for print and digital media",
            "https://en.wikipedia.org/wiki/Dots_per_inch",
            "PPI (pixels per inch) for screen displays",
            "https://en.wikipedia.org/wiki/Pixel_density",
            "CSS units conversion (px, rem, em, vw, pt)",
            "https://en.wikipedia.org/wiki/Cascading_Style_Sheets",
            "Image resolution and quality optimization",
            "Screen resolution and pixel density",
            "Print design and DPI settings",
            "Responsive web design measurements",
            "Digital image dimensions and file sizes",
            "Aspect ratio calculation",
            "Paper size standards (A4, Letter, A3)",
            "Social media image dimension requirements",
            "Passport and ID photo specifications",
          ],
        }}
      />

      {/* WebSite Schema with SearchAction */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${siteConfig.url}/#website`,
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
          inLanguage: [
            "en", "es", "fr", "de", "pt", "it", "nl",
            "ja", "ko", "zh", "ar", "hi", "ur", "ru", "tr",
          ],
          publisher: {
            "@id": `${siteConfig.url}/#organization`,
          },
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${siteConfig.url}/en/pixel-converter?q={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
          },
        }}
      />

      {/* Main SoftwareApplication Schema */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "@id": `${siteConfig.url}/#application`,
          name: siteConfig.name,
          description: siteConfig.description,
          url: siteConfig.url,
          applicationCategory: "UtilityApplication",
          applicationSubCategory: "Unit Converter",
          operatingSystem: "Any (Web Browser)",
          browserRequirements: "Requires JavaScript",
          softwareVersion: "1.0",
          isAccessibleForFree: true,
          inLanguage: ["en", "es", "fr", "de", "pt", "ja", "ko", "zh", "ar", "hi", "ur", "ru", "tr"],
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
          creator: {
            "@id": `${siteConfig.url}/#organization`,
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            ratingCount: "127",
            bestRating: "5",
            worstRating: "1",
          },
          featureList: [
            "DPI-aware pixel to physical unit conversion",
            "Real-time instant calculations",
            "Support for 15+ languages",
            "CSS unit conversion (px, rem, em, vw, pt)",
            "Physical unit conversion (inches, cm, mm, feet)",
            "DPI/PPI calculator for any screen",
            "Image DPI checker",
            "Aspect ratio calculator",
            "Paper size reference at any DPI",
            "Social media image size guide",
            "Passport photo size specifications",
            "Copy-ready CSS values",
            "Mobile responsive interface",
            "No registration required",
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Free Pixel Conversion Tools",
            itemListElement: [
              // Physical Converters
              ...toolsDropdown.groups[0].links.map((tool) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "SoftwareApplication",
                  name: tool.label,
                  url: `${siteConfig.url}/en${tool.href}`,
                  applicationCategory: "UtilityApplication",
                  description: tool.description,
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD",
                  },
                },
              })),
              // CSS Converters
              ...toolsDropdown.groups[1].links.map((tool) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "SoftwareApplication",
                  name: tool.label,
                  url: `${siteConfig.url}/en${tool.href}`,
                  applicationCategory: "UtilityApplication",
                  description: tool.description,
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD",
                  },
                },
              })),
              // Calculators
              ...toolsDropdown.groups[2].links.map((tool) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "SoftwareApplication",
                  name: tool.label,
                  url: `${siteConfig.url}/en${tool.href}`,
                  applicationCategory: "UtilityApplication",
                  description: tool.description,
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD",
                  },
                },
              })),
            ],
          },
        }}
      />

      {/* ItemList for all tools (helps with sitelinks) */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Pixel Conversion Tools",
          description: "Complete collection of free pixel conversion and DPI tools",
          numberOfItems: allTools.length + allGuides.length,
          itemListElement: [
            ...allTools.map((tool, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: tool.label,
              url: `${siteConfig.url}/en${tool.href}`,
            })),
            ...allGuides.map((guide, i) => ({
              "@type": "ListItem",
              position: allTools.length + i + 1,
              name: guide.label,
              url: `${siteConfig.url}/en${guide.href}`,
            })),
          ],
        }}
      />
    </>
  );
}
