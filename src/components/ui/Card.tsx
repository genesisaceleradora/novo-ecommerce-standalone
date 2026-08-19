import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('rounded-2xl border border-line bg-cream shadow-[0_10px_30px_rgba(14,25,48,0.06)]', className)} {...props} />
}
