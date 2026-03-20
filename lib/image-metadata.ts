export type ImageDensityStatus = "dpi" | "unitless" | "missing" | "unsupported";

export type ImageDensitySource =
  | "jpeg-exif"
  | "jpeg-jfif"
  | "png-phys"
  | "bmp-header"
  | "webp-exif";

export interface ImageDensityMetadata {
  status: ImageDensityStatus;
  source: ImageDensitySource | null;
  sourceLabel: string;
  message: string;
  xDpi: number | null;
  yDpi: number | null;
}

type ImageFormat =
  | "jpeg"
  | "png"
  | "webp"
  | "bmp"
  | "gif"
  | "svg"
  | "unknown";

const EXIF_HEADER = "Exif\0\0";
const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
const METERS_PER_INCH = 0.0254;
const CENTIMETERS_PER_INCH = 2.54;

function readAscii(view: DataView, offset: number, length: number): string {
  if (offset < 0 || offset + length > view.byteLength) {
    return "";
  }

  let result = "";

  for (let index = 0; index < length; index += 1) {
    result += String.fromCharCode(view.getUint8(offset + index));
  }

  return result;
}

function almostEqual(a: number, b: number, tolerance = 0.01): boolean {
  return Math.abs(a - b) <= tolerance;
}

function pixelsPerMeterToDpi(value: number): number {
  return value * METERS_PER_INCH;
}

function dpiResult(
  source: ImageDensitySource,
  sourceLabel: string,
  xDpi: number,
  yDpi: number,
  message: string,
): ImageDensityMetadata {
  return {
    status: "dpi",
    source,
    sourceLabel,
    message,
    xDpi,
    yDpi,
  };
}

function unitlessResult(
  source: ImageDensitySource,
  sourceLabel: string,
  message: string,
): ImageDensityMetadata {
  return {
    status: "unitless",
    source,
    sourceLabel,
    message,
    xDpi: null,
    yDpi: null,
  };
}

function missingResult(message = "No embedded DPI metadata found."): ImageDensityMetadata {
  return {
    status: "missing",
    source: null,
    sourceLabel: "No metadata",
    message,
    xDpi: null,
    yDpi: null,
  };
}

function unsupportedResult(message: string): ImageDensityMetadata {
  return {
    status: "unsupported",
    source: null,
    sourceLabel: "Unsupported metadata",
    message,
    xDpi: null,
    yDpi: null,
  };
}

function sniffImageFormat(view: DataView, mimeType: string): ImageFormat {
  const normalizedType = mimeType.toLowerCase();

  if (normalizedType.includes("jpeg") || normalizedType.includes("jpg")) {
    return "jpeg";
  }

  if (normalizedType.includes("png")) {
    return "png";
  }

  if (normalizedType.includes("webp")) {
    return "webp";
  }

  if (normalizedType.includes("bmp")) {
    return "bmp";
  }

  if (normalizedType.includes("gif")) {
    return "gif";
  }

  if (normalizedType.includes("svg")) {
    return "svg";
  }

  if (
    PNG_SIGNATURE.every((value, index) => view.byteLength > index && view.getUint8(index) === value)
  ) {
    return "png";
  }

  if (view.byteLength >= 3 && view.getUint8(0) === 0xff && view.getUint8(1) === 0xd8) {
    return "jpeg";
  }

  if (
    view.byteLength >= 12 &&
    readAscii(view, 0, 4) === "RIFF" &&
    readAscii(view, 8, 4) === "WEBP"
  ) {
    return "webp";
  }

  if (view.byteLength >= 2 && readAscii(view, 0, 2) === "BM") {
    return "bmp";
  }

  if (view.byteLength >= 6) {
    const gifHeader = readAscii(view, 0, 6);

    if (gifHeader === "GIF87a" || gifHeader === "GIF89a") {
      return "gif";
    }
  }

  return "unknown";
}

