import Link from 'next/link'
import { cn } from '@/lib/cn'

type BrandLockupProps = {
  className?: string
  compact?: boolean
  tone?: 'light' | 'dark'
}

export function BrandLockup({ className, compact = false, tone = 'light' }: BrandLockupProps) {
  const isDark = tone === 'dark'

  return (
    <Link aria-label="Galanta Medical — página inicial" className={cn('group inline-flex items-center gap-3', className)} href="/">
      <span aria-hidden="true" className={cn('relative grid place-items-center rounded-lg border border-cyan/45 bg-graphite', compact ? 'size-9' : 'size-11')}>
        <span className={cn('rotate-45 border border-aqua', compact ? 'size-3' : 'size-4')} />
      </span>
      <span className="leading-none">
        <span className={cn('block font-display font-semibold tracking-[-0.03em]', compact ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl', isDark ? 'text-sterile' : 'text-slate')}>Galanta Medical</span>
        <span className={cn('mt-1 block font-technical text-[9px] font-medium uppercase tracking-[0.16em]', isDark ? 'text-aqua' : 'text-steel')}>Galanta Ortho</span>
      </span>
    </Link>
  )
}
