import { AxiosResponse } from 'axios'
import { useRouter } from 'next/navigation'
import { destroyCookie, parseCookies, setCookie } from 'nookies'
import { createContext, ReactNode, useEffect, useState } from 'react'

import { api } from '@/data/api'

interface ErrorMessage {
  status?: string
  input?: string
  message: string
}

type Funcao = 'Admin' | 'Supervisor' | 'Analista' | 'Revisor'

interface UsuarioPerfil {
  id?: string
  nome: string
  email: string
  telefone: string
  funcao: Funcao
  avatar?: string
  criado_em?: string
}

interface SignInRequestData {
  email: string
  senha: string
}

interface AuthProviderProps {
  children: ReactNode
}

interface AuthContextType {
  isAuthenticated: boolean
  usuario: UsuarioPerfil | null
  signIn: (data: SignInRequestData) => Promise<void>
  signOut: () => void
  authErrors: ErrorMessage[]
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter()
  const [usuarioPerfil, setUsuario] = useState<UsuarioPerfil | null>(null)
  const [authErrors, setAuthErrors] = useState<ErrorMessage[]>([])

  const isAuthenticated = !!usuarioPerfil

  async function fetchUserProfile(token: string) {
    try {
      const response = await api.get('/usuarios/perfil', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      // console.log(response.data);
      const usuario =
        typeof response.data === 'object'
          ? (response.data as UsuarioPerfil)
          : null

      setUsuario(usuario)
    } catch (error) {
      if (error instanceof Error) {
        setAuthErrors([{ message: error.message }])
      }
    }
  }

  useEffect(() => {
    const { 'sh.token': token } = parseCookies()
    if (token) {
      // Defina o cabeçalho de autorização globalmente
      api.defaults.headers.authorization = `Bearer ${token}`
      // carregue o perfil do usuário
      fetchUserProfile(token)
    }
  }, [])

  async function signIn({ email, senha }: SignInRequestData) {
    try {
      const response = await api.post('/login', {
        email,
        senha,
      })

      // Buscar o token do usuário e armazenar em um cookie
      const { token } = response.data

      api.defaults.headers.authorization = `Bearer ${token}`

      setCookie(undefined, 'sh.token', token, {
        maxAge: 60 * 60 * 24, // 1 dia
      })

      // Após a autenticação, carregue o perfil do usuário
      fetchUserProfile(token)

      setAuthErrors([])
      router.push('/hub')
    } catch (error) {
      if (error instanceof Error) {
        if ('response' in error && error.response) {
          const response = error.response as AxiosResponse<ErrorMessage>
          setAuthErrors([response.data])
        } else {
          setAuthErrors([
            {
              input: !email ? 'email' : 'senha',
              message: error.message,
            },
          ])
        }
      }
    }
  }

  async function signOut() {
    destroyCookie(undefined, 'sh.token')
    setUsuario(null)
    router.push('/')
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        usuario: usuarioPerfil,
        signIn,
        signOut,
        authErrors,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
