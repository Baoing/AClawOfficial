'use client'

import { useLocale } from '@/src/context/LocaleContext'
import { getSiteMessage } from '@/src/messages/site'
import { useCallback, useMemo } from 'react'

/**
 * Returns a translator for the current locale (falls back to English, then to the key).
 */
export const useSiteT = () => {
  const { locale } = useLocale()
  const table = useMemo(() => getSiteMessage(locale), [locale])
  return useCallback((key: string) => table[key] ?? getSiteMessage('en')[key] ?? key, [table])
}
