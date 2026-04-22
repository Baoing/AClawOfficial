'use client'

import RevealAnimation from '@/src/components/animation/reveal-animation'
import { TextReveal } from '@/src/components/animation/text-reveal-animation'
import TestimonialCard from '@/src/components/shared/ui/card/testimonial-card'
import { testimonialsData } from '@/src/data/testimonials-data'
import { useSiteT } from '@/src/hooks/use-site-translation'
import Marquee from 'react-fast-marquee'

const Testimonial = () => {
  const t = useSiteT()

  return (
    <section
      className="py-10 md:py-28 lg:py-36 xl:py-40 2xl:py-44"
      aria-labelledby="testimonial-heading"
      data-section="home-testimonials"
    >
      <div className="main-container mb-10 md:mb-14 lg:mb-17.5">
        <div className="space-y-3 text-center">
          <TextReveal>
            <h2
              id="testimonial-heading"
              className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 mx-auto max-w-[700px] font-normal max-md:leading-[110%]"
            >
              <span className="font-normal text-white/90">{t('home.testimonial.h1')} </span>
              <span className="text-white/30">
                {t('home.testimonial.h2')}
              </span>
            </h2>
          </TextReveal>
        </div>
      </div>
      <RevealAnimation delay={0.2}>
        <div className="relative overflow-hidden">
          <div className="from-background-6 absolute top-0 left-0 z-10 h-full w-1/3 bg-linear-to-r to-transparent" />
          <div className="from-background-6 absolute top-0 right-0 z-10 h-full w-1/3 bg-linear-to-l to-transparent" />
          <Marquee speed={40} pauseOnHover>
            {testimonialsData.map((item) => (
              <TestimonialCard
                key={item.id}
                quote={item.quote}
                name={item.name}
                role={item.role}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
                className="mx-4 shrink-0"
              />
            ))}
          </Marquee>
        </div>
      </RevealAnimation>
    </section>
  )
}

export default Testimonial
