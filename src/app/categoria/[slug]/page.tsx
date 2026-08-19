import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ProductCard } from '@/components/product/ProductCard'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { categories, getCategoryBySlug } from '@/data/categories'
import { products } from '@/data/products'

type CategoryPageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return categories.filter((category) => category.active).map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = getCategoryBySlug((await params).slug)
  if (!category) return {}
  return { title: category.seoTitle, description: category.seoDescription }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug((await params).slug)
  if (!category) notFound()
  const categoryProducts = products.filter((product) => product.active && product.categorySlug === category.slug)

  return (
    <>
      <section className="bg-ink py-16 text-cream md:py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{category.eyebrow ?? 'Coleção provisória'}</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[0.98] md:text-6xl">{category.name}</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-cream/75">{category.description}</p>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-gold/80">Conteúdo demonstrativo — categoria final a definir</p>
        </Container>
      </section>
      <Container className="py-16 md:py-24">
        <SectionTitle description={category.shortDescription} eyebrow="Produtos mockados" title="Escolhas para este momento." />
        {categoryProducts.length > 0 ? (
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categoryProducts.map((product) => <ProductCard badge={product.badge} description={product.shortDescription} href={`/produto/${product.slug}`} key={product.id} name={product.name} price={product.price} />)}
          </div>
        ) : <p className="mt-8 rounded-2xl border border-line bg-ivory p-6 text-sm text-muted">Nenhum produto demonstrativo nesta categoria.</p>}
      </Container>
    </>
  )
}
