import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';

const Team = () => {
  return (
    <section className="pt-20 pb-28 xl:pb-34 2xl:pt-28 2xl:pb-44">
      <div className="main-container">
        <div className="mb-12 space-y-3 text-center">
          <TextReveal>
            <h2 className="font-sora text-sora-heading-4 lg:text-sora-heading-3 xl:text-sora-heading-2 inline-block font-normal text-white/90">
              Experience over headcount
            </h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="text-tagline-2 mx-auto max-w-xl font-normal text-white/60">
              A small senior studio with deep roots in leading Shopify SaaS—not a roster of placeholder
              profiles.
            </p>
          </TextReveal>
        </div>
        <RevealAnimation delay={0.3}>
          <div className="border-stroke-1/11 bg-background-6 mx-auto max-w-3xl space-y-6 rounded-lg border p-8 text-left md:p-10">
            <p className="text-tagline-2 font-normal text-white/80">
              Our practitioners come from{' '}
              <span className="text-white/90">Channelwill</span>, a top-tier Shopify SaaS company.
              Together we bring{' '}
              <span className="text-white/90">seven years</span> of hands-on work across Shopify
              storefronts, Liquid theme development, public and custom apps, SEO, and performance.
            </p>
            <p className="text-tagline-2 font-normal text-white/80">
              That background includes supporting{' '}
              <span className="text-white/90">tens of thousands of merchants</span> through
              product-grade tooling and implementation work—experience we now apply directly for
              brands that need clear delivery, not slide decks.
            </p>
            <p className="text-tagline-2 font-normal text-white/80">
              We work on a <span className="text-white/90">client-win</span> principle: your
              outcomes—conversion, stability, time-to-ship, and maintainability—come first. We stay
              close through discovery, build, launch, and iteration.
            </p>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Team;
