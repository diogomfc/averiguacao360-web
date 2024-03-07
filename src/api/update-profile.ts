import { api } from '@/lib/axios'

interface UpdateProfileBody {
  nome: string
  telefone: string
}

export async function updateProfile({ nome, telefone }: UpdateProfileBody) {
  await api.put('/usuarios/editar-perfil', {
    nome,
    telefone,
  })
}
