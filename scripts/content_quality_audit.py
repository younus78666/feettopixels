from __future__ import annotations

import html
import json
import math
import re
from collections import Counter, defaultdict
from pathlib import Path

SITE_ROOT = Path(__file__).resolve().parents[1]
BUILD_ROOT = SITE_ROOT / ".next" / "server" / "app"
SEO_REPORT = SITE_ROOT / "reports" / "page-seo-audit.json"
META_REPORT = SITE_ROOT / "reports" / "meta-titles-descriptions.json"
OUTPUT_JSON = SITE_ROOT / "reports" / "content-quality-audit.json"
OUTPUT_MD = SITE_ROOT / "reports" / "content-quality-audit.md"

AI_PHRASES = [
    "it is important to note",
    "in today's digital world",
    "whether you're",
    "this comprehensive guide",
    "dive into",
    "unlock",
    "seamless",
    "moreover",
    "furthermore",
    "additionally",
    "in conclusion",
    "as a result",
    "when it comes to",
    "plays a crucial role",
    "essential for",
]

DATA_SENSITIVE_PATTERNS = [
    r"\bas of (?:20\d{2}|today|now)\b",
    r"\brecommended size\b",
    r"\binstagram\b",
    r"\bfacebook\b",
    r"\byoutube\b",
    r"\blinkedin\b",
    r"\bx \(twitter\)\b",
    r"\biphone\b",
    r"\bsamsung\b",
    r"\bpassport photo\b",
    r"\bmost common (?:screen|desktop|mobile|resolution|device|platform|photo|image|display)\b",
]

GENERIC_SECTION_PATTERNS = [
    "Start with the calculator above",
    "This page is designed to give you a fast answer first",
    "Helpful next steps",
    "What this page helps you answer",
]


def get_html_path(slug: str) -> Path:
    if slug == "home":
        return BUILD_ROOT / "en.html"
    return BUILD_ROOT / "en" / f"{slug}.html"


def strip_tags(value: str) -> str:
    value = re.sub(r"<script\b[^>]*>.*?</script>", " ", value, flags=re.I | re.S)
    value = re.sub(r"<style\b[^>]*>.*?</style>", " ", value, flags=re.I | re.S)
    value = re.sub(r"<[^>]+>", " ", value)
    value = html.unescape(value)
    return re.sub(r"\s+", " ", value).strip()


def extract_visible_text(markup: str) -> str:
    main_match = re.search(r"<main\b[^>]*>(.*?)</main>", markup, flags=re.I | re.S)
    body_match = re.search(r"<body[^>]*>(.*)</body>", markup, flags=re.I | re.S)
    return strip_tags(main_match.group(1) if main_match else body_match.group(1) if body_match else markup)


def extract_headings(markup: str) -> list[dict[str, str]]:
    main_match = re.search(r"<main\b[^>]*>(.*?)</main>", markup, flags=re.I | re.S)
    markup = main_match.group(1) if main_match else markup
    markup = re.sub(
        r"<section\b[^>]*id=[\"']reference-sources[\"'][^>]*>.*?</section>",
        " ",
        markup,
        flags=re.I | re.S,
    )
    headings: list[dict[str, str]] = []
    for match in re.finditer(r"<h([1-6])[^>]*>(.*?)</h\1>", markup, flags=re.I | re.S):
        headings.append({"level": f"h{match.group(1)}", "text": strip_tags(match.group(2))})
    return headings


def extract_paragraph_like_blocks(markup: str) -> list[str]:
    main_match = re.search(r"<main\b[^>]*>(.*?)</main>", markup, flags=re.I | re.S)
    markup = main_match.group(1) if main_match else markup
    markup = re.sub(
        r"<section\b[^>]*id=[\"']reference-sources[\"'][^>]*>.*?</section>",
        " ",
        markup,
        flags=re.I | re.S,
    )
    blocks: list[str] = []
    for tag in ["p", "li"]:
        for match in re.finditer(rf"<{tag}\b[^>]*>(.*?)</{tag}>", markup, flags=re.I | re.S):
            text = strip_tags(match.group(1))
            if len(text.split()) >= 8:
                blocks.append(text)
    return blocks


