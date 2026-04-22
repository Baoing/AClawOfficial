'use client'

import { BlogIcon } from '@/src/components/shared/icon/menu-icon'
import { useSiteT } from '@/src/hooks/use-site-translation'
import { cn } from '@/src/utils/cn'
import Image from 'next/image'
import Link from 'next/link'
import type { ComponentType } from 'react'
import PlatformMenuLink from './platform-menu-link'

type SimpleNavLink = {
  label: string
  href: string
  closesMenu?: boolean
}

type IntegrationLink = SimpleNavLink & {
  icon: ComponentType<{ className?: string }>
}

const blogOverviewLinks: SimpleNavLink[] = [
  { label: 'Storefront MCP', href: '/blog/storefront-mcp-overview' },
  { label: 'AI Toolkit', href: '/blog/shopify-ai-toolkit-guide' },
  { label: 'Ops playbook', href: '/blog/ai-playbook-merchants-and-operations' },
  { label: 'Never finished', href: '/blog/your-shopify-store-is-never-finished' },
  { label: 'AI copilots', href: '/blog/shopify-ai-copilots-with-guardrails' },
  { label: 'Build vs buy', href: '/blog/shopify-custom-apps-build-vs-buy' },
]

const blogGuideLinks: IntegrationLink[] = [
  { label: 'Speed checklist', href: '/blog/shopify-theme-performance-checklist', icon: BlogIcon },
  { label: 'Prompt craft', href: '/blog/prompt-engineering-better-outputs', icon: BlogIcon },
  { label: 'Responsible AI', href: '/blog/responsible-ai-matters-business', icon: BlogIcon },
  { label: 'Workflow guide', href: '/blog/beginners-guide-automating-workflows-ai', icon: BlogIcon },
  { label: 'Data privacy', href: '/blog/ai-data-privacy-leaders', icon: BlogIcon },
  { label: 'All posts', href: '/blog', icon: BlogIcon },
]

interface PlatformMenuProps {
  menuDropdownId: string | null
  setMenuDropdownId: (id: string | null) => void
}

const PlatformMenu = ({ menuDropdownId, setMenuDropdownId }: PlatformMenuProps) => {
  const t = useSiteT()
  const handleClose = () => setMenuDropdownId(null)

  return (
    <div>
      <div
        className={cn(
          'pointer-events-none absolute top-full left-1/2 z-40 h-3 w-full -translate-x-1/2 bg-transparent opacity-0 transition-opacity duration-300 ease-in-out lg:w-[1290px]',
          menuDropdownId === 'platform-mega-menu' && 'pointer-events-auto! opacity-100',
        )}
      />
      <div
        id="platform-mega-menu"
        className={cn(
          'border-stroke-3/18 bg-background-6 fixed top-full left-1/2 z-50 mt-2 hidden w-full -translate-x-1/2 rounded-[20px] border p-4 transition-all duration-500 ease-out lg:flex lg:w-[1290px]',
          menuDropdownId === 'platform-mega-menu'
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0',
        )}
      >
        <div className="grid grid-cols-12 items-start gap-y-6 md:gap-x-6">
          <div className="col-span-12 grid grid-cols-12 gap-x-6 lg:col-span-6">
            <div className="col-span-12 xl:col-span-6">
              <div>
                <p className="text-tagline-2 p-3 font-medium text-white/60">{t('nav.platform.blog')}</p>
                <ul>
                  {blogOverviewLinks.map((link) => (
                    <PlatformMenuLink key={link.label} {...link} onClose={handleClose} />
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-span-12 xl:col-span-6">
              <div>
                <p className="text-tagline-2 p-3 font-medium text-white/60">{t('nav.platform.guides')}</p>
                <ul>
                  {blogGuideLinks.map((link) => (
                    <PlatformMenuLink
                      key={link.label}
                      {...link}
                      variant="icon"
                      onClose={handleClose}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-12 grid grid-cols-12 gap-x-6 lg:col-span-6">
            <div className="col-span-12 xl:col-span-6">
              <article className="border-stroke-3/18 group space-y-3 rounded-2xl border p-3">
                <Link
                  onClick={handleClose}
                  href="/blog/storefront-mcp-overview"
                  className="block"
                >
                  <figure className="h-[250px] w-full max-w-[400px] overflow-hidden rounded-lg">
                    <Image
                      src="/images/opai-img-483.jpg"
                      alt=""
                      width={800}
                      height={500}
                      className="size-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                  </figure>
                </Link>
                <div className="space-y-2">
                  <Link href="/blog/storefront-mcp-overview" onClick={handleClose} className="block">
                    <p className="font-sora text-tagline-2 line-clamp-2 font-normal text-white">
                      {t('nav.platform.card1.title')}
                    </p>
                    <p className="text-tagline-4 font-normal text-white/60">
                      {t('nav.platform.card1.sub')}
                    </p>
                  </Link>
                </div>
              </article>
            </div>
            <div className="col-span-12 xl:col-span-6">
              <article className="border-stroke-3/18 group space-y-3 rounded-2xl border p-3">
                <Link
                  onClick={handleClose}
                  href="/blog/shopify-ai-toolkit-guide"
                  className="block"
                >
                  <figure className="h-[250px] w-full max-w-[400px] overflow-hidden rounded-lg">
                    <Image
                      src="/images/opai-avatar-img-888.png"
                      alt=""
                      width={800}
                      height={500}
                      className="size-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                  </figure>
                </Link>
                <div className="space-y-2">
                  <Link href="/blog/shopify-ai-toolkit-guide" onClick={handleClose} className="block">
                    <p className="font-sora text-tagline-2 line-clamp-2 font-normal text-white">
                      {t('nav.platform.card2.title')}
                    </p>
                    <p className="text-tagline-4 font-normal text-white/60">
                      {t('nav.platform.card2.sub')}
                    </p>
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlatformMenu
