export interface SeoPageOverride {
  title: string;
  description: string;
  extractive: string;
}

export interface ReferenceSource {
  title: string;
  href: string;
  description: string;
}

export const DEFAULT_PAGE_DATE = "2026-03-19";

export const englishSeoPageOverrides: Record<string, SeoPageOverride> = {
  home: {
    title: "Feet to Pixels Converter - Convert ft to px at Any DPI",
    description:
      "Feet to pixels converter with 72, 96, 150, and 300 DPI presets. Convert ft to px instantly for print, signage, screens, and large-format design.",
    extractive:
      "Use FeetToPixels to convert feet to pixels with practical DPI presets for large-format print, signage, screens, and physical layout planning.",
  },
  about: {
    title: "About FeetToPixels - DPI-Aware Pixel Conversion Tools",
    description:
      "About FeetToPixels: free pixel conversion tools for designers and developers working with inches, cm, mm, feet, and CSS units using DPI-aware precision.",
    extractive:
      "FeetToPixels is a focused set of pixel conversion tools built for print sizing, screen measurements, and front-end workflows where DPI and physical dimensions matter.",
  },
  contact: {
    title: "Contact FeetToPixels: Support, Feedback, and Bug Reports",
    description:
      "Contact FeetToPixels for tool feedback, bug reports, feature requests, content suggestions, or partnership questions about our free pixel conversion tools.",
    extractive:
      "Use the FeetToPixels contact page to report calculator issues, request new tools, or send feedback about DPI, PPI, print sizing, and conversion workflows.",
  },
  privacy: {
    title: "FeetToPixels Privacy Policy - Data, Cookies, and Analytics",
    description:
      "Read the FeetToPixels privacy policy to understand how we handle contact form messages, cookies, analytics, advertising, and browser-based tool activity.",
    extractive:
      "The FeetToPixels privacy policy explains what information we collect, how browser-based tools work, and how cookies, analytics, and advertising services may be used.",
  },
  terms: {
    title: "FeetToPixels Terms of Service - Use of Our Conversion Tools",
    description:
      "Review the FeetToPixels terms of service to understand the rules, limitations, and general conditions for using our pixel conversion tools and content.",
    extractive:
      "The FeetToPixels terms describe how you may use our pixel conversion tools, what limitations apply, and how updates to the service and content are handled.",
  },
  "pixels-to-inches": {
    title: "Pixels to Inches Converter: Convert PX to Inches at Any DPI",
    description:
      "Convert pixels to inches at 72, 96, 150, and 300 DPI. Free PX to inches calculator for web design, print layouts, photo sizing, and image preparation.",
    extractive:
      "To convert pixels to inches, divide the pixel count by DPI. At 96 DPI (web standard), 960 pixels equals 10 inches. At 300 DPI (print quality), 960 pixels equals 3.2 inches.",
  },
  "inches-to-pixels": {
    title: "Inches to Pixels Converter: Convert Inches to PX at Any DPI",
    description:
      "Convert inches to pixels at 72, 96, 150, and 300 DPI. Free inches to PX calculator for web design, print layouts, photo sizing, and image preparation.",
    extractive:
      "To convert inches to pixels, multiply inches by DPI. At 96 DPI, 1 inch equals 96 pixels. At 300 DPI, 1 inch equals 300 pixels. The formula is: pixels = inches x DPI.",
  },
  "cm-to-pixels": {
    title: "CM to Pixels Converter: Convert Centimeters to PX Online",
    description:
      "Convert centimeters to pixels at 72, 96, 150, and 300 DPI. Free CM to PX converter for web and print design, photo sizing, layout planning, and image work.",
    extractive:
      "At 96 DPI, 1 centimeter equals approximately 37.8 pixels. The formula is: pixels = cm x DPI / 2.54. At 300 DPI (print), 1 cm equals about 118 pixels.",
  },
  "pixels-to-cm": {
    title: "Pixels to CM Converter: Convert PX to Centimeters Online",
    description:
      "Convert pixels to centimeters at 72, 96, 150, and 300 DPI. Free PX to CM calculator for web and print design, photo sizing, layout planning, and image work.",
    extractive:
      "To convert pixels to centimeters, multiply pixels by 2.54 and divide by DPI. At 96 DPI, 100 pixels equals approximately 2.65 cm. At 300 DPI, 100 pixels equals 0.85 cm.",
  },
  "mm-to-pixels": {
    title: "MM to Pixels Converter: Convert Millimeters to PX Online",
    description:
      "Convert millimeters to pixels at any DPI. Free MM to PX converter for precision design work. Supports 96 DPI for web and 300 DPI for quality print output.",
    extractive:
      "At 96 DPI, 1 millimeter equals approximately 3.78 pixels. The formula is: pixels = mm x DPI / 25.4. At 300 DPI, 1 mm equals about 11.8 pixels.",
  },
  "pixels-to-mm": {
    title: "Pixels to MM Converter: Convert PX to Millimeters Online",
    description:
      "Convert pixels to millimeters at 72, 96, 150, and 300 DPI. Free PX to MM converter for web and print design, photo sizing, layout planning, and image work.",
    extractive:
      "To convert pixels to millimeters, multiply pixels by 25.4 and divide by DPI. At 96 DPI, 100 pixels equals approximately 26.46 mm. At 300 DPI, 100 pixels equals 8.47 mm.",
  },
  "feet-to-pixels": {
    title: "Feet to Pixels Converter: Convert Feet to PX at Any DPI",
    description:
      "Convert feet to pixels at 72, 96, 150, and 300 DPI. Free feet to PX calculator for large-format signage, banners, trade show displays, and print prep.",
    extractive:
      "At 96 DPI, 1 foot equals 1,152 pixels. The formula is: pixels = feet x 12 x DPI. At 300 DPI, 1 foot equals 3,600 pixels. Feet to pixels depends entirely on your DPI setting.",
  },
  "pixels-to-feet": {
    title: "Pixels to Feet Converter: Convert PX to Feet Online",
    description:
      "Convert pixels to feet with adjustable DPI. Perfect for large-format printing, signage, and understanding the physical dimensions of digital displays.",
    extractive:
      "To convert pixels to feet, divide pixels by (DPI x 12). At 96 DPI, 1152 pixels equals 1 foot. At 300 DPI, 3600 pixels equals 1 foot.",
  },
  "dpi-calculator": {
    title: "DPI Calculator: Calculate Dots Per Inch for Any Image",
    description:
      "Calculate DPI from pixel dimensions and print size. Free online DPI calculator for designers, photographers, printers, and anyone checking image resolution.",
    extractive:
      "DPI equals pixels divided by inches. For an image 3000 pixels wide printed at 10 inches, DPI is 300. Higher DPI means sharper prints. Web standard is 72-96 DPI; print standard is 150-300 DPI.",
  },
  "ppi-calculator": {
    title: "PPI Calculator: Calculate Pixels Per Inch for Any Screen",
    description:
      "Calculate PPI (Pixels Per Inch) for any screen. Enter resolution and screen size to find pixel density. Compare screens, monitors, phones, and tablets.",
    extractive:
      "PPI equals the square root of (width pixels squared + height pixels squared) divided by diagonal screen size in inches. A 27-inch 4K monitor has approximately 163 PPI.",
  },
  "dpi-converter": {
    title: "DPI Converter: Change Image DPI and Resolution Online",
    description:
      "Convert image DPI settings online. Change between 72, 96, 150, and 300 DPI. Understand how DPI affects print size and image quality. Free DPI converter tool.",
    extractive:
      "Changing DPI changes print size, not pixel count. A 3000x2000 image at 300 DPI prints at 10x6.67 inches. The same image at 72 DPI prints at 41.67x27.78 inches.",
  },
  "aspect-ratio-calculator": {
    title: "Aspect Ratio Calculator: Calculate Image and Video Ratios",
    description:
      "Calculate aspect ratio from any width and height. Resize images proportionally, convert between ratios, and find matching dimensions for images and video.",
    extractive:
      "Aspect ratio is the proportional relationship between width and height. 1920x1080 is 16:9. To calculate, divide both by their greatest common divisor. Common ratios: 16:9, 4:3, 1:1, 3:2.",
  },
  "image-size-calculator": {
    title: "Image Size Calculator: Find Dimensions for Print and Web",
    description:
      "Calculate image size in pixels, inches, or cm at any DPI. Find optimal dimensions for print and web. Estimate file size from resolution and color depth.",
    extractive:
      "Image file size in bytes equals width x height x color depth / 8. A 3000x2000 pixel image at 24-bit color is approximately 18 MB uncompressed. JPEG compression typically reduces this by 90%.",
  },
  "screen-resolution-checker": {
    title: "Screen Resolution Checker: What Is My Screen Resolution?",
    description:
      "Use this tool to answer what is my screen resolution instantly. Check your display size, resolution, device pixel ratio, and screen details in one place.",
    extractive:
      "If you are asking what is my screen resolution, this checker reads your current display settings and reports the pixel dimensions, device pixel ratio, and other useful screen details.",
  },
  "image-dpi-checker": {
    title: "Check Image DPI: Free Online Image DPI Checker Tool",
    description:
      "Check image DPI online to see resolution, dimensions, and print quality. Upload an image and find whether it is ready for 300 DPI, 150 DPI, or screen use.",
    extractive:
      "Use this tool to check image DPI, inspect pixel dimensions, and estimate print size at 300 DPI, 150 DPI, and 96 DPI before you export or print.",
  },
  "pixel-ruler": {
    title: "Online Pixel Ruler: Measure Pixels Accurately on Screen",
    description:
      "Measure pixels directly on your screen with a free online pixel ruler. Drag to measure width and height, then calibrate for more accurate measurements.",
    extractive:
      "A pixel ruler measures distances on your screen in pixels. At 96 DPI, 96 pixels on a ruler equals approximately 1 inch. Calibrate by measuring a physical reference object.",
  },
  "px-to-rem": {
    title: "PX to REM Converter: Convert Pixels to REM Units Online",
    description:
      "Convert PX to REM with a custom base font size. Free PX to REM calculator with reverse conversion, formula examples, and responsive CSS layout guidance.",
    extractive:
      "To convert pixels to REM, divide pixels by the root font size (default 16px). 32px equals 2rem. 24px equals 1.5rem. REM units scale with the root element's font size.",
  },
  "px-to-em": {
    title: "PX to EM Converter: Convert Pixels to EM Units Online",
    description:
      "Convert PX to EM units for CSS. Set parent font size and convert pixels to em values. Includes EM to PX reverse converter. Free online CSS unit converter.",
    extractive:
      "To convert pixels to EM, divide pixels by the parent element's font size. If parent is 16px, then 24px equals 1.5em. Unlike REM, EM is relative to the parent, not the root.",
  },
  "px-to-pt": {
    title: "PX to PT Converter: Convert Pixels to Points for Typography",
    description:
      "Convert PX to PT (points) for typography. At 96 DPI: 1pt = 1.333px. Convert between screen pixels and print points. Free PX to PT and PT to PX converter.",
    extractive:
      "At 96 DPI, 1 point equals 1.333 pixels. The formula is: points = pixels x 72 / 96. A 12pt font equals 16 pixels at standard screen DPI. Points are absolute; pixels vary by display.",
  },
  "px-to-vw": {
    title: "PX to VW Converter: Convert Pixels to Viewport Width Units",
    description:
      "Convert PX to VW for responsive CSS design. Enter viewport width and pixel value to calculate VW percentage, with reverse conversion for fluid layouts.",
    extractive:
      "To convert pixels to VW, divide pixels by viewport width and multiply by 100. On a 1920px viewport, 192px equals 10vw. VW units make elements scale proportionally to browser width.",
  },
  "pixel-converter": {
    title: "Pixel Converter: All-in-One Unit Conversion Tool Online",
    description:
      "Convert pixels to inches, cm, mm, feet, rem, em, pt, vw, and more. All-in-one pixel converter with DPI settings. The only pixel conversion tool you need.",
    extractive:
      "Pixel conversion depends on DPI for physical units and base font size for CSS units. At 96 DPI: 1 inch = 96px, 1cm = 37.8px. For CSS: 1rem = 16px (default).",
  },
  "megapixel-calculator": {
    title: "Megapixel Calculator: Convert MP to Pixels and Resolution",
    description:
      "Use our megapixel calculator to convert megapixels to pixel dimensions, estimate image resolution, and compare common MP counts for cameras and print work.",
    extractive:
      "A megapixel calculator helps you convert MP to pixels by combining total pixel count with aspect ratio. For example, 12 MP at 4:3 is roughly 4000 x 3000 pixels.",
  },
  "pixels-per-inch": {
    title: "Pixels Per Inch Explained: DPI and PPI Guide for Every Resolution",
    description:
      "See how many pixels fit in an inch at 72, 96, 150, and 300 DPI. Practical PPI guide with formulas, charts, and print/web references.",
    extractive:
      "At 96 DPI (standard web), there are 96 pixels per inch. At 72 DPI (legacy Mac), 72 pixels per inch. At 300 DPI (high-quality print), 300 pixels per inch. DPI determines this relationship.",
  },
  "what-is-dpi": {
    title: "What Is DPI? Dots Per Inch Explained for Print and Digital",
    description:
      "Learn what DPI means, how it affects print and image quality, and which DPI settings to choose for web graphics, photos, documents, and printed output.",
    extractive:
      "DPI (Dots Per Inch) measures how many ink dots a printer places within one inch. Higher DPI means sharper prints. Web standard is 72-96 DPI. Print quality requires 150-300 DPI.",
  },
  "what-is-ppi": {
    title: "What Is PPI? Pixels Per Inch for Screens and Displays",
    description:
      "Learn what PPI (pixels per inch) means for screens, how it affects sharpness, and typical pixel density values for phones, tablets, laptops, and monitors.",
    extractive:
      "PPI (Pixels Per Inch) measures screen display density. Higher PPI means sharper text and images. Modern phones reach 400+ PPI. Desktop monitors range 72-163 PPI. Retina displays use 200+ PPI.",
  },
  "what-is-a-pixel": {
    title: "What Is a Pixel? The Building Block of Digital Images",
    description:
      "Learn what a pixel is, how pixels form digital images, and how subpixels, megapixels, DPI, PPI, and screen density all affect the visible detail you see.",
    extractive:
      "A pixel (picture element) is the smallest addressable unit on a digital display. Each pixel contains subpixels (red, green, blue) that combine to create any visible color.",
  },
  "dpi-vs-ppi": {
    title: "DPI vs PPI: Difference Between Dots Per Inch and Pixels",
    description:
      "Learn the key differences between DPI and PPI, when each measurement applies, why they are often confused, and how to choose the right setting for your work.",
    extractive:
      "DPI (Dots Per Inch) measures print resolution using physical ink dots. PPI (Pixels Per Inch) measures screen resolution using digital pixels. DPI is for printers; PPI is for screens.",
  },
  "best-dpi-for-printing": {
    title: "Best DPI for Printing: Resolution Guide for Sharp Prints",
    description:
      "What DPI should you use for printing? 300 DPI for photos, 150 DPI for general documents, 72 DPI for web only. Complete DPI printing guide with size charts.",
    extractive:
      "For photo printing viewed up close, use about 300 DPI. For documents and brochures, 150-200 DPI is often enough. For large-format posters viewed from distance, 72-150 DPI can work if the source image is clean.",
  },
  "paper-sizes-in-pixels": {
    title: "A4 Size in Pixels and Other Paper Sizes at Every DPI",
    description:
      "Find A4 size in pixels, US Letter size in pixels, and other standard paper dimensions at 72, 96, 150, and 300 DPI for print and digital layout planning.",
    extractive:
      "If you need A4 size in pixels, it is 2480 x 3508 at 300 DPI, 1240 x 1754 at 150 DPI, and 794 x 1123 at 96 DPI. This guide also covers Letter, A3, A5, and more.",
  },
  "standard-image-sizes": {
    title: "Standard Image Sizes in Pixels: 4x6, 5x7, 8x10, and More",
    description:
      "Standard photo print sizes in pixels for 4x6, 5x7, 8x10, 11x14, 16x20, and 24x36. Pixel dimensions at 150 and 300 DPI. Complete print size reference chart.",
    extractive:
      "4x6 photo at 300 DPI: 1200x1800 pixels. 5x7: 1500x2100. 8x10: 2400x3000. 11x14: 3300x4200. These are minimum pixel dimensions for sharp prints at each size.",
  },
  "social-media-image-sizes": {
    title: "Social Media Image Sizes and Instagram Post Size Guide",
    description:
      "Find the correct Instagram post size in pixels plus Facebook, YouTube, Twitter/X, LinkedIn, and other social media image dimensions in one updated 2026 guide.",
    extractive:
      "The standard Instagram post size in pixels is 1080 x 1080 for square posts, with 1080 x 1350 for portrait. This reference also covers Facebook covers, YouTube thumbnails, and more.",
  },
  "em-vs-rem": {
    title: "EM vs REM in CSS: When to Use Each Unit (With Converter)",
    description:
      "Learn the key differences between EM and REM units in CSS, when to use each one, and how they affect font scaling and layout in responsive web design.",
    extractive:
      "REM is relative to the root (html) font size. EM is relative to the parent element's font size. Use REM for global sizing consistency. Use EM for component-level scaling.",
  },
  "common-resolutions": {
    title: "1920x1080 in Inches: Common Screen Resolutions Explained",
    description:
      "Find 1920x1080 in inches, 2560x1440 in inches, and 4K UHD physical screen sizes at common monitor diagonals with a practical resolution reference guide.",
    extractive:
      "If you are searching for 1920x1080 in inches, the answer depends on screen size. On a 24-inch monitor, 1920x1080 spans about 20.9 x 11.8 inches, while a 27-inch screen spans about 23.5 x 13.2 inches.",
  },
  "best-dpi-for-web": {
    title: "Best DPI for Web Images: Resolution Guide for Websites",
    description:
      "What DPI should web images be? 72 DPI is the traditional standard, but pixel dimensions matter more than DPI for web. Learn why, plus image optimization tips.",
    extractive:
      "For web images, DPI metadata does not control browser display size - pixel dimensions do. A 1200x800 image displays the same on a page whether the file metadata says 72 DPI, 96 DPI, or 300 DPI.",
  },
  "pixels-per-cm": {
    title: "Pixels Per CM: How Many Pixels Are in a Centimeter?",
    description:
      "How many pixels per centimeter? At 96 DPI: 37.8 px/cm. At 72 DPI: 28.35 px/cm. At 300 DPI: 118.11 px/cm. Complete pixels per cm reference with formula.",
    extractive:
      "At 96 DPI, there are approximately 37.8 pixels per centimeter. Formula: pixels per cm = DPI / 2.54. At 72 DPI: 28.35 px/cm. At 300 DPI: 118.11 px/cm.",
  },
  "pixels-per-mm": {
    title: "Pixels Per Millimeter: How Many Pixels in a Millimeter?",
    description:
      "Find pixels per millimeter at 72, 96, 150, and 300 DPI with formulas and a practical quick reference chart for print, image prep, and measurement work.",
    extractive:
      "Pixels per millimeter depends on DPI. At 96 DPI there are about 3.78 pixels per millimeter, while at 300 DPI there are about 11.81 pixels per millimeter.",
  },
  "pixels-per-foot": {
    title: "Pixels Per Foot: How Many Pixels Fit in One Foot at Any DPI",
    description:
      "How many pixels per foot? At 96 DPI: 1,152 pixels. At 72 DPI: 864 pixels. At 300 DPI: 3,600 pixels. Pixel per foot reference for large format and signage.",
    extractive:
      "At 96 DPI, there are 1,152 pixels per foot (96 x 12 inches). At 300 DPI, there are 3,600 pixels per foot. At 72 DPI, there are 864 pixels per foot.",
  },
  "dpi-conversion-table": {
    title: "DPI Conversion Table: Reference Chart for All Resolutions",
    description:
      "DPI conversion table showing pixels per inch, per cm, and per mm at 72, 96, 150, 200, 300, and 600 DPI. Quick reference chart for designers and printers.",
    extractive:
      "Quick DPI reference: 72 DPI = 72 px/in, 28.3 px/cm. 96 DPI = 96 px/in, 37.8 px/cm. 150 DPI = 150 px/in, 59.1 px/cm. 300 DPI = 300 px/in, 118.1 px/cm.",
  },
  "passport-photo-size": {
    title: "Passport Photo Size in Pixels: 2x2, 35x45mm, and More",
    description:
      "Passport photo size in pixels for US, UK, Schengen, and international formats, with 300 DPI dimensions and print specifications for passport and ID photos.",
    extractive:
      "US passport photo: 2x2 inches = 600x600 pixels at 300 DPI. UK passport photo: 35x45mm = 413x531 pixels at 300 DPI. Schengen visa: 35x45mm = same as UK.",
  },
};

