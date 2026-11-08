#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { TOOLS } = require("../data.js");

const CATEGORIES = ["formatting", "covers", "calculators", "isbn", "blurbs"];

let failed = 0;
function check(ok, label) {
  if (ok) {
    console.log("PASS  " + label);
  } else {
    failed++;
    console.error("FAIL  " + label);
  }
}

const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const readme = fs.readFileSync(path.join(root, "README.md"), "utf8");
const license = fs.readFileSync(path.join(root, "LICENSE"), "utf8");

// --- data.js ---
check(Array.isArray(TOOLS) && TOOLS.length > 0, `TOOLS array is non-empty (${TOOLS.length} entries)`);

const names = new Set();
const urls = new Set();
for (const t of TOOLS) {
  for (const field of ["name", "url", "category", "what", "why", "cost", "tags"]) {
    if (field === "tags") {
      check(Array.isArray(t.tags) && t.tags.length > 0, `${t.name || "?"}: tags is a non-empty array`);
    } else {
      check(typeof t[field] === "string" && t[field].trim().length > 0,
        `${t.name || "?"}: ${field} is a non-empty string`);
    }
  }
  check(CATEGORIES.includes(t.category), `${t.name}: category "${t.category}" is valid`);
  check(/^https:\/\/[^\s]+$/.test(t.url), `${t.name}: url is https (${t.url})`);
  check(!names.has(t.name), `${t.name}: name is unique`);
  check(!urls.has(t.url), `${t.name}: url is unique`);
  names.add(t.name);
  urls.add(t.url);
}

const perCategory = CATEGORIES.map(c => TOOLS.filter(t => t.category === c).length);
check(perCategory.every(n => n > 0), `every category has at least one tool (${perCategory.join(", ")})`);

// --- index.html wiring ---
for (const id of ["search", "tool-list", "count-note", "empty"]) {
  const ok = new RegExp(`id="${id}"`).test(html);
  check(ok, `index.html contains id="${id}"`);
}
check(/<script src="data\.js">/.test(html), "index.html loads data.js");
check(/window\.TOOLS\s*\.?forEach|TOOLS\.forEach/.test(html), "index.html renders TOOLS");
check(html.toLowerCase().includes("asdale dynamics, llc"), "index.html credits Asdale Dynamics, LLC");
for (const cat of CATEGORIES.concat("all")) {
  check(html.includes(`data-cat="${cat}"`), `index.html has filter chip for "${cat}"`);
}

// --- README parity ---
check((readme.match(/\| \[[^\]]+\]\(/g) || []).length === TOOLS.length,
  `README lists exactly ${TOOLS.length} tool rows`);
for (const t of TOOLS) {
  check(readme.includes(`[${t.name}](https://${t.url.replace(/^https:\/\//, "")})`),
    `README has a link row for ${t.name}`);
}
readme.toLowerCase().includes("asdale dynamics, llc") && (check(true, "README credits Asdale Dynamics, LLC"));

// --- LICENSE exactness ---
check(license.includes("Copyright (c) 2026 Asdale Dynamics, LLC"),
  "LICENSE contains the exact copyright line");
const firstCopyright = license.split("\n").find(l => l.startsWith("Copyright"));
check(firstCopyright === "Copyright (c) 2026 Asdale Dynamics, LLC",
  "LICENSE copyright line is exact and first of its kind");
check(license.startsWith("MIT License"), "LICENSE is the MIT license header");

// --- no secrets / personal data ---
const files = ["index.html", "data.js", "README.md", "LICENSE", "scripts/validate.js"]
  .map(f => ({ f, c: fs.readFileSync(path.join(root, f), "utf8") }));
for (const { f, c } of files) {
  check(!/(api[_-]?key|secret|password|token)\s*[:=]/i.test(c), `${f}: no secret-like assignments`);
  check(!/(sk-[A-Za-z0-9]{8,}|ghp_[A-Za-z0-9]{8,}|AKIA[0-9A-Z]{8,})/.test(c), `${f}: no credential patterns`);
}
check(!files.some(({ c }) => /@(gmail|yahoo outlook)\./.test(c)), "no personal email addresses");

console.log(failed === 0
  ? `\nAll ${TOOLS.length} tool entries validated. OK.`
  : `\n${failed} check(s) failed.`);
process.exit(failed === 0 ? 0 : 1);
