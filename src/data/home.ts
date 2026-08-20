export const capabilities = [
  { title: 'Disponibilidade', description: 'Estrutura preparada para organizar soluções, planejamento e reposição conforme as regras comerciais forem aprovadas.' },
  { title: 'Adaptação', description: 'Arquitetura configurável para receber modelos, tamanhos, lados e especificações após validação técnica.' },
  { title: 'Personalização', description: 'Base para soluções Personal em casos selecionados, sempre condicionadas à avaliação profissional aplicável.' },
] as const

export const processSteps = [
  { title: 'Conhecer a estrutura', description: 'Apresentação institucional e técnica da linha Galanta Ortho.' },
  { title: 'Registrar interesse', description: 'Seleção demonstrativa preparada para futura solicitação profissional.' },
  { title: 'Avaliar com a equipe', description: 'Continuidade comercial e técnica sem promessa de prazo ou disponibilidade.' },
] as const

export type FAQItem = { question: string; answer: string }

export const faqs: readonly FAQItem[] = [
  { question: 'O portal já representa um catálogo comercial?', answer: 'Não. Produtos, condições e especificações permanecem em validação e serão publicados somente após as aprovações aplicáveis.' },
  { question: 'Qual é a proposta da linha Galanta Ortho?', answer: 'Organizar soluções Standard e Personal para apresentação e avaliação por profissionais e pontos de atendimento.' },
  { question: 'É possível enviar informações de pacientes?', answer: 'Não. O MVP não solicita nem deve receber nomes, documentos, imagens ou qualquer informação identificável de pacientes.' },
]
