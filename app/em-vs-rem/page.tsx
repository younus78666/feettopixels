import type { Metadata } from "next";
import Link from "next/link";
import { BlogLayout } from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "EM vs REM in CSS — Differences, Examples & Best Practices",
  description:
    "Learn the difference between em and rem CSS units. Code examples, when to use each, and best practices for responsive typography and spacing.",
  openGraph: {
    title: "EM vs REM in CSS — Complete Guide",
    description: "Side-by-side comparison of em and rem CSS units with code examples and best practices.",
    url: "/em-vs-rem",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Learn", href: "/em-vs-rem" },
  { label: "EM vs REM", href: "/em-vs-rem" },
];

const toc = [
  { id: "quick-comparison", label: "Quick Comparison" },
  { id: "what-is-em", label: "What Is EM?" },
  { id: "what-is-rem", label: "What Is REM?" },
  { id: "code-examples", label: "Code Examples" },
  { id: "best-practices", label: "Best Practices" },
];

const faqItems = [
  {
    question: "Should I use em or rem for font sizes?",
    answer: "Use rem for font sizes in most cases. REM units are relative to the root font size (usually 16px), making them predictable and consistent. Use em only when you want font size to scale relative to the parent element.",
  },
  {
    question: "What is 1rem in pixels?",
    answer: "By default, 1rem equals 16px because browsers set the root font size to 16px. If you change the root font size (e.g., html { font-size: 62.5%; }), then 1rem equals 10px.",
  },
  {
    question: "When should I use em instead of rem?",
    answer: "Use em for padding and margins on components where spacing should scale proportionally with the element's own font size. For example, button padding in em units scales if the button text size changes.",
  },
  {
    question: "Can I mix em and rem in the same project?",
    answer: "Yes. A common pattern is rem for font sizes (global consistency) and em for component-internal spacing like padding and margins (local proportionality). This gives you both predictable sizing and proportional components.",
  },
];

const relatedArticles = [
  { title: "What Is a Pixel?", href: "/what-is-a-pixel", description: "The fundamental unit of digital images" },
  { title: "Pixels Per Inch Explained", href: "/pixels-per-inch", description: "PPI reference guide" },
  { title: "Common Screen Resolutions", href: "/common-resolutions", description: "Display resolution reference" },
];

export default function EmVsRemPage() {
  return (
    <BlogLayout
      title="EM vs REM in CSS"
      extractiveAnswer="REM is relative to the root element's font size (default 16px). EM is relative to the parent element's font size. Use rem for consistent, predictable sizing across your site. Use em for proportional spacing within components."
      breadcrumbs={breadcrumbs}
      faqItems={faqItems}
      relatedArticles={relatedArticles}
      cta={{ label: "Try the PX to REM Converter", href: "/px-to-rem" }}
      toc={toc}
      slug="em-vs-rem"
    >
      <h2 id="quick-comparison">Quick Comparison</h2>
      <table>
        <thead>
          <tr><th>Attribute</th><th>EM</th><th>REM</th></tr>
        </thead>
        <tbody>
          <tr><td>Relative to</td><td>Parent element font size</td><td>Root element font size</td></tr>
          <tr><td>Cascading</td><td>Yes (compounds with nesting)</td><td>No (always relative to root)</td></tr>
          <tr><td>Default base</td><td>Inherited font size</td><td>16px (browser default)</td></tr>
          <tr><td>Best for</td><td>Component-internal spacing</td><td>Font sizes, global spacing</td></tr>
          <tr><td>Predictability</td><td>Lower (depends on context)</td><td>Higher (single reference point)</td></tr>
        </tbody>
      </table>

      <h2 id="what-is-em">What Is EM?</h2>
      <p>
        The <code>em</code> unit is relative to the <strong>font size of the element itself</strong> (for properties like <code>padding</code> and <code>margin</code>) or the <strong>parent element&rsquo;s font size</strong> (for the <code>font-size</code> property). Because em values compound when elements are nested, sizing can become unpredictable in deep component trees.
      </p>
      <p>
        For example, if a parent has <code>font-size: 20px</code> and a child has <code>font-size: 1.5em</code>, the child renders at 30px. If that child also contains an element with <code>font-size: 1.5em</code>, it renders at 45px.
      </p>

      <h2 id="what-is-rem">What Is REM?</h2>
      <p>
        The <code>rem</code> unit (root em) is always relative to the <strong>root element&rsquo;s font size</strong> (<code>&lt;html&gt;</code>), which defaults to 16px in all major browsers. Unlike em, rem does not compound with nesting. <code>1.5rem</code> is always 24px (assuming the default root), regardless of where it appears in the DOM tree.
      </p>

      <h2 id="code-examples">Code Examples</h2>
      <pre><code>{`/* REM for font sizes — predictable */
h1 { font-size: 2rem; }    /* 32px */
h2 { font-size: 1.5rem; }  /* 24px */
p  { font-size: 1rem; }    /* 16px */

/* EM for component spacing — proportional */
.button {
  font-size: 1rem;
  padding: 0.5em 1em;  /* scales with button text size */
}

.button--large {
  font-size: 1.25rem;
  /* padding automatically scales to 10px 20px */
}

/* Common 62.5% trick for easier rem math */
html { font-size: 62.5%; }  /* 1rem = 10px */
body { font-size: 1.6rem; } /* restore 16px base */`}</code></pre>

      <h2 id="best-practices">Best Practices</h2>
      <ul>
        <li><strong>Use rem for font sizes</strong> to maintain a consistent typographic scale across your entire site.</li>
        <li><strong>Use rem for layout spacing</strong> (margins, grid gaps) for predictable, global consistency.</li>
        <li><strong>Use em for component padding</strong> when you want spacing to scale proportionally with the component&rsquo;s own font size.</li>
        <li><strong>Avoid deep em nesting</strong> — compounding makes values hard to predict and debug.</li>
        <li><strong>Set a clear root font size</strong> — either keep the browser default (16px) or use the 62.5% trick for easier math.</li>
      </ul>
      <p>
        Convert between pixels and rem or em units instantly with our <Link href="/px-to-rem">PX to REM</Link> and <Link href="/px-to-em">PX to EM</Link> converters.
      </p>
    </BlogLayout>
  );
}
