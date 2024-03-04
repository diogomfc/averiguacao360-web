import { Helmet } from 'react-helmet-async'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex h-screen items-center justify-center">
        <h1>Dashboard</h1>
      </div>
    </>
  )
}
