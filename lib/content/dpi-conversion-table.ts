import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "Why are there so many standard DPI values?",
        "answer": "Each DPI value maps to a specific use case. 72 DPI is legacy screen resolution, 96 DPI is the modern Windows default, 150 DPI is standard for newspaper print and large posters, 300 DPI is the professional photo and magazine standard, 600 DPI is for fine art and archival work, and 1,200+ DPI is for laser printers reproducing small text or technical drawings."
      },
      {
        "question": "What DPI should I use for a 4x6 inch photo print?",
        "answer": "300 DPI is the professional standard for 4x6 photo prints. It requires a 1,200 x 1,800 pixel image. 240 DPI is a good minimum and still looks sharp under normal viewing. Below 200 DPI you'll start seeing visible pixelation at arm's length."
      },
      {
        "question": "Does printing at higher DPI always take longer?",
        "answer": "Yes. Higher DPI means the printer lays down more ink dots per inch, so print time scales with the square of DPI. Doubling DPI from 300 to 600 quadruples the number of dots and roughly doubles or triples actual print time depending on the printer mechanism."
      },
      {
        "question": "What happens if I print a 72 DPI image at a 300 DPI target?",
        "answer": "The print will look pixelated, with roughly 4x more visible pixel edges than a native 300 DPI image. Your printer hardware produces 300 PPI output, but it's interpolating (duplicating) the original 72 DPI pixels to fill in the gaps. Better to resize the source image or reduce the print dimensions before sending to print."
      },
      {
        "question": "Is there a simple way to check what DPI my image needs?",
        "answer": "Yes. Divide your image's pixel width by the target print width in inches. A 3,000-pixel wide image for a 10-inch wide print gives 300 PPI: professional quality. For a 20-inch wide print, the same file gives 150 PPI, still acceptable for posters viewed at distance. Our Image Size Calculator automates this calculation instantly."
      },
      {
        "question": "What is 300 DPI in pixels?",
        "answer": "300 DPI means 300 pixels per inch. To find the pixel count for any dimension, multiply inches by 300. A 4-inch wide image at 300 DPI needs 1,200 pixels. A 10-inch wide image needs 3,000 pixels. An A4 page (8.27 inches wide) at 300 DPI needs 2,480 pixels of width."
      },
      {
        "question": "What is 150 DPI in pixels?",
        "answer": "150 DPI means 150 pixels per inch. A 10-inch print at 150 DPI needs 1,500 pixels wide. A 20-inch banner at 150 DPI needs 3,000 pixels. This resolution works well for posters and trade show displays viewed from 3-10 feet away, where the eye can't resolve the lower pixel density."
      },
      {
        "question": "What is 72 DPI in pixels per inch?",
        "answer": "72 DPI means 72 pixels per inch — a legacy value from early Mac displays. A 10-inch image at 72 DPI is 720 pixels wide. At 72 DPI, a standard 1920-pixel-wide image prints at about 26.7 inches. This DPI is acceptable only for very large prints viewed from a significant distance, such as billboards or building wraps."
      },
      {
        "question": "How do I calculate pixels from DPI and inches?",
        "answer": "Multiply the measurement in inches by the DPI value. The formula is: pixels = inches x DPI. For example, a 5-inch width at 300 DPI = 5 x 300 = 1,500 pixels. A 24-inch poster at 150 DPI = 24 x 150 = 3,600 pixels. To reverse it (find inches from pixels): inches = pixels / DPI."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "DPI Conversion Reference Table",
        "paragraphs": [
          "This table shows how common DPI values translate into pixel dimensions across standard print sizes. Use it to verify you have enough pixels in a source file before printing, or to calculate the largest clean print size a given image can produce.",
          "The rule is: pixels needed = inches x DPI. A 5 x 7 inch photo at 300 DPI needs 1,500 x 2,100 pixels minimum. A 24 x 36 inch poster at 150 DPI needs 3,600 x 5,400 pixels. Below these thresholds, prints start showing visible pixelation at typical viewing distances.",
          "DPI errors have real costs in both directions. Too low and you get pixelated output, rejected files at prepress, or reprints billed back to you. Too high and you're generating unnecessarily large files that slow down your RIP processor, inflate storage costs, and cause render failures for oversized print submissions. A 40 x 60 inch trade show graphic at 600 DPI would require a file over 12 GB, which most print shops can't even process. The right DPI is the one that matches your viewing distance and print size, not the highest number available."
        ]
      },
      {
        "id": "quick-reference",
        "title": "Pixels Required by Print Size and DPI",
        "table": {
          "headers": ["Print Size (inches)", "72 DPI", "96 DPI", "150 DPI", "300 DPI", "600 DPI"],
          "rows": [
            ["2 x 3 (wallet)", "144 x 216", "192 x 288", "300 x 450", "600 x 900", "1200 x 1800"],
            ["4 x 6 (standard photo)", "288 x 432", "384 x 576", "600 x 900", "1200 x 1800", "2400 x 3600"],
            ["5 x 7 (gift photo)", "360 x 504", "480 x 672", "750 x 1050", "1500 x 2100", "3000 x 4200"],
            ["8 x 10 (enlargement)", "576 x 720", "768 x 960", "1200 x 1500", "2400 x 3000", "4800 x 6000"],
            ["8.5 x 11 (Letter)", "612 x 792", "816 x 1056", "1275 x 1650", "2550 x 3300", "5100 x 6600"],
            ["11 x 14 (medium print)", "792 x 1008", "1056 x 1344", "1650 x 2100", "3300 x 4200", "6600 x 8400"],
            ["11 x 17 (tabloid)", "792 x 1224", "1056 x 1632", "1650 x 2550", "3300 x 5100", "6600 x 10200"],
            ["16 x 20 (poster)", "1152 x 1440", "1536 x 1920", "2400 x 3000", "4800 x 6000", "9600 x 12000"],
            ["20 x 24 (large print)", "1440 x 1728", "1920 x 2304", "3000 x 3600", "6000 x 7200", "12000 x 14400"],
            ["24 x 36 (big poster)", "1728 x 2592", "2304 x 3456", "3600 x 5400", "7200 x 10800", "14400 x 21600"],
            ["40 x 60 (trade show)", "2880 x 4320", "3840 x 5760", "6000 x 9000", "12000 x 18000", "-"]
          ]
        }
      },
      {
        "id": "paper-sizes",
        "title": "ISO Paper Sizes at Common DPI",
        "table": {
          "headers": ["Paper Size", "Inches", "96 DPI", "150 DPI", "300 DPI"],
          "rows": [
            ["A4", "8.27 x 11.69", "794 x 1123", "1240 x 1754", "2480 x 3508"],
            ["A3", "11.69 x 16.54", "1123 x 1587", "1754 x 2480", "3508 x 4961"],
            ["A2", "16.54 x 23.39", "1587 x 2245", "2480 x 3508", "4961 x 7016"],
            ["A1", "23.39 x 33.11", "2245 x 3179", "3508 x 4961", "7016 x 9933"],
            ["A0", "33.11 x 46.81", "3179 x 4494", "4961 x 7016", "9933 x 14043"],
            ["US Letter", "8.5 x 11", "816 x 1056", "1275 x 1650", "2550 x 3300"],
            ["US Legal", "8.5 x 14", "816 x 1344", "1275 x 2100", "2550 x 4200"],
            ["Tabloid", "11 x 17", "1056 x 1632", "1650 x 2550", "3300 x 5100"]
          ]
        }
      },
      {
        "id": "dpi-by-use",
        "title": "Which DPI to Choose by Use Case",
        "paragraphs": [
          "300 DPI is not always the right choice. It's a useful default for close-viewing print work, but applying it universally is one of the most common mistakes in print production. The right DPI is the one that matches the viewing distance and output medium. Choosing higher costs you file size and processing time without adding visible quality. Choosing lower saves both, sometimes dramatically, without any visible trade-off at the intended viewing distance.",
          "Fine art reproduction, archival prints, and detailed technical drawings viewed up close need 600 DPI. This is overkill for most projects but worth it when every detail matters and the viewer will inspect the print at arm's length. Laser printers producing small text or fine linework sometimes specify 1,200 DPI for that same reason.",
          "Magazines, brochures, marketing materials, and photo books use 300 DPI as the professional standard. Commercial offset presses and high-end inkjets fully resolve this density, and the result is indistinguishable from finer output at normal reading distance. So 300 DPI is correct here, but only because the use case matches it.",
          "Newspapers, newsletters, and inexpensive flyers print at 150 to 200 DPI because uncoated paper absorbs ink and obscures finer detail anyway. Going higher wastes file size without improving appearance. 300 DPI on newsprint doesn't look better than 150 DPI. The paper stock is the limiting factor.",
          "Large posters (A1, A0, and trade show graphics) viewed from 3 to 8 feet work well at 150 DPI. Banners and backdrops viewed from 10+ feet can drop to 100 DPI. Billboards at 50+ feet viewing distance print at 20 to 40 DPI without any visible quality loss. Demanding 300 DPI on a billboard-scale output isn't a quality upgrade. It's an unusable file.",
          "For screens (web, social media, app design), DPI metadata is ignored entirely. Only pixel dimensions matter. A 1,200 x 800 JPEG renders identically whether its stored DPI is 72, 96, or 3,000."
        ]
      },
      {
        "id": "dpi-myths",
        "title": "Debunking the Always Use 300 DPI Rule",
        "paragraphs": [
          "The '300 DPI for everything' rule is a shortcut that works for close-viewing print and causes real problems everywhere else. It's worth understanding what 300 DPI actually means so you can judge when it applies and when it doesn't.",
          "300 DPI means 300 pixels per linear inch of output. At a 10-inch wide print, that's 3,000 pixels. At a 40-inch wide trade show banner, that's 12,000 pixels just for the width, producing a file around 1.2 GB before layers or color profiles. Most large-format RIP processors cap acceptable file size well below that. Submitting a file that's too large causes the job to fail at prepress, not at your desk where you'd notice it.",
          "The '300 DPI minimum' rule is specific to close-viewing print: business cards, brochures, photo prints, book pages. At normal reading distance (12 to 18 inches), the human eye can resolve approximately 300 dots per inch. Go below that and you risk visible pixelation. But push beyond 18 inches of viewing distance and that threshold drops fast. At 3 feet, 100 DPI is sharp. At 10 feet, 60 DPI is sharp. The math is viewing distance in inches divided into 300 gives you the minimum DPI needed.",
          "So when is 300 DPI overkill? Any print viewed from more than 2 feet away. Banners, backdrops, posters, vehicle wraps, window graphics, trade show displays. And when is it insufficient? Only if the printer itself can't render at that density, or if you're producing work that will be reproduced at larger sizes later and need the resolution headroom. Use the reference table above to match DPI to output size and viewing distance. Our DPI Calculator makes this check fast for any combination."
        ]
      },
      {
        "id": "formula",
        "title": "How to Calculate Pixels for Any Print Size",
        "paragraphs": [
          "The master formula is: pixels = inches x DPI. Apply it to both dimensions of your print. For an 11 x 17 tabloid at 300 DPI, you need 11 x 300 = 3,300 pixels wide and 17 x 300 = 5,100 pixels tall.",
          "To invert (find max print size from a known pixel count): inches = pixels / DPI. A 4,000 x 3,000 camera file at 300 DPI prints cleanly up to 13.3 x 10 inches, or at 150 DPI up to 26.7 x 20 inches for posters.",
          "Our DPI Calculator and Image Size Calculator handle both directions instantly. Enter a pixel resolution to see the max print size at each DPI tier, or enter a target print size to find the minimum pixels needed."
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
