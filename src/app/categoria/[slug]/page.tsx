import type { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import { CatalogGrid } from '@/components/catalog/CatalogGrid'
import { InstitutionalCta } from '@/components/institutional/InstitutionalCta'
import { BreadcrumbSchema } from '@/components/seo/Schemas'
import { ComplianceNotice } from '@/components/ui/ComplianceNotice'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { catalogCategories, getCatalogCategoryBySlug, getCatalogProductsByCategory, legacyCategoryAliases } from '@/data/catalog'
import { createPageMetadata } from '@/lib/seo/metadata'

type CategoryPageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return [...catalogCategories.filter((category) => category.active).map(({ slug }) => ({ slug })), ...Object.keys(legacyCategoryAliases).map((slug) => ({ slug }))]
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const slug = (await params).slug
  const canonicalSlug = legacyCategoryAliases[slug] ?? slug
  const category = getCatalogCategoryBySlug(canonicalSlug)
  if (!category) return {}
  return { ...createPageMetadata({ title: category.seoTitle, description: category.seoDescription, path: `/categoria/${category.slug}` }), robots: { index: false, follow: false } }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const slug = (await params).slug
  const alias = legacyCategoryAliases[slug]
  if (alias) redirect(`/categoria/${alias}`)

  const category = getCatalogCategoryBySlug(slug)
  if (!category) notFound()
  const products = getCatalogProductsByCategory(category.id)
  const contextualPath = `/${category.slug}`

  return <>
    <BreadcrumbSchema items={[{ name: 'Início', path: '/' }, { name: 'Produtos', path: '/produtos' }, { name: category.name, path: `/categoria/${category.slug}` }]} />
    <section className="bg-galanta-black py-16 text-sterile md:py-20">
      <Container>
        <p className="font-technical text-[11px] font-semibold uppercase tracking-[0.14em] text-aqua">Galanta Ortho · Categoria estrutural</p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-[1.04] tracking-[-0.05em] sm:text-5xl md:text-6xl">{category.name}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-mist/75">{category.description}</p>
        <p className="mt-7 border-l border-alert/70 pl-4 font-technical text-[10px] uppercase leading-5 tracking-[0.1em] text-mist/65">Status: estrutura placeholder · conteúdo sujeito à aprovação aplicável</p>
      </Container>
    </section>
    <Container className="py-16 md:py-24">
      <SectionTitle description={category.shortDescription} eyebrow="Catálogo profissional" title={products.length > 0 ? 'Registros disponíveis para validação da interface.' : 'Área preparada para conteúdo aprovado.'} />
      <div className="mt-10"><CatalogGrid emptyDescription="A categoria está pronta, mas ainda não possui um registro de produto ou documento aprovado para publicação." products={products} /></div>
      <ComplianceNotice className="mt-10" title="Sem oferta ou autorização de uso" tone="validation">A existência desta categoria não confirma produto, amostra, documento, estoque, envio, finalidade ou condição comercial.</ComplianceNotice>
    </Container>
    <InstitutionalCta description="Consulte o contexto institucional da categoria ou registre interesse profissional sem enviar dados de pacientes." primaryAction={{ href: contextualPath, label: 'Ver contexto da categoria' }} secondaryAction={{ href: '/contato', label: 'Falar com a equipe Galanta' }} title="Informação técnica com status explícito." />
  </>
}
