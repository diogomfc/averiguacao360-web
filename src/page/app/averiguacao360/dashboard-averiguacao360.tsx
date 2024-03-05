import { Helmet } from 'react-helmet-async'

import { CardNewReport } from '@/components/averiguacao360/dashboard/card-new-report'
import {
  CardStatusReport,
  ItemCardStatus,
} from '@/components/averiguacao360/dashboard/card-status-report'
import { CardStepStatusReport } from '@/components/averiguacao360/dashboard/card-step-status-report'
import { CardTableListReport } from '@/components/averiguacao360/dashboard/card-table/card-table-list-report'
import { Separator } from '@/components/ui/separator'

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
                description="Exibindo os 3 relatórios mais recentes."
                icon="averiguacao360/icons/icon-relatorio-list.svg"
                link="/averiguacao360/list-reports"
              >
                {/* Table List */}
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
