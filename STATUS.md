# STATUS — Free Self-Publishing Tools Directory

Last updated: 2026-11-08 · Maintained by Asdale Dynamics, LLC

## What was built

A curated directory of 21 genuinely free self-publishing helpers, each with a
one-line **what-it-does** note and a **why-it's-free** note, in two forms:

1. **Markdown directory** — `README.md`, with tables for five categories:
   - Formatting (7 tools): Calibre, Sigil, Pandoc, LibreOffice Writer, Draft2Digital, Reedsy Studio, Kindle Previewer
   - Covers & mockups (5): DIY Book Covers 3D Mockups, Book Brush, KDP Cover Calculator, GIMP, Inkscape
   - Calculators (3): Kindlepreneur KDP Royalty Calculator, Kindlepreneur KENP Calculator, ISBN Check Digit Calculator
   - Free ISBN info (3): International ISBN Agency, ISBNSearch, WorldCat
   - Blurb checks (3): Kindlepreneur Book Description Generator, Hemingway Editor, LanguageTool
2. **Filterable static site** — `index.html` + `data.js` (vanilla JS, no build step,
   no external dependencies). Category chips + live search, exact showing-count,
   accessible empty state, warm editorial styling (paper background, serif type,
   book spine accent rule). Shared `data.js` catalog so pages and tests never drift.

Deliberately distinct from our `free-author-marketing-kit` (marketing side)
and `free-small-business-forms-pack` (small-business ops side): this covers
only the production path from manuscript to published book.

## Files

| File | Purpose |
| --- | --- |
| `README.md` | The markdown directory + cost-language guide + run/test instructions |
| `index.html` | Filterable static site |
| `data.js` | Shared catalog data (used by site and tests) |
| `scripts/validate.js` | Node test suite for data, HTML wiring, README parity, LICENSE |
| `LICENSE` | MIT, copyright (c) 2026 Asdale Dynamics, LLC |
| `STATUS.md` | This file |

No secrets, API keys, or personal data — checked with automated pattern scans in `validate.js`.

## How to run

```bash
# Option 1: open the file directly in a browser
# index.html — no server needed

# Option 2 (better): serve locally
python3 -m http.server 8080   # then open http://localhost:8080
```

## How to test

```bash
node scripts/validate.js
```

Validates: catalog field integrity, valid categories, https-only URLs,
uniqueness, HTML element wiring and filter chips, README ↔ data parity
(21 rows ↔ 21 entries), exact LICENSE copyright line, and secret/personal-data scans.

## Verification results (2026-11-08)

- `node scripts/validate.js` — **all checks pass** (exit 0).
- `python3 -m http.server` smoke test — `index.html` returned HTTP 200 (7,708 bytes),
  `data.js` returned HTTP 200 (8,591 bytes), 6 filter chips present,
  data.js parses standalone and yields 21 tools.
- **All 21 catalog URLs verified live** via HTTP fetch/status checks on 2026-11-08.
  Two URL candidates found dead during curation and replaced/removed
  (Adazing book-mockup path, IngramSpark public calculators page, Diggypod spine
  calculator, some Kindlepreneur tools that have moved).

## Known gaps & ideas

- URLs rot: re-run link verification periodically (curl one-liners in git history).
- No per-tool cost-tier depth (e.g., exact free-tier limits of Book Brush / LanguageTool change over time; entries use honest model categories instead).
- Could add: print-page "spreads" layout calculator beyond KDP Cover Calculator (few genuinely free ones exist; candidates checked were dead or login-gated), and an ebook-store blurb preview simulator.
- Site uses one shared `data.js`; a JSON export could let other Asdale packs reuse the catalog.
