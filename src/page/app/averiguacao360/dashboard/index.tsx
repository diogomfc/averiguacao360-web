import { useQuery } from '@tanstack/react-query'
import { RefreshCcw } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { gerAllReport } from '@/api/get-all-report'
import {
  RelatorioStatus,
  RelatorioStatusIcon,
} from '@/components/report-status'
import { Separator } from '@/components/ui/separator'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { CardNewReport } from './card-new-report'
import { CardStatusReport, ItemCardStatus } from './card-status-report'
import { CardStepStatusReport } from './card-step-status-report'
import { CardTableReport } from './card-table-report/card-table'
import { CardTableRowReport } from './card-table-report/card-table-row'

export function DashboardAveriguacao360() {
  // /isLoading: isLoadingRelatorios
  const { data: relatorios } = useQuery({
    queryKey: ['relatorios'],
    queryFn: gerAllReport,
  })

  // Verificar status do relatório
  const relatorioData = relatorios?.relatorio_filtrado

  // Quantidade de relatórios status Formalizando
  function totalRelatoriosPorStatus(status: RelatorioStatus) {
    return (
      relatorioData?.filter((relatorio) => relatorio.status === status)
        .length || 0
    )
  }

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
                qtd={totalRelatoriosPorStatus('Formalizando')}
              />
            </div>
            <div className="relative col-span-3">
              <CardStatusReport
                title="Relatório Status"
                icon="averiguacao360/icons/icon-relatorio-status.svg"
              >
                <div className="flex gap-16 lg:gap-4">
                  <ItemCardStatus
                    qtd={totalRelatoriosPorStatus('Recuperado')}
                    statusConclusao="Recuperado"
                    description="Recuperado"
                    link="/averiguacao360/recuperados"
                  />
                  <ItemCardStatus
                    qtd={totalRelatoriosPorStatus('Irreversivel')}
                    statusConclusao="Irreversivel"
                    description="Irreversíveis"
                    link="/averiguacao360/irreversivel"
                  />
                </div>
              </CardStatusReport>
            </div>
            <div className="relative col-span-6">
              <CardTableReport
                title="Meus relatórios"
                description="Exibindo os 4 relatórios mais recentes."
                icon="averiguacao360/icons/icon-relatorio-list.svg"
                link="/averiguacao360/list-reports"
              >
                {/* Table List */}
                {relatorioData?.length ? (
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
                      {relatorioData?.slice(0, 4).map((report) => {
                        return (
                          <CardTableRowReport
                            key={report.id}
                            linkFormsReport={() => {}}
                            statusReport={
                              <RelatorioStatusIcon status={report.status} />
                            }
                            cliente={report.cliente}
                            numeroProcesso={report.numero_processo}
                            dataEntrada={report.data_entrada}
                            qtdEtapasFormulario={
                              report.formularios_selecionados.length
                            }
                            grupoUsuariosPermitido={report.usuarios_permitidos.map(
                              (usuario) => {
                                return {
                                  id: usuario.id,
                                  nome: usuario.nome,
                                  email: usuario.email,
                                  telefone: usuario.telefone,
                                  avatar: usuario.avatar,
                                  funcao: usuario.funcao,
                                }
                              },
                            )}
                          />
                        )
                      })}
                    </TableBody>
                  </Table>
                ) : (
                  <div className="flex flex-col items-center justify-center gap-4 p-4">
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
                  </div>
                )}
              </CardTableReport>
            </div>
          </section>

          {/* Cards Step Status */}
          <section className="grid grid-cols-6 gap-5 lg:grid-cols-12">
            <div className="relative col-span-3">
              <CardStepStatusReport
                description="Relatórios em processo de Revisão"
                status="Revisao"
                qtd={totalRelatoriosPorStatus('Revisao')}
                link="/averiguacao360/revisao"
              />
            </div>
            <div className="relative col-span-3">
              <CardStepStatusReport
                description="Relatórios aprovados para emissão"
                status="Aprovado"
                qtd={totalRelatoriosPorStatus('Aprovado')}
                link="/averiguacao360/aprovados"
              />
            </div>
            <div className="relative col-span-3">
              <CardStepStatusReport
                description="Relatórios emitidos"
                status="Emitido"
                qtd={totalRelatoriosPorStatus('Emitido')}
                link="/averiguacao360/emitidos"
              />
            </div>
            <div className="relative col-span-3">
              <CardStepStatusReport
                description="Relatórios retornados para correção"
                status="Corrigir"
                qtd={totalRelatoriosPorStatus('Corrigir')}
                link="/averiguacao360/corrigir"
              />
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
