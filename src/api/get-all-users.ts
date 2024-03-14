import { api } from '@/lib/axios'

export interface GetAllUsersResponse {
  id: string
  nome: string
  email: string
  telefone: string
  avatar: string
  funcao: string
  criado_em?: string
}

export async function getAllUsersProfile() {
  const response = await api.get<GetAllUsersResponse[]>('/usuarios')
  return response.data
}
