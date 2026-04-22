'use client'

import opai1 from '@/public/images/gradient/opai-1.png'
import RevealAnimation from '@/src/components/animation/reveal-animation'
import { TextReveal } from '@/src/components/animation/text-reveal-animation'
import { PrimaryLinkButton } from '@/src/components/shared/ui/button/primary-link-button'
import ProjectCard from '@/src/components/shared/ui/card/project-card'
import { customerCases, homeFeaturedCustomerCaseCount } from '@/src/data/customer-cases'
import { useSiteT } from '@/src/hooks/use-site-translation'
import Image from 'next/image'

const Projects = () => {
  const t = useSiteT()
  const featuredCases = customerCases.slice(0, homeFeaturedCustomerCaseCount)

  return (
    <section
      className="bg-background-6 relative overflow-hidden py-10 pt-20 sm:py-20 md:py-28 lg:py-36 xl:py-40 2xl:py-44"
      aria-labelledby="projects-heading"
      data-section="home-projects"
    >
      <div className="absolute -top-1 left-0 z-4 h-[796px] w-full md:h-[760px] lg:-top-4 2xl:-top-12">
        <Image src={opai1} alt="" aria-hidden className="h-full w-full object-cover" />
      </div>

      <div className="main-container relative z-10">
        <div className="space-y-10 md:space-y-14 lg:space-y-20">
          <div className="space-y-2 pb-5 text-center md:space-y-3">
            <TextReveal>
              <h2
                className="font-sora text-sora-heading-4 text-background-7 min-[500px]:text-background-13/90 md:text-sora-heading-3 lg:text-sora-heading-2 font-normal max-md:leading-[110%] lg:mx-auto lg:max-w-[600px]"
                id="projects-heading"
              >
                {t('home.projects.h1')}{' '}
                <span className="text-background-7/50 min-[500px]:text-background-13/50">
                  {t('home.projects.h2')}
                </span>
              </h2>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="font-inter-tight text-tagline-2 text-background-7 min-[500px]:text-background-13/50 font-normal lg:mx-auto lg:max-w-[380px]">
                {t('home.projects.sub')}
              </p>
            </TextReveal>
          </div>

          <div className="grid grid-cols-12 gap-y-8 lg:gap-x-8">
            {featuredCases.map((item, index) => (
              <RevealAnimation key={item.href} delay={0.3 + index * 0.1}>
                <div className="col-span-12">
                  <ProjectCard
                    href={item.href}
                    title={item.title}
                    description={item.tags.join(' · ')}
                    imageSrc={item.imageSrc}
                    imageAlt={item.imageAlt}
                    openInNewTab
                  />
                </div>
              </RevealAnimation>
            ))}
          </div>

          <RevealAnimation delay={0.1}>
            <div className="mx-auto w-full text-center max-md:w-[85%] md:mx-0 md:w-auto">
              <PrimaryLinkButton href="/projects" className="w-full md:w-auto">
                {t('home.projects.cta')}
              </PrimaryLinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  )
}

export default Projects
