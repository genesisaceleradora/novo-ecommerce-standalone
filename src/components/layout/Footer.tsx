import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { siteConfig } from '@/lib/site'

const institutionalLinks = [
  { label: 'Sobre', href: '/sobre' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contato', href: '/contato' },
] as const

const policyLinks = [
  { label: 'Privacidade', href: '/politica-de-privacidade' },
  { label: 'Termos de uso', href: '/termos-de-uso' },
  { label: 'Política de troca', href: '/politica-de-troca' },
] as const

export function Footer() {
  return (
    <footer className="border-t border-mist/10 bg-galanta-black text-sterile">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_0.8fr_0.8fr] md:py-20">
        <div>
          <p className="font-display text-2xl font-semibold tracking-[-0.035em]">Galanta Medical</p>
          <p className="mt-2 font-technical text-[10px] uppercase tracking-[0.15em] text-aqua">{siteConfig.initialLine}</p>
          <p className="mt-5 max-w-md text-sm leading-6 text-mist/70">Tecnologia, engenharia e manufatura digital aplicada à saúde. Portal profissional em desenvolvimento para apresentação e avaliação técnica.</p>
        </div>

        <div>
          <p className="font-technical text-[10px] font-semibold uppercase tracking-[0.14em] text-aqua">Institucional</p>
          <ul className="mt-5 space-y-3 text-sm text-mist/70">
            {institutionalLinks.map((link) => <li key={link.href}><Link className="hover:text-aqua" href={link.href}>{link.label}</Link></li>)}
          </ul>
        </div>

        <div>
          <p className="font-technical text-[10px] font-semibold uppercase tracking-[0.14em] text-aqua">Informações</p>
          <ul className="mt-5 space-y-3 text-sm text-mist/70">
            {policyLinks.map((link) => <li key={link.href}><Link className="hover:text-aqua" href={link.href}>{link.label}</Link></li>)}
          </ul>
        </div>
      </Container>

      <div className="border-t border-mist/10">
        <Container className="flex flex-col gap-2 py-5 text-xs leading-5 text-mist/55 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {siteConfig.name}.</span>
          <span>Conteúdo sujeito à aprovação técnica e regulatória.</span>
        </Container>
      </div>
    </footer>
  )
}
