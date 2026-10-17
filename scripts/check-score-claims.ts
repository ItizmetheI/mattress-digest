// Flags prose that quotes a model's score ("AS3 ... 10/10 overall") when that number
// disagrees with the score in src/data/mattresses.ts. Heuristic: reports for manual review.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { allMattresses } from '../src/data/mattresses';

const METRICS: [string, RegExp, string][] = [
  ['overall', /overall/i, 'overall'],
  ['value', /value/i, 'value'],
  ['edgeSupport', /edge(?: support)?/i, 'edgeSupport'],
  ['trialPeriod', /trial(?: period)?/i, 'trialPeriod'],
  ['responseTime', /response(?: time)?/i, 'responseTime'],
  ['motionTransfer', /motion(?: transfer| isolation)?/i, 'motionTransfer'],
  ['coolingBreathability', /cooling(?: (?:&|and) breathability)?|breathability/i, 'coolingBreathability'],
];
const metricAlt = METRICS.map(m => m[1].source).join('|');
const afterRe = new RegExp(String.raw`^\s*(?:(?:on|for|in|at|from)\s+)?(?:the\s+)?(?:published\s+)?(${metricAlt})`, 'i');
const beforeRe = new RegExp(String.raw`(${metricAlt})(?:\s+(?:score|field|metric|rating))?(?:\s+(?:of|at|is|was|records?|scores?|lands?|posts?|hits?|earns?))?\s*[:(]?\s*$`, 'i');

const esc = (v: string) => v.replace(/[.*+?^$(){}|\[\]\\]/g, '\\$&');

const aliases: { alias: string; id: string }[] = [];
for (const m of allMattresses) {
  const brand = m.brand;
  const names = new Set<string>([m.name]);
  const noBrand = m.name.replace(new RegExp('^' + esc(brand) + '\\s+', 'i'), '');
  if (noBrand !== m.name) names.add(noBrand);
  const short = noBrand.replace(/\s+(Black Series|Mattress|Memory Foam Mattress)$/i, '');
  if (short.length > 2) names.add(short);
  for (const a of names) aliases.push({ alias: a, id: m.id });
}
aliases.sort((a, b) => b.alias.length - a.alias.length);
const byId = new Map(allMattresses.map(m => [m.id, m]));


function mentions(text: string) {
  const taken = new Array(text.length).fill(false);
  const found: { pos: number; id: string }[] = [];
  for (const { alias, id } of aliases) {
    const re = new RegExp('(?<![\\w])' + esc(alias) + '(?![\\w])', 'g');
    let r: RegExpExecArray | null;
    while ((r = re.exec(text))) {
      if (taken.slice(r.index, r.index + alias.length).some(Boolean)) continue;
      for (let i = r.index; i < r.index + alias.length; i++) taken[i] = true;
      found.push({ pos: r.index, id });
    }
  }
  return found.sort((a, b) => a.pos - b.pos);
}

function walk(dir: string, out: string[] = []) {
  for (const f of readdirSync(dir)) {
    const p = path.join(dir, f);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.(ts|tsx|astro)$/.test(f)) out.push(p);
  }
  return out;
}

const issues: string[] = [];
const stats = { claims: 0, withMetric: 0, withModel: 0 };
for (const file of walk('src')) {

  const lines = readFileSync(file, 'utf8').split(/\r?\n/);
  lines.forEach((line, i) => {
    if (/^\s*scores:\s*\{/.test(line)) return;
    const claimRe = /(?<![\d.–-])(\d+(?:\.\d)?)\/10/g;
    let c: RegExpExecArray | null;
    while ((c = claimRe.exec(line))) {
      stats.claims++;
      const claimed = Number(c[1]);
      const tail = line.slice(c.index + c[0].length);
      const head = line.slice(Math.max(0, c.index - 40), c.index);
      let key: string | null = null;
      const a = tail.slice(0, 40).match(afterRe);
      const b = head.match(beforeRe);
      const hit = a?.[1] ?? b?.[1];
      if (hit) key = METRICS.find(m => new RegExp(`^(?:${m[1].source})$`, 'i').test(hit.trim()))?.[2] ?? null;
      if (!key) continue;
      stats.withMetric++;
      const ms = mentions(line);
      if (!ms.length) continue;
      stats.withModel++;
      const before = ms.filter(x => x.pos < c!.index);
      const target = (before.length ? before[before.length - 1] : ms[0]).id;
      const actual = (byId.get(target)!.scores as any)[key];
      if (actual !== claimed) issues.push(`${file}:${i + 1}  ${target}  ${key}: text says ${claimed}, data says ${actual}  | ${line.trim().slice(Math.max(0, c.index - 70), c.index + 50)}`);
    }
  });
}
console.log(issues.join('\n'));
console.log(JSON.stringify(stats));
console.log(`\n${issues.length} stale-looking score claim(s)`);
process.exit(issues.length ? 1 : 0);
