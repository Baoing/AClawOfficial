import type { AppLocale } from '@/src/types/locale'
import { siteEn } from '@/src/messages/site/en'
import { siteZhCNPatch } from '@/src/messages/site/zh-CN'
import { siteZhTWPatch } from '@/src/messages/site/zh-TW'

export type SiteMessageKey = keyof typeof siteEn

const enFlat = siteEn as Record<string, string>

export const getSiteMessage = (locale: AppLocale): Record<string, string> => {
  if (locale === 'zh-CN') {
    return { ...enFlat, ...siteZhCNPatch }
  }
  if (locale === 'zh-TW') {
    return { ...enFlat, ...siteZhTWPatch }
  }
  return enFlat
}
