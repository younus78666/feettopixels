import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [],
    "sections": [
      {
        "id": "about-feettopixels",
        "title": "About FeetToPixels",
        "paragraphs": [
          "FeetToPixels is a focused collection of pixel conversion tools for designers, developers, students, and print professionals. Every tool is built around DPI-aware conversion, so the results make sense for both screens and physical output.",
          "The site doesn't try to be a generic unit converter. It stays centered on the workflows people actually use when moving between pixels, inches, centimeters, millimeters, feet, and CSS sizing units."
        ]
      },
      {
        "id": "why-dpi-matters",
        "title": "Why DPI Matters",
        "paragraphs": [
          "A pixel doesn't have a fixed physical size. The same 1200-pixel image can print small and sharp at 300 DPI, or much larger at 72 DPI. Without DPI context, pixel-to-physical conversion is incomplete.",
          "FeetToPixels keeps DPI in the calculation so you can plan web layouts, print files, signage, packaging, and large-format artwork with realistic dimensions."
        ]
      },
      {
        "id": "what-you-can-do",
        "title": "What You Can Do Here",
        "list": [
          "Convert between pixels and physical units like inches, centimeters, millimeters, and feet.",
          "Calculate screen density with DPI and PPI tools.",
          "Convert CSS units such as px, rem, em, pt, and vw for responsive front-end work.",
          "Use reference guides for print sizing, screen resolution, and image preparation."
        ]
      },
      {
        "id": "accuracy-and-privacy",
        "title": "Accuracy and Privacy",
        "paragraphs": [
          "The formulas on FeetToPixels use standard measurement relationships: 1 inch = 25.4 millimeters and 1 foot = 12 inches. The tools are designed to be fast, practical, and easy to verify.",
          "Most interactive tools run directly in your browser. That keeps image checks and calculations private while also making the site fast to use."
        ]
      },
      {
        "id": "editorial-method",
        "title": "How We Build and Review the Tools",
        "paragraphs": [
          "Each conversion page starts with a short answer, then shows the formula, examples, and related tools that help validate the result. For physical conversions, the site keeps DPI visible because pixels only become inches, centimeters, millimeters, or feet after a resolution value is defined. For CSS conversions, the relevant context is the root font size, parent font size, viewport width, or point-to-pixel relationship.",
          "We review calculator pages against three practical questions: can a reader reproduce the math, does the page explain when the result changes, and does it point to the next useful page without forcing the reader to search again? That's why many pages include conversion tables, worked examples, FAQs, and links between DPI, PPI, image sizing, and CSS units."
        ],
        "list": [
          "Formulas must be visible or explained in plain language.",
          "Tables should use values that a designer, developer, printer, or student might actually need.",
          "Content should distinguish screen preview, print output, social upload, and CSS layout assumptions.",
          "Reference pages are updated when official platform guidance, browser behavior, or common device data changes."
        ]
      },
      {
        "id": "who-it-helps",
        "title": "Who FeetToPixels Is For",
        "paragraphs": [
          "Designers use FeetToPixels to decide whether an image has enough pixels for a given print size. Developers use the CSS unit tools to convert between px, rem, em, pt, and vw while keeping responsive layouts predictable. Print teams use the DPI and large-format references to estimate whether a banner, poster, or sign will hold up at its viewing distance.",
          "The site also covers quick spot checks. A photographer can test whether a 3000 x 2000 image is enough for an 8 x 10 print. A student can convert A4 dimensions to pixels before making a document cover. A front-end developer can convert a design token from 24px to 1.5rem and confirm the root font-size assumption before shipping CSS."
        ]
      },
      {
        "id": "why-use-feettopixels",
        "title": "Why Use FeetToPixels Instead of a Generic Converter",
        "paragraphs": [
          "Generic unit converters omit DPI. They'll tell you there are 2.54 centimeters in an inch, but they can't tell you how many pixels fit in that inch because that depends on the output device. FeetToPixels keeps DPI as a first-class input, which is the one thing that makes pixel math actually correct.",
          "The tools are also scoped to real workflows. A web designer needs rem and vw, not miles or nautical miles. A print shop needs 300 DPI presets and millimeter inputs. A developer preparing app assets needs DPR-aware pixel counts. Each tool on this site exists because a specific workflow needs it, not to pad a feature list."
        ]
      },
      {
        "id": "what-we-avoid",
        "title": "What We Avoid",
        "paragraphs": [
          "FeetToPixels doesn't treat one DPI value as correct for every job. A web image, a passport-style upload, a 4 x 6 photo print, a storefront banner, and a CSS layout token all need different context. The goal is to make that context visible so the result can be checked rather than blindly copied.",
          "Pages don't get padded with unrelated topics either. When a page needs more explanation, that content should help you understand the formula, pick the right DPI, avoid a common mistake, or move to the next calculator."
        ]
      },
      {
        "id": "tool-categories",
        "title": "Tool Categories on FeetToPixels",
        "paragraphs": [
          "FeetToPixels organizes its tools into four categories to help visitors find the right converter for their workflow."
        ],
        "list": [
          "Physical unit converters: pixels to inches, cm, mm, and feet, plus the reverse direction. These are the core tools for print and physical design work where DPI is the key variable.",
          "Screen and density tools: DPI calculator, PPI calculator, screen resolution checker, pixel ruler, and image DPI checker. These tools answer questions about display quality and pixel density.",
          "CSS unit converters: px to rem, rem to px, px to em, em to px, px to pt, pt to px, px to vw, and vw to px. These tools support responsive front-end development and design token workflows.",
          "Reference guides: explanations of DPI vs PPI, pixel definitions, best DPI settings for web and print, standard image sizes, paper sizes, and common resolutions. These pages give context for the numbers the converters produce."
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
