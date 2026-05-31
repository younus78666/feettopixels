import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "What DPI should I use for web images?",
        "answer": "DPI doesn't matter for web images. Browsers ignore DPI metadata and display images based solely on pixel dimensions. Save web images at whatever pixel dimensions you need and ignore the DPI setting entirely."
      },
      {
        "question": "Why do web images say 72 DPI?",
        "answer": "72 DPI is a legacy convention from 1980s Mac monitors. It has no effect on web display. A 1920x1080 image at 72 DPI looks identical to the same image at 300 DPI in any browser. Only pixel dimensions affect web display quality."
      },
      {
        "question": "What image format is best for web?",
        "answer": "WebP for most web images (30-35% smaller than JPEG at same quality). JPEG for photos where WebP isn't supported. PNG for images requiring transparency. AVIF for next-generation compression where browser support exists. Never use TIFF or BMP on the web."
      },
      {
        "question": "What does 72 DPI mean for web images?",
        "answer": "72 DPI is a legacy web standard that has no effect on how images display in browsers. Browsers ignore DPI metadata in image files and only use pixel dimensions. A 1920x1080 image at 72 DPI displays identically to the same image at 300 DPI on any screen. The 72 DPI convention originated from early Mac monitors in the 1980s and has no practical relevance for modern web design."
      },
      {
        "question": "Should I save web images at 72 DPI or 96 DPI?",
        "answer": "It doesn't matter for web display. Browsers ignore DPI metadata and render images based solely on pixel dimensions. Save at 72 or 96 DPI — the choice has zero effect on how the image appears on screen or on file size. What actually matters for web images is pixel dimensions, compression quality, and file format (WebP over JPEG where supported)."
      },
      {
        "question": "Does DPI affect image file size?",
        "answer": "No. DPI metadata has no effect on file size. A 1200x800 JPEG at 72 DPI is the same file size as the same image at 300 DPI, with identical quality. File size depends only on pixel dimensions, compression level, and color depth. This is a common misconception — changing DPI in an image editor without resampling changes nothing except the default print size."
      }
    ],
    "sections": [
      {
        "id": "dpi-irrelevant",
        "title": "DPI Is Irrelevant for Web. Pixel Dimensions Are Everything.",
        "paragraphs": [
          "Browsers don't care about DPI. They ignore the DPI (or PPI) metadata embedded in image files entirely and render only from pixel dimensions. A 1200x800 image saved at 72 DPI displays exactly the same as one saved at 300 DPI. Same pixels in, same output on screen.",
          "Print workflows created the confusion. Designers who work across both mediums often assume the DPI setting they use for print should carry over to web exports. It doesn't. You can save at any DPI value and it won't change the rendering, the file size, or the visual quality in a browser. The number exists purely as metadata that browsers discard."
        ]
      },
      {
        "id": "why-the-myth-persists",
        "title": "Why the '72 DPI for Web' Rule Won't Die",
        "paragraphs": [
          "The 72 DPI convention dates back to early Mac displays in the 1980s, which happened to have screens running at 72 pixels per inch. At that resolution, one point in the operating system equaled one pixel on screen. Design software of the era used DPI to calculate display size, so setting an image to 72 DPI made it appear at 'true size' on those monitors.",
          "Modern displays range from 96 PPI on budget monitors to 458 PPI on some phones. Browsers stopped using DPI for rendering calculations long ago. The '72 DPI' instruction stuck in style guides and tutorials long after it stopped meaning anything. Following it today wastes no bytes and changes nothing visually. Just ignore it."
        ]
      },
      {
        "id": "what-matters",
        "title": "What Actually Matters for Web Images",
        "list": [
          "Pixel dimensions: Serve images at the size they'll display (or 2x for retina). A hero image shown at 1200 CSS pixels wide should be 1200 px (standard) or 2400 px (retina).",
          "File format: Use WebP for broad compatibility with excellent compression. Use AVIF for even better compression where supported. Fall back to JPEG for photos and PNG for graphics with transparency.",
          "Compression: A well-compressed WebP image can be 25-35% smaller than an equivalent JPEG with no visible quality loss.",
          "Lazy loading: Add loading=\"lazy\" to images below the fold to defer loading until they enter the viewport."
        ]
      },
      {
        "id": "responsive-images",
        "title": "Responsive Images for HiDPI Screens",
        "paragraphs": [
          "On retina (2x) and high-density (3x) screens, images need more pixels to appear sharp. Use the HTML srcset attribute to serve different resolutions:",
          "The browser picks the right image based on viewport width and device pixel ratio, delivering sharp output without wasting bandwidth on standard displays."
        ],
        "code": "<img\n  src=\"hero-800w.webp\"\n  srcset=\"hero-800w.webp 800w,\n          hero-1200w.webp 1200w,\n          hero-2400w.webp 2400w\"\n  sizes=\"(max-width: 600px) 100vw, 1200px\"\n  alt=\"Hero image\"\n  loading=\"lazy\"\n/>"
      },
      {
        "id": "web-vs-print-dpi",
        "title": "Web vs Print: Why DPI Rules Don't Transfer",
        "paragraphs": [
          "Print and web use fundamentally different rendering models. Printers lay down physical ink dots at a fixed density, so DPI directly controls quality. Browsers render pixels to a screen, and the screen's own PPI determines sharpness, not the image's embedded DPI tag.",
          "A 300 DPI JPEG you export for a magazine looks identical in a browser to the same file resaved at 72 DPI. No quality difference. No file size difference. The only real difference is the number sitting in an EXIF field that browsers skip. Save for web by pixel count alone and you'll get the same result every time."
        ]
      },
      {
        "id": "optimization-tips",
        "title": "Web Image Optimization Checklist",
        "list": [
          "Resize images to their maximum display size (don't serve a 4000 px image for a 1200 px container).",
          "Use WebP or AVIF format with quality setting of 75-85%.",
          "Provide 1x and 2x versions via srcset.",
          "Add width and height attributes to prevent layout shift.",
          "Use lazy loading for images below the initial viewport.",
          "Consider using a CDN with automatic format negotiation."
        ],
        "paragraphs": [
          "Calculate the exact pixel dimensions you need for any layout with our Image Size Calculator."
        ]
      },
      {
        "id": "web-image-dimensions",
        "title": "Common Web Image Sizes by Use Case",
        "paragraphs": [
          "Web image sizing follows layout requirements, not DPI. The table below shows recommended pixel dimensions for typical web image placements. For retina screens, double the pixel width to avoid blurry output on high-density displays."
        ],
        "table": {
          "headers": ["Use Case", "Standard Width", "Retina (2x)", "Notes"],
          "rows": [
            ["Hero / banner", "1920 px", "3840 px", "Full-width background"],
            ["Blog post header", "1200 px", "2400 px", "16:9 or 3:2 ratio"],
            ["Thumbnail", "400 px", "800 px", "Square or 4:3"],
            ["Product image", "800 px", "1600 px", "1:1 for consistency"],
            ["Open Graph share image", "1200 x 630 px", "N/A", "Fixed aspect ratio"],
            ["Favicon", "32 x 32 px", "N/A", "SVG preferred"]
          ]
        }
      },
      {
        "id": "export-for-web",
        "title": "Exporting Images for Web in Design Software",
        "paragraphs": [
          "The DPI field in your export dialog does nothing for web output. What controls quality and file size is the pixel dimensions and the output format.",
          "In Photoshop: go to Image > Export > Export As and choose WebP or JPEG. Set quality to 75-85%. The resolution field only affects print output. You can leave it at any value for web.",
          "In Figma: export at 1x for standard screens and 2x for retina. The DPI property does nothing. Only the multiplier changes the final pixel dimensions.",
          "In Illustrator: use Export > Export for Screens. Set the unit to pixels and match the target container size from your CSS layout.",
          "In Canva: download as WebP or JPEG. Canva sets resolution automatically. The download size slider controls compression, not DPI."
        ]
      },
      {
        "id": "dpi-evaluation",
        "title": "Is DPI Something You Should Ever Set for Web?",
        "paragraphs": [
          "No. DPI is a print concept with no functional role in web image delivery. You don't need to set it, track it, or standardize it across your team. The only number that matters for web is pixel dimensions.",
          "The one scenario where DPI metadata shows up in web workflows: some CMSs or image pipelines read the embedded DPI value to infer display size. If your tooling does this, set images to 96 DPI to match the CSS reference pixel standard. But most modern tools don't rely on this, and browsers never do.",
          "Save at the right pixel dimensions, compress well, use a modern format, and implement srcset. That covers everything that actually affects web image quality. DPI is noise."
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
