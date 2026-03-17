import type { Metadata } from "next";
import Link from "next/link";
import { BlogLayout } from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "What Is DPI? — Dots Per Inch Explained for Print & Screen",
  description:
    "Learn what DPI (dots per inch) means, how it affects print and image quality, standard DPI values, and how to check or change DPI in your files.",
  alternates: {
    canonical: "/what-is-dpi",
  },
  openGraph: {
    title: "What Is DPI? — Dots Per Inch Explained",
    description: "Complete guide to DPI: definition, standard values, and how it affects print quality.",
    url: "/what-is-dpi",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Learn", href: "/what-is-dpi" },
  { label: "What Is DPI?", href: "/what-is-dpi" },
];

const toc = [
  { id: "dpi-definition", label: "DPI Definition" },
  { id: "dpi-in-printing", label: "DPI in Printing" },
  { id: "dpi-on-screens", label: "DPI on Screens" },
  { id: "standard-dpi-values", label: "Standard DPI Values" },
  { id: "how-to-check-dpi", label: "How to Check DPI" },
];

const faqItems = [
  {
    question: "What does DPI stand for?",
    answer: "DPI stands for dots per inch. It measures how many ink dots a printer places within one linear inch. Higher DPI produces finer detail and smoother gradients in printed output.",
  },
  {
    question: "What DPI should I use for printing photos?",
    answer: "Use 300 DPI for standard photo prints (4x6, 5x7, 8x10). For large-format prints viewed from a distance, 150 DPI is often sufficient. Professional press work may require 350 DPI.",
  },
  {
    question: "Does DPI matter for web images?",
    answer: "No. Web browsers render images based on pixel dimensions, not DPI. A 1000x500 image displays the same whether saved at 72 DPI or 300 DPI. Only the pixel count matters for screen display.",
  },
  {
    question: "How do I change the DPI of an image?",
    answer: "In Photoshop, go to Image > Image Size and change the resolution value. In GIMP, use Image > Print Size. Changing DPI without resampling only affects print size, not pixel count.",
  },
];

const relatedArticles = [
  { title: "What Is PPI?", href: "/what-is-ppi", description: "Understanding pixels per inch for screens" },
  { title: "DPI vs PPI", href: "/dpi-vs-ppi", description: "Key differences explained side by side" },
  { title: "Best DPI for Printing", href: "/best-dpi-for-printing", description: "Recommended DPI for every print type" },
  { title: "Pixels Per Inch Explained", href: "/pixels-per-inch", description: "Complete PPI reference guide" },
];

export default function WhatIsDpiPage() {
  return (
    <BlogLayout
      title="What Is DPI?"
      extractiveAnswer="DPI (dots per inch) measures print resolution — how many ink dots a printer places in one linear inch. Standard print DPI is 300 for photos, 150 for documents, and 72 for large posters. Higher DPI produces sharper, more detailed prints."
      breadcrumbs={breadcrumbs}
      faqItems={faqItems}
      relatedArticles={relatedArticles}
      cta={{ label: "Try the DPI Calculator", href: "/dpi-calculator" }}
      toc={toc}
      slug="what-is-dpi"
    >
      <h2 id="dpi-definition">DPI Definition</h2>
      <p>
        DPI stands for <strong>dots per inch</strong>. It is a measurement of spatial printing resolution &mdash; specifically, how many individual ink dots a printer can place within one linear inch. A printer operating at 300 DPI lays down 300 dots per inch horizontally and 300 dots per inch vertically, producing 90,000 dots per square inch.
      </p>
      <p>
        DPI directly determines the sharpness and detail of a printed image. Higher DPI means finer detail, smoother color gradients, and less visible dot patterns.
      </p>

      <h2 id="dpi-in-printing">DPI in Printing</h2>
      <p>
        In the printing world, DPI controls the physical quality of output. Inkjet printers commonly operate at 720&ndash;2880 DPI, while laser printers typically run at 600&ndash;1200 DPI. The <em>image resolution</em> (in PPI) determines how much data the printer has to work with, while the printer DPI determines how finely it can reproduce that data.
      </p>
      <p>
        For best results, your image should be at least <strong>300 PPI at the final print size</strong>. An image that is 3000 &times; 2400 pixels can print at 10 &times; 8 inches at 300 DPI with full quality.
      </p>

      <h2 id="dpi-on-screens">DPI on Screens</h2>
      <p>
        On screens, the term DPI is often used loosely to mean PPI (pixels per inch). Windows defaults to 96 DPI for scaling purposes, while macOS uses 72 DPI as its legacy baseline. Modern high-resolution displays have physical pixel densities of 110&ndash;460+ PPI, but the operating system uses scaling to keep UI elements at readable sizes.
      </p>

      <h2 id="standard-dpi-values">Standard DPI Values</h2>
      <table>
        <thead>
          <tr><th>DPI</th><th>Use Case</th><th>Quality Level</th></tr>
        </thead>
        <tbody>
          <tr><td>72</td><td>Web graphics (legacy), large banners</td><td>Low / draft</td></tr>
          <tr><td>96</td><td>Windows screen default</td><td>Screen standard</td></tr>
          <tr><td>150</td><td>Documents, newspaper, draft prints</td><td>Medium</td></tr>
          <tr><td>300</td><td>Photo prints, brochures, magazines</td><td>High / professional</td></tr>
          <tr><td>600</td><td>Fine art reproduction, medical imaging</td><td>Very high</td></tr>
        </tbody>
      </table>

      <h2 id="how-to-check-dpi">How to Check and Change DPI</h2>
      <p>
        Most image editors display DPI in the image properties or size dialog. In <strong>Adobe Photoshop</strong>, go to <em>Image &gt; Image Size</em> to view and change resolution. In <strong>GIMP</strong>, use <em>Image &gt; Print Size</em>. On Windows, right-click an image file, select Properties &gt; Details, and look for the &ldquo;Horizontal resolution&rdquo; field.
      </p>
      <p>
        Changing DPI without resampling alters the print size but keeps the pixel count unchanged. To resize for a specific print dimension at a target DPI, use our <Link href="/dpi-calculator">DPI Calculator</Link> or <Link href="/dpi-converter">DPI Converter</Link>.
      </p>
    </BlogLayout>
  );
}
