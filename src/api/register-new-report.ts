import { api } from '@/lib/axios'

export interface RegisterNewReportBody {
  numero_processo: string
  natureza_sinistro: 'Roubo' | 'Furto' | 'Apreensão' | 'Outros'
  cnpj: string
  cliente: string
  usuarios_permitidos: string[]
  formularios_selecionados: string[]
}

export async function registerNewReport(data: RegisterNewReportBody) {
  const response = await api.post('/relatorios', data)
  return response.data
}
