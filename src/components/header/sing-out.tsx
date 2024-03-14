import { useQueryClient } from '@tanstack/react-query'
import { destroyCookie } from 'nookies'
import { useNavigate } from 'react-router-dom'

export const useSignOut = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const signOut = async () => {
    queryClient.clear()
    destroyCookie(undefined, 'auth.token')
    navigate('/', { replace: true })
  }

  return signOut
}
