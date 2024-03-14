import { api } from '@/lib/axios'

import { Relatorio } from './../types/typesAll'

export type GetAllRelatorioResponse = Relatorio

export async function getAllReport() {
  const response = await api.get<GetAllRelatorioResponse>('/relatorios')
  return response.data
}
