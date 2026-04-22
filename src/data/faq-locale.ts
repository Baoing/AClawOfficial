import type { FaqSection } from '@/src/data/faq-data'
import {
  generalFaqSection,
  gettingStartedFaqSection,
  pricingAndBillingFaqSection,
  privacyAndSecurityFaqSection,
  servicesAndFeaturesFaqSection,
  shopifyCommonQuestionsFaqSection,
  technicalSupportFaqSection,
} from '@/src/data/faq-data'
import {
  generalFaqSection as generalFaqSectionZhCN,
  gettingStartedFaqSection as gettingStartedFaqSectionZhCN,
  pricingAndBillingFaqSection as pricingAndBillingFaqSectionZhCN,
  privacyAndSecurityFaqSection as privacyAndSecurityFaqSectionZhCN,
  servicesAndFeaturesFaqSection as servicesAndFeaturesFaqSectionZhCN,
  shopifyCommonQuestionsFaqSection as shopifyCommonQuestionsFaqSectionZhCN,
  technicalSupportFaqSection as technicalSupportFaqSectionZhCN,
} from '@/src/data/faq-data.zh-cn'
import {
  generalFaqSection as generalFaqSectionZhTW,
  gettingStartedFaqSection as gettingStartedFaqSectionZhTW,
  pricingAndBillingFaqSection as pricingAndBillingFaqSectionZhTW,
  privacyAndSecurityFaqSection as privacyAndSecurityFaqSectionZhTW,
  servicesAndFeaturesFaqSection as servicesAndFeaturesFaqSectionZhTW,
  shopifyCommonQuestionsFaqSection as shopifyCommonQuestionsFaqSectionZhTW,
  technicalSupportFaqSection as technicalSupportFaqSectionZhTW,
} from '@/src/data/faq-data.zh-tw'
import type { AppLocale } from '@/src/types/locale'

const pick = <T>(locale: AppLocale, en: T, zhCN: T, zhTW: T): T => {
  if (locale === 'zh-CN') return zhCN
  if (locale === 'zh-TW') return zhTW
  return en
}

export const getShopifyCommonFaqSection = (locale: AppLocale): FaqSection =>
  pick(locale, shopifyCommonQuestionsFaqSection, shopifyCommonQuestionsFaqSectionZhCN, shopifyCommonQuestionsFaqSectionZhTW)

export const getGeneralFaqSection = (locale: AppLocale): FaqSection =>
  pick(locale, generalFaqSection, generalFaqSectionZhCN, generalFaqSectionZhTW)

export const getServicesAndFeaturesFaqSection = (locale: AppLocale): FaqSection =>
  pick(locale, servicesAndFeaturesFaqSection, servicesAndFeaturesFaqSectionZhCN, servicesAndFeaturesFaqSectionZhTW)

export const getPricingAndBillingFaqSection = (locale: AppLocale): FaqSection =>
  pick(locale, pricingAndBillingFaqSection, pricingAndBillingFaqSectionZhCN, pricingAndBillingFaqSectionZhTW)

export const getPrivacyAndSecurityFaqSection = (locale: AppLocale): FaqSection =>
  pick(locale, privacyAndSecurityFaqSection, privacyAndSecurityFaqSectionZhCN, privacyAndSecurityFaqSectionZhTW)

export const getTechnicalSupportFaqSection = (locale: AppLocale): FaqSection =>
  pick(locale, technicalSupportFaqSection, technicalSupportFaqSectionZhCN, technicalSupportFaqSectionZhTW)

export const getGettingStartedFaqSection = (locale: AppLocale): FaqSection =>
  pick(locale, gettingStartedFaqSection, gettingStartedFaqSectionZhCN, gettingStartedFaqSectionZhTW)
