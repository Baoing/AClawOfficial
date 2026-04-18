import type { ReactNode } from 'react'
import { cn } from '@/src/utils/cn'

interface LegalDocumentLayoutProps {
  title: string
  effectiveDateDisplay: string
  effectiveDateIso: string
  children: ReactNode
}

const LegalDocumentLayout = ({
  title,
  effectiveDateDisplay,
  effectiveDateIso,
  children,
}: LegalDocumentLayoutProps) => {
  return (
    <article className="py-24 xl:py-32 2xl:py-40">
      <div className="main-container max-w-[720px]">
        <header className="mb-12 space-y-4">
          <h1 className="font-sora text-sora-heading-4 font-normal text-white/90 md:text-sora-heading-3">
            {title}
          </h1>
          <p className="text-tagline-2 text-white/50">
            Effective date:{' '}
            <time dateTime={effectiveDateIso} className="text-white/70">
              {effectiveDateDisplay}
            </time>
          </p>
        </header>
        <div
          className={cn(
            'legal-document space-y-10 text-tagline-2 font-normal text-white/65',
            '[&_section]:space-y-4 [&_h2]:font-sora [&_h2]:text-sora-heading-6 [&_h2]:font-normal [&_h2]:text-white/90',
            '[&_p]:leading-relaxed [&_strong]:font-semibold [&_strong]:text-white/85',
            '[&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5',
            '[&_a]:text-white/80 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-white'
          )}
        >
          {children}
        </div>
      </div>
    </article>
  )
}

export default LegalDocumentLayout
