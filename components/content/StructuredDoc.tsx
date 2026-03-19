import { Fragment } from "react";
import type { LocalizedSection } from "@/lib/content/doc-types";

interface StructuredDocProps {
  sections: LocalizedSection[];
}

function renderInlineText(value: string) {
  return value;
}

export function StructuredDoc({ sections }: StructuredDocProps) {
  return (
    <>
      {sections.map((section) => (
        <Fragment key={section.id}>
          <h2 id={section.id}>{section.title}</h2>

          {section.paragraphs?.map((paragraph, index) => (
            <p key={`${section.id}-p-${index}`}>{renderInlineText(paragraph)}</p>
          ))}

          {section.list && section.list.length > 0 ? (
            <ul>
              {section.list.map((item, index) => (
                <li key={`${section.id}-li-${index}`}>{renderInlineText(item)}</li>
              ))}
            </ul>
          ) : null}

          {section.table ? (
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
