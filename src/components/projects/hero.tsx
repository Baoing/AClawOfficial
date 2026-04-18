import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import { PrimaryLinkButton } from '@/src/components/shared/ui/button/primary-link-button';

const ProjectsHero = () => {
  return (
    <section className="bg-background-6 relative overflow-hidden pt-36 xl:pt-40 2xl:pt-50">
      <div className="main-container relative z-10">
        <div className="mb-10 text-center lg:mb-20 xl:mb-28">
          <TextReveal>
            <h2 className="xl:text-sora-heading-2 lg:text-sora-heading-3 text-sora-heading-4 inline-block font-normal text-white/90">
              Shopify work <span className="text-white/30">you can inspect</span>
            </h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="text-tagline-2 mx-auto mt-3 mb-14 max-w-xl font-normal text-white/60">
              Themes, custom apps, migrations, and integrations—documented with constraints, trade-offs,
              and what changed for the merchant after launch.
            </p>
          </TextReveal>
          <RevealAnimation delay={0.3}>
            <div className="text-center">
              <PrimaryLinkButton href="/contact">Discuss your Shopify build</PrimaryLinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;
