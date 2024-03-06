import { format, parse } from 'date-fns'
import { FilePenLine, Mail, PhoneCall, UsersRound } from 'lucide-react'

import { ProgressStatus } from '@/components/progress-status'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { TableCell, TableRow } from '@/components/ui/table'
import { UserType } from '@/types/userTypes'

type CardTableRowProps = {
  numeroProcesso: string
  statusReport: React.ReactNode
  cliente: string
  dataEntrada: string
  usuarioResponsavel?: string
  usuariosPerfil: UserType[]
  qtdEtapasFormulario: number
  linkFormsReport: () => void
}

export function TableListRow({
  numeroProcesso,
  cliente,
  statusReport,
  dataEntrada,
  linkFormsReport,
  qtdEtapasFormulario,
  usuariosPerfil,
}: CardTableRowProps) {
  // Calcula a diferença de dias entre a data de entrada e a data atual
  const dataParseada = parse(dataEntrada, 'dd-MM-yyyy HH:mm:ss', new Date())
  const agora = new Date()
  const diferencaTempo = Math.abs(agora.getTime() - dataParseada.getTime())
  const diferencaDias = Math.ceil(diferencaTempo / (1000 * 60 * 60 * 24))

  const dataFormatada = format(dataParseada, 'dd/MM/yy')

  const nomeFormatado = cliente
    .toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ')

  return (
    <>
      <TableRow className="hover:bg-lightMode-colors-blue-50/50 h-[60px] cursor-pointer">
        <TableCell className="">
          <div className="flex items-center justify-end gap-1 ">
            <div className="bg-lightMode-colors-blue-50">{statusReport}</div>
          </div>
        </TableCell>
        <TableCell className="">
          <div className="flex flex-col justify-center xl:w-[200px] 2xl:w-[300px]">
            <h1 className="truncate text-xs font-semibold">{nomeFormatado}</h1>
            <span className="text-xs text-muted-foreground">
              Nº {numeroProcesso}
            </span>
          </div>
        </TableCell>
        <TableCell className="">
          <div className="flex w-[80px] flex-col items-center">
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
        <TableCell className="">
          <div className="flex w-[80px] flex-col items-center">
            <h1 className="text-xs font-semibold">{qtdEtapasFormulario}/18</h1>
            <span className="text-xs text-muted-foreground">
              {18 - qtdEtapasFormulario} pendente
            </span>
          </div>
        </TableCell>
        <TableCell className="">
          <div className="flex w-[60px] flex-col  items-center">
            <h1 className="text-xs font-semibold">{dataFormatada}</h1>
            <span className="text-xs text-muted-foreground">
              há {diferencaDias} dia(s)
            </span>
          </div>
        </TableCell>
        <TableCell className="">
          <div className="flex items-center justify-center gap-1 ">
            {/* Editar */}
            <HoverCard>
              <HoverCardTrigger
                asChild
                className="hover:text-lightMode-colors-blue-400 h-auto w-auto cursor-pointer"
                onClick={linkFormsReport}
              >
                <FilePenLine size={20} strokeWidth={1.5} />
              </HoverCardTrigger>
              <HoverCardContent className="h-auto w-auto ">
                <span className="text-muted-foreground ">Editar relatório</span>
              </HoverCardContent>
            </HoverCard>

            {/* Grupo Averiguação */}
            <HoverCard>
              <HoverCardTrigger
                asChild
                className="hover:text-lightMode-colors-blue-400 h-auto w-auto cursor-pointer"
              >
                <UsersRound size={20} strokeWidth={1.5} />
              </HoverCardTrigger>
              <HoverCardContent
                align="end"
                className="border-lightMode-colors-blue-200 w-auto grid-cols-2 rounded-lg border p-4"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-lightMode-colors-blue-100">
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
                      {usuariosPerfil.map((usuario) => {
                        return (
                          <div
                            key={usuario.id}
                            className="border-lightMode-colors-blue-100 bg-lightMode-colors-blue-50/30 flex items-center justify-between gap-2 rounded-lg border p-2"
                          >
                            <div className="flex gap-2">
                              <Avatar>
                                {usuario.avatar && (
                                  <AvatarImage src={``} alt="Avatar" />
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
                              <div className="border-lightMode-colors-blue-200 hover:bg-lightMode-colors-blue-100 hover:border-lightMode-colors-blue-300 hover:text-lightMode-colors-blue-400 flex h-auto w-auto items-center justify-center rounded-full border bg-white p-2">
                                <HoverCard>
                                  <HoverCardTrigger
                                    asChild
                                    className="cursor-pointer"
                                  >
                                    <PhoneCall size={16} strokeWidth={1.5} />
                                  </HoverCardTrigger>
                                  <HoverCardContent className="flex w-auto items-center justify-center p-2">
                                    <h1>{usuario.telefone}</h1>
                                  </HoverCardContent>
                                </HoverCard>
                              </div>
                              <div className="border-lightMode-colors-blue-200 hover:bg-lightMode-colors-blue-100 hover:border-lightMode-colors-blue-300 hover:text-lightMode-colors-blue-400 flex h-auto w-auto items-center justify-center rounded-full border bg-white p-2">
                                <HoverCard>
                                  <HoverCardTrigger
                                    asChild
                                    className="cursor-pointer "
                                  >
                                    <Mail size={16} strokeWidth={1.5} />
                                  </HoverCardTrigger>
                                  <HoverCardContent className="flex w-auto items-center justify-center p-2">
                                    <h1>{usuario.email}</h1>
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
    </>
  )
}
