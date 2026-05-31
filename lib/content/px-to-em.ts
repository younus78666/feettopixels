import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "What is the difference between em and rem?",
        "answer": "Rem is always relative to the ROOT element (html) font size. Em is relative to the PARENT element's font size. Rem is predictable and consistent sitewide. Em compounds through nesting, which can cause unexpected sizes in deeply nested elements."
      },
      {
        "question": "How do I convert px to em?",
        "answer": "Divide the pixel value by the parent element's font size. Formula: em = px / parent font size. If the parent is 16px: 24px = 1.5em. If the parent is 20px: 24px = 1.2em."
      },
      {
        "question": "What is 16px in em?",
        "answer": "1em when the parent font size is 16px. But if the parent is 20px, 16px = 0.8em. Em is always relative to the parent, not the root."
      },
      {
        "question": "When should I use em instead of rem?",
        "answer": "Use em when you want sizing relative to the component's own font size. For example, padding of 1em around text always creates proportional spacing regardless of the text size. Use rem for consistent sizing across the entire page."
      },
      {
        "question": "Why is em useful for component design?",
        "answer": "EM allows components to scale proportionally. A button with font-size, padding, and border-radius all in em units will scale up or down uniformly when you change just the font-size, making responsive component design easier."
      },
      {
        "question": "What is the compounding problem with em?",
        "answer": "When nested elements use em, sizes multiply. A 1.5em font inside a 1.5em container becomes 2.25x the root size (1.5 x 1.5). This cascading effect can cause unexpected sizing. REM solves this by always referencing the root element."
      }
    ],
    "sections": [
      {
        "id": "how-it-works",
        "title": "How the PX to EM Converter Works",
        "paragraphs": [
          "The EM unit in CSS is relative to the font-size of the element itself (or its parent when used for properties other than font-size). The conversion formula is: em = px / parent-font-size. With a default parent font-size of 16px, 24px becomes 24/16 = 1.5em, 12px becomes 0.75em, and 32px becomes 2em. The PX to EM converter handles this division and lets you override the parent size to match a specific component context.",
          "The catch with EM is that it cascades. If a div has font-size: 1.5em and contains a span with font-size: 1.5em, the span ends up at 1.5 x 1.5 = 2.25em relative to the root. This cascading behavior helps when you want a component to scale proportionally with its container, but it's also the compounding problem that pushed developers toward REM for root-consistent sizing. Our em-vs-rem comparison goes deeper, and the px-to-rem tool covers the root-based alternative.",
          "EM works well for component-relative spacing. Setting button padding to 0.5em 1em guarantees the padding scales with the button's own font size. Increase the button from 14px to 18px and the padding grows proportionally without any extra code. That's why design systems like Bootstrap and Tailwind use EM for many internal spacing tokens."
        ]
      },
      {
        "id": "when-to-use",
        "title": "When to Use EM Over Other Units",
        "paragraphs": [
          "EM is the right choice when you want sizing tied to a specific component's font-size rather than the page root. Typical scenarios include:"
        ],
        "list": [
          "Button, badge, and chip padding that should scale with text size - 0.5em 1em works at every size.",
          "Heading letter-spacing, where the gap should grow and shrink with the heading's own font-size.",
          "Icon sizing inline with text - font-size: 1em on an SVG makes it match the surrounding copy.",
          "Media query breakpoints (e.g. @media (min-width: 48em)) which respond to user font-size preferences.",
          "Form control internal padding and border radii, so controls remain proportional as text scales.",
          "Nested list indentation where each level should indent relative to its own font-size."
        ]
      },
      {
        "id": "practical-examples",
        "title": "Practical Examples",
        "paragraphs": [
          "The table below shows the most common pixel values converted to EM, assuming a standard 16px parent font-size. Use the converter above for any non-standard parent context."
        ],
        "table": {
          "headers": ["Pixels", "EM (at 16px base)", "EM (at 14px base)", "EM (at 20px base)"],
          "rows": [
            ["10px", "0.625em", "0.714em", "0.5em"],
            ["12px", "0.75em", "0.857em", "0.6em"],
            ["14px", "0.875em", "1em", "0.7em"],
            ["16px", "1em", "1.143em", "0.8em"],
            ["18px", "1.125em", "1.286em", "0.9em"],
            ["20px", "1.25em", "1.429em", "1em"],
            ["24px", "1.5em", "1.714em", "1.2em"],
            ["32px", "2em", "2.286em", "1.6em"],
            ["48px", "3em", "3.429em", "2.4em"]
          ]
        }
      },
      {
        "id": "common-mistakes",
        "title": "Common Mistakes to Avoid",
        "paragraphs": [
          "EM's compounding behavior makes it powerful but error-prone. Watch for these traps when refactoring px values to em."
        ],
        "list": [
          "Assuming 1em always equals 16px. It only does when the parent's computed font-size is 16px, which isn't guaranteed inside nested components.",
          "Using EM for deeply nested text where compounding makes the innermost element surprisingly large or small.",
          "Mixing EM and REM without a clear rule. Inconsistent usage makes sizing drift unpredictably across the codebase.",
          "Forgetting that EM on the font-size property is relative to the parent, while EM on other properties is relative to the element's own font-size.",
          "Hard-coding pixel equivalents in comments that go stale when someone changes the parent font-size.",
          "Using EM for layout widths where the cascading behavior produces hard-to-debug sizing."
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
