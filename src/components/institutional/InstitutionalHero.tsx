import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

type InstitutionalHeroProps = {
  description: string
  eyebrow: string
  notice?: string
  primaryAction?: { href: string; label: string }
  secondaryAction?: { href: string; label: string }
  title: string
}

export function InstitutionalHero({ description, eyebrow, notice, primaryAction, secondaryAction, title }: InstitutionalHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-mist/10 bg-galanta-black py-16 text-sterile md:py-24">
      <div aria-hidden="true" className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgb(216_225_232_/_0.08)_1px,transparent_1px),linear-gradient(90deg,rgb(216_225_232_/_0.08)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:linear-gradient(to_right,black,transparent_88%)]" />
      <div aria-hidden="true" className="absolute -right-20 top-1/2 size-64 -translate-y-1/2 rounded-full border border-cyan/20" />
      <Container className="relative">
        <Badge variant="technical">{eyebrow}</Badge>
        <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.06] tracking-[-0.05em] sm:text-5xl md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-mist/75 md:text-lg">{description}</p>
        {(primaryAction || secondaryAction) && <div className="mt-8 flex flex-col gap-3 sm:flex-row">{primaryAction && <Button href={primaryAction.href}>{primaryAction.label}</Button>}{secondaryAction && <Button href={secondaryAction.href} variant="secondary">{secondaryAction.label}</Button>}</div>}
        {notice && <p className="mt-8 max-w-2xl border-l border-alert/70 pl-4 font-technical text-[10px] uppercase leading-5 tracking-[0.1em] text-mist/65">{notice}</p>}
      </Container>
    </section>
  )
}
