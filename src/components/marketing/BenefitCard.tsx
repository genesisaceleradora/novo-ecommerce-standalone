import { Card } from '@/components/ui/Card'

type BenefitCardProps = {
  index: number
  title: string
  description: string
}

export function BenefitCard({ index, title, description }: BenefitCardProps) {
  return (
    <Card className="p-6">
      <p className="text-xs font-bold tracking-[0.14em] text-gold-dark">0{index}</p>
      <h3 className="mt-12 font-display text-3xl font-semibold text-navy">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
    </Card>
  )
}
