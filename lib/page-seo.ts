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
  "pixels-to-inches": {
    title: "Pixels to Inches Converter: Convert PX to Inches at Any DPI",
    description:
      "Convert pixels to inches instantly with our free tool. Supports 72, 96, 150, and 300 DPI. Perfect for web design, print layouts, and photo sizing. Enter pixels, get inches.",
    extractive:
      "To convert pixels to inches, divide the pixel count by DPI. At 96 DPI (web standard), 960 pixels equals 10 inches. At 300 DPI (print quality), 960 pixels equals 3.2 inches.",
  },
  "inches-to-pixels": {
    title: "Inches to Pixels Converter: Convert Inches to PX at Any DPI",
    description:
      "Convert inches to pixels instantly. Supports multiple DPI settings including 72, 96, 150, and 300 DPI for web and print. Free online inches to pixels calculator.",
    extractive:
      "To convert inches to pixels, multiply inches by DPI. At 96 DPI, 1 inch equals 96 pixels. At 300 DPI, 1 inch equals 300 pixels. The formula is: pixels = inches x DPI.",
  },
  "cm-to-pixels": {
    title: "CM to Pixels Converter: Convert Centimeters to PX Online",
    description:
      "Convert centimeters to pixels at any DPI. Free CM to PX converter for web design and printing. Supports 72, 96, 150, 300 DPI. One cm equals 37.8 pixels at 96 DPI.",
    extractive:
      "At 96 DPI, 1 centimeter equals approximately 37.8 pixels. The formula is: pixels = cm x DPI / 2.54. At 300 DPI (print), 1 cm equals about 118 pixels.",
  },
  "pixels-to-cm": {
    title: "Pixels to CM Converter: Convert PX to Centimeters Online",
    description:
      "Convert pixels to centimeters at any DPI setting. Free PX to CM converter for print design and photo sizing. Enter pixel dimensions, select DPI, get centimeters.",
    extractive:
      "To convert pixels to centimeters, multiply pixels by 2.54 and divide by DPI. At 96 DPI, 100 pixels equals approximately 2.65 cm. At 300 DPI, 100 pixels equals 0.85 cm.",
  },
  "mm-to-pixels": {
    title: "MM to Pixels Converter: Convert Millimeters to PX Online",
    description:
      "Convert millimeters to pixels at any DPI. Free MM to PX converter for precision design work. Supports web (96 DPI) and print (300 DPI) resolutions.",
    extractive:
      "At 96 DPI, 1 millimeter equals approximately 3.78 pixels. The formula is: pixels = mm x DPI / 25.4. At 300 DPI, 1 mm equals about 11.8 pixels.",
  },
  "pixels-to-mm": {
    title: "Pixels to MM Converter: Convert PX to Millimeters Online",
    description:
      "Convert pixels to millimeters with adjustable DPI. Free PX to MM converter for print design, manufacturing specs, and precision work. Fast and accurate results.",
    extractive:
      "To convert pixels to millimeters, multiply pixels by 25.4 and divide by DPI. At 96 DPI, 100 pixels equals approximately 26.46 mm. At 300 DPI, 100 pixels equals 8.47 mm.",
  },
  "feet-to-pixels": {
    title: "Feet to Pixels Converter: Convert Feet to PX at Any DPI",
    description:
      "Convert feet to pixels at any DPI setting. Perfect for large-format displays, digital signage, and banner design. Free feet to pixels calculator with DPI presets.",
    extractive:
      "At 96 DPI, 1 foot equals 1,152 pixels. The formula is: pixels = feet x 12 x DPI. At 300 DPI, 1 foot equals 3,600 pixels. Feet to pixels depends entirely on your DPI setting.",
  },
  "pixels-to-feet": {
    title: "Pixels to Feet Converter: Convert PX to Feet Online",
    description:
      "Convert pixels to feet with adjustable DPI. Useful for large-format printing, signage, and understanding physical dimensions of digital displays.",
    extractive:
      "To convert pixels to feet, divide pixels by (DPI x 12). At 96 DPI, 1152 pixels equals 1 foot. At 300 DPI, 3600 pixels equals 1 foot.",
  },
  "dpi-calculator": {
    title: "DPI Calculator: Calculate Dots Per Inch from Image Dimensions",
    description:
      "Calculate DPI from image dimensions and physical size. Enter width/height in pixels and size in inches to find your DPI. Free online DPI calculator for designers.",
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
      "Calculate aspect ratio from any width and height. Convert between ratios, resize while maintaining proportions. Free aspect ratio calculator for images and video.",
    extractive:
      "Aspect ratio is the proportional relationship between width and height. 1920x1080 is 16:9. To calculate, divide both by their greatest common divisor. Common ratios: 16:9, 4:3, 1:1, 3:2.",
  },
  "image-size-calculator": {
    title: "Image Size Calculator: Calculate Dimensions for Print and Web",
    description:
      "Calculate image size in pixels, inches, or cm at any DPI. Find optimal dimensions for print and web. Estimate file size from resolution and color depth.",
    extractive:
      "Image file size in bytes equals width x height x color depth / 8. A 3000x2000 pixel image at 24-bit color is approximately 18 MB uncompressed. JPEG compression typically reduces this by 90%.",
  },
  "screen-resolution-checker": {
    title: "Screen Resolution Checker: What Is My Screen Resolution?",
    description:
      "Check your screen resolution, DPI, PPI, and display size instantly. Auto-detects your monitor settings. Works on all devices including phones, tablets, and desktops.",
    extractive:
      "Your screen resolution is the number of pixels displayed horizontally and vertically. Common resolutions: 1920x1080 (Full HD), 2560x1440 (QHD), 3840x2160 (4K UHD).",
  },
  "image-dpi-checker": {
    title: "Image DPI Checker: Check DPI of Any Image Online",
    description:
      "Check the DPI of any image online. Upload your image to see its resolution, DPI, dimensions, and whether it meets print quality requirements. Free image DPI checker.",
    extractive:
      "Image DPI is stored in the file metadata (EXIF). Most cameras save at 72 DPI by default. For print quality, you need 150-300 DPI at your target print size.",
  },
  "pixel-ruler": {
    title: "Online Pixel Ruler: Measure Pixels on Your Screen",
    description:
      "Measure pixels on your screen with our free online pixel ruler. Drag to measure width and height in pixels. Calibrate to your monitor for accurate physical measurements.",
    extractive:
      "A pixel ruler measures distances on your screen in pixels. At 96 DPI, 96 pixels on a ruler equals approximately 1 inch. Calibrate by measuring a physical reference object.",
  },
  "px-to-rem": {
    title: "PX to REM Converter: Convert Pixels to REM Units Online",
    description:
      "Convert PX to REM instantly. Set your base font size (default 16px) and convert any pixel value to REM. Includes REM to PX reverse conversion. Essential for responsive CSS.",
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
      "Convert PX to VW (viewport width) for responsive design. Enter viewport width and pixel value to get VW. Includes VW to PX reverse converter. Free CSS unit tool.",
    extractive:
      "To convert pixels to VW, divide pixels by viewport width and multiply by 100. On a 1920px viewport, 192px equals 10vw. VW units make elements scale proportionally to browser width.",
  },
  "pixel-converter": {
    title: "Pixel Converter: All-in-One Unit Conversion Tool",
    description:
      "Convert pixels to inches, cm, mm, feet, rem, em, pt, vw, and more. All-in-one pixel converter with DPI settings. The only pixel conversion tool you need.",
    extractive:
      "Pixel conversion depends on DPI for physical units and base font size for CSS units. At 96 DPI: 1 inch = 96px, 1cm = 37.8px. For CSS: 1rem = 16px (default).",
  },
  "megapixel-calculator": {
    title: "Megapixels to Pixels Calculator: Convert MP to Resolution",
    description:
      "Convert megapixels to pixel dimensions at any aspect ratio. Find image resolution from camera megapixels. Calculate maximum print sizes from megapixel counts.",
    extractive:
      "1 megapixel equals 1 million pixels. A 12MP camera at 4:3 ratio produces 4000x3000 pixel images. To calculate: total pixels = width x height. Max print size depends on DPI.",
  },
  "pixels-per-inch": {
    title: "Pixels Per Inch Explained: DPI and PPI Guide for Every Resolution",
    description:
      "How many pixels are in an inch? At 96 DPI: 96 pixels. At 72 DPI: 72 pixels. At 300 DPI: 300 pixels. Complete PPI guide with charts, formulas, and DPI comparison tables.",
    extractive:
      "At 96 DPI (standard web), there are 96 pixels per inch. At 72 DPI (legacy Mac), 72 pixels per inch. At 300 DPI (high-quality print), 300 pixels per inch. DPI determines this relationship.",
  },
  "what-is-dpi": {
    title: "What Is DPI? Dots Per Inch Explained for Print and Digital",
    description:
      "DPI (Dots Per Inch) measures print resolution. Learn what DPI means, how it affects image quality, standard DPI settings for web and print, and how to change DPI.",
    extractive:
      "DPI (Dots Per Inch) measures how many ink dots a printer places within one inch. Higher DPI means sharper prints. Web standard is 72-96 DPI. Print quality requires 150-300 DPI.",
  },
  "what-is-ppi": {
    title: "What Is PPI? Pixels Per Inch for Screens and Displays",
    description:
      "PPI (Pixels Per Inch) measures screen pixel density. Learn what PPI means, how it affects display sharpness, PPI values for phones, tablets, monitors, and retina displays.",
    extractive:
      "PPI (Pixels Per Inch) measures screen display density. Higher PPI means sharper text and images. Modern phones reach 400+ PPI. Desktop monitors range 72-163 PPI. Retina displays use 200+ PPI.",
  },
  "what-is-a-pixel": {
    title: "What Is a Pixel? The Building Block of Digital Images",
    description:
      "A pixel is the smallest unit of a digital display. Learn what pixels are, how they work, pixel size at different DPI, subpixels, megapixels, and how pixels create images.",
    extractive:
      "A pixel (picture element) is the smallest addressable unit on a digital display. Each pixel contains subpixels (red, green, blue) that combine to create any visible color.",
  },
  "dpi-vs-ppi": {
    title: "DPI vs PPI: What's the Difference Between Dots and Pixels?",
    description:
      "DPI vs PPI: DPI measures print resolution (ink dots), PPI measures screen density (digital pixels). Learn the key differences, when each applies, and why they are often confused.",
    extractive:
      "DPI (Dots Per Inch) measures print resolution using physical ink dots. PPI (Pixels Per Inch) measures screen resolution using digital pixels. DPI is for printers; PPI is for screens.",
  },
  "best-dpi-for-printing": {
    title: "Best DPI for Printing: Resolution Guide for Sharp Prints",
    description:
      "What DPI should you use for printing? 300 DPI for photos, 150 DPI for general documents, 72 DPI for web only. Complete DPI printing guide with size charts.",
    extractive:
      "For photo printing, use 300 DPI. For documents and brochures, 150 DPI is sufficient. For large-format posters viewed from distance, 72-100 DPI works. Higher DPI always means better quality.",
  },
  "paper-sizes-in-pixels": {
    title: "Paper Sizes in Pixels: A4, Letter, A3, A5 at Every DPI",
    description:
      "Paper sizes in pixels at 72, 96, 150, and 300 DPI. A4, Letter, A3, A5, Legal, 8.5x11, and more. Complete reference table for digital design and printing.",
    extractive:
      "A4 size in pixels: 595x842 at 72 DPI, 794x1123 at 96 DPI, 1240x1754 at 150 DPI, 2480x3508 at 300 DPI. US Letter: 612x792 at 72 DPI, 816x1056 at 96 DPI.",
  },
  "standard-image-sizes": {
    title: "Standard Image Sizes in Pixels: 4x6, 5x7, 8x10, and More",
    description:
      "Standard image sizes in pixels for 4x6, 5x7, 8x10, 11x14, 16x20, 24x36 prints. Pixel dimensions at 150 and 300 DPI. Photo print size reference chart.",
    extractive:
      "4x6 photo at 300 DPI: 1200x1800 pixels. 5x7: 1500x2100. 8x10: 2400x3000. 11x14: 3300x4200. These are minimum pixel dimensions for sharp prints at each size.",
  },
  "social-media-image-sizes": {
    title: "Social Media Image Sizes in Pixels: Instagram, Facebook, YouTube",
    description:
      "Social media image sizes in pixels for 2026. Instagram post 1080x1080, Facebook cover 820x312, YouTube thumbnail 1280x720, LinkedIn banner 1584x396, Twitter header 1500x500.",
    extractive:
      "Instagram post: 1080x1080px (square), 1080x1350px (portrait). Facebook cover: 820x312px. YouTube thumbnail: 1280x720px. LinkedIn banner: 1584x396px.",
  },
  "em-vs-rem": {
    title: "EM vs REM in CSS: When to Use Each Unit (With Converter)",
    description:
      "EM vs REM in CSS: EM is relative to parent element, REM is relative to root. Learn when to use each, conversion formulas, and best practices for responsive design.",
    extractive:
      "REM is relative to the root (html) font size. EM is relative to the parent element's font size. Use REM for global sizing consistency. Use EM for component-level scaling.",
  },
  "common-resolutions": {
    title: "Common Screen Resolutions Explained: 1920x1080, 4K, and More",
    description:
      "Common screen resolutions explained with physical dimensions. 1920x1080, 2560x1440, 3840x2160 in inches at various screen sizes. Resolution comparison chart.",
    extractive:
      "1920x1080 on a 24-inch monitor spans approximately 20.9x11.8 inches. The same resolution on a 27-inch monitor spans 23.5x13.2 inches. Physical size depends on screen diagonal.",
  },
  "best-dpi-for-web": {
    title: "Best DPI for Web Images: Resolution Guide for Websites",
    description:
      "What DPI should web images be? 72 DPI is the traditional standard, but pixel dimensions matter more than DPI for web. Learn why, plus image optimization tips.",
    extractive:
      "For web images, DPI does not matter - only pixel dimensions matter. A 1200x800 image displays identically whether saved at 72 or 300 DPI. Save at 72 DPI for smaller file sizes.",
  },
  "pixels-per-cm": {
    title: "Pixels Per CM: How Many Pixels in a Centimeter?",
    description:
      "How many pixels per centimeter? At 96 DPI: 37.8 px/cm. At 72 DPI: 28.35 px/cm. At 300 DPI: 118.11 px/cm. Complete pixels per cm reference with formula.",
    extractive:
      "At 96 DPI, there are approximately 37.8 pixels per centimeter. Formula: pixels per cm = DPI / 2.54. At 72 DPI: 28.35 px/cm. At 300 DPI: 118.11 px/cm.",
  },
  "pixels-per-mm": {
    title: "Pixels Per MM: How Many Pixels in a Millimeter?",
    description:
      "How many pixels per millimeter? At 96 DPI: 3.78 px/mm. At 300 DPI: 11.81 px/mm. Formula and reference table for all DPI values.",
    extractive:
      "At 96 DPI, there are approximately 3.78 pixels per millimeter. Formula: pixels per mm = DPI / 25.4. At 300 DPI: 11.81 px/mm. At 72 DPI: 2.83 px/mm.",
  },
  "pixels-per-foot": {
    title: "Pixels Per Foot: How Many Pixels in a Foot?",
    description:
      "How many pixels per foot? At 96 DPI: 1,152 pixels. At 72 DPI: 864 pixels. At 300 DPI: 3,600 pixels. Pixel per foot reference for large format and signage.",
    extractive:
      "At 96 DPI, there are 1,152 pixels per foot (96 x 12 inches). At 300 DPI, there are 3,600 pixels per foot. At 72 DPI, there are 864 pixels per foot.",
  },
  "dpi-conversion-table": {
    title: "DPI Conversion Table: Quick Reference Chart for All Resolutions",
    description:
      "DPI conversion table showing pixels per inch, cm, and mm at 72, 96, 150, 200, 300, and 600 DPI. Quick reference chart for designers and printers.",
    extractive:
      "Quick DPI reference: 72 DPI = 72 px/in, 28.3 px/cm. 96 DPI = 96 px/in, 37.8 px/cm. 150 DPI = 150 px/in, 59.1 px/cm. 300 DPI = 300 px/in, 118.1 px/cm.",
  },
  "passport-photo-size": {
    title: "Passport Photo Size in Pixels: 2x2, 35x45mm, and More",
    description:
      "Passport photo size in pixels: US (2x2 inches) = 600x600px at 300 DPI. UK (35x45mm) = 413x531px. Complete guide to passport and ID photo pixel dimensions worldwide.",
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

  return dedupeSources(sources);
}
