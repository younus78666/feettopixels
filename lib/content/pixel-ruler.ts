import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "How accurate is the on-screen ruler?",
        "answer": "Without calibration, accuracy depends on your operating system's reported PPI, which may not match the physical pixel density of your screen. After calibrating with a credit card or other known-size object, accuracy improves to within 1-2% for most displays."
      },
      {
        "question": "How do I calibrate the ruler?",
        "answer": "Place a standard credit card (3.375 inches / 85.6mm wide) against your screen. Adjust the calibration slider until the colored bar matches the card's width exactly, then click Calibrate. This calculates your screen's true PPI and corrects the ruler's physical unit readings."
      },
      {
        "question": "Why do pixels not correspond to real-world measurements?",
        "answer": "Pixels are digital units with no fixed physical size. Their physical size depends on the screen's PPI (pixels per inch). A pixel on a 27-inch 4K monitor is much smaller than one on a 24-inch 1080p monitor, so the same number of pixels covers a different physical distance on each screen."
      },
      {
        "question": "Can I use this ruler to measure physical objects?",
        "answer": "Yes, after calibrating. Place the object against the screen and read the measurement. Switch between pixels, inches, and centimeters as needed. For best accuracy, place objects flat against the screen surface."
      },
      {
        "question": "Does display scaling affect the ruler?",
        "answer": "Yes. Operating system scaling (such as 125% on Windows) changes the relationship between CSS pixels and physical pixels. Calibration accounts for this automatically, giving you accurate physical measurements regardless of your scaling setting."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "What an On-Screen Pixel Ruler Does",
        "paragraphs": [
          "An on-screen pixel ruler is a lightweight measuring tool you drag across your display to read pixel distances directly. It works like a physical ruler, except its native unit is screen pixels, with optional conversion to inches, centimeters, or millimeters once you calibrate it against a known physical object.",
          "Designers, developers, and QA engineers use it to verify spacing, font sizes, button heights, icon dimensions, and layout grids on a live page. It's faster than opening dev tools to inspect every element individually."
        ]
      },
      {
        "id": "how-to-use",
        "title": "How to Use the Pixel Ruler",
        "paragraphs": [
          "Open the ruler tool and drag it across the area you want to measure. The ruler displays the current reading in your selected unit: pixels, inches, centimeters, or millimeters. Resize from either end to capture a specific span.",
          "For pixel measurements in CSS layout work, no calibration is needed. The ruler reads CSS pixels natively, which matches what your stylesheets use.",
          "For physical measurements (confirming that a print preview is the right size, or measuring a real object held against the screen), calibrate first. Place a credit card on your screen, drag the ruler to match its width, and click Calibrate. The ruler now knows your screen's true physical pixel density and its inch and centimeter readings will be accurate."
        ]
      },
      {
        "id": "calibration",
        "title": "How to Calibrate the Ruler Accurately",
        "paragraphs": [
          "Without calibration, the ruler uses your browser's reported pixel density, which is often wrong for modern high-DPI displays. The operating system may report 96 CSS PPI when the physical screen is actually 218 PPI or higher. That gap makes the ruler's inch and cm values unreliable.",
          "Calibrate with a known-size object held against your screen. The easiest choice is a standard credit card: it measures exactly 85.60 mm x 53.98 mm (3.370 x 2.125 inches) worldwide. Place the card on the screen, adjust the ruler scale until it matches the card's length, and the ruler is now accurate to your specific display's physical pixel density.",
          "Other reliable calibration objects: a US quarter (24.26 mm diameter), a UK 1-pound coin (23.43 mm), an iPhone 15 Pro screen width (~71 mm), or a printed ruler. Use something you've already measured with a physical ruler."
        ]
      },
      {
        "id": "use-cases",
        "title": "When a Pixel Ruler Is Useful (and When It Isn't)",
        "paragraphs": [
          "Frontend debugging: verify that spacing between elements matches the design spec (16 px margins, 24 px gutters, 48 px touch targets). The ruler is faster than inspecting each element in dev tools.",
          "Design review: confirm that actual rendering matches Figma or Sketch mockups, especially at different zoom levels. A 24 px heading in Figma should render as 24 CSS pixels on screen.",
          "Accessibility audits: verify minimum touch target size (44 px per Apple HIG, 48 dp per Google Material), minimum font size (16 px for body text), and adequate line height (usually 1.5x font size).",
          "Print preparation: confirm that a print layout's on-screen representation matches the intended physical size. A 100 mm print preview should measure 100 mm on your calibrated ruler.",
          "Responsive testing: check that breakpoints fire at the correct widths and that spacing scales proportionally across viewport sizes.",
          "The ruler isn't the right tool for measuring distances on screenshots (the file's pixel count doesn't map to screen pixels 1:1 unless zoom is exact), or for precision engineering work where a physical caliper is more appropriate."
        ]
      },
      {
        "id": "units",
        "title": "Supported Units and Conversions",
        "table": {
          "headers": ["Unit", "When to Use", "Calibration Needed?"],
          "rows": [
            ["Pixels (px)", "Layout, CSS, design spec", "No, native ruler unit"],
            ["Inches (in)", "US print design, screen size", "Yes, calibrate to physical object"],
            ["Centimeters (cm)", "Metric print, ISO layouts", "Yes, calibrate to physical object"],
            ["Millimeters (mm)", "Precision metric, engineering", "Yes, calibrate to physical object"],
            ["Points (pt)", "Typography, print sizing", "Yes, based on calibrated inches"],
            ["REM", "Responsive CSS design", "Derived from browser root font size"]
          ]
        }
      },
      {
        "id": "accuracy-tips",
        "title": "Accuracy and Limitations",
        "paragraphs": [
          "Browser zoom breaks pixel measurements. Always measure at 100% zoom level. Most browsers show the current zoom in the URL bar; press Ctrl+0 (Cmd+0 on Mac) to reset it.",
          "Device pixel ratio matters. A Retina display at 2x DPR means 1 CSS pixel = 2 physical pixels. The ruler measures CSS pixels by default because that's what CSS uses. To measure physical pixels, multiply by the DPR value.",
          "External monitors often have different pixel densities than built-in laptop displays. Calibrate the ruler separately on each monitor if you switch between them, and save calibration values for future sessions when the tool supports it."
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
