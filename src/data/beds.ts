// Beds category schema — first new product type built on top of the
// mattress-review architecture (see TAXONOMY.md for the full category tree
// and why each category gets its own scoring rubric instead of one shared
// "Product" interface).
//
// Pattern mirrors src/data/mattresses.ts deliberately: raw editorial records
// in, normalizeBedReview() derives pros/cons/FAQs/summary/verdict from the
// scored fields out. That's what keeps a large catalog internally consistent
// without hand-writing repetitive copy per entry. Replicate this same shape
// for Foundations, Pillows, and Bedding & Accessories next.

import { reviewer_editorial, type Reviewer } from './mattresses';

export type BedType =
  | 'bunk' | 'loft' | 'platform' | 'trundle'
  | 'murphy' | 'canopy' | 'futon' | 'kids';

export interface BedScore {
  overall: number;
  buildQuality: number;
  stabilityNoise: number;
  easeOfAssembly: number;
  value: number;
  versatility: number;
}

export interface Bed {
  id: string;
  name: string;
  brand: string;
  model: string;
  bedType: BedType;
  price: number;
  priceRange: string;
  priceSale: string;
  productUrl: string;
  availabilityNote?: string;
  image: string;
  heroImage: string;

  frameMaterial: 'solid-wood' | 'engineered-wood' | 'metal' | 'upholstered' | 'mixed';
  sizesAvailable: string[];
  weightCapacityLbs: number;
  maxMattressThicknessInches: number;
  underbedStorage: boolean;
  boxSpringRequired: boolean;
  assemblyTimeMinutes: number;
  warrantyYears: number;
  certifications: string[];

