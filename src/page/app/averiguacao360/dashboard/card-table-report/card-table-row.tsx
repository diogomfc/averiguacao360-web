import { format, parse } from 'date-fns'
import { FilePenLine, Mail, PhoneCall, UsersRound } from 'lucide-react'
import { ReactNode } from 'react'

import { ProgressStatus } from '@/components/progress-status'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { TableCell, TableRow } from '@/components/ui/table'
import { env } from '@/env'
import { UsuariosPermitido } from '@/types/typesAll'

export interface CardTableRowReportProps {
  numeroProcesso: string
  statusReport: ReactNode
  cliente: string
  dataEntrada: string
  linkFormsReport: () => void
  qtdEtapasFormulario: number
  // usuarioResponsavel: UsuarioResponsavel
  grupoUsuariosPermitido: UsuariosPermitido[]
}

export function CardTableRowReport({
  numeroProcesso,
  cliente,
  statusReport,
  dataEntrada,
  linkFormsReport,
  qtdEtapasFormulario,
  grupoUsuariosPermitido,
}: CardTableRowReportProps) {
  // Calcula a diferença de dias entre a data de entrada e a data atual
  const dataParseada = parse(dataEntrada, 'dd-MM-yyyy HH:mm:ss', new Date())
  const agora = new Date()
  const diferencaTempo = Math.abs(agora.getTime() - dataParseada.getTime())
  const diferencaDias = Math.ceil(diferencaTempo / (1000 * 60 * 60 * 24))

  const dataFormatada = format(dataParseada, 'dd/MM/yy')

  const nomeClienteFormatado = cliente
    .toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ')

  return (
    <TableRow className=" cursor-pointer  hover:bg-blue-50/50">
      <TableCell className=" py-1">
        <div className="flex items-center justify-end gap-1 ">
          <div className=" w-[16px] bg-blue-50 ">
            {/* <img
              src="averiguacao360/icons/icon-relatorio-revisao.svg"
              alt="Relatório"
            /> */}
            {statusReport}
          </div>
        </div>
      </TableCell>
      <TableCell className=" max-w-[110px]  px-0 py-1 md:w-full 2xl:max-w-full">
        <div className="flex flex-col justify-center ">
          <h1 className=" truncate text-xs font-semibold">
            {nomeClienteFormatado}
          </h1>
          <span className="text-[11.63px] text-muted-foreground ">
            Nº {numeroProcesso}
          </span>
        </div>
      </TableCell>
      <TableCell className="px-1  py-1">
        <div className="flex w-[80px] flex-col items-center gap-2">
          <h1 className="text-xs font-semibold">
            {((qtdEtapasFormulario / 18) * 100).toFixed(0)}%
          </h1>
          <ProgressStatus
            initialValue={1}
            finalValue={Number(((qtdEtapasFormulario / 18) * 100).toFixed(0))}
            delay={500}
          />
        </div>
      </TableCell>
      <TableCell className=" px-1 py-1">
        <div className="flex w-[80px] flex-col items-center">
          <h1 className="text-xs font-semibold">{qtdEtapasFormulario}/18</h1>
          <span className="text-[11.63px] text-muted-foreground">
            {18 - qtdEtapasFormulario} pendente
          </span>
        </div>
      </TableCell>
      <TableCell className=" px-1 py-1">
        <div className="flex flex-col  items-center">
          <h1 className="text-xs font-semibold">{dataFormatada}</h1>
          <span className="text-[11.63px] text-muted-foreground">
            {diferencaDias} dia(s)
          </span>
        </div>
      </TableCell>
      <TableCell className=" px-4 py-1">
        <div className="flex items-center justify-center gap-1 ">
          {/* Editar */}
          <HoverCard>
            <HoverCardTrigger
              asChild
              className="h-auto w-auto cursor-pointer hover:text-blue-400"
              onClick={linkFormsReport}
            >
              <FilePenLine size={20} strokeWidth={1.5} />
            </HoverCardTrigger>
            <HoverCardContent className="h-auto w-auto ">
              <span className="text-muted-foreground ">Editar relatório</span>
            </HoverCardContent>
          </HoverCard>
          {/* Grupo de Averiguação */}
          <HoverCard>
            <HoverCardTrigger
              asChild
              className="h-auto w-auto cursor-pointer hover:text-blue-400"
            >
              <UsersRound size={20} strokeWidth={1.5} />
            </HoverCardTrigger>
            <HoverCardContent
              align="end"
              className="w-auto grid-cols-2 rounded-lg border border-blue-200 p-4"
            >
              {/* usuários */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100">
                    <img
                      src="averiguacao360/icons/icon-relatorio.svg"
                      width={30}
                      height={30}
                      alt="Relatório"
                    />
                  </div>

                  <div className="item center flex flex-col ">
                    <span className="text-xs text-muted-foreground">
                      Processo
                    </span>
                    <h1 className="font-semibold">Nº {numeroProcesso}</h1>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold ">
                    Grupo responsável pela averiguação
                  </span>
                  <div className="flex flex-col gap-2">
                    {grupoUsuariosPermitido?.map((usuario) => {
                      return (
                        <div
                          key={usuario.id}
                          className="flex items-center justify-between gap-2 rounded-lg border border-blue-100 bg-blue-50/30 p-2"
                        >
                          <div className="flex gap-2">
                            <Avatar>
                              {usuario.avatar && (
                                <AvatarImage
                                  src={`${env.VITE_API_URL}/images/avatar/${usuario?.avatar}`}
                                  alt="Avatar"
                                />
                              )}
                              <AvatarFallback
                                title={usuario.nome}
                                className="cursor-pointer"
                              >
                                {usuario.nome.charAt(0).toUpperCase()}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                              <span className="text-xs">{usuario.nome}</span>
                              <span className="text-xs font-normal text-muted-foreground">
                                {usuario.funcao}
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <div className="flex h-auto w-auto items-center justify-center rounded-full border border-blue-200 bg-white p-2 hover:border-blue-300 hover:bg-blue-100 hover:text-blue-400">
                              <HoverCard>
                                <HoverCardTrigger
                                  asChild
                                  className="cursor-pointer"
                                >
                                  <PhoneCall size={16} strokeWidth={1.5} />
                                </HoverCardTrigger>
                                <HoverCardContent className="flex w-auto items-center justify-center p-2">
                                  <h1 className="text-xs">
                                    {usuario.telefone}
                                  </h1>
                                </HoverCardContent>
                              </HoverCard>
                            </div>
                            <div className="flex h-auto w-auto items-center justify-center rounded-full border border-blue-200 bg-white p-2 hover:border-blue-300 hover:bg-blue-100 hover:text-blue-400">
                              <HoverCard>
                                <HoverCardTrigger
                                  asChild
                                  className="cursor-pointer "
                                >
                                  <Mail size={16} strokeWidth={1.5} />
                                </HoverCardTrigger>
                                <HoverCardContent className="flex w-auto items-center justify-center p-2">
                                  <h1 className="text-xs">{usuario.email}</h1>
                                </HoverCardContent>
                              </HoverCard>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </TableCell>
    </TableRow>
  )
}
