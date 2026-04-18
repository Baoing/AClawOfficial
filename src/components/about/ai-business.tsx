import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import { BlurSvg } from '@/src/components/shared/icon';

const cards = [
  {
    shapeClass: 'ns-shape-15',
    title: 'Vision',
    description:
      'Merchants win when Shopify implementations are fast, maintainable, and honest about trade-offs. We want every launch and iteration to compound—clean architecture today, easier growth tomorrow—with AI used where it clearly saves time or improves decisions, not as a gimmick.',
  },
  {
    shapeClass: 'ns-shape-16',
    title: 'Mission',
    description:
      'Ship pragmatic Shopify work: new stores and migrations, Online Store 2.0 themes, apps and admin extensions, integrations, technical SEO, and performance. Stay close to stakeholders, document assumptions, and measure success by your outcomes—not our buzzwords.',
  },
];

const AiBusiness = () => {
  return (
    <section>
      <div className="main-container">
        <div className="space-y-20">
          <div className="space-y-3 text-center">
            <TextReveal>
              <h2 className="font-sora text-sora-heading-4 lg:text-sora-heading-3 xl:text-sora-heading-2 inline-block font-normal text-white/90">
                Shopify delivery <br className="hidden lg:block" />
                <span className="text-white/30">with a client-win mindset</span>
              </h2>
            </TextReveal>

            <TextReveal delay={0.2}>
              <p className="text-tagline-2 mx-auto max-w-xl font-normal text-white/60">
                We combine Channelwill-grade product experience with boutique attention: fewer layers,
                clearer ownership, and work that maps to revenue, reliability, and roadmap speed.
              </p>
            </TextReveal>
          </div>
          <div className="flex flex-col items-stretch gap-y-4 lg:flex-row lg:gap-x-4">
            {cards.map((card, i) => (
              <RevealAnimation key={card.title} delay={0.3 + i * 0.1}>
                <div className="flex-1">
                  <div className="border-stroke-1/11 bg-background-6 relative h-full space-y-14 overflow-hidden rounded-lg border px-8 py-11">
                    <figure className="pointer-events-none">
                      <BlurSvg idPrefix={`ai-business-${i}`} />
                    </figure>
                    <div className="relative z-10 flex items-center justify-center">
                      <span className={`${card.shapeClass} text-[50px] text-white`} aria-hidden />
                    </div>
                    <div className="relative z-10 space-y-2 text-center">
                      <h3 className="font-sora text-sora-heading-5 font-normal text-white/90">
                        {card.title}
                      </h3>
                      <p className="text-tagline-2 font-normal text-white/60">{card.description}</p>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiBusiness;
