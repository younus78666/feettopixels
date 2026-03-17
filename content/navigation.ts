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
          href: "/tools/pixels-to-inches",
          description: "Convert px to inches with DPI control",
        },
        {
          label: "Pixels to Centimeters",
          href: "/tools/pixels-to-cm",
          description: "Convert px to cm for print layouts",
        },
        {
          label: "Pixels to Millimeters",
          href: "/tools/pixels-to-mm",
          description: "Precise px to mm conversion",
        },
        {
          label: "Pixels to Feet",
          href: "/tools/pixels-to-feet",
          description: "Large format px to feet conversion",
        },
      ],
    },
    {
      heading: "CSS Converters",
      links: [
        {
          label: "Pixels to REM",
          href: "/tools/pixels-to-rem",
          description: "Convert px to rem units",
        },
        {
          label: "Pixels to EM",
          href: "/tools/pixels-to-em",
          description: "Convert px to em units",
        },
        {
          label: "Pixels to Points",
          href: "/tools/pixels-to-pt",
          description: "Convert px to typographic points",
        },
        {
          label: "Pixels to VW",
          href: "/tools/pixels-to-vw",
          description: "Convert px to viewport width units",
        },
      ],
    },
    {
      heading: "Calculators",
      links: [
        {
          label: "DPI Calculator",
          href: "/tools/dpi-calculator",
          description: "Calculate dots per inch",
        },
        {
          label: "PPI Calculator",
          href: "/tools/ppi-calculator",
          description: "Calculate pixels per inch",
        },
        {
          label: "Aspect Ratio Calculator",
          href: "/tools/aspect-ratio-calculator",
          description: "Find and convert aspect ratios",
        },
        {
          label: "Image Size Calculator",
          href: "/tools/image-size-calculator",
          description: "Calculate image dimensions and file size",
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
          href: "/learn/what-is-dpi",
          description: "Understanding dots per inch",
        },
        {
          label: "What is PPI?",
          href: "/learn/what-is-ppi",
          description: "Understanding pixels per inch",
        },
        {
          label: "What is a Pixel?",
          href: "/learn/what-is-a-pixel",
          description: "The building block of digital images",
        },
        {
          label: "DPI vs PPI",
          href: "/learn/dpi-vs-ppi",
          description: "Key differences explained",
        },
      ],
    },
    {
      heading: "References",
      links: [
        {
          label: "CSS Units Guide",
          href: "/learn/css-units-guide",
          description: "Complete reference for CSS length units",
        },
        {
          label: "Print Resolution Guide",
          href: "/learn/print-resolution-guide",
          description: "Choosing the right resolution for print",
        },
        {
          label: "Screen DPI Database",
          href: "/learn/screen-dpi-database",
          description: "DPI values for popular devices",
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

/** Flat list used in the footer */
export const footerPhysical = toolsDropdown.groups[0].links;
export const footerCSS = toolsDropdown.groups[1].links;
export const footerCalculators = toolsDropdown.groups[2].links;
export const footerLearn = [
  ...learnDropdown.groups[0].links,
  ...learnDropdown.groups[1].links,
];
