import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ProductCard } from '@/components/product/ProductCard'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { categories, getCategoryBySlug } from '@/data/categories'
import { products } from '@/data/products'
import { BreadcrumbSchema } from '@/components/seo/Schemas'
import { createPageMetadata } from '@/lib/seo/metadata'

type CategoryPageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return categories.filter((category) => category.active).map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = getCategoryBySlug((await params).slug)
  if (!category) return {}
  return createPageMetadata({ title: category.seoTitle, description: category.seoDescription, path: `/categoria/${category.slug}` })
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug((await params).slug)
  if (!category) notFound()
  const categoryProducts = products.filter((product) => product.active && product.categorySlug === category.slug)

  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Início', path: '/' }, { name: category.name, path: `/categoria/${category.slug}` }]} />
      <section className="bg-galanta-black py-16 text-sterile md:py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">{category.eyebrow ?? 'Coleção provisória'}</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[0.98] md:text-6xl">{category.name}</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-sterile/75">{category.description}</p>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-cyan/80">Conteúdo demonstrativo — categoria final a definir</p>
        </Container>
      </section>
      <Container className="py-16 md:py-24">
        <SectionTitle description={category.shortDescription} eyebrow="Produtos mockados" title="Escolhas para este momento." />
        {categoryProducts.length > 0 ? (
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categoryProducts.map((product) => <ProductCard badge={product.badge} description={product.shortDescription} href={`/produto/${product.slug}`} key={product.id} name={product.name} price={product.price} />)}
          </div>
        ) : <p className="mt-8 rounded-2xl border border-mist bg-sterile p-6 text-sm text-steel">Nenhum produto demonstrativo nesta categoria.</p>}
      </Container>
    </>
  )
}
