import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "Should I use em or rem for font sizes?",
        "answer": "Use rem for font sizes in most cases. REM units are relative to the root font size (usually 16px), making them predictable and consistent. Use em only when you want font size to scale relative to the parent element."
      },
      {
        "question": "What is 1rem in pixels?",
        "answer": "By default, 1rem equals 16px because browsers set the root font size to 16px. If you change the root font size (e.g., html { font-size: 62.5%; }), then 1rem equals 10px."
      },
      {
        "question": "When should I use em instead of rem?",
        "answer": "Use em for padding and margins on components where spacing should scale proportionally with the element's own font size. For example, button padding in em units scales if the button text size changes."
      },
      {
        "question": "Can I mix em and rem in the same project?",
        "answer": "Yes. A common pattern is rem for font sizes (global consistency) and em for component-internal spacing like padding and margins (local proportionality). This gives you both predictable sizing and proportional components."
      }
    ],
    "sections": [
      {
        "id": "quick-comparison",
        "title": "Quick Comparison",
        "table": {
          "headers": [
            "Attribute",
            "EM",
            "REM"
          ],
          "rows": [
            [
              "Relative to",
              "Parent element font size",
              "Root element font size"
            ],
            [
              "Cascading",
              "Yes (compounds with nesting)",
              "No (always relative to root)"
            ],
            [
              "Default base",
              "Inherited font size",
              "16px (browser default)"
            ],
            [
              "Best for",
              "Component-internal spacing",
              "Font sizes, global spacing"
            ],
            [
              "Predictability",
              "Lower (depends on context)",
              "Higher (single reference point)"
            ]
          ]
        }
      },
      {
        "id": "what-is-em",
        "title": "What Is EM?",
        "paragraphs": [
          "The em unit is relative to the font size of the element itself (for properties like padding and margin) or the parent element's font size (for the font-size property). Because em values compound when elements are nested, sizing can become unpredictable in deep component trees.",
          "For example, if a parent has font-size: 20px and a child has font-size: 1.5em, the child renders at 30px. If that child also contains an element with font-size: 1.5em, it renders at 45px."
        ]
      },
      {
        "id": "what-is-rem",
        "title": "What Is REM?",
        "paragraphs": [
          "The rem unit (root em) is always relative to the root element's font size (<html>), which defaults to 16px in all major browsers. Unlike em, rem does not compound with nesting. 1.5rem is always 24px (assuming the default root), regardless of where it appears in the DOM tree."
        ]
      },
      {
        "id": "code-examples",
        "title": "Code Examples",
        "code": "/* REM for font sizes - predictable */\nh1  font-size: 2rem;     /* 32px */\nh2  font-size: 1.5rem;   /* 24px */\np   font-size: 1rem;     /* 16px */\n\n/* EM for component spacing - proportional */\n.button \n  font-size: 1rem;\n  padding: 0.5em 1em;  /* scales with button text size */\n\n\n.button--large \n  font-size: 1.25rem;\n  /* padding automatically scales to 10px 20px */\n\n\n/* Common 62.5% trick for easier rem math */\nhtml  font-size: 62.5%;   /* 1rem = 10px */\nbody  font-size: 1.6rem;  /* restore 16px base */"
      },
      {
        "id": "best-practices",
        "title": "Best Practices",
        "list": [
          "Use rem for font sizes to maintain a consistent typographic scale across your entire site.",
          "Use rem for layout spacing (margins, grid gaps) for predictable, global consistency.",
          "Use em for component padding when you want spacing to scale proportionally with the component's own font size.",
          "Avoid deep em nesting - compounding makes values hard to predict and debug.",
          "Set a clear root font size - either keep the browser default (16px) or use the 62.5% trick for easier math."
        ],
        "paragraphs": [
          "Convert between pixels and rem or em units instantly with our PX to REM and PX to EM converters."
        ]
      },
      {
        "id": "accessibility",
        "title": "EM, REM, and Browser Accessibility",
        "paragraphs": [
          "User-controlled browser font size is the key accessibility reason to prefer rem over px. Many users with low vision increase their browser's base font size above 16px through browser settings or operating system accessibility features.",
          "If you set all your font sizes in px, they are fixed regardless of the user's preference. If you use rem, your font sizes scale automatically when the user increases their browser base size. This is a key accessibility benefit.",
          "The WCAG 2.1 Success Criterion 1.4.4 (Resize Text) requires that text can be resized up to 200% without loss of content or functionality. Using rem for font sizes makes this trivial to satisfy. Using px for font sizes means you need to test and verify that zoom does not break your layout.",
          "For this reason, many style guides and design systems recommend rem for all typographic sizes and font-size-dependent spacing. The em unit can still be used safely for component-internal padding where scaling with font size is the intended behavior."
        ]
      },
      {
        "id": "decision-guide",
        "title": "Quick Decision Guide: EM vs REM vs PX",
        "paragraphs": [
          "Choosing between em, rem, and px comes down to the scope of the value and whether you want it to respond to font-size changes."
        ],
        "table": {
          "headers": ["What you are sizing", "Recommended unit", "Reason"],
          "rows": [
            ["Body and heading font sizes", "rem", "Consistent scale, responds to user preferences"],
            ["Button or component padding", "em", "Scales proportionally with component font size"],
            ["Border widths", "px", "Should not scale with font size"],
            ["Layout grid gaps", "rem", "Consistent spacing regardless of context"],
            ["Line height", "unitless (e.g. 1.5)", "Scales with local font size automatically"],
            ["Media query breakpoints", "rem", "Responds to user font size changes"]
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
