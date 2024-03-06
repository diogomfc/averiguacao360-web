import { FilePenLine, RefreshCcw, UsersRound } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { ProgressStatus } from '@/components/progress-status'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { Separator } from '@/components/ui/separator'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { CardNewReport } from './card-new-report'
import { CardStatusReport, ItemCardStatus } from './card-status-report'
import { CardStepStatusReport } from './card-step-status-report'
import { CardTableListReport } from './card-table/card-table-list-report'
// import { TableListRow } from './card-table/table-row'

// const usuariosPerfil = [
//   {
//     id: 1,
//     nome: 'João da Silva',
//     avatar: 'https://randomuser.me/api',
//   },
//   {
//     id: 2,
//     nome: 'Maria Oliveira',
//     avatar: 'https://randomuser.me/api',
//   },
//   {
//     id: 3,
//     nome: 'José Santos',
//     avatar: 'https://randomuser.me/api',
//   },
//   {
//     id: 4,
//     nome: 'Ana Souza',
//     avatar: 'https://randomuser.me/api',
//   },
// ]

export function DashboardAveriguacao360() {
  return (
    <>
      <Helmet title="Averiguação360 - Dashboard" />
      <div className="grid grid-cols-12 gap-4 px-4 pt-4">
        <header className="col-span-12 bg-white">
          <Separator className="h-1 bg-gradient-to-r from-white via-blue-50 to-white" />
          <div className="flex items-center gap-5 p-2">
            <img
              src="/averiguacao360/logo-averiguacao360.svg"
              alt="Averiguação360"
              width={100}
              height={100}
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-medium">
                <strong>Averiguação360</strong>
              </h1>
              <div className="flex">
                <p className="text-sm text-muted-foreground">
                  Oferece uma funcionalidade única para gerar relatórios de
                  averiguação personalizados em formato PDF, que se adaptam ao
                  progresso da investigação. Essa capacidade de entrega de
                  relatórios precisos e detalhados torna o processo de tomada de
                  decisões mais eficaz e acessível.
                </p>
              </div>
            </div>
          </div>
          <Separator className="h-1 bg-gradient-to-r from-white via-blue-50 to-white" />
        </header>
        <main className="col-span-12 flex flex-col gap-5">
          {/* Cards */}
          <section className="grid grid-cols-6 gap-5 lg:grid-cols-12">
            <div className="relative col-span-3 ">
              <CardNewReport
                title="Relatório"
                description="Relatorio de Averiguação"
                icon="averiguacao360/icons/icon-relatorio.svg"
                link="/averiguacao360/list-reports"
                qtd={10}
              />
            </div>
            <div className="relative col-span-3">
              <CardStatusReport
                title="Relatório Status"
                icon="averiguacao360/icons/icon-relatorio-status.svg"
              >
                <div className="flex gap-16 lg:gap-4">
                  <ItemCardStatus
                    qtd={25}
                    statusConclusao="Recuperado"
                    description="Recuperado"
                    link="/averiguacao360/recuperados"
                  />
                  <ItemCardStatus
                    qtd={15}
                    statusConclusao="Irreversivel"
                    description="Irreversíveis"
                    link="/averiguacao360/irreversivel"
                  />
                </div>
              </CardStatusReport>
            </div>
            <div className="relative col-span-6">
              <CardTableListReport
                title="Meus relatórios"
                description="Exibindo os 4 relatórios mais recentes."
                icon="averiguacao360/icons/icon-relatorio-list.svg"
                link="/averiguacao360/list-reports"
              >
                {/* Table List */}
                <Table>
                  <TableHeader className="bg-blue-50/50">
                    <TableRow className=" text-xs hover:bg-transparent">
                      <TableHead className="flex items-center justify-end">
                        <RefreshCcw
                          size={16}
                          aria-label="Atualizar"
                          className="cursor-pointer transition-transform duration-500 ease-in-out hover:rotate-180 hover:transform hover:opacity-50"
                          onClick={() => {}}
                        />
                      </TableHead>
                      <TableHead className="pl-0">Segurado</TableHead>
                      <TableHead className="w-[80px] ">Progresso</TableHead>
                      <TableHead className="w-[80px] ">Etapas</TableHead>
                      <TableHead className="w-[80px] ">Data</TableHead>
                      <TableHead className="w-[80px] "></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className=" ">
                    <TableRow className=" cursor-pointer  hover:bg-blue-50/50">
                      <TableCell className=" py-1">
                        <div className="flex items-center justify-end gap-1 ">
                          <div className=" w-[16px] bg-blue-50 ">
                            <img
                              src="averiguacao360/icons/icon-relatorio-revisao.svg"
                              alt="Relatório"
                            />
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className=" max-w-[110px]  px-0 py-1 md:w-full 2xl:max-w-full">
                        <div className="flex flex-col justify-center ">
                          <h1 className=" truncate text-xs font-semibold">
                            João da Silva Ribeiro lima silva silva silva silva
                            silva
                          </h1>
                          <span className="text-[11.63px] text-muted-foreground ">
                            Nº 400.0001
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="px-1  py-1">
                        <div className="flex w-[80px] flex-col items-center gap-2">
                          <h1 className="text-xs font-semibold">25%</h1>
                          <ProgressStatus
                            initialValue={1}
                            finalValue={25}
                            delay={500}
                          />
                        </div>
                      </TableCell>
                      <TableCell className=" px-1 py-1">
                        <div className="flex w-[80px] flex-col items-center">
                          <h1 className="text-xs font-semibold">9/18</h1>
                          <span className="text-[11.63px] text-muted-foreground">
                            {18 - 9} pendente
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className=" px-1 py-1">
                        <div className="flex flex-col  items-center">
                          <h1 className="text-xs font-semibold">15/09/2021</h1>
                          <span className="text-[11.63px] text-muted-foreground">
                            há 25 dia(s)
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
                              onClick={() => {}}
                            >
                              <FilePenLine size={20} strokeWidth={1.5} />
                            </HoverCardTrigger>
                            <HoverCardContent className="h-auto w-auto ">
                              <span className="text-muted-foreground ">
                                Editar relatório
                              </span>
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
                            </HoverCardContent>
                          </HoverCard>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow className=" cursor-pointer  hover:bg-blue-50/50">
                      <TableCell className=" py-1">
                        <div className="flex items-center justify-end gap-1 ">
                          <div className=" w-[16px] bg-blue-50 ">
                            <img
                              src="averiguacao360/icons/icon-relatorio-revisao.svg"
                              alt="Relatório"
                            />
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className=" max-w-[110px]  px-0 py-1 md:w-full 2xl:max-w-full">
                        <div className="flex flex-col justify-center ">
                          <h1 className=" truncate text-xs font-semibold">
                            João da Silva Ribeiro lima silva silva silva silva
                            silva
                          </h1>
                          <span className="text-[11.63px] text-muted-foreground ">
                            Nº 400.0001
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="px-1  py-1">
                        <div className="flex w-[80px] flex-col items-center gap-2">
                          <h1 className="text-xs font-semibold">25%</h1>
                          <ProgressStatus
                            initialValue={1}
                            finalValue={25}
                            delay={500}
                          />
                        </div>
                      </TableCell>
                      <TableCell className=" px-1 py-1">
                        <div className="flex w-[80px] flex-col items-center">
                          <h1 className="text-xs font-semibold">9/18</h1>
                          <span className="text-[11.63px] text-muted-foreground">
                            {18 - 9} pendente
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className=" px-1 py-1">
                        <div className="flex flex-col  items-center">
                          <h1 className="text-xs font-semibold">15/09/2021</h1>
                          <span className="text-[11.63px] text-muted-foreground">
                            há 25 dia(s)
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
                              onClick={() => {}}
                            >
                              <FilePenLine size={20} strokeWidth={1.5} />
                            </HoverCardTrigger>
                            <HoverCardContent className="h-auto w-auto ">
                              <span className="text-muted-foreground ">
                                Editar relatório
                              </span>
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
                            </HoverCardContent>
                          </HoverCard>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow className=" cursor-pointer  hover:bg-blue-50/50">
                      <TableCell className=" py-1">
                        <div className="flex items-center justify-end gap-1 ">
                          <div className=" w-[16px] bg-blue-50 ">
                            <img
                              src="averiguacao360/icons/icon-relatorio-revisao.svg"
                              alt="Relatório"
                            />
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className=" max-w-[110px]  px-0 py-1 md:w-full 2xl:max-w-full">
                        <div className="flex flex-col justify-center ">
                          <h1 className=" truncate text-xs font-semibold">
                            João da Silva Ribeiro lima silva silva silva silva
                            silva
                          </h1>
                          <span className="text-[11.63px] text-muted-foreground ">
                            Nº 400.0001
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="px-1  py-1">
                        <div className="flex w-[80px] flex-col items-center gap-2">
                          <h1 className="text-xs font-semibold">25%</h1>
                          <ProgressStatus
                            initialValue={1}
                            finalValue={25}
                            delay={500}
                          />
                        </div>
                      </TableCell>
                      <TableCell className=" px-1 py-1">
                        <div className="flex w-[80px] flex-col items-center">
                          <h1 className="text-xs font-semibold">9/18</h1>
                          <span className="text-[11.63px] text-muted-foreground">
                            {18 - 9} pendente
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className=" px-1 py-1">
                        <div className="flex flex-col  items-center">
                          <h1 className="text-xs font-semibold">15/09/2021</h1>
                          <span className="text-[11.63px] text-muted-foreground">
                            há 25 dia(s)
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
                              onClick={() => {}}
                            >
                              <FilePenLine size={20} strokeWidth={1.5} />
                            </HoverCardTrigger>
                            <HoverCardContent className="h-auto w-auto ">
                              <span className="text-muted-foreground ">
                                Editar relatório
                              </span>
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
                            </HoverCardContent>
                          </HoverCard>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow className=" cursor-pointer  hover:bg-blue-50/50">
                      <TableCell className=" py-1">
                        <div className="flex items-center justify-end gap-1 ">
                          <div className=" w-[16px] bg-blue-50 ">
                            <img
                              src="averiguacao360/icons/icon-relatorio-revisao.svg"
                              alt="Relatório"
                            />
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className=" max-w-[110px]  px-0 py-1 md:w-full 2xl:max-w-full">
                        <div className="flex flex-col justify-center ">
                          <h1 className=" truncate text-xs font-semibold">
                            João da Silva Ribeiro lima silva silva silva silva
                            silva
                          </h1>
                          <span className="text-[11.63px] text-muted-foreground ">
                            Nº 400.0001
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="px-1  py-1">
                        <div className="flex w-[80px] flex-col items-center gap-2">
                          <h1 className="text-xs font-semibold">25%</h1>
                          <ProgressStatus
                            initialValue={1}
                            finalValue={25}
                            delay={500}
                          />
                        </div>
                      </TableCell>
                      <TableCell className=" px-1 py-1">
                        <div className="flex w-[80px] flex-col items-center">
                          <h1 className="text-xs font-semibold">9/18</h1>
                          <span className="text-[11.63px] text-muted-foreground">
                            {18 - 9} pendente
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className=" px-1 py-1">
                        <div className="flex flex-col  items-center">
                          <h1 className="text-xs font-semibold">15/09/2021</h1>
                          <span className="text-[11.63px] text-muted-foreground">
                            há 25 dia(s)
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
                              onClick={() => {}}
                            >
                              <FilePenLine size={20} strokeWidth={1.5} />
                            </HoverCardTrigger>
                            <HoverCardContent className="h-auto w-auto ">
                              <span className="text-muted-foreground ">
                                Editar relatório
                              </span>
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
                            </HoverCardContent>
                          </HoverCard>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                {/* <div className="flex flex-col items-center justify-center gap-4 p-4">
                  <img
                    src="averiguacao360/icons/icon-relatorio-list.svg"
                    alt="Relatório"
                    width={50}
                    height={50}
                    className="opacity-10"
                  />
                  <h1 className="text-lg font-semibold">
                    Você ainda não possui relatórios
                  </h1>
                  <p className="text-center text-sm">
                    Crie um novo relatório para começar a utilizar o sistema
                  </p>
                </div> */}
              </CardTableListReport>
            </div>
          </section>

          {/* Cards Step Status */}
          <section className="grid grid-cols-6 gap-5 lg:grid-cols-12">
            <div className="relative col-span-3">
              <CardStepStatusReport
                description="Relatórios em processo de Revisão"
                status="Revisao"
                qtd={25}
                link="/averiguacao360/revisao"
              />
            </div>
            <div className="relative col-span-3">
              <CardStepStatusReport
                description="Relatórios aprovados para emissão"
                status="Aprovado"
                qtd={5}
                link="/averiguacao360/aprovados"
              />
            </div>
            <div className="relative col-span-3">
              <CardStepStatusReport
                description="Relatórios emitidos"
                status="Emitido"
                qtd={85}
                link="/averiguacao360/emitidos"
              />
            </div>
            <div className="relative col-span-3">
              <CardStepStatusReport
                description="Relatórios retornados para correção"
                status="Corrigir"
                qtd={3}
                link="/averiguacao360/corrigir"
              />
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
