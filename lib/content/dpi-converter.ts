import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "What happens when I convert from 72 DPI to 300 DPI?",
        "answer": "The pixel count stays the same, but the physical print size decreases. A 10-inch wide image at 72 DPI (720 pixels) becomes only 2.4 inches wide at 300 DPI, because more pixels are packed into each inch."
      },
      {
        "question": "Can I increase DPI without losing quality?",
        "answer": "Simply changing the DPI metadata does not add pixels - it only changes how densely existing pixels are printed. To maintain print size at a higher DPI, you would need to upscale the image, which may reduce quality unless done with AI upscaling tools."
      },
      {
        "question": "What DPI should I use for printing?",
        "answer": "300 DPI is the standard for professional printing (brochures, magazines, photos). 150 DPI is acceptable for large-format posters viewed from a distance. Billboard printing can use as low as 30-50 DPI."
      },
      {
        "question": "What DPI are web images typically?",
        "answer": "Web images are typically 72 or 96 DPI. However, DPI does not matter on screen - only pixel dimensions matter for web display. A 1000px wide image appears the same on screen whether it is set to 72, 96, or 300 DPI."
      },
      {
        "question": "How do I convert a web image for print?",
        "answer": "Enter the web DPI (usually 72) as current DPI and 300 as target DPI, along with the current print size. The calculator shows the new (smaller) print size. If the result is too small, you will need a higher-resolution source image."
      }
    ],
    "sections": [
      {
        "id": "how-it-works",
        "title": "How the DPI Converter Works",
        "paragraphs": [
          "The DPI Converter changes the DPI metadata tag of an image without touching its pixel data. This sounds like a minor operation, but it fundamentally changes how a printer interprets the file. An image has two separate properties: pixel dimensions (how many pixels wide and tall) and DPI (how many of those pixels get packed into one printed inch). Only the second number changes when you 'convert' DPI. The formula relating them is: print-size-in-inches = pixel-dimension / DPI. Double the DPI and the print becomes half as wide for the same pixel count.",
          "Consider a 3000 x 2000 pixel image. At 72 DPI it prints at 3000/72 = 41.7 inches by 27.8 inches - a poster. Change the metadata to 300 DPI and those same pixels now print at 3000/300 = 10 inches by 6.67 inches - a letter-size photo. The file is byte-for-byte identical; only the printing software reads a different density. No pixels are created, destroyed, or resampled. This is why professional printers always request the pixel dimensions in addition to DPI.",
          "For the underlying math behind DPI itself, see what-is-dpi. For calculating DPI from resolution and screen size, use the dpi-calculator. For pure print resolution planning, see pixels-per-inch."
        ]
      },
      {
        "id": "when-to-use",
        "title": "When to Use the DPI Converter",
        "paragraphs": [
          "Changing DPI metadata is most useful when a printer, stock photo site, or client workflow insists on a specific DPI flag even though the pixel data is already adequate. Common situations include:"
        ],
        "list": [
          "Submitting artwork to Adobe Stock, Shutterstock, or other marketplaces that require 300 DPI files.",
          "Preparing press-ready PDFs for a print shop whose preflight checker rejects anything below 300 DPI.",
          "Fixing a phone photo that exports at 72 DPI but is plenty large in pixels for professional print.",
          "Converting scanned documents so they open at the intended physical size in Word or InDesign.",
          "Matching a company brand-asset standard that mandates 300 DPI for all production files.",
          "Preparing fine-art giclee prints where the RIP software uses the embedded DPI to determine paper size."
        ]
      },
      {
        "id": "practical-examples",
        "title": "Practical Examples",
        "paragraphs": [
          "The table below shows how the same 3000 x 2000 pixel image prints at various DPI settings. Pixel count does not change - only the physical print dimensions shift."
        ],
        "table": {
          "headers": ["DPI Setting", "Print Width", "Print Height", "Typical Use"],
          "rows": [
            ["72 DPI", "41.67 in", "27.78 in", "Web/legacy default (do not use for print)"],
            ["96 DPI", "31.25 in", "20.83 in", "CSS reference / Windows default"],
            ["150 DPI", "20.00 in", "13.33 in", "Large poster viewed from 3+ feet"],
            ["200 DPI", "15.00 in", "10.00 in", "Newspaper / low-cost flyer"],
            ["240 DPI", "12.50 in", "8.33 in", "Photo inkjet, minimum quality"],
            ["300 DPI", "10.00 in", "6.67 in", "Professional offset print standard"],
            ["400 DPI", "7.50 in", "5.00 in", "Fine art / coffee-table book"],
            ["600 DPI", "5.00 in", "3.33 in", "Line art / technical illustration"]
          ]
        }
      },
      {
        "id": "common-mistakes",
        "title": "Common Mistakes to Avoid",
        "paragraphs": [
          "The single biggest misconception about DPI is that changing the metadata improves image quality. It does not. A 500 x 500 pixel image tagged as 3000 DPI still prints a blurry postage stamp at 3000 DPI."
        ],
        "list": [
          "Thinking DPI conversion increases resolution - it only relabels existing pixels.",
          "Uploading a 72 DPI image at 800 x 600 pixels and expecting a quality 10-inch photo print (you would need 3000 x 2250 pixels at 300 DPI).",
          "Relying on Photoshop's 'Resample Image' toggle to rescue low-resolution files - upscaling adds pixels by interpolation, not detail.",
          "Saving web images at 300 DPI 'just in case' - web browsers ignore DPI entirely; only pixel dimensions matter on screen.",
          "Confusing DPI with PPI when talking to a print vendor - most shops use them interchangeably, but clarify to avoid confusion.",
          "Forgetting to re-export after changing DPI in the Image Size dialog - some tools only update on save."
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
