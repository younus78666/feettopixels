from __future__ import annotations

import copy
import html
import json
import re
import sys
import time
from pathlib import Path
from typing import Any

from bs4 import BeautifulSoup
from deep_translator import GoogleTranslator

ROOT = Path(__file__).resolve().parents[1]
APP_DIR = ROOT / "app/[locale]"
CONTENT_DIR = ROOT / "lib/content"
SEP = "[[[SEP]]]"
LOCALES = [
    "en",
    "es",
    "fr",
    "de",
    "pt",
    "hi",
    "ja",
    "ko",
    "it",
    "nl",
    "ar",
    "tr",
    "pl",
    "id",
    "ru",
]

BLOG_PAGES = [
    "best-dpi-for-web",
    "paper-sizes-in-pixels",
    "standard-image-sizes",
    "passport-photo-size",
    "pixels-per-cm",
    "pixels-per-foot",
    "pixels-per-mm",
    "what-is-a-pixel",
    "what-is-dpi",
    "what-is-ppi",
    "dpi-conversion-table",
    "em-vs-rem",
]

CONVERTER_PAGES = {
    "aspect-ratio-calculator": "AspectRatioCalc",
    "dpi-calculator": "DpiCalculator",
    "dpi-converter": "DpiConverterTool",
    "image-dpi-checker": "DpiChecker",
    "megapixel-calculator": "MegapixelCalc",
    "ppi-calculator": "PpiCalculator",
    "pixel-ruler": "PixelRulerTool",
    "screen-resolution-checker": "ScreenChecker",
    "px-to-em": "CssConverter",
    "px-to-pt": "CssConverter",
    "px-to-rem": "CssConverter",
    "px-to-vw": "CssConverter",
}

FAQ_PATTERN = re.compile(
    r'question:\s*(?P<question>"(?:\\.|[^"])*")\s*,\s*answer:\s*(?P<answer>"(?:\\.|[^"])*"|`[\s\S]*?`)',
    re.S,
)


def slugify(value: str) -> str:
    value = html.unescape(value)
    value = re.sub(r"<[^>]+>", "", value)
    value = value.lower()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-") or "section"


def decode_js_string(token: str) -> str:
    token = token.strip()
    if token.startswith("`") and token.endswith("`"):
        return token[1:-1]
    text = json.loads(token)
    return html.unescape(text)


def clean_text(value: str) -> str:
    value = html.unescape(value)
    value = value.replace("\u00a0", " ")
    value = re.sub(r"\s+", " ", value)
    return value.strip()


def extract_faq_items(source: str) -> list[dict[str, str]]:
    faq_match = re.search(r"const faqItems = \[(?P<body>[\s\S]*?)\];", source)
    if not faq_match:
        return []

    items: list[dict[str, str]] = []
    for match in FAQ_PATTERN.finditer(faq_match.group("body")):
        items.append(
            {
                "question": clean_text(decode_js_string(match.group("question"))),
                "answer": clean_text(decode_js_string(match.group("answer"))),
            }
        )
    return items


def jsx_to_html(fragment: str) -> str:
    fragment = re.sub(r"\{/\*[\s\S]*?\*/\}", "", fragment)
    fragment = re.sub(
        r"<pre><code>\{`(?P<code>[\s\S]*?)`\}</code></pre>",
        lambda match: f"<pre><code>{html.escape(match.group('code'))}</code></pre>",
        fragment,
    )
    fragment = re.sub(r"<Link[^>]*>", "", fragment)
    fragment = fragment.replace("</Link>", "")
    fragment = re.sub(r"</?(strong|em|code)\b[^>]*>", "", fragment)
    fragment = fragment.replace("{", "").replace("}", "")
    return fragment


def ensure_section(
    sections: list[dict[str, Any]],
    current: dict[str, Any] | None,
    fallback_id: str,
    fallback_title: str,
) -> dict[str, Any]:
    if current is not None:
        return current

    section = {"id": fallback_id, "title": fallback_title, "paragraphs": []}
    sections.append(section)
    return section


