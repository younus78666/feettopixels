import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "What does PPI stand for?",
        "answer": "PPI stands for pixels per inch. It measures how densely packed the pixels are on a screen or inside a digital image. Higher PPI means sharper, more detailed display output."
      },
      {
        "question": "What does PPI mean in simple terms?",
        "answer": "PPI stands for pixels per inch. It measures how densely packed the pixels are on a screen or inside a digital image. A 400 PPI smartphone screen has 400 pixels in every linear inch of its display. Higher PPI means finer detail, smoother curves, and crisper text."
      },
      {
        "question": "What is a good PPI for a phone screen?",
        "answer": "400+ PPI is the flagship standard and delivers invisible pixels at normal use distance. 300+ PPI is acceptable for most users and looks clean at arm\'s length. Below 250 PPI, individual pixels become visible at close range, and text edges look jagged. For tablets, 260+ PPI is sharp at typical reading distance. Desktop monitors run 90-165 PPI, which is fine because you sit farther away."
      },
      {
        "question": "What is a good PPI for a modern display?",
        "answer": "For phones, 400+ PPI is the professional standard. Anything below 300 looks pixelated up close. For tablets, 260+ PPI feels sharp at typical reading distance. For laptop screens, 200-250 PPI is excellent. External 4K monitors at 27 inches deliver about 163 PPI, which is the floor for comfortable long-session work. For TVs viewed from 8+ feet, 80-100 PPI is plenty because the viewing distance hides pixels."
      },
      {
        "question": "What is PPI vs DPI?",
        "answer": "PPI (pixels per inch) applies to screens and digital images. DPI (dots per inch) applies to printers and physical output. Both measure density per inch, but in different contexts. A phone screen has PPI. A laser printer has DPI. Confusion happens because image editing software labels both fields as DPI, but in any technical conversation about displays or digital files, PPI is the correct term."
      },
      {
        "question": "How do I calculate PPI of any screen?",
        "answer": "Use the formula: PPI = square root of (width squared + height squared), divided by diagonal inches. For a 1920 x 1080 display at 27 inches: 1920 squared is 3,686,400 and 1080 squared is 1,166,400, giving a total of 4,852,800. The square root is approximately 2203 diagonal pixels. Divide 2203 by 27 and you get about 81.6 PPI. For a 2560 x 1440 monitor at the same 27 inches, the result is roughly 109 PPI. Our PPI Calculator does this instantly for any resolution and screen size."
      },
      {
        "question": "What is Retina display PPI?",
        "answer": "Retina is Apple\'s marketing term for a display where pixels are dense enough to be invisible at the typical viewing distance. It is not a fixed PPI number. The iPhone needs 326+ PPI because you hold it 10-12 inches away. The iPad needs 264+ PPI at its typical viewing distance. The iMac qualifies at 218+ PPI because monitors sit farther from your eyes. All three hit the same perceptual threshold: pixels you cannot see under normal use."
      },
      {
        "question": "Is Retina the same as high PPI?",
        "answer": "Retina is Apple\'s marketing term for a display whose pixels are small enough that a person with normal vision cannot resolve individual pixels at typical viewing distance. It does not map to a fixed PPI number. It depends on how close you sit. An iPhone needs 326+ PPI to qualify. An iPad Pro viewed farther away needs 264 PPI. A 5K iMac monitor needs only 218 PPI. All are Retina because viewing distance matches the pixel density."
      },
      {
        "question": "Does higher PPI always mean better display quality?",
        "answer": "No. Past the point where your eye can no longer resolve individual pixels at your viewing distance, extra PPI adds no visible sharpness. At 12 inches, the eye tops out around 300 PPI. At 24 inches (desk distance), 150 PPI is sufficient. Beyond those thresholds, you pay in battery life, GPU load, and cost for pixels you cannot see. Contrast ratio, color accuracy, refresh rate, and HDR support often have more impact on perceived quality than chasing a higher PPI number."
      },
      {
        "question": "Does higher PPI always mean a better screen?",
        "answer": "Not necessarily. Beyond a certain PPI, the human eye can\'t resolve additional detail at typical viewing distance. The benefit disappears. At 12 inches from a screen, the eye tops out around 300 PPI. Above that, you pay in battery life, GPU load, and cost for pixels you can\'t see. Contrast, color accuracy, refresh rate, and HDR often matter more than chasing the highest possible PPI."
      },
      {
        "question": "What PPI do I need for sharp photo prints?",
        "answer": "300 PPI at the final print size is the professional standard for photo printing. A 4x6 inch print at 300 PPI requires a 1200 x 1800 pixel image. A 5x7 at 300 PPI needs 1500 x 2100 pixels. An 8x10 at 300 PPI needs 2400 x 3000 pixels. For large-format prints viewed from a distance, 150-200 PPI is acceptable because viewing distance hides the lower density."
      },
      {
        "question": "Why do two screens of the same resolution look different?",
        "answer": "Because they have different PPI due to different physical sizes. A 1920 x 1080 image on a 24-inch monitor (92 PPI) has larger pixels than the same image on a 14-inch laptop (158 PPI). The laptop will look sharper because each pixel is physically smaller, even though the image data is identical."
      },
      {
        "question": "Does PPI matter for web design?",
        "answer": "Indirectly, yes. Web browsers don\'t read PPI from image metadata, but modern devices ship at wildly different PPIs, from 96 on old desktops to 500+ on phones. That\'s why CSS uses logical pixels and why responsive images with srcset are critical. You need higher-resolution image files for high-PPI devices even though both device types render the same logical dimensions."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "What Is PPI?",
        "paragraphs": [
          "PPI stands for pixels per inch. It describes how many individual pixels are packed into each linear inch of a display or digital image. The higher the PPI, the finer the grid of pixels, and the smoother and sharper the image appears, up to the point where your eye can no longer distinguish individual pixels.",
          "PPI is the digital counterpart to DPI (dots per inch), which belongs to printing. Where DPI describes ink dots on paper, PPI describes pixels on screens, phones, tablets, camera sensors, and inside image files. The two terms are constantly confused because image editing software labels both fields as DPI, but in any technical conversation about displays, sensors, or digital files, PPI is the correct term.",
          "Modern displays span an enormous screen pixel density range. A budget 55-inch TV might be 80 PPI. A typical desktop monitor runs 90-110 PPI. A 4K display PPI for laptops reaches 250+. Flagship smartphones routinely hit 450-500 PPI, with some VR headsets pushing 1200 PPI because the display sits inches from the eye."
        ]
      },
      {
        "id": "how-ppi-affects-sharpness",
        "title": "How PPI Affects What You See",
        "paragraphs": [
          "Sharpness is a relationship between PPI and viewing distance, not just a property of the screen in isolation. At 12 inches from a phone, the average human eye can resolve about 300 PPI. Beyond that threshold, adjacent pixels merge into what appears to be a continuous image. Below 300 PPI at close range, you start noticing pixel edges on text and slight jaggedness on curves.",
          "Move the screen farther away and the required PPI drops fast. At 24 inches (typical desktop distance), roughly 150 PPI is the threshold for apparent display sharpness. At 8 feet (living-room TV distance), 80-100 PPI is indistinguishable from much denser screens. This is why a 4K TV can look pin-sharp from the couch despite having lower PPI than your laptop. Distance covers it.",
          "This is also why chasing the highest PPI number is the wrong frame. Past the threshold that matches your viewing distance, added PPI pays no visual dividend. It costs battery life, GPU load, heat, and price. Device designers target a PPI slightly above threshold for their typical use case and spend the remaining budget on contrast, color, and refresh rate."
        ]
      },
      {
        "id": "calculating-ppi",
        "title": "How to Calculate PPI of Any Display",
        "paragraphs": [
          "To calculate the PPI of any display, you need three numbers: the horizontal resolution in pixels, the vertical resolution in pixels, and the diagonal size in inches. The Pythagorean theorem gives you the diagonal pixel count, which divided by the diagonal inches gives PPI.",
          "The full formula: PPI equals the square root of (horizontal pixels squared plus vertical pixels squared), divided by diagonal inches. For example, a 2560 x 1440 monitor measured at 27 inches diagonally gives the square root of 8,627,200, which is approximately 2938 diagonal pixels. Divide 2938 by 27 and you get roughly 109 PPI.",
          "Our PPI Calculator automates this completely. Enter any resolution and screen size and see the exact PPI along with a quality assessment for your typical viewing distance. Use it to compare monitors before buying, verify spec-sheet claims, or figure out why two screens of the same resolution feel different."
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
        "id": "ppi-vs-dpi",
        "title": "PPI vs DPI: What Each One Actually Controls",
        "paragraphs": [
          "PPI and DPI are often used interchangeably, but they measure different things in different domains. PPI is a screen and digital-image metric. DPI is a printer metric. Mixing them up causes real problems: files delivered at the wrong spec, prints that come out blurry, or wasted file size on images destined for the web.",
          "The table below lays out the five most important dimensions of the distinction. Use it as a quick reference when specifying files for print vs. screen, or when a client asks why their web image looks fine on screen but soft in print."
        ]
      },
      {
        "id": "ppi-vs-dpi-table",
        "title": "PPI vs DPI: Direct Comparison",
        "table": {
          "headers": ["Dimension", "PPI (Pixels Per Inch)", "DPI (Dots Per Inch)"],
          "rows": [
            ["What it measures", "Pixel density on a screen or in an image file", "Ink or toner dot density on a printed page"],
            ["Where it applies", "Displays, camera sensors, digital image files", "Physical printers: inkjet, laser, offset press"],
            ["Software field name", "Correctly called PPI in display specs; mislabeled DPI in most image editors", "DPI in print dialogs and printer driver settings"],
            ["Typical range", "80-110 PPI (monitors); 300-500 PPI (phones); up to 1200 PPI (VR)", "600-4800 DPI (inkjet); 1200-3600 DPI (commercial offset)"],
            ["Who uses it", "Web designers, app developers, photographers, display engineers", "Print designers, photographers, prepress and production teams"]
          ]
        }
      },
      {
        "id": "retina-and-hidpi",
        "title": "Retina, HiDPI, and Pixel Density Marketing",
        "paragraphs": [
          "Apple coined Retina to describe a display whose PPI is dense enough that individual pixels become invisible to normal vision at the intended viewing distance. The Retina threshold is not a single PPI number. It scales with viewing distance. The iPhone hits Retina at around 326 PPI because you hold it 10-12 inches from your face. The iPad Retina threshold is 264 PPI because you typically hold tablets a bit farther away. The 5K iMac reaches Retina at just 218 PPI because monitors sit 2+ feet from your eyes.",
          "HiDPI is the generic, non-Apple term for the same concept, describing any high-density display where the device pixel ratio is 2x or higher. Windows, macOS, and Linux all scale UI elements on HiDPI screens so a 2x density display shows roughly the same text size as a 1x density monitor, just with smoother rendering.",
          "Marketing numbers like 500 PPI or 4K grab attention, but the honest question is always: does the viewing distance match the density? A 500 PPI phone is not twice as clear as a 300 PPI phone to the human eye. Both are already past the resolution threshold at normal distance. Use PPI as one factor among many, not as the deciding one."
        ]
      },
      {
        "id": "ppi-for-designers",
        "title": "What PPI Means for Designers and Photographers",
        "paragraphs": [
          "For web and app designers, PPI dictates asset preparation. Modern devices span 1x (96 PPI desktop) to 3x (high-density display) pixel density, with monitor pixel density varying widely across device classes. Serving a single image size no longer works. You need responsive image sets with srcset or similar mechanisms so devices pull the resolution that matches their PPI without wasting bandwidth on lower-density screens.",
          "For photographers, PPI is how you translate file resolution to print size. An image that is 3600 x 2400 pixels prints cleanly at 12 x 8 inches at 300 PPI, or at 18 x 12 inches at 200 PPI, or at 24 x 16 inches at 150 PPI. Lower PPI means a larger print from the same file. That\'s a useful lever when the viewing distance is far enough to hide the reduced density.",
          "Our PPI Calculator and Image Size Calculator let you work either direction. Enter pixel dimensions to find the largest clean print at a given PPI, or enter the target print size and get the minimum pixels required."
        ]
      },
      {
        "id": "ppi-myths",
        "title": "Common Myths About PPI",
        "paragraphs": [
          "Myth 1: Higher PPI is always sharper. True up to the eye\'s resolution limit at the viewing distance. Beyond that, extra PPI is invisible but costly. A 500 PPI phone and a 330 PPI phone both look identically sharp at normal use distance.",
          "Myth 2: PPI in image metadata changes how it looks on screen. False. A 1200 x 900 JPEG looks identical on any screen whether its embedded PPI is 72, 96, or 300. Only pixel dimensions matter for screen display. PPI metadata only affects default print size.",
          "Myth 3: Save web images at 72 PPI to keep file size small. False reasoning. The PPI number does not affect file size at all. Only pixel dimensions and compression do. A 1200 x 900 JPEG at quality 85 is the same file size at 72 PPI as at 3000 PPI.",
          "Myth 4: PPI and DPI are the same thing. Technically false but conversationally acceptable. In professional print and display work, use PPI for screens and images, DPI for printers. In casual chat, either term is usually understood in context."
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
