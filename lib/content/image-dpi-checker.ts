import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "Can this tool read the DPI metadata from an image?",
        "answer": "Yes, for common formats. This tool reads embedded DPI or density metadata from JPEG, PNG, WebP, and BMP files when that metadata is present. If a file has no usable physical-density metadata, the tool falls back to pixel dimensions and shows print size at common target DPI settings."
      },
      {
        "question": "What resolution is needed for quality printing?",
        "answer": "Professional printing requires 300 DPI. For a 4x6 inch print, you need at least 1200x1800 pixels. For an 8x10 print, you need 2400x3000 pixels. Images below these thresholds will appear pixelated when printed."
      },
      {
        "question": "Is my image good enough for a specific print size?",
        "answer": "Upload your image and check the maximum print size table at 300 DPI. If the listed dimensions are larger than your desired print size, the image has sufficient resolution. If smaller, the print may appear blurry."
      },
      {
        "question": "What is the difference between web and print quality images?",
        "answer": "Web images typically need only 72-96 pixels per inch since screens display at fixed pixel density. Print images need 300 pixels per inch for sharp output. A 1000x1000 web image prints at only 3.3x3.3 inches at professional quality."
      },
      {
        "question": "Does this tool upload my image to a server?",
        "answer": "No. All processing happens locally in your browser. Your image never leaves your device. The tool uses browser APIs to read image dimensions, file size, and embedded density metadata directly on your device."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "What an Image DPI Checker Does",
        "paragraphs": [
          "An image DPI checker inspects an image file and reports its pixel dimensions, file size, aspect ratio, and embedded DPI metadata (when present). It tells you immediately whether a file has enough pixels for a specific print size at a specific quality level.",
          "This tool works entirely in your browser. Your images never leave your device, no upload, no server storage, no third-party processing. The browser's built-in Image and File APIs read the pixel dimensions and file structure locally, which means it works offline once the page has loaded and respects your privacy completely."
        ]
      },
      {
        "id": "what-it-reads",
        "title": "What Metadata This Tool Reads",
        "paragraphs": [
          "Every uploaded image is analyzed for pixel width, pixel height, megapixel count (width × height ÷ 1,000,000), file size in bytes, file type (JPEG, PNG, WebP, BMP), and aspect ratio (simplified via greatest common divisor).",
          "When the file includes density metadata, the EXIF or APP0 JFIF tags in JPEGs, the pHYs chunk in PNGs, the VP8X chunk in WebPs, the tool reads the embedded DPI directly. Files without density metadata fall back to showing print-size estimates at common DPI values (72, 150, 300, 600)."
        ]
      },
      {
        "id": "print-size-table",
        "title": "How to Read the Print Size Results",
        "paragraphs": [
          "After analysis, the tool shows the maximum clean print size at each common DPI tier. At 300 DPI (professional print), divide the pixel width by 300 to get inches, e.g. 3000 pixels = 10 inches at professional quality. At 150 DPI (large posters), the same 3000 pixels prints 20 inches wide. At 72 DPI (screen/web-only), the same file prints 41 inches wide but looks pixelated when printed.",
          "Below the maximum sizes, the tool flags which print sizes your image can handle confidently and which are too ambitious. A 2-megapixel image is print-quality at 4x6 inch but struggles beyond 8x10 at 300 DPI. A 12-megapixel image handles prints up to 13x19 at 300 DPI, or 26x38 at 150 DPI for posters."
        ]
      },
      {
        "id": "quality-thresholds",
        "title": "Quality Thresholds by Use Case",
        "table": {
          "headers": ["Use Case", "Minimum Pixels", "Quality"],
          "rows": [
            ["Avatar / thumbnail", "400 x 400", "Fine"],
            ["Social media post", "1080 x 1080", "Fine"],
            ["Web hero image", "1920 x 1080", "Fine"],
            ["4x6 photo print (300 DPI)", "1200 x 1800", "Professional"],
            ["8x10 photo print (300 DPI)", "2400 x 3000", "Professional"],
            ["Magazine page (300 DPI)", "2550 x 3300", "Professional"],
            ["11x17 poster (200 DPI)", "2200 x 3400", "Excellent"],
            ["A2 poster (150 DPI)", "2480 x 3508", "Great"],
            ["Trade show banner (100 DPI)", "4800 x 9600", "Good (far viewing)"],
            ["Billboard (30 DPI)", "3600 x 7200", "Fine (50+ ft away)"]
          ]
        }
      },
      {
        "id": "common-mistakes",
        "title": "Common Mistakes This Tool Catches",
        "paragraphs": [
          "The most common issue: someone downloads a web image and tries to print it poster-sized. A 1200 x 800 image fills a screen beautifully but prints only 4 x 2.7 inches at professional quality. Stretched larger, it pixelates visibly.",
          "Another common issue: high-megapixel camera files where the embedded DPI reads 72 instead of 300. The pixels are there, but the metadata tells print software to lay the image out huge. Most print workflows read image size from pixel count anyway, so this is usually fixable in export settings.",
          "Stock photo sites often serve images at web-optimized dimensions. Before buying or licensing, use this tool to verify the file has enough pixels for your intended use. 2000 pixels is rarely enough for print, even if it looks fine on a screen."
        ]
      },
      {
        "id": "privacy",
        "title": "Privacy and Local Processing",
        "paragraphs": [
          "Your image data stays on your device. This tool uses the browser's standard File and Image APIs to read pixel dimensions and metadata locally. Nothing is uploaded to any server. Nothing is cached in external services. Nothing is logged by analytics. You can run this tool offline after the page loads.",
          "For sensitive images, medical scans, confidential design mockups, client work under NDA, this local-only processing is essential. Competing online DPI checkers often upload images to a server for processing, which makes them unsuitable for confidential material."
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
