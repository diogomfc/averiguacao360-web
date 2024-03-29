import { Outlet } from 'react-router-dom'

export function HubLayout() {
  return (
    <div className="antialiased">
      <header>
        <h1>Hub Layout</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
