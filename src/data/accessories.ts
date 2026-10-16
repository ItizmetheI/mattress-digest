// Bedding & Accessories category schema — mattress toppers, mattress
// protectors, blankets, headboards. Fourth category on the pattern
// established in src/data/beds.ts (see TAXONOMY.md for the full tree).
//
// These four sub-types have the least in common of any category here (a
// headboard and a mattress protector share almost no meaningful spec), so
// the rubric below is deliberately the most general of the four new
// categories - it scores what a shopper cares about regardless of which
// sub-type they're comparing, rather than forcing topper-specific fields
// (cooling, thickness) onto a headboard.

import { reviewer_editorial, type Reviewer } from './mattresses';

export type AccessoryType = 'mattress-topper' | 'mattress-protector' | 'blanket' | 'headboard';

export interface AccessoryScore {
  overall: number;
  materialQuality: number;
  comfortFunction: number;
  easeOfUse: number;
  durability: number;
  value: number;
}

export interface Accessory {
  id: string;
  name: string;
  brand: string;
  model: string;
  accessoryType: AccessoryType;
  price: number;
  priceRange: string;
  priceSale: string;
  productUrl: string;
  availabilityNote?: string;
  image: string;
  heroImage: string;

  material: string;
  sizesAvailable: string[];
  careInstructions: string;
  trialNights: number;
  warrantyYears: number;
  certifications: string[];