def extract_sections(fragment: str) -> list[dict[str, Any]]:
    html_fragment = jsx_to_html(fragment)
    soup = BeautifulSoup(f"<div id='root'>{html_fragment}</div>", "html.parser")
    root = soup.find(id="root")
    if root is None:
        return []

    sections: list[dict[str, Any]] = []
    current: dict[str, Any] | None = None

    for child in root.children:
        if not getattr(child, "name", None):
            continue

        if child.name in {"h2", "h3"}:
            title = clean_text(child.get_text(" ", strip=True))
            current = {"id": child.get("id") or slugify(title), "title": title}
            sections.append(current)
            continue

        current = ensure_section(sections, current, "overview", "Overview")

        if child.name == "p":
            paragraph = clean_text(child.get_text(" ", strip=True))
            if paragraph:
                current.setdefault("paragraphs", []).append(paragraph)
            continue

        if child.name == "ul":
            items = [
                clean_text(item.get_text(" ", strip=True))
                for item in child.find_all("li", recursive=False)
            ]
            items = [item for item in items if item]
            if items:
                current.setdefault("list", []).extend(items)
            continue

        if child.name == "table":
            headers = [
                clean_text(header.get_text(" ", strip=True))
                for header in child.find_all("th")
            ]
            rows: list[list[str]] = []
            for row in child.find_all("tr"):
                cells = [
                    clean_text(cell.get_text(" ", strip=True))
                    for cell in row.find_all("td", recursive=False)
                ]
                if cells:
                    rows.append(cells)
            if headers and rows:
                current["table"] = {"headers": headers, "rows": rows}
            continue

        if child.name == "pre":
            code = child.get_text("\n", strip=False).strip()
            if code:
                current["code"] = html.unescape(code)

    return sections


def extract_blog_body(source: str) -> str:
    match = re.search(
        r"<BlogLayout\b[\s\S]*?>\s*(?P<body>[\s\S]*?)\s*</BlogLayout>",
        source,
    )
    if not match:
        raise ValueError("Could not find BlogLayout body")
    return match.group("body")


def extract_converter_body(source: str) -> str:
    match = re.search(
        r"content=\{\s*(?P<body><div>[\s\S]*?</div>)\s*\}",
        source,
    )
    if not match:
        raise ValueError("Could not find converter content block")
    return match.group("body")


def collect_strings(doc: dict[str, Any]) -> tuple[list[tuple[Any, ...]], list[str]]:
    paths: list[tuple[Any, ...]] = []
    values: list[str] = []

    for faq_index, item in enumerate(doc["faq"]):
        paths.append(("faq", faq_index, "question"))
        values.append(item["question"])
        paths.append(("faq", faq_index, "answer"))
        values.append(item["answer"])

    for section_index, section in enumerate(doc["sections"]):
        paths.append(("sections", section_index, "title"))
        values.append(section["title"])

        for paragraph_index, paragraph in enumerate(section.get("paragraphs", [])):
            paths.append(("sections", section_index, "paragraphs", paragraph_index))
            values.append(paragraph)

        for list_index, item in enumerate(section.get("list", [])):
            paths.append(("sections", section_index, "list", list_index))
            values.append(item)

        table = section.get("table")
        if table:
            for header_index, header in enumerate(table["headers"]):
                paths.append(
                    ("sections", section_index, "table", "headers", header_index)
                )
                values.append(header)
            for row_index, row in enumerate(table["rows"]):
                for cell_index, cell in enumerate(row):
                    paths.append(
                        (
                            "sections",
                            section_index,
                            "table",
                            "rows",
                            row_index,
                            cell_index,
                        )
                    )
                    values.append(cell)

    return paths, values


def set_nested_value(target: dict[str, Any], path: tuple[Any, ...], value: str) -> None:
    cursor: Any = target
    for key in path[:-1]:
        cursor = cursor[key]
    cursor[path[-1]] = value


def translate_doc(doc: dict[str, Any], locale: str) -> dict[str, Any]:
    if locale == "en":
        return doc

    translated = copy.deepcopy(doc)
    paths, values = collect_strings(doc)
    if not values:
        return translated

    translator = GoogleTranslator(source="en", target=locale)
    joined = SEP.join(values)

    for attempt in range(3):
        try:
            result = translator.translate(joined)
            break
        except Exception:
            if attempt == 2:
                raise
            time.sleep(2)
    else:
        raise RuntimeError(f"Translation failed for locale {locale}")

    translated_values = result.split(SEP)
    if len(translated_values) != len(values):
        translated_values = []
        for value in values:
            for attempt in range(3):
                try:
                    translated_values.append(translator.translate(value))
                    break
                except Exception:
                    if attempt == 2:
                        raise
                    time.sleep(1)

    for path, value in zip(paths, translated_values):
        set_nested_value(translated, path, clean_text(value))

    return translated


