import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div>
      <header>
        <h1>Auth Layout</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
