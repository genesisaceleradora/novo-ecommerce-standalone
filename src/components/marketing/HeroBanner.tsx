import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

type HeroBannerProps = {
  description: string
  eyebrow: string
  primaryAction: { label: string; href: string }
  secondaryAction?: { label: string; href: string }
  title: string
}

export function HeroBanner({ description, eyebrow, primaryAction, secondaryAction, title }: HeroBannerProps) {
  return (
    <section className="relative isolate overflow-hidden bg-galanta-black py-20 text-sterile md:py-28 lg:py-32">
      <div aria-hidden="true" className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgb(216_225_232_/_0.09)_1px,transparent_1px),linear-gradient(90deg,rgb(216_225_232_/_0.09)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <div aria-hidden="true" className="absolute -right-24 top-12 size-72 rounded-full border border-cyan/20" />
      <div aria-hidden="true" className="absolute -right-2 top-36 size-40 rounded-full border border-aqua/15" />
      <Container className="relative">
        <Badge variant="technical">{eyebrow}</Badge>
        <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-sterile sm:text-6xl md:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-mist/75 md:text-lg md:leading-8">{description}</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href={primaryAction.href}>{primaryAction.label}</Button>
          {secondaryAction && <Button href={secondaryAction.href} variant="secondary">{secondaryAction.label}</Button>}
        </div>
      </Container>
    </section>
  )
}
