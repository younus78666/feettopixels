import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "What does megapixel mean?",
        "answer": "One megapixel equals one million pixels. A 12 MP camera captures roughly 12 million pixels per photo, typically at 4000x3000 resolution. More megapixels allow larger prints and more aggressive cropping without visible loss."
      },
      {
        "question": "How many megapixels do I need for a 16x20 inch print at 300 DPI?",
        "answer": "At 300 DPI: 16 x 300 = 4,800 pixels wide, 20 x 300 = 6,000 pixels tall. Total: 4,800 x 6,000 = 28.8 million pixels = 28.8 MP. At 150 DPI (acceptable for poster viewing): only 7.2 MP needed."
      },
      {
        "question": "Is more megapixels always better?",
        "answer": "Not necessarily. Sensor size, lens quality, and low-light performance matter more than megapixel count above 12-16 MP for most uses. A 48 MP phone with a small sensor often produces worse low-light photos than a 12 MP camera with a large sensor."
      },
      {
        "question": "Why does aspect ratio affect pixel dimensions?",
        "answer": "Megapixels define total pixel count (width x height), not the shape. A 12 MP image could be 4000x3000 (4:3), 4243x2829 (3:2), or 3464x3464 (1:1). The aspect ratio determines how those 12 million pixels are distributed between width and height."
      },
      {
        "question": "How do phone camera megapixels compare to DSLRs?",
        "answer": "Modern phones range from 12 MP to 200 MP, while professional DSLRs typically use 20-60 MP. Despite higher megapixel counts, phone sensors are much smaller, so each pixel captures less light. DSLR images generally have better dynamic range and low-light performance."
      }
    ],
    "sections": [
      {
        "id": "how-it-works",
        "title": "How the Megapixel Calculator Works",
        "paragraphs": [
          "A megapixel is exactly one million pixels. The Megapixel Calculator converts between total pixel count and the two-dimensional pixel grid using the simple formula: megapixels = (width x height) / 1,000,000. A 4000 x 3000 image contains 12,000,000 pixels which equals 12 megapixels. The calculator lets you enter any two of three values (width, height, or total MP) and solves for the third, typically with a chosen aspect ratio to constrain the shape.",
          "Given a target megapixel count and aspect ratio, the calculator derives pixel dimensions by solving two equations at once: width/height = aspect-ratio, and width x height = MP x 1,000,000. For 12 MP at 4:3, that gives width = sqrt(12,000,000 x (4/3)) = 4000 and height = 3000. At 3:2 the same 12 MP becomes 4243 x 2828, and at 16:9 it becomes 4619 x 2598. Total pixels stay constant, but the rectangle reshapes. For help converting those dimensions into print sizes, combine this tool with the dpi-calculator or image-size-calculator."
        ]
      },
      {
        "id": "when-to-use",
        "title": "When to Use the Megapixel Calculator",
        "paragraphs": [
          "Megapixel thinking bridges camera specs and the actual output you need. Use the calculator when evaluating purchases, crop budgets, and print sizes."
        ],
        "list": [
          "Deciding if a camera has enough resolution for a specific print size (e.g. 24 MP for 16 x 24 inches at 300 DPI).",
          "Calculating the minimum megapixels needed to crop into an image while preserving a 4K delivery requirement.",
          "Comparing phone cameras that advertise 48 MP, 64 MP, and 108 MP versus a 24 MP DSLR sensor.",
          "Planning storage - every extra megapixel multiplies raw file size by roughly the same proportion.",
          "Sizing a high-resolution composite where you plan to stitch several shots together.",
          "Determining the actual pixel dimensions of cropped video frames grabbed from 4K or 8K sources."
        ]
      },
      {
        "id": "practical-examples",
        "title": "Practical Examples",
        "paragraphs": [
          "The table below shows common megapixel counts, the pixel dimensions they produce at a 3:2 ratio (standard DSLR output), and the print size they support at 300 DPI."
        ],
        "table": {
          "headers": ["Megapixels", "Dimensions (3:2)", "Max Print at 300 DPI", "Typical Device"],
          "rows": [
            ["2 MP", "1732 x 1155", "5.8 x 3.9 in", "Early webcams, old phones"],
            ["8 MP", "3464 x 2309", "11.5 x 7.7 in", "iPhone 5s, entry point-and-shoot"],
            ["12 MP", "4243 x 2829", "14.1 x 9.4 in", "iPhone 12-15 main, Sony A7S III"],
            ["16 MP", "4899 x 3266", "16.3 x 10.9 in", "Micro Four Thirds mirrorless"],
            ["24 MP", "6000 x 4000", "20.0 x 13.3 in", "Nikon Z6, Sony A7 IV, Canon R6"],
            ["45 MP", "8192 x 5464", "27.3 x 18.2 in", "Canon R5, Nikon Z7 II"],
            ["61 MP", "9504 x 6336", "31.7 x 21.1 in", "Sony A7R V, Fujifilm GFX100S"],
            ["108 MP", "12704 x 8460", "42.3 x 28.2 in", "Samsung Galaxy S-series pixel-binned"]
          ]
        }
      },
      {
        "id": "common-mistakes",
        "title": "Common Mistakes to Avoid",
        "paragraphs": [
          "Megapixel marketing on phones in particular encourages a mental model that does not match how sensors and images actually work. Avoid these pitfalls."
        ],
        "list": [
          "Assuming double the megapixels means double the detail - it takes four times the megapixels to double linear resolution.",
          "Confusing effective megapixels (final file output) with total sensor megapixels (including unused edge pixels).",
          "Ignoring pixel-binning on phone cameras - a 48 MP sensor often outputs 12 MP files by combining every 2x2 pixel group.",
          "Believing high MP count alone equals better image quality - sensor size and lens quality matter more for noise and dynamic range.",
          "Forgetting that crop factor changes effective megapixels - a 45 MP full-frame cropped to APS-C becomes roughly a 20 MP file.",
          "Using web megapixel counts (usually under 2 MP at 1920 x 1080) as a benchmark for print requirements."
        ]
      }
    ]
  },
  "es": { "faq": [], "sections": [] },
  "fr": { "faq": [], "sections": [] },
  "de": { "faq": [], "sections": [] },
  "pt": { "faq": [], "sections": [] },
  "hi": { "faq": [], "sections": [] },
  "ja": { "faq": [], "sections": [] },
  "ko": { "faq": [], "sections": [] },
  "it": { "faq": [], "sections": [] },
  "nl": { "faq": [], "sections": [] },
  "ar": { "faq": [], "sections": [] },
  "tr": { "faq": [], "sections": [] },
  "pl": { "faq": [], "sections": [] },
  "id": { "faq": [], "sections": [] },
  "ru": { "faq": [], "sections": [] }
};
