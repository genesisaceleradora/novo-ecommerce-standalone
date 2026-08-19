import { Container } from '@/components/ui/Container'

const links = ['Políticas', 'Trocas e devoluções', 'Privacidade']

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr] md:py-16">
        <div>
          <p className="font-display text-3xl font-semibold tracking-[0.08em]">A DEFINIR</p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-cream/70">Marca e produto ainda em definição. Uma experiência preparada para presentes com significado.</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">Atendimento</p>
          <p className="mt-4 text-sm text-cream/70">WhatsApp e e-mail: a definir</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">Informações</p>
          <ul className="mt-4 space-y-3 text-sm text-cream/70">
            {links.map((link) => <li key={link}><a href="#politicas">{link}</a></li>)}
          </ul>
        </div>
      </Container>
      <div className="border-t border-cream/15 py-5 text-center text-xs text-cream/50">© {new Date().getFullYear()} Marca a definir. Conteúdo provisório para desenvolvimento.</div>
    </footer>
  )
}