  scores: BedScore;
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

const SCORE_LABELS: Array<[keyof BedScore, string]> = [
  ['buildQuality', 'Build Quality'],
  ['stabilityNoise', 'Stability & Noise'],
  ['easeOfAssembly', 'Ease of Assembly'],
  ['value', 'Value'],
  ['versatility', 'Versatility'],
];

// Raw record shape before the derived editorial fields exist yet.
type RawBed = Omit<Bed, 'bestFor' | 'summary' | 'verdict' | 'pros' | 'cons' | 'faqs'> & {
  bestFor: string[];
};

const normalizeBedReview = (bed: RawBed): Bed => {
  const rankedMetrics = SCORE_LABELS
    .map(([key, label]) => ({ label, score: bed.scores[key] }))
    .sort((a, b) => b.score - a.score || a.label.localeCompare(b.label));
  const strongest = rankedMetrics.slice(0, 2);
  const weakest = rankedMetrics[rankedMetrics.length - 1];

  const pros = [
    `${strongest[0].label}: ${strongest[0].score}/10 in the locked scorecard`,
    `${strongest[1].label}: ${strongest[1].score}/10 in the locked scorecard`,
    `Source dataset records a ${bed.warrantyYears}-year warranty; verify current terms`,
  ];
  const cons = [
    `${weakest.label}: ${weakest.score}/10, the model's lowest recorded metric`,
    'Recorded prices, dimensions, and availability can change',
    `Rated for ${bed.weightCapacityLbs} lbs; verify current spec sheet for your use case`,
  ];

  const faqs = [
    {
      question: `What is the ${bed.name} overall score?`,
      answer: `${bed.name} scores ${bed.scores.overall}/10 overall in The Mattress Digest's locked bed scorecard. Its strongest recorded fields are ${strongest[0].label} (${strongest[0].score}/10) and ${strongest[1].label} (${strongest[1].score}/10).`,
    },
    {
      question: `Who is the ${bed.name} best suited to?`,
      answer: `The recorded fit profile is strongest for ${bed.bestFor.slice(0, 3).join(', ')}. It is a ${bed.bedType} bed frame built from ${bed.frameMaterial.replaceAll('-', ' ')}, rated for ${bed.weightCapacityLbs} lbs.`,
    },
    {
      question: `Does the ${bed.name} need a box spring?`,
      answer: bed.boxSpringRequired
        ? `Yes — the source dataset records this frame as requiring a box spring or foundation. Verify current requirements with ${bed.brand} before purchasing.`
        : `No — the source dataset records this frame as not requiring a box spring, up to a maximum mattress thickness of ${bed.maxMattressThicknessInches} inches. Verify current requirements with ${bed.brand} before purchasing.`,
    },
  ];

  const summary = `${bed.name} is a ${bed.bedType} bed frame in ${bed.frameMaterial.replaceAll('-', ' ')}, rated for ${bed.weightCapacityLbs} lbs. It records ${bed.scores.overall}/10 Overall, with its strongest fields in ${strongest[0].label} and ${strongest[1].label}.`;
  const verdict = `${bed.name} records ${bed.scores.overall}/10 Overall. Its strongest scorecard fields are ${strongest[0].label} (${strongest[0].score}/10) and ${strongest[1].label} (${strongest[1].score}/10). Fit guidance is editorial and individual needs can vary.`;

  return { ...bed, summary, verdict, pros, cons, faqs };
};

// Two example entries proving the schema against real products. Not the
// catalog — see TAXONOMY.md build order step 3. Next: expand per bed type,
// then build the /beds/ index, /beds/[id]/, and /best/[bed-category]/
// templates (adapted from the existing mattress equivalents) before either
// entry is reachable from navigation.
const bedRecords: RawBed[] = [
  {
    id: 'zinus-suzanne-platform-bed',
    name: 'Zinus Suzanne Platform Bed',
    brand: 'Zinus',
    model: 'Suzanne',
    bedType: 'platform',
    price: 219,
    priceRange: '$179 – $349',
    priceSale: 'from $179',
    productUrl: 'https://www.zinus.com/products/suzanne-platform-bed-frame-with-usb-port',
    image: '/images/mattresses/amerisleep-as3.webp', // placeholder — needs a real, licensed bed photo before this leaves draft
    heroImage: '/images/mattresses/amerisleep-as3.webp',
    frameMaterial: 'metal',
    sizesAvailable: ['Twin', 'Full', 'Queen', 'King', 'Cal King'],
    weightCapacityLbs: 500,
    maxMattressThicknessInches: 14,
    underbedStorage: true,
    boxSpringRequired: false,
    assemblyTimeMinutes: 30,
    warrantyYears: 5,
    certifications: [],
    scores: {
      overall: 8,
      buildQuality: 7,
      stabilityNoise: 8,
      easeOfAssembly: 9,
      value: 9,
      versatility: 7,
    },
    reviewer: reviewer_editorial,
    dateReviewed: '2026-07-14',
    dateModified: '2026-07-14',
    bestFor: ['Budget buyers', 'Renters', 'Small bedrooms needing underbed storage'],
    tags: ['platform-bed', 'no-box-spring', 'metal-frame'],
    features: [
      { name: 'Steel slat support', description: 'Reinforced steel slats rated to eliminate the need for a box spring or foundation.' },
      { name: '14" clearance', description: 'Enough underbed clearance for standard storage bins across most recorded sizes.' },
    ],
  },
  {
    id: 'max-lily-twin-over-full-bunk',
    name: 'Max & Lily Twin Over Full Bunk Bed',
    brand: 'Max & Lily',
    model: 'Twin Over Full Bunk',
    bedType: 'bunk',
    price: 799,
    priceRange: '$699 – $949',
    priceSale: 'from $699',
    productUrl: 'https://maxandlily.com/products/twin-over-full-bunk-bed',
    image: '/images/mattresses/amerisleep-as3.webp', // placeholder — needs a real, licensed bed photo before this leaves draft
    heroImage: '/images/mattresses/amerisleep-as3.webp',
    frameMaterial: 'solid-wood',
    sizesAvailable: ['Twin Over Full'],
    weightCapacityLbs: 400,
    maxMattressThicknessInches: 8,
    underbedStorage: false,
    boxSpringRequired: false,
    assemblyTimeMinutes: 120,
    warrantyYears: 1,
    certifications: ['GREENGUARD Gold'],
    scores: {
      overall: 8,
      buildQuality: 9,
      stabilityNoise: 8,
      easeOfAssembly: 5,
      value: 7,
      versatility: 8,
    },
    reviewer: reviewer_editorial,
    dateReviewed: '2026-07-14',
    dateModified: '2026-07-14',
    bestFor: ['Siblings sharing a room', 'Guest rooms needing two sleep spaces', 'Families wanting solid-wood construction'],
    tags: ['bunk-bed', 'kids-beds', 'solid-wood'],
    features: [
      { name: 'Full-length guardrails', description: 'Recorded guardrails on the upper bunk on all open sides, per the manufacturer spec sheet.' },
      { name: 'Twin-over-full configuration', description: 'Upper twin bunk over a lower full-size bunk, built from solid pine.' },
    ],
  },
  {
    id: 'dhp-abode-full-metal-loft-bed',
    name: 'DHP Abode Full Size Metal Loft Bed',
    brand: 'DHP',
    model: 'Abode Full Metal Loft Bed',
    bedType: 'loft',
    price: 219,
    priceRange: '$189 – $259',
    priceSale: 'from $189',
    productUrl: 'https://www.amazon.com/DHP-Abode-Full-Size-Metal-Ladder/dp/B008VHHWMI',
    image: '/images/mattresses/amerisleep-as3.webp', // placeholder — needs a real, licensed product photo before this leaves draft
    heroImage: '/images/mattresses/amerisleep-as3.webp',
    frameMaterial: 'metal',
    sizesAvailable: ['Full'],
    weightCapacityLbs: 300,
    maxMattressThicknessInches: 6,
    underbedStorage: true,
    boxSpringRequired: false,
    assemblyTimeMinutes: 90,
    warrantyYears: 1,
    certifications: [],
    scores: {
      overall: 7,
      buildQuality: 6,
      stabilityNoise: 6,
      easeOfAssembly: 6,
      value: 8,
      versatility: 7,
    },
    reviewer: reviewer_editorial,
    dateReviewed: '2026-07-14',
    dateModified: '2026-07-14',
    bestFor: ['Small bedrooms needing floor space', 'Teens wanting a desk or seating area underneath', 'Budget dorm-style setups'],
    tags: ['loft-bed', 'kids-beds', 'metal-frame'],
    features: [
      { name: 'Full-length guardrails and dual ladders', description: 'Recorded upper guardrails and two ladder access points, per the manufacturer spec sheet.' },
      { name: '6" max mattress thickness', description: 'Recorded maximum mattress height of 6", intended to keep the guardrails effective at full loft height.' },
    ],
  },
  {
    id: 'zinus-suzanne-daybed-with-trundle',
    name: 'Zinus Suzanne Daybed with Trundle',
    brand: 'Zinus',
    model: 'Suzanne Daybed with Trundle',
    bedType: 'trundle',
    price: 329,
    priceRange: '$279 – $399',
    priceSale: 'from $279',
    productUrl: 'https://www.amazon.com/Zinus-Suzanne-Daybed-Trundle-OLB-IRDBS-39/dp/B077H7PW7J',
    image: '/images/mattresses/amerisleep-as3.webp', // placeholder — needs a real, licensed product photo before this leaves draft
    heroImage: '/images/mattresses/amerisleep-as3.webp',
    frameMaterial: 'mixed',
    sizesAvailable: ['Twin'],
    weightCapacityLbs: 350,
    maxMattressThicknessInches: 10,
    underbedStorage: false,
    boxSpringRequired: false,
    assemblyTimeMinutes: 60,
    warrantyYears: 1,
    certifications: [],
    scores: {
      overall: 7,
      buildQuality: 7,
      stabilityNoise: 7,
      easeOfAssembly: 6,
      value: 8,
      versatility: 8,
    },
    reviewer: reviewer_editorial,
    dateReviewed: '2026-07-14',
    dateModified: '2026-07-14',
    bestFor: ['Guest rooms needing a second sleep space', 'Small bedrooms doubling as a sitting area', 'Sleepovers and shared kids rooms'],
    tags: ['trundle-bed', 'daybed', 'bamboo', 'metal-frame'],
    features: [
      { name: 'Roll-out trundle', description: 'Steel-slat trundle frame rolls out from underneath for a second Twin sleep space; no box spring needed on either level.' },
      { name: 'Bamboo and metal frame', description: 'Bamboo headboard and footboard over a black steel daybed frame, per the manufacturer spec sheet.' },
    ],
  },
];

export const allBeds = bedRecords.map(normalizeBedReview);
