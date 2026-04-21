export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  heading: string;
  links: NavLink[];
}

export interface NavDropdown {
  label: string;
  groups: NavGroup[];
}

export interface NavItem {
  label: string;
  href: string;
}

export type NavEntry = NavDropdown | NavItem;

export function isDropdown(entry: NavEntry): entry is NavDropdown {
  return "groups" in entry;
}

export const toolsDropdown: NavDropdown = {
  label: "Tools",
  groups: [
    {
      heading: "Physical Converters",
      links: [
        {
          label: "Pixels to Inches",
          href: "/pixels-to-inches",
          description: "Convert px to inches with DPI control",
        },
        {
          label: "Inches to Pixels",
          href: "/inches-to-pixels",
          description: "Convert inches to px at any DPI",
        },
        {
          label: "CM to Pixels",
          href: "/cm-to-pixels",
          description: "Convert centimeters to px",
        },
        {
          label: "Pixels to CM",
          href: "/pixels-to-cm",
          description: "Convert px to centimeters",
        },
        {
          label: "MM to Pixels",
          href: "/mm-to-pixels",
          description: "Convert millimeters to px",
        },
        {
          label: "Pixels to MM",
          href: "/pixels-to-mm",
          description: "Convert px to millimeters",
        },
        {
          label: "Feet to Pixels",
          href: "/feet-to-pixels",
          description: "Convert feet to px for large format",
        },
        {
          label: "Pixels to Feet",
          href: "/pixels-to-feet",
          description: "Convert px to feet",
        },
      ],
    },
    {
      heading: "CSS Converters",
      links: [
        {
          label: "PX to REM",
          href: "/px-to-rem",
          description: "Convert pixels to rem units",
        },
        {
          label: "REM to PX",
          href: "/rem-to-px",
          description: "Convert rem units back to pixels",
        },
        {
          label: "PX to EM",
          href: "/px-to-em",
          description: "Convert pixels to em units",
        },
        {
          label: "EM to PX",
          href: "/em-to-px",
          description: "Convert em units back to pixels",
        },
        {
          label: "PX to PT",
          href: "/px-to-pt",
          description: "Convert pixels to typographic points",
        },
        {
          label: "PT to PX",
          href: "/pt-to-px",
          description: "Convert points back to pixels",
        },
        {
          label: "PX to VW",
          href: "/px-to-vw",
          description: "Convert pixels to viewport width",
        },
        {
          label: "VW to PX",
          href: "/vw-to-px",
          description: "Convert viewport width back to pixels",
        },
      ],
    },
    {
      heading: "Calculators",
      links: [
        {
          label: "DPI Calculator",
          href: "/dpi-calculator",
          description: "Calculate dots per inch",
        },
        {
          label: "PPI Calculator",
          href: "/ppi-calculator",
          description: "Calculate pixels per inch",
        },
        {
          label: "DPI Converter",
          href: "/dpi-converter",
          description: "Convert between DPI settings",
        },
        {
          label: "Aspect Ratio Calculator",
          href: "/aspect-ratio-calculator",
          description: "Find and convert aspect ratios",
        },
        {
          label: "Image Size Calculator",
          href: "/image-size-calculator",
          description: "Calculate dimensions and file size",
        },
        {
          label: "Screen Resolution Checker",
          href: "/screen-resolution-checker",
          description: "Check your screen resolution",
        },
        {
          label: "Image DPI Checker",
          href: "/image-dpi-checker",
          description: "Check DPI of any image",
        },
        {
          label: "Pixel Ruler",
          href: "/pixel-ruler",
          description: "Measure pixels on screen",
        },
        {
          label: "Megapixel Calculator",
          href: "/megapixel-calculator",
          description: "Convert megapixels to resolution",
        },
        {
          label: "Pixel Converter",
          href: "/pixel-converter",
          description: "All-in-one converter hub",
        },
      ],
    },
  ],
};

export const learnDropdown: NavDropdown = {
  label: "Learn",
  groups: [
    {
      heading: "Guides",
      links: [
        {
          label: "What is DPI?",
          href: "/what-is-dpi",
          description: "Understanding dots per inch",
        },
        {
          label: "What is PPI?",
          href: "/what-is-ppi",
          description: "Understanding pixels per inch",
        },
        {
          label: "What is a Pixel?",
          href: "/what-is-a-pixel",
          description: "The building block of digital images",
        },
        {
          label: "DPI vs PPI",
          href: "/dpi-vs-ppi",
          description: "Key differences explained",
        },
        {
          label: "Pixels Per Inch",
          href: "/pixels-per-inch",
          description: "Complete PPI reference guide",
        },
        {
          label: "EM vs REM",
          href: "/em-vs-rem",
          description: "CSS units comparison guide",
        },
      ],
    },
    {
      heading: "References",
      links: [
        {
          label: "Best DPI for Printing",
          href: "/best-dpi-for-printing",
          description: "Resolution guide for sharp prints",
        },
        {
          label: "Best DPI for Web",
          href: "/best-dpi-for-web",
          description: "Web image resolution guide",
        },
        {
          label: "Paper Sizes in Pixels",
          href: "/paper-sizes-in-pixels",
          description: "A4, Letter, A3 at every DPI",
        },
        {
          label: "Standard Image Sizes",
          href: "/standard-image-sizes",
          description: "4x6, 5x7, 8x10 in pixels",
        },
        {
          label: "Social Media Image Sizes",
          href: "/social-media-image-sizes",
          description: "Instagram, Facebook, YouTube sizes",
        },
        {
          label: "Common Resolutions",
          href: "/common-resolutions",
          description: "1080p, 4K, 5K explained",
        },
        {
          label: "DPI Conversion Table",
          href: "/dpi-conversion-table",
          description: "Quick reference chart",
        },
        {
          label: "Passport Photo Size",
          href: "/passport-photo-size",
          description: "Photo sizes for passports and IDs",
        },
        {
          label: "Pixels Per Foot",
          href: "/pixels-per-foot",
          description: "Pixel density per foot at any DPI",
        },
        {
          label: "Pixels Per CM",
          href: "/pixels-per-cm",
          description: "Pixel density per centimeter",
        },
        {
          label: "Pixels Per MM",
          href: "/pixels-per-mm",
          description: "Pixel density per millimeter",
        },
      ],
    },
  ],
};

export const navigation: NavEntry[] = [
  toolsDropdown,
  learnDropdown,
  { label: "About", href: "/about" },
];

/** Hub/pillar pages, surfaced on homepage + cross-links, not in main nav dropdowns */
export const pillarPages = [
  {
    label: "Pixel Converter Hub",
    href: "/pixel-converter",
    description: "All-in-one unit conversion",
  },
  {
    label: "Learn Hub",
    href: "/learn",
    description: "Guides, comparisons, references",
  },
  {
    label: "CSS Units",
    href: "/css-units",
    description: "PX, REM, EM, PT, VW converters",
  },
] as const;

/** Flat lists used in the footer */
export const footerPhysical = toolsDropdown.groups[0].links.slice(0, 4);
export const footerCSS = toolsDropdown.groups[1].links;
export const footerCalculators = toolsDropdown.groups[2].links.slice(0, 4);
export const footerLearn = learnDropdown.groups[0].links.slice(0, 4);
