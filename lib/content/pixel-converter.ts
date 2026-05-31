import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "What units can I convert between?",
        "answer": "This hub converts between pixels and all common design units: inches, centimeters, millimeters, feet, rem, em, pt, and vw. Every tool is DPI-aware so you can specify 72, 96, 150, 300, or any custom DPI."
      },
      {
        "question": "Which converter should I use for print design?",
        "answer": "Use Pixels to Inches for converting image dimensions to print size. Use Inches to Pixels to calculate pixel requirements for a target print size. Use the DPI Calculator to verify image resolution before sending to a print shop."
      },
      {
        "question": "Which converter should I use for web/CSS development?",
        "answer": "Use PX to REM for typography and spacing that should scale with user font preferences. Use PX to EM for component-level scaling. Use PX to VW for fluid layouts that scale with viewport width."
      }
    ],
    "sections": [
      {
        "id": "about-pixel-conversion",
        "title": "About Pixel Conversion",
        "paragraphs": [
          "This hub brings together every pixel converter on FeetToPixels: physical units (inches, centimeters, millimeters, feet), screen density tools (DPI, PPI), and CSS units (rem, em, pt, vw). The key variable in all of them is DPI, which determines how many pixels fit into one physical inch.",
          "That distinction matters whenever a design needs to work both on screen and in print. A file that looks large on a monitor can print much smaller once a higher DPI is applied. Get the DPI wrong and the canvas size is wrong too."
        ]
      },
      {
        "id": "common-formulas",
        "title": "Common Conversion Formulas",
        "list": [
          "Pixels = inches x DPI",
          "Inches = pixels / DPI",
          "Pixels = centimeters x DPI / 2.54",
          "Pixels = millimeters x DPI / 25.4",
          "Pixels = feet x 12 x DPI"
        ]
      },
      {
        "id": "which-converter-do-i-need",
        "title": "Which Converter Do You Need",
        "paragraphs": [
          "Use the physical-unit converters (inches, cm, mm, feet) when you know the real-world size you need to hit. Use the reverse converters when you already have pixel dimensions and want to know how large they'll print at a given DPI.",
          "For web and front-end work, start with the CSS converters. They translate pixel values into rem, em, pt, and viewport-based units so spacing and typography scale predictably across devices. If you're not sure which unit your workflow uses, the Unit Quick Reference table below maps starting units to the right converter."
        ]
      },
      {
        "id": "choose-the-right-dpi",
        "title": "Choose the Right DPI Before You Convert",
        "paragraphs": [
          "Pixel conversion only gives a reliable result after the output context is clear. Screen work starts from CSS pixels and viewport dimensions. Print work starts from physical size, viewing distance, and the print shop's DPI requirement. Large signage sits between those two worlds: a banner viewed from 12 feet away doesn't need the same pixel density as a photo book held in your hand.",
          "Use 96 DPI for CSS or screen-reference values, 150 DPI for posters and trade show graphics viewed from a few feet away, and 300 DPI for close-up print pieces such as brochures, labels, and photo prints. For billboards and large wall graphics, 30 to 100 DPI is acceptable when the viewing distance is long."
        ]
      },
      {
        "id": "what-goes-wrong-without-dpi",
        "title": "What Goes Wrong Without a DPI-Aware Converter",
        "paragraphs": [
          "A converter that skips DPI gives you a number, but not a useful one. Type in 8 inches and get back 768 pixels without any DPI context, and that result is meaningless: 768 pixels at 96 DPI is an 8-inch screen reference, but the same 768 pixels at 300 DPI would only print 2.56 inches wide. The same number, two completely different physical outcomes.",
          "Common mistakes from ignoring DPI: designing a banner at 72 DPI and sending it to a printer expecting 150 DPI (the output prints soft and pixelated), or exporting a photo at 300 DPI when the client only needed a web upload at 96 DPI (the file is unnecessarily large). The fix is always the same: state the DPI before the conversion, not after."
        ]
      },
      {
        "id": "conversion-examples",
        "title": "Worked Conversion Examples",
        "table": {
          "headers": ["Task", "Formula", "Result"],
          "rows": [
            ["3 ft banner at 150 DPI", "3 x 12 x 150", "5,400 px wide"],
            ["2400 px image at 300 DPI", "2400 / 300", "8 inches wide"],
            ["10 cm label at 300 DPI", "10 x 300 / 2.54", "1,181 px wide"],
            ["1920 px layout at 96 DPI", "1920 / 96", "20 inches wide"],
            ["24px CSS text to rem", "24 / 16", "1.5rem"]
          ]
        }
      },
      {
        "id": "quality-checks",
        "title": "Quality Checks Before Export",
        "paragraphs": [
          "After converting, check three things before exporting the file. First, confirm the DPI matches the output type. Second, compare the final pixel dimensions against the largest image or artwork placed in the design. Third, make sure the aspect ratio hasn't changed during resizing.",
          "A 4 x 8 foot banner at 150 DPI needs 7,200 x 14,400 pixels. If the main photo in that file is only 2,000 pixels wide, the document size may be correct while the photo still prints soft. The converter gives the target canvas; source image quality still has to match that target.",
          "For handoff, write down both the converted value and the assumption behind it: 300 DPI for a close-view print, 150 DPI for a poster, 96 DPI for a screen reference, or a specific base font size for CSS. That note saves time when another designer, developer, or print vendor needs to reproduce the same conversion later."
        ],
        "list": [
          "Confirm the intended output: screen, close-view print, poster, banner, or billboard.",
          "Use the printer's requested DPI when available instead of guessing.",
          "Keep the original aspect ratio unless the design is meant to crop.",
          "Check the largest placed image, not only the final canvas size."
        ]
      },
      {
        "id": "unit-quick-reference",
        "title": "Unit Quick Reference",
        "paragraphs": [
          "Different professions use different units as their starting point. This table maps common input units to the converters most useful for each workflow."
        ],
        "table": {
          "headers": ["Starting unit", "Common workflow", "Best converter"],
          "rows": [
            ["Pixels", "Resize for print or social upload", "Pixels to Inches, Pixels to CM"],
            ["Inches", "Set canvas for US print projects", "Inches to Pixels"],
            ["Centimeters", "Set canvas for EU or A-series paper", "CM to Pixels"],
            ["Millimeters", "Label design, packaging, product specs", "MM to Pixels"],
            ["Feet", "Large format: banners, signage, backdrops", "Feet to Pixels"],
            ["rem / em", "CSS responsive typography", "PX to REM, PX to EM"],
            ["pt", "InDesign, Word, presentation software", "PT to PX"],
            ["vw", "Full-width responsive sections", "VW to PX"]
          ]
        }
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
