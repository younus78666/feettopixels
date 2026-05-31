import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "Where should I start if I'm new to pixel conversion?",
        "answer": "Start with What is a Pixel to understand the fundamental unit, then read What is DPI and What is PPI to grasp density. Once those concepts are clear, DPI vs PPI ties them together. From there you can move into the practical reference pages: Best DPI for Printing, Paper Sizes in Pixels, and Standard Image Sizes."
      },
      {
        "question": "What's the difference between the Guides and References in this hub?",
        "answer": "Guides explain concepts: what DPI is, what PPI is, how pixels work, and how CSS units compare. References are quick-lookup pages covering print sizes in pixels, social media image dimensions, paper sizes, and common resolutions. Use Guides when you're learning; use References when you already know the concept and just need a number."
      },
      {
        "question": "Are these guides updated regularly?",
        "answer": "Yes. Each page covers evergreen fundamentals (DPI math, pixel concepts, CSS unit rules), but reference data gets refreshed as platforms and devices change. Social media image sizes, standard screen resolutions, and device PPIs all get updated when platform specs shift."
      },
      {
        "question": "Do the guides cover international measurements?",
        "answer": "Yes. Pixels Per MM and Pixels Per CM cover the metric system used across Europe, Asia, and Latin America. Paper Sizes in Pixels includes ISO A-series (A4, A3, A2) alongside US Letter and Tabloid. Passport Photo Size covers requirements for US, UK, Schengen, and other countries."
      },
      {
        "question": "How do these guides relate to the pixel conversion tools?",
        "answer": "The guides explain the underlying concepts so the tools make sense. Once you understand that 300 DPI means 300 pixels per inch, the Inches to Pixels calculator's behavior (multiplying inches by DPI) becomes intuitive. The Pixel Converter hub is the main interactive entry point; the Learn hub is the knowledge base that supports it."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "Learn Pixel Conversion, DPI, and Display Density",
        "paragraphs": [
          "This hub collects every educational and reference page on FeetToPixels in one place. You'll find guides on what DPI actually measures, exact pixel dimensions for standard paper sizes, and which CSS unit to use in a responsive layout.",
          "The content is organized into three tiers. Foundational Guides explain core concepts (pixel, DPI, PPI, CSS units). Comparison Guides clarify confusing pairs like DPI vs PPI and EM vs REM. Reference Pages answer specific lookup questions: best DPI for printing, Instagram post size, A4 in pixels."
        ]
      },
      {
        "id": "learning-path",
        "title": "Which Guide Should You Read First",
        "paragraphs": [
          "For print work, start with What is a Pixel, then What is DPI, then Best DPI for Printing. Those three pages give you everything you need to size images for brochures, posters, and banners correctly.",
          "For web and CSS work, start with What is PPI, then EM vs REM. Check the Pixels Per Inch deep-dive if you're working on high-density or Retina-targeted designs. The CSS unit converters on the Pixel Converter hub handle the actual math.",
          "For design QA and screen specs, go straight to Common Resolutions and Social Media Image Sizes. These are lookup references, not concept guides. You don't need to read them front-to-back."
        ]
      },
      {
        "id": "foundational-guides",
        "title": "Foundational Guides",
        "paragraphs": [
          "Start here if pixel conversion, DPI, or PPI are new concepts. Each page builds on the previous one.",
          "What is a Pixel: the smallest addressable unit on a digital display, composed of red, green, and blue subpixels. Understanding this anchor unit is the prerequisite for everything else.",
          "What is DPI: dots per inch, the print-world measure of ink dot density. Applies to printers, not screens.",
          "What is PPI: pixels per inch, the digital-world measure of display density. Applies to screens, camera sensors, and image files.",
          "Pixels Per Inch: the deep-dive reference on PPI math, including the Pythagorean formula for calculating PPI from any resolution and screen size."
        ]
      },
      {
        "id": "comparison-guides",
        "title": "Comparison Guides",
        "paragraphs": [
          "These pages clarify concepts that designers and developers commonly confuse.",
          "DPI vs PPI: the canonical comparison. DPI is print (ink dots), PPI is screen (pixels). Photoshop labels image resolution as DPI even though it's technically PPI. That's a historical quirk that confuses most people until they see the side-by-side table.",
          "EM vs REM: both are relative CSS length units, but REM is relative to the root element's font size while EM is relative to the parent element's. Use REM for global consistency, EM for component-level scaling."
        ]
      },
      {
        "id": "reference-pages",
        "title": "Reference Pages",
        "paragraphs": [
          "These pages answer specific, high-intent lookup questions. Bookmark them if you work with print specs, social media design, or photo sizing regularly.",
          "Best DPI for Printing: 300 for photos and magazines, 150 for newspapers and large posters, 72 for screen-only, 600 for fine art. The viewing distance rule explains why.",
          "Best DPI for Web: pixel dimensions are what matter for web. DPI metadata is ignored by browsers. This page explains why.",
          "Paper Sizes in Pixels: A4, A3, A5, A0, Letter, Legal, Tabloid all at 96, 150, and 300 DPI.",
          "Standard Image Sizes: 4x6, 5x7, 8x10, 11x14, 16x20, and 24x36 in pixels at professional print DPI.",
          "Social Media Image Sizes: current Instagram, Facebook, YouTube, LinkedIn, and Twitter image specs.",
          "Common Resolutions: what 1920x1080, 2560x1440, and 3840x2160 physically measure across different screen sizes.",
          "DPI Conversion Table: quick chart showing pixels required for every standard print size at every standard DPI.",
          "Passport Photo Size: specs for US, UK, Schengen, and other country requirements in both pixels and mm.",
          "Pixels Per Foot, Pixels Per CM, Pixels Per MM: density conversion tables for large-format, metric, and millimeter-precision work."
        ]
      },
      {
        "id": "related-tools",
        "title": "Interactive Tools",
        "paragraphs": [
          "Once the concepts are clear, the Pixel Converter hub gives you interactive tools for every unit conversion: feet, inches, centimeters, millimeters, rem, em, pt, and vw all to and from pixels. The DPI Calculator, PPI Calculator, and Image DPI Checker handle specific density questions from your current inputs."
        ]
      },
      {
        "id": "print-workflow",
        "title": "Print Design Workflow",
        "paragraphs": [
          "For anyone preparing files for physical output -- brochures, posters, banners, photo prints, business cards, or packaging -- the workflow starts with DPI. The physical size and the DPI setting together determine the pixel count you need.",
          "A 4x6 photo at 300 DPI needs 1,200 x 1,800 pixels minimum. A 2 x 8 foot trade show banner at 150 DPI needs 2,880 x 14,400 pixels. Use the Inches to Pixels converter to calculate canvas size before you start, and the Image DPI Checker after you have source files to confirm they meet the required resolution."
        ]
      },
      {
        "id": "web-css-workflow",
        "title": "Web and CSS Workflow",
        "paragraphs": [
          "For web and front-end development, DPI metadata in image files is irrelevant -- only pixel dimensions matter. The CSS unit tools (PX to REM, PX to EM, PX to VW) handle the conversion between design mockup values in pixels and the relative units used in production CSS.",
          "Designers typically spec components in pixels (matching a Figma or Sketch artboard). Developers translate those to rem or em for accessibility and scalability. The PX to REM converter handles this instantly: at 16px root, 24px = 1.5rem, 32px = 2rem."
        ]
      },
      {
        "id": "screen-density-workflow",
        "title": "Screen Density and Retina Workflow",
        "paragraphs": [
          "For designers preparing assets for multiple screen densities -- standard, Retina (2x), and high-DPI (3x) -- the key measurement is device pixel ratio (DPR). A button displayed at 48px CSS needs a 96px asset for 2x screens and a 144px asset for 3x screens.",
          "The DPI Calculator and PPI Calculator tell you the pixel density of any display from its resolution and diagonal. The Screen Resolution Checker reads your own screen specs directly. Use these together when optimizing image export for different device categories."
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
