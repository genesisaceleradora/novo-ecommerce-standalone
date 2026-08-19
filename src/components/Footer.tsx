import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.4fr_1fr_1fr] md:px-8 md:py-16">
        <div>
          <p className="font-display text-3xl font-semibold tracking-[0.08em]">A DEFINIR</p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-cream/70">
            Marca e produto ainda em definição. Este é um ecommerce standalone preparado para presentes com significado.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">Atendimento</p>
          <p className="mt-4 text-sm text-cream/70">WhatsApp e e-mail: a definir</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">Informações</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-cream/70">
            <Link href="#politicas">Políticas</Link>
            <Link href="#trocas">Trocas e devoluções</Link>
            <Link href="#privacidade">Privacidade</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/15 px-5 py-5 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Marca a definir. Conteúdo provisório para desenvolvimento.
      </div>
    </footer>
  )
}
