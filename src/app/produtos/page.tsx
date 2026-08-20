import { CatalogGrid } from '@/components/catalog/CatalogGrid'
import { CategoryCard } from '@/components/product/CategoryCard'
import { InstitutionalCta } from '@/components/institutional/InstitutionalCta'
import { InstitutionalHero } from '@/components/institutional/InstitutionalHero'
import { ComplianceNotice } from '@/components/ui/ComplianceNotice'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { catalogCategories, catalogProducts } from '@/data/catalog'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata = createPageMetadata({
  title: 'Catálogo profissional | Galanta Ortho',
  description: 'Catálogo estrutural Galanta Ortho com linhas Standard e Personal, especificações explícitas e conteúdo em validação.',
  path: '/produtos',
})

export default function ProductsPage() {
  const categories = catalogCategories.filter((category) => category.active).sort((a, b) => a.order - b.order)
  const products = catalogProducts.filter((product) => product.active)

  return <>
    <InstitutionalHero description="Catálogo configurável para organizar linhas, modelos, variações, documentos e tipos de solicitação sem antecipar definições técnicas ou comerciais." eyebrow="Galanta Ortho · Catálogo profissional" notice="Os registros atuais validam a arquitetura do sistema. Não constituem indicação clínica, catálogo final ou oferta comercial." primaryAction={{ href: '#catalogo', label: 'Consultar estruturas' }} secondaryAction={{ href: '/galanta-ortho', label: 'Conhecer Galanta Ortho' }} title="Produtos estruturados para avaliação profissional." />

    <Container className="py-16 md:py-24">
      <SectionTitle description="A hierarquia contempla Standard, Personal, amostras e materiais. Categorias futuras entram somente após decisão registrada." eyebrow="Arquitetura do catálogo" title="Quatro áreas, um nível claro de aprovação." />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{categories.map((category, index) => <CategoryCard description={category.shortDescription} href={`/categoria/${category.slug}`} index={index + 1} key={category.id} title={category.name} />)}</div>
      <ComplianceNotice className="mt-10" title="Catálogo em desenvolvimento" tone="warning">Produto, modelo, finalidade, material, tamanho, lado, protocolo, preço e disponibilidade permanecem pendentes. Campos ausentes não serão inferidos.</ComplianceNotice>
    </Container>

    <section className="border-y border-mist bg-white py-16 md:py-24" id="catalogo">
      <Container>
        <SectionTitle description="Dois registros seguros exercitam o domínio Standard + Personal. Novos produtos podem ser adicionados sem alterar os componentes." eyebrow="Registros estruturais" title="Modelos preparados para receber dados aprovados." />
        <div className="mt-10"><CatalogGrid products={products} /></div>
      </Container>
    </section>

    <InstitutionalCta description="O contato atual registra interesse profissional. A seleção técnica persistente e o formulário B2B serão implementados na Fase 5." primaryAction={{ href: '/contato', label: 'Registrar interesse técnico' }} secondaryAction={{ href: '/regulatorio-e-seguranca', label: 'Consultar status técnico' }} title="Precisa avaliar a estrutura com a equipe Galanta?" />
  </>
}
