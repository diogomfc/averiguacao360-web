import { parseCookies } from 'nookies'

import { api } from '@/lib/axios'

type Funcao = 'Admin' | 'Supervisor' | 'Analista' | 'Revisor'

export interface GetProfileResponse {
  id: string
  nome: string
  email: string
  telefone: string
  funcao: Funcao
  avatar?: string
  criado_em?: string
}

export async function getProfile() {
  const { 'auth.token': token } = parseCookies()

  const response = await api.get<GetProfileResponse>('/usuarios/perfil', {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })

  return response.data
}
