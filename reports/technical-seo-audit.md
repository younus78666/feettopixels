# FeetToPixels Technical SEO Audit

Scope: built English public pages, sitemap/robots source, canonical URL consistency, metadata, and content-depth risk.

## Fixed in this pass
- Homepage search intent now targets the domain entity: `Feet to Pixels Converter`.
- English internal URLs now resolve to root canonical paths instead of crawlable `/en/...` paths.
- Middleware now redirects `/en` and `/en/*` to `/` and root page paths with a 308 redirect.
- Site-wide schema, footer, search modal, breadcrumbs, and llms.txt no longer publish `/en/...` URLs.
- robots.txt now allows main search crawlers and AI discovery crawlers while keeping admin/API/search/query URLs out of crawl paths.
- llms.txt now describes the real English canonical site and primary feet-to-pixels entity.

## Indexability Checks
- Public pages checked: 50
- Canonical mismatches: 0
- Built `/en` link references found: 0
- Admin pages are intentionally `noindex` in `app/admin/layout.tsx`.
- Sitemap uses canonical root English URLs and includes the tool, guide, hub, legal, and contact pages.

## Metadata Checks
- Titles under 30 chars: 0
- Titles over 65 chars: 0
- Descriptions under 120 chars: 0
- Descriptions over 170 chars: 0

## Content Depth
- Pages below the requested 2,000 visible-word target: 47
- This is a content-production requirement, not a pure technical indexing blocker. The topical map report lists recommended 2,000+ word briefs by cluster.

## Pages Below 2,000 Words

| Page | Path | Approx. Visible Words |
| --- | --- | ---: |
| about | `/about` | 1007 |
| aspect-ratio-calculator | `/aspect-ratio-calculator` | 1896 |
| best-dpi-for-printing | `/best-dpi-for-printing` | 1372 |
| best-dpi-for-web | `/best-dpi-for-web` | 1379 |
| cm-to-pixels | `/cm-to-pixels` | 1621 |
| common-resolutions | `/common-resolutions` | 1407 |
| contact | `/contact` | 579 |
| css-units | `/css-units` | 1244 |
| dpi-calculator | `/dpi-calculator` | 1812 |
| dpi-conversion-table | `/dpi-conversion-table` | 1988 |
| dpi-converter | `/dpi-converter` | 1883 |
| dpi-vs-ppi | `/dpi-vs-ppi` | 1378 |
| em-to-px | `/em-to-px` | 1508 |
| em-vs-rem | `/em-vs-rem` | 1358 |
| feet-to-pixels | `/feet-to-pixels` | 1698 |
| image-dpi-checker | `/image-dpi-checker` | 1828 |
| image-size-calculator | `/image-size-calculator` | 1386 |
| inches-to-pixels | `/inches-to-pixels` | 1692 |
| learn | `/learn` | 1379 |
| megapixel-calculator | `/megapixel-calculator` | 1970 |
| mm-to-pixels | `/mm-to-pixels` | 1606 |
| paper-sizes-in-pixels | `/paper-sizes-in-pixels` | 1390 |
| passport-photo-size | `/passport-photo-size` | 1766 |
| pixel-converter | `/pixel-converter` | 1244 |
| pixel-ruler | `/pixel-ruler` | 1777 |
| pixels-per-cm | `/pixels-per-cm` | 1312 |
| pixels-per-foot | `/pixels-per-foot` | 1758 |
| pixels-per-mm | `/pixels-per-mm` | 1719 |
| pixels-to-cm | `/pixels-to-cm` | 1569 |
| pixels-to-feet | `/pixels-to-feet` | 1648 |
| pixels-to-inches | `/pixels-to-inches` | 1734 |
| pixels-to-mm | `/pixels-to-mm` | 1591 |
| ppi-calculator | `/ppi-calculator` | 1840 |
| privacy | `/privacy` | 791 |
| pt-to-px | `/pt-to-px` | 1461 |
| px-to-em | `/px-to-em` | 1822 |
| px-to-pt | `/px-to-pt` | 1784 |
| px-to-rem | `/px-to-rem` | 1774 |
| px-to-vw | `/px-to-vw` | 1744 |
| rem-to-px | `/rem-to-px` | 1454 |
| screen-resolution-checker | `/screen-resolution-checker` | 1917 |
| social-media-image-sizes | `/social-media-image-sizes` | 1412 |
| standard-image-sizes | `/standard-image-sizes` | 1291 |
| terms | `/terms` | 890 |
| vw-to-px | `/vw-to-px` | 1417 |
| what-is-a-pixel | `/what-is-a-pixel` | 1546 |
| home | `/` | 1361 |
