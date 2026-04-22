export type AppLocale = "en" | "zh-CN" | "zh-TW"

export const defaultLocale: AppLocale = "en"

export const localeStorageKey = "aclaw-locale"

export const isAppLocale = (value: string | null): value is AppLocale =>
  value === "en" || value === "zh-CN" || value === "zh-TW"
