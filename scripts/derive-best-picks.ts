// Prints the top six per best-category page derived from the score data by the ranking rules in
// SCORE_DATA_SOURCE.md, and compares them with src/lib/bestCategories.ts.
// Usage: npx tsx scripts/derive-best-picks.ts [--check]   (--check exits 1 when any page's picks differ)
import { allMattresses } from '../src/data/mattresses';
import { BEST_CATEGORIES } from '../src/lib/bestCategories';
const M:any[] = allMattresses as any;
const q=(m:any)=>{const r=m.sizePricing.find((s:any)=>/^queen$/i.test(s.size)); return r?Number(String(r.priceSale).replace(/[^0-9.]/g,'')):m.price};
const thick=(m:any)=>parseFloat(String(m.thickness));
const GUARD=new Set(['Amerisleep','Zoma','Vaya','FORM']);
const live=M.filter(m=>!m.availabilityNote && !/kids/.test(m.id));
const by=(...fs:((m:any)=>number)[])=>(a:any,b:any)=>{for(const f of fs){const d=f(b)-f(a); if(d) return d} const w=b.warrantyYears-a.warrantyYears; if(w) return w; const pr=q(a)-q(b); if(pr) return pr; return a.id.localeCompare(b.id)};
const S=(k:string)=>(m:any)=>m.scores[k];
const soft=(m:any)=>m.firmnessScale>=3&&m.firmnessScale<=5;
const firm=(m:any)=>m.firmnessScale>=6;
const organic=(m:any)=>m.certifications.some((c:string)=>/GOLS|GOTS/i.test(c));
const F=(m:any)=>m.firmnessScale;
const price=(m:any)=>q(m);
const asc=(f:(m:any)=>number)=>(m:any)=>-f(m);
const R:Record<string,[(m:any)=>boolean,any]>={
 overall:[()=>true,by(S('overall'),S('value'),m=>m.warrantyYears,m=>m.bestFor.length)],
 luxury:[m=>m.scores.overall>=9&&q(m)>=1500,by(S('overall'),S('value'),m=>m.warrantyYears)],
 cooling:[()=>true,by(S('coolingBreathability'),S('overall'),S('value'))],
 'side-sleepers':[soft,by(asc(F),S('overall'),S('motionTransfer'))],
 'back-pain':[firm,by(S('overall'),S('edgeSupport'),S('responseTime'))],
 'memory-foam':[m=>m.type==='memory-foam'||m.type==='foam',by(S('overall'),S('motionTransfer'),S('value'))],
 hybrid:[m=>m.type==='hybrid',by(S('overall'),S('edgeSupport'),S('value'))],
 organic:[organic,by(S('overall'),S('value'),m=>m.warrantyYears)],
 value:[()=>true,by(S('value'),S('overall'),asc(price))],
 'back-sleepers':[firm,by(S('responseTime'),S('overall'),S('edgeSupport'))],
 'stomach-sleepers':[firm,by(F,S('overall'),S('edgeSupport'))],
 'combination-sleepers':[m=>m.firmnessScale>=4&&m.firmnessScale<=6&&m.scores.responseTime>=9,by(S('responseTime'),S('motionTransfer'),S('overall'))],
 'heavy-sleepers':[m=>(m.type==='hybrid'||m.type==='innerspring')&&m.scores.edgeSupport>=9&&thick(m)>=12,by(S('edgeSupport'),thick,m=>m.warrantyYears,S('overall'))],
 couples:[m=>m.scores.motionTransfer>=9&&m.scores.edgeSupport>=9,by(m=>m.scores.motionTransfer+m.scores.edgeSupport,S('overall'),S('value'))],
 'hip-pain':[soft,by(asc(F),S('edgeSupport'),S('overall'))],
 'shoulder-pain':[soft,by(asc(F),S('coolingBreathability'),S('overall'))],
 'motion-isolation':[()=>true,by(S('motionTransfer'),S('overall'),S('value'))],
 'pressure-relief':[soft,by(asc(F),S('value'),S('overall'))],
};
const out:any={}; let drift=0;
for(const [cat,[flt,srt]] of Object.entries(R)){
  const minOv=['back-pain','back-sleepers','stomach-sleepers','memory-foam'].includes(cat)?8.8:9.0; const cand=live.filter(m=>m.scores.overall>=minOv).filter(flt).sort(srt); const picks:any[]=[]; const brandN:any={}; let g=0;
  for(const m of cand){ if(picks.length===6)break; if((brandN[m.brand]||0)>=2)continue; if(GUARD.has(m.brand)&&g>=3)continue; picks.push(m); brandN[m.brand]=(brandN[m.brand]||0)+1; if(GUARD.has(m.brand))g++; }
  const brands=new Set(picks.map(p=>p.brand)).size;
  out[cat]={picks:picks.map(p=>p.id),brands,cands:cand.length};
  const cur=(BEST_CATEGORIES as any)[cat]; const same=cur.picks.filter((id:string)=>out[cat].picks.includes(id)).length; if (cur.picks.join()!==out[cat].picks.join()) drift++;
  console.log(`\n${cat}  (${cand.length} qualify, ${brands} brands, ${same}/6 same as the page; currently on the page: winner ${cur.winner})`);
  picks.forEach((p,i)=>console.log(`  ${i+1}. ${p.id}  ov${p.scores.overall} val${p.scores.value} edge${p.scores.edgeSupport} resp${p.scores.responseTime} mot${p.scores.motionTransfer} cool${p.scores.coolingBreathability} firm${p.firmnessScale} ${p.type} ${thick(p)}in $${q(p)} ${p.warrantyYears}y`));
}

console.log(`
${drift} categor${drift===1?'y':'ies'} differ from bestCategories.ts`);
if (process.argv.includes('--check') && drift) process.exit(1);
