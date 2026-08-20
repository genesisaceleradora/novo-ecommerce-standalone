import Link from 'next/link'
import { BrandLockup } from '@/components/brand/BrandLockup'
import { Container } from '@/components/ui/Container'
import { footerNavigation } from '@/data/navigation'
import { siteConfig } from '@/lib/site'

export function Footer() {
  return (
    <footer className="border-t border-mist/10 bg-galanta-black text-sterile">
      <Container className="grid gap-10 py-14 md:grid-cols-2 xl:grid-cols-[1.35fr_repeat(4,0.7fr)] xl:py-20">
        <div>
          <BrandLockup tone="dark" />
          <p className="mt-5 max-w-sm text-sm leading-6 text-mist/70">Tecnologia, engenharia e manufatura digital aplicada à rotina clínica. Portal profissional em desenvolvimento.</p>
          <p className="mt-4 max-w-sm font-technical text-[9px] uppercase leading-5 tracking-[0.1em] text-mist/45">Não envie dados, documentos ou imagens identificáveis de pacientes.</p>
        </div>

        {footerNavigation.map((group) => (
          <div key={group.title}>
            <p className="font-technical text-[10px] font-semibold uppercase tracking-[0.14em] text-aqua">{group.title}</p>
            <ul className="mt-5 space-y-3 text-sm text-mist/70">
              {group.items.map((item) => <li key={item.href}><Link className="hover:text-aqua" href={item.href}>{item.label}</Link></li>)}
            </ul>
          </div>
        ))}
      </Container>

      <div className="border-t border-mist/10">
        <Container className="flex flex-col gap-2 py-5 text-xs leading-5 text-mist/55 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {siteConfig.name}.</span>
          <span>Conteúdo sujeito à aprovação técnica, regulatória e comercial.</span>
        </Container>
      </div>
    </footer>
  )
}
