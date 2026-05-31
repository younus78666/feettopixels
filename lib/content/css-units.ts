import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "Which CSS unit should I use most often?",
        "answer": "For modern responsive design, REM is the default choice. It scales with the root font size, which makes global size changes easy and respects user font-size preferences. Use pixels for borders and shadows where you want absolute values. Use EM for component-level scaling where children should track a parent's size. Use VW for fluid typography and containers that should scale with the viewport."
      },
      {
        "question": "Do pixels still matter in CSS when we have REM and VW?",
        "answer": "Yes. Pixels remain the underlying reference for all absolute sizing. 1rem defaults to 16px. 1pt equals 1.333px at 96 DPI. Every REM, EM, or VW value is computed back to pixels by the browser before rendering. Pixel-level behavior helps you debug layout issues and convert design specs to code."
      },
      {
        "question": "What's the difference between REM, EM, and root-relative units?",
        "answer": "REM is relative to the ROOT element (html) font size only. EM is relative to the PARENT element's font size (or the element's own font size for the font-size property itself). This makes REM predictable across the site, while EM compounds through nested components. That compounding is useful for modular scaling but tricky for global consistency."
      },
      {
        "question": "When does VW cause layout problems?",
        "answer": "VW scales to viewport width, so on ultra-wide monitors (3440px+) text set in VW can grow absurdly large. The fix is clamp(): clamp(1rem, 2vw, 1.5rem) gives VW fluidity with a floor and ceiling. Similarly, pure VW fonts can become illegibly small on phones, use clamp() or CSS locks to constrain."
      },
      {
        "question": "Is there a performance difference between CSS units?",
        "answer": "Negligible for paint and layout. The browser resolves all units to pixels before rendering. The real performance consideration is how units interact with reflow: VW changes on every viewport resize, EM cascades through nested components, and REM only responds to root font-size changes. REM is generally the most performance-predictable choice."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "CSS Unit Converters: REM, EM, PT, VW, and Pixel",
        "paragraphs": [
          "For 80% of CSS sizing decisions, REM is the right default. Use it for typography, spacing, and container widths. Use PX for borders and shadows where you want exact values that don't scale. Use VW with clamp() for fluid type and hero sections. EM belongs in component-level spacing where you want padding and sizing to track the element's own font size. That covers most real-world CSS.",
          "CSS gives you several length units: pixels (px), REM, EM, points (pt), viewport width (vw) and height (vh), percent (%), and more. Each has a specific use case. Picking the wrong one makes layouts either rigid or chaotic. This hub covers the four most-used CSS unit converters plus the conceptual explainer guides.",
          "Every CSS unit ultimately resolves to pixels at render time. Browsers compute REM, EM, VW, and PT back to pixel values based on context: root font size, parent font size, viewport width, and display DPI. Understanding the conversion in both directions, setting sizes in CSS units and debugging in computed pixels, is what makes a developer fluent in layout."
        ]
      },
      {
        "id": "converters",
        "title": "Four Essential Converters",
        "paragraphs": [
          "PX to REM: the workhorse conversion. Input pixel values from your design file and get REM values you can paste into stylesheets. Default base is 16px but adjustable for projects using different root font sizes.",
          "PX to EM: for component-level scaling. Enter pixel values and parent font size to get the right EM value for child elements.",
          "PX to PT: for print-oriented typography. 1pt equals 1.333px at 96 DPI. Use when designing for print or converting between screen mockups and print specs.",
          "PX to VW: for viewport-responsive elements. Enter pixels and viewport width to get the VW value that scales proportionally. Useful for fluid hero text, full-bleed containers, and modern responsive design."
        ]
      },
      {
        "id": "when-to-use",
        "title": "Which Unit to Use When",
        "table": {
          "headers": ["Use Case", "Best Unit", "Why"],
          "rows": [
            ["Body text size", "REM", "Respects user font-size setting, global consistency"],
            ["Headings", "REM", "Scales with body text, maintains hierarchy"],
            ["Borders and shadows", "PX", "Absolute values, unaffected by zoom or font size"],
            ["Component padding", "REM or EM", "REM for consistency, EM for component-level scaling"],
            ["Nested list indentation", "EM", "Compounds naturally through nesting"],
            ["Fluid hero text", "VW with clamp()", "Scales to viewport, bounded by clamp limits"],
            ["Full-bleed backgrounds", "VW or 100%", "Viewport-relative containers"],
            ["Media query breakpoints", "PX", "Predictable threshold values"],
            ["Print typography", "PT", "Absolute print-world unit"],
            ["Icon sizes", "REM or PX", "REM for text-aligned, PX for pixel-perfect"]
          ]
        }
      },
      {
        "id": "conversion-formulas",
        "title": "Conversion Formulas",
        "paragraphs": [
          "REM from PX: REM = PX / root font size. Default root is 16px, so 32px = 2rem, 24px = 1.5rem, 12px = 0.75rem.",
          "EM from PX: EM = PX / parent font size. If parent is 16px, 24px = 1.5em. If parent is 20px (e.g., a card component with h2 parent), 24px = 1.2em.",
          "PT from PX: PT = PX × 72 / 96 = PX × 0.75 (at 96 DPI). 16px = 12pt, 24px = 18pt.",
          "VW from PX: VW = (PX / viewport width) × 100. On a 1920px viewport, 192px = 10vw, 480px = 25vw. On a 375px mobile viewport, 150px = 40vw."
        ]
      },
      {
        "id": "common-unit-mistakes",
        "title": "What Goes Wrong When You Pick the Wrong Unit",
        "paragraphs": [
          "Using PX everywhere is the most common mistake, and it silently breaks accessibility. When a user sets their browser default font to 20px for readability, every PX value on the page stays fixed. Headings don't grow. Spacing doesn't breathe. The layout ignores the user's preference entirely. Switching typography and spacing to REM fixes this because REM scales with the root font size.",
          "Using EM for global sizing creates a compounding problem that catches developers off guard. A section set to 1.2em inside a component that's also 1.2em produces 1.44em relative to the root. Nest another level and the values snowball. EM is useful specifically for component-level spacing where you want padding to track the element's own font size. For anything site-wide, use REM instead.",
          "Forgetting clamp() with VW breaks layouts on both ends of the viewport range. A heading set to 3vw looks fine at 1440px but shrinks to unreadable on a phone and grows comically large on a 3440px ultrawide monitor. Wrapping VW in clamp() gives you the fluid scaling in the middle with a sensible floor and ceiling: clamp(1.25rem, 3vw, 2.5rem) works at every screen size."
        ]
      },
      {
        "id": "learn-more",
        "title": "Concept Guides",
        "paragraphs": [
          "EM vs REM explains when each relative unit is appropriate, with visual examples of how nesting affects EM but not REM. Pair it with the PX to REM and PX to EM converters for a complete mental model.",
          "What is a Pixel covers the anchor unit that all CSS length values ultimately resolve to. Understanding pixels is foundational for debugging CSS in DevTools, where computed values always appear in pixels."
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
