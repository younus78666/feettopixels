import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "What is aspect ratio?",
        "answer": "Aspect ratio is the proportional relationship between width and height, expressed as W:H. 16:9 means for every 16 units of width there are 9 units of height. Common ratios: 16:9 (widescreen video), 4:3 (classic TV), 1:1 (square), 9:16 (portrait mobile)."
      },
      {
        "question": "What is 1920x1080 aspect ratio?",
        "answer": "16:9. Divide both by their GCD (120): 1920/120 = 16, 1080/120 = 9. This is the standard widescreen format for HD and 4K video, most monitors, and horizontal social media content."
      },
      {
        "question": "How do I resize an image without distorting it?",
        "answer": "Keep the same aspect ratio. If the original is 1920x1080 (16:9) and you want it 1280 wide: 1280 / 16 x 9 = 720. The resized image is 1280x720. Changing only one dimension without adjusting the other stretches the image."
      },
      {
        "question": "What aspect ratio should I use for YouTube videos?",
        "answer": "YouTube recommends 16:9 (widescreen). Standard resolutions are 1920x1080 (1080p), 2560x1440 (1440p), and 3840x2160 (4K). YouTube Shorts use 9:16 (vertical)."
      },
      {
        "question": "What is the difference between 16:9 and 21:9?",
        "answer": "16:9 is the standard widescreen format used by most monitors and TVs. 21:9 (ultrawide) is wider, providing more horizontal screen space. Ultrawide monitors at 21:9 are popular for productivity and immersive gaming."
      }
    ],
    "sections": [
      {
        "id": "how-it-works",
        "title": "How the Aspect Ratio Calculator Works",
        "paragraphs": [
          "Aspect ratio is a simple fraction that describes the proportional relationship between an image's width and its height. Mathematically it is width divided by height, usually simplified and expressed with a colon (for example 16:9, 4:3, or 1:1). The aspect ratio calculator takes any two of four possible inputs (width and height in pixels, or a target ratio like 16:9) and solves for the missing dimension. Under the hood it computes the greatest common divisor (GCD) of the pixel width and height to reduce the fraction to its simplest form. A resolution of 1920x1080 has a GCD of 120, so 1920/120 = 16 and 1080/120 = 9, giving the familiar 16:9 result.",
          "When you want to resize while preserving proportions, the calculator reverses the equation. If you lock a 16:9 ratio and enter a new width of 1280 pixels, it computes height as 1280 x (9/16) = 720 pixels. Enter a new height of 600 and it returns a width of 600 x (16/9) = 1067 pixels (rounded). This is the same math photo editors, video NLEs, and CSS object-fit rules use to prevent stretched or squashed content. For related work on common screen sizes, see our common-resolutions reference or the image-size-calculator."
        ]
      },
      {
        "id": "when-to-use",
        "title": "When to Use This Calculator",
        "paragraphs": [
          "Aspect ratio decisions affect every pixel-based medium: video production, social media graphics, responsive web design, print layout, and UI design. Picking the wrong ratio leads to letterboxing, cropping, or distortion that can cut off faces, text, or product details. Use this calculator any time you are resizing or exporting content for a new platform."
        ],
        "list": [
          "Exporting YouTube videos (16:9), Shorts or TikTok (9:16), or Instagram reels (9:16).",
          "Preparing Instagram feed posts in 1:1 square or 4:5 portrait without accidental cropping.",
          "Designing responsive hero images that must hold up at 21:9 ultrawide and 16:9 laptops.",
          "Matching a video thumbnail exactly to its player's aspect ratio to avoid black bars.",
          "Cropping product photography for marketplaces (Amazon requires 1:1; many shops use 4:5).",
          "Calibrating aspect-ratio containers in CSS with the aspect-ratio property."
        ]
      },
      {
        "id": "practical-examples",
        "title": "Practical Examples",
        "paragraphs": [
          "The table below shows how the same aspect ratio produces different pixel dimensions depending on the target resolution class. These are the dimensions the calculator returns when you lock a ratio and vary one axis."
        ],
        "table": {
          "headers": ["Aspect Ratio", "Use Case", "Example Resolution", "Equivalent Pixels"],
          "rows": [
            ["16:9", "YouTube, HDTV, laptops", "1920 x 1080", "2,073,600"],
            ["9:16", "TikTok, Shorts, Reels", "1080 x 1920", "2,073,600"],
            ["4:3", "Legacy monitors, iPad", "1024 x 768", "786,432"],
            ["1:1", "Instagram square post", "1080 x 1080", "1,166,400"],
            ["4:5", "Instagram portrait feed", "1080 x 1350", "1,458,000"],
            ["21:9", "Ultrawide cinema/monitor", "2560 x 1080", "2,764,800"],
            ["3:2", "DSLR photography", "6000 x 4000", "24,000,000"],
            ["2.39:1", "Cinematic widescreen", "2048 x 858", "1,757,184"]
          ]
        }
      },
      {
        "id": "common-mistakes",
        "title": "Common Mistakes to Avoid",
        "paragraphs": [
          "Aspect ratio bugs are silent: a slightly wrong ratio will not throw an error, but viewers will notice a squeezed logo or a stretched face. Avoid these frequent errors when planning assets."
        ],
        "list": [
          "Confusing 16:9 with 16:10 - a 1920x1200 screen is not 16:9 and assets will show black bars on a true 16:9 display.",
          "Forcing a non-native ratio into a player by stretching instead of cropping or letterboxing.",
          "Rounding dimensions to whole pixels on one axis but not the other, producing off-by-one ratio drift.",
          "Uploading a 16:9 thumbnail to a 1:1 Instagram grid and relying on auto-crop, which usually cuts off the subject.",
          "Ignoring pixel-aspect-ratio (PAR) in older SD video workflows, where 720x480 is actually displayed as 4:3 or 16:9 depending on flag.",
          "Designing for 16:9 but forgetting mobile users view in 9:16 - critical content should work in both."
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
