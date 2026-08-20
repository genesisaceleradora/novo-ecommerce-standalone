import Link from 'next/link'
import { Card } from '@/components/ui/Card'

type CategoryCardProps = { description: string; href: string; index: number; title: string }

export function CategoryCard({ description, href, index, title }: CategoryCardProps) {
  return (
    <Link aria-label={`Consultar ${title}`} className="group block rounded-2xl" href={href}>
      <Card className="relative min-h-60 overflow-hidden p-6 transition duration-300 group-hover:-translate-y-1 group-hover:border-cyan/45 group-hover:shadow-surface motion-reduce:transform-none" variant="technical">
        <div aria-hidden="true" className="absolute right-0 top-0 size-24 border-b border-l border-mist/70 bg-[linear-gradient(135deg,transparent_49%,rgb(216_225_232_/_0.45)_50%,transparent_51%)]" />
        <span className="font-technical text-[11px] font-semibold tracking-[0.12em] text-cyan">{String(index).padStart(2, '0')}</span>
        <h3 className="mt-16 font-display text-2xl font-semibold tracking-[-0.03em] text-slate sm:text-3xl">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-steel">{description}</p>
        <span className="mt-5 inline-block font-technical text-[10px] font-semibold uppercase tracking-[0.12em] text-cyan">Consultar conteúdo →</span>
      </Card>
    </Link>
  )
}