def normalize_text(value: str) -> str:
    value = html.unescape(value).lower()
    value = re.sub(r"[^a-z0-9]+", " ", value)
    return re.sub(r"\s+", " ", value).strip()


def word_count(value: str) -> int:
    return len(re.findall(r"\b[\w'-]+\b", value))


def sentence_lengths(value: str) -> list[int]:
    sentences = re.split(r"(?<=[.!?])\s+", value)
    return [word_count(sentence) for sentence in sentences if word_count(sentence) >= 4]


def needs_fact_check(text: str) -> bool:
    text = re.sub(r"Last updated [A-Za-z]+ \d{1,2}, \d{4}", " ", text)
    normalized = normalize_text(text)
    return any(re.search(pattern, normalized) for pattern in DATA_SENSITIVE_PATTERNS)


def stddev(values: list[int]) -> float:
    if len(values) < 2:
        return 0.0
    avg = sum(values) / len(values)
    return math.sqrt(sum((value - avg) ** 2 for value in values) / len(values))


def content_score(row: dict[str, object]) -> int:
    score = 100
    wc = int(row["word_count"])
    page_type = str(row.get("type") or "")
    if page_type in {"contact", "legal"}:
        if wc < 250:
            score -= 35
        elif wc < 350:
            score -= 20
    elif page_type == "about":
        if wc < 500:
            score -= 35
        elif wc < 750:
            score -= 20
    else:
        if wc < 500:
            score -= 35
        elif wc < 900:
            score -= 20
        elif wc < 1400:
            score -= 10

    if int(row["heading_count"]) < 4:
        score -= 10
    if int(row["table_count"]) + int(row["list_count"]) == 0:
        score -= 10
    if int(row["duplicate_heading_count"]) > 0:
        score -= 15
    if int(row["duplicate_block_count"]) > 0:
        score -= 15
    if int(row["ai_phrase_count"]) > 0:
        score -= min(20, int(row["ai_phrase_count"]) * 4)
    if int(row["generic_template_hits"]) > 0:
        score -= min(20, int(row["generic_template_hits"]) * 5)
    if float(row["sentence_length_stddev"]) < 7 and wc > 500:
        score -= 8
    if bool(row["needs_fact_check"]):
        score -= 5
    return max(0, score)


def classify(score: int, word_count_value: int, needs_fact_check: bool) -> str:
    if score >= 85 and not needs_fact_check:
        return "keep"
    if score >= 75:
        return "verify facts"
    if word_count_value < 900:
        return "expand"
    return "refresh"


