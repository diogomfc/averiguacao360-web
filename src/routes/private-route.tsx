import { parseCookies } from 'nookies'
import { PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'

type PrivateRouteProps = PropsWithChildren

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const cookies = parseCookies()
  const token = cookies['auth.token']
  return token ? children : <Navigate to="/" replace />
}
