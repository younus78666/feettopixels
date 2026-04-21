import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "What does PPI mean in simple terms?",
        "answer": "PPI stands for pixels per inch. It is a measure of how densely packed the pixels are on a screen or inside a digital image. A 400 PPI smartphone screen has 400 pixels in every linear inch of its display. Higher PPI means finer detail, smoother curves, and crisper text."
      },
      {
        "question": "What is a good PPI for a modern display?",
        "answer": "For phones, 400+ PPI is the professional standard, anything below 300 looks pixelated up close. For tablets, 260+ PPI feels sharp at typical reading distance. For laptop screens, 200-250 PPI is excellent. External 4K monitors at 27 inches deliver about 163 PPI, which is the floor for comfortable long-session work. For TVs viewed from 8+ feet, 80-100 PPI is plenty because the viewing distance hides pixels."
      },
      {
        "question": "Is Retina the same as high PPI?",
        "answer": "Retina is Apple's marketing term for a display whose pixels are small enough that a person with normal vision cannot resolve individual pixels at typical viewing distance. It does not map to a fixed PPI number, it depends on how close you sit. An iPhone needs 326+ PPI to qualify. An iPad Pro viewed farther away needs 264 PPI. A 5K iMac monitor needs only 218 PPI. All are 'Retina' because viewing distance matches the pixel density."
      },
      {
        "question": "How do I calculate PPI of any screen?",
        "answer": "Use the formula PPI = √(width² + height²) / diagonal_inches. For a 2560 x 1440 monitor at 27 inches diagonal: √(2560² + 1440²) = √(6,553,600 + 2,073,600) = √8,627,200 ≈ 2938. Then 2938 / 27 ≈ 108.8 PPI. The square root captures the true diagonal pixel count, which is then divided by the physical diagonal. Our PPI Calculator does this instantly for any resolution and size."
      },
      {
        "question": "Does higher PPI always mean a better screen?",
        "answer": "Not necessarily. Beyond a certain PPI, the human eye cannot resolve additional detail at typical viewing distance, the benefit disappears. At 12 inches from a screen, the eye tops out around 300 PPI. Above that, you pay in battery life, GPU load, and cost for pixels you cannot see. Contrast, color accuracy, refresh rate, and HDR often matter more than chasing the highest possible PPI."
      },
      {
        "question": "Why do two screens of the same resolution look different?",
        "answer": "Because they have different PPI due to different physical sizes. A 1920 x 1080 image on a 24-inch monitor (92 PPI) has larger pixels than the same image on a 14-inch laptop (158 PPI). The laptop will look sharper because each pixel is physically smaller, even though the image data is identical."
      },
      {
        "question": "Does PPI matter for web design?",
        "answer": "Indirectly, yes. Web browsers do not read PPI from image metadata, but modern devices ship at wildly different PPIs (from 96 on old desktops to 500+ on phones). That is why CSS uses logical pixels and why responsive images with srcset are critical, you need higher-resolution image files for high-PPI devices even though both device types render the same logical dimensions."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "What Is PPI?",
        "paragraphs": [
          "PPI stands for pixels per inch. It describes how many individual pixels are packed into each linear inch of a display or digital image. The higher the PPI, the finer the grid of pixels, and the smoother and sharper the image appears, up to the point where your eye can no longer distinguish individual pixels.",
          "PPI is the digital-world counterpart to DPI (dots per inch), which belongs to printing. Where DPI describes ink dots on paper, PPI describes pixels on screens, phones, tablets, camera sensors, and inside image files. The two terms are constantly confused because image editing software labels both fields as 'DPI', but in any technical conversation about displays, sensors, or digital files, PPI is the correct term.",
          "Modern displays span an enormous PPI range. A budget 55-inch TV might be 80 PPI. A typical desktop monitor runs 90-110 PPI. A 4K laptop screen reaches 250+ PPI. Flagship smartphones routinely hit 450-500 PPI, with some VR headsets pushing 1200 PPI because the display sits inches from the eye."
        ]
      },
      {
        "id": "how-ppi-affects-sharpness",
        "title": "How PPI Affects What You See",
        "paragraphs": [
          "Sharpness is a relationship between PPI and viewing distance. At 12 inches from a phone, the average human eye can resolve about 300 PPI, beyond that, adjacent pixels merge into what appears to be a continuous image. Below 300 PPI at close range, you start noticing pixel edges on text and slight jaggedness on curves.",
          "Move the screen farther away and the required PPI drops fast. At 24 inches (typical desktop distance), roughly 150 PPI is the threshold for apparent smoothness. At 8 feet (living-room TV distance), 80-100 PPI is indistinguishable from much denser screens. This is why a 4K TV can look pin-sharp from the couch despite having lower PPI than your laptop, the distance covers it.",
          "This relationship is why 'more PPI is always better' is wrong. Past the threshold that matches your viewing distance, added PPI pays no visual dividend but costs battery life, GPU load, heat, and price. Device designers target a PPI slightly above the threshold for their typical use case and spend the remaining budget on contrast, color, and refresh rate."
        ]
      },
      {
        "id": "calculating-ppi",
        "title": "How to Calculate PPI of Any Display",
        "paragraphs": [
          "To calculate the PPI of any display, you need three numbers: the horizontal resolution in pixels, the vertical resolution in pixels, and the diagonal size in inches. The Pythagorean theorem gives you the diagonal pixel count, which divided by the diagonal inches gives PPI.",
          "The full formula: PPI equals the square root of (horizontal pixels squared plus vertical pixels squared), divided by diagonal inches. For example, a 2560 x 1440 monitor measured at 27 inches diagonally: square root of (2560² + 1440²) equals the square root of 8,627,200, which is approximately 2938 diagonal pixels. Divide 2938 by 27 and you get roughly 109 PPI.",
          "Our PPI Calculator automates this completely, enter any resolution and screen size and see the exact PPI along with a quality assessment for your typical viewing distance. Use it to compare monitors before buying, verify spec-sheet claims, or troubleshoot why two screens of the same resolution feel different."
        ]
      },
      {
        "id": "ppi-reference",
        "title": "PPI Reference: Common Devices",
        "table": {
          "headers": ["Device Class", "Typical PPI Range", "Typical Viewing Distance", "Visual Quality"],
          "rows": [
            ["Flagship smartphone", "400-500", "10-14 inches", "Invisible pixels, Retina-class"],
            ["Mid-range smartphone", "270-400", "10-14 inches", "Acceptable, some edge detection"],
            ["Budget smartphone", "200-270", "10-14 inches", "Visibly pixelated text"],
            ["Tablet (10-13 inch)", "220-265", "14-18 inches", "Sharp at reading distance"],
            ["Laptop 13-14 inch 4K", "275-330", "20-24 inches", "Excellent, font smoothing rarely needed"],
            ["Laptop 15-16 inch 1080p", "130-150", "20-24 inches", "Font edges visible under focus"],
            ["Desktop 27-inch 1440p", "108-110", "24-28 inches", "Good general purpose"],
            ["Desktop 27-inch 4K", "163", "24-28 inches", "Sharp, great for design work"],
            ["Desktop 32-inch 4K", "138", "28-32 inches", "Balanced pixel size and space"],
            ["55-inch 4K TV", "80", "8-10 feet", "Excellent at distance"],
            ["VR headset (per eye)", "600-1200", "1-2 inches", "Still developing, screen-door effect at lower PPI"]
          ]
        }
      },
      {
        "id": "retina-and-hidpi",
        "title": "Retina, HiDPI, and Pixel Density Marketing",
        "paragraphs": [
          "Apple coined 'Retina' to describe a display whose PPI is dense enough that the individual pixels become invisible to normal vision at the intended viewing distance. Crucially, the Retina threshold is not a single PPI number, it scales with viewing distance. The iPhone hits Retina at around 326 PPI because you hold it 10-12 inches from your face. The iPad Retina threshold is 264 PPI because you typically hold tablets a bit farther away. The 5K iMac reaches Retina at just 218 PPI because monitors sit 2+ feet from your eyes.",
          "HiDPI (high dots per inch) is the generic, non-Apple term for the same concept, and the way operating systems describe displays that need UI scaling to remain legible. Windows, macOS, and Linux all scale UI elements on HiDPI screens so a 2x density display shows roughly the same text size as a 1x density monitor, just with smoother rendering.",
          "Marketing numbers like '500 PPI' or '4K' grab attention, but the honest question is always: does the viewing distance match the density? A 500 PPI phone is not twice as clear as a 300 PPI phone to the human eye, both are already past the resolution threshold at normal distance. Use PPI as one factor among many, not as the deciding one."
        ]
      },
      {
        "id": "ppi-for-designers",
        "title": "What PPI Means for Designers and Photographers",
        "paragraphs": [
          "For web and app designers, PPI dictates asset preparation. Modern devices span 1x (96 PPI desktop) to 3x (HiDPI phone) pixel density. Serving a single image size no longer works, you need responsive image sets with srcset or similar mechanisms so devices pull the resolution that matches their PPI without wasting bandwidth on lower-density screens.",
          "For photographers, PPI is how you translate file resolution to print size. An image that is 3600 x 2400 pixels prints cleanly at 12 x 8 inches at 300 PPI, or at 18 x 12 inches at 200 PPI, or at 24 x 16 inches at 150 PPI. Lower PPI means larger print from the same file, a useful trick when the viewing distance is far enough to hide the reduced density.",
          "Our PPI Calculator and Image Size Calculator let you work either direction: enter pixel dimensions to find the largest clean print at a given PPI, or enter the target print size and get the minimum pixels required."
        ]
      },
      {
        "id": "ppi-myths",
        "title": "Common Myths About PPI",
        "paragraphs": [
          "Myth 1: 'Higher PPI is always sharper.' True up to the eye's resolution limit at the viewing distance. Beyond that, extra PPI is invisible but costly. A 500 PPI phone and a 330 PPI phone both look identically sharp at normal use distance.",
          "Myth 2: 'PPI in image metadata changes how it looks on screen.' False. A 1200 x 900 JPEG looks identical on any screen whether its embedded PPI is 72, 96, or 300. Only pixel dimensions matter for screen display. PPI metadata only affects default print size.",
          "Myth 3: 'Save web images at 72 PPI to keep file size small.' False reasoning. The PPI number does not affect file size at all, only pixel dimensions and compression do. A 1200 x 900 JPEG at quality 85 is the same file size at 72 PPI as at 3000 PPI.",
          "Myth 4: 'PPI and DPI are the same.' Technically false but conversationally fine. In professional print and display work, use PPI for screens and images, DPI for printers. In casual chat, either term is usually understood in context."
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
