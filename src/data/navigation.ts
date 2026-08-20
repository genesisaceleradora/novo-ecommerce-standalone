import type { NavigationGroup, NavigationItem } from '@/types/content'

export const primaryNavigation: readonly NavigationItem[] = [
  { href: '/galanta-ortho', label: 'Galanta Ortho' },
  { href: '/produtos', label: 'Soluções' },
  { href: '/como-funciona', label: 'Como funciona' },
  { href: '/profissionais', label: 'Profissionais' },
  { href: '/clinicas-e-hospitais', label: 'Clínicas e hospitais' },
  { href: '/materiais-tecnicos', label: 'Materiais' },
]

export const footerNavigation: readonly NavigationGroup[] = [
  {
    title: 'Galanta',
    items: [
      { href: '/sobre', label: 'Sobre' },
      { href: '/galanta-ortho', label: 'Galanta Ortho' },
      { href: '/como-funciona', label: 'Como funciona' },
    ],
  },
  {
    title: 'Soluções',
    items: [
      { href: '/linha-standard', label: 'Linha Standard' },
      { href: '/linha-personal', label: 'Linha Personal' },
      { href: '/produtos', label: 'Produtos em desenvolvimento' },
      { href: '/amostras-tecnicas', label: 'Amostras técnicas' },
    ],
  },
  {
    title: 'Profissional',
    items: [
      { href: '/profissionais', label: 'Profissionais' },
      { href: '/clinicas-e-hospitais', label: 'Clínicas e hospitais' },
      { href: '/materiais-tecnicos', label: 'Materiais técnicos' },
      { href: '/regulatorio-e-seguranca', label: 'Regulatório e segurança' },
    ],
  },
  {
    title: 'Informações',
    items: [
      { href: '/faq', label: 'FAQ' },
      { href: '/contato', label: 'Contato' },
      { href: '/politica-de-privacidade', label: 'Privacidade' },
      { href: '/termos-de-uso', label: 'Termos de uso' },
    ],
  },
]
