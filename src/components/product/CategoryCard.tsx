import { Card } from '@/components/ui/Card'

type CategoryCardProps = { index: number; title: string; description: string }

export function CategoryCard({ index, title, description }: CategoryCardProps) {
  return (
    <Card className="group min-h-56 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(14,25,48,0.1)]">
      <span className="text-xs font-bold tracking-[0.14em] text-gold-dark">0{index}</span>
      <h3 className="mt-16 font-display text-3xl font-semibold text-navy">{title}</h3>
      <p className="mt-2 text-sm text-muted">{description}</p>
    </Card>
  )
}
