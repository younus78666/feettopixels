import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "What is a pixel?",
        "answer": "A pixel (short for 'picture element') is the smallest addressable unit in a digital image or display. Every digital photo, icon, and video frame is built from a grid of millions of individual pixels, each storing color as red, green, and blue (RGB) values."
      },
      {
        "question": "What is a CSS pixel vs a device pixel?",
        "answer": "A CSS pixel is an abstract unit. On a standard 1x display, 1 CSS pixel = 1 physical pixel. On a 2x Retina display, 1 CSS pixel = 4 physical pixels (2x2). This is why images for Retina screens need twice the pixel dimensions of standard images."
      },
      {
        "question": "How big is a pixel in real life?",
        "answer": "A pixel has no fixed physical size -- it depends on display density (PPI). At 96 PPI (typical monitor), 1 pixel = 0.265 mm. At 300 PPI (print), 1 pixel = 0.085 mm. At 460 PPI (flagship phone), 1 pixel = 0.055 mm."
      },
      {
        "question": "What are subpixels?",
        "answer": "Each pixel on an LCD or OLED screen is composed of three subpixels: red, green, and blue (RGB). By varying the intensity of each subpixel, the pixel can produce millions of different colors. Some displays use RGBW (adding white) subpixel arrangements."
      },
      {
        "question": "What does megapixel mean?",
        "answer": "One megapixel equals one million pixels. A 12-megapixel camera sensor captures images with roughly 12 million individual pixels, such as 4000 x 3000 pixels. More megapixels allows for larger prints and more cropping flexibility."
      }
    ],
    "sections": [
      {
        "id": "pixel-definition",
        "title": "Pixel Definition",
        "paragraphs": [
          "A pixel (short for \"picture element\") is the smallest addressable digital image unit of a raster image or digital display. Every photo you view, every icon on your screen, and every frame of video is composed of thousands or millions of individual raster graphics pixels arranged in a rectangular image grid element.",
          "Each pixel stores color information as a combination of red, green, and blue values (RGB). In an 8-bit-per-channel image, each channel ranges from 0 to 255, giving each display pixel element the ability to represent one of over 16.7 million colors. Pixels are discrete digital color units: they divide a continuous visual scene into a fixed grid of addressable points, which is what makes digital images editable, scalable, and transmittable."
        ]
      },
      {
        "id": "subpixels",
        "title": "Subpixels (RGB)",
        "paragraphs": [
          "On LCD and OLED screens, each visible screen image element is composed of three RGB subpixels: one red, one green, and one blue. These subpixels are too small to see individually at normal viewing distance. The display rendering unit adjusts the brightness of each subpixel independently to create the full color range you perceive.",
          "Some display technologies use different subpixel arrangements. Samsung's PenTile layout uses an RGBG pattern, while some LCDs add a white subpixel (RGBW) to improve brightness efficiency."
        ]
      },
      {
        "id": "megapixels",
        "title": "Megapixels",
        "paragraphs": [
          "One megapixel (MP) equals one million pixels. Camera sensors and image files are rated in megapixels to indicate their total resolution. A 48 MP smartphone camera captures images of roughly 8000 x 6000 pixels. More megapixels provide greater detail and allow for larger prints or more aggressive cropping."
        ],
        "table": {
          "headers": [
            "Megapixels",
            "Typical Dimensions",
            "Max Print Size (300 DPI)"
          ],
          "rows": [
            [
              "2 MP",
              "1600 x 1200",
              "5.3 x 4\""
            ],
            [
              "8 MP",
              "3264 x 2448",
              "10.9 x 8.2\""
            ],
            [
              "12 MP",
              "4000 x 3000",
              "13.3 x 10\""
            ],
            [
              "24 MP",
              "6000 x 4000",
              "20 x 13.3\""
            ],
            [
              "48 MP",
              "8000 x 6000",
              "26.7 x 20\""
            ]
          ]
        }
      },
      {
        "id": "pixel-size",
        "title": "Pixel Size at Different DPIs",
        "paragraphs": [
          "A pixel has no inherent physical size. Its real-world dimensions depend entirely on display or print density. Here is the physical size of one pixel at common DPI/PPI values:"
        ],
        "list": [
          "72 PPI: 0.353 mm (0.0139\")",
          "96 PPI: 0.265 mm (0.0104\")",
          "150 PPI: 0.169 mm (0.0067\")",
          "300 PPI: 0.085 mm (0.0033\")",
          "460 PPI: 0.055 mm (0.0022\")"
        ]
      },
      {
        "id": "history",
        "title": "History of Pixels",
        "paragraphs": [
          "The concept of a pixel dates back to the 1960s, with the term first appearing in the context of early digital image processing. Frederic Billingsley of JPL is credited with popularizing the word \"pixel\" in 1965. Early digital displays had very low pixel counts: the Apple II (1977) displayed 280 x 192 pixels, while modern 8K displays render over 33 million pixels.",
          "Pixel technology keeps evolving. Micro-LED displays, foldable screens, and VR headsets exceeding 1000 PPI are pushing what the format can do. The pixel remains the fundamental picture element of every digital visual experience. Explore how pixels map to physical units with our Pixel Converter."
        ]
      },
      {
        "id": "css-vs-device-pixels",
        "title": "CSS Pixels vs Device Pixels",
        "paragraphs": [
          "CSS pixels and device pixels are not the same thing. Understanding the difference prevents blurry images on high-density screens.",
          "A CSS pixel is an abstract unit used in CSS and HTML. When you write width: 300px in CSS, you're specifying 300 CSS pixels, not 300 physical screen pixels. On a standard 1x display, one CSS pixel equals one device pixel. On a 2x retina display, one CSS pixel maps to four device pixels (2 wide by 2 tall), so the browser needs four times the image data to keep the result sharp.",
          "The ratio between device pixels and CSS pixels is the device pixel ratio (DPR). A MacBook Pro Retina has a DPR of 2. An iPhone 15 Pro has a DPR of 3. You can check this in JavaScript with window.devicePixelRatio.",
          "This distinction matters for images. Displaying a 300 CSS pixel-wide image on a 2x display requires 600 device pixels of actual image data for a sharp result. Serve a 300-pixel image there and the browser upscales it, producing a blurry appearance."
        ],
        "table": {
          "headers": ["DPR", "Device Type", "CSS px 100x100", "Device pixels needed"],
          "rows": [
            ["1x", "Standard monitor", "100 x 100", "100 x 100"],
            ["2x", "MacBook Retina, most iPhones", "100 x 100", "200 x 200"],
            ["3x", "iPhone 15 Pro, Galaxy S24", "100 x 100", "300 x 300"],
            ["4x", "Some Android flagships", "100 x 100", "400 x 400"]
          ]
        }
      },
      {
        "id": "pixel-types",
        "title": "Types of Pixels in Practice",
        "list": [
          "Raster pixels: the individual color squares in images like JPEG, PNG, WebP, and BMP. Image editing software (Photoshop, GIMP) works at this level.",
          "Screen pixels (device pixels): the physical light-emitting elements on a display. Each screen pixel contains RGB subpixels. The total count determines native screen resolution.",
          "CSS pixels: the abstract unit used in web browsers. Defined by the W3C and scaled by device pixel ratio to maintain consistent perceived sizes across screens.",
          "Print pixels: in a print context, each pixel is defined by DPI. At 300 DPI, each pixel is 1/300 of an inch. The same image file can produce very different physical sizes at different DPI settings.",
          "Video pixels: in video production, pixels follow frame size standards. 1080p is 1920 x 1080 pixels per frame, while 4K UHD is 3840 x 2160 pixels per frame."
        ]
      },
      {
        "id": "pixel-type-comparison",
        "title": "Physical Pixel vs CSS Pixel vs Device Pixel: How They Differ",
        "paragraphs": [
          "Three different things go by the word \"pixel\" depending on context, and confusing them causes practical problems."
        ],
        "table": {
          "headers": ["Pixel Type", "Where It Lives", "Fixed Physical Size?", "You Control It?"],
          "rows": [
            ["Physical (device) pixel", "The screen hardware", "Yes, set by the panel", "No"],
            ["CSS pixel", "Browser layout engine", "No, scales with DPR", "Yes, via CSS units"],
            ["Raster (image) pixel", "Image file", "No, depends on PPI/DPI", "Yes, via image dimensions"]
          ]
        }
      },
      {
        "id": "pixel-causation",
        "title": "What Goes Wrong When Pixel Types Are Confused",
        "paragraphs": [
          "Mixing up pixel types produces visible quality failures. Serving a 1x image on a 2x retina screen results in blurry text and soft edges because the browser must stretch each image pixel across four device pixels. The fix is to supply a 2x image (double the pixel dimensions) using srcset.",
          "Sending a 72 PPI image to a print shop expecting photo quality produces a pixelated result, because 72 pixels per inch gives each pixel a physical size of 0.35 mm, far larger than the 0.085 mm at 300 PPI. The pixelation is visible at arm's length. You need enough raster pixels to fill the print area at 300 pixels per inch.",
          "Resizing a raster image beyond its native pixel count (upscaling) forces the software to invent pixel data, which blurs or creates artifacts. Scaling down (downsampling) discards data and is generally safe. These problems don't apply to vector graphics, which store shapes mathematically and render at any pixel count without loss."
        ]
      },
      {
        "id": "pixel-evaluation",
        "title": "What Pixel Size Actually Means for Your Work",
        "paragraphs": [
          "Pixel count and pixel size answer different questions. Pixel count (megapixels, resolution) determines how much detail your image can hold and how large you can print or crop it. Pixel size (set by PPI or DPI) determines how that detail maps to physical inches on screen or paper.",
          "For screen work: design in CSS pixels and let the browser handle DPR scaling. Supply 2x assets for retina screens using srcset or image-set().",
          "For print work: calculate your required pixel count by multiplying the print dimensions by 300 (e.g., an 8 x 10 inch print needs 2400 x 3000 pixels). The megapixel count of your camera or file sets the ceiling for print size at professional quality.",
          "For photography: more megapixels give you cropping room and larger print potential, but sensor quality and lens sharpness matter more than raw pixel count above about 24 MP for most uses."
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
