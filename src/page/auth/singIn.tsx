import { Helmet } from 'react-helmet-async'

export function SignIn() {
  return (
    <>
      <Helmet title="Login" />
      <div className="flex h-screen items-center justify-center">
        <h1>SignIn</h1>
      </div>
    </>
  )
}
