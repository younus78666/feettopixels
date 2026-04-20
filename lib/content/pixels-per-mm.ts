import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "How many pixels are in one millimeter?",
        "answer": "It depends on DPI. The conversion is: pixels per mm = DPI / 25.4 (because 1 inch equals 25.4 mm). At 72 DPI: 2.83 pixels/mm. At 96 DPI: 3.78 pixels/mm. At 150 DPI: 5.91 pixels/mm. At 300 DPI: 11.81 pixels/mm. At 600 DPI: 23.62 pixels/mm."
      },
      {
        "question": "When do I actually need pixels per mm?",
        "answer": "Anywhere metric measurements dominate: European print specs, scientific imaging, engineering drawings, DICOM medical images, microscopy, and packaging design. Asia, Europe, and most of the world specify print dimensions in mm, not inches, so pixels per mm is the native unit for a large slice of global design work."
      },
      {
        "question": "What's the simplest formula for mm-based design?",
        "answer": "pixels = mm × DPI / 25.4. A 100 mm wide design at 300 DPI needs 100 × 300 / 25.4 = 1181 pixels. A 210 mm wide A4 document at 300 DPI needs 210 × 300 / 25.4 = 2480 pixels. Keep 25.4 as your conversion constant — it's exact."
      },
      {
        "question": "Is 300 DPI the same as 11.81 pixels per mm?",
        "answer": "Yes — they're the same density expressed in different units. Some software and regional standards report density in pixels/mm rather than DPI. ISO 216 and most European print shops think natively in pixels/mm. The conversion factor is always 25.4."
      },
      {
        "question": "Do cameras record pixel density in mm terms?",
        "answer": "Sometimes. EXIF metadata usually stores resolution as DPI, but scientific cameras and microscope cameras often record pixel density in pixels/μm (micrometers) or pixels/mm because their work is metric. Converting: 1 pixel/μm = 1000 pixels/mm = 25,400 DPI — typical for microscopy."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "Pixels Per Millimeter: Complete Reference",
        "paragraphs": [
          "Pixels per millimeter is the pixel density unit used across Europe, Asia, Latin America, and most scientific and engineering fields. Because 1 inch = 25.4 mm, the conversion is always: pixels per mm = DPI / 25.4, and pixels per inch (DPI) = pixels per mm × 25.4.",
          "While American print and design usually speaks in DPI and inches, the metric system dominates the rest of the world. ISO 216 paper sizes (A4, A3, A5), DICOM medical imaging, European packaging regulations, scientific imaging, microscopy, and most engineering CAD output all specify dimensions in millimeters. Knowing pixels/mm directly removes the friction of converting back and forth."
        ]
      },
      {
        "id": "reference-table",
        "title": "Pixels Per Millimeter at Common DPI",
        "table": {
          "headers": ["DPI", "Pixels per mm", "Use Case"],
          "rows": [
            ["72", "2.83", "Legacy screen (rarely used today)"],
            ["96", "3.78", "Windows screen reference"],
            ["150", "5.91", "Newspaper, large poster"],
            ["200", "7.87", "Flyers, brochures, draft print"],
            ["240", "9.45", "High-quality photos, fine magazines"],
            ["300", "11.81", "Professional print standard"],
            ["400", "15.75", "High-end magazine, fine art"],
            ["600", "23.62", "Archival print, laser output"],
            ["1200", "47.24", "Precision technical drawing, laser printer"],
            ["2400", "94.49", "High-end inkjet, film plate"]
          ]
        }
      },
      {
        "id": "mm-to-pixels-examples",
        "title": "Common mm Measurements in Pixels (at 300 DPI)",
        "table": {
          "headers": ["Dimension", "Millimeters", "Pixels at 300 DPI"],
          "rows": [
            ["Business card (standard)", "85 x 55", "1004 x 650"],
            ["Credit card size", "85.6 x 53.98", "1011 x 638"],
            ["A7 paper", "74 x 105", "874 x 1240"],
            ["A6 paper (postcard)", "105 x 148", "1240 x 1748"],
            ["A5 paper", "148 x 210", "1748 x 2480"],
            ["A4 paper", "210 x 297", "2480 x 3508"],
            ["A3 paper", "297 x 420", "3508 x 4961"],
            ["A2 poster", "420 x 594", "4961 x 7016"],
            ["A1 poster", "594 x 841", "7016 x 9933"],
            ["A0 poster", "841 x 1189", "9933 x 14043"]
          ]
        }
      },
      {
        "id": "scientific-use",
        "title": "Pixels Per mm in Scientific and Medical Imaging",
        "paragraphs": [
          "Microscopy expresses pixel density in pixels/micrometer (μm) rather than pixels/mm because sample features are measured in micrometers. A typical 10x objective captures roughly 0.7 pixels/μm, which equals 700 pixels/mm, equivalent to about 17,780 DPI in print terms — vastly higher than standard print resolution because microscopic features demand it.",
          "DICOM medical imaging records pixel spacing in mm per pixel — the inverse of pixels/mm. A chest X-ray might report 0.143 mm per pixel, which equals 7 pixels/mm, equivalent to about 178 DPI. MRI slices often store 1.0 mm per pixel (1 pixel/mm, 25.4 DPI) for thick anatomical sections.",
          "Scientific publishing often demands minimum DPI for illustrations: Nature and Cell require 300 DPI at final column width, PLOS One accepts 300 DPI minimum, while IEEE journals specify 1200 DPI for line art. Knowing pixels/mm natively avoids rounding errors when preparing figures at specific metric column widths."
        ]
      },
      {
        "id": "quick-formulas",
        "title": "Quick Conversion Formulas",
        "paragraphs": [
          "Pixels per mm from DPI: DPI / 25.4. A 300 DPI scan = 300 / 25.4 = 11.81 pixels per mm.",
          "DPI from pixels per mm: pixels per mm × 25.4. A 5 pixels/mm scan = 5 × 25.4 = 127 DPI.",
          "Pixels needed for an mm-based print: mm × DPI / 25.4. A 210 mm wide A4 sheet at 300 DPI needs 210 × 300 / 25.4 = 2480 pixels.",
          "Max mm print from a pixel count: pixels × 25.4 / DPI. A 3000-pixel image at 300 DPI prints cleanly up to 3000 × 25.4 / 300 = 254 mm (about 10 inches). Our mm to Pixels and Pixels to mm converters automate these calculations instantly."
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
