// Writes the seven score fields from a score-master CSV (columns: model,slug,brand,overall,value,edge_support,trial_period,response_time,motion_transfer,cooling_breathability,...) into src/data/mattresses.ts. Only those seven columns are used. Run from the repo root.
import { readFileSync, writeFileSync } from 'node:fs';
const csv = readFileSync(process.argv[2] ?? (console.error('usage: node scripts/apply-score-master.mjs <score-master.csv>'), process.exit(1)),'utf8').split(/\r?\n/).filter(Boolean).slice(1);
const rows = csv.map(l => { const c=[]; let cur='',q=false; for (const ch of l){ if(ch==='"'){q=!q;cur+=ch} else if(ch===','&&!q){c.push(cur);cur=''} else cur+=ch } c.push(cur); return c; });
const file = 'src/data/mattresses.ts';
let t = readFileSync(file,'utf8');
const crlf = t.includes('\r\n'); if (crlf) t = t.replace(/\r\n/g,'\n');
let n=0;
for (const r of rows){
  const slug=r[1]; const [o,v,e,tr,rt,mt,cb]=r.slice(3,10).map(Number);
  const start = t.indexOf(`    id: "${slug}",`); if(start<0){console.log('NO ID',slug);continue}
  const re = /    scores: \{[^}]*\},/g; re.lastIndex = start; const m = re.exec(t);
  const next = t.indexOf('\n    id: "', start+10); if(next>=0 && m.index>next){console.log('scores past next model',slug);continue}
  const rep = `    scores: { overall: ${o}, value: ${v}, edgeSupport: ${e}, trialPeriod: ${tr}, responseTime: ${rt}, motionTransfer: ${mt}, coolingBreathability: ${cb} },`;
  t = t.slice(0,m.index)+rep+t.slice(m.index+m[0].length); n++;
}
if (crlf) t = t.replace(/\n/g,'\r\n');
writeFileSync(file,t); console.log('updated',n,'models');
