import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "How many pixels are in a foot?",
        "answer": "It depends on DPI. At 72 DPI: 864 pixels per foot. At 96 DPI: 1,152 pixels per foot. At 150 DPI: 1,800 pixels per foot. At 300 DPI: 3,600 pixels per foot. The formula is always pixels per foot = 12 x DPI, because 1 foot equals 12 inches."
      },
      {
        "question": "Why is pixels per foot useful?",
        "answer": "It's the essential measurement for large-format design: banners, stage backdrops, trade show displays, building wraps, murals. When your design spans feet rather than inches, you need to know how many pixels each foot requires so you don't end up with a pixelated result at print time. Getting it wrong on a large-format job is expensive and not recoverable after print."
      },
      {
        "question": "What DPI should I use for a 10-foot banner?",
        "answer": "For a trade show banner viewed from 6 to 10 feet away, 100 to 150 DPI is plenty. At 150 DPI it needs 18,000 pixels wide. For a retail banner viewed closer, 200 DPI gives sharper text and graphics. You rarely need 300 DPI for anything over 6 feet long because viewing distance hides the extra detail. Spending extra file size on resolution nobody can see is a common waste."
      },
      {
        "question": "Is there an easy way to calculate the pixel count for any size?",
        "answer": "Yes. The full formula is: total pixels = feet x 12 x DPI. For a 6-foot banner at 150 DPI: 6 x 12 x 150 = 10,800 pixels. For a 20-foot building graphic at 50 DPI: 20 x 12 x 50 = 12,000 pixels. Our Feet to Pixels Converter handles this instantly with DPI presets built in."
      },
      {
        "question": "Can I print a small image on a huge banner without quality loss?",
        "answer": "Sometimes, yes, if the viewing distance is far enough. A 1,920 x 1,080 image stretched across a 20-foot wide billboard prints at about 8 PPI, which looks terrible up close but perfectly sharp from 100+ feet away. The eye can't resolve detail smaller than 1/60th of a degree at typical viewing angles, so ultra-large prints can use surprisingly low PPI and still look clean."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "Pixels Per Foot: Complete Reference",
        "paragraphs": [
          "Pixels per foot is the pixel-density measurement that drives large-format print calculations. It tells you how many horizontal or vertical pixels your design needs for every foot of finished output. Because one foot equals 12 inches, the math is always: pixels per foot = 12 x DPI.",
          "Most image editing software works in inches, but physical output often spans feet: trade show graphics, retail signage, stage backdrops, vehicle wraps, banners, murals, architectural displays. At these scales, a wrong DPI choice turns a $2,000 print job into a pixelated mess, or wastes gigabytes of file size on detail nobody will ever see. Knowing your pixels-per-foot requirement before you open Photoshop is the difference between a job that ships clean and one that gets reprinted at your cost.",
          "The concept belongs to the same measurement family as DPI and pixels per inch, but it scales the unit to feet, which is more natural for large-format design. Think of it as DPI multiplied by 12. A 150-DPI design has 1,800 pixels per foot. A 100-DPI outdoor banner has 1,200 pixels per foot. The table below covers the full range of practical values."
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
            ["72 DPI", "864", "Legacy screen reference (rarely used for print)", "-"],
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
        "title": "The Viewing Distance Rule (and Why It Makes Pixels-Per-Foot Thinking Essential)",
        "paragraphs": [
          "The reason large-format print uses low DPI is the 1/60-degree rule: the human eye resolves roughly one arc minute of angular detail. That translates to about one pixel per inch for every 100 inches (8.3 feet) of viewing distance at the absolute minimum threshold of visibility.",
          "Practical interpretation: for every foot of viewing distance, you can drop DPI by about 10 to 15 without visible degradation. A print viewed from 10 feet can be 100 DPI instead of 300. A print viewed from 50 feet can be 30 DPI. This scaling is why billboards can claim 'sharp' imagery at 50 feet despite having pixel density that would look awful on a phone screen.",
          "For design work, the safe rule is: use 600 divided by the viewing distance in feet as your minimum DPI. A sign viewed from 5 feet needs at least 120 DPI. From 10 feet: at least 60 DPI. From 20 feet: at least 30 DPI. This keeps you within the sharp threshold for typical human vision.",
          "Pixels-per-foot thinking matters here because it reframes the question. Instead of asking 'what DPI do I need?', you ask 'how many pixels does each foot of my output require?' Those are the same question, but the second one maps directly to the physical scale of large-format work. A 6-foot wide banner at 100 DPI needs 7,200 pixels across. Knowing that number before you design prevents the classic mistake of starting at the wrong canvas size and discovering the problem at prepress."
        ]
      },
      {
        "id": "quick-calc",
        "title": "Quick Calculation Formula",
        "paragraphs": [
          "For any foot-based dimension, the formula is: total pixels = feet x 12 x DPI. Multiply by 12 first because a foot contains 12 inches. Then multiply by your target DPI.",
          "4 feet at 150 DPI = 4 x 12 x 150 = 7,200 pixels. 8 feet at 200 DPI = 8 x 12 x 200 = 19,200 pixels. 20 feet at 50 DPI = 20 x 12 x 50 = 12,000 pixels. 100 feet at 20 DPI (billboard) = 100 x 12 x 20 = 24,000 pixels.",
          "Our Feet to Pixels Converter handles this calculation instantly with DPI presets. For the reverse, finding the maximum foot-size a given pixel count supports, use the Pixels to Feet Converter."
        ]
      },
      {
        "id": "common-mistakes",
        "title": "Common Mistakes When Calculating Pixels Per Foot",
        "paragraphs": [
          "The most expensive mistake is choosing 300 DPI for every large-format job out of habit. At 300 DPI, a 10-foot banner requires 36,000 pixels wide. That's a 1+ GB Photoshop file for a print that will hang 15 feet away where 100 DPI looks identical. Overkill DPI doesn't improve print quality at viewing distance. It just slows your RIP processor, inflates file transfer times, and occasionally causes render failures at the print shop.",
          "The second mistake runs in the opposite direction: designing a 20-foot backdrop at 300 DPI in Photoshop, then scaling it down to 50 DPI for the actual print. The math works, but designers who don't understand why they're scaling down often panic and re-request a 'better version' from a client when the low-DPI export looks thin in file size.",
          "A third common error is building the canvas in inches instead of feet and getting the pixel count right for 1 foot of content, then scaling manually. The safer workflow is: decide your DPI first based on viewing distance, convert your dimensions to pixels using feet x 12 x DPI, and set that as your Photoshop canvas from the start.",
          "Catching these errors before print is straightforward. Use the banner-sizing table above to verify your pixel dimensions match your DPI and size combination. If your file's pixel count is dramatically higher than the table shows, you're over-resolving. If it's dramatically lower, you may have a pixelation problem at output. Our Feet to Pixels Converter lets you check any combination in seconds."
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
