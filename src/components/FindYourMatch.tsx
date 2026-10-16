import { ArrowRight, Moon, BedSingle, Thermometer, Users, Activity, HeartPulse, Feather, Leaf, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';

const needs = [
  { num: '01', title: 'Side Sleepers', desc: 'Soft-to-medium picks across brands, weighed for shoulder and hip cushioning.', href: '/best/side-sleepers/', Icon: Moon },
  { num: '02', title: 'Back Sleepers', desc: 'Medium-firm builds that post strong response and edge scores.', href: '/best/back-sleepers/', Icon: BedSingle },
  { num: '03', title: 'Hot Sleepers', desc: 'Cooling picks ranked across foam, hybrid, latex, and innerspring construction.', href: '/best/cooling/', Icon: Thermometer },
  { num: '04', title: 'Couples', desc: 'Ranked by motion-transfer and edge-support scores side by side.', href: '/best/couples/', Icon: Users },
  { num: '05', title: 'Back Discomfort', desc: 'Firmer, pressure-distributing builds for support-focused shoppers; not medical guidance.', href: '/best/back-pain/', Icon: Activity },
  { num: '06', title: 'Hip & Joint Comfort', desc: 'Softer comfort layers for pressure-sensitive hips and joints; general guidance, not clinical advice.', href: '/best/hip-pain/', Icon: HeartPulse },
  { num: '07', title: 'Pressure Relief', desc: 'Ranked by comfort-layer softness and recorded firmness across brands.', href: '/best/pressure-relief/', Icon: Feather },
  { num: '08', title: 'Eco-Conscious', desc: 'Organic-material claims checked against current third-party certifications.', href: '/best/organic/', Icon: Leaf },
  { num: '09', title: 'Combination Sleepers', desc: 'Responsive medium-feel builds for sleepers who switch positions.', href: '/best/combination-sleepers/', Icon: RefreshCw },
];

export default function FindYourMatch() {
  return (
    <section className="py-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="max-w-2xl mb-12">
        <motion.h2
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-display-lg font-display-lg text-primary mb-4"
        >
          Shop by sleep need
        </motion.h2>
        <p className="text-label-sm font-label-sm uppercase tracking-normal text-secondary mb-3">Nine ways in</p>
        <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
          Pick the category that matches how you sleep, what bothers you, or what you're hoping to fix — every one draws from the same scorecard and pulls in more than one brand.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {needs.map((need, index) => (
          <motion.a
            key={need.num}
            href={need.href}
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04, duration: 0.4 }}
            className="card-editorial group p-6 flex flex-col gap-4"
          >
            <div className="flex items-center justify-between">
              <span className="w-11 h-11 rounded-md bg-surface-container-low border border-outline-variant flex items-center justify-center">
                <need.Icon className="w-5 h-5 text-secondary" aria-hidden="true" />
              </span>
              <span className="text-label-sm text-outline font-bold">{need.num}</span>
            </div>
            <div>
              <h3 className="text-headline-md font-headline-md text-primary mb-2 group-hover:text-secondary transition-colors">{need.title}</h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">{need.desc}</p>
            </div>
            <span className="mt-auto inline-flex items-center gap-2 text-secondary font-bold text-label-sm uppercase pt-2">
              See picks <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
