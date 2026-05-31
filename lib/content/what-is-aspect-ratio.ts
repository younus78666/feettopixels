import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "What is aspect ratio?",
        "answer": "Aspect ratio is the proportional relationship between width and height, expressed as W:H. A 16:9 ratio means for every 16 units of width there are 9 units of height. It doesn't describe the actual size — only the shape. A 1920x1080 screen and a 3840x2160 screen both have a 16:9 aspect ratio, but very different resolutions."
      },
      {
        "question": "What is the most common aspect ratio?",
        "answer": "16:9 is the most common aspect ratio for screens, video, and monitors. It is the standard for HD and 4K televisions, desktop monitors, laptops, and most smartphone video. 1:1 (square) is common for social media posts. 4:3 was the traditional TV standard before widescreen."
      },
      {
        "question": "How do I calculate aspect ratio from dimensions?",
        "answer": "Divide both width and height by their greatest common divisor (GCD). For 1920x1080: GCD is 120. 1920/120 = 16, 1080/120 = 9. Ratio is 16:9. For 2048x1536: GCD is 512. 2048/512 = 4, 1536/512 = 3. Ratio is 4:3."
      },
      {
        "question": "What aspect ratio is 1920x1080?",
        "answer": "16:9. Divide both numbers by their GCD (120): 1920/120 = 16, 1080/120 = 9. This is Full HD resolution at the standard widescreen ratio used for HD video, most monitors, and streaming platforms."
      },
      {
        "question": "What aspect ratio is 1080x1080?",
        "answer": "1:1 (square). Equal width and height always gives a 1:1 ratio. This is the standard for Instagram square posts, some profile photos, and any square-format design."
      },
      {
        "question": "How do I resize an image without distorting it?",
        "answer": "Keep the same aspect ratio. If the original is 1920x1080 (16:9) and you want it 1280 pixels wide: calculate height as 1280 / 16 x 9 = 720. The resized image is 1280x720. Changing only one dimension without adjusting the other stretches or squishes the image. Our Aspect Ratio Calculator handles this automatically."
      },
      {
        "question": "What is the difference between aspect ratio and resolution?",
        "answer": "Aspect ratio describes shape (the proportional relationship of width to height). Resolution describes total pixel count (e.g., 1920x1080 = 2,073,600 pixels). Two images can share the same aspect ratio but have completely different resolutions. 1920x1080 and 3840x2160 are both 16:9 but very different in detail."
      }
    ],
    "sections": [
      {
        "id": "what-is-aspect-ratio",
        "title": "What Is Aspect Ratio?",
        "paragraphs": [
          "Aspect ratio is the proportional relationship between the width and height of an image, screen, or frame. It is written as W:H, where W is width and H is height. A 16:9 ratio means the width is 16 units for every 9 units of height — a wide, horizontal rectangle.",
          "Aspect ratio describes shape, not size. A 1920x1080 monitor and a 3840x2160 4K monitor both have 16:9 aspect ratios despite having very different resolutions and physical sizes. What they share is the same proportional relationship between width and height."
        ]
      },
      {
        "id": "common-aspect-ratios",
        "title": "Common Aspect Ratios and Their Uses",
        "table": {
          "headers": ["Ratio", "Name / Description", "Common Use Cases", "Example Resolution"],
          "rows": [
            ["16:9", "Widescreen (1.78:1)", "HD/4K video, monitors, streaming, TV", "1920x1080, 3840x2160"],
            ["4:3", "Traditional TV (1.33:1)", "Legacy video, some tablets, medical imaging", "1024x768, 1600x1200"],
            ["1:1", "Square", "Instagram posts, profile photos, album art", "1080x1080, 800x800"],
            ["9:16", "Portrait (vertical)", "Mobile video, Instagram/TikTok Stories, Reels", "1080x1920"],
            ["3:2", "Classic photo (1.5:1)", "35mm film, DSLR sensors, standard photo prints", "3000x2000, 6000x4000"],
            ["2:1", "Cinematic wide", "Letterboxed films, panoramic photography", "2560x1280"],
            ["21:9", "Ultra-wide (2.33:1)", "Ultra-wide monitors, cinematic film projection", "3440x1440, 2560x1080"],
            ["5:4", "Near-square", "Older monitors, some print formats", "1280x1024"],
            ["4:5", "Vertical portrait", "Instagram portrait posts (ideal for reach)", "1080x1350"]
          ]
        }
      },
      {
        "id": "calculating-aspect-ratio",
        "title": "How to Calculate Aspect Ratio",
        "paragraphs": [
          "To find the aspect ratio of any two dimensions, divide both numbers by their Greatest Common Divisor (GCD). The GCD is the largest number that divides both values without a remainder.",
          "Example: 1920x1080. The GCD of 1920 and 1080 is 120. Dividing: 1920/120 = 16, 1080/120 = 9. Ratio = 16:9.",
          "Example: 2560x1440. GCD is 80. 2560/80 = 32, 1440/80 = 18, which simplifies to 16:9. Use our Aspect Ratio Calculator to handle this instantly for any dimensions."
        ]
      },
      {
        "id": "aspect-ratio-vs-resolution",
        "title": "Aspect Ratio vs Resolution",
        "paragraphs": [
          "Aspect ratio and resolution describe different things. Aspect ratio is the shape — the proportional relationship between width and height. Resolution is the total pixel count — how much detail the image contains.",
          "You can have the same aspect ratio at many resolutions: 640x360, 1280x720, 1920x1080, and 3840x2160 all share 16:9 ratio but contain increasingly more pixels (0.23 MP, 0.92 MP, 2.07 MP, and 8.3 MP respectively).",
          "When designing for screens or print, both matter. Aspect ratio determines the crop shape and how the image fits a given frame. Resolution determines how sharp and large the image can be displayed or printed."
        ]
      },
      {
        "id": "resizing-maintaining-ratio",
        "title": "Resizing Images While Maintaining Aspect Ratio",
        "paragraphs": [
          "To resize an image proportionally, lock the aspect ratio. Change one dimension and calculate the other: new height = (new width / original width) x original height.",
          "Example: Resize a 1920x1080 image to 1280px wide. New height = (1280/1920) x 1080 = 720. Result: 1280x720 — same 16:9 ratio, smaller file.",
          "Changing only one dimension without adjusting the other creates distortion. A 1920x1080 image stretched to 1920x800 would appear horizontally squashed. Our Aspect Ratio Calculator handles ratio-locked resizing automatically."
        ]
      },
      {
        "id": "aspect-ratio-for-video",
        "title": "Aspect Ratios in Video and Film",
        "paragraphs": [
          "Video aspect ratios define how footage fills a screen. 16:9 is the universal standard for HD and 4K broadcast, streaming, and most social video. 4:3 was the pre-HDTV television standard — the reason older footage has black bars on modern widescreen displays.",
          "Vertical 9:16 has become essential for mobile-first content: Instagram Reels, TikTok, YouTube Shorts. Square 1:1 still performs well in social feeds where crops are unpredictable. 21:9 ultra-wide is used in cinema and premium ultra-wide monitors."
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
