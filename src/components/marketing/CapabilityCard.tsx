import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

type CapabilityCardProps = {
  description: string
  href?: string
  index?: number
  label?: string
  title: string
}

export function CapabilityCard({ description, href, index, label = 'Capacidade', title }: CapabilityCardProps) {
  const indexLabel = index === undefined ? null : String(index).padStart(2, '0')

  return (
    <Card className="relative overflow-hidden p-6 sm:p-7" variant="technical">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan via-aqua to-transparent" />
      <p className="font-technical text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan">{indexLabel ? `${indexLabel} · ${label}` : label}</p>
      <h3 className="mt-10 font-display text-2xl font-semibold tracking-[-0.025em] text-slate sm:text-3xl">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-steel">{description}</p>
      {href && <Button className="mt-6" href={href} variant="ghost">Saiba mais →</Button>}
    </Card>
  )
}
