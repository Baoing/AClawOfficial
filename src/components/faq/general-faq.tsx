'use client'

import FaqSectionCard from '@/src/components/shared/ui/card/faq-section-card'
import { useLocale } from '@/src/context/LocaleContext'
import { getGeneralFaqSection } from '@/src/data/faq-locale'
import { useMemo } from 'react'

type GeneralFaqProps = {
  isFirst?: boolean
  titleDelay?: number
}

const GeneralFaq = ({ isFirst = true, titleDelay = 0 }: GeneralFaqProps) => {
  const { locale } = useLocale()
  const section = useMemo(() => getGeneralFaqSection(locale), [locale])

  return <FaqSectionCard section={section} isFirst={isFirst} titleDelay={titleDelay} />
}

export default GeneralFaq
