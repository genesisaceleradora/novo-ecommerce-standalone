import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

type ProductCardProps = {
  name: string
  description: string
  priceLabel: string
  badge?: string
}

export function ProductCard({ name, description, priceLabel, badge }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden">
      <div className="relative aspect-[4/5] bg-[radial-gradient(circle_at_70%_30%,rgba(214,179,106,0.55),transparent_28%),linear-gradient(135deg,#e8dfd2,#c3b5a2)] p-4">
        {badge && <Badge>{badge}</Badge>}
        <p className="absolute bottom-5 left-5 font-display text-2xl italic text-navy/70">Imagem a definir</p>
      </div>
      <div className="p-5">
        <h3 className="font-display text-2xl font-semibold text-navy">{name}</h3>
        <p className="mt-2 min-h-12 text-sm leading-6 text-muted">{description}</p>
        <div className="mt-5 flex items-center justify-between gap-4">
          <span className="text-sm font-bold text-navy">{priceLabel}</span>
          <Button className="min-h-10 px-4 text-xs" href="#produto">Ver detalhes</Button>
        </div>
      </div>
    </Card>
  )
}
