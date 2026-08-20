import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

type InstitutionalCtaProps = {
  description: string
  eyebrow?: string
  primaryAction: { href: string; label: string }
  secondaryAction?: { href: string; label: string }
  title: string
}

export function InstitutionalCta({ description, eyebrow = 'Contato profissional', primaryAction, secondaryAction, title }: InstitutionalCtaProps) {
  return (
    <Container className="pb-16 md:pb-24">
      <div className="relative overflow-hidden rounded-2xl border border-cyan/25 bg-galanta-black px-6 py-12 text-center text-sterile sm:px-12 md:py-16">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-aqua to-transparent" />
        <p className="font-technical text-[11px] font-semibold uppercase tracking-[0.14em] text-aqua">{eyebrow}</p>
        <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-mist/70">{description}</p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"><Button href={primaryAction.href}>{primaryAction.label}</Button>{secondaryAction && <Button href={secondaryAction.href} variant="secondary">{secondaryAction.label}</Button>}</div>
      </div>
    </Container>
  )
}
