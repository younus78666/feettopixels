import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "What size is a 4x6 photo in pixels?",
        "answer": "A 4x6 inch photo at 300 DPI is 1200 x 1800 pixels. At 150 DPI (acceptable quality), it is 600 x 900 pixels. Most smartphone cameras produce more than enough pixels for 4x6 prints."
      },
      {
        "question": "What resolution do I need for an 8x10 print?",
        "answer": "For a high-quality 8x10 inch print at 300 DPI, you need an image of at least 2400 x 3000 pixels (7.2 megapixels). At 150 DPI (acceptable), you need 1200 x 1500 pixels."
      },
      {
        "question": "How many megapixels do I need for a 16x20 print?",
        "answer": "For a 16x20 inch print at 300 DPI, you need 4800 x 6000 pixels, or 28.8 megapixels. At 200 DPI (still good quality at typical viewing distance), you need 3200 x 4000 pixels (12.8 MP)."
      }
    ],
    "sections": [
      {
        "id": "photo-print-sizes",
        "title": "Standard Photo Print Sizes",
        "paragraphs": [
          "The table below lists common photo print sizes with pixel dimensions at 150 DPI (acceptable quality) and 300 DPI (professional quality). Use 300 DPI for anything that will be viewed at arm's length or closer."
        ],
        "table": {
          "headers": [
            "Print Size (inches)",
            "150 DPI",
            "300 DPI",
            "Megapixels (300 DPI)"
          ],
          "rows": [
            [
              "4 × 6",
              "600 × 900",
              "1200 × 1800",
              "2.2 MP"
            ],
            [
              "5 × 7",
              "750 × 1050",
              "1500 × 2100",
              "3.2 MP"
            ],
            [
              "8 × 10",
              "1200 × 1500",
              "2400 × 3000",
              "7.2 MP"
            ],
            [
              "8.5 × 11",
              "1275 × 1650",
              "2550 × 3300",
              "8.4 MP"
            ],
            [
              "11 × 14",
              "1650 × 2100",
              "3300 × 4200",
              "13.9 MP"
            ],
            [
              "11 × 17",
              "1650 × 2550",
              "3300 × 5100",
              "16.8 MP"
            ],
            [
              "16 × 20",
              "2400 × 3000",
              "4800 × 6000",
              "28.8 MP"
            ],
            [
              "20 × 30",
              "3000 × 4500",
              "6000 × 9000",
              "54 MP"
            ],
            [
              "24 × 36",
              "3600 × 5400",
              "7200 × 10800",
              "77.8 MP"
            ]
          ]
        }
      },
      {
        "id": "poster-sizes",
        "title": "Poster and Large Format Sizes",
        "paragraphs": [
          "Large prints are viewed from a distance, so lower DPI is fine. The table below shows common poster sizes at 100 and 150 DPI. Don't target 300 DPI for posters; it creates unnecessarily large files without any visible quality gain."
        ],
        "table": {
          "headers": [
            "Poster Size (inches)",
            "100 DPI",
            "150 DPI"
          ],
          "rows": [
            [
              "18 × 24",
              "1800 × 2400",
              "2700 × 3600"
            ],
            [
              "24 × 36",
              "2400 × 3600",
              "3600 × 5400"
            ],
            [
              "27 × 40",
              "2700 × 4000",
              "4050 × 6000"
            ],
            [
              "36 × 48",
              "3600 × 4800",
              "5400 × 7200"
            ]
          ]
        }
      },
      {
        "id": "minimum-megapixels",
        "title": "Minimum Megapixels by Print Size",
        "paragraphs": [
          "To print at 300 DPI, you need at minimum the megapixel counts listed below. Most modern cameras (12+ MP) can handle prints up to 11 x 14 with ease. For larger prints, 200 DPI is the practical choice since viewing distance increases with print size.",
          "Use our Image Size Calculator to check if your image has enough pixels for a specific print size."
        ],
        "list": [
          "4 × 6: 2.2 MP (any modern camera)",
          "8 × 10: 7.2 MP (any smartphone from the last decade)",
          "16 × 20: 28.8 MP (high-end smartphones, most mirrorless cameras)",
          "24 × 36: 77.8 MP at 300 DPI, or 17.3 MP at 200 DPI (practical for most cameras)"
        ]
      },
      {
        "id": "choosing-dpi",
        "title": "Choosing the Right DPI for Your Print Size",
        "paragraphs": [
          "Not every print needs 300 DPI. The required resolution depends on the viewing distance. A billboard viewed from 30 feet needs far fewer pixels per inch than a greeting card held at arm's length.",
          "Use 300 DPI for prints viewed within 18 inches: photo prints, brochures, business cards, and book covers. This is the standard for sharpest reproduction at close distances.",
          "Use 150 to 200 DPI for prints viewed from 2 to 4 feet: posters, retail signage, and trade show banners. Quality is visually indistinguishable at those distances.",
          "Use 72 to 100 DPI for large format prints viewed from 10 or more feet: outdoor banners, billboards, and building wraps. Pixel dimensions are still large because the physical size is enormous.",
          "If you have a low-resolution image, divide the pixel width by the DPI to find the largest print size without quality loss. For example, a 3000-pixel-wide image at 200 DPI prints cleanly at 15 inches wide."
        ]
      },
      {
        "id": "print-mistakes",
        "title": "Common Mistakes When Sizing Images for Print",
        "list": [
          "Upsizing in Photoshop: enlarging a small image by resampling creates soft, blurry prints. Always start with the largest available original file.",
          "Confusing file size with DPI: a large file size does not mean high DPI. A 10 MB JPEG might be saved at 72 DPI. Check Image > Image Size in Photoshop.",
          "Ignoring color mode: print requires CMYK color mode. RGB images may shift colors when converted at the print shop. Convert to CMYK before finalizing.",
          "Forgetting bleed: most professional printers require 0.125 inch (3 mm) of bleed on each side. Add this to your canvas size before sending to print.",
          "Using screen screenshots for print: a 1920 x 1080 screenshot at 96 DPI prints at only 6.4 x 3.6 inches at 300 DPI, far too small for most print uses."
        ]
      },
      {
        "id": "web-vs-print-vs-social",
        "title": "Web vs Print vs Social: How Image Size Standards Differ",
        "paragraphs": [
          "Web, print, and social media each use different sizing logic. Knowing which system applies to your project prevents the most common resizing and quality mistakes.",
          "Web images are measured in pixels only. DPI doesn't affect how a browser renders an image; what matters is the pixel width and height relative to the layout container. A hero image might need to be 2560 pixels wide to look sharp on a 4K monitor, while a blog thumbnail works fine at 600 pixels wide. File size matters for web because large images slow page load times. Use JPEG for photos (compress to 60 to 80 quality), WebP for better compression, and PNG only when transparency is required.",
          "Print images are measured in pixels at a specific DPI. A 300 DPI standard applies to anything viewed close-up: photo prints, brochures, business cards, and packaging. The actual pixel dimensions scale with the physical size of the print. A 4 x 6 inch photo at 300 DPI needs 1200 x 1800 pixels. A 16 x 20 inch print at 300 DPI needs 4800 x 6000 pixels. Use CMYK color mode for print files.",
          "Social media platforms use their own pixel specs that change periodically. Each platform compresses uploads differently, so the goal is to match the platform's preferred dimensions exactly so the platform's compression doesn't crop or distort your image. A Facebook post image performs best at 1200 x 630 pixels. An Instagram square post is 1080 x 1080 pixels. A YouTube thumbnail is 1280 x 720 pixels. Upload at the recommended dimensions rather than oversizing, which triggers heavier compression.",
          "The key difference: web sizing is flexible and adapts to container widths; print sizing is fixed by physical dimensions and DPI; social sizing is platform-specific and compression-sensitive. Use the right standard for each output from the start rather than trying to repurpose one file across all three."
        ]
      },
      {
        "id": "wrong-image-sizes",
        "title": "What Happens When Image Sizes Are Wrong?",
        "paragraphs": [
          "Using the wrong image size causes visible quality problems, platform rejections, or slow load times depending on the output medium. Each medium fails differently.",
          "For web: oversized images load slowly and hurt Core Web Vitals scores. A 5 MB photo displayed at 800 pixels wide transfers four times more data than necessary. Browsers do scale images down visually, but the extra file size still loads. Undersized images look blurry on high-DPI (Retina) displays because the browser stretches them to fill the container.",
          "For print: undersized images produce blurry, pixelated output. A 72 DPI web image stretched to fill a 300 DPI print canvas will show visible pixel blocks when printed. Print shops often reject files that don't meet the minimum DPI spec, or they warn you and print anyway at reduced quality. The bigger mistake is discovering this after the print run.",
          "For social media: platforms crop images that don't match their aspect ratio requirements. Instagram crops a rectangular image to a square in feed view. Facebook clips wide images to 16:9 in certain placements. LinkedIn compresses images more aggressively when the file doesn't match preferred dimensions. These automatic crops often cut off faces, text, or key design elements at the edges."
        ]
      },
      {
        "id": "which-image-size",
        "title": "Which Image Size Standard Should You Follow for Your Project?",
        "paragraphs": [
          "The size standard you need depends on one thing: where the image ends up. Here's a direct recommendation by project type.",
          "Photo prints: use 300 DPI for anything up to 11 x 14 inches. For 16 x 20 and larger, 200 DPI is acceptable if the viewing distance is 2 feet or more. Always start from your highest-resolution original.",
          "Posters and large format: use 100 to 150 DPI. Posters are viewed from a distance, so 300 DPI is overkill and produces unnecessarily large files.",
          "Website hero images and banners: target 1920 to 2560 pixels wide for full-width layouts. Compress to under 200 KB using JPEG or WebP. Use responsive image techniques (srcset) to serve smaller sizes to mobile devices.",
          "Blog and article images: 1200 pixels wide is sufficient for most content columns. Compress aggressively since these images load on every page view.",
          "Social media posts: match each platform's recommended dimensions. For Instagram, 1080 x 1080 (square) or 1080 x 1350 (portrait). For Facebook, 1200 x 630. For Twitter/X, 1600 x 900. For LinkedIn, 1200 x 627.",
          "Thumbnails and icons: keep these under 500 pixels wide. Use PNG for icons that need crisp edges or transparency. Use JPEG for photo thumbnails.",
          "Product images for e-commerce: most platforms recommend 2000 x 2000 pixels (square) at minimum. Shopify, Amazon, and Etsy all benefit from larger source images because they enable zoom functionality."
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
