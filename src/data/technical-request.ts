import type { ProfessionalProfile, ProfessionalRole } from '@/types/technical-request'
import type { TechnicalRequestType } from '@/types/catalog'

export const professionalRoleLabels: Record<ProfessionalRole, string> = {
  orthopedist: 'Ortopedista',
  physiotherapist: 'Fisioterapeuta',
  occupational_therapist: 'Terapeuta ocupacional',
  health_professional: 'Outro profissional de saúde',
  purchasing_manager: 'Compras / suprimentos',
  clinic_management: 'Gestão de clínica',
  hospital_management: 'Gestão hospitalar',
  other: 'Outra função',
}

export const professionalProfileLabels: Record<ProfessionalProfile, string> = {
  independent_professional: 'Profissional independente',
  clinic: 'Clínica',
  hospital: 'Hospital',
  professional_service_point: 'Ponto de atendimento profissional',
  other: 'Outro perfil',
}

export const requestTypeDescriptions: Record<TechnicalRequestType, string> = {
  technical_presentation: 'Conhecer a linha, a estrutura técnica e os próximos passos possíveis.',
  technical_sample: 'Registrar interesse em uma futura avaliação, sem garantia de disponibilidade ou uso.',
  stock_planning: 'Conversar sobre demanda e planejamento, sem constituir reserva ou pedido.',
  personal_project: 'Avaliar o processo Personal sem enviar dados clínicos ou identificáveis de pacientes.',
  commercial_contact: 'Iniciar uma conversa comercial ou institucional com a equipe Galanta.',
}

export const brazilianStates = [
  ['AC', 'Acre'], ['AL', 'Alagoas'], ['AP', 'Amapá'], ['AM', 'Amazonas'], ['BA', 'Bahia'],
  ['CE', 'Ceará'], ['DF', 'Distrito Federal'], ['ES', 'Espírito Santo'], ['GO', 'Goiás'],
  ['MA', 'Maranhão'], ['MT', 'Mato Grosso'], ['MS', 'Mato Grosso do Sul'], ['MG', 'Minas Gerais'],
  ['PA', 'Pará'], ['PB', 'Paraíba'], ['PR', 'Paraná'], ['PE', 'Pernambuco'], ['PI', 'Piauí'],
  ['RJ', 'Rio de Janeiro'], ['RN', 'Rio Grande do Norte'], ['RS', 'Rio Grande do Sul'],
  ['RO', 'Rondônia'], ['RR', 'Roraima'], ['SC', 'Santa Catarina'], ['SP', 'São Paulo'],
  ['SE', 'Sergipe'], ['TO', 'Tocantins'],
] as const
