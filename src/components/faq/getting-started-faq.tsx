'use client'

import FaqSectionCard from '@/src/components/shared/ui/card/faq-section-card'
import { useLocale } from '@/src/context/LocaleContext'
import { getGettingStartedFaqSection } from '@/src/data/faq-locale'
import { useMemo } from 'react'

const GettingStartedFaq = () => {
  const { locale } = useLocale()
  const section = useMemo(() => getGettingStartedFaqSection(locale), [locale])

  return <FaqSectionCard section={section} isFirst={false} titleDelay={0} />
}

export default GettingStartedFaq
