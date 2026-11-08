# Free Self-Publishing Tools Directory

A curated directory of **genuinely free** helpers for self-publishing: manuscript formatting tools, cover mockup generators, royalty and spreads calculators, free ISBN info, and blurb-check sites. Every entry has a one-line *what it does* and a *why it's free* note, so nothing here turns into a sales funnel halfway through.

Every link was verified live on **November 8, 2026**. A filterable static site version lives in [`index.html`](index.html) — see *Run the site* below.

This project is deliberately distinct from our other free packs (the **free-author-marketing-kit** and the **free-small-business-forms-pack**): this one is purely the *production* side of making a book, not marketing and not business paperwork.

---

## Formatting (manuscripts → ebook & print)

| Tool | What it does | Why it's free |
| --- | --- | --- |
| [Calibre](https://calibre-ebook.com/) | Converts your manuscript into clean EPUB and PDF files and manages your whole book library. | Full-featured open-source program run by volunteers, with no paid tier and no account needed. |
| [Sigil](https://sigil-ebook.com/) | Opens EPUB files directly so you can fix fonts, headings, and chapter breaks after conversion. | Community-built open-source editor funded by donations, so every feature is free. |
| [Pandoc](https://pandoc.org/) | Turns a Markdown or Word manuscript into EPUB, DOCX, and more with one command. | Free, open-source command-line tool maintained by its creator and contributors since 2004. |
| [LibreOffice Writer](https://www.libreoffice.org/) | Free word processor that handles front matter, page breaks, and print-ready PDF export. | Open-source office suite developed by a nonprofit foundation, so it costs nothing forever. |
| [Draft2Digital Book Formatting](https://www.draft2digital.com/book/) | Uploads a Word or Scrivener file and returns a styled EPUB or PDF, ready to publish. | Conversion is free because the service earns a small cut only when you sell books through it. |
| [Reedsy Studio](https://reedsy.com/studio) | Online editor that turns your text into professional paperback PDFs and ebooks with reusable styles. | The free plan covers unlimited formatting; Reedsy makes money from its marketplace of paid professionals. |
| [Kindle Previewer](https://kdp.amazon.com/en_US/help/topic/G202131170) | Shows exactly how your EPUB will look on Kindles, phones, and tablets before you hit publish. | Amazon gives it away free because fewer broken previews means fewer support tickets. |

## Covers & mockups

| Tool | What it does | Why it's free |
| --- | --- | --- |
| [DIY Book Covers 3D Mockups](https://diybookcovers.com/3Dmockup/) | Turns a flat cover image into a 3D paperback or Kindle mockup with a transparent background. | The 3D mockup generator itself is free; the site monetizes through optional template packages and coaching. |
| [Book Brush](https://www.bookbrush.com/) | Drops your cover onto 3D templates and scene photos for ads, social posts, and box-set graphics. | A generous free tier covers mockups and exports; upgrades buy bigger libraries, not the basics. |
| [KDP Cover Calculator](https://kdp.amazon.com/cover-calculator) | Builds a print-ready full cover (front, spine, back) at the exact trim size and page count you specify. | Straight from Amazon KDP, free with no account required, so your cover dimensions always pass review. |
| [GIMP](https://www.gimp.org/) | Full-strength image editor for resizing covers, fixing contrast, and compositing mockups. | Decades-old open-source project; the free Photoshop-class tools genuinely work. |
| [Inkscape](https://inkscape.org/) | Vector editor for title text and logos that stay sharp at any cover size. | Free and open-source because vector graphics should never require a subscription. |

## Calculators (royalties, spreads & page math)

| Tool | What it does | Why it's free |
| --- | --- | --- |
| [Kindlepreneur KDP Royalty Calculator](https://www.kindlepreneur.com/kdp-royalty-calculator/) | Works out your per-copy royalty across ebook and paperback price points and channels. | A free browser calculator used to draw authors toward Kindlepreneur's paid courses. |
| [Kindlepreneur KENP Calculator](https://www.kindlepreneur.com/kenp-calculator/) | Estimates Kindle Unlimited royalties from your book's KENP pages read. | Paid for by site ads and course upsells; nothing is gated behind a sign-up. |
| [ISBN Check Digit Calculator](https://www.isbn-international.org/content/isbn-calculator) | Validates an ISBN or completes its final check digit, so you never hand out a dead number. | Run by the official International ISBN Agency as part of its free public standards resources. |

## Free ISBN info

| Tool | What it does | Why it's free |
| --- | --- | --- |
| [International ISBN Agency](https://www.isbn-international.org/) | Explains how ISBNs work, lists every national agency, and hosts the global publisher register. | The official registration authority site; its guides, ranges, and agency directory cost nothing. |
| [ISBNSearch](https://isbnsearch.org/) | Looks up any ISBN to see the title, publisher, and edition it belongs to. | A small independent database funded by ads, open to everyone without an account. |
| [WorldCat](https://worldcat.org/) | Searches a worldwide library catalog to check ISBNs, editions, and title history. | Free to browse from the OCLC nonprofit; the underlying library data is shared for public good. |

## Blurb checks (before your book description goes live)

| Tool | What it does | Why it's free |
| --- | --- | --- |
| [Kindlepreneur Book Description Generator](https://www.kindlepreneur.com/amazon-book-description-generator/) | Formats your book blurb into the exact HTML Amazon, Barnes & Noble, and Kobo accept. | Free browser tool from Kindlepreneur, supported by ads and optional paid courses. |
| [Hemingway Editor](https://hemingwayapp.com/) | Scores your blurb's readability and highlights long or tangled sentences to cut. | The web version is free to use as much as you like; paid exists only for an offline desktop build. |
| [LanguageTool](https://languagetool.org/) | Grammar and style checker that catches typos before your blurb goes live. | An open-source core with a free web tier; premium adds volume limits rather than basics. |

---

## Honest cost language

- **Open source** — the whole tool is free software, forever.
- **Free (official / ad-supported / commission model)** — the tool does the job for free, and the maker earns elsewhere (ads, upsells, sales share).
- **Freemium** — the free tier genuinely covers the core job; paid tiers add extras only.

If a tool's free tier ever stops covering the job it's listed for, it should be removed from this directory.

## Run the site

No build step — it's a plain static site. Two ways to open it:

1. Directly: double-click `index.html` in a file browser, or
2. Better, serve it locally:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

The site shares its catalog data with `data.js`: the HTML page filters by category chips and a live search box; "All" clears filters.

## Tests

A small Node test validates the catalog data, HTML references, and that the README covers every tool:

```bash
node scripts/validate.js
```

## License & credits

MIT licensed — see [LICENSE](LICENSE). Built and maintained by **Asdale Dynamics, LLC** (Dylan Asdale's LLC for beginner-friendly AI books, guides, and practical tools). Learn more at [dylanasdale.github.io](https://dylanasdale.github.io).
