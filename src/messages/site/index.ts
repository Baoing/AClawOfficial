import type { AppLocale } from '@/src/types/locale'
import { siteEn } from '@/src/messages/site/en'
import { siteZhCN } from '@/src/messages/site/zh-CN'
import { siteZhTW } from '@/src/messages/site/zh-TW'

export type SiteMessageKey = keyof typeof siteEn

const tables: Record<AppLocale, Record<string, string>> = {
  en: siteEn,
  'zh-CN': siteZhCN,
  'zh-TW': siteZhTW,
}

export const getSiteMessage = (locale: AppLocale): Record<string, string> => tables[locale]
