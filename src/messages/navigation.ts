import type { MobileMenuData } from "@/src/interface"
import type { AppLocale } from "@/src/types/locale"

export interface NavBarLabels {
  company: string
  platform: string
  resources: string
  support: string
  /** Primary nav CTA — contact / establish a relationship */
  contactCta: string
}

const navBarLabels: Record<AppLocale, NavBarLabels> = {
  en: {
    company: "Company",
    platform: "Platform",
    resources: "Resources",
    support: "Support",
    contactCta: "Book demo",
  },
  "zh-CN": {
    company: "公司",
    platform: "平台",
    resources: "资源",
    support: "支持",
    contactCta: "立即联系",
  },
  "zh-TW": {
    company: "公司",
    platform: "平台",
    resources: "資源",
    support: "支援",
    contactCta: "立即聯繫",
  },
}

const mobileGroupTitles: Record<Exclude<AppLocale, "en">, Record<string, string>> = {
  "zh-CN": {
    company: "公司",
    collaborate: "合作",
    resources: "资源",
    "people-culture": "人员与文化",
  },
  "zh-TW": {
    company: "公司",
    collaborate: "合作",
    resources: "資源",
    "people-culture": "人員與文化",
  },
}

const mobileSubLabels: Record<Exclude<AppLocale, "en">, Record<string, string>> = {
  "zh-CN": {
    "about-us": "关于我们",
    "why-us": "为何选择我们",
    manifesto: "我们的主张",
    customers: "客户",
    testimonials: "客户评价",
    services: "我们的服务",
    blog: "博客与动态",
    affiliate: "联盟推广",
    referral: "推荐计划",
    login: "登录",
    "create-account": "创建账户",
    download: "下载",
    integration: "集成",
    documentation: "文档",
    tutorials: "教程",
    faq: "常见问题",
    "case-studies": "案例研究",
    whitepapers: "白皮书",
    support: "支持",
    "use-cases": "使用场景",
    "success-stories": "成功故事",
    analytics: "分析",
    changelog: "更新日志",
    glossary: "术语表",
    security: "安全",
    gdpr: "GDPR 合规",
    privacy: "隐私政策",
    terms: "条款与条件",
    refund: "退款政策",
    "affiliate-policy": "联盟政策",
    legal: "法律",
    press: "媒体报道",
    process: "流程",
    team: "团队",
    career: "招聘",
    testimonial: "客户评价",
    customer: "客户",
    contact: "联系我们",
    pricing: "定价",
  },
  "zh-TW": {
    "about-us": "關於我們",
    "why-us": "為何選擇我們",
    manifesto: "我們的主張",
    customers: "客戶",
    testimonials: "客戶評價",
    services: "我們的服務",
    blog: "部落格與動態",
    affiliate: "聯盟推廣",
    referral: "推薦計畫",
    login: "登入",
    "create-account": "建立帳戶",
    download: "下載",
    integration: "整合",
    documentation: "文件",
    tutorials: "教學",
    faq: "常見問題",
    "case-studies": "案例研究",
    whitepapers: "白皮書",
    support: "支援",
    "use-cases": "使用情境",
    "success-stories": "成功故事",
    analytics: "分析",
    changelog: "更新日誌",
    glossary: "術語表",
    security: "安全",
    gdpr: "GDPR 合規",
    privacy: "隱私權政策",
    terms: "條款與條件",
    refund: "退款政策",
    "affiliate-policy": "聯盟政策",
    legal: "法律",
    press: "媒體報導",
    process: "流程",
    team: "團隊",
    career: "徵才",
    testimonial: "客戶評價",
    customer: "客戶",
    contact: "聯絡我們",
    pricing: "定價",
  },
}

export const getNavBarLabels = (locale: AppLocale): NavBarLabels => navBarLabels[locale]

export const translateMobileMenu = (data: MobileMenuData[], locale: AppLocale): MobileMenuData[] => {
  if (locale === "en") {
    return data
  }
  const groups = mobileGroupTitles[locale]
  const items = mobileSubLabels[locale]
  return data.map((group) => ({
    ...group,
    title: groups[group.id] ?? group.title,
    submenu: group.submenu.map((sub) => ({
      ...sub,
      label: items[sub.id] ?? sub.label,
    })),
  }))
}
