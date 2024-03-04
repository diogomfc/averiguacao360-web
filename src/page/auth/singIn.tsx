import { zodResolver } from '@hookform/resolvers/zod'
import { Helmet } from 'react-helmet-async'
import { SubmitHandler, useForm } from 'react-hook-form'
import { BeatLoader } from 'react-spinners'
import * as z from 'zod'

import { TextInput } from '@/components/text-input'
import { Button } from '@/components/ui/button'

import logoPamShub from '../../assets/logo-pam-shub-login.svg'

const schema = z.object({
  email: z.string().email({ message: 'E-mail inválido' }),
  senha: z
    .string()
    .min(6, { message: 'Senha deve ter no mínimo 6 caracteres' }),
})

type FormValues = z.infer<typeof schema>

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors: formErrors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  const { isSubmitting } = formState

  const handleSignIn: SubmitHandler<FormValues> = async (data) => {
    try {
      console.log(data)
      await new Promise((resolve) => setTimeout(resolve, 20000))
      // await signIn({ email: data.email, senha: data.senha })
    } catch (error) {
      console.log(error)
    }
  }

  const handleInputFocus = () => {
    // authErrors.length > 0 && authErrors.splice(0, authErrors.length)
  }

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
          <form
            className={`flex w-full flex-col gap-4 ${
              isSubmitting && 'opacity-50'
            }`}
            onSubmit={handleSubmit(handleSignIn)}
          >
            <TextInput
              type="email"
              label="E-mail"
              name="email"
              defaultValue={''}
              placeholder="E-mail"
              register={register}
              alert={formErrors.email ? formErrors.email.message : ''}
              onFocus={handleInputFocus}
              disabled={isSubmitting}
            />

            <TextInput
              type="password"
              label="Password"
              name="senha"
              placeholder="Password"
              defaultValue={''}
              register={register}
              alert={formErrors.senha ? formErrors.senha.message : ''}
              onFocus={handleInputFocus}
              disabled={isSubmitting}
            />

            {/* {authErrors.map((error) => (
              <span
                key={error.message}
                className="text-lightMode-colors-red-default pl-4 text-xs"
              >
                {error.message}
              </span>
            ))} */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="hover:shadow-input-form-login mt-4 w-full rounded-md py-8 text-base font-semibold text-white  hover:bg-opacity-70"
            >
              {isSubmitting ? (
                <span className="pt-1">
                  <BeatLoader color="#ffffff" size={15} />
                </span>
              ) : (
                <span className="">Entrar</span>
              )}
            </Button>
          </form>

          {/* <div className="flex flex-col items-center">
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
          </div> */}
        </div>
      </div>
    </>
  )
}
