import { parseCookies } from 'nookies'

import { api } from '@/lib/axios'

type Funcao = 'Admin' | 'Supervisor' | 'Analista' | 'Revisor'

interface GetProfileResponse {
  id: string
  nome: string
  email: string
  telefone: string
  funcao: Funcao
  avatar?: string
  criado_em?: string
}

export async function getProfile() {
  try {
    const { 'auth.token': token } = parseCookies()

    const response = await api.get<GetProfileResponse>('/usuarios/perfil', {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })

    // console.log('Perfil do usuário:', response.data)
    return response.data
  } catch (error) {
    console.error('Erro ao obter perfil do usuário:', error)
  }
}
