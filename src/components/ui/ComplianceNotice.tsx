import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type ComplianceTone = 'information' | 'validation' | 'warning' | 'restricted'

type ComplianceNoticeProps = Omit<HTMLAttributes<HTMLDivElement>, 'title'> & {
  children: ReactNode
  surface?: 'light' | 'dark'
  title: string
  tone?: ComplianceTone
}

const tones: Record<ComplianceTone, { icon: string; styles: string }> = {
  information: { icon: 'i', styles: 'border-cyan/35 bg-cyan/5' },
  validation: { icon: '…', styles: 'border-steel/40 bg-steel/5' },
  warning: { icon: '!', styles: 'border-alert/55 bg-alert/10' },
  restricted: { icon: '×', styles: 'border-clinicalRed/45 bg-clinicalRed/10' },
}

export function ComplianceNotice({ children, className, surface = 'light', title, tone = 'information', ...props }: ComplianceNoticeProps) {
  const treatment = tones[tone]

  return (
    <div className={cn('grid grid-cols-[2rem_1fr] gap-3 rounded-xl border p-4 sm:p-5', treatment.styles, surface === 'dark' ? 'text-sterile' : 'text-slate', className)} role="note" {...props}>
      <span aria-hidden="true" className="grid size-8 place-items-center rounded-full border border-current/30 font-technical text-sm font-semibold">{treatment.icon}</span>
      <div>
        <p className="font-technical text-[11px] font-semibold uppercase tracking-[0.12em]">{title}</p>
        <div className="mt-1 text-sm leading-6 opacity-75">{children}</div>
      </div>
    </div>
  )
}
