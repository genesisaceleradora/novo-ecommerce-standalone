import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type SectionTitleProps = {
  eyebrow?: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionTitle({ eyebrow, title, description, align = 'left', className }: SectionTitleProps) {
  const centered = align === 'center'

  return (
    <div className={cn(centered && 'mx-auto text-center', className)}>
      {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">{eyebrow}</p>}
      <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.02] text-navy sm:text-5xl">{title}</h2>
      {description && <p className={cn('mt-4 max-w-2xl text-sm leading-6 text-muted sm:text-base', centered && 'mx-auto')}>{description}</p>}
    </div>
  )
}
