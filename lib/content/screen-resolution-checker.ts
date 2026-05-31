import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "What screen resolution do I have?",
        "answer": "This tool detects your screen resolution automatically using the browser's screen API. The most common desktop resolutions are 1920x1080 (Full HD), 2560x1440 (QHD), and 3840x2160 (4K UHD)."
      },
      {
        "question": "What is device pixel ratio (DPR)?",
        "answer": "Device pixel ratio (DPR) is the ratio of physical pixels to CSS pixels. A DPR of 2 means the display uses 2 physical pixels for every 1 CSS pixel (common on Retina screens). At DPR 2, a 1920x1080 CSS layout is actually rendered at 3840x2160 physical pixels."
      },
      {
        "question": "What is the difference between screen resolution and viewport?",
        "answer": "Screen resolution is the total pixel count of your physical display (e.g., 2560x1440). Viewport is the visible browser area excluding OS chrome, toolbars, and scrollbars. A 2560x1440 screen may have a 1280x700 viewport after the browser UI is accounted for."
      },
      {
        "question": "What is color depth?",
        "answer": "Color depth indicates how many bits are used to represent each pixel's color. 24-bit (8 bits per channel) supports 16.7 million colors and is the standard for most displays. 30-bit (10 bits per channel) supports 1.07 billion colors, used in professional monitors for photo editing, HDR content, and color grading."
      },
      {
        "question": "How do I check my actual monitor resolution?",
        "answer": "This tool detects the resolution reported by your browser. For the true physical resolution, check your monitor's specifications or your operating system's display settings. If scaling is applied, multiply the CSS resolution by the device pixel ratio to get the physical pixel count."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "What the Screen Resolution Checker Reports",
        "paragraphs": [
          "This tool auto-detects five display metrics in your browser: physical screen resolution (width x height in pixels), device pixel ratio (DPR), color depth (bits per channel x 3 channels = total bits), viewport size (browser window dimensions excluding scrollbars), and refresh rate where available.",
          "All detection happens through standard browser APIs: window.screen, window.devicePixelRatio, window.matchMedia, and viewport measurements. The tool runs entirely in your browser with no external calls, so your device details stay private."
        ]
      },
      {
        "id": "what-knowing-your-resolution-helps-you-do",
        "title": "What Knowing Your Screen Resolution Helps You Do",
        "paragraphs": [
          "For developers, knowing the DPR tells you what image sizes to serve. A DPR-2 screen needs 2x image assets to display crisp graphics. A DPR-1 screen doesn't need them, so serving them wastes bandwidth. Run this tool on a test device before writing your srcset breakpoints.",
          "For designers, the physical resolution confirms whether your mockup canvas matches the real device. A design built at 1440px wide won't look the same on a 1280px display. For content creators, the pixel count tells you the exact dimensions for wallpapers, thumbnails, and recorded video exports at native quality.",
          "For buyers evaluating a new display, this tool shows what your current screen actually delivers so you can compare it honestly against the specs of an upgrade."
        ]
      },
      {
        "id": "what-matters",
        "title": "Why These Numbers Matter",
        "paragraphs": [
          "Physical resolution tells you the display hardware's native pixel count. 1920x1080 is Full HD, 2560x1440 is QHD, 3840x2160 is 4K UHD, 5120x2880 is 5K. Higher resolution on a larger screen gives sharper text and more workspace. On a smaller screen, it gives Retina-class smoothness.",
          "Device pixel ratio (DPR) is the scaling multiplier browsers use to keep UI elements readable on high-density screens. DPR 1 is standard density. DPR 2 means every CSS pixel renders as 2x2 physical pixels (four times the detail). DPR 3 is common on flagship phones. Knowing the DPR guides responsive image serving: high-DPR devices need 2x or 3x assets to display clearly.",
          "Color depth describes how many distinct colors your display can show. 24-bit (8 bits per RGB channel) is the universal standard, giving 16.7 million colors. 30-bit (10 bits per channel) gives 1.07 billion colors, found on professional monitors for photo editing, HDR content, and color grading. Color depth affects gradients: 24-bit displays show visible banding in smooth gradients, while 30-bit displays render them cleanly."
        ]
      },
      {
        "id": "common-resolutions",
        "title": "How Your Screen Compares to Standards",
        "table": {
          "headers": ["Standard Name", "Pixel Count", "Typical Device"],
          "rows": [
            ["HD", "1280 x 720", "Entry laptops, small phones"],
            ["Full HD (1080p)", "1920 x 1080", "Standard monitors, most laptops, TVs"],
            ["WUXGA", "1920 x 1200", "Pro laptops, 16:10 monitors"],
            ["QHD (1440p)", "2560 x 1440", "High-end monitors, gaming laptops"],
            ["WQHD+", "3200 x 2000", "Premium ultrabooks, MacBook 14\""],
            ["4K UHD", "3840 x 2160", "Premium monitors, modern TVs, iPad Pro"],
            ["5K", "5120 x 2880", "iMac, LG UltraFine 5K, pro workstations"],
            ["6K", "6016 x 3384", "Apple Pro Display XDR"],
            ["8K", "7680 x 4320", "High-end TVs, emerging pro displays"],
            ["Phone (flagship)", "1170 x 2532", "iPhone 14/15, Galaxy S23/24"]
          ]
        }
      },
      {
        "id": "dpr-implications",
        "title": "Device Pixel Ratio Implications for Developers",
        "paragraphs": [
          "When you write `width: 100px` in CSS, the browser renders 100 CSS pixels. On a DPR-2 screen, those map to 200 physical pixels. The same CSS produces sharper output on high-DPR devices automatically, with no extra work on layout.",
          "For images, a 1x image (say, 400px wide) looks fine on DPR-1 but appears soft on DPR-2 because the browser stretches 400 physical pixels to fill 800. Use `srcset` or `<picture>` to serve 2x and 3x variants (800px and 1200px for the same slot) so high-DPR devices get crisp output.",
          "For canvas-rendered content (charts, games), multiply the canvas's actual pixel count by DPR while keeping the CSS size constant. Without this step, canvas graphics look blurry on Retina displays. The pattern is: `canvas.width = cssWidth x devicePixelRatio; context.scale(devicePixelRatio, devicePixelRatio);`"
        ]
      },
      {
        "id": "refresh-rate",
        "title": "Refresh Rate and Motion Clarity",
        "paragraphs": [
          "Refresh rate measures how many times per second your display redraws the image. 60 Hz is the classic standard, adequate for text and static UI. 120 Hz is the new baseline for modern phones and gaming monitors, producing noticeably smoother scrolling and animations. 144 Hz, 165 Hz, and 240 Hz appear on gaming displays where input latency matters.",
          "Whether the difference is noticeable depends on what you're doing. For email, docs, and browsing, 60 Hz feels fine. For fast scrolling, gaming, and animation, 120+ Hz is visibly smoother. Variable refresh rate (VRR) technologies like FreeSync and G-Sync dynamically match the refresh rate to content, reducing stutter and tearing at any frame rate."
        ]
      },
      {
        "id": "use-cases",
        "title": "When to Use This Tool",
        "paragraphs": [
          "Buying a new display: compare its specs against what your current screen reports to know whether the upgrade delivers a meaningful difference.",
          "Web development QA: quickly verify a test device's DPR, resolution, and viewport before filing a cross-device bug.",
          "Asset preparation: know the real pixel count required to fill your display at crisp quality before exporting wallpapers, screenshots, or recorded videos.",
          "Accessibility: confirm that users with high-DPR or low-resolution devices see your content at intended sizes, since CSS scales differently across densities."
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
