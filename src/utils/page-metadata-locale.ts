import { cookies } from 'next/headers'
import type { Metadata } from 'next'
import { getSiteMessage } from '@/src/messages/site'
import { defaultLocale, isAppLocale, localeStorageKey, type AppLocale } from '@/src/types/locale'
import { generateMetadata as buildBaseMetadata } from '@/src/utils/generateMetaData'

export const getLocaleFromCookie = async (): Promise<AppLocale> => {
  const jar = await cookies()
  const raw = jar.get(localeStorageKey)?.value ?? null
  return isAppLocale(raw) ? raw : defaultLocale
}

/** Merge localized title/description into the site metadata helper. */
export const buildLocalizedPageMetadata = async (
  titleKey: string,
  descriptionKey: string,
  canonicalPath?: string,
): Promise<Metadata> => {
  const locale = await getLocaleFromCookie()
  const m = getSiteMessage(locale)
  const title = m[titleKey] ?? titleKey
  const description = m[descriptionKey] ?? descriptionKey
  return {
    ...buildBaseMetadata(title, description, canonicalPath),
  }
}
