'use client'

import RevealAnimation from '@/src/components/animation/reveal-animation'
import { useCases } from '@/src/data/use-cases'

const UseCasesGrid = () => {
  return (
    <section className="py-16 md:py-24 xl:py-32">
      <div className="main-container">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:gap-8">
          {useCases.map((item, i) => (
            <RevealAnimation key={item.title} delay={0.05 * i}>
              <article className="border-stroke-1/11 bg-background-6 flex h-full flex-col rounded-lg border p-8 md:p-10">
                <h2 className="font-sora text-sora-heading-5 font-normal text-white/90">{item.title}</h2>
                <p className="text-tagline-2 mt-3 font-normal text-white/55">{item.description}</p>
                <ul className="text-tagline-3 mt-6 list-disc space-y-2 pl-5 font-normal text-white/50">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UseCasesGrid
