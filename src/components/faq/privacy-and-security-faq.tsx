'use client'

import FaqSectionCard from '@/src/components/shared/ui/card/faq-section-card'
import { useLocale } from '@/src/context/LocaleContext'
import { getPrivacyAndSecurityFaqSection } from '@/src/data/faq-locale'
import { useMemo } from 'react'

const PrivacyAndSecurityFaq = () => {
  const { locale } = useLocale()
  const section = useMemo(() => getPrivacyAndSecurityFaqSection(locale), [locale])

  return <FaqSectionCard section={section} isFirst={false} titleDelay={0} />
}

export default PrivacyAndSecurityFaq
