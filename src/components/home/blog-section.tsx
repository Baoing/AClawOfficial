'use client'

import RevealAnimation from '@/src/components/animation/reveal-animation'
import { TextReveal } from '@/src/components/animation/text-reveal-animation'
import { PrimaryLinkButton } from '@/src/components/shared/ui/button/primary-link-button'
import { BlogCard } from '@/src/components/shared/ui/card/blog-card'
import { useSiteT } from '@/src/hooks/use-site-translation'
import type { BlogPost } from '@/src/interface'

interface BlogSectionProps {
  posts: BlogPost[]
}

const BlogSection = ({ posts }: BlogSectionProps) => {
  const t = useSiteT()

  return (
    <section
      className="bg-background-6 py-10 md:py-24 lg:py-28 xl:py-36 2xl:py-44"
      aria-labelledby="home-blog-heading"
      data-section="home-blog"
    >
      <div className="main-container space-y-8 md:space-y-14">
        <div className="space-y-4 text-center max-md:pb-4">
          <TextReveal>
            <h2
              id="home-blog-heading"
              className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 font-normal text-white/90 max-md:leading-[110%]"
            >
              {t('home.blog.h1')} <span className="text-white/30">{t('home.blog.h2')}</span>
            </h2>
          </TextReveal>

          <TextReveal delay={0.2}>
            <p className="font-inter-tight text-tagline-2 mx-auto max-w-xl text-white/60">
              {t('home.blog.sub')}
            </p>
          </TextReveal>
        </div>

        <div className="grid grid-cols-12 gap-x-5 gap-y-[70px] 2xl:gap-x-8">
          {posts.map((post, index) => (
            <RevealAnimation key={post.slug} delay={0.1 + index * 0.1}>
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                <BlogCard
                  title={post.title}
                  href={`/blog/${post.slug}`}
                  imageSrc={post.thumbnail}
                  imageAlt={post.title}
                  date={post.publishDate}
                  readTime={post.readTime}
                  tags={post.tags ?? []}
                />
              </div>
            </RevealAnimation>
          ))}
        </div>

        <RevealAnimation delay={0.1}>
          <div className="flex justify-center max-md:mt-3">
            <PrimaryLinkButton href="/blog">{t('home.blog.cta')}</PrimaryLinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  )
}

export default BlogSection
