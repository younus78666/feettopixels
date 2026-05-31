import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "How do I calculate DPI?",
        "answer": "Use the formula: DPI = sqrt(horizontal pixels squared + vertical pixels squared) / diagonal in inches. For a 1920x1080 monitor at 24 inches: sqrt(1920² + 1080²) = sqrt(4,809,600) = 2,193. Divide by 24 = 91.4 DPI."
      },
      {
        "question": "What is the DPI of a 27-inch 1080p monitor?",
        "answer": "81.6 DPI. Formula: sqrt(1920² + 1080²) / 27 = 2,202 / 27 = 81.6. This is considered adequate for desktop use at arm's length."
      },
      {
        "question": "What is the DPI of a 27-inch 4K monitor?",
        "answer": "163 DPI. Formula: sqrt(3840² + 2160²) / 27 = 4,405 / 27 = 163.2. This is a sharp, Retina-class display for desktop use."
      },
      {
        "question": "What DPI is good for a monitor?",
        "answer": "For desktop use (24-28 inches viewed at arm's length): 90-110 DPI is comfortable. 4K monitors at 27 inches reach 163 DPI, which is excellent for design work. Above 220 DPI on a desktop monitor is diminishing returns at typical viewing distance."
      },
      {
        "question": "What is the difference between DPI and resolution?",
        "answer": "Resolution describes total pixel count (e.g., 1920x1080). DPI describes pixel density per inch. Two monitors can share the same resolution but have different DPI if one is physically larger. A 24-inch 1080p monitor has higher DPI than a 32-inch 1080p monitor."
      },
      {
        "question": "What is the difference between DPI and PPI?",
        "answer": "DPI (dots per inch) traditionally refers to print resolution, while PPI (pixels per inch) refers to screen resolution. In practice, these terms are often used interchangeably when discussing displays. Both measure pixel density."
      },
      {
        "question": "Why does DPI matter for design work?",
        "answer": "DPI determines how sharp content appears on screen and in print. Higher DPI means more pixels per inch, resulting in crisper text and images. Designers need to know DPI to ensure their work looks correct at the intended viewing distance."
      },
      {
        "question": "How do I find the DPI of my current screen?",
        "answer": "Enter your screen's resolution (width and height in pixels) and diagonal size in inches into the calculator above. You can find resolution in display settings and diagonal size in your monitor's specifications or by measuring corner to corner."
      }
    ],
    "sections": [
      {
        "id": "how-it-works",
        "title": "How the DPI Calculator Works",
        "paragraphs": [
          "DPI (dots per inch) on a display is calculated with the Pythagorean theorem. This display density calculator takes three inputs - horizontal pixel count, vertical pixel count, and the physical diagonal size in inches - and returns pixel density. The formula is: DPI = sqrt(width-in-pixels squared + height-in-pixels squared) divided by diagonal-in-inches. The numerator is the diagonal pixel count of the pixel grid, and dividing it by the physical diagonal gives pixels per inch along the diagonal axis.",
          "Here is a worked example. A 27-inch 4K monitor has a 3840x2160 native resolution. The diagonal pixel count is sqrt(3840^2 + 2160^2) = sqrt(14,745,600 + 4,665,600) = sqrt(19,411,200) which equals about 4406 pixels. Dividing 4406 by 27 inches yields approximately 163 DPI, which is why this monitor resolution delivers noticeably sharper screen sharpness than a 27-inch 1440p panel at about 109 DPI. For the print-focused counterpart of this math, see what-is-dpi and pixels-per-inch.",
          "DPI only tells you density along the diagonal. Because modern displays use square pixels, horizontal DPI and vertical DPI equal the diagonal DPI. On non-square-pixel or anamorphic formats you\'d need to compute each axis separately, but that case is vanishingly rare on modern hardware."
        ]
      },
      {
        "id": "when-to-use",
        "title": "When to Use This Calculator",
        "paragraphs": [
          "Monitor DPI matters any time the physical size of a pixel affects how sharp content looks. Use this calculator for calculating screen resolution requirements in these scenarios:"
        ],
        "list": [
          "Comparing two monitors at the same resolution but different physical sizes - a 24-inch 1080p panel (92 DPI) is noticeably softer than a 21.5-inch 1080p panel (103 DPI).",
          "Deciding whether a 1440p or 4K monitor is worth the upgrade for your desk distance.",
          "Setting the correct OS scaling factor so UI elements are readable on high-DPI displays (125%, 150%, 200%).",
          "Choosing a laptop - MacBook Retina panels typically run 220-250 DPI, while budget Windows laptops often sit at 100-120 DPI.",
          "Evaluating VR headset displays, where per-eye DPI drives perceived clarity.",
          "Matching two side-by-side monitors so OS scaling feels consistent across both screens."
        ]
      },
      {
        "id": "practical-examples",
        "title": "Practical Examples",
        "paragraphs": [
          "The table below lists display PPI values for popular displays. These are computed directly from the formula above using the manufacturer's advertised monitor resolution and diagonal, giving you a real-world measure of display density for each panel."
        ],
        "table": {
          "headers": ["Device", "Resolution", "Diagonal (in)", "DPI"],
          "rows": [
            ["24-inch 1080p monitor", "1920 x 1080", "24", "92"],
            ["27-inch 1440p monitor", "2560 x 1440", "27", "109"],
            ["27-inch 4K monitor", "3840 x 2160", "27", "163"],
            ["32-inch 4K monitor", "3840 x 2160", "32", "138"],
            ["13-inch MacBook Air (M2)", "2560 x 1664", "13.6", "224"],
            ["16-inch MacBook Pro", "3456 x 2234", "16.2", "254"],
            ["iPad Pro 12.9-inch", "2732 x 2048", "12.9", "265"],
            ["34-inch 21:9 ultrawide", "3440 x 1440", "34", "110"],
            ["49-inch 32:9 superwide", "5120 x 1440", "49", "108"]
          ]
        }
      },
      {
        "id": "common-mistakes",
        "title": "Common Mistakes to Avoid",
        "paragraphs": [
          "DPI calculations look simple but trip people up when the inputs do not match the device's actual behavior. Watch for these errors."
        ],
        "list": [
          "Using the stated screen size (e.g. 'a 27-inch monitor') instead of the true diagonal - some marketing numbers round up from 26.5 or 27.2 inches.",
          "Confusing native resolution with the current scaled resolution in display settings. DPI must use the physical pixel grid, not the logical one.",
          "Mixing up DPI and PPI when talking to print vendors - print DPI is how many ink dots are deposited per inch, not the screen's pixel density.",
          "Forgetting that a high-DPI display at 100% OS scale shows tiny UI. Scaling is what makes Retina comfortable, not DPI alone.",
          "Assuming 'more DPI is always better' - beyond about 220 DPI at laptop distance most users cannot distinguish individual pixels."
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
