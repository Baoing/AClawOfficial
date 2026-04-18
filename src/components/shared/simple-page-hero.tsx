'use client'

import { TextReveal } from '@/src/components/animation/text-reveal-animation'
import type { ReactNode } from 'react'

interface SimplePageHeroProps {
  title: ReactNode
  subtitle: string
}

const SimplePageHero = ({ title, subtitle }: SimplePageHeroProps) => {
  return (
    <section className="border-stroke-1/10 bg-background-6 border-b pb-12 pt-28 md:pb-16 md:pt-36">
      <div className="main-container text-center">
        <TextReveal>
          <h1 className="font-sora text-sora-heading-4 font-normal text-white/90 md:text-sora-heading-3 xl:text-sora-heading-2">
            {title}
          </h1>
        </TextReveal>
        <TextReveal delay={0.15}>
          <p className="text-tagline-2 mx-auto mt-4 max-w-2xl font-normal text-white/55">{subtitle}</p>
        </TextReveal>
      </div>
    </section>
  )
}

export default SimplePageHero
