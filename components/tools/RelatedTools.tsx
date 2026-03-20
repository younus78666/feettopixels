import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/content/site-config";

interface RelatedTool {
  name: string;
  description: string;
  href: string;
  icon: string;
}

interface RelatedToolsProps {
  tools: RelatedTool[];
  label?: string;
  sectionId?: string;
}

function getToolBadge(icon: string, name: string): string {
  const cleanedIcon = icon
    .normalize("NFKD")
    .replace(/[^\x20-\x7E]/g, "")
    .replace(/[^A-Za-z0-9]/g, "")
    .toUpperCase();

  if (cleanedIcon) {
    return cleanedIcon.slice(0, 4);
  }

  const initials = name
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("");

  return initials || "PX";
}

export function RelatedTools({
  tools,
  label,
  sectionId = "related-tools",
}: RelatedToolsProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: tools.map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: tool.name,
      url: `${siteConfig.url}${tool.href}`,
    })),
  };

  return (
    <section id={sectionId} className="mt-12">
      {tools.length > 0 && <JsonLd data={jsonLd} />}
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
            <span className="mono-display flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-xs font-semibold uppercase tracking-[0.16em] text-primary-700 transition-colors group-hover:bg-primary-100">
              {getToolBadge(tool.icon, tool.name)}
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
    </section>
  );
}
