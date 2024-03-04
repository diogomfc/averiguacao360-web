import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import logoPamShub from '../../assets/logo-pam-shub-login.svg'

export function SignIn() {
  return (
    <>
      <Helmet title="Login" />
      <div className="relative z-10 w-[500px] rounded-lg border border-blue-200 bg-white bg-hero-pattern bg-cover shadow-md">
        <div className="flex w-full flex-col items-center rounded-lg border-8 border-blue-100 p-10">
          {/* Logo */}
          <div className="mb-10">
            <img
              src={logoPamShub}
              alt="Logo Pamcary Shub"
              width={300}
              height={200}
            />
          </div>
          {/* Form */}
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" className="" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" className="" />
            </div>
            <Button className="w-full" type="submit">
              Acessar Shub
            </Button>
          </form>

          <div className="flex flex-col items-center">
            <div className="mt-2">
              <a
                href="#"
                className="text-sm font-light text-muted-foreground hover:underline"
              >
                <span className="flex gap-1">
                  Não possui conta? <span>Solicite ao seu gerente.</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
