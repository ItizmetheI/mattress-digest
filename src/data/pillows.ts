// Pillows category schema — third category built on the pattern established
// in src/data/beds.ts (see TAXONOMY.md for the full tree and reasoning).

import { reviewer_editorial, type Reviewer } from './mattresses';

export type PillowCategory = 'standard' | 'body' | 'neck' | 'lumbar';
export type PillowFill = 'memory-foam' | 'down' | 'down-alternative' | 'latex' | 'buckwheat' | 'polyfoam';

export interface PillowScore {
  overall: number;
  supportAlignment: number;
  pressureRelief: number;
  coolingBreathability: number;
  loftRetention: number;
  value: number;
}

export interface Pillow {
  id: string;
  name: string;
  brand: string;
  model: string;
  pillowCategory: PillowCategory;
  fill: PillowFill;
  price: number;
  priceRange: string;
  priceSale: string;
  productUrl: string;
  availabilityNote?: string;
  image: string;
  heroImage: string;

  loft: 'low' | 'medium' | 'high' | 'adjustable';
  sizesAvailable: string[];
  washable: boolean;
  trialNights: number;
  warrantyYears: number;
  certifications: string[];

  scores: PillowScore;
  reviewer: Reviewer;
  dateReviewed: string;
  dateModified: string;
  bestFor: string[];
  tags: string[];
  pros: string[];
  cons: string[];
  summary: string;
  verdict: string;
  features: { name: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedComparisons?: string[];
  relatedTopics?: string[];
}

const SCORE_LABELS: Array<[keyof PillowScore, string]> = [
  ['supportAlignment', 'Support & Alignment'],
  ['pressureRelief', 'Pressure Relief'],
  ['coolingBreathability', 'Cooling & Breathability'],
  ['loftRetention', 'Loft Retention'],
  ['value', 'Value'],
];

type RawPillow = Omit<Pillow, 'summary' | 'verdict' | 'pros' | 'cons' | 'faqs'>;

const normalizePillowReview = (p: RawPillow): Pillow => {
  const rankedMetrics = SCORE_LABELS
    .map(([key, label]) => ({ label, score: p.scores[key] }))
    .sort((a, b) => b.score - a.score || a.label.localeCompare(b.label));
  const strongest = rankedMetrics.slice(0, 2);
  const weakest = rankedMetrics[rankedMetrics.length - 1];
  const trialText = p.trialNights > 0 ? `${p.trialNights}-night trial` : 'no home-trial period';

  const pros = [
    `${strongest[0].label}: ${strongest[0].score}/10 in the locked scorecard`,
    `${strongest[1].label}: ${strongest[1].score}/10 in the locked scorecard`,
    `Source dataset records a ${trialText} and ${p.warrantyYears}-year warranty; verify current terms`,
  ];
  const cons = [
    `${weakest.label}: ${weakest.score}/10, the model's lowest recorded metric`,
    'Recorded prices, loft, and availability can change',
    `${p.washable ? 'Machine-washable per the source dataset, but check the current care label' : 'Not recorded as machine-washable; check the current care label'}`,
  ];

  const faqs = [
    {
      question: `What is the ${p.name} overall score?`,
      answer: `${p.name} scores ${p.scores.overall}/10 overall in The Mattress Digest's locked pillow scorecard. Its strongest recorded fields are ${strongest[0].label} (${strongest[0].score}/10) and ${strongest[1].label} (${strongest[1].score}/10).`,
    },
    {
      question: `Who is the ${p.name} best suited to?`,
      answer: `The recorded fit profile is strongest for ${p.bestFor.slice(0, 3).join(', ')}. It is a ${p.fill.replaceAll('-', ' ')} ${p.pillowCategory} pillow with ${p.loft} loft.`,
    },
    {
      question: `Is the ${p.name} washable?`,
      answer: p.washable
        ? `Yes — the source dataset records this pillow as machine-washable. Verify the current care label with ${p.brand} before washing.`
        : `The source dataset does not record this pillow as machine-washable. Spot-clean or verify current care instructions with ${p.brand}.`,
    },
  ];

  const summary = `${p.name} is a ${p.fill.replaceAll('-', ' ')} ${p.pillowCategory} pillow with ${p.loft} loft. It records ${p.scores.overall}/10 Overall, with its strongest fields in ${strongest[0].label} and ${strongest[1].label}.`;
  const verdict = `${p.name} records ${p.scores.overall}/10 Overall. Its strongest scorecard fields are ${strongest[0].label} (${strongest[0].score}/10) and ${strongest[1].label} (${strongest[1].score}/10). Fit guidance is editorial and individual comfort can vary.`;

  return { ...p, summary, verdict, pros, cons, faqs };
};

// Two example entries proving the schema. Not the catalog — see TAXONOMY.md
// build order step 3. Placeholder images: no licensed pillow photography
// exists yet; these use a mattress placeholder and must not ship to a public
// route until replaced with real product photos.
const pillowRecords: RawPillow[] = [
  {
    id: 'coop-original-adjustable-pillow',
    name: 'Coop Home Goods Original Adjustable Pillow',
    brand: 'Coop Home Goods',
    model: 'Original',
    pillowCategory: 'standard',
    fill: 'memory-foam',
    price: 79,
    priceRange: '$59 – $99',
    priceSale: 'from $59',
    productUrl: 'https://coopsleepgoods.com/products/the-original-pillow',
    image: '/images/mattresses/amerisleep-as3.webp', // placeholder — needs a real, licensed product photo before this leaves draft
    heroImage: '/images/mattresses/amerisleep-as3.webp',
    loft: 'adjustable',
    sizesAvailable: ['Standard', 'Queen', 'King'],
    washable: true,
    trialNights: 100,
    warrantyYears: 5,
    certifications: ['CertiPUR-US'],
    scores: {
      overall: 9,
      supportAlignment: 9,
      pressureRelief: 8,
      coolingBreathability: 7,
      loftRetention: 8,
      value: 9,
    },
    reviewer: reviewer_editorial,
    dateReviewed: '2026-07-14',
    dateModified: '2026-07-14',
    bestFor: ['Side and back sleepers', 'Buyers wanting adjustable loft', 'Combination sleepers'],
    tags: ['memory-foam-pillow', 'adjustable-loft', 'washable'],
    features: [
      { name: 'Shredded memory foam fill', description: 'Recorded shredded memory foam and microfiber blend that can be added or removed to adjust loft.' },
      { name: 'Removable, washable cover', description: 'Bamboo-derived rayon cover recorded as machine-washable, per the manufacturer spec sheet.' },
    ],
  },
  {
    id: 'saatva-latex-pillow',
    name: 'Saatva Latex Pillow',
    brand: 'Saatva',
    model: 'Latex Pillow',
    pillowCategory: 'standard',
    fill: 'latex',
    price: 165,
    priceRange: '$145 – $185',
    priceSale: 'from $145',
    productUrl: 'https://www.saatva.com/pillows/latex-pillow',
    image: '/images/mattresses/amerisleep-as3.webp', // placeholder — needs a real, licensed product photo before this leaves draft
    heroImage: '/images/mattresses/amerisleep-as3.webp',
    loft: 'high',
    sizesAvailable: ['Standard/Queen', 'King'],
    washable: false,
    trialNights: 45,
    warrantyYears: 2,
    certifications: ['GOLS'],
    scores: {
      overall: 8,
      supportAlignment: 8,
      pressureRelief: 7,
      coolingBreathability: 9,
      loftRetention: 9,
      value: 6,
    },
    reviewer: reviewer_editorial,
    dateReviewed: '2026-07-14',
    dateModified: '2026-07-14',
    bestFor: ['Hot sleepers', 'Back and side sleepers wanting firmer support', 'Buyers preferring natural materials'],
    tags: ['latex-pillow', 'cooling', 'natural-materials'],
    features: [
      { name: 'Shredded natural latex fill', description: 'Recorded shredded Talalay latex fill, positioned by the brand as more breathable than solid latex.' },
      { name: 'Organic cotton cover', description: 'GOTS-referenced organic cotton cover per the manufacturer spec sheet; verify current certification scope.' },
    ],
  },
  {
    id: 'purple-harmony-pillow',
    name: 'Purple Harmony Pillow',
    brand: 'Purple',
    model: 'Harmony Pillow',
    pillowCategory: 'standard',
    fill: 'latex',
    price: 199,
    priceRange: '$179 – $229',
    priceSale: 'from $179',
    productUrl: 'https://purple.com/pillows/harmony',
    image: '/images/mattresses/amerisleep-as3.webp', // placeholder — needs a real, licensed product photo before this leaves draft
    heroImage: '/images/mattresses/amerisleep-as3.webp',
    loft: 'adjustable',
    sizesAvailable: ['Standard', 'King'],
    washable: false,
    trialNights: 30,
    warrantyYears: 1,
    certifications: [],
    scores: {
      overall: 8,
      supportAlignment: 8,
      pressureRelief: 8,
      coolingBreathability: 8,
      loftRetention: 8,
      value: 6,
    },
    reviewer: reviewer_editorial,
    dateReviewed: '2026-07-14',
    dateModified: '2026-07-14',
    bestFor: ['Buyers wanting a firmer latex core', 'Hot sleepers', 'Back and side sleepers'],
    tags: ['latex-pillow', 'purple-grid', 'adjustable-loft'],
    features: [
      { name: 'Purple Grid hex top layer', description: 'Recorded Hyper-Elastic Polymer grid layer over a Talalay latex core, offered in three loft heights (5.5", 6.5", 7.5") per the manufacturer spec sheet.' },
      { name: 'Two case sizes', description: 'Standard and King sizing recorded, each available across all three loft options.' },
    ],
  },
];

export const allPillows = pillowRecords.map(normalizePillowReview);
