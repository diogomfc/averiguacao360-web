import { setCookie } from 'nookies'

import { api } from '@/lib/axios'

export interface SignInBody {
  email: string
  senha: string
}
export async function signIn({ email, senha }: SignInBody) {
  const response = await api.post('/login', {
    email,
    senha,
  })

  // Pegar o token do usuário e armazenar em um cookie
  const token = response.data.token

  // definindo o cabeçalho de autorização para todas as requisições
  api.defaults.headers.authorization = `Bearer ${token}`

  // Setar o token do usuário no cookie
  setCookie(undefined, 'auth.token', token, {
    maxAge: 60 * 60 * 24, // 1 dia
  })
}
