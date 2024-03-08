import { api } from '@/lib/axios'

import { Relatorio } from './../types/typesAll'

type GetProfileResponse = Relatorio

export async function gerAllReport() {
  const response = await api.get<GetProfileResponse>('/relatorios')
  return response.data
}
