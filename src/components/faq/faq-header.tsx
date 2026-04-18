'use client';

import { TextReveal } from '@/src/components/animation/text-reveal-animation';

const FaqHeader = () => {
  return (
    <div className="mb-18 space-y-3 text-center">
      <TextReveal>
        <h1 className="xl:text-sora-heading-2 lg:text-sora-heading-3 text-sora-heading-4 inline-block font-normal text-white/90">
          Frequently <span className="text-white/30">asked questions</span>
        </h1>
      </TextReveal>
      <TextReveal delay={0.2}>
        <p className="text-tagline-2 mx-auto w-full max-w-[640px] font-normal text-white/60">
          Practical answers on Shopify builds, custom apps, pricing, co-development, data access, and
          how we start—so you know what to expect before you contact us.
        </p>
      </TextReveal>
    </div>
  );
};

export default FaqHeader;
