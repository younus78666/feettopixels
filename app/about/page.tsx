import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "About FeetToPixels — Free DPI-Aware Pixel Conversion Tools",
  description:
    "FeetToPixels provides free, accurate pixel conversion tools with DPI awareness. Learn about our mission, commitment to precision, and the team behind the tools.",
  openGraph: {
    title: "About FeetToPixels",
    description: "Free, accurate pixel conversion tools with DPI awareness for designers and developers.",
    url: "/about",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

export default function AboutPage() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    logo: `${siteConfig.url}/icon.svg`,
  };

  return (
    <Container className="py-8 md:py-12">
      <JsonLd data={orgJsonLd} />
      <Breadcrumbs items={breadcrumbs} />

      <div className="mx-auto max-w-3xl">
        <h1 className="mb-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          About FeetToPixels
        </h1>

        <div className="prose prose-neutral max-w-none">
          <p className="text-lg leading-relaxed text-neutral-600">
            FeetToPixels is a free suite of pixel conversion tools built for designers, developers, photographers, and anyone who works with digital images. Every tool is DPI-aware, giving you accurate results whether you are designing for screen or print.
          </p>

          <h2>Our Mission</h2>
          <p>
            We believe unit conversion should be instant, accurate, and free. Most online converters ignore DPI entirely, producing misleading results. FeetToPixels was built to solve that problem. Every conversion on our platform accounts for DPI, so you always know the true physical or digital dimensions of your work.
          </p>

          <h2>Why DPI Matters</h2>
          <p>
            A pixel has no fixed physical size. Its real-world dimension depends on the DPI (dots per inch) of the output device. An image that is 1000 pixels wide could be 10.4 inches on a 96 DPI screen, 3.3 inches in a 300 DPI print, or 13.9 inches on a 72 DPI banner. Without DPI context, pixel-to-physical conversions are meaningless. Our tools always include DPI as a variable, ensuring you get the right answer for your specific use case.
          </p>

          <h2>What We Offer</h2>
          <ul>
            <li><strong>Physical converters:</strong> Convert between pixels and inches, centimeters, millimeters, and feet with adjustable DPI.</li>
            <li><strong>CSS converters:</strong> Convert pixels to rem, em, points, and viewport width units for responsive web design.</li>
            <li><strong>Calculators:</strong> DPI calculator, PPI calculator, aspect ratio calculator, and image size calculator.</li>
            <li><strong>Reference guides:</strong> In-depth articles on DPI, PPI, resolution, and image sizing for print and web.</li>
          </ul>

          <h2>Accuracy and Trust</h2>
          <p>
            Every formula on FeetToPixels uses mathematically exact conversion factors. One inch is exactly 25.4 millimeters. One foot is exactly 12 inches. We use IEEE 754 double-precision arithmetic and display results with appropriate decimal precision. Our reference tables have been cross-verified against ISO 216 (paper sizes), US Government passport requirements, and industry-standard DPI specifications.
          </p>

          <h2>Open and Free</h2>
          <p>
            All tools on FeetToPixels are free to use, with no sign-up required. We support our platform through non-intrusive advertising. We do not sell user data, and our tools run entirely in your browser &mdash; no images or data are uploaded to our servers.
          </p>

          <div className="mt-8 rounded-xl border border-primary-200 bg-primary-50 p-6 text-center not-prose">
            <p className="mb-3 text-base font-semibold text-neutral-900">
              Start converting
            </p>
            <Link
              href="/pixel-converter"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-700"
            >
              Explore All Tools
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
