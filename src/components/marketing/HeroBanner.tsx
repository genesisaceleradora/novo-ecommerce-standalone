import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

type HeroBannerProps = {
  eyebrow: string
  title: string
  description: string
  primaryAction: { label: string; href: string }
  secondaryAction?: { label: string; href: string }
}

export function HeroBanner({ eyebrow, title, description, primaryAction, secondaryAction }: HeroBannerProps) {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-20 text-cream md:py-28">
      <div aria-hidden="true" className="absolute -right-24 top-8 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-rose/25 blur-3xl" />
      <Container className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[0.95] sm:text-6xl md:text-7xl">{title}</h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-cream/75 md:text-lg">{description}</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href={primaryAction.href}>{primaryAction.label}</Button>
          {secondaryAction && <Button href={secondaryAction.href} variant="secondary">{secondaryAction.label}</Button>}
        </div>
      </Container>
    </section>
  )
}
