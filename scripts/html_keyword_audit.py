from __future__ import annotations

import html
import json
import re
from pathlib import Path

SITE_ROOT = Path(__file__).resolve().parents[1]
BUILD_ROOT = SITE_ROOT / ".next" / "server" / "app"
REPORT_PATH = SITE_ROOT / "reports" / "page-seo-audit.json"
OUTPUT_MD = SITE_ROOT / "reports" / "html-keyword-audit.md"
OUTPUT_JSON = SITE_ROOT / "reports" / "html-keyword-audit.json"


def normalize(value: str) -> str:
    value = html.unescape(value or "").lower()
    value = re.sub(r"[^a-z0-9]+", " ", value)
    return re.sub(r"\s+", " ", value).strip()


def contains_phrase(text: str, phrase: str) -> bool:
    if not text or not phrase:
        return False
    return normalize(phrase) in normalize(text)


def get_html_path(slug: str) -> Path:
    if slug == "home":
        return BUILD_ROOT / "en.html"
    return BUILD_ROOT / "en" / f"{slug}.html"


def extract_title(text: str) -> str:
    match = re.search(r"<title>(.*?)</title>", text, flags=re.IGNORECASE | re.DOTALL)
    return html.unescape(match.group(1).strip()) if match else ""


def extract_meta_description(text: str) -> str:
    match = re.search(
        r'<meta\s+name="description"\s+content="(.*?)"\s*/?>',
        text,
        flags=re.IGNORECASE | re.DOTALL,
    )
    return html.unescape(match.group(1).strip()) if match else ""


def extract_h1(text: str) -> str:
    match = re.search(r"<h1[^>]*>(.*?)</h1>", text, flags=re.IGNORECASE | re.DOTALL)
    if not match:
        return ""
    return html.unescape(re.sub(r"<[^>]+>", " ", match.group(1))).strip()


def extract_body_text(text: str) -> str:
    body_match = re.search(r"<body[^>]*>(.*)</body>", text, flags=re.IGNORECASE | re.DOTALL)
    body = body_match.group(1) if body_match else text
    body = re.sub(r"<script\b[^>]*>.*?</script>", " ", body, flags=re.IGNORECASE | re.DOTALL)
    body = re.sub(r"<style\b[^>]*>.*?</style>", " ", body, flags=re.IGNORECASE | re.DOTALL)
    body = re.sub(r"<[^>]+>", " ", body)
    body = html.unescape(body)
    return re.sub(r"\s+", " ", body).strip()


def score_row(slug: str, keyword: str, title: str, description: str, h1: str, body: str) -> tuple[int, dict[str, bool]]:
    checks = {
        "slug_contains_keyword": contains_phrase(slug.replace("-", " "), keyword),
        "title_contains_keyword": contains_phrase(title, keyword),
        "description_contains_keyword": contains_phrase(description, keyword),
        "h1_contains_keyword": contains_phrase(h1, keyword),
        "lead_contains_keyword": contains_phrase(" ".join(body.split()[:140]), keyword),
    }

    score = 0
    score += 15 if checks["slug_contains_keyword"] else 0
    score += 25 if checks["title_contains_keyword"] else 0
    score += 20 if checks["description_contains_keyword"] else 0
    score += 20 if checks["h1_contains_keyword"] else 0
    score += 20 if checks["lead_contains_keyword"] else 0

    return score, checks


def main() -> None:
    rows = json.loads(REPORT_PATH.read_text(encoding="utf-8"))
    results = []

    for row in rows:
        slug = row["slug"]
        html_path = get_html_path(slug)
        rendered = html_path.read_text(encoding="utf-8", errors="ignore")
        title = extract_title(rendered)
        description = extract_meta_description(rendered)
        h1 = extract_h1(rendered)
        body = extract_body_text(rendered)
        score, checks = score_row(slug, row["main_keyword"], title, description, h1, body)

        results.append(
            {
                "slug": slug,
                "main_keyword": row["main_keyword"],
                "title": title,
                "description": description,
                "h1": h1,
                "score": score,
                "status": "pass" if score >= 80 else "needs work",
                **checks,
            }
        )

    OUTPUT_JSON.write_text(json.dumps(results, indent=2), encoding="utf-8")

    lines = [
        "# HTML Keyword Audit",
        "",
        "This report checks built English HTML output for exact main-keyword coverage in slug, title,",
        "meta description, H1, and the first part of visible body text.",
        "",
        "| Slug | Main Keyword | Title | Meta | H1 | Lead | Score | Status |",
        "| --- | --- | --- | --- | --- | --- | --- | --- |",
    ]

    for result in results:
        lines.append(
            f"| {result['slug']} | {result['main_keyword']} | "
            f"{'yes' if result['title_contains_keyword'] else 'no'} | "
            f"{'yes' if result['description_contains_keyword'] else 'no'} | "
            f"{'yes' if result['h1_contains_keyword'] else 'no'} | "
            f"{'yes' if result['lead_contains_keyword'] else 'no'} | "
            f"{result['score']} | {result['status']} |"
        )

    OUTPUT_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")
    passing = sum(1 for result in results if result["score"] >= 80)
    print(f"Audited {len(results)} built pages. {passing} pages scored 80+ in rendered HTML.")


if __name__ == "__main__":
    main()
