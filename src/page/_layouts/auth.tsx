import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div>
      <header>
        <h1>App Layout</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
