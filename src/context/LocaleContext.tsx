'use client'

import { localeStorageKey, defaultLocale, isAppLocale, type AppLocale } from '@/src/types/locale'
import {
  createContext,
  startTransition,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

interface LocaleContextValue {
  locale: AppLocale
  setLocale: (next: AppLocale) => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export const LocaleProvider = ({ children }: Readonly<{ children: ReactNode }>) => {
  const [locale, setLocaleState] = useState<AppLocale>(defaultLocale)

  useEffect(() => {
    const stored = window.localStorage.getItem(localeStorageKey)
    if (isAppLocale(stored)) {
      startTransition(() => {
        setLocaleState(stored)
      })
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale === 'en' ? 'en' : locale
  }, [locale])

  const setLocale = useCallback((next: AppLocale) => {
    setLocaleState(next)
    window.localStorage.setItem(localeStorageKey, next)
    document.documentElement.lang = next === 'en' ? 'en' : next
  }, [])

  const value = useMemo(() => ({ locale, setLocale }), [locale, setLocale])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export const useLocale = (): LocaleContextValue => {
  const ctx = useContext(LocaleContext)
  if (!ctx) {
    throw new Error('useLocale must be used within LocaleProvider')
  }
  return ctx
}
