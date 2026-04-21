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
| about | `/about` | 594 |
| aspect-ratio-calculator | `/aspect-ratio-calculator` | 1572 |
| best-dpi-for-printing | `/best-dpi-for-printing` | 1025 |
| best-dpi-for-web | `/best-dpi-for-web` | 1027 |
| cm-to-pixels | `/cm-to-pixels` | 1294 |
| common-resolutions | `/common-resolutions` | 1039 |
| contact | `/contact` | 457 |
| css-units | `/css-units` | 1245 |
| dpi-calculator | `/dpi-calculator` | 1496 |
| dpi-conversion-table | `/dpi-conversion-table` | 1658 |
| dpi-converter | `/dpi-converter` | 1570 |
| dpi-vs-ppi | `/dpi-vs-ppi` | 1058 |
| em-to-px | `/em-to-px` | 1051 |
| em-vs-rem | `/em-vs-rem` | 1024 |
| feet-to-pixels | `/feet-to-pixels` | 1356 |
| image-dpi-checker | `/image-dpi-checker` | 1501 |
| image-size-calculator | `/image-size-calculator` | 1064 |
| inches-to-pixels | `/inches-to-pixels` | 1355 |
| learn | `/learn` | 1375 |
| megapixel-calculator | `/megapixel-calculator` | 1656 |
| mm-to-pixels | `/mm-to-pixels` | 1278 |
| paper-sizes-in-pixels | `/paper-sizes-in-pixels` | 991 |
| passport-photo-size | `/passport-photo-size` | 957 |
| pixel-converter | `/pixel-converter` | 823 |
| pixel-ruler | `/pixel-ruler` | 1453 |
| pixels-per-cm | `/pixels-per-cm` | 868 |
| pixels-per-foot | `/pixels-per-foot` | 1430 |
| pixels-per-mm | `/pixels-per-mm` | 1396 |
| pixels-to-cm | `/pixels-to-cm` | 1232 |
| pixels-to-feet | `/pixels-to-feet` | 1319 |
| pixels-to-inches | `/pixels-to-inches` | 1396 |
| pixels-to-mm | `/pixels-to-mm` | 1257 |
| ppi-calculator | `/ppi-calculator` | 1532 |
| privacy | `/privacy` | 610 |
| pt-to-px | `/pt-to-px` | 1017 |
| px-to-em | `/px-to-em` | 1487 |
| px-to-pt | `/px-to-pt` | 1446 |
| px-to-rem | `/px-to-rem` | 1448 |
| px-to-vw | `/px-to-vw` | 1418 |
| rem-to-px | `/rem-to-px` | 1016 |
| screen-resolution-checker | `/screen-resolution-checker` | 1601 |
| social-media-image-sizes | `/social-media-image-sizes` | 952 |
| standard-image-sizes | `/standard-image-sizes` | 959 |
| terms | `/terms` | 890 |
| vw-to-px | `/vw-to-px` | 1001 |
| what-is-a-pixel | `/what-is-a-pixel` | 1161 |
| home | `/` | 1075 |
