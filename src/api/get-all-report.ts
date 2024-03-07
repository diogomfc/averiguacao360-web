import { api } from '@/lib/axios'

import { RelatorioFiltrado } from './../types/typesAll'

type GetProfileResponse = RelatorioFiltrado

export async function gerAllReport() {
  try {
    const response = await api.get<GetProfileResponse>('/relatorios')

    return response.data
  } catch (error) {
    console.error('Erro ao obter relatórios:', error)
  }
}