def main() -> None:
    seo_rows = json.loads(SEO_REPORT.read_text(encoding="utf-8"))
    seo_by_slug = {str(row["slug"]): row for row in seo_rows}
    meta_rows = json.loads(META_REPORT.read_text(encoding="utf-8"))
    slugs = [str(row["slug"]) for row in meta_rows]
    block_usage: dict[str, list[str]] = defaultdict(list)
    page_blocks: dict[str, list[str]] = {}
    rows: list[dict[str, object]] = []

    for slug in slugs:
        seo = seo_by_slug.get(slug, {})
        html_path = get_html_path(slug)
        if not html_path.exists():
            continue

        markup = html_path.read_text(encoding="utf-8", errors="ignore")
        main_match = re.search(r"<main\b[^>]*>(.*?)</main>", markup, flags=re.I | re.S)
        main_markup = main_match.group(1) if main_match else markup
        main_markup = re.sub(
            r"<section\b[^>]*id=[\"']reference-sources[\"'][^>]*>.*?</section>",
            " ",
            main_markup,
            flags=re.I | re.S,
        )
        text = strip_tags(main_markup)
        headings = extract_headings(markup)
        heading_counts = Counter(normalize_text(h["text"]) for h in headings if h["text"])
        duplicate_headings = {
            key: count for key, count in heading_counts.items() if count > 1 and key
        }
        blocks = extract_paragraph_like_blocks(markup)
        page_blocks[slug] = blocks

        for block in blocks:
            normalized = normalize_text(block)
            if word_count(normalized) >= 12:
                block_usage[normalized].append(slug)

        lengths = sentence_lengths(text)
        normalized_body = normalize_text(text)
        ai_hits = [
            phrase for phrase in AI_PHRASES if phrase in normalized_body
        ]
        generic_hits = [
            phrase for phrase in GENERIC_SECTION_PATTERNS if phrase.lower() in text.lower()
        ]
        fact_check_needed = needs_fact_check(text)

        row = {
            "slug": slug,
            "type": seo.get("page_type", ""),
            "main_keyword": seo.get("main_keyword", ""),
            "word_count": word_count(text),
            "heading_count": len(headings),
            "table_count": len(re.findall(r"<table\b", markup, flags=re.I)),
            "list_count": len(re.findall(r"<(?:ul|ol)\b", markup, flags=re.I)),
            "duplicate_heading_count": sum(duplicate_headings.values()),
            "duplicate_headings": duplicate_headings,
            "duplicate_block_count": 0,
            "duplicate_blocks": [],
            "ai_phrase_count": len(ai_hits),
            "ai_phrases": ai_hits,
            "generic_template_hits": len(generic_hits),
            "generic_templates": generic_hits,
            "sentence_length_stddev": round(stddev(lengths), 2),
            "needs_fact_check": fact_check_needed,
        }
        rows.append(row)

    repeated_blocks = {
        block: sorted(set(slugs))
        for block, slugs in block_usage.items()
        if len(set(slugs)) >= 3
    }

    for row in rows:
        slug = str(row["slug"])
        duplicates = []
        for block in page_blocks.get(slug, []):
            normalized = normalize_text(block)
            slugs = repeated_blocks.get(normalized)
            if slugs:
                duplicates.append({"text": block, "pages": slugs[:8], "page_count": len(slugs)})
        row["duplicate_block_count"] = len(duplicates)
        row["duplicate_blocks"] = duplicates[:5]
        score = content_score(row)
        row["score"] = score
        row["classification"] = classify(
            score, int(row["word_count"]), bool(row["needs_fact_check"])
        )

    rows.sort(key=lambda item: (int(item["score"]), int(item["word_count"])))
    OUTPUT_JSON.write_text(json.dumps(rows, indent=2), encoding="utf-8")

    lines = [
        "# Content Quality Audit",
        "",
        "Checks built English public pages for useful-depth signals, repeated visible blocks,",
        "generic template copy, AI-pattern phrases, heading duplication, and fact-sensitive claims.",
        "",
        "| Slug | Type | Words | Headings | Tables | Lists | Repeated Blocks | AI Phrases | Fact Check | Score | Action |",
        "| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | --- | ---: | --- |",
    ]

    for row in rows:
        lines.append(
            f"| {row['slug']} | {row['type']} | {row['word_count']} | "
            f"{row['heading_count']} | {row['table_count']} | {row['list_count']} | "
            f"{row['duplicate_block_count']} | {row['ai_phrase_count']} | "
            f"{'yes' if row['needs_fact_check'] else 'no'} | {row['score']} | "
            f"{row['classification']} |"
        )

    problem_rows = [row for row in rows if row["classification"] != "keep"]
    lines.extend(["", "## Priority Notes", ""])
    if not problem_rows:
        lines.append("No content-quality issues found by this heuristic audit.")
    else:
        for row in problem_rows:
            notes = []
            page_type = str(row.get("type") or "")
            thin_threshold = 350 if page_type in {"contact", "legal"} else 750 if page_type == "about" else 900
            if int(row["word_count"]) < thin_threshold:
                notes.append("thin visible copy")
            if int(row["duplicate_block_count"]) > 0:
                notes.append("repeated block copy")
            if int(row["ai_phrase_count"]) > 0:
                notes.append("AI-pattern phrases")
            if bool(row["needs_fact_check"]):
                notes.append("fact-sensitive claims")
            if int(row["generic_template_hits"]) > 0:
                notes.append("generic template copy")
            lines.append(f"- `{row['slug']}`: {', '.join(notes) or 'refresh recommended'}.")

    OUTPUT_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")
    keep = sum(1 for row in rows if row["classification"] == "keep")
    print(f"Audited {len(rows)} pages. {keep} keep, {len(rows) - keep} need review.")


if __name__ == "__main__":
    main()
