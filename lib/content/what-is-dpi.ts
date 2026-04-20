import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "What does DPI actually stand for?",
        "answer": "DPI stands for 'dots per inch'. It measures how many tiny ink or toner dots a printer places into one linear inch of paper. A 1200 DPI printer lays down 1,440,000 dots per square inch, which is why high-DPI prints look smooth and sharp compared to the visible halftone patterns on low-DPI output."
      },
      {
        "question": "Is 300 DPI always the right choice for printing?",
        "answer": "300 DPI is the safe default for photos, magazines, and marketing materials viewed at reading distance. But it is not universal. Newspapers print at 150 DPI because cheaper paper absorbs ink and hides fine detail. Billboards and large posters print at 75-150 DPI because viewing distance hides pixelation. Fine art reproductions can use 600-1200 DPI. Match DPI to viewing distance and paper quality, not to a blanket rule."
      },
      {
        "question": "What is the difference between printer DPI and image DPI?",
        "answer": "Printer DPI is a hardware specification — how many ink dots the printer can physically place in one inch. Most inkjets run at 1200-4800 DPI, laser printers at 600-2400 DPI. Image DPI is metadata in the file that tells the printer 'render this image at X pixels per inch'. When you save a file at '300 DPI' in Photoshop, you are actually setting PPI (pixels per inch). The printer then uses many of its own DPI dots to reproduce each image pixel."
      },
      {
        "question": "Does DPI matter for websites and mobile apps?",
        "answer": "No. Web browsers and mobile apps ignore the DPI metadata stored in an image file. Only the pixel dimensions matter. A 1920x1080 JPEG renders identically whether its embedded DPI is 72, 96, or 300. DPI only becomes relevant the moment the image is sent to a physical printer."
      },
      {
        "question": "Why do image editors default to 72 or 96 DPI?",
        "answer": "72 DPI is a legacy value from early Apple Macintosh displays. 96 DPI is the Windows default reference. Both exist purely as a print-size calculation basis — if you save a 1200x900 image at 96 DPI and print it at 'actual size', it will come out 12.5 x 9.4 inches. The DPI setting has zero effect on screen display."
      },
      {
        "question": "How do I check the DPI of a photo or scan?",
        "answer": "On Windows, right-click the image, choose Properties, and look at the Details tab for 'Horizontal resolution' and 'Vertical resolution'. On macOS, open in Preview and use Tools > Show Inspector. In Photoshop, go to Image > Image Size and check the Resolution field. You can also use our Image DPI Checker tool to upload a file and read the embedded DPI metadata instantly."
      },
      {
        "question": "Can I increase DPI without reprinting from the original file?",
        "answer": "You can change the DPI number in a file's metadata, but that alone does not add detail. If the image only has 600x400 pixels, setting it to 600 DPI just makes it print smaller (1x0.67 inch) instead of sharper. True DPI increase requires either a higher-resolution original, AI upscaling, or rescanning at a higher optical resolution."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "What Is DPI?",
        "paragraphs": [
          "DPI stands for dots per inch. It is a measurement of print resolution that tells you how many individual ink, toner, or laser dots a printer deposits into each linear inch of paper. The higher the DPI, the finer those dots are, and the smoother and more detailed the final print appears.",
          "DPI is strictly a print-world unit. Screens do not have DPI — they have PPI (pixels per inch). The two terms often get used interchangeably in casual conversation, but in professional printing, graphic design, and photography, precision matters. Misusing the term can lead to files that print badly or images that waste storage for no visible benefit.",
          "A typical home inkjet prints at 1200 to 4800 DPI. Commercial offset presses run at 1800 to 3600 DPI. Consumer laser printers average 600 to 2400 DPI. These numbers describe the hardware's physical capability, not how your image will look — for that, you also need enough pixel data to fill each inch at the desired output size."
        ]
      },
      {
        "id": "how-dpi-works",
        "title": "How DPI Works Inside a Printer",
        "paragraphs": [
          "Printers reproduce color and shading using a technique called halftoning. They cannot blend ink continuously like a screen blends pixels, so they simulate shades of gray and color by clustering tiny dots in varying density. A light gray area has few, spread-out dots. A dark area has many, tightly packed dots. Your eye blends these patterns at normal viewing distance into what looks like smooth tone.",
          "The DPI value determines how small and closely spaced those dots can be. At 300 DPI, there are 90,000 possible dot positions per square inch. At 1200 DPI, that jumps to 1,440,000 — sixteen times more precision in the same area. Higher DPI lets the printer produce finer gradients, crisper type, and cleaner edges, which is why a 1200 DPI photo print looks obviously sharper than a 300 DPI draft.",
          "Importantly, one image pixel does not equal one printer dot. A single pixel at 300 PPI sent to a 1200 DPI printer gets reproduced using roughly 16 printer dots of different ink combinations to achieve the exact color. This is why high-DPI printers produce such smooth output even from moderate-resolution source images."
        ]
      },
      {
        "id": "dpi-vs-ppi",
        "title": "DPI vs PPI: Why People Confuse Them",
        "paragraphs": [
          "The confusion between DPI and PPI is industry-wide, and it traces back to software. Photoshop, Illustrator, and most image editors label their resolution field 'DPI' even though an image file contains pixels, not ink dots. A more accurate label would be PPI, but the DPI terminology stuck for historical reasons and never got corrected.",
          "Here is the clean distinction: PPI describes pixel density in a digital image or on a screen. DPI describes ink dot density produced by a printer. When you save an image at '300 DPI' in Photoshop, you are setting PPI — telling any future printer to lay out this image at 300 pixels per inch. The printer then uses its own DPI (say, 1200 DPI) to physically reproduce each of those pixels using multiple ink dots.",
          "For practical purposes, most designers and photographers use DPI loosely to mean both. That is fine in conversation, but understand the distinction when specifying print jobs or troubleshooting quality issues. A file at 300 PPI sent to a 600 DPI printer will still print beautifully; a 72 PPI file sent to the same printer will look pixelated regardless of the printer's DPI capacity."
        ]
      },
      {
        "id": "choosing-dpi",
        "title": "Choosing the Right DPI for Your Project",
        "paragraphs": [
          "The 300 DPI rule is a starting point, not a commandment. The right DPI depends on three variables: the paper type, the intended viewing distance, and the content being reproduced.",
          "For photographs on glossy photo paper viewed at reading distance (8-12 inches), 300 PPI is the professional standard. The eye can distinguish detail up to roughly 300 PPI at this distance, so going higher rarely produces visible improvement. For newsprint or coarser uncoated paper, 150 PPI is enough because the paper texture itself limits detail reproduction.",
          "Large-format output changes the math entirely. A 4-foot trade-show banner viewed from 6 feet away does not need 300 PPI — the viewer cannot resolve that detail at distance. 150 PPI is often plenty. Billboards viewed from 100 feet can work beautifully at 20-40 PPI. The farther the viewer, the lower the PPI you can get away with without visible quality loss.",
          "For fine art reproductions, archival photo prints, or highly detailed technical drawings viewed under close inspection, 600 PPI is worth the extra file size and processing time. For screen-only delivery (web, social media, email), PPI metadata is irrelevant — only pixel dimensions matter."
        ]
      },
      {
        "id": "dpi-reference-table",
        "title": "DPI Reference by Use Case",
        "table": {
          "headers": ["Use Case", "Recommended PPI", "Viewing Distance", "Notes"],
          "rows": [
            ["Fine art print, photo book", "300-600", "6-12 inches", "Eye can resolve finest detail"],
            ["Magazine, brochure, flyer", "300", "8-15 inches", "Professional print standard"],
            ["Newspaper, newsletter", "150-200", "10-18 inches", "Paper absorption limits detail"],
            ["Poster (A2 or smaller)", "200-300", "2-4 feet", "Depends on detail level"],
            ["Large poster (A1/A0)", "150-200", "4-6 feet", "Viewer cannot resolve higher"],
            ["Retail signage", "100-150", "4-8 feet", "Distance softens pixels"],
            ["Trade show banner", "100-150", "6-10 feet", "Vinyl absorbs fine detail"],
            ["Billboard, building wrap", "20-40", "50+ feet", "Extreme distance, huge savings"],
            ["Laser transparency", "600-1200", "projected", "Projection magnifies flaws"],
            ["Web, mobile, social media", "N/A (pixels only)", "screen", "DPI metadata ignored"]
          ]
        }
      },
      {
        "id": "common-mistakes",
        "title": "Common DPI Mistakes That Ruin Prints",
        "paragraphs": [
          "The most frequent mistake is upscaling a low-resolution image and assuming it will print sharply. Increasing a 72 PPI web image to 300 PPI in Photoshop without resampling just reduces the print size — the total pixel count stays the same. Resampling (adding pixels with interpolation) adds soft, invented detail but cannot recover information that was never captured.",
          "Another mistake is oversaving. Someone hears '300 DPI' and saves every web image at 300, bloating file size with no visible benefit. For web, save at whatever pixel dimensions you need and ignore DPI entirely. A 1200x800 photo at 72 DPI is identical to a 1200x800 photo at 3000 DPI when displayed on a screen.",
          "Finally, many users confuse the printer's DPI with the file's required PPI and ship files that are either under-spec (blurry prints) or over-spec (massive files that clog the RIP). The printer's hardware DPI is the printer's job; your job is to deliver enough pixels to fill the print at an appropriate PPI for the output size and viewing distance."
        ]
      },
      {
        "id": "quick-calculation",
        "title": "How to Calculate DPI for Any Print Size",
        "paragraphs": [
          "The formula is straightforward: required pixels = inches × DPI. To print an image 10 inches wide at 300 PPI, you need 3000 pixels of width. For 8 inches tall at 300 PPI, you need 2400 pixels. An image of 3000 × 2400 pixels will print cleanly at 10 × 8 inches at 300 PPI, or at 20 × 16 inches at 150 PPI (useful for posters), or at 5 × 4 inches at 600 PPI (useful for fine art).",
          "Use our DPI Calculator to compute pixel requirements instantly for any print size and target DPI. If you already have a file and want to know its maximum quality print size, our Image Size Calculator inverts the math: enter your pixel dimensions and get the largest safe print at 300, 200, 150, or 72 PPI."
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
