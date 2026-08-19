export const topbarBenefits = [
  '4.9/5 — Avaliação média (placeholder)',
  '+20.000 — Histórias iluminadas (placeholder)',
  '3 dias úteis — Produção média (placeholder)',
  '100% — Feito no Brasil (placeholder)',
  '6x — Sem juros (placeholder)',
] as const

export const provisionalCategories = [
  { title: 'Presentes personalizados', description: 'Categoria provisória — a definir.' },
  { title: 'Momentos especiais', description: 'Categoria provisória — a definir.' },
  { title: 'Memórias que ficam', description: 'Categoria provisória — a definir.' },
] as const

export const provisionalProducts = [
  { name: 'Produto exemplo', description: 'Produto demonstrativo para validar o catálogo inicial.', priceLabel: 'Preço a definir', badge: 'Exemplo' },
  { name: 'Presente com significado', description: 'Conteúdo provisório até a definição do produto principal.', priceLabel: 'Preço a definir', badge: 'A definir' },
  { name: 'Memória personalizada', description: 'Estrutura preparada para uma futura personalização.', priceLabel: 'Preço a definir' },
] as const

export const benefits = [
  { title: 'Feito com significado', description: 'Uma experiência pensada para transformar histórias em presentes memoráveis.' },
  { title: 'Cuidado em cada detalhe', description: 'Estética, clareza e confiança em uma jornada de compra acolhedora.' },
  { title: 'Preparado para personalizar', description: 'A base do ecommerce evoluirá com os requisitos do produto definido.' },
] as const

export type FAQItem = { question: string; answer: string }

export const faqs: readonly FAQItem[] = [
  { question: 'Os produtos são personalizados?', answer: 'A personalização será ativada conforme a definição de cada produto. Esta é uma resposta provisória.' },
  { question: 'Qual é o prazo de produção?', answer: 'O prazo comercial ainda será definido. Informações herdadas da referência permanecem apenas como placeholders.' },
  { question: 'Como funciona o pagamento?', answer: 'O checkout será preparado para integração segura com Pagar.me em uma etapa posterior.' },
]
