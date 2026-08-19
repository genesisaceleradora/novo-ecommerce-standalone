import Link from 'next/link'
import { Card } from '@/components/ui/Card'

type CategoryCardProps = { index: number; title: string; description: string; href: string }

export function CategoryCard({ index, title, description, href }: CategoryCardProps) {
  return (
    <Link aria-label={`Ver categoria ${title}`} className="block rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold" href={href}>
      <Card className="group min-h-56 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(14,25,48,0.1)]">
        <span className="text-xs font-bold tracking-[0.14em] text-gold-dark">0{index}</span>
        <h3 className="mt-16 font-display text-3xl font-semibold text-navy">{title}</h3>
        <p className="mt-2 text-sm text-muted">{description}</p>
        <span className="mt-5 inline-block text-xs font-bold uppercase tracking-[0.12em] text-gold-dark">Ver coleção →</span>
      </Card>
    </Link>
  )
}
