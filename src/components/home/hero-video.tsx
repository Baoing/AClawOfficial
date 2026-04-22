'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { useSiteT } from '@/src/hooks/use-site-translation';

const HeroVideo = () => {
  const t = useSiteT();

  return (
    <RevealAnimation delay={0.1} duration={0.7} offset={5} instant>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute bottom-0 left-0 z-2 size-full object-cover object-center"
      >
        <source src="/video/hero-bg.mp4" type="video/mp4" />
        {t('home.hero.videoNoSupport')}
      </video>
    </RevealAnimation>
  );
};

export default HeroVideo;
