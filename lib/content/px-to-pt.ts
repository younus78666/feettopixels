import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "How do I convert pixels to points?",
        "answer": "Multiply the pixel value by 72/96 (which equals 0.75). For example, 16px x 0.75 = 12pt. This assumes the standard 96 DPI screen resolution. Points are 1/72 of an inch, while CSS pixels are 1/96 of an inch."
      },
      {
        "question": "Why are pixels and points different sizes?",
        "answer": "Points come from traditional typography where 1 point = 1/72 inch. CSS pixels are defined as 1/96 inch. Since 72/96 = 0.75, one CSS pixel equals 0.75 points. A 12pt font displays at 16px on screen."
      },
      {
        "question": "When should I use points instead of pixels?",
        "answer": "Use points for print stylesheets (CSS @media print) and when matching web typography to print design specifications. Points are the standard unit in print design software like InDesign and Word."
      },
      {
        "question": "What is the relationship between pt, px, and DPI?",
        "answer": "At 96 DPI (CSS standard): 1pt = 1.333px. At 72 DPI: 1pt = 1px. The formula is: pt = px x 72 / DPI. The standard conversion assumes 96 DPI, which is the CSS reference pixel."
      },
      {
        "question": "How do common font sizes compare between px and pt?",
        "answer": "8pt = 10.667px, 10pt = 13.333px, 11pt = 14.667px, 12pt = 16px, 14pt = 18.667px, 18pt = 24px, 24pt = 32px, 36pt = 48px, 72pt = 96px."
      }
    ],
    "sections": [
      {
        "id": "how-it-works",
        "title": "How the PX to PT Converter Works",
        "paragraphs": [
          "The conversion between CSS pixels and typographic points depends on the two units' physical definitions. A point (pt) is exactly 1/72 of an inch, a five-century-old typographic unit. A CSS pixel (px) is defined by the CSS specification as 1/96 of an inch at the reference viewing distance. Since 72/96 simplifies to 0.75, the conversion formula is: points = pixels x 0.75, or equivalently pixels = points x (4/3), which is about 1.333. A 16px CSS value becomes 12pt, and a 12pt font matches 16px on screen.",
          "That specific ratio has a historical reason. Early Windows systems adopted 96 DPI as the logical screen resolution, while printers and typesetting standards used the 72 DPI print reference. To keep a 12-point font visually similar whether printed or shown on a 96 DPI screen, browsers normalized CSS px to 1/96 inch. That historical compromise gives us today's 4:3 relationship. The general formula works at any DPI: pt = px x 72 / DPI. At 96 DPI, 12pt = 16px. At 150 DPI, 12pt = 25px. At 300 DPI print output, 12pt = 50 actual dots.",
          "Use this converter whenever you move between design tools (which often default to points or picas for typography) and web CSS (which uses pixels). For related typography unit conversions see px-to-em and px-to-rem."
        ]
      },
      {
        "id": "when-to-use",
        "title": "When to Use Points Instead of Pixels",
        "paragraphs": [
          "Points remain the standard unit for print typography and several cross-platform design workflows. Reach for PT over PX in these scenarios:"
        ],
        "list": [
          "Writing print stylesheets (@media print) where points ensure predictable sizing on paper.",
          "Matching web type to an existing print brand guideline that specifies body at 10pt and headings at 24pt.",
          "Importing CSS values into InDesign, Illustrator, or Microsoft Word documents that expect points.",
          "Communicating with print vendors or designers who work exclusively in points or picas.",
          "Converting legacy stylesheets from desktop-publishing origins into modern CSS pixels.",
          "Specifying font size in PDF export settings where PDF natively uses points."
        ]
      },
      {
        "id": "practical-examples",
        "title": "Practical Examples",
        "paragraphs": [
          "The table below lists common font sizes in both units. The left-hand column shows typical body, caption, and heading sizes in pixels; the right shows the exact point equivalent."
        ],
        "table": {
          "headers": ["Pixels", "Points", "Use Case", "Approximate Height"],
          "rows": [
            ["10px", "7.5pt", "Fine print, legal footer", "Very small"],
            ["12px", "9pt", "Caption, metadata", "Small"],
            ["14px", "10.5pt", "Secondary body text", "Small-medium"],
            ["16px", "12pt", "Standard body text", "Medium (baseline)"],
            ["18px", "13.5pt", "Lead paragraph", "Medium-large"],
            ["20px", "15pt", "Small heading (H4)", "Large"],
            ["24px", "18pt", "Section heading (H3)", "Larger"],
            ["32px", "24pt", "Article title (H2)", "Extra large"],
            ["48px", "36pt", "Hero heading (H1)", "Display"],
            ["72px", "54pt", "Poster-style headline", "Display-XL"]
          ]
        }
      },
      {
        "id": "common-mistakes",
        "title": "Common Mistakes to Avoid",
        "paragraphs": [
          "Point-pixel conversions are mostly mechanical. A few conceptual mistakes cause subtle problems in production, though."
        ],
        "list": [
          "Assuming 1pt always equals 1px. That only holds at 72 DPI, not the 96 DPI CSS reference.",
          "Using points in screen stylesheets where browser rendering introduces rounding. Pixels are the safer default for screens.",
          "Treating point sizes in Word or InDesign as identical to CSS pt. They match mathematically, but display size depends on the device DPI.",
          "Forgetting that Windows high-DPI scaling changes how operating systems interpret point sizes in legacy apps.",
          "Hard-coding the 0.75 multiplier in code without documenting the assumption that CSS pixels are at 96 DPI.",
          "Mixing pt and px within the same stylesheet, which makes consistent vertical rhythm harder to maintain."
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
