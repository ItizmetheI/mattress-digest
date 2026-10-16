import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Methodology() {
  return (
    <section className="bg-transparent py-stack-lg border-y border-outline-variant/30 relative overflow-hidden">
      
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-label-sm font-label-sm uppercase tracking-normal text-secondary mb-3">The Short Version</h3>
            <h2 className="text-display-lg font-display-lg text-primary  mb-6">How Scoring Actually Works</h2>
            <p className="text-body-lg text-on-surface-variant mb-8 leading-relaxed">
              Every review runs through one locked scorecard — Overall, Value, Edge Support, Trial Period, Response Time, Motion Transfer, and Cooling &amp; Breathability. These are comparative editorial ratings, not lab findings and not aggregated customer reviews.
            </p>
            <a href="/methodology/" className="inline-flex items-center text-label-sm font-label-sm uppercase tracking-normal text-primary border border-outline-variant rounded-lg px-8 py-4 hover:border-secondary hover:text-secondary transition-colors group font-bold">
              See the Full Breakdown <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {[
              { stat: "7", title: "Score Fields", desc: "Overall, Value, Edge Support, Trial Period, Response Time, Motion Transfer, Cooling & Breathability — every one on a 0–10 scale." },
              { stat: "59", title: "Mattresses Covered", desc: "Spanning 24 brands, every single one scored on the identical field set." },
              { stat: "24", title: "Brands In Scope", desc: "No brand gets its own scale or its own rubric — same seven fields for all of them." },
              { stat: "1", title: "Shared Rubric", desc: "One set of rules, applied the same way to every mattress on the site." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col border-t border-outline-variant/30 pt-5 relative group"
              >
                <div className="absolute top-0 left-0 h-[2px] w-0 bg-secondary transition-all duration-500 group-hover:w-full" />
                <span className="text-display-lg font-display-lg text-secondary mb-2">{item.stat}</span>
                <span className="text-label-sm font-label-sm text-primary uppercase tracking-normal mb-3 font-bold">{item.title}</span>
                <span className="text-body-md text-on-surface-variant leading-relaxed">{item.desc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
