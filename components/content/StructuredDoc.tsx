import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import type { LocalizedSection } from "@/lib/content/doc-types";
import type { Locale } from "@/lib/i18n";
import { localizeNavHref } from "@/lib/nav-active";

interface StructuredDocProps {
  sections: LocalizedSection[];
  locale?: Locale;
  /** Slug of the current page, so self-references aren't auto-linked. */
  currentSlug?: string;
}

/**
 * First occurrence (per document render) of key entity terms is
 * converted into a link to its definition page. Koray Gap 5 -
 * in-prose entity hyperlinking improves semantic connectivity.
 */
interface EntityDefinition {
  pattern: RegExp;
  href: string;
  key: string;
  slug: string;
}

const entities: EntityDefinition[] = [
  { pattern: /\b(pixels?)\b/, href: "/what-is-a-pixel", key: "pixel", slug: "what-is-a-pixel" },
  { pattern: /\b(DPI)\b/, href: "/what-is-dpi", key: "dpi", slug: "what-is-dpi" },
  { pattern: /\b(PPI)\b/, href: "/what-is-ppi", key: "ppi", slug: "what-is-ppi" },
];

function linkifyText(
  text: string,
  locale: Locale,
  linkedTerms: Set<string>,
  currentSlug: string,
): ReactNode[] {
  let bestMatch: { entity: EntityDefinition; match: RegExpExecArray } | null = null;

  for (const entity of entities) {
    if (linkedTerms.has(entity.key)) continue;
    if (entity.slug === currentSlug) continue;
    const regex = new RegExp(entity.pattern.source, entity.pattern.flags);
    const m = regex.exec(text);
    if (!m) continue;
    if (!bestMatch || m.index < bestMatch.match.index) {
      bestMatch = { entity, match: m };
    }
  }

  if (!bestMatch) return [text];

  const { entity, match } = bestMatch;
  const matched = match[0];
  const before = text.slice(0, match.index);
  const after = text.slice(match.index + matched.length);

  linkedTerms.add(entity.key);

  return [
    before,
    <Link
      key={`${entity.key}-${match.index}`}
      href={localizeNavHref(entity.href, locale)}
      className="entity-link"
    >
      {matched}
    </Link>,
    ...linkifyText(after, locale, linkedTerms, currentSlug),
  ];
}

function renderInlineText(
  value: string,
  locale: Locale,
  linkedTerms: Set<string>,
  currentSlug: string,
): ReactNode {
  const nodes = linkifyText(value, locale, linkedTerms, currentSlug);
  return nodes.length === 1 ? nodes[0] : <>{nodes.map((n, i) => <Fragment key={i}>{n}</Fragment>)}</>;
}

export function StructuredDoc({
  sections,
  locale = "en",
  currentSlug = "",
}: StructuredDocProps) {
  // Shared set across the whole doc, each entity links only once per render.
  const linkedTerms = new Set<string>();

  return (
    <>
      {sections.map((section) => (
        <Fragment key={section.id}>
          <h2 id={section.id}>{section.title}</h2>

          {section.paragraphs?.map((paragraph, index) => (
            <p key={`${section.id}-p-${index}`}>
              {renderInlineText(paragraph, locale, linkedTerms, currentSlug)}
            </p>
          ))}

          {section.list && section.list.length > 0 ? (
            <ul>
              {section.list.map((item, index) => (
                <li key={`${section.id}-li-${index}`}>
                  {renderInlineText(item, locale, linkedTerms, currentSlug)}
                </li>
              ))}
            </ul>
          ) : null}

          {section.table ? (
            <div className="table-scroll-shell rounded-xl border border-neutral-200">
              <table>
                <thead>
                  <tr>
                    {section.table.headers.map((header, index) => (
                      <th key={`${section.id}-th-${index}`}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.rows.map((row, rowIndex) => (
                    <tr key={`${section.id}-row-${rowIndex}`}>
                      {row.map((cell, cellIndex) => (
                        <td key={`${section.id}-cell-${rowIndex}-${cellIndex}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}

          {section.code ? (
            <pre>
              <code>{section.code}</code>
            </pre>
          ) : null}
        </Fragment>
      ))}
    </>
  );
}