  scores: AccessoryScore;
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

const SCORE_LABELS: Array<[keyof AccessoryScore, string]> = [
  ['materialQuality', 'Material Quality'],
  ['comfortFunction', 'Comfort & Function'],
  ['easeOfUse', 'Ease of Use'],
  ['durability', 'Durability'],
  ['value', 'Value'],
];

type RawAccessory = Omit<Accessory, 'summary' | 'verdict' | 'pros' | 'cons' | 'faqs'>;

const normalizeAccessoryReview = (a: RawAccessory): Accessory => {
  const rankedMetrics = SCORE_LABELS
    .map(([key, label]) => ({ label, score: a.scores[key] }))
    .sort((x, y) => y.score - x.score || x.label.localeCompare(y.label));
  const strongest = rankedMetrics.slice(0, 2);
  const weakest = rankedMetrics[rankedMetrics.length - 1];
  const trialText = a.trialNights > 0 ? `${a.trialNights}-night trial` : 'no home-trial period';

  const pros = [
    `${strongest[0].label}: ${strongest[0].score}/10 in the locked scorecard`,
    `${strongest[1].label}: ${strongest[1].score}/10 in the locked scorecard`,
    `Source dataset records a ${trialText} and ${a.warrantyYears}-year warranty; verify current terms`,
  ];
  const cons = [
    `${weakest.label}: ${weakest.score}/10, the model's lowest recorded metric`,
    'Recorded prices, materials, and availability can change',
    `Care: ${a.careInstructions} — verify the current care label with ${a.brand}`,
  ];

  const faqs = [
    {
      question: `What is the ${a.name} overall score?`,
      answer: `${a.name} scores ${a.scores.overall}/10 overall in The Mattress Digest's locked bedding & accessories scorecard. Its strongest recorded fields are ${strongest[0].label} (${strongest[0].score}/10) and ${strongest[1].label} (${strongest[1].score}/10).`,
    },
    {
      question: `Who is the ${a.name} best suited to?`,
      answer: `The recorded fit profile is strongest for ${a.bestFor.slice(0, 3).join(', ')}. It is a ${a.material} ${a.accessoryType.replaceAll('-', ' ')}.`,
    },
    {
      question: `How do I care for the ${a.name}?`,
      answer: `The source dataset records: ${a.careInstructions}. Verify the current care label with ${a.brand} before washing or cleaning.`,
    },
  ];

  const summary = `${a.name} is a ${a.material} ${a.accessoryType.replaceAll('-', ' ')}. It records ${a.scores.overall}/10 Overall, with its strongest fields in ${strongest[0].label} and ${strongest[1].label}.`;
  const verdict = `${a.name} records ${a.scores.overall}/10 Overall. Its strongest scorecard fields are ${strongest[0].label} (${strongest[0].score}/10) and ${strongest[1].label} (${strongest[1].score}/10). Fit guidance is editorial and individual needs can vary.`;

  return { ...a, summary, verdict, pros, cons, faqs };
};

// Two example entries proving the schema. Not the catalog — see TAXONOMY.md
// build order step 3. Placeholder images: no licensed accessory photography
// exists yet; these use a mattress placeholder and must not ship to a public
// route until replaced with real product photos.
const accessoryRecords: RawAccessory[] = [
  {
    id: 'linenspa-3-inch-gel-topper',
    name: 'LINENSPA 3 Inch Gel Memory Foam Topper',
    brand: 'LINENSPA',
    model: '3" Gel Memory Foam Topper',
    accessoryType: 'mattress-topper',
    price: 89,
    priceRange: '$69 – $129',
    priceSale: 'from $69',
    productUrl: 'https://linenspa.com/products/gel-memory-foam-mattress-topper',
    image: '/images/mattresses/amerisleep-as3.webp', // placeholder — needs a real, licensed product photo before this leaves draft
    heroImage: '/images/mattresses/amerisleep-as3.webp',
    material: 'gel-infused memory foam',
    sizesAvailable: ['Twin', 'Full', 'Queen', 'King', 'Cal King'],
    careInstructions: 'Spot clean only; not machine-washable per the manufacturer',
    trialNights: 0,
    warrantyYears: 3,
    certifications: ['CertiPUR-US'],
    scores: {
      overall: 7,
      materialQuality: 7,
      comfortFunction: 7,
      easeOfUse: 8,
      durability: 6,
      value: 8,
    },
    reviewer: reviewer_editorial,
    dateReviewed: '2026-07-14',
    dateModified: '2026-07-14',
    bestFor: ['Softening a too-firm mattress', 'Budget comfort upgrades', 'Guest beds'],
    tags: ['mattress-topper', 'memory-foam', 'gel-infused'],
    features: [
      { name: 'Gel-infused foam', description: 'Recorded gel infusion intended to offset standard memory foam heat retention.' },
      { name: '3-inch profile', description: 'Mid-depth topper profile per the manufacturer spec sheet, positioned between thin and deep-comfort toppers.' },
    ],
  },
  {
    id: 'sleep-number-tailored-panel-headboard',
    name: 'Sleep Number Tailored Panel Upholstered Headboard',
    brand: 'Sleep Number',
    model: 'Tailored Panel Upholstered Headboard',
    accessoryType: 'headboard',
    price: 399,
    priceRange: '$349 – $599',
    priceSale: 'from $349',
    productUrl: 'https://www.sleepnumber.com/products/tailored-panel-upholstered-headboard',
    image: '/images/mattresses/amerisleep-as3.webp', // placeholder — needs a real, licensed product photo before this leaves draft
    heroImage: '/images/mattresses/amerisleep-as3.webp',
    material: 'upholstered fabric over engineered wood frame',
    sizesAvailable: ['Queen', 'King', 'Cal King'],
    careInstructions: 'Spot clean fabric only; verify current care label',
    trialNights: 0,
    warrantyYears: 1,
    certifications: [],
    scores: {
      overall: 7,
      materialQuality: 7,
      comfortFunction: 6,
      easeOfUse: 6,
      durability: 7,
      value: 6,
    },
    reviewer: reviewer_editorial,
    dateReviewed: '2026-07-14',
    dateModified: '2026-07-14',
    bestFor: ['Buyers wanting a finished bedroom look', 'Upholstered-style preference', 'Bed-frame upgrades without replacing the frame'],
    tags: ['headboard', 'upholstered', 'bedroom-styling'],
    features: [
      { name: 'Universal frame mounting', description: 'Recorded compatibility with most standard bed frames via adjustable mounting brackets.' },
      { name: 'Upholstered panel', description: 'Fabric-wrapped panel over an engineered wood frame, per the manufacturer spec sheet.' },
    ],
  },
  {
    id: 'saferest-premium-mattress-protector',
    name: 'SafeRest Premium Mattress Protector',
    brand: 'SafeRest',
    model: 'Premium Hypoallergenic Waterproof Protector',
    accessoryType: 'mattress-protector',
    price: 55,
    priceRange: '$40 – $80',
    priceSale: 'from $40',
    productUrl: 'https://saferest.com/',
    image: '/images/mattresses/amerisleep-as3.webp', // placeholder — needs a real, licensed product photo before this leaves draft
    heroImage: '/images/mattresses/amerisleep-as3.webp',
    material: 'cotton terry surface with a waterproof, breathable membrane backing',
    sizesAvailable: ['Twin', 'Full', 'Queen', 'King', 'Cal King'],
    careInstructions: 'Machine washable; recorded 200+ wash durability per the manufacturer',
    trialNights: 0,
    warrantyYears: 10,
    certifications: [],
    scores: {
      overall: 8,
      materialQuality: 8,
      comfortFunction: 8,
      easeOfUse: 9,
      durability: 8,
      value: 8,
    },
    reviewer: reviewer_editorial,
    dateReviewed: '2026-07-14',
    dateModified: '2026-07-14',
    bestFor: ['Allergy-sensitive sleepers', 'Households with kids or pets', 'Buyers wanting a vinyl-free protector'],
    tags: ['mattress-protector', 'waterproof', 'hypoallergenic'],
    features: [
      { name: 'Vinyl-free waterproof membrane', description: 'Recorded liquid-blocking membrane with no vinyl, PVC, or phthalates, per the manufacturer spec sheet.' },
      { name: 'Deep stretch pockets', description: 'Recorded pockets fitting mattresses up to 18" deep, for compatibility with thicker mattresses.' },
    ],
  },
  {
    id: 'malouf-gale-upholstered-headboard',
    name: 'Malouf Gale Upholstered Headboard',
    brand: 'Malouf',
    model: 'Gale Headboard',
    accessoryType: 'headboard',
    price: 349,
    priceRange: '$299 – $449',
    priceSale: 'from $299',
    productUrl: 'https://maloufhome.com/collections/headboards',
    image: '/images/mattresses/amerisleep-as3.webp', // placeholder — needs a real, licensed product photo before this leaves draft
    heroImage: '/images/mattresses/amerisleep-as3.webp',
    material: 'upholstered fabric with square tufting over a padded frame',
    sizesAvailable: ['Twin', 'Full', 'Queen', 'King'],
    careInstructions: 'Spot clean fabric only; verify current care label',
    trialNights: 0,
    warrantyYears: 3,
    certifications: [],
    scores: {
      overall: 7,
      materialQuality: 7,
      comfortFunction: 6,
      easeOfUse: 7,
      durability: 7,
      value: 6,
    },
    reviewer: reviewer_editorial,
    dateReviewed: '2026-07-14',
    dateModified: '2026-07-14',
    bestFor: ['Buyers wanting adjustable headboard height', 'Modern square-tufted styling', 'Pairing with an adjustable base'],
    tags: ['headboard', 'upholstered', 'adjustable-height'],
    features: [
      { name: 'Adjustable mounting height', description: 'Recorded height adjustment in 2" increments from 34" to 46", per the manufacturer spec sheet.' },
      { name: 'Square tufted panel', description: 'Plush padded upholstery with square tufting, recorded in four color options.' },
    ],
  },
];

export const allAccessories = accessoryRecords.map(normalizeAccessoryReview);
