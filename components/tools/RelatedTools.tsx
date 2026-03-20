import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { ToolIcon, getToolVisualMeta } from "./ToolIcon";
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
            <ToolIcon href={tool.href} name={tool.name} className="h-11 w-11 shrink-0 rounded-xl" />
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-700">
                {getToolVisualMeta(tool.href, tool.name).label}
              </p>
              <h3 className="mt-1 text-sm font-semibold text-neutral-900 group-hover:text-primary-700">
                {tool.name}
              </h3>
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
