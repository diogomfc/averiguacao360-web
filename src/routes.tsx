import { createBrowserRouter } from 'react-router-dom'

import { Averiguacao360Layout } from './page/_layouts/app/layout-averiguação360'
import { HubLayout } from './page/_layouts/app/layout-hub'
import { AuthLayout } from './page/_layouts/layout-auth'
import { NotFound } from './page/404'
import { DashboardAveriguacao360 } from './page/app/averiguacao360/dashboard'
import { Hub } from './page/app/hub'
import { SignIn } from './page/auth/singIn'

export const router = createBrowserRouter([
  {
    // Rota de autenticação sign-in
    path: '/',
    element: <AuthLayout />,
    children: [{ path: '/', element: <SignIn /> }],
  },
  {
    path: '/',
    element: <HubLayout />,
    errorElement: <NotFound />,
    children: [{ path: '/Hub', element: <Hub /> }],
  },
  {
    path: '/',
    element: <Averiguacao360Layout />,
    errorElement: <NotFound />,
    children: [
      { path: '/averiguacao360', element: <DashboardAveriguacao360 /> },
    ],
  },
])
