'use client'

import {
  GDPRIcon,
  LegalNoticeIcon,
  PrivacyIcon,
  TermsConditionsIcon,
} from '@/src/components/shared/icon/menu-icon'
import { useSiteT } from '@/src/hooks/use-site-translation'
import { cn } from '@/src/utils/cn'
import type { ComponentType } from 'react'
import PlanAndSupportMenuLink from './plan-and-support-menu-link'

type PlanSupportLinkDef = {
  titleKey: string
  descriptionKey: string
  href: string
  icon: ComponentType<{ className?: string }>
}

const policyLinkDefs: PlanSupportLinkDef[] = [
  {
    titleKey: 'nav.plan.termsTitle',
    descriptionKey: 'nav.plan.termsDesc',
    href: '/terms',
    icon: TermsConditionsIcon,
  },
  {
    titleKey: 'nav.plan.privacyTitle',
    descriptionKey: 'nav.plan.privacyDesc',
    href: '/privacy',
    icon: PrivacyIcon,
  },
  {
    titleKey: 'nav.plan.gdprTitle',
    descriptionKey: 'nav.plan.gdprDesc',
    href: '/gdpr',
    icon: GDPRIcon,
  },
  {
    titleKey: 'nav.plan.tutorialTitle',
    descriptionKey: 'nav.plan.tutorialDesc',
    href: 'https://shopify.baoea.com/',
    icon: LegalNoticeIcon,
  },
]

interface PlanAndSupportMenuProps {
  menuDropdownId: string | null
  setMenuDropdownId: (id: string | null) => void
}

const PlanAndSupportMenu = ({ menuDropdownId, setMenuDropdownId }: PlanAndSupportMenuProps) => {
  const t = useSiteT()
  const handleClose = () => setMenuDropdownId(null)

  return (
    <div>
      <div
        className={cn(
          'pointer-events-none absolute top-full left-1/2 z-40 h-3 w-[280px] bg-transparent opacity-0 transition-opacity duration-300 ease-in-out',
          menuDropdownId === 'plan-and-support-mega-menu' && 'pointer-events-auto! opacity-100',
        )}
      />
      <div
        id="plan-and-support-mega-menu"
        className={cn(
          'border-stroke-3/18 bg-background-6 fixed top-full left-1/2 z-50 mt-2 hidden  w-[280px] space-y-6 rounded-[20px] border p-4 transition-all duration-500 ease-out lg:flex',
          menuDropdownId === 'plan-and-support-mega-menu'
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0',
        )}
      >
        <div className="flex w-full items-start gap-y-6 md:gap-x-6">
          <ul className="w-full flex-1 space-y-2">
            {policyLinkDefs.map((link) => (
              <PlanAndSupportMenuLink
                key={link.href}
                title={t(link.titleKey)}
                description={t(link.descriptionKey)}
                href={link.href}
                icon={link.icon}
                onClose={handleClose}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PlanAndSupportMenu
