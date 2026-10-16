// Foundations category schema — box springs, bed bases, bunkie boards,
// slatted bases. Second category built on the pattern established in
// src/data/beds.ts (see TAXONOMY.md for the full tree and reasoning).

import { reviewer_editorial, type Reviewer } from './mattresses';

export type FoundationType = 'box-spring' | 'bed-base' | 'bunkie-board' | 'slatted-base';

export interface FoundationScore {
  overall: number;
  supportQuality: number;
  stabilityNoise: number;
  easeOfAssembly: number;
  value: number;
  durability: number;
}

export interface Foundation {
  id: string;
  name: string;
  brand: string;
  model: string;
  foundationType: FoundationType;
  price: number;
  priceRange: string;
  priceSale: string;
  productUrl: string;
  availabilityNote?: string;
  image: string;
  heroImage: string;

  heightInches: number;
  slatSpacingInches?: number;
  weightCapacityLbs: number;
  compatibleWith: string[]; // e.g. "adjustable bases", "platform bed frames"
  assemblyTimeMinutes: number;
  warrantyYears: number;
  certifications: string[];

  scores: FoundationScore;
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

const SCORE_LABELS: Array<[keyof FoundationScore, string]> = [
  ['supportQuality', 'Support Quality'],
  ['stabilityNoise', 'Stability & Noise'],
  ['easeOfAssembly', 'Ease of Assembly'],
  ['value', 'Value'],
  ['durability', 'Durability'],
];

type RawFoundation = Omit<Foundation, 'summary' | 'verdict' | 'pros' | 'cons' | 'faqs'>;

const normalizeFoundationReview = (f: RawFoundation): Foundation => {
  const rankedMetrics = SCORE_LABELS
    .map(([key, label]) => ({ label, score: f.scores[key] }))
    .sort((a, b) => b.score - a.score || a.label.localeCompare(b.label));
  const strongest = rankedMetrics.slice(0, 2);
  const weakest = rankedMetrics[rankedMetrics.length - 1];

  const pros = [
    `${strongest[0].label}: ${strongest[0].score}/10 in the locked scorecard`,
    `${strongest[1].label}: ${strongest[1].score}/10 in the locked scorecard`,
    `Source dataset records a ${f.warrantyYears}-year warranty; verify current terms`,
  ];
  const cons = [
    `${weakest.label}: ${weakest.score}/10, the model's lowest recorded metric`,
    'Recorded prices, dimensions, and availability can change',
    `Rated for ${f.weightCapacityLbs} lbs; verify current spec sheet for your mattress weight`,
  ];

  const faqs = [
    {
      question: `What is the ${f.name} overall score?`,
      answer: `${f.name} scores ${f.scores.overall}/10 overall in The Mattress Digest's locked foundation scorecard. Its strongest recorded fields are ${strongest[0].label} (${strongest[0].score}/10) and ${strongest[1].label} (${strongest[1].score}/10).`,
    },
    {
      question: `What is the ${f.name} compatible with?`,
      answer: `The source dataset records compatibility with ${f.compatibleWith.join(', ')}. Verify current compatibility with ${f.brand} before purchasing, especially for adjustable or platform setups.`,
    },
    {
      question: `How tall is the ${f.name}?`,
      answer: `The recorded height is ${f.heightInches} inches${f.slatSpacingInches ? `, with ${f.slatSpacingInches}-inch slat spacing` : ''}. This affects total bed height when paired with a mattress — measure your bedroom clearance before ordering.`,
    },
  ];

  const summary = `${f.name} is a ${f.foundationType.replaceAll('-', ' ')} at ${f.heightInches} inches tall, rated for ${f.weightCapacityLbs} lbs. It records ${f.scores.overall}/10 Overall, with its strongest fields in ${strongest[0].label} and ${strongest[1].label}.`;
  const verdict = `${f.name} records ${f.scores.overall}/10 Overall. Its strongest scorecard fields are ${strongest[0].label} (${strongest[0].score}/10) and ${strongest[1].label} (${strongest[1].score}/10). Fit guidance is editorial and individual setups can vary.`;

  return { ...f, summary, verdict, pros, cons, faqs };
};

// Two example entries proving the schema. Not the catalog — see TAXONOMY.md
// build order step 3. Placeholder images: no licensed foundation photography
// exists yet; these use a mattress placeholder and must not ship to a public
// route until replaced with real product photos.
const foundationRecords: RawFoundation[] = [
  {
    id: 'classic-brands-instant-foundation-low-profile',
    name: 'Classic Brands Instant Foundation Low Profile',
    brand: 'Classic Brands',
    model: 'Instant Foundation Low Profile 4-Inch',
    foundationType: 'box-spring',
    price: 89,
    priceRange: '$69 – $139',
    priceSale: 'from $69',
    productUrl: 'https://www.amazon.com/Classic-Brands-Foundation-Box-Spring-Replacement/dp/B00JITHL7E',
    image: '/images/mattresses/amerisleep-as3.webp', // placeholder — needs a real, licensed product photo before this leaves draft
    heroImage: '/images/mattresses/amerisleep-as3.webp',
    heightInches: 4,
    weightCapacityLbs: 550,
    compatibleWith: ['most mattress types', 'traditional bed frames needing a low profile'],
    assemblyTimeMinutes: 20,
    warrantyYears: 3,
    certifications: [],
    scores: {
      overall: 7,
      supportQuality: 7,
      stabilityNoise: 7,
      easeOfAssembly: 8,
      value: 8,
      durability: 7,
    },
    reviewer: reviewer_editorial,
    dateReviewed: '2026-07-14',
    dateModified: '2026-07-14',
    bestFor: ['Buyers replacing a traditional box spring', 'Low bed-height preference', 'Budget setups'],
    tags: ['box-spring-replacement', 'low-profile', 'wood-frame'],
    features: [
      { name: 'Solid spruce frame', description: 'Recorded solid spruce construction, designed to stand in for a traditional box spring at a lower 4" profile.' },
      { name: 'Removable cotton-blend cover', description: 'Drawstring cotton-blend cover recorded as removable, per the manufacturer spec sheet.' },
    ],
  },
  {
    id: 'saatva-standard-box-spring',
    name: 'Saatva Standard Box Spring',
    brand: 'Saatva',
    model: 'Standard Box Spring',
    foundationType: 'box-spring',
    price: 260,
    priceRange: '$220 – $340',
    priceSale: 'from $220',
    productUrl: 'https://www.saatva.com/foundations',
    image: '/images/mattresses/amerisleep-as3.webp', // placeholder — needs a real, licensed product photo before this leaves draft
    heroImage: '/images/mattresses/amerisleep-as3.webp',
    heightInches: 9,
    weightCapacityLbs: 1000,
    compatibleWith: ['innerspring mattresses', 'hybrid mattresses'],
    assemblyTimeMinutes: 20,
    warrantyYears: 15,
    certifications: [],
    scores: {
      overall: 8,
      supportQuality: 9,
      stabilityNoise: 8,
      easeOfAssembly: 7,
      value: 6,
      durability: 9,
    },
    reviewer: reviewer_editorial,
    dateReviewed: '2026-07-14',
    dateModified: '2026-07-14',
    bestFor: ['Innerspring and hybrid mattress owners', 'Traditional bed-frame setups'],
    tags: ['box-spring', 'traditional-foundation'],
    features: [
      { name: 'Wood frame construction', description: 'Recorded solid wood frame designed to work with traditional bed frames and mattresses needing shock absorption.' },
      { name: 'Fabric-wrapped', description: 'Wrapped exterior finish per the manufacturer spec sheet, intended to match a bedroom without a separate frame skirt.' },
    ],
  },
  {
    id: 'malouf-structures-e255-adjustable-base',
    name: 'Malouf Structures E255 Adjustable Base',
    brand: 'Malouf',
    model: 'Structures E255',
    foundationType: 'bed-base',
    price: 799,
    priceRange: '$599 – $1,099',
    priceSale: 'from $599',
    productUrl: 'https://maloufhome.com/collections/adjustable-bases',
    image: '/images/mattresses/amerisleep-as3.webp', // placeholder — needs a real, licensed product photo before this leaves draft
    heroImage: '/images/mattresses/amerisleep-as3.webp',
    heightInches: 15,
    weightCapacityLbs: 750,
    compatibleWith: ['most mattress types', 'no box spring needed', 'zero-clearance platform and slat beds'],
    assemblyTimeMinutes: 30,
    warrantyYears: 10,
    certifications: [],
    scores: {
      overall: 8,
      supportQuality: 8,
      stabilityNoise: 7,
      easeOfAssembly: 6,
      value: 7,
      durability: 8,
    },
    reviewer: reviewer_editorial,
    dateReviewed: '2026-07-14',
    dateModified: '2026-07-14',
    bestFor: ['Buyers wanting independent head/foot incline', 'Zero-clearance setups on existing platform frames', 'Upgrading from a flat foundation'],
    tags: ['bed-base', 'adjustable-base', 'no-box-spring'],
    features: [
      { name: 'Independent head and foot incline', description: 'Recorded 0-60° head incline and 0-45° foot incline, controlled independently per the manufacturer spec sheet.' },
      { name: 'True zero clearance', description: 'Modular legs (3", 6", 9", or 12") can be removed to sit the base directly on an existing platform frame or the floor.' },
    ],
  },
];

export const allFoundations = foundationRecords.map(normalizeFoundationReview);
