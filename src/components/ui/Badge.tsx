import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

export type BadgeVariant = 'standard' | 'personal' | 'technical' | 'pending' | 'validation' | 'success'

type BadgeProps = HTMLAttributes<HTMLSpanElement> & { variant?: BadgeVariant }

const variants: Record<BadgeVariant, string> = {
  standard: 'border-cyan/45 bg-cyan/10 text-cyan',
  personal: 'border-aqua/45 bg-aqua/10 text-aqua',
  technical: 'border-mist/30 bg-mist/10 text-mist',
  pending: 'border-alert/50 bg-alert/10 text-alert',
  validation: 'border-steel/45 bg-steel/10 text-steel',
  success: 'border-signal/45 bg-signal/10 text-signal',
}

export function Badge({ className, variant = 'validation', ...props }: BadgeProps) {
  return (
    <span
      className={cn('inline-flex items-center rounded-full border px-3 py-1 font-technical text-[10px] font-semibold uppercase leading-none tracking-[0.12em]', variants[variant], className)}
      {...props}
    />
  )
}