function parseTiffResolution(
  view: DataView,
  tiffOffset: number,
  byteLength: number,
  source: ImageDensitySource,
  sourceLabel: string,
): ImageDensityMetadata {
  if (tiffOffset < 0 || tiffOffset + 8 > view.byteLength || byteLength < 8) {
    return missingResult();
  }

  const byteOrder = readAscii(view, tiffOffset, 2);

  if (byteOrder !== "II" && byteOrder !== "MM") {
    return missingResult();
  }

  const littleEndian = byteOrder === "II";
  const fortyTwo = view.getUint16(tiffOffset + 2, littleEndian);

  if (fortyTwo !== 42) {
    return missingResult();
  }

  const ifd0Offset = view.getUint32(tiffOffset + 4, littleEndian);
  const ifd0Pointer = tiffOffset + ifd0Offset;

  if (ifd0Offset <= 0 || ifd0Pointer + 2 > view.byteLength || ifd0Offset >= byteLength) {
    return missingResult();
  }

  const entryCount = view.getUint16(ifd0Pointer, littleEndian);
  let xResolution: number | null = null;
  let yResolution: number | null = null;
  let resolutionUnit: number | null = null;

  for (let entryIndex = 0; entryIndex < entryCount; entryIndex += 1) {
    const entryOffset = ifd0Pointer + 2 + entryIndex * 12;

    if (entryOffset + 12 > view.byteLength) {
      break;
    }

    const tag = view.getUint16(entryOffset, littleEndian);
    const type = view.getUint16(entryOffset + 2, littleEndian);
    const count = view.getUint32(entryOffset + 4, littleEndian);
    const valueOffset = view.getUint32(entryOffset + 8, littleEndian);

    if ((tag === 0x011a || tag === 0x011b) && type === 5 && count === 1) {
      const rationalOffset = tiffOffset + valueOffset;

      if (rationalOffset + 8 > view.byteLength) {
        continue;
      }

      const numerator = view.getUint32(rationalOffset, littleEndian);
      const denominator = view.getUint32(rationalOffset + 4, littleEndian);

      if (denominator === 0) {
        continue;
      }

      const value = numerator / denominator;

      if (tag === 0x011a) {
        xResolution = value;
      } else {
        yResolution = value;
      }
    }

    if (tag === 0x0128 && type === 3 && count >= 1) {
      resolutionUnit = view.getUint16(entryOffset + 8, littleEndian);
    }
  }

  if (xResolution === null && yResolution === null) {
    return missingResult();
  }

  const xValue = xResolution ?? yResolution;
  const yValue = yResolution ?? xResolution;

  if (xValue === null || yValue === null) {
    return missingResult();
  }

  if (resolutionUnit === 2) {
    return dpiResult(
      source,
      sourceLabel,
      xValue,
      yValue,
      `Read from ${sourceLabel}.`,
    );
  }

  if (resolutionUnit === 3) {
    return dpiResult(
      source,
      sourceLabel,
      xValue * CENTIMETERS_PER_INCH,
      yValue * CENTIMETERS_PER_INCH,
      `Read from ${sourceLabel}. Values were converted from pixels per centimeter.`,
    );
  }

  return unitlessResult(
    source,
    sourceLabel,
    `${sourceLabel} stores density values, but it does not define inches or centimeters.`,
  );
}

function parseExifPayload(
  view: DataView,
  offset: number,
  byteLength: number,
  source: ImageDensitySource,
  sourceLabel: string,
): ImageDensityMetadata {
  const hasExifHeader = readAscii(view, offset, 6) === EXIF_HEADER;
  const tiffOffset = hasExifHeader ? offset + 6 : offset;
  const availableLength = hasExifHeader ? byteLength - 6 : byteLength;

  return parseTiffResolution(view, tiffOffset, availableLength, source, sourceLabel);
}

function parseJpegDensity(view: DataView): ImageDensityMetadata {
  let offset = 2;
  let jfifResult: ImageDensityMetadata | null = null;

  while (offset < view.byteLength) {
    if (view.getUint8(offset) !== 0xff) {
      offset += 1;
      continue;
    }

    while (offset < view.byteLength && view.getUint8(offset) === 0xff) {
      offset += 1;
    }

    if (offset >= view.byteLength) {
      break;
    }

    const marker = view.getUint8(offset);
    offset += 1;

    if (marker === 0xd9 || marker === 0xda) {
      break;
    }

    if (marker >= 0xd0 && marker <= 0xd7) {
      continue;
    }

    if (offset + 2 > view.byteLength) {
      break;
    }

    const segmentLength = view.getUint16(offset, false);
    offset += 2;

    if (segmentLength < 2) {
      break;
    }

    const dataOffset = offset;
    const dataLength = segmentLength - 2;

    if (dataOffset + dataLength > view.byteLength) {
      break;
    }

    if (marker === 0xe0 && dataLength >= 12 && readAscii(view, dataOffset, 5) === "JFIF\0") {
      const units = view.getUint8(dataOffset + 7);
      const xDensity = view.getUint16(dataOffset + 8, false);
      const yDensity = view.getUint16(dataOffset + 10, false);

      if (units === 1 && xDensity > 0 && yDensity > 0) {
        jfifResult = dpiResult(
          "jpeg-jfif",
          "JPEG JFIF metadata",
          xDensity,
          yDensity,
          "Read from JPEG JFIF metadata.",
        );
      } else if (units === 2 && xDensity > 0 && yDensity > 0) {
        jfifResult = dpiResult(
          "jpeg-jfif",
          "JPEG JFIF metadata",
          xDensity * CENTIMETERS_PER_INCH,
          yDensity * CENTIMETERS_PER_INCH,
          "Read from JPEG JFIF metadata and converted from pixels per centimeter.",
        );
      } else if (units === 0 && (xDensity > 0 || yDensity > 0)) {
        jfifResult = unitlessResult(
          "jpeg-jfif",
          "JPEG JFIF metadata",
          "JPEG JFIF stores density values, but this file does not define inches or centimeters.",
        );
      }
    }

    if (marker === 0xe1 && dataLength >= 6 && readAscii(view, dataOffset, 6) === EXIF_HEADER) {
      const exifResult = parseExifPayload(
        view,
        dataOffset,
        dataLength,
        "jpeg-exif",
        "JPEG EXIF metadata",
      );

      if (exifResult.status !== "missing") {
        return exifResult;
      }
    }

    offset += dataLength;
  }

  return jfifResult ?? missingResult("No JPEG EXIF or JFIF DPI metadata was found.");
}

