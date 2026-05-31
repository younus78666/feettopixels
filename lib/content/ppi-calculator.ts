import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "How do I calculate PPI of a screen?",
        "answer": "Use the formula: PPI = sqrt(width² + height²) / diagonal in inches. For a 2560x1440 display at 27 inches: sqrt(2560² + 1440²) = sqrt(8,627,200) = 2,937. Divide by 27 = 108.8 PPI."
      },
      {
        "question": "What is PPI and how does it differ from DPI?",
        "answer": "PPI (pixels per inch) measures the pixel density of a display screen. DPI (dots per inch) traditionally refers to print resolution. For screens, PPI and DPI are often used interchangeably, though PPI is the technically correct term for displays."
      },
      {
        "question": "What PPI is Retina quality?",
        "answer": "Apple defines Retina as the PPI where pixels are invisible at the typical viewing distance. For iPhones (10-12 inches): 326+ PPI. For iPads (14-18 inches): 264+ PPI. For MacBook displays (20-24 inches): 220+ PPI. For iMacs (24-28 inches): 218+ PPI."
      },
      {
        "question": "What is a good PPI for a laptop screen?",
        "answer": "200+ PPI is excellent for laptops. 13-14 inch 4K laptops hit 300-330 PPI. Most quality 1080p laptops at 14-15 inches deliver 141-157 PPI, which is acceptable. Below 120 PPI on a laptop starts to show visible pixels."
      },
      {
        "question": "Why do phones have higher PPI than monitors?",
        "answer": "Phones are viewed much closer to the eye than monitors. A higher PPI is needed at close range to prevent visible pixels. A 460 PPI phone at 10 inches gives the same visual sharpness as a 110 PPI monitor at 24 inches."
      },
      {
        "question": "Does higher PPI always mean better display quality?",
        "answer": "Not necessarily. Beyond the point where individual pixels become invisible at your typical viewing distance, higher PPI provides diminishing returns. Other factors like color accuracy, contrast ratio, and brightness also determine display quality."
      },
      {
        "question": "Does higher PPI drain more battery?",
        "answer": "Yes. A higher-density display requires more GPU work to render the same interface. Most operating systems scale HiDPI displays at 2x, which means the GPU renders 4x as many pixels. This is why many phones and laptops offer display resolution settings to balance sharpness and battery life."
      },
      {
        "question": "How do I find my device's PPI?",
        "answer": "Enter your screen's resolution (found in display settings) and diagonal size (from device specifications) into the calculator. Alternatively, select a preset for common devices like iPhones, Samsung Galaxy phones, MacBooks, and Dell monitors."
      }
    ],
    "sections": [
      {
        "id": "how-it-works",
        "title": "How the PPI Calculator Works",
        "paragraphs": [
          "Screen PPI (pixels per inch) measures how tightly physical pixels are packed into a display. This screen density calculator uses the Pythagorean theorem: PPI = sqrt(width-in-pixels squared + height-in-pixels squared) divided by the physical diagonal in inches. The square-root term gives the pixel-space diagonal of the panel, and dividing by the real diagonal converts that into a display pixel density value. Because consumer displays use square pixels, the horizontal, vertical, and diagonal PPI values match, so a single number captures density across the screen.",
          "A worked example: an iPhone 15 Pro has a 2556 x 1179 screen at 6.1 inches diagonal. Plugging into the formula, sqrt(2556^2 + 1179^2) = sqrt(6,533,136 + 1,390,041) = sqrt(7,923,177), or roughly 2815 pixels along the diagonal. Divide by 6.1 inches and you get about 461 PPI - comfortably past the retina threshold for phones. Compare this to a high PPI monitor like a 27-inch 4K at 163 PPI, or a 24-inch 1080p panel at 92 PPI. See the dpi-calculator for the same math applied to print terminology, and what-is-dpi plus pixels-per-inch for more context on the distinction between PPI and DPI."
        ]
      },
      {
        "id": "when-to-use",
        "title": "When to Use the PPI Calculator",
        "paragraphs": [
          "Display pixel density drives the perceived sharpness of any display. Calculate it whenever monitor sharpness or display quality measurement will affect your buying, designing, or troubleshooting decisions."
        ],
        "list": [
          "Comparing two laptops where one is 1080p and the other is 2.5K at the same panel size.",
          "Choosing between a 27-inch 1440p monitor (109 PPI) and a 27-inch 4K monitor (163 PPI).",
          "Picking a phone where screen crispness matters - 400+ PPI is the modern sweet spot.",
          "Evaluating VR headsets, where per-eye PPI drives the 'screen door' effect.",
          "Validating whether a display meets Retina thresholds (about 220 PPI for laptops at 20 inches, 300+ PPI for phones at 10-12 inches).",
          "Setting OS scaling factors on high-PPI monitors so text and UI remain readable."
        ]
      },
      {
        "id": "practical-examples",
        "title": "Practical Examples",
        "paragraphs": [
          "The table below lists screen PPI for popular devices, calculated directly from the formula above. Higher PPI values produce a sharper display at close viewing distances, illustrating why a sharp display matters more on phones than desktop monitors."
        ],
        "table": {
          "headers": ["Device", "Resolution", "Diagonal", "PPI"],
          "rows": [
            ["iPhone SE (3rd gen)", "1334 x 750", "4.7 in", "326"],
            ["iPhone 15 Pro", "2556 x 1179", "6.1 in", "461"],
            ["Samsung Galaxy S24 Ultra", "3120 x 1440", "6.8 in", "505"],
            ["iPad Pro 11-inch", "2388 x 1668", "11 in", "264"],
            ["MacBook Air 13-inch (M2)", "2560 x 1664", "13.6 in", "224"],
            ["MacBook Pro 16-inch", "3456 x 2234", "16.2 in", "254"],
            ["Dell UltraSharp 27 4K (U2723QE)", "3840 x 2160", "27 in", "163"],
            ["LG 34-inch UltraWide 1440p", "3440 x 1440", "34 in", "110"],
            ["Samsung Odyssey G9 49-inch", "5120 x 1440", "49 in", "108"]
          ]
        }
      },
      {
        "id": "common-mistakes",
        "title": "Common Mistakes to Avoid",
        "paragraphs": [
          "PPI is intuitive once you have calculated it a few times, but several subtle errors come up frequently."
        ],
        "list": [
          "Using the device's rounded marketing size (e.g. 'a 14-inch laptop') instead of the true diagonal like 14.2 inches.",
          "Calculating with scaled resolution instead of native - macOS, for example, reports a lower logical resolution by default.",
          "Ignoring aspect ratio effects - an ultrawide and a standard 16:9 panel can have different PPI even at the same diagonal and horizontal pixel count.",
          "Assuming higher PPI always looks better - beyond 220 PPI at typical laptop distance, most users can no longer resolve individual pixels.",
          "Forgetting to account for subpixel arrangements like PenTile, which reduces perceived sharpness even if raw PPI is high.",
          "Comparing PPI between a 6-inch phone and a 27-inch monitor as if they are used at the same viewing distance - they are not."
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
