import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn('inline-flex rounded-full bg-cream px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-gold-dark ring-1 ring-inset ring-gold/40', className)}
      {...props}
    />
  )
}
