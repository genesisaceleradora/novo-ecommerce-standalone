import Link from 'next/link'

const navigation = [
  { href: '#colecoes', label: 'Coleções' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#sobre', label: 'Sobre' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line/80 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 md:px-8">
        <button aria-label="Abrir menu" className="rounded-full p-2 text-ink md:hidden" type="button">
          <span aria-hidden="true" className="block h-px w-5 bg-current" />
          <span aria-hidden="true" className="mt-1 block h-px w-5 bg-current" />
        </button>

        <Link className="font-display text-2xl font-semibold tracking-[0.08em] text-navy" href="/">
          A DEFINIR
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navigation.map((item) => (
            <Link className="hover:text-gold-dark" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link aria-label="Ver carrinho" className="flex items-center gap-2 text-sm font-semibold hover:text-gold-dark" href="#carrinho">
          <span aria-hidden="true" className="grid h-8 w-8 place-items-center rounded-full border border-navy/20">◌</span>
          <span className="hidden sm:inline">Carrinho</span>
        </Link>
      </div>
    </header>
  )
}
