import { destroyCookie } from 'nookies'
import { useNavigate } from 'react-router-dom'

// Função para fazer o signOut
export function SignOut() {
  // Remover o token do usuário do cookie
  destroyCookie(undefined, 'auth.token')

  // Redirecionar o usuário para a página de login
  const navigate = useNavigate()
  navigate('/')
}
