'use client';

import AI_CHATBOT_IMAGE from '@/public/images/opai-img-94.png';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { useSiteT } from '@/src/hooks/use-site-translation';
import Image from 'next/image';

const AIChatbotVoiceAssistants = () => {
  const t = useSiteT();

  return (
    <div
      className="border-stroke-1/18 bg-background-6 relative z-10 flex h-[344px] w-full flex-col items-start justify-between overflow-hidden rounded-lg border pt-10.5 pl-10.5 max-lg:gap-y-10 lg:flex-row"
      aria-labelledby="shopify-apps-heading"
    >
      {/* glowing gradient */}
      <div className="pointer-events-none absolute top-[-52%] left-[-17%] select-none">
        <div className="pointer-events-none relative z-2 h-[276px] w-[188px] rotate-[-10.86deg] rounded-[50%] bg-white/40 blur-[25.5px] select-none">
          <div className="bg-opai-purple/90 absolute right-0 bottom-[-4px] left-[102px] z-1 h-[194px] w-[133px] rotate-12 rounded-[50%] mix-blend-plus-lighter blur-[82px]" />
        </div>
      </div>

      <RevealAnimation delay={0.1}>
        <div className="w-full space-y-1">
          <h3
            id="shopify-apps-heading"
            className="font-sora text-sora-heading-5 max-w-[200px] font-normal text-white/80 sm:mx-auto md:mx-0"
            itemProp="name"
          >
            {t('home.customApps.title')}
          </h3>
          <p
            className="font-inter-tight text-tagline-2 w-full max-w-[269px] text-left font-normal text-white/50 sm:mx-auto sm:text-center md:mx-0 md:text-left"
            itemProp="description"
          >
            {t('home.customApps.sub')}
          </p>
        </div>
      </RevealAnimation>

      <RevealAnimation delay={0.2} direction="right">
        <figure className="w-full max-w-[502px]">
          <Image
            src={AI_CHATBOT_IMAGE}
            alt={t('home.customApps.imgAlt')}
            loading="lazy"
            className="size-full object-cover"
            width={502}
            height={280}
          />
        </figure>
      </RevealAnimation>
    </div>
  );
};

export default AIChatbotVoiceAssistants;
