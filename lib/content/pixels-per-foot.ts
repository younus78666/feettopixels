import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "How many pixels are in a foot?",
        "answer": "It depends on DPI. At 72 DPI: 864 pixels per foot. At 96 DPI: 1152 pixels per foot. At 150 DPI: 1800 pixels per foot. At 300 DPI: 3600 pixels per foot. The formula is always: pixels per foot = 12 x DPI, because 1 foot equals 12 inches."
      },
      {
        "question": "Why is pixels per foot useful?",
        "answer": "It's the critical measurement for large-format design — banners, stage backdrops, trade show displays, building wraps, murals. When your design spans feet rather than inches, you need to know how many pixels each foot requires so you don't end up with a pixelated blowup at print time."
      },
      {
        "question": "What DPI should I use for a 10-foot banner?",
        "answer": "For a trade show banner viewed from 6-10 feet away, 100-150 DPI is plenty — it would need 12000-18000 pixels wide. For a retail banner viewed closer, 200 DPI gives sharp text and graphics. You rarely need 300 DPI for anything over 6 feet long — the viewing distance hides the extra detail."
      },
      {
        "question": "Is there an easy way to calculate the pixel count for any size?",
        "answer": "Yes. The full formula is: total pixels wide = feet × 12 × DPI. For a 6-foot banner at 150 DPI: 6 × 12 × 150 = 10,800 pixels. For a 20-foot building graphic at 50 DPI: 20 × 12 × 50 = 12,000 pixels. Our Feet to Pixels Converter does this instantly."
      },
      {
        "question": "Can I print a small image on a huge banner without quality loss?",
        "answer": "Sometimes, yes — if the viewing distance is far enough. A 1920 × 1080 image stretched across a 20-foot wide billboard prints at 8 PPI, which is terrible up close but perfectly sharp from 100+ feet away. The eye cannot resolve detail smaller than 1/60th of a degree at typical viewing angles, so ultra-large prints can use surprisingly low PPI."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "Pixels Per Foot: Complete Reference",
        "paragraphs": [
          "Pixels per foot is the critical pixel-density measurement for large-format print. It tells you how many horizontal (or vertical) pixels your design needs for every foot of finished output. Because one foot equals twelve inches, the math is always pixels per foot = 12 × DPI.",
          "While most image editing is done in inches, physical output often spans feet: trade show graphics, retail signage, stage backdrops, vehicle wraps, banners, murals, and architectural displays. At these scales, a mistake in DPI choice can blow a $2000 print job into a pixelated mess, or waste gigabytes of file size on detail nobody will see."
        ]
      },
      {
        "id": "reference-table",
        "title": "Pixels Per Foot at Standard DPI",
        "table": {
          "headers": ["DPI", "Pixels per Foot", "Use Case", "Typical Viewing Distance"],
          "rows": [
            ["30 DPI", "360", "Building wraps, large billboards", "50+ feet"],
            ["50 DPI", "600", "Highway billboards, bus wraps", "30+ feet"],
            ["72 DPI", "864", "Legacy screen reference (rarely used for print)", "—"],
            ["96 DPI", "1152", "Windows screen reference, low-quality large prints", "15+ feet"],
            ["100 DPI", "1200", "Outdoor banners, stage backdrops", "10+ feet"],
            ["150 DPI", "1800", "Trade show graphics, retail signage", "6-10 feet"],
            ["200 DPI", "2400", "Retail point-of-sale, high-quality banners", "3-6 feet"],
            ["240 DPI", "2880", "Photographic banners, fine posters", "2-4 feet"],
            ["300 DPI", "3600", "Close-viewed exhibits, fine art banners", "1-3 feet"],
            ["600 DPI", "7200", "Gallery prints, archival reproductions", "< 2 feet"]
          ]
        }
      },
      {
        "id": "banner-sizing",
        "title": "Common Banner Sizes and Pixel Requirements",
        "table": {
          "headers": ["Banner Size", "DPI", "Pixel Dimensions Needed"],
          "rows": [
            ["3 x 6 ft retractable stand", "150", "5400 x 10800"],
            ["3 x 8 ft roll-up", "150", "5400 x 14400"],
            ["4 x 8 ft trade show", "100", "4800 x 9600"],
            ["6 x 10 ft backdrop", "100", "7200 x 12000"],
            ["8 x 12 ft backdrop", "75", "7200 x 10800"],
            ["10 x 20 ft building banner", "50", "6000 x 12000"],
            ["20 x 30 ft wall graphic", "40", "9600 x 14400"]
          ]
        }
      },
      {
        "id": "viewing-distance",
        "title": "The Viewing Distance Rule",
        "paragraphs": [
          "The reason large-format uses low DPI is the 1/60-degree rule: the human eye can resolve roughly one arc minute of angular detail. That translates to about one pixel per inch at every 100 inches (8.3 feet) of viewing distance, when counting the absolute minimum visible.",
          "Practical interpretation: for every foot of viewing distance, you can drop DPI by about 10-15 without visible degradation. A print viewed from 10 feet can be 100 DPI instead of 300. A print viewed from 50 feet can be 30 DPI. This scaling is why billboards can legally claim '4K resolution' at 50 feet distance despite having actual pixel density that would look awful on a phone.",
          "For design work, the safe heuristic is: double the intended viewing distance in feet, then use 600 / (viewing distance) as your minimum DPI. 5 feet away needs at least 120 DPI. 10 feet away needs at least 60 DPI. 20 feet needs at least 30 DPI. This keeps you well within the 'sharp' threshold for typical human vision."
        ]
      },
      {
        "id": "quick-calc",
        "title": "Quick Calculation Formula",
        "paragraphs": [
          "For any foot-based dimension: total pixels = feet × 12 × DPI. Always multiply by 12 first because a foot contains 12 inches. Examples:",
          "4 feet at 150 DPI = 4 × 12 × 150 = 7,200 pixels. 8 feet at 200 DPI = 8 × 12 × 200 = 19,200 pixels. 20 feet at 50 DPI = 20 × 12 × 50 = 12,000 pixels. 100 feet at 20 DPI (billboard) = 100 × 12 × 20 = 24,000 pixels.",
          "Our Feet to Pixels Converter handles this calculation instantly with DPI presets. For quick reverse calculation — finding the max foot-size from a given pixel count — use the Pixels to Feet Converter."
        ]
      }
    ]
  },
  "es": { "faq": [], "sections": [{ "id": "overview", "title": "Descripción general", "paragraphs": [] }] },
  "fr": { "faq": [], "sections": [{ "id": "overview", "title": "Aperçu", "paragraphs": [] }] },
  "de": { "faq": [], "sections": [{ "id": "overview", "title": "Überblick", "paragraphs": [] }] },
  "pt": { "faq": [], "sections": [{ "id": "overview", "title": "Visão geral", "paragraphs": [] }] },
  "hi": { "faq": [], "sections": [{ "id": "overview", "title": "सिंहावलोकन", "paragraphs": [] }] },
  "ja": { "faq": [], "sections": [{ "id": "overview", "title": "概要", "paragraphs": [] }] },
  "ko": { "faq": [], "sections": [{ "id": "overview", "title": "개요", "paragraphs": [] }] },
  "it": { "faq": [], "sections": [{ "id": "overview", "title": "Panoramica", "paragraphs": [] }] },
  "nl": { "faq": [], "sections": [{ "id": "overview", "title": "Overzicht", "paragraphs": [] }] },
  "ar": { "faq": [], "sections": [{ "id": "overview", "title": "ملخص", "paragraphs": [] }] },
  "tr": { "faq": [], "sections": [{ "id": "overview", "title": "Genel Bakış", "paragraphs": [] }] },
  "pl": { "faq": [], "sections": [{ "id": "overview", "title": "Przegląd", "paragraphs": [] }] },
  "id": { "faq": [], "sections": [{ "id": "overview", "title": "Ringkasan", "paragraphs": [] }] },
  "ru": { "faq": [], "sections": [{ "id": "overview", "title": "Обзор", "paragraphs": [] }] }
};
