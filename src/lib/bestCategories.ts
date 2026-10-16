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

export const BEST_CATEGORIES: Record<string, CategoryConfig> = {
  overall: {
    title: `Best Mattress 2026 — Top Overall Picks | The Mattress Digest`,
    h1: `Best Mattress of 2026`,
    description: `Best overall mattress picks for 2026, ranked with The Mattress Digest's seven-metric editorial scorecard.`,
    intro: `This ranking sorts first by the published Overall field. When models tie at 10/10 Overall, we break the tie using Value, recorded warranty length, and how many fit categories a model is listed under.`,
    winner: 'amerisleep-as3',
    winnerNote: `The AS3 posts a 10/10 on the published Overall field. Confirm its medium firmness, construction, trial, warranty, and certifications on Amerisleep's current product and policy pages before buying.`,
    picks: ['amerisleep-as3', 'amerisleep-as6', 'nest-bedding-sparrow', 'leesa-sapira-chill-hybrid', 'plushbeds-signature-bliss', 'nest-bedding-owl'],
    faqs: [
      {
        question: `What is the best mattress overall for 2026?`,
        answer: `The Amerisleep AS3 takes the top spot in our Overall category once we sort by the published Overall field and apply our documented tie-break sequence. It posts 10/10 on Overall, Edge Support, Motion Transfer, and Cooling & Breathability — editorial scores, not lab measurements.`
      },
      {
        question: `How does The Mattress Digest score mattresses?`,
        answer: `We run every model through a fixed 7-metric system: Overall, Value, Edge Support, Trial Period, Response Time, Motion Transfer, and Cooling & Breathability, each on a 0–10 scale in our published dataset. None of it is a lab finding, a manufacturer rating, or a customer-review average.`
      },
      {
        question: `Is an expensive mattress always better?`,
        answer: `Our data says no. Several models under $1,200 land 9–10/10 overall, while some $3,000+ luxury models score lower on value and overall. Price tier shapes materials and some construction choices, but a higher price tag doesn't buy a higher score in our system.`
      }
    ]
  },
  luxury: {
    title: `Best Luxury Mattress 2026 | The Mattress Digest`,
    h1: `Best Luxury Mattress of 2026`,
    description: `Best luxury mattress picks for 2026, ranked with the same seven-metric editorial scorecard.`,
    intro: `We define luxury picks by premium materials, advanced construction, and scores above 9.0 overall — every model below lands 9–10/10.`,
    winner: 'amerisleep-as6',
    winnerNote: `The Amerisleep AS6 Black Series tops our luxury list: 10/10 overall, Bio-Pur® plant-based foam, HIVE® 5-zone support, a pocketed coil base, a Refresh Cooling Cover, and a 20-year warranty. The performance backs up the price.`,
    picks: ['amerisleep-as6', 'amerisleep-as3-hybrid', 'plushbeds-signature-bliss', 'naturepedic-eos-classic', 'westin-heavenly-bed', 'nest-bedding-owl'],
    faqs: [
      {
        question: `What makes a mattress "luxury"?`,
        answer: `In our system, a luxury mattress pairs premium comfort materials — high-density Bio-Pur® foam, organic latex, or micro-coils — with advanced construction (zoned support, hybrid coil bases) and generous ownership terms (long trials, 15+ year warranties). To earn a luxury slot in our ranking, a model needs 9–10/10 overall and a queen starting price above $1,500.`
      },
      {
        question: `Is the AS6 Black Series worth the price?`,
        answer: `It posts 10/10 overall and 9/10 on value, meaning it delivers strong performance per dollar even at this price point. Bio-Pur® plant-based foam, HIVE® zoning, a pocketed coil support system, and a 20-year warranty are all included. Among luxury-tier competitors, it out-scores most rivals at similar or higher prices.`
      },
      {
        question: `What is the difference between a luxury and a standard mattress?`,
        answer: `Standard mattresses typically run on basic polyurethane foam with a 10-year warranty. Luxury models tend to use plant-based or organic foam comfort layers, zoned support, pocketed coil bases in hybrids, and 15–20-year warranties. That construction quality shows up in durability over years, not just first-night feel.`
      }
    ]
  },
  cooling: {
    title: `Best Cooling Mattress 2026 | The Mattress Digest`,
    h1: `Best Mattress for Hot Sleepers 2026`,
    description: `Best cooling mattress picks for 2026, ranked by the Cooling & Breathability field in The Mattress Digest's editorial scorecard.`,
    intro: `This ranking runs on the Cooling & Breathability metric from our 7-metric system. Hybrids with coil bases tend to score higher here, since air moves through the coil layer as well as the comfort foam.`,
    winner: 'amerisleep-as6',
    winnerNote: `The AS6 Black Series posts 10/10 on Cooling & Breathability. Its Refresh Cooling Cover works with a pocketed coil base that lets air move through the mattress, not just across the top. At 10/10 overall, it's also the strongest all-around pick for hot sleepers.`,
    picks: ['amerisleep-as6', 'amerisleep-as3', 'leesa-sapira-chill-hybrid', 'brooklyn-bedding-aurora-luxe', 'glacier-original-hybrid', 'glacier-summit-hybrid'],
    faqs: [
      {
        question: `What type of mattress is best for hot sleepers?`,
        answer: `Hybrids with pocketed coil bases score higher on cooling in our rubric because the coil layer lets air circulate through the mattress rather than just across the surface. Among all-foam models, Bio-Pur® plant-based foam outperforms standard polyurethane thanks to its open-cell structure. Every pick on this list lands 9–10/10 on Cooling & Breathability.`
      },
      {
        question: `Do cooling covers actually work?`,
        answer: `Phase-change material and cooling-fiber covers can change how a mattress feels on first contact. In our rubric, the cover contributes to the Cooling & Breathability score alongside broader factors like foam type and whether coils are present.`
      },
      {
        question: `Is memory foam bad for hot sleepers?`,
        answer: `Standard petroleum-based memory foam traps heat because of its dense, closed-cell structure. Bio-Pur® plant-based foam, used across Amerisleep's lineup, has a more open-cell structure that moves air more freely. The AS3 — all-foam, Bio-Pur® — still lands 10/10 on Cooling, which shows foam quality matters more than the foam-vs-hybrid split alone.`
      }
    ]
  },
  'side-sleepers': {
    title: `Best Mattress for Side Sleepers 2026 | The Mattress Digest`,
    h1: `Best Mattress for Side Sleepers 2026`,
    description: `Best mattress for side sleepers in 2026, ranked by fit, motion transfer, firmness, and overall score.`,
    intro: `Side sleepers need give at the shoulder and hip while the waist and lower back stay supported. Our top picks run soft-to-medium (3–5/10 firmness) with strong overall scores.`,
    winner: 'amerisleep-as5',
    winnerNote: `The AS5 lands 9/10 overall at a soft 3/10 firmness built for side sleeping. Its Active Flex layer and Bio-Pur® comfort foam are built to absorb pressure at the shoulder and hip, and a 10/10 on Cooling & Breathability makes it a solid choice for side sleepers who also run warm.`,
    picks: ['amerisleep-as5', 'amerisleep-as5-hybrid', 'nest-bedding-raven', 'plushbeds-botanical-bliss', 'plushbeds-luxury-bliss', 'naturepedic-concerto-plush'],
    faqs: [
      {
        question: `What firmness is best for side sleepers?`,
        answer: `Most side sleepers do best on soft-to-medium firmness — 3–5/10 on our scale. A firmer surface concentrates pressure right at the shoulder and hip bone, which can cause discomfort overnight. Go too soft, though, and the hips can sink deep enough to throw the spine out of alignment. The AS5 at 3/10 and AS3 at 5/10 bracket the range that works for most side sleepers.`
      },
      {
        question: `Can a side sleeper use a medium-firm mattress?`,
        answer: `It comes down to body weight and shoulder width. Lighter sleepers under 150 lbs often do fine on a medium (5/10) mattress. Heavier side sleepers, or those with broader shoulders, typically need softer support — 3–4/10 — to keep pressure off the shoulder. Our picks span soft (3/10) through medium (5/10) to cover different builds.`
      },
      {
        question: `Is foam or hybrid better for side sleepers?`,
        answer: `Both work well. All-foam models like the AS5 give the deepest contouring and the highest motion isolation. Hybrid models like the AS5 Hybrid add a coil layer that improves edge support and cooling while keeping the soft comfort layer side sleepers need. It comes down to whether you'd rather prioritize contouring (foam) or bounce and edge support (hybrid).`
      }
    ]
  },
  'back-pain': {
    title: `Best Mattress for Back Pain 2026 | The Mattress Digest`,
    h1: `Best Mattress for Back Pain 2026`,
    description: `Best mattress for back discomfort in 2026: medium-firm models ranked for general sleep support and fit. Not medical advice.`,
    intro: `This category covers mattresses built with medium-firm to firm support aimed at neutral spinal alignment during sleep. It's a general comfort category, not medical guidance — talk to a healthcare provider about mattress choices tied to a specific condition.`,
    winner: 'amerisleep-as2',
    winnerNote: `The AS2 sits at medium-firm (6/10) and lands 9/10 overall. Its HIVE® lumbar-zone technology delivers differentiated support across 7 zones, with a firmer response right where the lumbar region needs it. 10/10 on both Response Time and Motion Transfer suits sleepers who shift position through the night.`,
    picks: ['amerisleep-as2', 'amerisleep-as3', 'glacier-summit-hybrid', 'saatva-classic', 'helix-dawn-luxe', 'brooklyn-bedding-plank-firm'],
    filterNote: `Saatva Classic posts 10/10 overall and is a strong innerspring choice for back sleepers. Brooklyn Bedding Plank Firm is flippable between firm and extra-firm for sleepers who want more support than medium-firm gives. We picked the AS2 as our category lead for its purpose-built HIVE® lumbar zone and medium-firm profile.`,
    faqs: [
      {
        question: `What mattress firmness is recommended for back pain?`,
        answer: `Medium-firm — 5–7/10 on our scale — comes up most often as a recommendation for lower-back discomfort, since it tends to keep the hips from sinking too far while still offering some pressure relief. That said, the right firmness depends on sleep position, body weight, and what's actually causing the discomfort. Talk to a healthcare provider for advice specific to your situation — picking a mattress isn't a medical treatment.`
      },
      {
        question: `Is memory foam good for back pain?`,
        answer: `It can be, since it conforms to the body and spreads out weight instead of concentrating pressure in one spot. The real variable is firmness — medium-firm foam, like the AS2 at 6/10, tends to work better for back pain than foam that's too soft or too firm. The AS2 also layers in HIVE® zoning for a firmer response specifically in the lumbar area.`
      },
      {
        question: `Can a new mattress help with back discomfort?`,
        answer: `A mattress that supports spinal alignment better during sleep can ease morning stiffness for a lot of sleepers. A worn-out mattress that sags in the middle creates an uneven surface that stresses the lower back — swapping it for a medium-firm model that holds its shape can help. That said, persistent back pain has many possible causes, and a mattress is one factor among several, not a substitute for medical advice.`
      }
    ]
  },
  'memory-foam': {
    title: `Best Memory Foam Mattress 2026 | The Mattress Digest`,
    h1: `Best Memory Foam Mattress of 2026`,
    description: `Best memory foam mattress picks for 2026, ranked by overall score in The Mattress Digest's editorial dataset.`,
    intro: `Our memory foam picks are all-foam builds with no coil base. They score highest on motion isolation and pressure distribution, trading off a bit of edge support and responsiveness compared to hybrids.`,
    winner: 'amerisleep-as3',
    winnerNote: `The AS3 tops our foam picks: 10/10 overall built on Bio-Pur® plant-based memory foam, a real step up from standard petroleum-based foam. HIVE® zoning spreads differentiated lumbar and shoulder support across 7 zones, and a 20-year warranty makes it the most durable buy in the foam category.`,
    picks: ['amerisleep-as3', 'amerisleep-as2', 'nest-bedding-raven', 'plushbeds-organic-bliss', 'leesa-original', 'casper-the-one'],
    faqs: [
      {
        question: `What is the difference between plant-based and standard memory foam?`,
        answer: `Standard memory foam comes from petroleum-derived polyurethane. Plant-based memory foam — like Bio-Pur® in Amerisleep's lineup — swaps in plant-derived oils for a portion of that petroleum content. The result is a more open-cell foam that sleeps cooler, responds faster to movement, and carries CertiPUR-US certification for reduced chemical off-gassing. It's still a foam mattress, not latex or organic, but a meaningfully different formula from standard memory foam.`
      },
      {
        question: `Does memory foam sleep hot?`,
        answer: `Standard petroleum-based memory foam can trap heat thanks to its dense, closed-cell structure. Bio-Pur® plant-based foam opens that structure up for better airflow. The AS3 lands 10/10 on Cooling & Breathability despite being all-foam — proof that foam quality matters more than construction type alone when it comes to temperature.`
      },
      {
        question: `How long does a memory foam mattress last?`,
        answer: `A quality memory foam mattress typically holds its support and shape for 8–12 years. Warranty length is a useful signal here: the AS3 and AS2 both carry 20-year warranties, which reflects confidence in long-term durability. Lower-density foam, common at budget price points, tends to soften faster — often within 5–7 years.`
      }
    ]
  },
  hybrid: {
    title: `Best Hybrid Mattress 2026 | The Mattress Digest`,
    h1: `Best Hybrid Mattress of 2026`,
    description: `Best hybrid mattress picks for 2026. Foam-over-coil models ranked by the same seven score fields.`,
    intro: `Hybrid picks pair foam comfort layers with pocketed coil support systems. They tend to score higher than all-foam models on edge support and cooling, at the cost of a somewhat higher price.`,
    winner: 'amerisleep-as6',
    winnerNote: `The AS6 Black Series leads our hybrid picks: 10/10 overall, Bio-Pur® foam, HIVE® zoning, pocketed coil support, and a Refresh Cooling Cover. A 20-year warranty plus 10/10 scores on Motion Transfer and Cooling put it ahead on both comfort and longevity.`,
    picks: ['amerisleep-as6', 'nest-bedding-sparrow', 'leesa-sapira-chill-hybrid', 'plushbeds-signature-bliss', 'nest-bedding-owl', 'naturepedic-eos-classic'],
    faqs: [
      {
        question: `What is a hybrid mattress?`,
        answer: `A hybrid combines a foam comfort layer — memory foam, latex, or poly-foam — with a pocketed coil support system underneath. The foam handles pressure relief and motion absorption; the coils add support, edge reinforcement, and airflow. Most hybrids run 12–16 inches tall, with the coil layer taking up 6–8 inches of that.`
      },
      {
        question: `Is hybrid or foam better?`,
        answer: `Each has an edge somewhere. Hybrids score higher on edge support and cooling because the coil layer reinforces the perimeter and lets air move through. All-foam mattresses score higher on motion isolation since there's no spring network to carry movement across the bed. Couples who prioritize motion isolation often prefer foam; anyone who wants better edge support, more bounce, or stronger cooling tends to land on a hybrid.`
      },
      {
        question: `Do hybrid mattresses last as long as foam?`,
        answer: `A well-built hybrid generally lasts 8–12 years, on par with quality foam. A pocketed coil system can actually hold its structure longer than foam alone, since each coil is independently wrapped and less prone to compression set. The AS6 Black Series ships with a 20-year warranty, which signals the manufacturer's own durability expectations.`
      }
    ]
  },
  organic: {
    title: `Best Organic Mattress 2026 | The Mattress Digest`,
    h1: `Best Organic Mattress of 2026`,
    description: `Best organic mattress picks for 2026, ranked by score and recorded certification fields. Verify current certification scope.`,
    intro: `Our organic picks carry real third-party certifications — GOLS (organic latex), GOTS (organic cotton/wool), OEKO-TEX, and/or eco-INSTITUT. The list below is ranked by overall score; confirm current certifications directly on each brand's site before buying.`,
    winner: 'plushbeds-signature-bliss',
    winnerNote: `The PlushBeds Signature Bliss lands 10/10 overall and carries four certifications — GOLS, GOTS, OEKO-TEX, and eco-INSTITUT — making it the strongest-certified, highest-scoring organic hybrid we track. For a foam-forward organic build, Amerisleep Organica (GOLS + GOTS + OEKO-TEX) is our top pick instead.`,
    picks: ['plushbeds-signature-bliss', 'amerisleep-organica', 'amerisleep-organica-plush', 'naturepedic-eos-classic', 'eco-terra-hybrid-latex', 'nolah-natural-11'],
    filterNote: `Sub-category picks: Best Organic with Bio-Pur® Technology goes to Amerisleep Organica (9/10 overall). Best Organic for Side Sleepers goes to Amerisleep Organica Plush (9/10 overall, softer firmness). Best Budget Organic goes to Eco Terra Hybrid Latex (9/10 overall, 10/10 value).`,
    faqs: [
      {
        question: `What certifications should an organic mattress have?`,
        answer: `Look for GOLS (Global Organic Latex Standard) if the mattress contains latex, and GOTS (Global Organic Textile Standard) for organic cotton and wool. OEKO-TEX Standard 100 verifies materials have been tested for harmful substances, and eco-INSTITUT is a German low-emissions certification. A mattress marketed as "natural" or "organic" without third-party backing is a marketing claim, not a verified standard — always confirm current certifications on the brand's own site, since they can shift by model year.`
      },
      {
        question: `Are organic mattresses worth the higher price?`,
        answer: `Certified organic mattresses use materials independently verified against stricter sourcing and processing standards. Whether the premium is worth it depends on your priorities — if reducing synthetic chemical exposure and backing sustainable sourcing matters to you, it's meaningful. On raw performance, our top organic picks land 9–10/10 overall, right in line with non-organic models at similar prices.`
      },
      {
        question: `What is the difference between organic and natural mattresses?`,
        answer: `"Natural" is an unregulated marketing term with no required standard behind it. "Organic" only means something when it's backed by a recognized third-party certification like GOLS, GOTS, or OEKO-TEX. A "natural latex" label doesn't guarantee certified organic latex — check for the actual certification seal, and verify it against the certifying body's own database rather than trusting the brand's site alone.`
      }
    ]
  },
  value: {
    title: `Best Value Mattress 2026 | The Mattress Digest`,
    h1: `Best Value Mattress of 2026`,
    description: `Best value mattress picks for 2026, ranked by the Value field with overall score and recorded price considered.`,
    intro: `Our value rankings run on the Value metric from our 7-metric system, weighted against overall score — a 10/10 value score at 7/10 overall isn't the same win as a 10/10 value score at 10/10 overall.`,
    winner: 'vaya-hybrid',
    winnerNote: `The Vaya Hybrid is our value-category pick. It lands 10/10 on Value and Response Time, pairs foam with pocketed coils, and posts an 8/10 overall score at a lower entry price than most hybrids we track. Prices and policies are reference fields here — confirm current terms directly with Vaya.`,
    picks: ['vaya-hybrid', 'eco-terra-hybrid-latex', 'bear-original', 'glacier-summit-hybrid', 'amerisleep-as2', 'sweetnight-coolnest'],
    filterNote: `Vaya Hybrid leads this category under our ranking criteria. Eco Terra Hybrid Latex has the stronger overall score among the 10/10-value picks, while Amerisleep AS2 is the value pick within the Amerisleep lineup itself.`,
    faqs: [
      {
        question: `What is the best budget mattress for 2026?`,
        answer: `The Vaya Hybrid is our pick for this category, landing 10/10 on Value and Response Time with an 8/10 overall score. Eco Terra Hybrid Latex scores 10/10 on Value and 9/10 overall at a somewhat higher entry price, while Amerisleep AS2 lands 9/10 overall and 9/10 on Value. Check current prices before comparing cost across any of these.`
      },
      {
        question: `How do you measure value in a mattress?`,
        answer: `Our Value metric weighs performance against price — combining overall score, trial length, warranty coverage, and price per feature. A $3,000 queen that scores 10/10 overall can still land lower on value than a $900 model scoring 9/10 overall. Value isn't just "cheapest" — it's the best ratio of what you get for what you pay.`
      },
      {
        question: `Do I need to spend more than $1,000 for a good mattress?`,
        answer: `No. Several models in our dataset land 9–10/10 overall at queen prices under $1,000 — the Eco Terra Hybrid Latex, Bear Original, Vaya Hybrid, and Sweetnight CoolNest all score well at accessible prices. The usual trade-off at lower price points is warranty length (10 years vs. 20) and material quality (standard foam vs. plant-based foam or certified latex).`
      }
    ]
  },
  'back-sleepers': {
    title: `Best Mattress for Back Sleepers 2026 | The Mattress Digest`,
    h1: `Best Mattress for Back Sleepers 2026`,
    description: `Best mattress for back sleepers in 2026, ranked by medium-firm fit, response, edge support, and overall score.`,
    intro: `Back sleepers need a surface firm enough to stop the hips from sinking, while still allowing some give at the lumbar spine. Our top picks run medium-firm to firm, with strong response-time and edge-support scores.`,
    winner: 'amerisleep-as2',
    winnerNote: `The AS2 sits at medium-firm (6/10) and lands 9/10 overall. Its HIVE® lumbar zone delivers differentiated, zoned support built specifically for the lower back, and 10/10 on both Response Time and Motion Transfer suits back sleepers who shift positions overnight.`,
    picks: ['amerisleep-as2', 'amerisleep-as3', 'saatva-classic', 'nest-bedding-sparrow', 'helix-dawn-luxe', 'zoma-boost'],
    filterNote: `Saatva Classic posts 10/10 overall and is a strong innerspring pick for back sleepers. We chose the AS2 as our category lead for its dedicated HIVE® lumbar zoning and 20-year warranty.`,
    faqs: [
      {
        question: `What type of mattress is best for back sleepers?`,
        answer: `Back sleepers generally need a medium-firm to firm surface — 5–7/10 firmness — that keeps the hips from sinking too deep and holds the spine neutral. Both foam and hybrid mattresses can work well here. Zoned support, like the HIVE® technology in Amerisleep's lineup, gives a firmer response specifically in the lumbar region, which can be an edge over mattresses with uniform firmness throughout.`
      },
      {
        question: `Can back sleepers use a soft mattress?`,
        answer: `Soft mattresses (3/10 firmness) generally aren't recommended for back sleepers, since they let the hips sink far enough to push the lumbar spine out of neutral. Most back sleepers do best on medium (5/10) to medium-firm (6–7/10) surfaces. Lighter back sleepers under 130 lbs may be comfortable at medium; heavier sleepers usually need medium-firm or firm.`
      },
      {
        question: `Is foam or innerspring better for back sleepers?`,
        answer: `Both work. Foam models with zoned support, like the AS2 with HIVE® technology, give differentiated lumbar support and high motion isolation. Innerspring and hybrid models, like Saatva Classic, deliver a firmer coil-based feel, stronger edge support, and more bounce. It comes down to feel preference — foam contouring versus a traditional spring response.`
      }
    ]
  },
  'stomach-sleepers': {
    title: `Best Mattress for Stomach Sleepers 2026 | The Mattress Digest`,
    h1: `Best Mattress for Stomach Sleepers 2026`,
    description: `Best mattress for stomach sleepers in 2026, ranked by firmer feel, response, edge support, and overall score.`,
    intro: `Stomach sleepers need a firmer surface to keep the pelvis from sinking and curving the lumbar spine forward — every pick here runs medium-firm to firm (6/10+). This is a general comfort category, not medical guidance; talk to a healthcare provider about needs tied to a specific condition.`,
    winner: 'amerisleep-as2',
    winnerNote: `The AS2 lands 9/10 overall at medium-firm (6/10). Its HIVE® zoning spreads 7 zones of differentiated support with a firmer response right under the hips — the key requirement for stomach sleeping — and a 10/10 on Response Time makes position changes easy through the night.`,
    picks: ['amerisleep-as2', 'brooklyn-bedding-plank-firm', 'bear-original', 'helix-dawn-luxe', 'saatva-classic', 'zoma-boost'],
    filterNote: `Brooklyn Bedding Plank Firm is the firmest option on this list — a fit for stomach sleepers who want maximum firmness and minimal contouring. Bear Original (9/10 overall, 10/10 value) is the strongest budget pick for stomach sleepers.`,
    faqs: [
      {
        question: `Do stomach sleepers need a firm mattress?`,
        answer: `Yes — stomach sleeping puts the biggest demand on firmness of any position. A soft mattress lets the hips and abdomen sink, arching the lower back and creating real discomfort over time. Most stomach sleepers do best on medium-firm to firm surfaces (6–8/10). This is a general guideline: heavier stomach sleepers usually need firmer support, while lighter sleepers may be fine at medium-firm.`
      },
      {
        question: `Is memory foam good for stomach sleepers?`,
        answer: `It can work, as long as the firmness lands at medium-firm or firm (6–7/10). Very soft memory foam isn't well-suited to stomach sleeping since it lets the hips sink too deep. The AS2 runs Bio-Pur® foam at medium-firm with HIVE® zoning that gives a firmer response specifically in the hip zone — a real edge over a single-firmness foam mattress.`
      },
      {
        question: `What pillow should stomach sleepers use?`,
        answer: `Pillow choice is a separate decision from mattress choice, but the two work together. Stomach sleepers generally do better with a thin, low-loft pillow — or no pillow — to avoid pushing the neck upward; a thicker pillow that elevates the head can add neck strain in this position. We review mattresses, not pillows, so check with a sleep specialist for pillow-specific advice.`
      }
    ]
  },
  'combination-sleepers': {
    title: `Best Mattress for Combination Sleepers 2026 | The Mattress Digest`,
    h1: `Best Mattress for Combination Sleepers 2026`,
    description: `Best mattress for combination sleepers in 2026, ranked for responsive medium-feel fit across positions.`,
    intro: `Combination sleepers move between side, back, and stomach through the night. The best mattresses for them run medium firmness with high response-time scores — so the surface moves with them, not against them — plus strong motion-transfer scores for a partner's comfort.`,
    winner: 'amerisleep-as3',
    winnerNote: `The AS3 sits at medium firmness (5/10) and lands 10/10 overall with a 9/10 on Response Time. Its Bio-Pur® foam reacts faster than traditional memory foam, so position changes don't meet resistance, and HIVE® zoning adapts as you shift from side to back.`,
    picks: ['amerisleep-as3', 'amerisleep-as3-hybrid', 'casper-dream-hybrid', 'leesa-sapira-hybrid', 'ghostbed-flex', 'bear-star-hybrid'],
    faqs: [
      {
        question: `What makes a mattress good for combination sleepers?`,
        answer: `Two things matter most: medium firmness that works across all three positions, and high response time so the mattress keeps up when you shift. Slow-responding foam can feel like it's fighting your movement, while a too-firm surface creates shoulder pressure when you're on your side. Medium firmness (5/10) paired with a response-time score of 9–10/10 covers the widest range of positions.`
      },
      {
        question: `Is foam or hybrid better for combination sleepers?`,
        answer: `Hybrids with coil bases score higher on response time because coils push back quickly the moment you shift. All-foam models built with plant-based foam, like Bio-Pur®, also perform well here — the AS3 lands 9/10 despite being all-foam. Both work for combination sleepers, though hybrids tend to feel more natural for frequent position-changers thanks to the bounce from the coil layer.`
      },
      {
        question: `Can a combination sleeper use a firm mattress?`,
        answer: `A firm mattress can work fine for back and stomach sleeping, but it'll create shoulder and hip pressure the moment you roll onto your side. Most combination sleepers who spend real time on their side need a medium (5/10) or medium-firm (6/10) surface that works across every position without concentrating pressure anywhere. Strictly firm mattresses suit back-only or stomach-only sleepers better.`
      }
    ]
  },
  'heavy-sleepers': {
    title: `Best Mattress for Heavy Sleepers 2026 | The Mattress Digest`,
    h1: `Best Mattress for Heavy Sleepers 2026`,
    description: `Best mattress for heavier sleepers in 2026, ranked by edge support, profile, construction, and overall score.`,
    intro: `Heavier sleepers (230 lbs+) need strong edge support to avoid roll-off, durable materials that resist early softening, and deep enough comfort layers to relieve pressure without bottoming out. Hybrids with pocketed coil bases generally hold up better in this category.`,
    winner: 'amerisleep-as6',
    winnerNote: `The AS6 Black Series lands 10/10 overall with a hybrid coil base, 9/10 edge support, and a 15-inch profile for deep compression without bottoming out. Bio-Pur® foam and a 20-year warranty point to long-term durability — a real factor for heavier sleepers who compress materials faster.`,
    picks: ['amerisleep-as6', 'amerisleep-as3-hybrid', 'saatva-classic', 'nest-bedding-sparrow', 'brooklyn-bedding-aurora-luxe', 'bear-star-hybrid'],
    filterNote: `Saatva Classic (10/10 overall, 10/10 edge) and Nest Bedding Sparrow (10/10 overall, 10/10 edge) are both strong picks for heavier sleepers who need maximum edge support.`,
    faqs: [
      {
        question: `What thickness mattress do heavy sleepers need?`,
        answer: `Heavier sleepers (230 lbs+) generally need at least 12 inches of total height, with a comfort layer of 3–4 inches minimum to relieve pressure before hitting the firmer support core. Mattresses under 10 inches can feel too firm or cause a "bottoming out" sensation for heavier sleepers. The AS6 at 15 inches and the Saatva Classic at 14.5 inches both offer enough depth for higher compression.`
      },
      {
        question: `Is a hybrid better than foam for heavy sleepers?`,
        answer: `Generally, yes. Pocketed coil systems hold up under higher compression longer than foam alone and maintain their structure over time. They also give better edge support, which matters for heavier sleepers getting in and out of bed. All-foam mattresses can still work if they use high-density foam, but hybrids score higher on edge support and tend to hold their performance longer.`
      },
      {
        question: `What edge support score should heavy sleepers look for?`,
        answer: `We'd recommend 9/10 or higher on edge support for heavier sleepers. Edge support determines how much of the bed's surface is actually usable, how easily you can get in and out, and how well the perimeter holds its shape over time. Saatva Classic, Nest Bedding Sparrow, and the AS3-family hybrids all land 10/10 here.`
      }
    ]
  },
  couples: {
    title: `Best Mattress for Couples 2026 | The Mattress Digest`,
    h1: `Best Mattress for Couples 2026`,
    description: `Best mattress for couples in 2026, ranked by Motion Transfer, Edge Support, and overall score.`,
    intro: `Couples need a mattress that isolates movement (a high motion-transfer score) and makes the full bed width usable (a high edge-support score). Our top picks land 9–10/10 on both.`,
    winner: 'amerisleep-as3',
    winnerNote: `The AS3 lands 10/10 on both Motion Transfer and Edge Support — the highest dual score in our dataset. At 10/10 overall and 9/10 value, it's the strongest all-around couples pick across every price tier.`,
    picks: ['amerisleep-as3', 'amerisleep-as6', 'nest-bedding-sparrow', 'leesa-sapira-chill-hybrid', 'helix-sunset-luxe', 'ghostbed-luxe'],
    filterNote: `For couples who run hot: the AS6 adds a Refresh Cooling Cover while matching the AS3 on motion transfer (10/10). Ghostbed Luxe also lands 10/10 on motion transfer and is a strong pick when one or both partners sleep warm.`,
    faqs: [
      {
        question: `What is the most important mattress feature for couples?`,
        answer: `Motion isolation tops the list for couples on different schedules or where one partner is a light sleeper. A mattress with strong motion isolation (9–10/10) absorbs movement so rolling over or getting up doesn't wake the other side. Edge support comes second — it determines how much of the mattress width is actually usable, and how easily both partners can get in and out.`
      },
      {
        question: `Is memory foam or hybrid better for couples?`,
        answer: `All-foam models like the AS3 score higher on motion isolation because foam absorbs movement instead of transmitting it through a coil spring. Hybrids generally score higher on edge support and cooling. If motion isolation is your top priority, foam wins. If you want solid motion isolation plus better edge support and cooling, a hybrid like the AS6 or Leesa Sapira Chill is a good middle ground.`
      },
      {
        question: `What if two partners have different firmness preferences?`,
        answer: `A medium (5/10) mattress covers the widest range of preferences and sleep positions. For couples with genuinely different needs — one wants soft, one wants firm — a split-firmness setup, available in Split King from Amerisleep and others, lets each side run its own firmness. Both sides share a base and fitted sheet but are independently chosen underneath.`
      }
    ]
  },
  'hip-pain': {
    title: `Best Mattress for Hip Pain 2026 | The Mattress Digest`,
    h1: `Best Mattress for Hip Pain 2026`,
    description: `Best mattress for hip discomfort in 2026: soft-to-medium models ranked for side-sleeper fit. Not medical advice.`,
    intro: `Hip discomfort during sleep often gets worse on a mattress that's too firm, since it concentrates pressure right at the hip bone for side sleepers. Our top picks run soft to medium (3–5/10). This is a general comfort category — talk to a healthcare provider about needs tied to a specific medical condition.`,
    winner: 'amerisleep-as5',
    winnerNote: `The AS5 is our softest all-foam model (3/10) and lands 9/10 overall with a 10/10 on Cooling & Breathability. Its Active Flex layer and Bio-Pur® comfort foam are built to absorb pressure at the shoulder and hip — the key contact points for side sleepers dealing with hip discomfort on a firmer mattress.`,
    picks: ['amerisleep-as5', 'amerisleep-as5-hybrid', 'amerisleep-as3', 'helix-midnight-luxe', 'purple-restoreplus-hybrid', 'saatva-rx'],
    faqs: [
      {
        question: `What firmness is best for hip pain?`,
        answer: `For side sleepers with hip discomfort, soft to medium firmness (3–5/10) lets the hip sink slightly, spreading pressure across a wider surface instead of concentrating it at the hip bone. A too-firm surface keeps the hip bone under concentrated contact. Back and stomach sleepers with hip issues may need a different firmness entirely — talk to a healthcare provider for guidance specific to you.`
      },
      {
        question: `Can a mattress help with hip pain?`,
        answer: `A mattress that distributes body weight more evenly may ease the pressure concentration that contributes to hip discomfort overnight. Moving from firm to medium or soft can make a real difference for side sleepers. That said, hip pain has many possible causes — structural, muscular, nerve-related — and a mattress is one factor in sleep comfort, not a medical treatment. Talk to a healthcare provider if hip pain persists.`
      },
      {
        question: `Is foam or hybrid better for hip pain?`,
        answer: `All-foam models with soft comfort layers, like the AS5, give the deepest contouring at the hip and reduce concentrated pressure. Hybrid models with a soft foam layer over coils, like the AS5 Hybrid, offer similar hip relief with added bounce and edge support. Either construction works — the softness of the comfort layer (3–5/10) matters more than foam versus hybrid.`
      }
    ]
  },
  'shoulder-pain': {
    title: `Best Mattress for Shoulder Pain 2026 | The Mattress Digest`,
    h1: `Best Mattress for Shoulder Pain 2026`,
    description: `Best mattress for shoulder discomfort in 2026: soft-to-medium models ranked for side-sleeper fit. Not medical advice.`,
    intro: `Shoulder discomfort during sleep usually hits side sleepers on a surface that's too firm. Our top picks run soft to medium firmness with high overall and cooling scores. This is a general comfort category — talk to a healthcare provider about specific medical conditions.`,
    winner: 'amerisleep-as5',
    winnerNote: `The AS5 (3/10, soft) lets the shoulder sink without creating a concentrated pressure point. The Active Flex layer underneath the comfort foam keeps spinal support intact even as the shoulder sinks in, helping the spine stay more level while you're on your side.`,
    picks: ['amerisleep-as5', 'amerisleep-as5-hybrid', 'helix-midnight-luxe', 'helix-sunset-luxe', 'ghostbed-luxe', 'plushbeds-luxury-bliss'],
    faqs: [
      {
        question: `What type of mattress helps with shoulder discomfort?`,
        answer: `Side sleepers with shoulder discomfort typically do better on a soft to medium mattress (3–5/10) that lets the shoulder compress into the surface. A soft comfort layer spreads pressure across the joint instead of concentrating it at the shoulder bone. The AS5 at 3/10 and the Helix Midnight Luxe and Sunset Luxe at a plush-soft feel are the strongest picks here.`
      },
      {
        question: `How soft should a mattress be for shoulder pain?`,
        answer: `Soft (3/10) to medium-soft (4/10) is the most common comfort range for side sleepers with shoulder discomfort — enough give to reduce surface pressure. Go too soft (under 2/10) and the hips can sink deeper than the shoulders, creating misalignment that can make things worse. The AS5 at 3/10 and the AS5 Hybrid at a similar feel balance shoulder give with enough support underneath.`
      },
      {
        question: `Can a mattress cause shoulder pain?`,
        answer: `A mattress that's too firm for your sleep position can contribute to shoulder discomfort for side sleepers, and a worn-out mattress that sags unevenly can create pressure points too. But shoulder pain during sleep has plenty of unrelated causes — rotator cuff issues, bursitis, nerve compression — that a mattress can't fix. A new, softer mattress may ease pressure-related discomfort, but it isn't treatment for an underlying shoulder condition. Talk to a healthcare provider if shoulder pain persists.`
      }
    ]
  },
  'motion-isolation': {
    title: `Best Mattress for Motion Isolation 2026 | The Mattress Digest`,
    h1: `Best Mattress for Motion Isolation 2026`,
    description: `Best mattress for motion isolation in 2026, ranked by the Motion Transfer field in The Mattress Digest's editorial scorecard.`,
    intro: `This ranking runs on the Motion Transfer metric from our 7-metric system. All-foam models absorb motion more effectively than hybrids, since foam doesn't transmit movement through a coil spring network.`,
    winner: 'amerisleep-as3',
    winnerNote: `The AS3 lands 10/10 on Motion Transfer — tied for the top score in our dataset. At 10/10 overall and 9/10 value, it's also the strongest all-around buy in this category. Its Bio-Pur® all-foam build absorbs movement at the source rather than passing it through a coil system.`,
    picks: ['amerisleep-as3', 'amerisleep-as6', 'casper-the-one', 'ghostbed-luxe', 'helix-sunset-luxe', 'leesa-sapira-chill-hybrid'],
    filterNote: `Ghostbed Luxe, Casper The One, Helix Sunset Luxe, and Leesa Sapira Chill Hybrid all land 10/10 on motion transfer. The AS3 and AS6 also hit 10/10 while leading on value, edge support, and overall score.`,
    faqs: [
      {
        question: `Which mattresses have the best motion isolation?`,
        answer: `All-foam mattresses consistently score highest on motion isolation, since foam absorbs movement right at the source. In our scorecard, the AS3, AS6, Casper The One, Ghostbed Luxe, Helix Sunset Luxe, and Leesa Sapira Chill Hybrid all land 10/10 on motion transfer. Of those, the AS3 and AS6 score higher overall, making them the strongest all-around picks for couples who prioritize motion isolation.`
      },
      {
        question: `Is memory foam or innerspring better for motion isolation?`,
        answer: `Memory foam — and all-foam construction generally — beats innerspring by a wide margin here. Coil systems, traditional or pocketed, transfer some movement through the spring network to the other side of the bed. Pocketed coils isolate motion better than open-coil systems, but all-foam still comes out ahead. If motion isolation is your top priority, all-foam beats any hybrid or innerspring option.`
      },
      {
        question: `What score indicates good motion isolation?`,
        answer: `In our 7-metric system, a Motion Transfer score of 9/10 or 10/10 signals strong motion isolation. A 7–8/10 is moderate — you might feel your partner move, but it won't be disruptive. Below 7/10, motion transfer becomes noticeable enough to disturb light sleepers. For couples on different schedules, or light sleepers generally, we'd recommend filtering for 9–10/10.`
      }
    ]
  },
  'pressure-relief': {
    title: `Best Mattress for Pressure Relief 2026 | The Mattress Digest`,
    h1: `Best Mattress for Pressure Relief 2026`,
    description: `Best mattress for pressure relief in 2026, ranked by firmness, fit, motion transfer, and overall score.`,
    intro: `Our pressure-relief rankings favor soft-to-medium firmness, strong overall scores, and construction built to spread body weight across a wider surface. This is a general comfort category — talk to a healthcare provider about needs tied to a specific medical condition.`,
    winner: 'amerisleep-as5',
    winnerNote: `The AS5 is our softest foam model (3/10) and lands 9/10 overall. Its Bio-Pur® foam and Active Flex layer are built to absorb concentrated pressure at the shoulder, hip, and knee — the main contact points for side sleepers dealing with joint discomfort on a firmer surface.`,
    picks: ['amerisleep-as5', 'amerisleep-as5-hybrid', 'saatva-rx', 'purple-restoreplus-hybrid', 'helix-midnight-luxe', 'amerisleep-as3'],
    filterNote: `Saatva RX (10/10 overall, 10/10 motion transfer) is built for sleepers with musculoskeletal concerns and uses a micro-coil comfort layer. Purple RestorePlus Hybrid (9/10 overall, 10/10 response time) takes a different approach to pressure distribution with its GelFlex Grid.`,
    faqs: [
      {
        question: `What type of mattress provides the best pressure relief?`,
        answer: `Soft-to-medium foam mattresses give the most direct surface contouring, spreading body weight across a wider area and easing concentrated pressure at bony spots like the shoulder and hip. All-foam models with slow-responding memory foam score highest here for side sleepers. The AS5 and AS5 Hybrid pair soft Bio-Pur® foam with an Active Flex layer that keeps alignment intact even as the comfort layer absorbs pressure.`
      },
      {
        question: `What firmness is best for pressure relief?`,
        answer: `Soft to medium-soft (3–4/10) gives the most pressure relief for side sleepers, since it lets bony contact points sink into the surface instead of pressing against a firm layer. Medium (5/10) works well for combination sleepers who also spend time on their back. Firm mattresses offer the least surface contouring and aren't the pick for pressure-relief-focused shoppers.`
      },
      {
        question: `Can a mattress help with joint discomfort during sleep?`,
        answer: `A mattress with a soft-to-medium comfort layer can ease the concentrated pressure at joint contact points during sleep, which may reduce discomfort for some sleepers. This is a general comfort effect — softer surfaces spread body weight more evenly than firm ones. Persistent joint pain has plenty of causes a mattress can't address, so talk to a healthcare provider for ongoing joint conditions.`
      }
    ]
  },
};
