#!/usr/bin/env node
// Mechanical consistency check of docs/. Dependency-free; run from anywhere: node scripts/docs-check.mjs
// Exit code 1 on any failure.
// Checks: required files, relative links, ADR status and index, STATE/LOG freshness,
// invariants have a check, working-tree docs changes come with STATE and LOG, skill mirrors.
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const docs = join(root, 'docs');
const problems = [];
const fail = (m) => problems.push(m);
const rel = (p) => relative(root, p).split(sep).join('/');
const read = (p) => readFileSync(p, 'utf8').replace(/\r\n/g, '\n');

function walk(dir, filter = () => true) {
  const out = [];
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) out.push(...walk(full, filter));
    else if (filter(full)) out.push(full);
  }
  return out;
}

// 1. Required files
for (const r of ['README.md', 'STATE.md', 'LOG.md', 'invariants.md', 'decisions/README.md']) {
  if (!existsSync(join(docs, r))) fail(`missing docs/${r}`);
}

// 2. Relative markdown links resolve (files and directories; anchors and URLs are skipped)
for (const file of walk(docs, (f) => f.endsWith('.md'))) {
  for (const m of read(file).matchAll(/\]\(([^)\s]+)\)/g)) {
    const target = m[1].split('#')[0];
    if (/^(https?:|mailto:)/.test(m[1]) || target === '') continue;
    if (!existsSync(resolve(dirname(file), target))) fail(`broken link in ${rel(file)}: ${m[1]}`);
  }
}

// 3. ADR files: name, status, supersession target, index agreement
const decDir = join(docs, 'decisions');
const adrs = new Map();
if (existsSync(decDir)) {
  for (const name of readdirSync(decDir).filter((n) => /^\d{4}-.*\.md$/.test(n))) {
    const num = name.slice(0, 4);
    const text = read(join(decDir, name));
    const sm = text.match(/^- Status: (.+?)\s*$/m);
    if (!sm) { fail(`${name}: no '- Status:' line`); continue; }
    const st = sm[1];
    let m;
    if ((m = st.match(/^Superseded by \[(\d{4})\]\((\S+?)\)/))) {
      adrs.set(num, `Superseded by ${m[1]}`);
      if (!existsSync(join(decDir, m[2]))) fail(`${name}: superseded-by target missing: ${m[2]}`);
    } else if ((m = st.match(/^(Proposed|Accepted|Rejected|Deprecated)\b/))) adrs.set(num, m[1]);
    else fail(`${name}: unknown status '${st}'`);
    if (!/^- Date: \d{4}-\d{2}-\d{2}/m.test(text)) fail(`${name}: no '- Date:' line`);
  }
  const indexPath = join(decDir, 'README.md');
  if (existsSync(indexPath)) {
    const listed = new Map();
    for (const m of read(indexPath).matchAll(/^\| \[(\d{4})\]\(([^)]+)\) \| .+? \| (.+?) \|\s*$/gm)) {
      listed.set(m[1], m[3]);
      if (!existsSync(join(decDir, m[2]))) fail(`decisions index: file missing for ${m[1]}`);
    }
    for (const [n, a] of adrs) {
      if (!listed.has(n)) { fail(`decisions index lacks ADR ${n}`); continue; }
      const l = listed.get(n);
      const ok = a.startsWith('Superseded by') ? l === a : l === a || l.startsWith(`${a} `) || l.startsWith(`${a}(`);
      if (!ok) fail(`ADR ${n}: index status '${l}' differs from file status '${a}'`);
    }
    for (const n of listed.keys()) if (!adrs.has(n)) fail(`decisions index lists ADR ${n} without a valid file`);
  }
}

// 4. STATE and LOG freshness
const statePath = join(docs, 'STATE.md');
const logPath = join(docs, 'LOG.md');
if (existsSync(statePath) && existsSync(logPath)) {
  const state = read(statePath);
  const lines = state.replace(/\n$/, '').split('\n').length;
  if (lines > 60) fail(`STATE.md has ${lines} lines (limit 60)`);
  const um = state.match(/^Updated: (\d{4}-\d{2}-\d{2})\s*$/m);
  const dates = [...read(logPath).matchAll(/^## (\d{4}-\d{2}-\d{2})/gm)].map((m) => m[1]);
  if (!um) fail("STATE.md has no 'Updated: YYYY-MM-DD' line");
  else if (!dates.length) fail("LOG.md has no '## YYYY-MM-DD' entries");
  else {
    const last = dates[dates.length - 1];
    if (dates.join() !== [...dates].sort().join()) fail('LOG.md entries are not in chronological order');
    if (last < um[1]) fail(`LOG.md last entry (${last}) is older than STATE.md Updated (${um[1]})`);
    const today = new Date();
    const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    if (um[1] > todayStr) fail('STATE.md Updated is in the future');
  }
}

// 5. Every invariant states how to check it
const invPath = join(docs, 'invariants.md');
if (existsSync(invPath)) {
  for (const sec of read(invPath).split(/^(?=## INV-\d)/m).filter((s) => /^## INV-\d/.test(s))) {
    const id = sec.match(/^## (INV-\d+)/)?.[1] ?? sec.split('\n')[0];
    if (!/^Check: .+/m.test(sec)) fail(`${id} has no 'Check:' line`);
  }
}

// 6. Docs changed in the working tree must come with STATE.md and LOG.md
try {
  const out = execFileSync('git', ['status', '--porcelain', '--untracked-files=all', '--', 'docs'], {
    cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'],
  });
  const changed = out.split('\n').filter(Boolean).map((l) => l.slice(3).replace(/^"|"$/g, '').trim());
  if (changed.length) {
    if (!changed.includes('docs/STATE.md')) fail('docs changed but docs/STATE.md was not updated');
    if (!changed.includes('docs/LOG.md')) fail('docs changed but docs/LOG.md was not appended');
  }
} catch { /* not a git checkout: nothing to compare */ }

// 7. Skill mirrors are identical (project root, and a templates/ payload when present)
for (const base of [root, join(root, 'templates')]) {
  const a = join(base, '.agents', 'skills');
  const c = join(base, '.claude', 'skills');
  if (!existsSync(a) || !existsSync(c)) continue;
  const map = new Map();
  for (const tree of [a, c]) {
    for (const f of walk(tree)) {
      const k = relative(tree, f).split(sep).join('/');
      const h = createHash('sha256').update(readFileSync(f)).digest('hex');
      map.set(k, [...(map.get(k) ?? []), h]);
    }
  }
  const where = rel(base) || '.';
  for (const [k, hs] of map) {
    if (hs.length !== 2) fail(`skill file only in one tree (${where}): ${k}`);
    else if (hs[0] !== hs[1]) fail(`skill mirror differs (${where}): ${k}`);
  }
}

if (problems.length) {
  for (const p of problems) console.log(`FAIL: ${p}`);
  console.log(`docs-check: ${problems.length} problem(s)`);
  process.exit(1);
}
console.log('docs-check: OK');
