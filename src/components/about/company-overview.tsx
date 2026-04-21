import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';

const COMPANY_CARDS = [
  {
    title: 'Brand',
    body: 'AI Clawers is how merchants and partners know our work: Shopify storefronts, themes, apps, Flow, integrations, and performance—with outcomes over buzzwords.',
  },
  {
    title: 'Legal entity',
    bodyLines: [
      { text: 'AI CLAWERS SOLUTIONS LIMITED', mono: true },
      { text: '智爪集成有限公司', lang: 'zh-Hans' as const },
      'Contracts, statements, and formal correspondence reference this registered name.',
    ],
  },
  {
    title: 'Contact',
    body: 'For project scoping, partnerships, and press: we read everything sent to our team inbox.',
    email: 'contact@aiclawers.com',
  },
] as const;

const CompanyOverview = () => {
  return (
    <section
      className="border-stroke-1/10 border-t pt-16 md:pt-24 xl:pt-28"
      aria-labelledby="about-company-overview-heading"
    >
      <div className="main-container">
        <div className="mb-10 space-y-3 text-center md:mb-14">
          <TextReveal>
            <h2
              id="about-company-overview-heading"
              className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 inline-block font-normal text-white/90"
            >
              The <span className="text-white/30">company</span>
            </h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="text-tagline-2 mx-auto max-w-2xl font-normal text-white/60">
              AI Clawers is the brand you see on this site;{' '}
              <span className="text-white/75">智爪集成有限公司</span> /{' '}
              <span className="font-ibm-plex-mono text-white/75">AI CLAWERS SOLUTIONS LIMITED</span>{' '}
              is the legal operating entity behind that brand.
            </p>
          </TextReveal>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-x-4">
          {COMPANY_CARDS.map((card, i) => (
            <RevealAnimation key={card.title} delay={0.25 + i * 0.08}>
              <div className="border-stroke-1/11 bg-background-6 flex h-full flex-col rounded-lg border p-8 text-left">
                <h3 className="font-sora text-sora-heading-5 mb-3 font-normal text-white/90">
                  {card.title}
                </h3>
                {'bodyLines' in card ? (
                  <div className="space-y-2">
                    {card.bodyLines.map((line, j) => {
                      if (typeof line === 'string') {
                        return (
                          <p
                            key={`legal-${j}`}
                            className="text-tagline-2 pt-1 font-normal text-white/50"
                          >
                            {line}
                          </p>
                        );
                      }
                      if ('mono' in line && line.mono) {
                        return (
                          <p
                            key="legal-en"
                            className="font-ibm-plex-mono text-tagline-2 font-medium tracking-wide text-white/90 uppercase"
                          >
                            {line.text}
                          </p>
                        );
                      }
                      if ('lang' in line) {
                        return (
                          <p
                            key="legal-zh"
                            lang={line.lang}
                            className="text-tagline-2 font-normal text-white/70"
                          >
                            {line.text}
                          </p>
                        );
                      }
                      return null;
                    })}
                  </div>
                ) : (
                  <>
                    <p className="text-tagline-2 mb-4 flex-1 font-normal text-white/55">{card.body}</p>
                    {'email' in card && card.email ? (
                      <a
                        href={`mailto:${card.email}`}
                        className="font-ibm-plex-mono text-tagline-2 font-medium text-white/75 underline-offset-4 transition-colors hover:text-white hover:underline"
                      >
                        {card.email}
                      </a>
                    ) : null}
                  </>
                )}
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
