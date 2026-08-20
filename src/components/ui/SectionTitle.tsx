import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type SectionTitleProps = {
  align?: 'left' | 'center'
  className?: string
  description?: string
  eyebrow?: string
  title: ReactNode
  tone?: 'light' | 'dark'
}

export function SectionTitle({ align = 'left', className, description, eyebrow, title, tone = 'light' }: SectionTitleProps) {
  const centered = align === 'center'
  const isDark = tone === 'dark'

  return (
    <div className={cn(centered && 'mx-auto text-center', className)}>
      {eyebrow && <p className={cn('font-technical text-xs font-semibold uppercase tracking-[0.14em]', isDark ? 'text-aqua' : 'text-cyan')}>{eyebrow}</p>}
      <h2 className={cn('mt-3 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-[-0.035em] sm:text-5xl', centered && 'mx-auto', isDark ? 'text-sterile' : 'text-slate')}>{title}</h2>
      {description && <p className={cn('mt-4 max-w-2xl text-sm leading-6 sm:text-base sm:leading-7', centered && 'mx-auto', isDark ? 'text-mist/75' : 'text-steel')}>{description}</p>}
    </div>
  )
}
