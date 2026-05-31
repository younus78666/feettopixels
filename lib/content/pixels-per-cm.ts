import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "How many pixels are in 1 cm?",
        "answer": "At 96 DPI (web standard), 1 cm equals 37.80 pixels. At 300 DPI (print standard), 1 cm equals 118.11 pixels. The conversion depends on the DPI of the output device."
      },
      {
        "question": "What is the formula for pixels per cm?",
        "answer": "Pixels per cm = DPI / 2.54. Since there are 2.54 centimeters in one inch, divide the DPI by 2.54 to get pixels per centimeter. For example, 300 DPI / 2.54 = 118.11 pixels per cm."
      },
      {
        "question": "How do I convert cm to pixels?",
        "answer": "Multiply the centimeter value by (DPI / 2.54). For example, 10 cm at 300 DPI = 10 × 118.11 = 1181 pixels."
      }
    ],
    "sections": [
      {
        "id": "formula",
        "title": "Formula",
        "paragraphs": [
          "To calculate how many pixels fit in one centimeter at a given DPI:",
          "Pixels per cm = DPI / 2.54",
          "This works because one inch equals exactly 2.54 centimeters. DPI tells you pixels per inch, so dividing by 2.54 gives you pixels per centimeter."
        ]
      },
      {
        "id": "reference-table",
        "title": "Pixels Per CM Reference Table",
        "table": {
          "headers": [
            "DPI",
            "Pixels per CM",
            "Pixels per 5 CM",
            "Pixels per 10 CM",
            "Use Case"
          ],
          "rows": [
            [
              "72",
              "28.35",
              "141.73",
              "283.46",
              "Legacy web, large banners"
            ],
            [
              "96",
              "37.80",
              "188.98",
              "377.95",
              "Web standard (Windows)"
            ],
            [
              "150",
              "59.06",
              "295.28",
              "590.55",
              "Draft print, documents"
            ],
            [
              "200",
              "78.74",
              "393.70",
              "787.40",
              "Medium-quality print"
            ],
            [
              "300",
              "118.11",
              "590.55",
              "1181.10",
              "Professional print"
            ],
            [
              "600",
              "236.22",
              "1181.10",
              "2362.20",
              "Fine art, medical"
            ]
          ]
        }
      },
      {
        "id": "practical-use",
        "title": "When You Actually Need to Think in Pixels Per CM",
        "paragraphs": [
          "Most web designers never think in pixels per centimeter because CSS works in pixels, REM, and VW. You'll need pixels-per-cm conversion in specific situations: you're setting up a print file in Photoshop, Illustrator, or GIMP and the output dimensions are specified in centimeters; you're matching a web design to a physical object (a business card, a label, a packaging mockup) and the client's brief uses metric measurements; or you're preparing figures for an academic journal that specifies image size in centimeters at 300 DPI.",
          "Outside those print and publishing workflows, pixel-per-cm math rarely comes up. Screen design tools work in pixels. CSS works in CSS units. If a client hands you a brief in centimeters and you need to produce a web asset, use 96 DPI as the screen reference. If they want a print file, use 300 DPI for professional results.",
          "Convert specific centimeter values to pixels with our CM to Pixels Converter, or see the full conversion matrix in our DPI Conversion Table."
        ],
        "list": [
          "European print design: Paper and image dimensions are specified in centimeters (A4 is 21 x 29.7 cm).",
          "Scientific publications: Figure dimensions are often required in centimeters at a specific DPI.",
          "Product packaging: Label dimensions use metric measurements that need conversion to pixel dimensions for design software."
        ]
      },
      {
        "id": "accuracy-checks",
        "title": "How to Check a Pixels-Per-CM Result",
        "paragraphs": [
          "A pixels-per-centimeter value is a density, not a finished canvas size. After finding px/cm, multiply it by the number of centimeters in the final width or height. For example, 12 cm at 300 DPI uses 118.11 px/cm, so the target width is roughly 1,417 pixels.",
          "For a screen mockup, 96 DPI is usually the CSS reference point. For a printed file, use the DPI requested by the printer or publisher. Keeping that DPI note beside the px/cm value prevents the same number from being reused in the wrong production context."
        ]
      },
      {
        "id": "common-cm-conversions",
        "title": "Common Object Sizes in CM and Pixels",
        "paragraphs": [
          "Here are frequently needed centimeter-to-pixel conversions for common design objects at 96 DPI (screen) and 300 DPI (professional print). Use these as quick references when setting up new design files."
        ],
        "table": {
          "headers": ["Object", "Size (cm)", "96 DPI", "300 DPI"],
          "rows": [
            ["Business card (EU standard)", "8.5 x 5.4 cm", "324 x 207 px", "1004 x 638 px"],
            ["A4 width", "21 cm", "794 px", "2480 px"],
            ["A4 height", "29.7 cm", "1123 px", "3508 px"],
            ["A5 width", "14.8 cm", "560 px", "1748 px"],
            ["A5 height", "21 cm", "794 px", "2480 px"],
            ["Credit card (ISO 7810)", "8.56 x 5.4 cm", "324 x 207 px", "1008 x 638 px"]
          ]
        }
      },
      {
        "id": "design-software-cm",
        "title": "Setting Up a CM-Based Canvas in Design Software",
        "paragraphs": [
          "Most design tools accept centimeters as a unit and convert to pixels internally based on the document DPI. Here's how to configure this correctly:",
          "In Photoshop: File > New. Set width and height units to Centimeters, then set Resolution to 300 pixels/inch for print or 96 pixels/inch for screen mockups. Photoshop calculates pixel dimensions automatically.",
          "In Illustrator: New Document dialog, set units to Centimeters. Illustrator uses 72 points per inch internally, but displays artboard dimensions in your chosen unit.",
          "In GIMP: Image > Canvas Size. Select centimeters as the unit. Set the print resolution under Image > Print Size. Use 300 ppi for print, 96 ppi for web.",
          "In Canva: enter dimensions in centimeters when creating a custom design. Canva renders at 96 DPI for web previews and uses 300 DPI when you export a print-quality PDF."
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
