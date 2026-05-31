import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "What is the difference between px and rem?",
        "answer": "Pixels (px) are fixed-size units that do not scale with user preferences. REM units are relative to the root element's font size (typically 16px). Using rem allows your layout to scale when users change their browser's default font size."
      },
      {
        "question": "How do I convert px to rem?",
        "answer": "Divide the pixel value by the root font size (default 16px). Formula: rem = px / 16. Examples: 32px = 2rem, 24px = 1.5rem, 12px = 0.75rem, 8px = 0.5rem."
      },
      {
        "question": "What is 16px in rem?",
        "answer": "1rem (assuming default 16px root font size). 16px is the browser default body font size, which is why 1rem = 16px in most projects."
      },
      {
        "question": "What is 24px in rem?",
        "answer": "1.5rem at 16px root. Formula: 24 / 16 = 1.5rem. If the root is 10px (common for easier math): 24px = 2.4rem."
      },
      {
        "question": "Why use rem instead of px?",
        "answer": "Rem scales with user browser font preferences, improving accessibility. If a user increases their browser font size, rem-based layouts scale proportionally. Px is absolute and won't scale, which can make text too small for users with accessibility needs."
      },
      {
        "question": "What is the default root font size?",
        "answer": "The default root font size in all major browsers is 16px. This means 1rem = 16px by default. Some developers set html { font-size: 62.5% } to make 1rem = 10px for easier mental math."
      },
      {
        "question": "Can I use rem for spacing and sizing too?",
        "answer": "Yes. REM units work for any CSS property - margin, padding, width, height, border-radius, and more. Using rem for spacing alongside font sizes creates a consistently scalable design system."
      }
    ],
    "sections": [
      {
        "id": "how-it-works",
        "title": "How the PX to REM Converter Works",
        "paragraphs": [
          "REM stands for root em, a CSS length unit equal to the font-size of the root (html) element. Every browser defaults the root to 16 pixels, so 1rem equals 16px out of the box. Converting pixels to rem is simple division: rem = px / root-font-size. With the default base, 24px becomes 24/16 = 1.5rem, 12px becomes 0.75rem, and 48px becomes 3rem. The converter above handles this calculation and also supports the '10px base' convention, where setting html { font-size: 62.5%; } makes 1rem = 10px so the mental math simplifies to shifting the decimal one place.",
          "The key difference from EM is that REM ignores nesting. A 1.5rem margin on a deeply nested div is exactly 24px regardless of any font-size inheritance chain. This removes the compounding problem described in em-vs-rem and makes REM the preferred unit in scalable CSS design systems, including Tailwind CSS and MUI. You get the accessibility advantage of browser font size scaling without the unpredictability of cascading sizes.",
          "For component-scoped scaling where you do want the compound behavior, use EM instead. See our px-to-em converter. For viewport-relative responsive units, combine REM with clamp() and vw, covered in px-to-vw."
        ]
      },
      {
        "id": "when-to-use",
        "title": "When to Use REM",
        "paragraphs": [
          "REM is the default-safe choice for responsive typography and layout sizing on modern websites. Use it whenever predictability and accessibility scaling both matter."
        ],
        "list": [
          "Base typography scale - body, paragraph, heading sizes expressed in rem will scale together when users zoom.",
          "Margin, padding, and gap values in a design system that should respect user font preferences.",
          "Container max-widths like max-width: 72rem which stay proportional to text.",
          "Responsive breakpoints in media queries, so 'tablet' triggers at the same user-perceived width regardless of root font size.",
          "Icon sizing tied to typography scale, keeping icons in balance with headings and body copy.",
          "Form field heights and widths, so input controls scale with accessibility settings."
        ]
      },
      {
        "id": "practical-examples",
        "title": "Practical Examples",
        "paragraphs": [
          "Below is the most-referenced conversion table for web developers: pixels to REM with the default 16px root, and the alternative 10px root that many developers enable for cleaner numbers."
        ],
        "table": {
          "headers": ["Pixels", "REM (16px root)", "REM (10px root)", "Common Use"],
          "rows": [
            ["4px", "0.25rem", "0.4rem", "Tight internal spacing"],
            ["8px", "0.5rem", "0.8rem", "Small gap, compact padding"],
            ["12px", "0.75rem", "1.2rem", "Caption text"],
            ["14px", "0.875rem", "1.4rem", "Secondary body text"],
            ["16px", "1rem", "1.6rem", "Body text baseline"],
            ["20px", "1.25rem", "2rem", "Lead paragraph"],
            ["24px", "1.5rem", "2.4rem", "Subheading (H4)"],
            ["32px", "2rem", "3.2rem", "Section heading (H2/H3)"],
            ["48px", "3rem", "4.8rem", "Hero heading (H1)"],
            ["64px", "4rem", "6.4rem", "Display heading"]
          ]
        }
      },
      {
        "id": "common-mistakes",
        "title": "Common Mistakes to Avoid",
        "paragraphs": [
          "REM conversions are straightforward. A few common missteps can quietly break accessibility and responsive behavior, though."
        ],
        "list": [
          "Setting html { font-size: 16px } overrides user preferences and defeats REM's accessibility benefit. Use a percentage like 100% or 62.5% instead.",
          "Mixing px for some values and rem for others without a clear rule creates a layout that only partially scales with user zoom.",
          "REM always ignores nesting. If you need component-scoped scaling, reach for EM instead.",
          "Using 1rem when you mean 16px without documenting the assumption makes refactors risky if someone changes the root size later.",
          "Don't over-convert. Borders at 1px and hairline dividers are fine as px because they shouldn't scale with text.",
          "Using REM in media queries without considering that some browsers historically ignored root font changes in media query context. EM is slightly safer there."
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
