'use client';

import heroImage from '@/public/images/aclaw-img-95.png';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import HeroVideo from '@/src/components/home/hero-video';
import { HeroLinkButton } from '@/src/components/shared/ui/button/hero-link-button';
import Image from 'next/image';

/** Temporarily hide hero background video; set to true to restore. */
const IS_HERO_VIDEO_VISIBLE = true;

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-[200px]"
      aria-labelledby="hero-heading"
    >
      <div className="main-container relative z-4">
        <div className="space-y-14 md:space-y-16">
          <div className="space-y-10 md:space-y-14">
            {/* content */}
            <div className="space-y-3 text-center">
              <TextReveal instant>
                <h1 className="font-sora text-sora-heading-3 md:text-sora-heading-2 lg:text-sora-heading-1 mx-auto w-full max-w-[1036px] font-normal max-md:leading-[110%]">
                  <span className="text-white">Intelligent Shopify services</span>
                  <div className="text-white/30">
                    <br className="md:hidden" />
                    Help to launch, and grow your store
                  </div>
                </h1>
              </TextReveal>

              <TextReveal instant delay={0.2}>
                <p
                  className="font-inter-tight text-tagline-2 mx-auto w-full max-w-[450px] font-normal text-white/50"
                  aria-describedby="hero-heading"
                >
                  We handle the hard Shopify work—setup, speed, and fixes—so you can focus on
                  customers and sales.
                </p>
              </TextReveal>
            </div>

            {/* buttons */}
            <div
              className="flex items-center justify-center gap-x-6 lg:gap-x-14"
              aria-label="Action buttons"
            >
              <RevealAnimation delay={0.4} instant>
                <div>
                  <HeroLinkButton href="/pricing">Start for free</HeroLinkButton>
                </div>
              </RevealAnimation>
            </div>
          </div>

          {/* hero image */}
          <RevealAnimation delay={0.6} instant>
            <figure className="relative z-10 mx-auto h-[300px] max-w-[1223px] md:h-[400px] lg:h-[573px]">
              <Image
                src={heroImage}
                alt="Shopify storefront and operations dashboard with analytics and automation"
                width={1223}
                height={573}
                loading="eager"
                className="size-[120%] object-cover md:size-full"
                priority
              />
            </figure>
          </RevealAnimation>
        </div>
      </div>

      {/* Hero background video (toggle IS_HERO_VIDEO_VISIBLE) */}
      {IS_HERO_VIDEO_VISIBLE ? <HeroVideo /> : null}

      {/* overlays */}
      <div
        className="to-background-7 pointer-events-none absolute -bottom-10 left-0 z-20 h-[184px] w-full bg-linear-to-b from-transparent from-[10.09%] to-[89.05%] select-none"
        aria-hidden
      />
      <div
        className="to-background-7 pointer-events-none absolute -bottom-12 left-0 z-19 h-[104px] w-full bg-linear-to-b from-transparent from-[10.09%] to-[69.05%] select-none"
        aria-hidden
      />
      <div
        className="to-background-7 pointer-events-none absolute -bottom-2 left-0 z-18 h-10 w-full bg-linear-to-b from-transparent from-[10.09%] to-[55.05%] select-none"
        aria-hidden
      />

      {/* bottom blend */}
      <div
        className="absolute left-0 z-20 hidden h-[200px] w-full min-[1920px]:-bottom-5 lg:-bottom-22 lg:block xl:-bottom-17 2xl:-bottom-7"
        aria-hidden
      >
        <Image
          src="/images/blend.png"
          alt=""
          width={1920}
          height={200}
          className="size-full object-cover object-bottom"
        />
      </div>
    </section>
  );
};

export default Hero;
