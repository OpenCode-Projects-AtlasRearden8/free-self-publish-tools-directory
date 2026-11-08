/* Free Self-Publishing Tools Directory — shared catalog data.
 * Used by index.html (browser) and scripts/validate.js (Node).
 * All URLs verified live on 2026-11-08. No secrets or personal data.
 */
const TOOLS = [
  // ---------- Manuscript & ebook formatting ----------
  {
    name: "Calibre",
    url: "https://calibre-ebook.com/",
    category: "formatting",
    what: "Converts your manuscript into clean EPUB and PDF files and manages your whole book library in one app.",
    why: "Full-featured open-source program run by volunteers, with no paid tier and no account needed.",
    cost: "Open source",
    tags: ["open-source", "desktop-app"]
  },
  {
    name: "Sigil",
    url: "https://sigil-ebook.com/",
    category: "formatting",
    what: "Opens EPUB files directly so you can fix fonts, headings, and chapter breaks after conversion.",
    why: "Community-built open-source editor funded by donations, so every feature is free.",
    cost: "Open source",
    tags: ["open-source", "desktop-app"]
  },
  {
    name: "Pandoc",
    url: "https://pandoc.org/",
    category: "formatting",
    what: "Turns a Markdown or Word manuscript into EPUB, DOCX, and more with one command.",
    why: "Free, open-source command-line tool maintained by its creator and contributors since 2004.",
    cost: "Open source",
    tags: ["open-source", "command-line"]
  },
  {
    name: "LibreOffice Writer",
    url: "https://www.libreoffice.org/",
    category: "formatting",
    what: "Free word processor that handles front matter, page breaks, and print-ready PDF export.",
    why: "Open-source office suite developed by a nonprofit foundation, so it costs nothing forever.",
    cost: "Open source",
    tags: ["open-source", "desktop-app"]
  },
  {
    name: "Draft2Digital Book Formatting",
    url: "https://www.draft2digital.com/book/",
    category: "formatting",
    what: "Uploads a Word or Scrivener file and returns a styled EPUB or PDF, ready to publish.",
    why: "Conversion is free because the service earns a small cut only when you sell books through it.",
    cost: "Free (commission model)",
    tags: ["in-browser", "no-install"]
  },
  {
    name: "Reedsy Studio",
    url: "https://reedsy.com/studio",
    category: "formatting",
    what: "An online editor that turns your text into professional paperback PDFs and ebooks with reusable styles.",
    why: "The free plan covers unlimited formatting; Reedsy makes money from its marketplace of paid professionals.",
    cost: "Freemium",
    tags: ["in-browser"]
  },
  {
    name: "Kindle Previewer",
    url: "https://kdp.amazon.com/en_US/help/topic/G202131170",
    category: "formatting",
    what: "Shows exactly how your EPUB will look on Kindles, phones, and tablets before you hit publish.",
    why: "Amazon gives it away free because fewer broken previews means fewer support tickets.",
    cost: "Free (Amazon)",
    tags: ["amazon-official", "desktop-app"]
  },

  // ---------- Cover mockups & cover tools ----------
  {
    name: "DIY Book Covers 3D Mockups",
    url: "https://diybookcovers.com/3Dmockup/",
    category: "covers",
    what: "Turns a flat cover image into a 3D paperback or Kindle mockup with a transparent background.",
    why: "The 3D mockup generator itself is free; the site monetizes through optional template packages and coaching.",
    cost: "Freemium",
    tags: ["in-browser", "signup"]
  },
  {
    name: "Book Brush",
    url: "https://www.bookbrush.com/",
    category: "covers",
    what: "Drops your cover onto 3D templates and scene photos for ads, social posts, and box-set graphics.",
    why: "A generous free tier covers mockups and exports; upgrades buy bigger libraries, not the basics.",
    cost: "Freemium",
    tags: ["in-browser", "signup"]
  },
  {
    name: "KDP Cover Calculator",
    url: "https://kdp.amazon.com/cover-calculator",
    category: "covers",
    what: "Builds a print-ready full cover (front, spine, back) at the exact trim size and page count you specify.",
    why: "Straight from Amazon KDP, free with no account required, so your cover dimensions always pass review.",
    cost: "Free (Amazon)",
    tags: ["amazon-official", "in-browser"]
  },
  {
    name: "GIMP",
    url: "https://www.gimp.org/",
    category: "covers",
    what: "Full-strength image editor for resizing covers, fixing contrast, and compositing mockups.",
    why: "Decades-old open-source project; the free Photoshop-class tools genuinely work.",
    cost: "Open source",
    tags: ["open-source", "desktop-app"]
  },
  {
    name: "Inkscape",
    url: "https://inkscape.org/",
    category: "covers",
    what: "Vector editor for title text and logos that stay sharp at any cover size.",
    why: "Free and open-source because vector graphics should never require a subscription.",
    cost: "Open source",
    tags: ["open-source", "desktop-app"]
  },

  // ---------- Spreads, royalties & math ----------
  {
    name: "Kindlepreneur KDP Royalty Calculator",
    url: "https://www.kindlepreneur.com/kdp-royalty-calculator/",
    category: "calculators",
    what: "Works out your per-copy royalty across ebook and paperback price points and channels.",
    why: "A free browser calculator used to draw authors toward Kindlepreneur's paid courses.",
    cost: "Free (ad-supported)",
    tags: ["in-browser", "no-signup"]
  },
  {
    name: "Kindlepreneur KENP Calculator",
    url: "https://www.kindlepreneur.com/kenp-calculator/",
    category: "calculators",
    what: "Estimates Kindle Unlimited royalties from your book's KENP pages read.",
    why: "Paid for by site ads and course upsells; nothing is gated behind a sign-up.",
    cost: "Free (ad-supported)",
    tags: ["in-browser", "no-signup"]
  },
  {
    name: "ISBN Check Digit Calculator",
    url: "https://www.isbn-international.org/content/isbn-calculator",
    category: "calculators",
    what: "Validates an ISBN or completes its final check digit, so you never hand out a dead number.",
    why: "Run by the official International ISBN Agency as part of its free public standards resources.",
    cost: "Free (official agency)",
    tags: ["official", "no-signup"]
  },

  // ---------- Free ISBN info & lookups ----------
  {
    name: "International ISBN Agency",
    url: "https://www.isbn-international.org/",
    category: "isbn",
    what: "Explains how ISBNs work, lists every national agency, and hosts the global publisher register.",
    why: "The official registration authority site; its guides, ranges, and agency directory cost nothing.",
    cost: "Free (official agency)",
    tags: ["official", "no-signup"]
  },
  {
    name: "ISBNSearch",
    url: "https://isbnsearch.org/",
    category: "isbn",
    what: "Looks up any ISBN to see the title, publisher, and edition it belongs to.",
    why: "A small independent database funded by ads, open to everyone without an account.",
    cost: "Free (ad-supported)",
    tags: ["no-signup"]
  },
  {
    name: "WorldCat",
    url: "https://worldcat.org/",
    category: "isbn",
    what: "Searches a worldwide library catalog to check ISBNs, editions, and title history.",
    why: "Free to browse from the OCLC nonprofit; the underlying library data is shared for public good.",
    cost: "Free (nonprofit)",
    tags: ["no-signup"]
  },

  // ---------- Blurb writing & checking ----------
  {
    name: "Kindlepreneur Book Description Generator",
    url: "https://www.kindlepreneur.com/amazon-book-description-generator/",
    category: "blurbs",
    what: "Formats your book blurb into the exact HTML Amazon, Barnes & Noble, and Kobo accept.",
    why: "Free browser tool from Kindlepreneur, supported by ads and optional paid courses.",
    cost: "Free (ad-supported)",
    tags: ["in-browser", "no-signup"]
  },
  {
    name: "Hemingway Editor",
    url: "https://hemingwayapp.com/",
    category: "blurbs",
    what: "Scores your blurb's readability and highlights long or tangled sentences to cut.",
    why: "The web version is free to use as much as you like; paid exists only for an offline desktop build.",
    cost: "Free module",
    tags: ["in-browser", "no-signup"]
  },
  {
    name: "LanguageTool",
    url: "https://languagetool.org/",
    category: "blurbs",
    what: "Grammar and style checker that catches typos before your blurb goes live.",
    why: "An open-source core with a free web tier; premium adds volume limits rather than basics.",
    cost: "Freemium",
    tags: ["in-browser", "open-source"]
  }
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = { TOOLS };
}