function parsePngDensity(view: DataView): ImageDensityMetadata {
  let offset = 8;

  while (offset + 8 <= view.byteLength) {
    const chunkLength = view.getUint32(offset, false);
    const chunkType = readAscii(view, offset + 4, 4);
    const dataOffset = offset + 8;

    if (dataOffset + chunkLength + 4 > view.byteLength) {
      break;
    }

    if (chunkType === "pHYs" && chunkLength >= 9) {
      const xPixelsPerUnit = view.getUint32(dataOffset, false);
      const yPixelsPerUnit = view.getUint32(dataOffset + 4, false);
      const unitSpecifier = view.getUint8(dataOffset + 8);

      if (unitSpecifier === 1 && xPixelsPerUnit > 0 && yPixelsPerUnit > 0) {
        return dpiResult(
          "png-phys",
          "PNG pHYs metadata",
          pixelsPerMeterToDpi(xPixelsPerUnit),
          pixelsPerMeterToDpi(yPixelsPerUnit),
          "Read from PNG pHYs metadata.",
        );
      }

      if (xPixelsPerUnit > 0 || yPixelsPerUnit > 0) {
        return unitlessResult(
          "png-phys",
          "PNG pHYs metadata",
          "PNG pHYs metadata is present, but it does not define a physical unit.",
        );
      }
    }

    offset += chunkLength + 12;
  }

  return missingResult("No PNG pHYs DPI metadata was found.");
}

function parseBmpDensity(view: DataView): ImageDensityMetadata {
  if (view.byteLength < 54) {
    return missingResult();
  }

  const dibHeaderSize = view.getUint32(14, true);

  if (dibHeaderSize < 40) {
    return missingResult("This BMP file does not use a header that stores pixels-per-meter values.");
  }

  const xPixelsPerMeter = view.getInt32(38, true);
  const yPixelsPerMeter = view.getInt32(42, true);

  if (xPixelsPerMeter > 0 && yPixelsPerMeter > 0) {
    return dpiResult(
      "bmp-header",
      "BMP header",
      pixelsPerMeterToDpi(xPixelsPerMeter),
      pixelsPerMeterToDpi(yPixelsPerMeter),
      "Read from the BMP header.",
    );
  }

  return missingResult("No BMP pixels-per-meter metadata was found.");
}

function parseWebpDensity(view: DataView): ImageDensityMetadata {
  let offset = 12;

  while (offset + 8 <= view.byteLength) {
    const chunkType = readAscii(view, offset, 4);
    const chunkLength = view.getUint32(offset + 4, true);
    const dataOffset = offset + 8;

    if (dataOffset + chunkLength > view.byteLength) {
      break;
    }

    if (chunkType === "EXIF") {
      const exifResult = parseExifPayload(
        view,
        dataOffset,
        chunkLength,
        "webp-exif",
        "WebP EXIF metadata",
      );

      if (exifResult.status !== "missing") {
        return exifResult;
      }
    }

    offset = dataOffset + chunkLength + (chunkLength % 2);
  }

  return missingResult("No WebP EXIF DPI metadata was found.");
}

export async function readImageDensityMetadata(file: File): Promise<ImageDensityMetadata> {
  try {
    const buffer = await file.arrayBuffer();
    const view = new DataView(buffer);
    const format = sniffImageFormat(view, file.type);

    if (format === "jpeg") {
      return parseJpegDensity(view);
    }

    if (format === "png") {
      return parsePngDensity(view);
    }

    if (format === "bmp") {
      return parseBmpDensity(view);
    }

    if (format === "webp") {
      return parseWebpDensity(view);
    }

    if (format === "gif") {
      return unsupportedResult("GIF files do not normally include print DPI metadata.");
    }

    if (format === "svg") {
      return unsupportedResult("SVG files use vector dimensions instead of embedded DPI metadata.");
    }

    return missingResult();
  } catch {
    return missingResult("Could not read embedded DPI metadata from this file.");
  }
}

export function formatDpiPair(xDpi: number | null, yDpi: number | null): string {
  if (xDpi === null && yDpi === null) {
    return "Unknown";
  }

  if (xDpi === null) {
    return `${yDpi?.toFixed(2)} DPI`;
  }

  if (yDpi === null) {
    return `${xDpi.toFixed(2)} DPI`;
  }

  if (almostEqual(xDpi, yDpi)) {
    return `${xDpi.toFixed(2)} DPI`;
  }

  return `${xDpi.toFixed(2)} x ${yDpi.toFixed(2)} DPI`;
}
