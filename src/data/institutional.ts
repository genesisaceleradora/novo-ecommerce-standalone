import type { ContentCard, FAQItem, ProcessStep, RegulatoryTopic, TechnicalMaterialSummary } from '@/types/content'

export const productLines: readonly ContentCard[] = [
  {
    title: 'Linha Standard',
    label: 'Standard',
    status: 'development',
    href: '/linha-standard',
    description: 'Estrutura de soluções padronizadas planejada para futura configuração e organização nos pontos de atendimento. Especificações a confirmar.',
  },
  {
    title: 'Linha Personal',
    label: 'Personal',
    status: 'validation',
    href: '/linha-personal',
    description: 'Estrutura para soluções personalizadas em casos selecionados, condicionada a informações e avaliação profissional. Processo e critérios a confirmar.',
  },
]

export const platformPillars: readonly ContentCard[] = [
  { title: 'Disponibilidade', label: 'Pilar', status: 'development', description: 'Organização futura de soluções, planejamento e reposição, sem promessa de prazo ou estoque.' },
  { title: 'Adaptação', label: 'Pilar', status: 'validation', description: 'Arquitetura configurável para receber processos e parâmetros somente após aprovação técnica.' },
  { title: 'Personalização', label: 'Pilar', status: 'validation', description: 'Soluções Personal para casos selecionados, sem inferir indicação, eficácia ou adequação clínica.' },
]

export const conceptualProcess: readonly ProcessStep[] = [
  { title: 'Selecionar', description: 'Identificar a estrutura ou configuração disponível no conteúdo profissional aprovado.' },
  { title: 'Preparar', description: 'Preparar conforme protocolo aplicável e aprovado. Parâmetros operacionais permanecem em validação.' },
  { title: 'Adaptar', description: 'Adaptação conduzida por profissional conforme orientação e responsabilidade aplicáveis.' },
  { title: 'Verificar', description: 'Verificação conforme protocolo e critérios que ainda serão formalmente publicados.' },
]

export const professionalAudiences: readonly ContentCard[] = [
  { title: 'Ortopedistas', label: 'Profissional', description: 'Conteúdo estrutural para apresentação da linha e futura consulta de informações aprovadas.' },
  { title: 'Fisioterapeutas', label: 'Profissional', description: 'Visão profissional da arquitetura Standard + Personal, sem orientação clínica individual.' },
  { title: 'Terapeutas ocupacionais', label: 'Profissional', description: 'Estrutura informativa para avaliação técnica e diálogo com a equipe Galanta.' },
  { title: 'Clínicas e hospitais', label: 'Instituição', href: '/clinicas-e-hospitais', description: 'Apresentação institucional, avaliação de interesse e planejamento futuro de disponibilidade.' },
  { title: 'Gestores e compradores', label: 'Operação', href: '/clinicas-e-hospitais', description: 'Contexto comercial para futura avaliação de proposta e planejamento de estoque.' },
]

export const interestProcess: readonly ProcessStep[] = [
  { title: 'Conhecer a proposta', description: 'Consultar a linha, os públicos e o conteúdo estrutural disponível.' },
  { title: 'Definir o interesse', description: 'Apresentação técnica, avaliação de amostra, planejamento de estoque ou contato comercial.' },
  { title: 'Falar com a Galanta', description: 'Registrar contato profissional. Condições e próximos passos serão confirmados sem prazo prometido.' },
]

export const engineeringCapabilities: readonly ContentCard[] = [
  { title: 'Engenharia de produto', label: 'Capacidade', description: 'Estrutura preparada para organizar requisitos, versões e especificações aprovadas.' },
  { title: 'Manufatura digital', label: 'Capacidade', description: 'Conceito de plataforma sem publicação de processo, material ou desempenho não confirmado.' },
  { title: 'Rastreabilidade futura', label: 'Qualidade', status: 'pending', description: 'Arquitetura prevista para versões, documentos e histórico quando a operação real for definida.' },
]

export const technicalMaterials: readonly TechnicalMaterialSummary[] = [
  { title: 'Ficha técnica', kind: 'Especificações', status: 'development', description: 'Estrutura reservada para documentos versionados e aprovados do produto aplicável.' },
  { title: 'Protocolo profissional', kind: 'Processo', status: 'restricted', description: 'Nenhum protocolo operacional será publicado antes de validação técnica e regulatória.' },
  { title: 'Informações de segurança', kind: 'Segurança', status: 'validation', description: 'Conteúdo em organização, ainda sem material aprovado para publicação.' },
  { title: 'Informações regulatórias', kind: 'Regulatório', status: 'pending', description: 'Status e documentação aplicável permanecem a confirmar.' },
]

export const regulatoryTopics: readonly RegulatoryTopic[] = [
  { topic: 'Status da linha', value: 'Em desenvolvimento', status: 'development' },
  { topic: 'Produto/modelo', value: 'A confirmar', status: 'pending' },
  { topic: 'Finalidade pretendida', value: 'Informação técnica em validação', status: 'validation' },
  { topic: 'Regularização aplicável', value: 'A confirmar', status: 'pending' },
  { topic: 'Material', value: 'A confirmar', status: 'pending' },
  { topic: 'Instruções e segurança', value: 'Conteúdo não publicado', status: 'restricted' },
  { topic: 'Rastreabilidade', value: 'Estrutura futura', status: 'development' },
  { topic: 'Limpeza e conservação', value: 'A confirmar', status: 'pending' },
]

export const professionalFaqs: readonly FAQItem[] = [
  { question: 'Para quem é a plataforma?', answer: 'Para profissionais de saúde, clínicas, hospitais e equipes envolvidas na avaliação técnica e comercial da linha Galanta Ortho.' },
  { question: 'Já é possível comprar?', answer: 'Não. O MVP apresenta a estrutura profissional e, em uma fase posterior, registrará interesse técnico e comercial sem pagamento.' },
  { question: 'Posso enviar dados de um paciente?', answer: 'Não. Não inclua nomes, documentos, imagens ou informações identificáveis de pacientes em nenhum canal do MVP.' },
  { question: 'As especificações estão finalizadas?', answer: 'Não. Campos pendentes são identificados como em validação e serão atualizados somente após aprovação aplicável.' },
  { question: 'Como solicitar contato?', answer: 'Use a página de contato profissional. O fluxo completo de solicitação técnica será implementado em uma fase própria.' },
]
