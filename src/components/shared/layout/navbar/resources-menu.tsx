'use client'

import {
  BlogIcon,
  ContactIcon,
  FaqIcon,
  PricingIcon,
  SuccessIcon,
  SupportIcon,
  TutorialIcon,
} from '@/src/components/shared/icon/menu-icon'
import { useSiteT } from '@/src/hooks/use-site-translation'
import { cn } from '@/src/utils/cn'
import type { ComponentType } from 'react'
import ResourcesMenuLink from './resources-menu-link'

type ResourceLinkDef = {
  labelKey: string
  href: string
  icon: ComponentType<{ className?: string }>
}

const resourceLinkDefs: ResourceLinkDef[] = [
  { labelKey: 'nav.res.pricing', href: '/pricing', icon: PricingIcon },
  { labelKey: 'nav.res.blog', href: '/blog', icon: BlogIcon },
  { labelKey: 'nav.res.tutorial', href: 'https://shopify.baoea.com/', icon: TutorialIcon },
  { labelKey: 'nav.res.faq', href: '/faq', icon: FaqIcon },
  { labelKey: 'nav.res.support', href: 'mailto:contact@aiclawers.com', icon: SupportIcon },
  { labelKey: 'nav.res.contact', href: '/contact', icon: ContactIcon },
  { labelKey: 'nav.res.success', href: '/projects', icon: SuccessIcon },
]

interface ResourcesMenuProps {
  menuDropdownId: string | null
  setMenuDropdownId: (id: string | null) => void
}

const ResourcesMenu = ({ menuDropdownId, setMenuDropdownId }: ResourcesMenuProps) => {
  const t = useSiteT()
  const handleClose = () => setMenuDropdownId(null)

  return (
    <div>
      <div
        className={cn(
          'pointer-events-none absolute top-full left-1/2 z-40 h-3 w-[280px] -translate-x-1/2 bg-transparent opacity-0 transition-opacity duration-300 ease-in-out',
          menuDropdownId === 'resources-dropdown-menu' && 'pointer-events-auto! opacity-100',
        )}
      />
      <div
        id="resources-dropdown-menu"
        className={cn(
          'border-stroke-3/18 bg-background-6 absolute top-full left-1/2 z-50 mt-2 hidden w-[280px] -translate-x-1/2 rounded-[20px] border p-3 transition-all duration-500 ease-out lg:block',
          menuDropdownId === 'resources-dropdown-menu'
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0',
        )}
      >
        <ul className="space-y-2">
          {resourceLinkDefs.map((link) => (
            <ResourcesMenuLink
              key={link.labelKey}
              label={t(link.labelKey)}
              href={link.href}
              icon={link.icon}
              onClose={handleClose}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ResourcesMenu
