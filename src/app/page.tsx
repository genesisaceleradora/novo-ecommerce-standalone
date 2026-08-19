import { BenefitCard } from '@/components/marketing/BenefitCard'
import { FAQ } from '@/components/marketing/FAQ'
import { HeroBanner } from '@/components/marketing/HeroBanner'
import { CategoryCard } from '@/components/product/CategoryCard'
import { ProductCard } from '@/components/product/ProductCard'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { benefits, faqs, provisionalCategories } from '@/data/home'
import { products } from '@/data/products'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata = createPageMetadata({ title: 'A definir | Ecommerce standalone', description: 'Produtos e presentes com significado — conteúdo provisório.', path: '/' })

export default function HomePage() {
  return (
    <>
      <HeroBanner
        description="Produto e marca ainda serão definidos. Esta primeira experiência apresenta uma jornada emocional, clara e mobile-first."
        eyebrow="Ecommerce premium · projeto provisório"
        primaryAction={{ label: 'Conhecer coleções', href: '#colecoes' }}
        secondaryAction={{ label: 'Como funciona', href: '#como-funciona' }}
        title="Um presente criado para transformar momentos em memória."
      />

      <Container className="py-16 md:py-24" id="colecoes">
        <SectionTitle description="Categorias, imagens e produtos são placeholders claros até a definição comercial." eyebrow="Estrutura preparada" title="Coleções que começam por uma história." />
        <div className="mt-9 grid gap-4 sm:grid-cols-3">
          {provisionalCategories.map((category, index) => <CategoryCard index={index + 1} key={category.title} {...category} />)}
        </div>
      </Container>

      <section className="bg-ivory py-16 md:py-24" id="destaques">
        <Container>
          <SectionTitle description="Cards reutilizáveis preparados para preço, imagem, badge e CTA quando o catálogo final existir." eyebrow="Seleção provisória" title="Destaques para emocionar." />
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => <ProductCard badge={product.badge} description={product.shortDescription} href={`/produto/${product.slug}`} key={product.id} name={product.name} price={product.price} />)}
          </div>
        </Container>
      </section>

      <Container className="py-16 md:py-24" id="como-funciona">
        <SectionTitle eyebrow="Uma jornada simples" title="Do significado à entrega." />
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {['Escolha o produto', 'Personalize se desejar', 'Receba com carinho'].map((step, index) => (
              <li className="border-t border-gold/50 pt-4" key={step}>
                <span className="text-sm font-semibold text-gold-dark">0{index + 1}</span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-navy">{step}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">Fluxo provisório preparado para produtos e regras comerciais a definir.</p>
              </li>
            ))}
          </ol>
      </Container>

      <section className="bg-ivory py-16 md:py-24">
        <Container>
          <SectionTitle align="center" eyebrow="Por que escolher" title="Mais que um produto, uma lembrança." />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {benefits.map((benefit, index) => <BenefitCard index={index + 1} key={benefit.title} {...benefit} />)}
          </div>
        </Container>
      </section>

      <Container className="py-16 md:py-24" id="sobre">
        <div className="rounded-3xl bg-navy px-7 py-12 text-center text-cream md:px-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Marca a definir</p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight md:text-5xl">Feito para quem quer presentear com significado.</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-cream/70">Uma base flexível para transformar a futura identidade, produtos e histórias da marca em uma experiência de compra confiável.</p>
          <Button className="mt-8" href="#colecoes">Ver estrutura do catálogo</Button>
        </div>
      </Container>

      <Container className="pb-16 md:pb-24">
        <SectionTitle eyebrow="Dúvidas frequentes" title="Tudo começa com clareza." />
        <div className="mt-8"><FAQ items={faqs} /></div>
      </Container>
    </>
  )
}
