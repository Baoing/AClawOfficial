'use client'

import RevealAnimation from '@/src/components/animation/reveal-animation'
import TestimonialCard from '@/src/components/shared/ui/card/testimonial-card'
import { testimonialsData } from '@/src/data/testimonials-data'

const TestimonialsPageGrid = () => {
  return (
    <section className="py-16 md:py-24 xl:py-32">
      <div className="main-container">
        <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.map((item, i) => (
            <RevealAnimation key={item.id} delay={0.05 * i}>
              <TestimonialCard
                quote={item.quote}
                name={item.name}
                role={item.role}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
                className="mx-auto h-auto min-h-[300px] w-full max-w-[380px] first:!ml-0 md:min-h-[340px] md:max-w-none"
              />
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsPageGrid
