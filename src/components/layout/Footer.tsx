import { Container } from '@/components/ui/Container'
import { siteConfig } from '@/lib/site'

const links = [
  { label: 'Trocas e devoluções', href: '/politica-de-troca' },
  { label: 'Privacidade', href: '/politica-de-privacidade' },
  { label: 'Termos de uso', href: '/termos-de-uso' },
]

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr] md:py-16">
        <div>
          <p className="font-display text-3xl font-semibold tracking-[0.08em]">{siteConfig.name.toUpperCase()}</p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-cream/70">Marca e produto ainda em definição. Uma experiência preparada para presentes com significado.</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">Atendimento</p>
          <p className="mt-4 text-sm text-cream/70">{siteConfig.supportWhatsApp || siteConfig.supportEmail ? [siteConfig.supportWhatsApp, siteConfig.supportEmail].filter(Boolean).join(' · ') : 'WhatsApp e e-mail: a definir'}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">Informações</p>
          <ul className="mt-4 space-y-3 text-sm text-cream/70">
            {links.map((link) => <li key={link.href}><a className="hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold" href={link.href}>{link.label}</a></li>)}
          </ul>
        </div>
      </Container>
      <div className="border-t border-cream/15 py-5 text-center text-xs text-cream/50">© {new Date().getFullYear()} {siteConfig.name}. Conteúdo provisório para desenvolvimento.</div>
    </footer>
  )
}
