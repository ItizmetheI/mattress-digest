import { ArrowRight, BookOpen, Scale, ShieldCheck, CalendarClock, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  stats: { value: string; label: string }[];
  trustBadgeLabel: string;
  leaders: { label: string; id: string; name: string; image: string; overall: number }[];
}

export default function Hero({ stats, trustBadgeLabel, leaders }: HeroProps) {
  const trustChips = [
    { icon: Scale, text: trustBadgeLabel },
    { icon: ShieldCheck, text: 'Editorial scores, not lab measurements' },
    { icon: CalendarClock, text: 'Refreshed July 2026' },
  ];

  return (
    <header className="relative border-b border-outline-variant bg-surface pt-16 pb-0 md:pt-24 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl flex flex-col gap-6"
        >
          <span className="inline-flex items-center gap-2 self-start bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase font-bold">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            59 mattresses, 24 brands, one rubric
          </span>
          <h1 className="font-display-lg text-[44px] leading-[1.05] tracking-[-0.02em] md:text-[64px] md:leading-[1.05] font-extrabold text-primary">
            See the <span className="text-secondary">whole scorecard</span> before you buy.
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            We run 59 mattresses from 24 brands through the same seven-metric rubric, lay every comparison out in full tables, and flag exactly where the evidence stops.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <a
              href="/reviews/"
              className="btn-gradient inline-flex min-h-12 items-center justify-center gap-2 text-on-primary px-6 py-3 rounded-lg text-label-sm font-label-sm uppercase font-bold"
            >
              Browse every review <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="/methodology/"
              className="inline-flex min-h-12 items-center justify-center gap-2 text-primary px-2 py-3 text-label-sm font-label-sm uppercase font-bold underline decoration-outline underline-offset-4 hover:text-secondary hover:decoration-secondary transition-colors"
            >
              <BookOpen className="w-4 h-4" aria-hidden="true" /> See how scoring works
            </a>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            {trustChips.map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-2 bg-surface-container-low border border-outline-variant/60 rounded-full px-3.5 py-1.5 text-body-sm text-on-surface-variant"
              >
                <Icon className="w-3.5 h-3.5 text-secondary shrink-0" aria-hidden="true" />
                {text}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Inline stat ticker — replaces the old boxed coverage banner */}
        <motion.div
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 border-t border-outline-variant"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className={`py-5 px-1 md:px-6 ${i > 0 ? 'border-l border-outline-variant' : ''}`}>
              <span className="block font-display-lg text-headline-lg font-headline-lg text-primary">{stat.value}</span>
              <span className="block text-label-sm font-label-sm text-on-surface-variant uppercase font-bold mt-1">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Category leaders — horizontal row, not a side card */}
        <motion.div
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 border-t border-outline-variant"
        >
          {leaders.map(({ label, id, name, image, overall }, index) => (
            <a
              key={id}
              href={`/reviews/${id}/`}
              className={`group flex items-center gap-4 py-6 px-1 md:px-6 hover:bg-surface-container-low transition-colors ${index > 0 ? 'md:border-l border-outline-variant border-t md:border-t-0' : ''}`}
            >
              <div className="w-14 h-14 bg-white border border-outline-variant flex items-center justify-center overflow-hidden shrink-0">
                <img src={image} alt={`${name} mattress`} className="w-full h-full object-contain" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-label-sm text-secondary font-bold uppercase tracking-normal">{label}</p>
                <p className="text-body-lg text-primary font-bold mt-0.5 truncate group-hover:text-secondary transition-colors">{name}</p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-headline-md font-headline-md font-bold text-primary">{overall}</span>
                <span className="block text-xs text-on-surface-variant">Overall</span>
              </div>
            </a>
          ))}
        </motion.div>
        <a href="/best/overall/" className="flex items-center justify-between gap-4 py-5 border-t border-outline-variant text-primary font-bold hover:text-secondary transition-colors">
          See the full 59-model scorecard <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
