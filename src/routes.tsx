import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './page/_layouts/app'
import { AuthLayout } from './page/_layouts/auth'
import { Dashboard } from './page/app/dashboard'
import { SignIn } from './page/auth/singIn'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{ path: '/', element: <Dashboard /> }],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [{ path: '/sign-in', element: <SignIn /> }],
  },
])
