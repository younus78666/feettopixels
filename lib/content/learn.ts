import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "Where should I start if I'm new to pixel conversion?",
        "answer": "Begin with What is a Pixel to understand the fundamental unit, then read What is DPI and What is PPI to grasp density. Once those concepts are clear, DPI vs PPI ties them together and you can move into the practical reference pages (Best DPI for Printing, Paper Sizes in Pixels, Standard Image Sizes)."
      },
      {
        "question": "What's the difference between the Guides and References in this hub?",
        "answer": "Guides explain concepts, what DPI is, what PPI is, how pixels work, and how CSS units compare. References are quick-lookup pages, print sizes in pixels, social media image dimensions, paper sizes, common resolutions. Use Guides when you're learning; use References when you already know the concept and need a number."
      },
      {
        "question": "Are these guides updated regularly?",
        "answer": "Yes. Each page covers evergreen fundamentals (DPI math, pixel concepts, CSS unit rules) but we refresh reference data, social media image sizes, standard screen resolutions, device PPIs, as platforms and devices change."
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
          "This hub collects every educational and reference page on FeetToPixels in one place. Whether you need to understand what DPI actually measures, look up the exact pixel dimensions of an A4 page at 300 DPI, or figure out which CSS unit to use in a responsive layout, the right page is here.",
          "The content is organized into three tiers: Foundational Guides that explain core concepts (pixel, DPI, PPI, CSS units), Comparison Guides that clarify confusing pairs (DPI vs PPI, EM vs REM), and Reference Pages that answer specific lookup questions (best DPI for printing, Instagram post size, A4 in pixels)."
        ]
      },
      {
        "id": "foundational-guides",
        "title": "Foundational Guides",
        "paragraphs": [
          "Start here if pixel conversion, DPI, or PPI are new concepts. Each page builds on the previous one.",
          "What is a Pixel: the smallest addressable unit on a digital display, composed of red/green/blue subpixels. Understanding this anchor unit is the prerequisite for everything else.",
          "What is DPI: dots per inch, the print-world measure of ink dot density. Applies exclusively to printers, not screens.",
          "What is PPI: pixels per inch, the digital-world measure of display density. Applies to screens, camera sensors, and image files.",
          "Pixels Per Inch: the deep-dive reference on PPI math, including the Pythagorean formula for calculating PPI from any resolution and screen size."
        ]
      },
      {
        "id": "comparison-guides",
        "title": "Comparison Guides",
        "paragraphs": [
          "These pages clarify concepts that designers and developers commonly confuse.",
          "DPI vs PPI: the canonical comparison. DPI is print (ink dots), PPI is screen (pixels). Photoshop labels image resolution as DPI even though it's technically PPI, this is a historical quirk that confuses most people until they see the side-by-side table.",
          "EM vs REM: the CSS equivalent, both are relative length units, but REM is relative to the root element's font size while EM is relative to the parent element's. Use REM for global consistency, EM for component-level scaling."
        ]
      },
      {
        "id": "reference-pages",
        "title": "Reference Pages",
        "paragraphs": [
          "These pages answer specific, high-intent lookup questions. Bookmark them if you work with print specs, social media design, or photo sizing frequently.",
          "Best DPI for Printing: 300 for photos and magazines, 150 for newspapers and large posters, 72 for screen-only, 600 for fine art. The viewing distance rule explains why.",
          "Best DPI for Web: none, or rather, pixel dimensions are what matter; DPI metadata is ignored by browsers. This page explains why.",
          "Paper Sizes in Pixels: A4, A3, A5, A0, Letter, Legal, Tabloid all at 96/150/300 DPI.",
          "Standard Image Sizes: 4x6, 5x7, 8x10, 11x14, 16x20, 24x36 in pixels at professional print DPI.",
          "Social Media Image Sizes: current Instagram, Facebook, YouTube, LinkedIn, and Twitter image specs.",
          "Common Resolutions: what 1920x1080, 2560x1440, 3840x2160 physically measure across different screen sizes.",
          "DPI Conversion Table: quick chart showing pixels required for every standard print size at every standard DPI.",
          "Passport Photo Size: specs for US, UK, Schengen, and other country requirements in both pixels and mm.",
          "Pixels Per Foot, Pixels Per CM, Pixels Per MM: density conversion tables for large-format, metric, and millimeter-precision work."
        ]
      },
      {
        "id": "related-tools",
        "title": "Interactive Tools",
        "paragraphs": [
          "Once concepts are clear, the Pixel Converter hub gives you interactive tools for every unit conversion: feet, inches, centimeters, millimeters, rem, em, pt, vw all to and from pixels. The DPI Calculator, PPI Calculator, and Image DPI Checker verify specific density questions from your current inputs."
        ]
      }
    ]
  },
  "es": { "faq": [], "sections": [{ "id": "overview", "title": "Descripción general", "paragraphs": [] }] },
  "fr": { "faq": [], "sections": [{ "id": "overview", "title": "Aperçu", "paragraphs": [] }] },
  "de": { "faq": [], "sections": [{ "id": "overview", "title": "Überblick", "paragraphs": [] }] },
  "pt": { "faq": [], "sections": [{ "id": "overview", "title": "Visão geral", "paragraphs": [] }] },
  "hi": { "faq": [], "sections": [{ "id": "overview", "title": "सिंहावलोकन", "paragraphs": [] }] },
  "ja": { "faq": [], "sections": [{ "id": "overview", "title": "概要", "paragraphs": [] }] },
  "ko": { "faq": [], "sections": [{ "id": "overview", "title": "개요", "paragraphs": [] }] },
  "it": { "faq": [], "sections": [{ "id": "overview", "title": "Panoramica", "paragraphs": [] }] },
  "nl": { "faq": [], "sections": [{ "id": "overview", "title": "Overzicht", "paragraphs": [] }] },
  "ar": { "faq": [], "sections": [{ "id": "overview", "title": "ملخص", "paragraphs": [] }] },
  "tr": { "faq": [], "sections": [{ "id": "overview", "title": "Genel Bakış", "paragraphs": [] }] },
  "pl": { "faq": [], "sections": [{ "id": "overview", "title": "Przegląd", "paragraphs": [] }] },
  "id": { "faq": [], "sections": [{ "id": "overview", "title": "Ringkasan", "paragraphs": [] }] },
  "ru": { "faq": [], "sections": [{ "id": "overview", "title": "Обзор", "paragraphs": [] }] }
};
