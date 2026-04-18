import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';

const WHY_US_ITEMS = [
  {
    shapeClass: 'ns-shape-17',
    title: 'Proven Shopify depth',
    description:
      'Seven years across storefronts, themes, apps, and SEO—shaped inside a leading Shopify SaaS company.',
  },
  {
    shapeClass: 'ns-shape-18',
    title: 'Full-stack coverage',
    description:
      'From migrations and theme systems to custom apps, integrations, and performance—one coherent delivery loop.',
  },
  {
    shapeClass: 'ns-shape-19',
    title: 'Scale-tested judgment',
    description:
      'Experience supporting tens of thousands of merchants informs what we automate, what we harden, and what we simplify.',
  },
  {
    shapeClass: 'ns-shape-20',
    title: 'Client-win partnerships',
    description:
      'We align on your metrics first—conversion, stability, time-to-ship—and communicate trade-offs in plain language.',
  },
];

const WhyUs = () => {
  return (
    <section className="py-28 xl:py-34 2xl:py-44">
      <div className="main-container">
        <div className="space-y-18">
          <div className="space-y-3 text-center">
            <TextReveal>
              <h2 className="font-sora text-sora-heading-4 lg:text-sora-heading-3 xl:text-sora-heading-2 inline-block font-normal text-white/90">
                Why choose AI Clawers?
              </h2>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="text-tagline-2 mx-auto max-w-xl font-normal text-white/60">
                Channelwill roots, seven years on Shopify, and a bias for your outcomes—not slide
                decks.
              </p>
            </TextReveal>
          </div>
          <div className="flex flex-col items-stretch gap-y-4 lg:flex-row lg:gap-x-4">
            {WHY_US_ITEMS.map((item, i) => (
              <RevealAnimation key={item.title} delay={0.3 + i * 0.1}>
                <div className="flex-1">
                  <div className="border-stroke-1/11 bg-background-6 relative h-full space-y-6 overflow-hidden rounded-lg border p-10.5">
                    <div className="flex items-center justify-center">
                      <span className={`${item.shapeClass} text-[36px] text-white`} aria-hidden />
                    </div>
                    <div className="space-y-1 text-center">
                      <h3 className="font-sora text-sora-heading-5 font-normal text-white/90">
                        {item.title}
                      </h3>
                      <p className="text-tagline-2 font-normal text-white/60">{item.description}</p>
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

export default WhyUs;
