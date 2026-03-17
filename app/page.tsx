import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { toolsDropdown } from "@/content/navigation";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const allTools = toolsDropdown.groups.flatMap((g) => g.links);

  return (
    <>
      {/* Hero */}
      <SectionWrapper className="pt-16 pb-12 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-600">
              Free Online Tools
            </p>
            <h1 className="gradient-text">
              Pixel Conversions,
              <br className="hidden sm:block" /> Made Simple
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-neutral-500">
              Convert between pixels, inches, centimeters, rem, em, and more.
              Every tool is DPI-aware and built for designers and developers.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/pixel-converter"
                className="inline-flex items-center justify-center font-medium rounded-lg bg-primary-600 text-white hover:bg-primary-700 shadow-sm h-12 px-6 text-base transition-colors"
              >
                Browse All Tools
              </Link>
              <Link
                href="/what-is-dpi"
                className="inline-flex items-center justify-center font-medium rounded-lg border border-neutral-300 text-neutral-700 hover:border-primary-400 hover:text-primary-700 hover:bg-primary-50 h-12 px-6 text-base transition-colors"
              >
                Learn About DPI
              </Link>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Tools grid */}
      <SectionWrapper alt>
        <Container>
          <h2 className="mb-8 text-center">
            Conversion Tools
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {allTools.map((tool) => (
              <Card
                key={tool.href}
                title={tool.label}
                description={tool.description}
                href={tool.href}
              />
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Value proposition */}
      <SectionWrapper>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4">Why FeetToPixels?</h2>
            <p className="mx-auto max-w-xl text-neutral-500">
              Every calculator is DPI-aware, responsive, and free to use.
              No sign-ups, no limits, no ads.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-8 sm:grid-cols-3">
            {[
              {
                title: "DPI-Aware",
                desc: "Set your target DPI for accurate physical-to-digital conversions every time.",
              },
              {
                title: "Instant Results",
                desc: "See conversions update in real time as you type. No waiting, no page reloads.",
              },
              {
                title: "Developer Friendly",
                desc: "Copy-ready CSS values, formula explanations, and conversion tables for reference.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-base font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
