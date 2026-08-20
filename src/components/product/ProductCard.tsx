import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

type ProductCardProps = {
  badge?: string
  description: string
  href?: string
  name: string
  price?: number
  priceLabel?: string
}

function formatPrice(valueInCents: number) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valueInCents / 100)
}

export function ProductCard({ badge, description, href = '#produto', name, price, priceLabel = 'Condição demonstrativa' }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden border-b border-mist bg-graphite p-5">
        <div aria-hidden="true" className="absolute inset-0 [background-image:linear-gradient(rgb(216_225_232_/_0.08)_1px,transparent_1px),linear-gradient(90deg,rgb(216_225_232_/_0.08)_1px,transparent_1px)] [background-size:32px_32px]" />
        <div aria-hidden="true" className="absolute right-[15%] top-[18%] size-28 rotate-12 rounded-[2rem] border border-cyan/35" />
        {badge && <Badge className="relative" variant="technical">{badge}</Badge>}
        <p className="absolute bottom-5 left-5 font-technical text-[10px] uppercase tracking-[0.12em] text-mist/60">Área visual reservada · placeholder</p>
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-slate">{name}</h3>
        <p className="mt-2 min-h-12 text-sm leading-6 text-steel">{description}</p>
        <div className="mt-5 flex flex-col gap-4 border-t border-mist pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-technical text-[10px] font-semibold uppercase tracking-[0.1em] text-steel">{price === undefined ? priceLabel : `${formatPrice(price)} · mock legado`}</span>
          <Button className="min-h-11 px-4 text-xs" href={href}>Consultar detalhes</Button>
        </div>
      </div>
    </Card>
  )
}
