import type { ReferenceSource } from "@/lib/page-seo";

interface ReferenceSourcesProps {
  sources: ReferenceSource[];
}

export function ReferenceSources({ sources }: ReferenceSourcesProps) {
  if (sources.length === 0) return null;

  return (
    <section id="reference-sources" className="mt-12">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-700">
        Sources
      </p>
      <h2 className="mt-3 text-2xl font-semibold text-neutral-900">Reference Sources</h2>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-600">
        These external references support the page&apos;s conversion formulas, resolution guidance,
        and unit explanations.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {sources.map((source) => (
          <a
            key={source.href}
            href={source.href}
            target="_blank"
            rel="noreferrer"
            className="tool-card group"
          >
            <h3 className="text-base font-semibold text-neutral-900 group-hover:text-primary-700">
              {source.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-500">
              {source.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
