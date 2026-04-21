from __future__ import annotations

import html
import json
import re
from pathlib import Path


SITE_ROOT = Path(__file__).resolve().parents[1]
BUILD_ROOT = SITE_ROOT / ".next" / "server" / "app"
REPORTS_DIR = SITE_ROOT / "reports"
BASE_URL = "https://www.feettopixels.com"


def extract(pattern: str, text: str) -> str:
    match = re.search(pattern, text, flags=re.IGNORECASE | re.DOTALL)
    return html.unescape(match.group(1).strip()) if match else ""


def strip_tags(text: str) -> str:
    text = re.sub(r"<script\b[^>]*>.*?</script>", " ", text, flags=re.IGNORECASE | re.DOTALL)
    text = re.sub(r"<style\b[^>]*>.*?</style>", " ", text, flags=re.IGNORECASE | re.DOTALL)
    text = re.sub(r"<[^>]+>", " ", text)
    return re.sub(r"\s+", " ", html.unescape(text)).strip()


def route_from_html_path(path: Path) -> tuple[str, str] | None:
    rel = path.relative_to(BUILD_ROOT)
    parts = rel.parts

    if parts == ("en.html",):
        return "home", "/"

    if len(parts) == 2 and parts[0] == "en" and parts[1].endswith(".html"):
        slug = parts[1][:-5]
        return slug, f"/{slug}"

    return None


def collect_pages() -> list[dict[str, object]]:
    pages: list[dict[str, object]] = []

    for path in sorted(BUILD_ROOT.rglob("*.html")):
        route = route_from_html_path(path)
        if route is None:
            continue

        slug, public_path = route
        rendered = path.read_text(encoding="utf-8", errors="ignore")
        title = extract(r"<title>(.*?)</title>", rendered)
        description = extract(
            r'<meta\s+name="description"\s+content="(.*?)"\s*/?>',
            rendered,
        )
        canonical = extract(
            r'<link\s+rel="canonical"\s+href="(.*?)"\s*/?>',
            rendered,
        )
        h1 = strip_tags(extract(r"<h1[^>]*>(.*?)</h1>", rendered))
        body = extract(r"<body[^>]*>(.*)</body>", rendered) or rendered
        words = re.findall(r"[A-Za-z0-9]+(?:['-][A-Za-z0-9]+)?", strip_tags(body))

        pages.append(
            {
                "slug": slug,
                "path": public_path,
                "title": title,
                "description": description,
                "canonical": canonical,
                "h1": h1,
                "word_count": len(words),
                "canonical_ok": canonical == f"{BASE_URL}{'' if public_path == '/' else public_path}",
                "title_length": len(title),
                "description_length": len(description),
            }
        )

    return pages


def write_meta_report(pages: list[dict[str, object]]) -> None:
    lines = [
        "# FeetToPixels Meta Titles and Descriptions",
        "",
        "Generated from built English HTML output after the technical SEO fixes.",
        "",
        "| Page | URL Path | Meta Title | Title Chars | Meta Description | Description Chars | Canonical |",
        "| --- | --- | --- | ---: | --- | ---: | --- |",
    ]

    for page in pages:
        title = str(page["title"]).replace("|", "\\|")
        description = str(page["description"]).replace("|", "\\|")
        lines.append(
            f"| {page['slug']} | `{page['path']}` | {title} | {page['title_length']} | "
            f"{description} | {page['description_length']} | `{page['canonical']}` |"
        )

    (REPORTS_DIR / "meta-titles-descriptions.md").write_text(
        "\n".join(lines) + "\n",
        encoding="utf-8",
    )
    (REPORTS_DIR / "meta-titles-descriptions.json").write_text(
        json.dumps(pages, indent=2),
        encoding="utf-8",
    )


def write_technical_report(pages: list[dict[str, object]]) -> None:
    canonical_issues = [p for p in pages if not p["canonical_ok"]]
    short_titles = [p for p in pages if int(p["title_length"]) < 30]
    long_titles = [p for p in pages if int(p["title_length"]) > 65]
    short_desc = [p for p in pages if int(p["description_length"]) < 120]
    long_desc = [p for p in pages if int(p["description_length"]) > 170]
    below_2000 = [p for p in pages if int(p["word_count"]) < 2000]

    rendered_text = "\n".join(
        path.read_text(encoding="utf-8", errors="ignore")
        for path in sorted(BUILD_ROOT.rglob("*.html"))
        if route_from_html_path(path) is not None
    )
    en_link_count = len(re.findall(r'(?:href|url|content)=["\'](?:https://www\.feettopixels\.com)?/en(?:/|["\'])', rendered_text))

    lines = [
        "# FeetToPixels Technical SEO Audit",
        "",
        "Scope: built English public pages, sitemap/robots source, canonical URL consistency, metadata, and content-depth risk.",
        "",
        "## Fixed in this pass",
        "- Homepage search intent now targets the domain entity: `Feet to Pixels Converter`.",
        "- English internal URLs now resolve to root canonical paths instead of crawlable `/en/...` paths.",
        "- Middleware now redirects `/en` and `/en/*` to `/` and root page paths with a 308 redirect.",
        "- Site-wide schema, footer, search modal, breadcrumbs, and llms.txt no longer publish `/en/...` URLs.",
        "- robots.txt now allows main search crawlers and AI discovery crawlers while keeping admin/API/search/query URLs out of crawl paths.",
        "- llms.txt now describes the real English canonical site and primary feet-to-pixels entity.",
        "",
        "## Indexability Checks",
        f"- Public pages checked: {len(pages)}",
        f"- Canonical mismatches: {len(canonical_issues)}",
        f"- Built `/en` link references found: {en_link_count}",
        "- Admin pages are intentionally `noindex` in `app/admin/layout.tsx`.",
        "- Sitemap uses canonical root English URLs and includes the tool, guide, hub, legal, and contact pages.",
        "",
        "## Metadata Checks",
        f"- Titles under 30 chars: {len(short_titles)}",
        f"- Titles over 65 chars: {len(long_titles)}",
        f"- Descriptions under 120 chars: {len(short_desc)}",
        f"- Descriptions over 170 chars: {len(long_desc)}",
        "",
        "## Content Depth",
        f"- Pages below the requested 2,000 visible-word target: {len(below_2000)}",
        "- This is a content-production requirement, not a pure technical indexing blocker. The topical map report lists recommended 2,000+ word briefs by cluster.",
        "",
    ]

    if canonical_issues:
        lines.extend(["## Canonical Issues", ""])
        for page in canonical_issues:
            lines.append(f"- `{page['path']}` canonical is `{page['canonical']}`")
        lines.append("")

    if below_2000:
        lines.extend(["## Pages Below 2,000 Words", ""])
        lines.append("| Page | Path | Approx. Visible Words |")
        lines.append("| --- | --- | ---: |")
        for page in below_2000:
            lines.append(f"| {page['slug']} | `{page['path']}` | {page['word_count']} |")
        lines.append("")

    (REPORTS_DIR / "technical-seo-audit.md").write_text(
        "\n".join(lines),
        encoding="utf-8",
    )


def main() -> None:
    REPORTS_DIR.mkdir(exist_ok=True)
    pages = collect_pages()
    write_meta_report(pages)
    write_technical_report(pages)
    print(f"Generated SEO reports for {len(pages)} public pages.")


if __name__ == "__main__":
    main()
