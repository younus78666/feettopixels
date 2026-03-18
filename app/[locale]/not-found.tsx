import Link from "next/link";
import { Container } from "@/components/ui/Container";

const popularTools = [
  { label: "Pixels to Inches", href: "/pixels-to-inches" },
  { label: "CM to Pixels", href: "/cm-to-pixels" },
  { label: "PX to REM", href: "/px-to-rem" },
  { label: "DPI Calculator", href: "/dpi-calculator" },
  { label: "Image Size Calculator", href: "/image-size-calculator" },
  { label: "PPI Calculator", href: "/ppi-calculator" },
];

export default function NotFound() {
  return (
    <Container className="py-16 md:py-24">
      <div className="mx-auto max-w-lg text-center">
        {/* 404 badge */}
        <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-primary-50 px-6 py-3">
          <span className="mono-display text-5xl font-bold text-primary-600">404</span>
        </div>

        <h1 className="mb-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mb-8 text-base leading-relaxed text-neutral-600">
          The page you are looking for does not exist or has been moved. Try one of our popular tools below, or head back to the homepage.
        </p>

        {/* Popular tools grid */}
        <div className="mb-8 grid grid-cols-2 gap-3 text-left">
          {popularTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="tool-card group flex items-center gap-2 px-4 py-3"
            >
              <svg className="h-4 w-4 shrink-0 text-primary-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
              <span className="text-sm font-medium text-neutral-700 group-hover:text-primary-700">
                {tool.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Back to home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-700"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back to Homepage
        </Link>
      </div>
    </Container>
  );
}
