'use client'

import FaqSectionCard from '@/src/components/shared/ui/card/faq-section-card'
import { getShopifyCommonFaqSection } from '@/src/data/faq-locale'
import { useLocale } from '@/src/context/LocaleContext'
import { useMemo } from 'react'

type ShopifyCommonFaqProps = {
  isFirst?: boolean
  titleDelay?: number
}

const ShopifyCommonFaq = ({ isFirst = true, titleDelay = 0 }: ShopifyCommonFaqProps) => {
  const { locale } = useLocale()
  const section = useMemo(() => getShopifyCommonFaqSection(locale), [locale])

  return <FaqSectionCard section={section} isFirst={isFirst} titleDelay={titleDelay} />
}

export default ShopifyCommonFaq
