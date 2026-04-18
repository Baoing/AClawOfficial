'use client'

import RevealAnimation from '@/src/components/animation/reveal-animation'
import { customerCases } from '@/src/data/customer-cases'
import Image from 'next/image'
import Link from 'next/link'

const LiveStorefrontCases = () => {
  return (
    <section className="border-stroke-1/10 border-b py-16 md:py-24 xl:py-28">
      <div className="main-container">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <h2 className="font-sora text-sora-heading-5 font-normal text-white/90 md:text-sora-heading-6">
            Project <span className="text-white/35">storefronts</span>
          </h2>
          <p className="text-tagline-2 mt-3 font-normal text-white/55">
            Shopify stores we have designed, customized, or optimized—open a card to visit the live site.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {customerCases.map((item, index) => (
            <RevealAnimation key={item.href} delay={0.05 * index}>
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border-stroke-1/11 group block overflow-hidden rounded-lg border transition-colors hover:border-white/20"
              >
                <figure className="relative aspect-[4/3] w-full overflow-hidden bg-white/5">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                </figure>
                <div className="space-y-3 p-5 md:p-6">
                  <h3 className="font-sora text-tagline-1 line-clamp-2 font-normal text-white/90 md:text-sora-heading-6">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={`${item.href}-${tag}`}
                        className="text-tagline-4 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-normal text-white/55"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LiveStorefrontCases
