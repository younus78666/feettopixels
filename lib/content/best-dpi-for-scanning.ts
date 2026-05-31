import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "What DPI should I scan photos?",
        "answer": "Scan photos at 600 DPI for archiving or printing enlargements. Use 300 DPI for digital sharing, email, or printing at the same size as the original. Use 1200 DPI for small originals (wallet photos, slides) that you plan to enlarge. Higher DPI produces sharper scans at larger output sizes but creates bigger files."
      },
      {
        "question": "What is a good DPI for scanning old photos?",
        "answer": "600 DPI is the recommended minimum for old or irreplaceable photos. At 600 DPI, a standard 4x6 photo produces a 2400x3600 pixel file -- enough to print cleanly at 8x12 inches at 300 DPI. For very old, damaged, or small originals, scan at 1200 DPI to give yourself more restoration flexibility."
      },
      {
        "question": "What DPI should I scan 35mm slides or negatives?",
        "answer": "Scan 35mm slides and negatives at 2400-4000 DPI. A 35mm frame is only 24x36mm, so you need high DPI to get enough pixels for large prints. At 2400 DPI a 35mm slide produces roughly 2268x3402 pixels -- a 7.5x11.3 inch print at 300 DPI. At 4000 DPI you get 3779x5669 pixels -- a 12.6x18.9 inch print at 300 DPI."
      },
      {
        "question": "What DPI to scan documents for OCR?",
        "answer": "300 DPI is the standard for document scanning and OCR (optical character recognition). Most OCR software works accurately at 300 DPI. For small fonts (under 8pt) or faded text, use 400-600 DPI. Avoid scanning documents at less than 200 DPI for OCR as accuracy drops significantly."
      },
      {
        "question": "Does higher scan DPI always mean better quality?",
        "answer": "Up to a point. Most flatbed scanners have an optical resolution limit of 600-1200 DPI. Scanning above the optical maximum uses interpolation (software upscaling) which adds file size without adding real detail. Check your scanner's optical DPI spec and don't exceed it unless you have a specific reason."
      },
      {
        "question": "What DPI for scanning artwork or drawings?",
        "answer": "Scan artwork at 300-600 DPI for digital use or small prints. For large reproduction prints, scan at the DPI needed: if the artwork is 8x10 inches and you want a 24x30 inch print at 150 DPI, you need 3600x4500 pixels -- about 600 DPI from the original. Formula: required DPI = (output inches x output DPI) / original inches."
      }
    ],
    "sections": [
      {
        "id": "scanning-dpi-guide",
        "title": "What DPI to Use for Scanning",
        "paragraphs": [
          "Scan DPI (dots per inch) controls how many pixels your scanner captures per inch of the original. Higher scan DPI produces more pixels and allows larger output prints, but creates bigger files. The right DPI depends on what you plan to do with the scan.",
          "For most photo scanning, 600 DPI is the practical standard: it captures enough detail for large prints, archiving, and restoration work without creating unmanageable file sizes. At 600 DPI, a 4x6 photo becomes a 2400x3600 pixel file -- about 25 MB uncompressed, or 3-5 MB as a JPEG."
        ]
      },
      {
        "id": "dpi-by-scan-type",
        "title": "Recommended Scan DPI by Type",
        "table": {
          "headers": ["Original Type", "Recommended DPI", "Use Case", "Output Pixels (4x6 example)"],
          "rows": [
            ["Standard photo (4x6 to 8x10)", "300 DPI", "Digital sharing, same-size prints", "1200 x 1800"],
            ["Standard photo archiving", "600 DPI", "Large prints, restoration", "2400 x 3600"],
            ["Small photo (wallet size)", "1200 DPI", "Enlargement to standard sizes", "900 x 1350 from 0.75x1.13in"],
            ["35mm slide or negative", "2400-4000 DPI", "8x10 to 12x18 prints", "2268 x 3402 at 2400 DPI"],
            ["Medium format negative", "1200-2400 DPI", "Large print reproduction", "Varies by frame size"],
            ["Document (A4/Letter)", "200-300 DPI", "Digital copy, reading", "1654 x 2338 at 200 DPI"],
            ["Document with OCR", "300-400 DPI", "Text extraction, archiving", "2479 x 3508 at 300 DPI"],
            ["Artwork / illustration", "300-600 DPI", "Print reproduction", "2400 x 3000 from 8x10in at 300"],
            ["Book page", "300 DPI", "Reading, archiving", "2550 x 3300 for Letter page"]
          ]
        }
      },
      {
        "id": "photo-scanning",
        "title": "Scanning Photos: 300 vs 600 DPI",
        "paragraphs": [
          "300 DPI is the minimum for photos you plan to share digitally or print at the same size as the original. A 4x6 photo at 300 DPI produces 1200x1800 pixels -- enough for printing back at 4x6 at professional quality or displaying on any modern screen.",
          "600 DPI doubles the linear resolution and quadruples the pixel count. Use 600 DPI when you want to print the scan at a larger size than the original, restore or edit the photo in detail, or archive originals for long-term preservation. The added file size is worth it for irreplaceable photos.",
          "Above 600 DPI, most consumer flatbed scanners use interpolation rather than true optical resolution. Check your scanner's maximum optical DPI -- scanning above it only inflates file size without improving actual detail."
        ]
      },
      {
        "id": "slide-negative-scanning",
        "title": "Scanning 35mm Slides and Negatives",
        "paragraphs": [
          "35mm film frames are only 24x36mm -- about the size of a thumbnail. To get a useful print from a 35mm scan, you need high DPI to compensate for the tiny original size.",
          "At 2400 DPI, a 35mm slide produces approximately 2268x3402 pixels. That's enough for an 8x11 inch print at 300 DPI. At 4000 DPI you get around 3779x5669 pixels, sufficient for a 12.6x18.9 inch print at 300 DPI.",
          "Dedicated film scanners are significantly sharper than flatbed scanners for film, because flatbed scanners are optimized for reflective originals (prints, documents) rather than transparent film. If you need to scan large quantities of film, a dedicated film scanner or professional scanning service will produce better results."
        ]
      },
      {
        "id": "document-scanning",
        "title": "Scanning Documents and Text",
        "paragraphs": [
          "Documents don't need as high a scan DPI as photos because text doesn't require the same tonal gradations. 200-300 DPI captures legible text for viewing and filing. For documents you plan to run through OCR software, 300 DPI is the standard -- most OCR engines are tuned for this resolution.",
          "For faded documents, small print (under 8pt font), or handwritten notes, increase to 400-600 DPI. More pixels give OCR algorithms more data to work with and improve recognition accuracy on difficult text."
        ]
      },
      {
        "id": "file-size-tradeoffs",
        "title": "Scan DPI and File Size",
        "paragraphs": [
          "Doubling scan DPI quadruples the pixel count and roughly quadruples the uncompressed file size. A 4x6 photo scanned at 300 DPI produces a 1200x1800 pixel file -- about 6.5 MB uncompressed (24-bit color). The same photo at 600 DPI is 2400x3600 pixels -- about 25 MB uncompressed.",
          "JPEG compression reduces these sizes dramatically. A 600 DPI JPEG at quality 85 is typically 3-6 MB. TIFF files at 600 DPI are typically 20-30 MB. For archiving, TIFF preserves maximum quality. For sharing or web use, JPEG at 600 DPI is a good balance."
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
