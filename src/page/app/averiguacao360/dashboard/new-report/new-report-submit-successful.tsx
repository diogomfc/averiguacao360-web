// import { format, parse } from 'date-fns'
import { Calendar, Trash, User } from 'lucide-react'

import { GetAllUsersResponse } from '@/api/get-all-users'
import { GetProfileResponse } from '@/api/get-profile'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { env } from '@/env'

export interface NewReportSubmitSuccessfulProps {
  numero_processo: string
  cliente: string
  data_entrada: string
  usuario_responsavel: GetProfileResponse
  usuarios_permitidos: GetAllUsersResponse[]
  linkPushReport: () => void
  formularios_selecionados: {
    idFormName: string
    NumberForm?: number
    step?: number
    formName: string
  }[]
}

export function NewReportSubmitSuccessful(
  data: NewReportSubmitSuccessfulProps,
) {
  return (
    <>
      {/* <span>•</span> */}
      <div className="bg-white antialiased">
        <header>
          <div className="flex items-center justify-between gap-2 bg-blue-50 px-8 py-4">
            <div className="flex items-center gap-2">
              <img
                src="averiguacao360/icons/icon-relatorio.svg"
                width={20}
                height={20}
                alt=""
              />
              <h1 className="text-lg text-blue-950">
                Novo relatório de averiguação
              </h1>
            </div>
          </div>
          <Separator className="h-1 bg-gradient-to-r from-white via-blue-200 to-white" />
        </header>

        <main className="px-8 py-1">
          <div className="flex flex-col rounded-lg border border-blue-100 px-2 py-1 shadow-input-form">
            {/* Header */}
            <div className=" max-h-[300px] space-y-2 pl-4">
              <div className="flex items-center gap-4">
                <img
                  src="averiguacao360/icons/icon-segurado.svg"
                  width={80}
                  height={80}
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <span className="text-lg font-bold text-primary">
                    {data.cliente}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="pr-2 font-bold text-blue-950">
                      Nº {data.numero_processo}
                    </span>

                    <div className="0 flex items-center gap-1 pt-[2px] text-xs font-semibold text-primary">
                      <div className="flex h-2 w-2 rounded-full bg-primary" />
                      <span>Formalizando</span>
                    </div>

                    <div className="flex gap-1 pt-[2px] text-xs text-muted-foreground ">
                      <Calendar size={14} />
                      <span>{data.data_entrada}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grupo de averiguação */}
            <div className="flex flex-col gap-4 px-4 py-2 text-blue-950">
              <div className="grid grid-cols-4 gap-2">
                <div className="col-span-1 flex items-center justify-center rounded-sm border border-blue-50 p-2 shadow-input-form ">
                  <div className="flex flex-col items-center gap-1">
                    <span className="flex text-xs font-semibold">
                      Responsável
                    </span>
                    <div className="flex flex-col items-center gap-1">
                      <Avatar className="h-16 w-16">
                        <AvatarImage
                          src={`${env.VITE_API_URL}/images/avatar/${data?.usuario_responsavel?.avatar}`}
                          alt={data.usuario_responsavel?.nome}
                        />
                        <AvatarFallback
                          title={data.usuario_responsavel?.nome}
                          className="cursor-pointer border border-blue-200 "
                        >
                          <User size={20} className="text-blue-200" />
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex flex-col items-center">
                        <span className="text-xs font-normal">
                          {data.usuario_responsavel?.nome}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {data.usuario_responsavel?.funcao}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-3 rounded-sm border border-blue-50 px-2 shadow-input-form">
                  <span className="flex py-2 text-xs font-semibold">
                    Grupo de analistas responsáveis pela averiguação:
                  </span>
                  <div className=" grid grid-cols-3 gap-2">
                    {data.usuarios_permitidos?.map((users) => (
                      <div key={users?.id} className="flex items-center gap-2 ">
                        <Avatar>
                          <AvatarImage
                            src={`${env.VITE_API_URL}/images/avatar/${data?.usuario_responsavel?.avatar}`}
                            alt={users?.avatar}
                          />
                          <AvatarFallback
                            title={users?.nome}
                            className="cursor-pointer border border-blue-200 "
                          >
                            <User size={15} className="text-blue-200" />
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="text-xs font-normal ">
                            {users?.nome}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {users?.funcao}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Formulários do relatório */}
            <div className="flex flex-col gap-2 px-4 py-2 text-blue-950">
              <h1 className="text-xs font-semibold">
                Formulários a serem preenchidos até o final da averiguação:
              </h1>
              <div className="grid grid-cols-3 gap-1">
                {data.formularios_selecionados.map((form) => (
                  <div
                    key={form.idFormName}
                    className="flex items-center gap-2"
                  >
                    <div>
                      <div className="flex h-6 w-6 items-center justify-center rounded-full border border-blue-400">
                        <span className="text-xs font-medium text-blue-400">
                          {form.step}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {form.formName}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Footer Buttons */}
        <footer className="flex flex-col ">
          <div className="flex h-[50px] items-center justify-between gap-2 bg-blue-50 px-8">
            <Button
              variant="ghost"
              disabled
              className="flex items-center gap-1 text-sm text-destructive hover:text-red-400"
            >
              <Trash className="h-4 w-4 " />
              <span>Excluir relatório</span>
            </Button>
            <div className="flex items-center gap-2">
              <Button
                disabled
                className=" rounded border border-blue-300 bg-white px-2 py-1 text-primary hover:bg-primary hover:bg-opacity-70 hover:text-white hover:shadow-input-form-login"
              >
                Editar Relatório
              </Button>
              <Button
                type="button"
                key="proximo"
                onClick={data.linkPushReport}
                className="rounded border px-2 py-1 text-white hover:bg-opacity-70 hover:shadow-input-form-login "
              >
                Confirmar e iniciar averiguação
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
