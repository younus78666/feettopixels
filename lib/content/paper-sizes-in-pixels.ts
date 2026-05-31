import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "What is A4 size in pixels at 300 DPI?",
        "answer": "A4 paper (210 x 297 mm or 8.27 x 11.69 inches) at 300 DPI is 2480 x 3508 pixels. This is the standard resolution for professional print-quality A4 documents."
      },
      {
        "question": "What is US Letter size in pixels at 300 DPI?",
        "answer": "US Letter (8.5 x 11 inches) at 300 DPI is 2550 x 3300 pixels. This is the standard for print-ready documents in North America."
      },
      {
        "question": "What DPI should I use for paper size conversions?",
        "answer": "Use 300 DPI for professional printing, 150 DPI for draft prints and home use, 96 DPI for screen mockups, and 72 DPI for web-only documents."
      },
      {
        "question": "What is A3 size in pixels?",
        "answer": "A3 (297 x 420 mm) at 300 DPI is 3508 x 4961 pixels. At 150 DPI, it is 1754 x 2480 pixels. At 72 DPI, it is 842 x 1191 pixels."
      }
    ],
    "sections": [
      {
        "id": "iso-a-series",
        "title": "ISO A Series Paper Sizes",
        "paragraphs": [
          "ISO 216 defines the A series paper sizes used in most countries outside North America. Each size is exactly half the next larger size along its longer dimension, so A5 is half of A4, A4 is half of A3, and so on. All values below are in pixels (width x height)."
        ],
        "table": {
          "headers": [
            "Size",
            "mm",
            "Inches",
            "72 DPI",
            "96 DPI",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "A3",
              "297 × 420",
              "11.69 × 16.54",
              "842 × 1191",
              "1123 × 1588",
              "1754 × 2480",
              "3508 × 4961"
            ],
            [
              "A4",
              "210 × 297",
              "8.27 × 11.69",
              "595 × 842",
              "794 × 1123",
              "1240 × 1754",
              "2480 × 3508"
            ],
            [
              "A5",
              "148 × 210",
              "5.83 × 8.27",
              "420 × 595",
              "560 × 794",
              "874 × 1240",
              "1748 × 2480"
            ],
            [
              "A6",
              "105 × 148",
              "4.13 × 5.83",
              "298 × 420",
              "397 × 560",
              "620 × 874",
              "1240 × 1748"
            ],
            [
              "A2",
              "420 × 594",
              "16.54 × 23.39",
              "1191 × 1684",
              "1588 × 2245",
              "2480 × 3508",
              "4961 × 7016"
            ],
            [
              "A1",
              "594 × 841",
              "23.39 × 33.11",
              "1684 × 2384",
              "2245 × 3179",
              "3508 × 4967",
              "7016 × 9933"
            ],
            [
              "A0",
              "841 × 1189",
              "33.11 × 46.81",
              "2384 × 3370",
              "3179 × 4494",
              "4967 × 7022",
              "9933 × 14043"
            ]
          ]
        }
      },
      {
        "id": "us-paper-sizes",
        "title": "US Paper Sizes",
        "table": {
          "headers": [
            "Size",
            "Inches",
            "72 DPI",
            "96 DPI",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "Letter",
              "8.5 × 11",
              "612 × 792",
              "816 × 1056",
              "1275 × 1650",
              "2550 × 3300"
            ],
            [
              "Legal",
              "8.5 × 14",
              "612 × 1008",
              "816 × 1344",
              "1275 × 2100",
              "2550 × 4200"
            ],
            [
              "Tabloid",
              "11 × 17",
              "792 × 1224",
              "1056 × 1632",
              "1650 × 2550",
              "3300 × 5100"
            ],
            [
              "Executive",
              "7.25 × 10.5",
              "522 × 756",
              "696 × 1008",
              "1088 × 1575",
              "2175 × 3150"
            ]
          ]
        }
      },
      {
        "id": "how-to-calculate",
        "title": "How to Calculate Paper Size in Pixels",
        "paragraphs": [
          "The formula is: pixels = inches x DPI. For metric measurements, divide millimeters by 25.4 to get inches, then multiply by DPI.",
          "For example, A4 width: 210 mm / 25.4 = 8.27 inches x 300 DPI = 2480 pixels.",
          "Use our Image Size Calculator for quick conversions, or browse our Inches to Pixels converter for custom dimensions."
        ]
      },
      {
        "id": "a4-vs-letter",
        "title": "A4 vs US Letter: What's the Difference?",
        "paragraphs": [
          "A4 (210 x 297 mm) and US Letter (8.5 x 11 in / 216 x 279 mm) are the two most common paper sizes in the world, and they're close but not interchangeable. A4 is taller and slightly narrower than Letter. At 300 DPI, A4 is 2480 x 3508 pixels and Letter is 2550 x 3300 pixels.",
          "A4 is the standard in Europe, Asia, Australia, and most of the rest of the world. US Letter is the default in the United States, Canada, and parts of Latin America. If you send an A4-formatted PDF to a US print shop expecting Letter paper, the printer will either scale it down or clip the top and bottom.",
          "For documents shared internationally, choose your format based on where the document will be printed or read. A4 works for most global audiences. US Letter is the right choice for anything printed inside North America. If you're designing templates for both markets, build two versions rather than trying to make one size fit all."
        ]
      },
      {
        "id": "wrong-paper-size",
        "title": "What Happens When You Use the Wrong Paper Size?",
        "paragraphs": [
          "Getting the paper size wrong doesn't just create an ugly document; it can cause print shop rejections, scaling artifacts, and wasted print runs. The most common problems fall into three categories.",
          "Pixel dimension mismatch: if your canvas is set to the wrong size, your content won't fill the page correctly. A document set up at US Letter dimensions printed on A4 will have white bands at the top and bottom, or content will be scaled and distorted if auto-fit is on.",
          "Bleed failures: professional printers require bleed content to extend 3 mm beyond the trim edge. If you supply a file without bleed at all, or with bleed sized for a different paper format, the trim line cuts into your design instead of through the bleed zone. This is one of the most common reasons print shops reject files.",
          "Resolution problems: if you set up a document at incorrect pixel dimensions and then scale it to fit the correct paper size, you effectively change the DPI. A 72 DPI web document scaled up to fill a 300 DPI print canvas will look blurry. Always set the correct paper size and DPI from the start of your project."
        ]
      },
      {
        "id": "which-paper-size",
        "title": "Which Paper Size Should You Use for Your Project?",
        "paragraphs": [
          "The right paper size depends on what you're making and where it will be used. Here's a practical guide to the most common choices.",
          "A4 is the right default for most business documents, reports, letters, and presentations outside North America. It's the format printers, office supplies, and templates are built around in Europe, Asia, and Australia.",
          "US Letter is the correct choice for anything printed in the United States or Canada: resumes, contracts, business letters, and Microsoft Word documents. Letter is also the default for most US-based online print services.",
          "A5 works well for booklets, flyers, and notebooks. It's exactly half of A4, so you can print two A5 pages on one A4 sheet and fold them.",
          "A3 and Tabloid (11 x 17 in) are the standard for posters, presentation boards, architectural drawings, and newspaper-style spreads. A3 is used in most countries; Tabloid is the US equivalent.",
          "A2 and A1 are for large-format posters, exhibition graphics, and technical drawings that need to display detailed content at a distance.",
          "A6 is useful for postcards, invitations, and small flyers. It fits neatly in a standard envelope and prints four-up on A4."
        ]
      },
      {
        "id": "design-software-setup",
        "title": "Setting Up Paper Size Documents in Design Software",
        "paragraphs": [
          "Most design applications include preset paper sizes. Knowing the pixel dimensions behind those presets helps you catch resolution problems before they reach the printer.",
          "In Photoshop: File > New. Choose a preset (A4, Letter, etc.) from the panel, then set Resolution to 300 pixels/inch. Photoshop calculates the correct pixel canvas dimensions automatically.",
          "In Illustrator: New Document > Print category. Select A4, Letter, or any other preset. Illustrator uses 72 points per inch internally, but the artboard matches your paper dimensions accurately.",
          "In Canva: search for 'A4' or 'Letter' when creating a new design. Canva sets proportional canvas dimensions. Export as Print PDF with bleeds enabled for professional print output.",
          "In InDesign: File > New Document. Select page size from the preset dropdown. InDesign is purpose-built for print production and handles DPI, bleed zones, and margins without manual calculation."
        ]
      },
      {
        "id": "bleed-and-margins",
        "title": "Print Bleed and Safety Margins in Pixels",
        "paragraphs": [
          "Professional printing requires bleed and safety margins. Bleed is extra content beyond the trim edge that prevents white gaps after cutting. Safety margins keep important elements away from the trim zone.",
          "Standard bleed is 3 mm (0.118 inches) on each side. At 300 DPI, that adds 35 pixels per edge. For A4 at 300 DPI (2480 x 3508 px), the full canvas with bleed becomes 2550 x 3578 pixels.",
          "Safety margins are typically 3 to 5 mm inside the trim edge. Keep text, logos, and key graphics within this inner safe zone. At 300 DPI, a 5 mm margin is about 59 pixels from each edge."
        ],
        "table": {
          "headers": ["Paper Size", "300 DPI (trim size)", "With 3mm Bleed (300 DPI)"],
          "rows": [
            ["A4", "2480 x 3508 px", "2550 x 3578 px"],
            ["A5", "1748 x 2480 px", "1819 x 2550 px"],
            ["US Letter", "2550 x 3300 px", "2621 x 3371 px"],
            ["A3", "3508 x 4961 px", "3579 x 5031 px"],
            ["US Legal", "2550 x 4200 px", "2621 x 4271 px"]
          ]
        }
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
