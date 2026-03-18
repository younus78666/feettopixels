import Link from "next/link";

interface RelatedTool {
  name: string;
  description: string;
  href: string;
  icon: string;
}

interface RelatedToolsProps {
  tools: RelatedTool[];
  label?: string;
}

export function RelatedTools({ tools, label }: RelatedToolsProps) {
  return (
    <div className="mt-12">
      <h2 className="mb-6 text-2xl font-semibold text-neutral-900">
        {label || "Related Converters"}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="tool-card group flex items-start gap-3"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-lg text-primary-600 transition-colors group-hover:bg-primary-100">
              {tool.icon}
            </span>
            <div>
              <p className="text-sm font-semibold text-neutral-900 group-hover:text-primary-700">
                {tool.name}
              </p>
              <p className="mt-0.5 text-xs leading-relaxed text-neutral-500">
                {tool.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
