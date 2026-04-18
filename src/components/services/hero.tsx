import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import { PrimaryLinkButton } from '@/src/components/shared/ui/button/primary-link-button';

const ServicesHero = () => {
  return (
    <section className="py-44">
      <div className="main-container">
        <div>
          <div className="space-y-3 text-center">
            <div className="mx-auto w-full max-w-[640px]">
              <TextReveal>
                <h2 className="xl:text-sora-heading-2 lg:text-sora-heading-3 text-sora-heading-4 inline-block font-normal text-white/90">
                  Shopify delivery <span className="text-white/30">from storefront to AI</span>
                </h2>
              </TextReveal>
            </div>
            <TextReveal delay={0.2}>
              <p className="text-tagline-2 font-inter-tight mx-auto w-full max-w-[560px] text-white/60">
                Builds, design, themes, custom apps, technical SEO, GEO, AI integration, and
                integrations—scoped with clear outcomes, handovers your team can run, and pragmatic use
                of AI where it earns its place.
              </p>
            </TextReveal>
          </div>
          <RevealAnimation delay={0.3}>
            <div className="mt-14 text-center">
              <PrimaryLinkButton href="/contact">Discuss your roadmap</PrimaryLinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