def write_content_file(slug: str, doc_map: dict[str, Any]) -> None:
    path = CONTENT_DIR / f"{slug}.ts"
    payload = json.dumps(doc_map, ensure_ascii=False, indent=2)
    path.write_text(
        'import type { LocalizedDocMap } from "./doc-types";\n\n'
        f"export const content: LocalizedDocMap = {payload};\n",
        encoding="utf-8",
        newline="\n",
    )


def add_doc_imports(source: str, slug: str) -> str:
    if 'StructuredDoc' in source:
        return source

    insert_after = None
    for candidate in [
        'import { getBreadcrumbs, getRelatedTools } from "@/lib/content-utils";\n',
        'import { getBreadcrumbs } from "@/lib/content-utils";\n',
    ]:
        if candidate in source:
            insert_after = candidate
            break

    if insert_after is None:
        raise ValueError("Could not find content-utils import")

    extra = (
        'import { StructuredDoc } from "@/components/content/StructuredDoc";\n'
        'import { getLocalizedDoc } from "@/lib/content/doc-types";\n'
        f'import {{ content }} from "@/lib/content/{slug}";\n'
    )
    return source.replace(insert_after, insert_after + extra)


def patch_blog_route(path: Path, slug: str) -> None:
    source = path.read_text(encoding="utf-8")
    source = re.sub(r'import Link from "next/link";\n', "", source)
    source = re.sub(r"\nconst toc = \[(?:[\s\S]*?)\];\n", "\n", source)
    source = re.sub(r"\nconst faqItems = \[(?:[\s\S]*?)\];\n", "\n", source)
    source = add_doc_imports(source, slug)
    source = source.replace(
        "  const dict = getDictionary(validLocale);\n",
        "  const dict = getDictionary(validLocale);\n"
        "  const doc = getLocalizedDoc(content, validLocale);\n"
        "  const toc = doc.sections.map((section) => ({ id: section.id, label: section.title }));\n",
        1,
    )
    source = source.replace("faqItems={faqItems}", "faqItems={doc.faq}")
    source = re.sub(
        r"(<BlogLayout\b[\s\S]*?>)\s*[\s\S]*?(\s*</BlogLayout>)",
        r"\1\n      <StructuredDoc sections={doc.sections} />\n    \2",
        source,
        count=1,
    )
    path.write_text(source, encoding="utf-8", newline="\n")


def patch_converter_route(path: Path, slug: str, component_name: str) -> None:
    source = path.read_text(encoding="utf-8")
    source = re.sub(r'import Link from "next/link";\n', "", source)
    source = re.sub(r"\nconst faqItems = \[(?:[\s\S]*?)\];\n", "\n", source)
    source = add_doc_imports(source, slug)
    source = source.replace(
        "  const dict = getDictionary(validLocale);\n",
        "  const dict = getDictionary(validLocale);\n"
        "  const doc = getLocalizedDoc(content, validLocale);\n",
        1,
    )
    source = source.replace("faqItems={faqItems}", "faqItems={doc.faq}")
    source = re.sub(
        r"content=\{\s*<div>[\s\S]*?</div>\s*\}",
        "content={<StructuredDoc sections={doc.sections} />}",
        source,
        count=1,
    )
    source = re.sub(
        rf"<{component_name}\b",
        f"<{component_name} locale={{validLocale}}",
        source,
        count=1,
    )
    path.write_text(source, encoding="utf-8", newline="\n")


def build_doc(slug: str, source: str, kind: str) -> dict[str, Any]:
    if kind == "blog":
        body = extract_blog_body(source)
    else:
        body = extract_converter_body(source)

    return {
        "faq": extract_faq_items(source),
        "sections": extract_sections(body),
    }


def main() -> None:
    page_map = {slug: "blog" for slug in BLOG_PAGES}
    page_map.update({slug: "converter" for slug in CONVERTER_PAGES})
    selected = sys.argv[1:]
    if selected:
        page_map = {slug: page_map[slug] for slug in selected}

    for slug, kind in page_map.items():
        route_path = APP_DIR / slug / "page.tsx"
        source = route_path.read_text(encoding="utf-8")
        english_doc = build_doc(slug, source, kind)
        translated_map = {
            locale: translate_doc(copy.deepcopy(english_doc), locale)
            for locale in LOCALES
        }
        write_content_file(slug, translated_map)

        if kind == "blog":
            patch_blog_route(route_path, slug)
        else:
            patch_converter_route(route_path, slug, CONVERTER_PAGES[slug])


if __name__ == "__main__":
    main()
