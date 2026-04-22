'use client'

import RevealAnimation from '@/src/components/animation/reveal-animation'
import { TextReveal } from '@/src/components/animation/text-reveal-animation'
import FaqContact from '@/src/components/home/faq-contact'
import {
  Accordion,
  AccordionAction,
  AccordionContent,
  AccordionItem,
} from '@/src/components/shared/ui/accordion'
import { useSiteT } from '@/src/hooks/use-site-translation'
import { useMemo } from 'react'

const FAQ = () => {
  const t = useSiteT()
  const faqItems = useMemo(
    () =>
      [
        { value: 'item-one', q: 'home.faq.q1.question', a: 'home.faq.q1.answer' },
        { value: 'item-two', q: 'home.faq.q2.question', a: 'home.faq.q2.answer' },
        { value: 'item-three', q: 'home.faq.q3.question', a: 'home.faq.q3.answer' },
        { value: 'item-four', q: 'home.faq.q4.question', a: 'home.faq.q4.answer' },
        { value: 'item-five', q: 'home.faq.q5.question', a: 'home.faq.q5.answer' },
        { value: 'item-six', q: 'home.faq.q6.question', a: 'home.faq.q6.answer' },
        { value: 'item-seven', q: 'home.faq.q7.question', a: 'home.faq.q7.answer' },
      ] as const,
    [],
  )

  return (
    <section className="bg-background-6 py-10 md:py-28 lg:py-30 xl:py-40 2xl:py-44">
      <div className="main-container space-y-10 md:space-y-19.5">
        <div className="space-y-1.5 text-center md:space-y-3">
          <TextReveal>
            <h2 className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 max-md:-leading-[110%] mx-auto max-w-[700px] font-normal">
              <span className="font-normal text-white/90"> {t('home.faq.h1')} </span>
              <span className="text-white/30"> {t('home.faq.h2')} </span>
            </h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="font-inter-tight text-tagline-2 mx-auto max-w-[380px] text-white/60">
              {t('home.faq.sub')}
            </p>
          </TextReveal>
        </div>

        <div className="flex flex-col items-start justify-between gap-y-10 overflow-hidden md:items-center lg:flex-row lg:items-start lg:gap-x-10 xl:gap-x-[100px]">
          <RevealAnimation direction="left" offset={100} delay={0.3}>
            <div className="w-full max-w-[595px]">
              <Accordion defaultOpen="item-one" type="single">
                {faqItems.map((item) => (
                  <AccordionItem
                    key={item.value}
                    value={item.value}
                    className="border-stroke-1/10 rounded-lg border px-6"
                  >
                    <AccordionAction>{t(item.q)}</AccordionAction>
                    <AccordionContent contentClassName="font-inter-tight text-tagline-2 max-w-[531px] cursor-text pb-6 font-extralight text-white/50">
                      {t(item.a)}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </RevealAnimation>

          <FaqContact />
        </div>
      </div>
    </section>
  )
}

export default FAQ
