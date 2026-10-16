import { ArrowRight, BookOpen } from 'lucide-react';

const guides = [
  {
    href: '/best/organic/',
    eyebrow: 'Multi-brand ranking',
    title: 'Best Organic Mattresses: Full Score Field',
    description: 'Six ranked picks plus the full 59-model field, with certification scope labeled so you know what to verify.',
    image: '/images/mattresses/plushbeds-signature-bliss.webp',
    imageAlt: 'PlushBeds Signature Bliss mattress',
  },
  {
    href: '/reviews/ghostbed-flex/',
    eyebrow: 'Mattress review',
    title: 'GhostBed Flex Review and Seven-Metric Scorecard',
    description: 'Construction, firmness, policy fields, and score definitions laid out plainly, with links back to the official source.',
    image: '/images/mattresses/ghostbed-flex.webp',
    imageAlt: 'GhostBed Flex mattress',
  },
];

export default function LatestGuides() {
  return (
    <section className="py-stack-lg">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-6">
          <div>
            <p className="text-label-sm font-label-sm uppercase text-secondary mb-3 font-bold">From the editorial desk</p>
            <h2 className="text-display-lg font-display-lg text-primary">Guides built to compare, not just describe</h2>
          </div>
          <a href="/blog/" className="inline-flex items-center gap-2 text-label-sm font-label-sm uppercase border border-outline-variant px-5 py-3 hover:border-secondary hover:text-secondary text-primary transition-colors rounded-lg font-bold">
            All articles <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {guides.map((guide, index) => (
            <article key={guide.href} className={`${index === 0 ? 'lg:col-span-7' : 'lg:col-span-5'} card-editorial overflow-hidden flex flex-col`}>
              <a href={guide.href} className="block h-56 bg-white border-b border-outline-variant overflow-hidden shrink-0">
                <img src={guide.image} alt={guide.imageAlt} className="w-full h-full object-contain p-4" />
              </a>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-label-sm uppercase text-secondary font-bold">{guide.eyebrow} · July 2026</p>
                <h3 className="text-headline-md text-primary font-bold mt-3">
                  <a href={guide.href} className="hover:text-secondary transition-colors">{guide.title}</a>
                </h3>
                <p className="text-body-md text-on-surface-variant mt-3 leading-relaxed">{guide.description}</p>
                <a href={guide.href} className="inline-flex items-center gap-2 text-secondary font-bold mt-5 hover:text-primary transition-colors">
                  Open guide <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}

          <aside className="lg:col-span-12 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-center gap-5 bg-surface-container-low border-l-4 border-secondary p-6">
            <BookOpen className="w-6 h-6 text-secondary" aria-hidden="true" />
            <div>
              <h3 className="text-headline-md font-bold text-primary">Know what a score can't tell you</h3>
              <p className="text-body-md text-on-surface-variant mt-2">We spell out exactly what's in each scorecard, what it leaves out, and which facts you should double-check with the manufacturer.</p>
            </div>
            <a href="/methodology/" className="inline-flex items-center gap-2 text-secondary font-bold hover:text-primary transition-colors">
              Methodology <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
