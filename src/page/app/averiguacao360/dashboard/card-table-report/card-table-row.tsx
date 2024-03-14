import { format, parse } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import {
  ClipboardPenLine,
  FilePenLine,
  Mail,
  PhoneCall,
  UsersRound,
} from 'lucide-react'
import { ReactNode } from 'react'

import { ProgressStatus } from '@/components/progress-status'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion-steps-table-row'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
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
  qtdEtapasFormularioPendente: number
  // usuarioResponsavel: UsuarioResponsavel
  grupoUsuariosPermitido: UsuariosPermitido[]
  formulariosSelecionados: {
    id: string
    name: string
    label?: string
    status: string
    description?: string
  }[]
}

export function CardTableRowReport({
  numeroProcesso,
  cliente,
  statusReport,
  dataEntrada,
  linkFormsReport,
  qtdEtapasFormulario,
  qtdEtapasFormularioPendente,
  formulariosSelecionados,
  grupoUsuariosPermitido,
}: CardTableRowReportProps) {
  // Calcula a diferença de dias entre a data de entrada e a data atual
  const dataParseada = parse(dataEntrada, 'dd-MM-yyyy HH:mm:ss', new Date())
  const agora = new Date()
  const diferencaTempo = Math.abs(agora.getTime() - dataParseada.getTime())
  const diferencaDias = Math.ceil(diferencaTempo / (1000 * 60 * 60 * 24))

  const dataFormatada = format(dataParseada, 'dd/MM/yy', { locale: ptBR })

  const nomeClienteFormatado = cliente
    .toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ')

  // Calcular a porcentagem de progresso
  const progresso =
    qtdEtapasFormulario === 0
      ? 100
      : Math.floor(
          ((qtdEtapasFormulario - qtdEtapasFormularioPendente) /
            qtdEtapasFormulario) *
            100,
        )

  function getStatusClasses(status: string) {
    switch (status) {
      case 'Pendente': // Pendente
        return {
          bgCard: 'bg-amber-50',
          bg: 'bg-amber-600',
          border: 'border-amber-600',
          text: 'text-amber-600',
        }
      case 'Formalizando': // Formalizando
        return {
          bgCard: 'bg-blue-50',
          bg: 'bg-blue-600',
          border: 'border-blue-600',
          text: 'text-blue-600',
        }
      case 'Finalizado': // Finalizado
        return {
          bgCard: 'bg-green-50',
          bg: 'bg-green-600',
          border: 'border-green-600',
          text: 'text-green-600',
        }
      case 'Aprovado': // Aprovado
        return {
          bgCard: 'bg-purple-50',
          bg: 'bg-purple-600',
          border: 'border-purple-600',
          text: 'text-purple-600',
        }
      case 'Corrigir': // Corrigir
        return {
          bgCard: 'bg-red-50',
          bg: 'bg-red-200',
          border: 'border-red-600',
          text: 'text-red-600',
        }
      case 'Rejeitado': // Rejeitado
        return {
          bgCard: 'bg-gray-50',
          bg: 'bg-gray-200',
          border: 'border-gray-600',
          text: 'text-gray-600',
        }
      default:
        return { bg: '', border: '', text: '' }
    }
  }

  return (
    <TableRow className=" cursor-pointer hover:bg-blue-50/50">
      {/* Status */}
      <TableCell className=" py-1">
        <div className="flex items-center justify-end gap-1 ">
          <div className=" w-[16px] ">{statusReport}</div>
        </div>
      </TableCell>
      {/* Cliente / Segurado */}
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
      {/* Progresso */}
      <TableCell className="px-1  py-1">
        <div className="flex w-[80px] flex-col items-center gap-2">
          <h1 className="text-xs font-semibold">{progresso} %</h1>
          <ProgressStatus initialValue={1} finalValue={progresso} delay={500} />
        </div>
      </TableCell>
      {/* Etapas */}
      <TableCell className=" bg-blue-50/50 px-1 py-1">
        <div className="flex w-[80px] flex-col items-center">
          <h1 className="text-xs font-semibold">
            {progresso === 100
              ? `${qtdEtapasFormulario}`
              : `${qtdEtapasFormularioPendente}/${qtdEtapasFormulario}`}
          </h1>
          <Popover>
            <PopoverTrigger
              asChild
              className="text-[11.63px] text-muted-foreground"
            >
              <span className="  px-0 py-0 hover:text-blue-400 hover:underline  ">
                {progresso === 100
                  ? `Concluída(s)`
                  : `${qtdEtapasFormularioPendente} Pendente(s)`}
              </span>
            </PopoverTrigger>
            <PopoverContent className="w-auto grid-cols-2 rounded-lg border border-blue-200 p-4">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="">
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
                    Formulários vinculados ao relatório
                  </span>
                  <div className="flex max-h-[300px] flex-col gap-2 overflow-y-auto">
                    {/* border-blue-100 bg-blue-50/30 */}
                    {formulariosSelecionados?.map((forms) => {
                      return (
                        <Accordion
                          key={forms.id}
                          type="single"
                          collapsible
                          className=""
                        >
                          <AccordionItem
                            value="item-1"
                            className={` w-[400px] max-w-[400px] rounded-sm border ${getStatusClasses(forms.status).bgCard} ${getStatusClasses(forms.status).border}  p-1 `}
                          >
                            <AccordionTrigger className="flex  p-0  font-semibold hover:no-underline ">
                              <div className="flex items-center gap-2 ">
                                <ClipboardPenLine size={15} />
                                <span className="text-xs font-semibold">
                                  {forms.label}
                                </span>
                                <div className="flex items-center gap-1">
                                  <div
                                    className={`h-2 w-2 rounded-full ${getStatusClasses(forms.status).bg}`}
                                  />
                                  <span
                                    className={`text-[11.63px] font-semibold ${getStatusClasses(forms.status).text}`}
                                  >
                                    {forms.status}
                                  </span>
                                </div>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="p-0">
                              <span className="pr-2 text-[11.63px] font-normal text-muted-foreground">
                                {forms.description}
                              </span>
                              <Button
                                variant="link"
                                className="h-auto w-auto cursor-pointer p-0 text-[11.63px] font-normal  hover:text-blue-400"
                                onClick={linkFormsReport}
                              >
                                Editar
                              </Button>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      )
                    })}
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </TableCell>
      {/* Data */}
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
          <Button
            variant="link"
            asChild
            className="h-auto w-auto cursor-pointer p-0 text-blue-950 hover:text-blue-400"
            onClick={linkFormsReport}
            title="Editar relatório"
          >
            <FilePenLine size={20} strokeWidth={1.5} />
          </Button>
          {/* Grupo de Averiguação */}
          <Popover>
            <PopoverTrigger className="h-auto w-auto cursor-pointer  hover:text-blue-400">
              <UsersRound size={20} strokeWidth={1.5} />
            </PopoverTrigger>
            <PopoverContent className="w-auto grid-cols-2 rounded-lg border border-blue-200 p-4">
              {/* usuários */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-md bg-blue-100">
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
            </PopoverContent>
          </Popover>
        </div>
      </TableCell>
    </TableRow>
  )
}
