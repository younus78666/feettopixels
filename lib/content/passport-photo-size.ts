import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "What size is a US passport photo?",
        "answer": "2 x 2 inches (51 x 51 mm). At 300 DPI: 600 x 600 pixels. The head must be between 1 inch (25 mm) and 1.375 inches (35 mm) from chin to top of head."
      },
      {
        "question": "What size is a UK passport photo?",
        "answer": "35 x 45 mm. At 300 DPI: 413 x 531 pixels. The face must fill 29-34 mm of the 45 mm height. Background must be plain white or cream."
      },
      {
        "question": "Can I take my own passport photo at home?",
        "answer": "Yes, in most countries. Requirements: plain white or off-white background, neutral expression, eyes fully open and clearly visible, no glasses, printed at correct size. Use our tool to calculate exact pixel dimensions for your country's requirements."
      },
      {
        "question": "What DPI should I use for passport photos?",
        "answer": "Use 300 DPI when scanning or printing passport photos because it converts a 2 x 2 inch US photo to 600 x 600 pixels. For online applications, follow the official pixel dimensions, file size, background, framing, and quality rules first; DPI metadata alone will not make a photo acceptable."
      },
      {
        "question": "Do passport photo pixel requirements vary by country?",
        "answer": "Yes. The physical photo size, digital minimum size, file-size limit, background rule, and head-size requirement can vary by issuing authority. Use this table for pixel math, then confirm the final rules on the official passport or visa site before submitting."
      }
    ],
    "sections": [
      {
        "id": "passport-photos",
        "title": "Passport Photo Sizes by Country",
        "table": {
          "headers": [
            "Country",
            "Physical Size",
            "Pixels at 300 DPI",
            "Digital Requirements"
          ],
          "rows": [
            [
              "United States",
              "2 × 2 in (51 × 51 mm)",
              "600 × 600",
              "600 - 1200 px square"
            ],
            [
              "United Kingdom",
              "35 × 45 mm",
              "413 × 531",
              "Min 600 × 750 px"
            ],
            [
              "EU / Schengen",
              "35 × 45 mm",
              "413 × 531",
              "Varies by country"
            ],
            [
              "Canada",
              "50 × 70 mm",
              "591 × 827",
              "Min 420 × 540 px"
            ],
            [
              "Australia",
              "35 × 45 mm",
              "413 × 531",
              "Min 413 × 531 px"
            ],
            [
              "India",
              "35 × 35 mm",
              "413 × 413",
              "350 × 350 px"
            ],
            [
              "China",
              "33 × 48 mm",
              "390 × 567",
              "354 × 472 px"
            ],
            [
              "Japan",
              "35 × 45 mm",
              "413 × 531",
              "Min 413 × 531 px"
            ]
          ]
        }
      },
      {
        "id": "id-photos",
        "title": "ID and Visa Photo Sizes",
        "table": {
          "headers": [
            "Document Type",
            "Physical Size",
            "Pixels at 300 DPI"
          ],
          "rows": [
            [
              "US Visa",
              "2 × 2 in",
              "600 × 600"
            ],
            [
              "Schengen Visa",
              "35 × 45 mm",
              "413 × 531"
            ],
            [
              "US Green Card",
              "2 × 2 in",
              "600 × 600"
            ],
            [
              "Driver's License (US)",
              "Varies by state",
              "Typically 600 × 600+"
            ]
          ]
        }
      },
      {
        "id": "conversion-method",
        "title": "How to Convert Passport Photo Sizes to Pixels",
        "paragraphs": [
          "Passport and visa pages often mix physical sizes, pixel minimums, and file-size limits. The physical-to-pixel math is simple, but it is only one part of approval. Convert the document size first, then check the official rules for head height, background color, shadows, expression, crop, compression, and file size.",
          "For inch-based sizes, multiply inches by DPI. A 2 x 2 inch US passport or visa photo at 300 DPI becomes 600 x 600 pixels. For metric sizes, multiply millimeters by DPI and divide by 25.4. A 35 x 45 mm photo at 300 DPI becomes about 413 x 531 pixels because 35 x 300 / 25.4 = 413 and 45 x 300 / 25.4 = 531.",
          "If an online application gives an exact pixel range, use that range over a generic DPI rule. For example, a file can be 600 x 600 pixels and still fail if the head is too large, the image is over-compressed, the background is patterned, or the photo has been digitally altered."
        ],
        "list": [
          "Use the official pixel minimum or range when one is provided.",
          "Use 300 DPI when scanning a printed passport photo or preparing a print.",
          "Keep the original image sharp before cropping; do not upscale a blurry source.",
          "Check file size after export because JPEG compression can change upload eligibility."
        ]
      },
      {
        "id": "upload-checklist",
        "title": "Passport Photo Upload Checklist",
        "paragraphs": [
          "Before submitting a passport or visa image, verify the measurable parts first: canvas size, aspect ratio, file type, and file size. Then inspect the human parts: face position, eye visibility, neutral expression, plain background, and absence of strong shadows. These non-pixel rules are often the reason a technically correct image still gets rejected.",
          "A practical workflow is to crop from a high-resolution original, export a copy at the official pixel dimensions, and keep an untouched backup. If the application portal recompresses the image, check the preview before final submission. A photo that looks acceptable in your editor can become soft after repeated saves."
        ],
        "list": [
          "Confirm country and document type before choosing dimensions.",
          "Use a square 600 x 600 to 1200 x 1200 file for US digital visa-style requirements.",
          "Use at least 600 x 750 pixels for UK digital passport-style submissions when that rule applies.",
          "Avoid beauty filters, background edits, artificial sharpening, and heavy compression.",
          "Re-check the official passport or visa page on the day you submit."
        ]
      },
      {
        "id": "business-cards",
        "title": "Business Card Sizes in Pixels",
        "table": {
          "headers": [
            "Region",
            "Physical Size",
            "Pixels at 300 DPI",
            "With Bleed"
          ],
          "rows": [
            [
              "US / Canada",
              "3.5 × 2 in",
              "1050 × 600",
              "1125 × 675"
            ],
            [
              "EU Standard",
              "85 × 55 mm",
              "1004 × 650",
              "1063 × 709"
            ],
            [
              "UK",
              "85 × 55 mm",
              "1004 × 650",
              "1063 × 709"
            ],
            [
              "Japan",
              "91 × 55 mm",
              "1075 × 650",
              "1134 × 709"
            ]
          ]
        }
      },
      {
        "id": "poster-sizes",
        "title": "Common Poster Sizes in Pixels",
        "table": {
          "headers": [
            "Poster Size",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "11 × 17 in",
              "1650 × 2550",
              "3300 × 5100"
            ],
            [
              "18 × 24 in",
              "2700 × 3600",
              "5400 × 7200"
            ],
            [
              "24 × 36 in",
              "3600 × 5400",
              "7200 × 10800"
            ],
            [
              "A2 (420 × 594 mm)",
              "2480 × 3508",
              "4961 × 7016"
            ]
          ]
        },
        "paragraphs": [
          "Calculate pixel dimensions for any custom size with our Image Size Calculator or Inches to Pixels Converter."
        ]
      },
      {
        "id": "rejection-causes",
        "title": "What Causes Passport Photo Rejections?",
        "paragraphs": [
          "Most passport photo rejections come from one of four causes: wrong pixel dimensions, wrong file size, biometric framing failures, or background issues. Fixing the pixel count won't help if the other three aren't right.",
          "Pixel dimension errors happen when the photo doesn't meet the official minimum or maximum range. For US digital submissions, a file under 600 x 600 pixels or over 1200 x 1200 pixels will be rejected outright. UK digital submissions require at least 600 x 750 pixels. Always verify the exact range for the country and document type you're applying for.",
          "Biometric framing failures are the most common cause of rejection after the technical specs look correct. Each country specifies how large the face must appear relative to the total frame height. For US passports, the head (chin to top of hair, not top of frame) must be between 1 inch and 1 3/8 inches in the physical 2 x 2 inch print, or 50% to 69% of the total frame height digitally. Crop too tight or too loose and the system flags it.",
          "Background problems include shadows on the white or off-white background, patterns, other people in the frame, and colored backgrounds. A plain white or light gray wall with no shadows directly behind the head is the safest choice.",
          "File size and compression rejections occur when the exported JPEG is too small or too large. Many portals have a maximum file size (often 10 MB) and a minimum quality floor. Saving a photo at very low JPEG quality to hit a file size target can degrade it below the system's quality threshold even if the pixel dimensions are correct."
        ]
      },
      {
        "id": "home-vs-professional",
        "title": "Can You Take a Passport Photo at Home?",
        "paragraphs": [
          "Yes, you can take a compliant passport photo at home with a modern smartphone. Many countries now accept digital photos taken by the applicant, provided all technical and biometric requirements are met.",
          "To shoot at home, use a plain white or off-white wall as your background. Natural window light from the side works better than direct overhead light, which creates shadows on the background and under the chin. Avoid flash if it causes red-eye or washes out skin tone. The camera should be at eye level, about 3 to 4 feet from the subject.",
          "After shooting, use a passport photo cropping tool to frame the head correctly to the official ratio. Don't rely on auto-crop features unless the tool is specifically calibrated for passport biometric standards. Export as a JPEG and check the pixel dimensions and file size before uploading.",
          "A professional photo booth or pharmacy service is the safer option if you're not confident about the framing or lighting. These services guarantee compliance with official specs, and many offer a reprint if the photo is rejected. For countries with strict biometric standards (like the US, UK, and Schengen zone), professional photos reduce the chance of rejection significantly.",
          "Camera settings for home photos: shoot in the highest resolution your phone or camera allows. Use portrait mode only if it doesn't add artificial background blur (blurred backgrounds can be flagged as doctored). Disable beauty filters and HDR modes that might alter skin tone or apply smoothing. JPEGs work fine; you don't need RAW files for passport photos."
        ]
      },
      {
        "id": "requirements-checklist",
        "title": "How Do You Know If Your Photo Meets Requirements?",
        "paragraphs": [
          "Run through this checklist before submitting. A photo that passes all these checks will meet requirements for most passport and visa applications."
        ],
        "list": [
          "Pixel dimensions: confirm the width and height are within the official range for the country and document type.",
          "File size: check that the exported file falls within the portal's minimum and maximum file size limits.",
          "File format: most portals accept JPEG only. Confirm the format before uploading.",
          "Head size: the face should fill 70% to 80% of the frame height from chin to crown (exact percentage varies by country).",
          "Eye position: eyes must be open, clearly visible, and centered in the upper half of the frame.",
          "Expression: neutral expression, mouth closed. Smiling is not accepted for biometric passports in most countries.",
          "Background: plain white or off-white with no patterns, no shadows, and no other objects.",
          "Lighting: even lighting with no strong shadows on the face or background.",
          "No glasses: since 2016, glasses are not permitted in US passport photos. Most EU countries and the UK follow the same rule.",
          "No head coverings, except for religious reasons (and a letter may be required).",
          "Photo recency: most countries require the photo to have been taken within the last 6 months."
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
