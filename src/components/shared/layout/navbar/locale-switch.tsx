'use client'

import { useLocale } from '@/src/context/LocaleContext'
import { LanguageGlobeIcon } from '@/src/components/shared/icon'
import type { AppLocale } from '@/src/types/locale'
import { cn } from '@/src/utils/cn'
import { useCallback, useEffect, useId, useRef, useState } from 'react'

const localeOptions: ReadonlyArray<{ id: AppLocale; label: string; short: string }> = [
  { id: 'en', label: 'English', short: 'English' },
  { id: 'zh-CN', label: '简体中文', short: '简体中文' },
  { id: 'zh-TW', label: '繁體中文', short: '繁體中文' },
]

interface LocaleSwitchProps {
  variant?: 'desktop' | 'mobile'
  /** Extra classes for the trigger button (desktop / mobile) */
  triggerClassName?: string
}

const LocaleSwitch = ({ variant = 'desktop', triggerClassName }: LocaleSwitchProps) => {
  const { locale, setLocale } = useLocale()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const listId = useId()

  const current = localeOptions.find((o) => o.id === locale) ?? localeOptions[0]

  const handleSelect = useCallback(
    (next: AppLocale) => {
      setLocale(next)
      setOpen(false)
    },
    [setLocale]
  )

  useEffect(() => {
    if (!open) return
    const handlePointerDown = (event: MouseEvent) => {
      const root = rootRef.current
      if (!root?.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  return (
    <div ref={rootRef} className={cn('relative', variant === 'mobile' && 'w-full')}>
      <button
        type="button"
        className={cn(
          'cursor-pointer font-ibm-plex-mono text-tagline-3 flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2.5 py-1.5 font-normal text-white/70 transition-colors hover:text-white/90',
          variant === 'mobile' && 'w-full justify-between px-3 py-2',
          triggerClassName
        )}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-label="Language"
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            setOpen((v) => !v)
          }
        }}
      >
        <LanguageGlobeIcon className="text-white/55" />
        <span className={cn('text-white/70', variant === 'desktop' && 'min-w-[1.5rem] text-center')}>
          {variant === 'mobile' ? current.label : current.short}
        </span>
        {variant === 'mobile' ? null : (
          <span className="text-white/40" aria-hidden>
            ▾
          </span>
        )}
      </button>
      {open ? (
        <ul
          id={listId}
          role="listbox"
          aria-label="Language"
          className={cn(
            'border-stroke-3/25 absolute top-full right-0 z-50 mt-1 min-w-[140px] rounded-xl border bg-background-13/95 py-1 shadow-lg backdrop-blur-md cursor-pointer',
            variant === 'mobile' && 'right-auto left-0 w-full'
          )}
        >
          {localeOptions.map((opt) => {
            const selected = opt.id === locale
            return (
              <li key={opt.id} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  className={cn(
                    'hover:bg-white/10 hover:text-white/95 cursor-pointer font-inter-tight text-tagline-3 block w-full px-3 py-2 text-left font-normal text-white/75 transition-colors',
                    selected && 'bg-white/10 text-white/95'
                  )}
                  onClick={() => handleSelect(opt.id)}
                >
                  {opt.label}
                </button>
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}

export default LocaleSwitch
