export interface FAQ {
  question: string;
  answer: string;
}

export interface CategoryConfig {
  title: string;
  h1: string;
  description: string;
  intro: string;
  winner: string;
  winnerNote: string;
  picks: string[];
  filterNote?: string;
  faqs?: FAQ[];
}

// Picks and winners are derived from the score data by scripts/derive-best-picks.ts (rules in SCORE_DATA_SOURCE.md).
export const BEST_CATEGORIES: Record<string, CategoryConfig> = {
  overall: {
    title: `Best Mattress 2026 — Top Overall Picks | The Mattress Digest`,
    h1: `Best Mattress of 2026`,
    description: `Best overall mattress picks for 2026, ranked by overall score with value and warranty length as tie-breakers in The Mattress Digest's editorial dataset.`,
    intro: `This list takes every model scoring 9.0 or higher overall and sorts it by Overall score, then by Value, then by recorded warranty length, then by how many fit categories the dataset lists for the model. Six models tie at 9.5/10 overall, so those tie-breakers decide most of the order. Scores are editorial comparisons from our published dataset, not lab results.`,
    winner: 'nolah-evolution-15',
    winnerNote: `The Nolah Evolution 15 comes first with 9.5/10 overall and 10/10 on Value, plus 10/10 on both Edge Support and Motion Transfer. Zoma Boost posts the same 9.5 and 10, so the recorded warranty decides it: 15 years for Nolah against 10 for Zoma. Check current price, trial, and warranty terms on Nolah's site before buying.`,
    picks: ['nolah-evolution-15', 'zoma-boost', 'plushbeds-signature-bliss', 'amerisleep-as3', 'form-core-hybrid', 'glacier-original-hybrid'],
    filterNote: `Five of the six picks are hybrids; the Amerisleep AS3 is the only memory-foam model and records a 20-year warranty. FORM Core Hybrid has the lowest recorded queen price on the list at $899, PlushBeds Signature Bliss has the longest warranty at 25 years, and Glacier Original Hybrid has the longest trial at 365 nights. FORM Prime X also scores 9.5/10 overall but is left out by the page's brand-balance limit, which keeps a few brands from taking every slot.`,
    faqs: [
      {
        question: `What is the best mattress overall for 2026?`,
        answer: `In our published dataset the Nolah Evolution 15 ranks first: 9.5/10 overall, 10/10 on Value, and a recorded 15-year warranty. Zoma Boost, PlushBeds Signature Bliss, Amerisleep AS3, and FORM Core Hybrid sit at the same 9.5/10 overall, so the order among them comes from the tie-breakers. These are editorial scores rather than lab measurements, and the right pick still depends on your firmness preference and budget.`
      },
      {
        question: `How does The Mattress Digest score mattresses?`,
        answer: `Each model carries seven scores on a 0 to 10 scale in our published editorial dataset: Overall, Value, Edge Support, Trial Period, Response Time, Motion Transfer, and Cooling & Breathability. They are not lab findings, manufacturer ratings, or customer-review averages, and a score is never adjusted to change a ranking.`
      },
      {
        question: `Is an expensive mattress always better?`,
        answer: `Not in this dataset. Zoma Boost has a recorded queen sale price of $999 and scores 9.5/10 overall, while Saatva RX is recorded at $3,995 and scores 9.2/10 overall with a 7/10 Value score. Price reflects materials and construction, but it does not buy a higher score here. Verify current prices on each brand's site.`
      }
    ]
  },
  luxury: {
    title: `Best Luxury Mattress 2026 | The Mattress Digest`,
    h1: `Best Luxury Mattress of 2026`,
    description: `Best luxury mattress picks for 2026: models scoring 9.0 or higher overall with a recorded queen sale price of $1,500 or more, ranked by overall score.`,
    intro: `A model qualifies here if it scores 9.0 or higher overall and its recorded queen sale price is $1,500 or more. Qualifying models are ranked by Overall, then Value, then recorded warranty length. Eleven models passed both tests, and the six below are the top of that ranking.`,
    winner: 'nolah-evolution-15',
    winnerNote: `The Nolah Evolution 15 leads. It shares 9.5/10 overall with PlushBeds Signature Bliss but scores 10/10 on Value against Signature Bliss's 9/10. It is a 15-inch hybrid built with AirFoam HDMax, HDMax Tri-Zone Coils, and a Cooling Organic Cover, recorded at $1,999 with a 120-night trial and a 15-year warranty. Confirm current terms on Nolah's site before buying.`,
    picks: ['nolah-evolution-15', 'plushbeds-signature-bliss', 'amerisleep-as6', 'nest-bedding-sparrow', 'leesa-sapira-chill-hybrid', 'saatva-rx'],
    filterNote: `Nest Bedding Sparrow is the lowest-priced pick at a recorded $1,799 and, like Saatva RX, lists a 365-night trial. Saatva RX is the most expensive at $3,995 and has the lowest Value score on the list, 7/10. Saatva Classic (9.2/10 overall, 7/10 Value, $1,995) just misses the six: it ties Saatva RX on both scores, and RX's 20-year warranty beats Classic's 15. Four more models qualify at exactly 9.0/10 overall: Helix Midnight Luxe, Amerisleep AS5, Birch Natural, and Amerisleep Organica Plush.`,
    faqs: [
      {
        question: `What counts as a luxury mattress on this page?`,
        answer: `We use two numbers instead of a feel-based label: an Overall score of 9.0 or higher and a recorded queen sale price of $1,500 or more. The price test only sets the tier and adds nothing to a score. The six picks range from $1,799 to $3,995 in our recorded data, so check current prices on each brand's site.`
      },
      {
        question: `Does a higher price get a higher score among luxury models?`,
        answer: `Not in this data. The two top-ranked picks, Nolah Evolution 15 and PlushBeds Signature Bliss, are both recorded at $1,999 and score 9.5/10 overall. Saatva RX is recorded at about double that, $3,995, and scores 9.2/10 overall with 7/10 on Value. Above the $1,500 line, price tells you about the tier rather than the score.`
      },
      {
        question: `What ownership terms do the luxury picks record?`,
        answer: `Recorded warranties run from 10 years (Leesa Sapira Chill Hybrid) to 25 years (PlushBeds Signature Bliss), with Nolah Evolution 15 at 15 years and the Amerisleep AS6 Black Series, Nest Bedding Sparrow, and Saatva RX at 20. Recorded trials run from 100 nights up to 365 nights at Nest Bedding Sparrow and Saatva RX. These are references only, so read the current warranty and return conditions on the brand's site.`
      }
    ]
  },
  cooling: {
    title: `Best Cooling Mattress 2026 | The Mattress Digest`,
    h1: `Best Mattress for Hot Sleepers 2026`,
    description: `Best cooling mattress picks for 2026: six models that each record 10/10 on Cooling & Breathability in The Mattress Digest's editorial dataset, separated by Overall and Value.`,
    intro: `This list sorts every qualifying model by its Cooling & Breathability score first, then by Overall, then by Value. Models need an Overall of at least 9.0 to be considered, and no brand can hold more than two of the six slots. Because all six picks share the top cooling mark of 10/10, most of the ordering below comes from the Overall tiebreaker.`,
    winner: 'amerisleep-as3',
    winnerNote: `The Amerisleep AS3 records 10/10 on Cooling & Breathability, level with the other five picks, and takes #1 on the Overall tiebreaker at 9.5/10, the highest on this list. It is an all-foam build with a Refresh Cooling Cover over Bio-Pur® plant-based memory foam, and it carries a 9/10 Value score, a $999 recorded queen sale price, and a 20-year recorded warranty. Verify current price, trial and warranty terms on the Amerisleep site.`,
    picks: ['amerisleep-as3', 'glacier-original-hybrid', 'glacier-apex-hybrid', 'amerisleep-as2', 'leesa-sapira-chill-hybrid', 'helix-midnight-luxe'],
    filterNote: `Glacier Apex Hybrid and Glacier Original Hybrid both record 9.3/10 Overall and 10/10 Value, which puts them ahead of Amerisleep AS2 (9.3/10 Overall, 9/10 Value) and Leesa Sapira Chill Hybrid (8/10 Value). Glacier Original Hybrid has the longest recorded trial of the six at 365 nights, and the AS2 has the lowest recorded queen sale price at $799. Glacier Summit Hybrid, Amerisleep AS6 and Amerisleep AS3 Hybrid also record 10/10 cooling and 9.3/10 Overall, but the two-per-brand limit keeps them off the list.`,
    faqs: [
      {
        question: `Does construction type decide how cool a mattress sleeps?`,
        answer: `Not in this dataset. The six picks are four hybrids (Glacier Apex, Glacier Original, Leesa Sapira Chill and Helix Midnight Luxe) and two memory-foam models (Amerisleep AS3 and AS2), and every one records 10/10 on Cooling & Breathability. The score reflects the whole build rather than just the coil layer, so compare the scorecard instead of assuming hybrids always win, and confirm construction details on the brand site.`
      },
      {
        question: `Do cooling covers matter?`,
        answer: `Several picks list a dedicated cover: a Refresh Cooling Cover on the Amerisleep AS3 and AS2, a phase change cover on the Leesa Sapira Chill Hybrid, and a Tencel™ cover on the Helix Midnight Luxe. A cover is one part of the build, and temperature claims about it come from the brand. Our Cooling & Breathability number is an editorial comparison from the published dataset, not a temperature measurement.`
      },
      {
        question: `Is memory foam a poor choice for hot sleepers?`,
        answer: `Dense memory foam has a reputation for holding heat, but the dataset does not show it here. The Amerisleep AS3 and AS2, both Bio-Pur® plant-based memory foam builds, record 10/10 on Cooling & Breathability, the same as the hybrids on this list. Sleep temperature is personal, so use the trial window: the AS3 and AS2 record 100 nights, and the Glacier Original Hybrid records 365 nights. Verify current trial terms with each brand.`
      }
    ]
  },
  'side-sleepers': {
    title: `Best Mattress for Side Sleepers 2026 | The Mattress Digest`,
    h1: `Best Mattress for Side Sleepers 2026`,
    description: `Best mattress for side sleepers in 2026: soft-to-medium models (3 to 5 of 10 firmness) ordered softest first, then by Overall score and Motion Transfer.`,
    intro: `Side sleepers usually want give at the shoulder and hip, so this list keeps only soft-to-medium firmness (3 to 5 out of 10) and sorts softest first. Models at the same firmness are ordered by Overall, then by Motion Transfer. A model needs an Overall of at least 9.0 to qualify, and no brand can take more than two of the six slots.`,
    winner: 'amerisleep-as5',
    winnerNote: `The Amerisleep AS5 is the only qualifying model at soft (3/10) firmness, so the softest-first rule puts it at #1. It records 9/10 Overall, which is lower than four of the picks below it, so this win comes from firmness rather than total score. Its 14-inch build stacks a 4-inch Bio-Pur® memory foam comfort layer over a 2-inch Active Flex layer, with 10/10 on Edge Support and Cooling & Breathability and 9/10 on Motion Transfer. Verify current price, trial and warranty terms on the Amerisleep site.`,
    picks: ['amerisleep-as5', 'saatva-rx', 'nest-bedding-raven', 'amerisleep-organica-plush', 'nolah-evolution-15', 'form-core-hybrid'],
    filterNote: `Saatva RX and Nest Bedding Raven both sit at medium-soft (4/10) with 9.2/10 Overall, and Saatva RX leads on Motion Transfer (10/10 against 9/10). Raven records a lifetime warranty, a 365-night trial and a $1,099 queen sale price, while Saatva RX records $3,995, the highest price in this group. FORM Core Hybrid and Nolah Evolution 15 post the best Overall scores here (9.5/10 each) but are medium (5/10), so they rank last under a softest-first rule. FORM Core Hybrid has the lowest recorded price at $899.`,
    faqs: [
      {
        question: `What firmness is best for side sleepers?`,
        answer: `Most side sleepers look at soft-to-medium firmness, 3 to 5 out of 10 on our scale, because a firmer surface can leave the shoulder and hip bearing more pressure. Going too soft can let the hips sink out of line with the shoulders. The AS5 at 3/10 and the FORM Core Hybrid and Nolah Evolution 15 at 5/10 mark the two ends of the range on this list.`
      },
      {
        question: `Can a side sleeper use a medium-firm mattress?`,
        answer: `Sometimes. Body weight and shoulder width change how a surface feels, and sleepers who are lighter or narrower may find medium (5/10) comfortable, while heavier or broader-shouldered sleepers often look softer. Medium-firm models (6/10 and up) are outside this list because they sit above the soft-to-medium range, and the trial period is the practical way to find out.`
      },
      {
        question: `Is foam or hybrid better for side sleepers?`,
        answer: `Both appear. The AS5 and Nest Bedding Raven are foam builds, and Saatva RX, Amerisleep Organica Plush, FORM Core Hybrid and Nolah Evolution 15 are hybrids. All six record 9/10 or 10/10 on Motion Transfer, so partner movement does not separate them. Firmness, price and trial length are the more useful ways to choose between them.`
      }
    ]
  },
  'back-pain': {
    title: `Best Mattress for Back Pain 2026 | The Mattress Digest`,
    h1: `Best Mattress for Back Pain 2026`,
    description: `Best mattress for back discomfort in 2026: medium-firm and firmer models ranked by overall score, edge support, and response time. General comfort guide, not medical advice.`,
    intro: `This category only includes mattresses at medium-firm or firmer (6 or higher out of 10) with an Overall score of at least 8.8. Picks are sorted by Overall score first; ties go to the higher Edge Support score, then to the higher Response Time. It is a general comfort category, not medical guidance, so talk to a healthcare provider about mattress choices tied to a specific condition.`,
    winner: 'glacier-summit-hybrid',
    winnerNote: `The Glacier Summit Hybrid is a 13-inch medium-firm (6/10) hybrid that scores 9.3/10 overall. It ties the Amerisleep AS2 on Overall but wins the tie-break with a 9/10 Edge Support score against the AS2's 8/10, and it also posts 9/10 on Response Time and 10/10 on Value. Its recorded terms are a 365-night trial and a 10-year warranty at a $1,299 queen sale price, so verify current terms on the brand site.`,
    picks: ['glacier-summit-hybrid', 'amerisleep-as2', 'bear-original', 'birch-natural', 'brooklyn-bedding-plank-firm', 'happsy'],
    filterNote: `The Bear Original has the lowest recorded queen sale price in this list at $748, and the Birch Natural Mattress has the longest warranty at 25 years. The Brooklyn Bedding Plank Firm is the firmest pick at 8/10. The Avocado Green Mattress also meets the firmness bar but scores 8.8/10 overall with 9/10 Edge Support, so it falls just behind the Plank Firm and Happsy, which both score 10/10 on Edge Support.`,
    faqs: [
      {
        question: `What mattress firmness do people usually choose for back discomfort?`,
        answer: `Medium-firm is the feel most often suggested for general back comfort, because it tends to keep the hips from sinking too far while still cushioning the shoulders. This page uses 6/10 as the floor. The right firmness still depends on body weight, sleep position, and personal preference, and a mattress is not a medical treatment. Check with a healthcare provider about any specific condition.`
      },
      {
        question: `Is a hybrid or all-foam mattress better for back comfort?`,
        answer: `Neither type wins on its own. The top pick, the Glacier Summit Hybrid, pairs foam with a zoned pocketed coil base and scores 9/10 on Edge Support. The Amerisleep AS2 and Bear Original are all-foam builds that score 10/10 and 9/10 on Response Time respectively, and the Bear costs less. Hybrids tend to feel bouncier and edge-supportive, while foam tends to feel more contouring, so pick based on the feel you prefer.`
      },
      {
        question: `Can replacing an old mattress make sleeping more comfortable?`,
        answer: `A mattress that has sagged in the middle can feel uneven and unsupportive, and swapping it for a firmer, structurally sound one often makes nights feel more comfortable. Persistent back pain has many possible causes, though, and a mattress is only one factor. Use a long trial period such as the Glacier Summit Hybrid's recorded 365 nights to test a new bed, and confirm the current trial terms with the brand.`
      }
    ]
  },
  'memory-foam': {
    title: `Best Memory Foam Mattress 2026 | The Mattress Digest`,
    h1: `Best Memory Foam Mattress of 2026`,
    description: `Best memory foam mattress picks for 2026: all-foam builds ranked by Overall, then Motion Transfer and Value in The Mattress Digest's editorial dataset.`,
    intro: `This list keeps only foam and memory-foam builds with no coil base, then sorts by Overall first, then Motion Transfer, then Value. A model needs an Overall of at least 8.8 to qualify, and the list allows no more than two models per brand. Eight foam models meet that bar, and six make the list once the brand limits are applied.`,
    winner: 'amerisleep-as3',
    winnerNote: `The Amerisleep AS3 records the highest Overall of any foam pick at 9.5/10, plus 10/10 on Motion Transfer and 9/10 on Value. It is a 12-inch build with a 3-inch Bio-Pur® plant-based memory foam comfort layer over a 7-inch Bio-Core® support foam, with a 20-year recorded warranty and a $999 recorded queen sale price. Verify current price, trial and warranty terms on the Amerisleep site.`,
    picks: ['amerisleep-as3', 'amerisleep-as2', 'form-prime', 'nest-bedding-raven', 'bear-original', 'sweetnight-coolnest'],
    filterNote: `Amerisleep AS2 and FORM Prime both record 9.3/10 Overall and 10/10 Motion Transfer, and the AS2 ranks higher on Value (9/10 against 8/10). Bear Original and SweetNight CoolNest are the two 10-inch builds. Bear Original has the lowest Motion Transfer here (8/10). SweetNight CoolNest is the lowest-priced pick at a recorded $399 and the only one under 9.0 Overall (8.8/10), with 10/10 on Value and Motion Transfer but 7/10 on Edge Support. Nest Bedding Raven records the longest warranty of the six (lifetime). FORM Core (9.2/10, 10/10 Motion Transfer) and Amerisleep AS5 (9/10) meet the rule but were held out by the list's brand limits.`,
    faqs: [
      {
        question: `What is the difference between plant-based and standard memory foam?`,
        answer: `Standard memory foam is made from petroleum-derived polyurethane. Plant-based memory foam, such as the Bio-Pur® foam in the Amerisleep AS3 and AS2, replaces part of that petroleum content with plant-derived oils. It is still a foam mattress, not latex, and all six picks list CertiPUR-US certification, so check each certifier's site for the current status.`
      },
      {
        question: `Does memory foam sleep hot?`,
        answer: `Some dense foams hold heat, and the picks here do differ. The Amerisleep AS3 and AS2 record 10/10 on Cooling & Breathability, FORM Prime, Bear Original and SweetNight CoolNest record 9/10, and Nest Bedding Raven records 8/10. These are editorial scores from the published dataset, so if you run warm, lean on the trial period.`
      },
      {
        question: `How much does warranty length say about durability?`,
        answer: `A little. The recorded warranties here are 20 years for the AS3 and AS2, lifetime for Nest Bedding Raven, and 10 years for FORM Prime, Bear Original and SweetNight CoolNest. A longer warranty shows how long the brand covers defects, not how long the foam will feel the same, and exclusions such as sag depth differ by brand. Read the warranty terms on the brand site before you buy.`
      }
    ]
  },
  hybrid: {
    title: `Best Hybrid Mattress 2026 | The Mattress Digest`,
    h1: `Best Hybrid Mattress of 2026`,
    description: `Best hybrid mattress picks for 2026: foam-over-coil models ranked by overall score, then edge support and value, in The Mattress Digest's editorial dataset.`,
    intro: `Only hybrid builds, meaning foam or latex comfort layers over a coil support system, are eligible, and each must score 9.0 or higher overall. Nineteen hybrids qualified. They are ranked by Overall first, then Edge Support, then Value, and the top six are shown.`,
    winner: 'nolah-evolution-15',
    winnerNote: `Nolah Evolution 15 is listed first with 9.5/10 overall, 10/10 on Edge Support, and 10/10 on Value, in a 15-inch build that pairs AirFoam HDMax with HDMax Tri-Zone Coils. Zoma Boost has identical scores on all three sort fields, so for these two the choice is practical: Zoma Boost is recorded at $999 against Nolah's $1,999, while Nolah lists the longer warranty, 15 years to 10. Verify current terms on Nolah's site.`,
    picks: ['nolah-evolution-15', 'zoma-boost', 'plushbeds-signature-bliss', 'form-core-hybrid', 'form-prime-x', 'nest-bedding-sparrow'],
    filterNote: `All six picks score 10/10 on Edge Support, so the order among them comes from Overall and Value. FORM Core Hybrid is the lowest-priced at a recorded $899, and PlushBeds Signature Bliss has the longest warranty at 25 years. Amerisleep AS3 Hybrid (9.3/10 overall, 10/10 Edge Support, 9/10 Value) is not listed because of the page's brand-balance limit, which keeps a few brands from taking every slot.`,
    faqs: [
      {
        question: `What is a hybrid mattress?`,
        answer: `A hybrid combines foam or latex comfort layers with a coil support system underneath, usually pocketed coils. The upper layers handle cushioning, while the coils add support, edge reinforcement, and airflow. The six picks here run from 12 to 15 inches thick.`
      },
      {
        question: `Is a hybrid or an all-foam mattress better?`,
        answer: `Neither wins on every score in our dataset. All six hybrids here post 10/10 on Edge Support, but the all-foam Amerisleep AS3 does too, so compare the individual scores rather than relying on the construction label. Firmness preference, budget, and how much you move at night usually matter more than the category.`
      },
      {
        question: `What should I compare between these hybrids?`,
        answer: `Start with firmness: all six picks are medium (5/10). Then compare the recorded terms, which differ more than the scores do. Queen sale prices run from $899 (FORM Core Hybrid) to $1,999 (Nolah Evolution 15 and PlushBeds Signature Bliss), warranties from 10 to 25 years, and trials from 100 nights to 365 nights (Nest Bedding Sparrow). Verify every term on the brand's site before buying.`
      }
    ]
  },
  organic: {
    title: `Best Organic Mattress 2026 | The Mattress Digest`,
    h1: `Best Organic Mattress of 2026`,
    description: `Best organic mattress picks for 2026, ranked by overall score, value, and warranty among models with a recorded GOLS or GOTS certification. Verify current certifications.`,
    intro: `Every pick here lists a GOLS (organic latex) or GOTS (organic textile) certification in our dataset. Models are sorted by Overall score first, then by Value, then by warranty length. Our certification field records names only, not which components are covered or how much of the mattress is certified, so verify current certifications and scope with each issuer before buying.`,
    winner: 'plushbeds-signature-bliss',
    winnerNote: `The PlushBeds Signature Bliss is a 14-inch medium (5/10) hybrid that scores 9.5/10 overall, 0.3 points above the next pick, with 9/10 on Value and 10/10 on both Edge Support and Response Time. Its recorded certifications are GOLS, GOTS, OEKO-TEX, and eco-INSTITUT, and it has a 25-year warranty and a 100-night trial at a $1,999 queen sale price. Verify current terms and certifications with the brand and issuer.`,
    picks: ['plushbeds-signature-bliss', 'amerisleep-organica', 'eco-terra-hybrid-latex', 'birch-natural', 'nolah-natural-11', 'plushbeds-organic-bliss'],
    filterNote: `The Amerisleep Organica has the lowest recorded queen price at $1,199, and the Eco Terra Hybrid Latex scores 10/10 on Value but lists GOLS and OEKO-TEX only, with no GOTS entry. Three picks record 25-year warranties: the Signature Bliss, Birch Natural Mattress, and PlushBeds Organic Bliss. The Happsy Organic Mattress and Avocado Green Mattress carry GOLS and GOTS but score 8.8/10 overall, below all six picks.`,
    faqs: [
      {
        question: `What certifications should an organic mattress have?`,
        answer: `Look for GOLS (Global Organic Latex Standard) when a mattress contains latex and GOTS (Global Organic Textile Standard) for organic cotton and wool. OEKO-TEX, GREENGUARD Gold, and eco-INSTITUT are emissions or harmful-substance tests, not organic standards. A mattress called natural or organic with no third-party certification is a marketing claim, so check the certifier's own database for the current status.`
      },
      {
        question: `Does a GOLS or GOTS certification cover the whole mattress?`,
        answer: `Not necessarily. These standards generally apply to specific materials such as the latex or the cotton and wool, not automatically to every layer, the coils, or the foam. Our dataset records certification names, not their scope. Confirm the certified components, certificate status, and any percentage claims with the brand and the certifying body.`
      },
      {
        question: `Do organic mattresses cost more?`,
        answer: `Among these six, recorded queen sale prices run from $1,199 for the Amerisleep Organica to $1,999 for the PlushBeds Signature Bliss. Several score between 9.0 and 9.5 out of 10 overall, so certified materials do not have to mean weaker scores in our dataset. Prices change often, so verify current pricing on the brand site.`
      }
    ]
  },
  value: {
    title: `Best Value Mattress 2026 | The Mattress Digest`,
    h1: `Best Value Mattress of 2026`,
    description: `Best value mattress picks for 2026, ranked by the Value score, then overall score, then lower recorded queen price, in The Mattress Digest's editorial dataset.`,
    intro: `Models with an Overall score of 9.0 or higher are ranked by their Value score first. Ties on Value go to the higher Overall score, and any remaining tie goes to the lower recorded queen sale price. Value tops out at 10/10 and eight eligible models reach it, so the second and third steps decide most of the order.`,
    winner: 'zoma-boost',
    winnerNote: `Zoma Boost ranks first with 10/10 on Value and 9.5/10 overall, plus 10/10 on Edge Support and Motion Transfer, at a recorded queen price of $999. Nolah Evolution 15 matches it on both Value and Overall, so the lower recorded price breaks the tie; Nolah is recorded at $1,999. Zoma Boost is a 14-inch hybrid with a recorded 100-night trial and 10-year warranty, so confirm current terms on Zoma's site.`,
    picks: ['zoma-boost', 'nolah-evolution-15', 'zoma-hybrid', 'glacier-original-hybrid', 'glacier-apex-hybrid', 'bear-original'],
    filterNote: `Bear Original has the lowest recorded price of the six at $748 and still posts 10/10 on Value and 9.2/10 overall; Zoma Hybrid follows at $799 with 9.3/10 overall. Vaya Hybrid ($599), Vaya Foam ($399), and SweetNight CoolNest ($399) also record 10/10 on Value, but their overall scores (8.8, 8.7, and 8.8) fall under the 9.0 floor. Glacier Summit Hybrid ties Glacier Apex Hybrid on all three sort fields but is left out by the two-models-per-brand limit.`,
    faqs: [
      {
        question: `What is the best budget mattress for 2026?`,
        answer: `By this value ranking it is the Zoma Boost: 10/10 on Value, 9.5/10 overall, and a recorded queen sale price of $999. If you want to spend less, Zoma Hybrid is recorded at $799 with 9.3/10 overall and Bear Original at $748 with 9.2/10 overall. Prices change often, so check current ones on each brand's site.`
      },
      {
        question: `Does a high Value score mean the cheapest mattress?`,
        answer: `No. Value is a score in our editorial dataset, not a price ranking. Nolah Evolution 15 earns 10/10 on Value at a recorded $1,999, while Bear Original earns the same 10/10 at $748. That is why this page uses overall score and then price to separate models that tie.`
      },
      {
        question: `Do I need to spend more than $1,000 for a good mattress?`,
        answer: `In our dataset, no. Zoma Boost ($999, 9.5/10 overall), Zoma Hybrid ($799, 9.3/10), and Bear Original ($748, 9.2/10) are all recorded under $1,000 and score 9.2 or higher overall. Each records a 10-year warranty, compared with 15 years for Nolah Evolution 15 in this same list, so compare terms as well as price.`
      }
    ]
  },
  'back-sleepers': {
    title: `Best Mattress for Back Sleepers 2026 | The Mattress Digest`,
    h1: `Best Mattress for Back Sleepers 2026`,
    description: `Best mattress for back sleepers in 2026: medium-firm and firmer models ranked by response time, overall score, and edge support.`,
    intro: `Every pick here is medium-firm or firmer (6 or higher out of 10) with an Overall score of at least 8.8, which keeps the hips from sinking while leaving some give at the lower back. This page sorts by Response Time first, since back sleepers who shift positions want a surface that adjusts quickly. Ties go to the higher Overall score, then to the higher Edge Support score.`,
    winner: 'amerisleep-as2',
    winnerNote: `The Amerisleep AS2 is a 12-inch memory foam mattress at medium-firm (6/10) with a 10/10 Response Time. The Birch Natural Mattress also scores 10/10 on Response Time, but the AS2 takes first place on the Overall tie-break, 9.3/10 against 9.0/10. It also records 10/10 on Motion Transfer and Cooling, a 20-year warranty, and a 100-night trial at a $799 queen sale price. Verify current terms on the brand site.`,
    picks: ['amerisleep-as2', 'birch-natural', 'glacier-summit-hybrid', 'bear-original', 'brooklyn-bedding-plank-firm', 'avocado-green'],
    filterNote: `The AS2's 8/10 Edge Support is the lowest of the six picks, so back sleepers who often sit on the bed edge may prefer the Bear Original or Brooklyn Bedding Plank Firm, which both score 10/10. The Happsy Organic Mattress meets the firmness bar but scores 8/10 on Response Time, below all six picks. The Avocado Green Mattress holds the sixth slot: it ties the Plank Firm at 8.8/10 overall and 9/10 Response Time but scores 9/10 against 10/10 on Edge Support.`,
    faqs: [
      {
        question: `What firmness is best for back sleepers?`,
        answer: `Back sleepers usually do best on medium to medium-firm surfaces, roughly 5 to 7 out of 10, because the hips stay level with the shoulders instead of dropping into the mattress. The picks on this page start at medium-firm (6/10) and go up to 7/10 for the Avocado Green Mattress. Lighter sleepers may find medium comfortable, while heavier sleepers often need medium-firm or firmer.`
      },
      {
        question: `Why does this page rank by Response Time first?`,
        answer: `Response Time is our editorial score for how readily a surface adjusts as you move. Back sleepers often roll to their sides during the night, so a slow-to-recover surface can feel like it is holding you in place. All six picks score 9 or 10 out of 10 on it, and the AS2 and Birch Natural both score 10/10. Use Overall and Edge Support to separate models that tie.`
      },
      {
        question: `Is a soft mattress a good idea for back sleeping?`,
        answer: `Soft mattresses are generally a poor match for back sleepers, since the hips can sink below the shoulders and put the lower back out of a neutral position. That is why this page sets a 6/10 firmness floor. Choose a model with a trial period long enough to judge it, such as the Glacier Summit Hybrid's recorded 365 nights, and confirm current trial terms with the brand.`
      }
    ]
  },
  'stomach-sleepers': {
    title: `Best Mattress for Stomach Sleepers 2026 | The Mattress Digest`,
    h1: `Best Mattress for Stomach Sleepers 2026`,
    description: `Best mattress for stomach sleepers in 2026: medium-firm and firmer models ranked firmest first, then by overall score and edge support.`,
    intro: `Stomach sleepers generally need a firmer surface so the hips do not sink. This page includes only mattresses at medium-firm or firmer (6 or higher out of 10) with an Overall score of at least 8.8. The firmest model ranks first, and ties go to the higher Overall score, then to the higher Edge Support score. It is a general comfort category, not medical advice.`,
    winner: 'brooklyn-bedding-plank-firm',
    winnerNote: `The Brooklyn Bedding Plank Firm wins this page because it is the firmest qualifying model at 8/10, an innerspring build that is 10 inches thick. It scores 8.8/10 overall, which only just clears the 8.8 minimum, along with 10/10 on Edge Support and 9/10 on Response Time. Recorded terms are a 120-night trial, a 10-year warranty, and a $1,149 queen sale price. Verify current terms on the brand site.`,
    picks: ['brooklyn-bedding-plank-firm', 'happsy', 'avocado-green', 'glacier-summit-hybrid', 'amerisleep-as2', 'bear-original'],
    filterNote: `Because firmness comes first, the Plank Firm leads even though several picks score higher overall. The Happsy Organic Mattress and Avocado Green Mattress follow at 7/10, then the Glacier Summit Hybrid, Amerisleep AS2, and Bear Original at 6/10. The Bear Original has the lowest recorded queen price in the list at $748. The Birch Natural Mattress is also 6/10 but scores 9.0/10 overall, behind those three 6/10 picks, so it misses the list.`,
    faqs: [
      {
        question: `Do stomach sleepers need a firm mattress?`,
        answer: `Usually, yes. Lying face down pushes the hips toward the mattress, and a surface that is too soft lets the midsection sag and curve the lower back. Most stomach sleepers do better at medium-firm to firm, 6 to 8 out of 10. Heavier sleepers tend to need more firmness and lighter sleepers less, so treat this as a general guide rather than medical advice.`
      },
      {
        question: `Is the firmest mattress always the best choice for stomach sleepers?`,
        answer: `Not necessarily. We rank firmest first on this page because stomach sleeping puts the strongest demand on firmness, but the Plank Firm at 8/10 gives little contouring and the trio of 6/10 picks may suit sleepers who also change positions. The Glacier Summit Hybrid and Avocado Green Mattress both record 365-night trials, which helps when you are still deciding how firm you want to go. Confirm current trial terms with each brand.`
      },
      {
        question: `What pillow should a stomach sleeper use?`,
        answer: `Pillow choice is a separate decision from mattress choice, and we review mattresses, not pillows. In general, stomach sleepers tend to be more comfortable with a thin, low-loft pillow or none at all, because a thick pillow tilts the head upward and can strain the neck. A sleep specialist can give advice specific to you.`
      }
    ]
  },
  'combination-sleepers': {
    title: `Best Mattress for Combination Sleepers 2026 | The Mattress Digest`,
    h1: `Best Mattress for Combination Sleepers 2026`,
    description: `Best mattress for combination sleepers in 2026: medium-feel models ranked by response time, motion transfer, and overall score.`,
    intro: `Combination sleepers move between side, back, and stomach, so this page keeps only mattresses at medium-leaning firmness (4 to 6 out of 10) with a Response Time score of 9 or higher. Picks are sorted by Response Time first, then Motion Transfer, then Overall score, so the surfaces that react fastest to movement and isolate a partner best come first.`,
    winner: 'form-core-hybrid',
    winnerNote: `The FORM Core Hybrid is a 12-inch medium (5/10) hybrid that scores 10/10 on both Response Time and Motion Transfer, with 9.5/10 overall and 10/10 on Edge Support. The Amerisleep AS2, Saatva RX, and FORM Prime X post the same 10/10 on those two ranking scores, but only the Prime X matches its 9.5/10 Overall, and the two FORM models tie at the top. Recorded terms for the Core Hybrid are a 10-year warranty and a 100-night trial at a $899 queen sale price, so verify current terms on the brand site.`,
    picks: ['form-core-hybrid', 'form-prime-x', 'amerisleep-as2', 'saatva-rx', 'plushbeds-signature-bliss', 'leesa-sapira-chill-hybrid'],
    filterNote: `The FORM Prime X ties the Core Hybrid on every ranking score at 10, 10, and 9.5, so the order between them is close, and it adds two inches of thickness at a $1,399 recorded price. The Saatva RX is medium-soft (4/10), costs the most here at $3,995, and has the longest trial at 365 nights. Several 9.2/10 models with a 10/10 Response Time and 9/10 Motion Transfer, including the Saatva Classic and Amerisleep Organica, fall just below the Leesa Sapira Chill Hybrid.`,
    faqs: [
      {
        question: `What makes a mattress good for combination sleepers?`,
        answer: `Two things matter most: a medium-range firmness that works in several positions, and a surface that responds quickly when you shift. A slow-recovering mattress can feel like it is fighting each turn, and one that is too firm can add pressure on the shoulders when you roll to your side. That is why this page sets a 4 to 6 out of 10 firmness range and a Response Time floor of 9/10.`
      },
      {
        question: `Are hybrids better than foam for people who change positions a lot?`,
        answer: `In this ranking they tend to be. Five of the six picks are hybrids, and the one exception is the all-foam Amerisleep AS2, which scores 10/10 on both Response Time and Motion Transfer at medium-firm (6/10). Coils push back quickly when you move, which many position-changers find natural, but well-built foam can respond just as fast. Choose on the feel you prefer.`
      },
      {
        question: `Why is Motion Transfer used as a ranking factor here?`,
        answer: `Motion Transfer is an editorial score for how well a mattress keeps your movement from reaching a partner. Combination sleepers shift more than most, so it helps if the surface keeps that movement local. Four of the six picks score 10/10, and the PlushBeds Signature Bliss and Leesa Sapira Chill Hybrid score 9/10.`
      }
    ]
  },
  'heavy-sleepers': {
    title: `Best Mattress for Heavy Sleepers 2026 | The Mattress Digest`,
    h1: `Best Mattress for Heavy Sleepers 2026`,
    description: `Best mattress for heavier sleepers in 2026: tall hybrid and innerspring builds ranked by edge support, thickness, warranty, and overall score.`,
    intro: `This page includes only hybrid and innerspring mattresses with an Edge Support score of 9 or higher that stand 12 inches or taller. They are sorted by Edge Support first, then by thickness, then by warranty length, then by Overall score. The dataset does not record weight capacity, so confirm each brand's own guidance for heavier bodies before buying.`,
    winner: 'nolah-evolution-15',
    winnerNote: `The Nolah Evolution 15 is a 15-inch medium (5/10) hybrid, the tallest pick here, with a 10/10 Edge Support score. All six picks score 10/10 on Edge Support, so thickness decides first place. The Evolution 15 also scores 9.5/10 overall, with 10/10 on Value and Motion Transfer, a 15-year warranty, and a 120-night trial at a $1,999 queen sale price. Verify current terms on the brand site.`,
    picks: ['nolah-evolution-15', 'saatva-classic', 'plushbeds-signature-bliss', 'zoma-boost', 'form-prime-x', 'nest-bedding-sparrow'],
    filterNote: `Because every pick scores 10/10 on Edge Support, the real separators are thickness and terms. The PlushBeds Signature Bliss has the longest recorded warranty at 25 years, the Zoma Boost has the lowest queen price at $999, and the Saatva Classic and Nest Bedding Sparrow carry 365-night trials. The Leesa Sapira Chill Hybrid also scores 10/10 on Edge Support but is 13 inches thick, shorter than the 13.5-inch Sparrow in the final slot.`,
    faqs: [
      {
        question: `How thick should a mattress be for a heavier sleeper?`,
        answer: `Taller mattresses leave more room for comfort layers above the support core, which can help a heavier body compress the surface without feeling the base underneath. This page requires at least 12 inches, and the six picks range from 13.5 inches for the Nest Bedding Sparrow to 15 inches for the Nolah Evolution 15. Thickness alone does not guarantee durability, so check the warranty terms as well.`
      },
      {
        question: `Is a hybrid better than foam for heavier sleepers?`,
        answer: `Hybrids and innerspring models generally resist early softening better than foam alone, and a pocketed or steel coil system supports the edge of the bed. That is why this page limits picks to those two types: five hybrids and the innerspring Saatva Classic. All-foam mattresses with dense foam can still work, but they are not part of this ranking.`
      },
      {
        question: `Does a 10/10 Edge Support score mean a mattress is rated for a specific weight?`,
        answer: `No. Edge Support is an editorial score for how stable and usable the perimeter is, and it is not a weight rating. Every pick on this page scores 10/10, so use thickness, warranty length, and the brand's own weight guidance to choose. Confirm current weight limits and warranty conditions on the official brand site.`
      }
    ]
  },
  couples: {
    title: `Best Mattress for Couples 2026 | The Mattress Digest`,
    h1: `Best Mattress for Couples 2026`,
    description: `Best mattress for couples in 2026: models scoring 9 or higher on both Motion Transfer and Edge Support, ranked by the two scores combined.`,
    intro: `A model qualifies if it scores 9/10 or higher on both Motion Transfer and Edge Support and 9.0 or higher overall; 23 models did. They are ranked by those two scores added together (20 is the maximum), then by Overall, then by Value.`,
    winner: 'nolah-evolution-15',
    winnerNote: `Nolah Evolution 15 scores 10/10 on both Motion Transfer and Edge Support, the maximum combined 20, with 9.5/10 overall and 10/10 on Value. Five picks reach 20 and separate on Overall and Value, where Nolah and Zoma Boost post identical scores, so treat the top two slots as a near-tie and decide on price: Zoma Boost is recorded at $999, Nolah at $1,999. Verify current terms on Nolah's site.`,
    picks: ['nolah-evolution-15', 'zoma-boost', 'amerisleep-as3', 'form-core-hybrid', 'nest-bedding-sparrow', 'plushbeds-signature-bliss'],
    filterNote: `PlushBeds Signature Bliss is the one pick below the combined maximum, at 19 (9/10 Motion Transfer, 10/10 Edge Support), but it posts 9.5/10 overall and records a 25-year warranty. FORM Core Hybrid is the lowest-priced pick at $899. FORM Prime X and FORM Prime also reach a combined 20 but are left out by the page's brand-balance limit.`,
    faqs: [
      {
        question: `What matters most in a mattress for couples?`,
        answer: `Two scores: Motion Transfer, which reflects how well movement on one side stays there, and Edge Support, which reflects how much of the bed's width is usable and how easy it is to get in and out. This page requires 9/10 or higher on both before a model can qualify. Remember these are editorial comparisons, not lab measurements.`
      },
      {
        question: `Is memory foam or hybrid better for couples?`,
        answer: `In this dataset both can reach the top of the scale. Five of the six picks are hybrids, and the Amerisleep AS3 is memory foam; all of them score 10/10 on Motion Transfer except Signature Bliss at 9/10, and all score 10/10 on Edge Support. Compare the individual scores and the recorded terms rather than choosing by construction alone.`
      },
      {
        question: `What if two partners want different firmness?`,
        answer: `All six picks are medium (5/10), which sits in the middle of the range and suits many sleepers. If one partner wants clearly softer or firmer, ask the brand whether the model is sold in a split configuration, since not every model is. Confirm firmness options and current terms on the brand's site.`
      }
    ]
  },
  'hip-pain': {
    title: `Best Mattress for Hip Pain 2026 | The Mattress Digest`,
    h1: `Best Mattress for Hip Pain 2026`,
    description: `Best mattress for hip discomfort in 2026: soft-to-medium models ordered softest first, then Edge Support and Overall. A general comfort guide, not medical advice.`,
    intro: `Side sleepers often rest their weight on one hip, so this list keeps soft-to-medium firmness (3 to 5 out of 10) and sorts softest first. Ties on firmness go to Edge Support, then to Overall. A model needs an Overall of at least 9.0 to qualify, with no more than two per brand. This is a general comfort category, not medical advice, so talk to a healthcare provider about discomfort tied to a specific condition.`,
    winner: 'amerisleep-as5',
    winnerNote: `The Amerisleep AS5 is the only qualifying model at soft (3/10) firmness, which is why it leads a softest-first ranking. It records 10/10 on Edge Support and 9/10 Overall, and its 14-inch build puts a 4-inch Bio-Pur® memory foam comfort layer over a 2-inch Active Flex layer. That softer top is designed to let the hip sink in rather than sit on a hard surface. Verify current price, trial and warranty terms on the Amerisleep site.`,
    picks: ['amerisleep-as5', 'amerisleep-organica-plush', 'nest-bedding-raven', 'saatva-rx', 'plushbeds-signature-bliss', 'nolah-evolution-15'],
    filterNote: `Amerisleep Organica Plush takes #2 as the medium-soft (4/10) model with the strongest Edge Support (10/10), ahead of Nest Bedding Raven and Saatva RX, which both record 9/10 Edge Support and 9.2/10 Overall. Four of the six picks record 10/10 on Edge Support: the AS5, Organica Plush, PlushBeds Signature Bliss and Nolah Evolution 15. The last two are medium (5/10) and post the highest Overall scores here (9.5/10), but firmness comes first in this ranking.`,
    faqs: [
      {
        question: `What firmness is best for hip discomfort?`,
        answer: `For side sleepers, soft to medium (3 to 5 out of 10) is the usual starting range, since a little give lets the hip sink in and spreads weight over a wider area. A surface that is too firm keeps more weight on the hip bone. Back and stomach sleepers may want a different firmness, and a healthcare provider can advise on needs specific to you.`
      },
      {
        question: `Can a mattress help with hip pain?`,
        answer: `A softer, more even surface may reduce the pressure that builds up at the hip overnight, and moving from a firm bed to a medium-soft one is a change some side sleepers notice. Hip pain can come from many causes, though, and a mattress is not a treatment. Talk to a healthcare provider if it persists.`
      },
      {
        question: `Why does Edge Support count in a hip-pain ranking?`,
        answer: `Edge Support is our score for how stable the perimeter feels, and here it is the tiebreaker after firmness. It matters if you sit on the side of the bed to get up or sleep close to the edge. It is a stability score, not a measure of hip comfort, so use it alongside firmness and the trial period. Verify current trial terms with each brand.`
      }
    ]
  },
  'shoulder-pain': {
    title: `Best Mattress for Shoulder Pain 2026 | The Mattress Digest`,
    h1: `Best Mattress for Shoulder Pain 2026`,
    description: `Best mattress for shoulder discomfort in 2026: soft-to-medium models ordered softest first, then Cooling & Breathability and Overall. A general comfort guide, not medical advice.`,
    intro: `Side sleepers carry their weight on one shoulder for hours, so this list keeps soft-to-medium firmness (3 to 5 out of 10) and sorts softest first. Ties on firmness are settled by Cooling & Breathability, then Overall. A model needs an Overall of at least 9.0 to qualify, and no brand takes more than two slots. This is a general comfort category, not medical advice, so talk to a healthcare provider about discomfort tied to a specific condition.`,
    winner: 'amerisleep-as5',
    winnerNote: `The Amerisleep AS5 is the only qualifying model at soft (3/10) firmness, so it wins the softest-first sort. It records 10/10 on Cooling & Breathability and 9/10 Overall. Its 4-inch Bio-Pur® memory foam comfort layer sits over a 2-inch Active Flex layer in a 14-inch build, a softer top that is designed to give at the shoulder. Verify current price, trial and warranty terms on the Amerisleep site.`,
    picks: ['amerisleep-as5', 'saatva-rx', 'amerisleep-organica-plush', 'nest-bedding-raven', 'glacier-original-hybrid', 'glacier-apex-hybrid'],
    filterNote: `Saatva RX ranks ahead of Amerisleep Organica Plush because both record 9/10 on cooling and the Overall tiebreaker favors Saatva RX (9.2/10 against 9/10). Nest Bedding Raven records 8/10 cooling, the lowest here, and ranks fourth. Glacier Apex Hybrid and Glacier Original Hybrid record 10/10 cooling and 9.3/10 Overall but come last because they are medium (5/10) and firmness is sorted first. Amerisleep AS3 (medium, 9.5/10 Overall, 10/10 cooling) was held out by the two-per-brand limit.`,
    faqs: [
      {
        question: `What firmness suits shoulder discomfort?`,
        answer: `Side sleepers usually look at soft to medium, 3 to 5 out of 10, so the shoulder can compress into the surface instead of resting on a hard layer. On this list the Amerisleep AS5 is 3/10, Saatva RX, Nest Bedding Raven and Amerisleep Organica Plush are 4/10, and the two Glacier hybrids are 5/10. Sleepers who go very soft risk letting the hips sink deeper than the shoulders.`
      },
      {
        question: `Can a mattress cause shoulder pain?`,
        answer: `A surface that is too firm for your sleep position may add pressure at the shoulder, and a sagging old mattress can create uneven spots. Shoulder pain also has causes a mattress cannot fix, such as joint or nerve problems. A softer bed may ease pressure-related discomfort but is not treatment, so see a healthcare provider if it continues.`
      },
      {
        question: `Why is cooling the tiebreaker on this list?`,
        answer: `Once firmness is equal, the ranking looks at Cooling & Breathability, because side sleepers who sink into a soft surface can also feel warmer. It is an editorial score from the published dataset, not a temperature test. If cooling matters more to you than firmness, the dedicated cooling ranking sorts on it first.`
      }
    ]
  },
  'motion-isolation': {
    title: `Best Mattress for Motion Isolation 2026 | The Mattress Digest`,
    h1: `Best Mattress for Motion Isolation 2026`,
    description: `Best mattress for motion isolation in 2026, ranked by the Motion Transfer score, then overall score and value, in The Mattress Digest's editorial dataset.`,
    intro: `Models scoring 9.0 or higher overall are sorted by Motion Transfer first, then Overall, then Value. Motion Transfer tops out at 10/10 and eleven eligible models reach it, so Overall and Value do most of the sorting. We list the top six.`,
    winner: 'nolah-evolution-15',
    winnerNote: `Nolah Evolution 15 is listed first with 10/10 on Motion Transfer, the top of the scale, along with 9.5/10 overall and 10/10 on Value. Zoma Boost posts the same three scores, so the top two are tied on the sort fields. Nolah is a 15-inch hybrid recorded at $1,999 and Zoma Boost is a 14-inch hybrid recorded at $999. Verify current terms on each brand's site.`,
    picks: ['nolah-evolution-15', 'zoma-boost', 'amerisleep-as3', 'form-core-hybrid', 'nest-bedding-sparrow', 'saatva-rx'],
    filterNote: `All six picks score 10/10 on Motion Transfer. The sixth, Saatva RX, has the lowest Value score at 7/10 and the highest recorded price, $3,995. Other 10/10 models that rank above Nest Bedding Sparrow and Saatva RX on score, including FORM Prime X (9.5/10 overall) and Amerisleep AS6 Black Series (9.3/10), are left out by the page's brand-balance limit. Casper The One, GhostBed Luxe, and Helix Sunset Luxe also record 10/10 but fall below the 9.0 overall floor.`,
    faqs: [
      {
        question: `Which mattresses score best for motion isolation?`,
        answer: `Motion Transfer is capped at 10/10, and 11 models with 9.0 or higher overall reach it. Among the picks here, Nolah Evolution 15 and Zoma Boost lead with 9.5/10 overall and 10/10 on Value each, followed by Amerisleep AS3 at 9.5/10 overall and 9/10 on Value. Overall and Value order the models that tie on motion.`
      },
      {
        question: `Do hybrids isolate motion as well as foam?`,
        answer: `In our dataset they can. Five of the six picks are hybrids and all score 10/10 on Motion Transfer, as does the all-foam Amerisleep AS3. Check the individual score instead of assuming from construction, and treat it as an editorial comparison rather than a lab measurement.`
      },
      {
        question: `What Motion Transfer score is good enough?`,
        answer: `We treat 9/10 or 10/10 as strong, 7/10 or 8/10 as middling, and anything lower as a reason to look elsewhere if you share a bed with a light sleeper or keep a different schedule from your partner. For shared beds, filtering for 9 or higher is a sensible starting point.`
      }
    ]
  },
  'pressure-relief': {
    title: `Best Mattress for Pressure Relief 2026 | The Mattress Digest`,
    h1: `Best Mattress for Pressure Relief 2026`,
    description: `Best mattress for pressure relief in 2026: soft-to-medium models ordered softest first, then Value and Overall. A general comfort guide, not medical advice.`,
    intro: `Pressure relief here means a softer surface that lets shoulders and hips sink in, so this list keeps soft-to-medium firmness (3 to 5 out of 10) and sorts softest first. Models at the same firmness are ordered by Value, then Overall, which favors the better-priced choice when comfort is equal. A model needs an Overall of at least 9.0, with no more than two per brand. This is a general comfort category, not medical advice, so talk to a healthcare provider about discomfort tied to a specific condition.`,
    winner: 'amerisleep-as5',
    winnerNote: `The Amerisleep AS5 is the only qualifying model at soft (3/10) firmness, so it leads. It records 9/10 Overall and 8/10 Value, and its Value is lower than Nest Bedding Raven at #2 because firmness is sorted before Value. Its 14-inch build has a 4-inch Bio-Pur® memory foam comfort layer over a 2-inch Active Flex layer, a soft top designed to spread weight. Verify current price, trial and warranty terms on the Amerisleep site.`,
    picks: ['amerisleep-as5', 'nest-bedding-raven', 'amerisleep-organica-plush', 'saatva-rx', 'nolah-evolution-15', 'zoma-boost'],
    filterNote: `Nest Bedding Raven takes #2 on Value (9/10) at medium-soft, with a $1,099 queen sale price, a 365-night trial and a lifetime warranty on record. Nolah Evolution 15 and Zoma Boost both record 10/10 on Value and 9.5/10 Overall but are medium (5/10), so they rank fifth and sixth. Zoma Boost has the lowest recorded price here at $999, and Saatva RX has the highest at $3,995 with the lowest Value score (7/10).`,
    faqs: [
      {
        question: `What firmness gives the most pressure relief?`,
        answer: `Soft to medium-soft (3 to 4 out of 10) lets bony contact points sink in instead of pressing on a firm layer, which is why those models rank first on this page. Medium (5/10) suits sleepers who also spend time on their back. Firm mattresses offer the least surface contouring and are not what this list is built around.`
      },
      {
        question: `Is a higher price a sign of better pressure relief?`,
        answer: `Not by the scorecard. Saatva RX records the highest price here ($3,995) with 9.2/10 Overall and 7/10 Value, while Zoma Boost records $999 with 9.5/10 Overall and 10/10 Value. Neither number is a pressure measurement, so use firmness, trial length and warranty alongside price, and verify current terms on each brand site.`
      },
      {
        question: `Can a mattress help with joint discomfort during sleep?`,
        answer: `A soft-to-medium comfort layer can ease the concentrated pressure at joint contact points, which may feel better for some sleepers. That is a general comfort effect and not a treatment. Ongoing joint pain has many causes a mattress cannot address, so talk to a healthcare provider about it.`
      }
    ]
  },
};