const baseSources: ReferenceSource[] = [
  {
    title: "W3C: CSS Values and Units Module Level 4",
    href: "https://www.w3.org/TR/css-values-4/",
    description:
      "Specification covering absolute lengths and resolution units such as px, in, cm, mm, pt, and dpi.",
  },
  {
    title: "MDN: CSS values and units",
    href: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units",
    description:
      "Reference guide for CSS measurement units and how browsers interpret physical and relative sizes.",
  },
  {
    title: "MDN: <resolution>",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/resolution",
    description:
      "Reference for resolution units including dpi, dppx, and dpcm used in screen and print discussions.",
  },
];

const screenSources: ReferenceSource[] = [
  {
    title: "MDN: Window.devicePixelRatio",
    href: "https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio",
    description:
      "Explains the relationship between CSS pixels and physical device pixels on high-density displays.",
  },
];

const imageSources: ReferenceSource[] = [
  {
    title: "MDN: image-resolution",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS/image-resolution",
    description:
      "Explains how raster image resolution metadata interacts with CSS and print-oriented image workflows.",
  },
];

const slugSpecificSources: Record<string, ReferenceSource[]> = {
  "common-resolutions": [
    {
      title: "StatCounter: Desktop Screen Resolution Stats Worldwide",
      href: "https://gs.statcounter.com/screen-resolution-stats/desktop/worldwide/2025",
      description:
        "Current desktop screen-resolution market-share data used to verify common resolution claims.",
    },
  ],
  "passport-photo-size": [
    {
      title: "U.S. Department of State: Digital Image Requirements",
      href: "https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/photos/digital-image-requirements.html",
      description:
        "Official U.S. digital photo dimensions, file format, color, and scan requirements.",
    },
    {
      title: "GOV.UK: Passport Photo Guidance for Photographers",
      href: "https://www.gov.uk/government/publications/passport-photos-guide-for-photographers/guidance-for-photographers",
      description:
        "UK passport-photo quality and framing guidance for paper and digital photos.",
    },
  ],
  "social-media-image-sizes": [
    {
      title: "YouTube Help: Custom Thumbnail Size and Resolution",
      href: "https://support.google.com/youtube/answer/72431",
      description:
        "Official YouTube custom thumbnail guidance, including resolution, aspect ratio, file type, and upload limits.",
    },
  ],
};

