import { createBrowserRouter } from 'react-router-dom'
import { Dashboard } from './page/app/dashboard'
import { SignIn } from './page/auth/singIn'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    // children: [{ path: '/dashboard', element: <Dashboard /> }],
  },
  {
    path: '/auth',
    element: <SignIn />,
    // children: [{ path: '/sign-in', element: <SignIn /> }],
  },
])
