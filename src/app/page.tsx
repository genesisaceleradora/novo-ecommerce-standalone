import Link from 'next/link'
import { provisionalCategories } from '@/data/home'

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink px-5 py-20 text-cream md:px-8 md:py-28">
        <div aria-hidden="true" className="absolute -right-24 top-8 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-rose/25 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Ecommerce premium · projeto provisório</p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[0.95] sm:text-6xl md:text-7xl">
            Um presente criado para transformar momentos em memória.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-cream/75 md:text-lg">
            Produto e marca ainda serão definidos. Esta primeira experiência apresenta a estrutura para uma compra emocional, clara e mobile-first.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link className="inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-6 text-sm font-bold text-ink hover:bg-[#e2c37f]" href="#colecoes">
              Conhecer coleções
            </Link>
            <Link className="inline-flex min-h-12 items-center justify-center rounded-full border border-cream/40 px-6 text-sm font-semibold text-cream hover:bg-cream/10" href="#como-funciona">
              Como funciona
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24" id="colecoes">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">Estrutura preparada</p>
        <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="max-w-xl font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">Coleções que começam por uma história.</h2>
          <p className="max-w-sm text-sm leading-6 text-muted">Categorias, imagens e produtos são placeholders claros até a definição comercial.</p>
        </div>
        <div className="mt-9 grid gap-4 sm:grid-cols-3">
          {provisionalCategories.map((category, index) => (
            <article className="group min-h-56 rounded-2xl border border-line bg-ivory p-6 shadow-sm transition hover:-translate-y-1" key={category}>
              <span className="text-xs font-semibold text-gold-dark">0{index + 1}</span>
              <h3 className="mt-16 font-display text-3xl font-semibold text-navy">{category}</h3>
              <p className="mt-2 text-sm text-muted">Categoria provisória — a definir.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ivory px-5 py-16 md:px-8 md:py-24" id="como-funciona">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">Uma jornada simples</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">Do significado à entrega.</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {['Escolha o produto', 'Personalize se desejar', 'Receba com carinho'].map((step, index) => (
              <li className="border-t border-gold/50 pt-4" key={step}>
                <span className="text-sm font-semibold text-gold-dark">0{index + 1}</span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-navy">{step}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">Fluxo provisório preparado para produtos e regras comerciais a definir.</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24" id="sobre">
        <div className="rounded-3xl bg-navy px-7 py-12 text-center text-cream md:px-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Marca a definir</p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight md:text-5xl">Feito para quem quer presentear com significado.</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-cream/70">Uma base flexível para transformar a futura identidade, produtos e histórias da marca em uma experiência de compra confiável.</p>
        </div>
      </section>
    </>
  )
}