const cssSlugs = new Set([
  "px-to-rem",
  "px-to-em",
  "px-to-pt",
  "px-to-vw",
  "em-vs-rem",
]);

const screenSlugs = new Set([
  "ppi-calculator",
  "screen-resolution-checker",
  "pixels-per-inch",
  "what-is-ppi",
  "common-resolutions",
]);

const imageSlugs = new Set([
  "image-size-calculator",
  "image-dpi-checker",
  "dpi-calculator",
  "dpi-converter",
  "what-is-dpi",
  "dpi-vs-ppi",
  "best-dpi-for-printing",
  "best-dpi-for-web",
  "paper-sizes-in-pixels",
  "standard-image-sizes",
  "social-media-image-sizes",
  "passport-photo-size",
  "megapixel-calculator",
]);

function dedupeSources(sources: ReferenceSource[]): ReferenceSource[] {
  const seen = new Set<string>();

  return sources.filter((source) => {
    if (seen.has(source.href)) return false;
    seen.add(source.href);
    return true;
  });
}

export function getReferenceSources(slug: string): ReferenceSource[] {
  const sources = [...baseSources];

  if (screenSlugs.has(slug)) {
    sources.push(...screenSources);
  }

  if (imageSlugs.has(slug) || !cssSlugs.has(slug)) {
    sources.push(...imageSources);
  }

  sources.push(...(slugSpecificSources[slug] || []));

  return dedupeSources(sources);
}
