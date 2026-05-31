import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "What is vw in CSS?",
        "answer": "VW (viewport width) is a CSS unit equal to 1% of the viewport's width. If the viewport is 1440px wide, 1vw = 14.4px. VW units create fluid layouts that scale proportionally with the browser window width."
      },
      {
        "question": "How do I convert px to vw?",
        "answer": "Divide the pixel value by the viewport width and multiply by 100. Formula: vw = (px / viewport width) x 100. On a 1920px viewport: 192px = 10vw, 480px = 25vw. On a 375px mobile viewport: 150px = 40vw."
      },
      {
        "question": "What is 100vw in pixels?",
        "answer": "It equals the full viewport width. On a 1920px wide screen: 100vw = 1920px. On a 375px mobile: 100vw = 375px. Vw always equals 1% of the viewport width."
      },
      {
        "question": "When should I use vw instead of px?",
        "answer": "Use vw for elements that should scale proportionally with the viewport: hero sections, large headings, full-bleed containers. Use clamp() to add minimum and maximum limits: clamp(1rem, 4vw, 2rem) scales with viewport but stays within readable bounds."
      },
      {
        "question": "What is the problem with using vw for font sizes?",
        "answer": "On very wide screens (3440px+), vw fonts become huge. On small mobile screens, they can become illegibly tiny. Always pair vw with clamp(): clamp(1rem, 2.5vw, 1.5rem) gives fluid scaling with floor and ceiling."
      },
      {
        "question": "What is the difference between vw and percentage?",
        "answer": "VW is always relative to the viewport width, regardless of parent element. Percentage (%) is relative to the parent element's width. In most cases for width, they produce similar results, but vw ignores container constraints."
      },
      {
        "question": "Does vw include the scrollbar width?",
        "answer": "Yes, vw includes the scrollbar. On Windows (where scrollbars take space), 100vw is wider than the visible area. This can cause horizontal scrolling. Use width: 100% instead of 100vw for full-width elements to avoid this issue."
      }
    ],
    "sections": [
      {
        "id": "how-it-works",
        "title": "How the PX to VW Converter Works",
        "paragraphs": [
          "The CSS viewport-width unit (vw) equals 1% of the current viewport's width. If the browser is 1440px wide, 1vw equals 14.4px. Narrow it to 768px and 1vw becomes 7.68px. Because the browser recomputes this on every resize, vw-based sizing is fluid by nature. No media queries required. The PX to VW converter uses the formula: vw = (px / viewport-width) x 100. For a 24px value on a 1440px design canvas, that is 24/1440 x 100 = 1.667vw.",
          "The design-canvas width matters enormously. A developer working on a Figma canvas at 1440px gets different vw values than one designing at 1920px or 1280px. The converter lets you pick the canvas width so the generated vw maps correctly to your design. Once deployed, the element grows and shrinks continuously between min and max viewport widths. For a smoother approach that avoids the extremes, combine vw with clamp(). For example, clamp(1rem, 2vw + 1rem, 2.5rem) scales fluidly but caps at both ends.",
          "VW is the go-to unit for fluid typography and hero section sizing. For spacing-scale sizing tied to user preferences, see px-to-rem. For component-internal sizing, see px-to-em."
        ]
      },
      {
        "id": "when-to-use",
        "title": "When to Use VW",
        "paragraphs": [
          "VW is ideal when you want an element to scale continuously with viewport width rather than jumping at breakpoints. Typical use cases include:"
        ],
        "list": [
          "Fluid hero headlines that grow smoothly from mobile to desktop (usually wrapped in clamp()).",
          "Full-bleed sections that match viewport width (section { width: 100vw; }).",
          "Responsive paddings and margins on landing pages with generous negative space.",
          "Section heights at a fixed aspect ratio where width tracks the viewport.",
          "Fluid grid gaps that tighten on narrow screens and expand on wide ones.",
          "Dynamic background elements sized as a percentage of the visible window."
        ]
      },
      {
        "id": "practical-examples",
        "title": "Practical Examples",
        "paragraphs": [
          "The table below shows common pixel values translated to vw across three popular design canvas widths: mobile-first (375px), tablet (768px), and desktop (1440px)."
        ],
        "table": {
          "headers": ["Pixels", "375px canvas", "768px canvas", "1440px canvas", "1920px canvas"],
          "rows": [
            ["8px", "2.133vw", "1.042vw", "0.556vw", "0.417vw"],
            ["16px", "4.267vw", "2.083vw", "1.111vw", "0.833vw"],
            ["24px", "6.4vw", "3.125vw", "1.667vw", "1.25vw"],
            ["32px", "8.533vw", "4.167vw", "2.222vw", "1.667vw"],
            ["48px", "12.8vw", "6.25vw", "3.333vw", "2.5vw"],
            ["64px", "17.067vw", "8.333vw", "4.444vw", "3.333vw"],
            ["96px", "25.6vw", "12.5vw", "6.667vw", "5vw"],
            ["128px", "34.133vw", "16.667vw", "8.889vw", "6.667vw"]
          ]
        }
      },
      {
        "id": "common-mistakes",
        "title": "Common Mistakes to Avoid",
        "paragraphs": [
          "VW is powerful but comes with its own set of gotchas, especially around accessibility and scrollbar handling."
        ],
        "list": [
          "Using 100vw for full-width elements on Windows. 100vw includes the scrollbar width and can trigger horizontal scrolling. Use width: 100% on a non-absolutely-positioned element instead.",
          "Setting pure vw font sizes. Headings become unreadable on small phones (too tiny) and comically large on ultrawide monitors. Wrap them in clamp().",
          "Ignoring the difference between vw and svw/lvw/dvw. On mobile, browser chrome can resize the viewport mid-scroll, and the dynamic variants account for this.",
          "Forgetting that vw doesn't scale with user zoom the same way rem does, which reduces accessibility.",
          "Mixing vw with fixed px widths inside a flex container, producing unpredictable wrapping.",
          "Hard-coding vw values for a single canvas width and watching them break when the design later supports 1920px or 4K displays."
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
