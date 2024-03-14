import { Link } from 'react-router-dom'

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'

import { NewReportFormGet } from './new-report/new-report-form-get'

export interface CardButtonProps {
  title: string
  description: string
  icon: string
  link: string
  qtd: string | number
  status?: 'aprovados' | 'correcao' | 'formalizacao' | 'revisao'
}

export function CardNewReport({
  title,
  description,
  icon,
  link,
  qtd,
}: CardButtonProps) {
  return (
    <div className="rounded-md border border-blue-200">
      <div className="item-center flex flex-col justify-center rounded-md border-8 border-blue-100 bg-white">
        <header className="flex items-center gap-2 bg-blue-100/50 p-4">
          <img src={icon} alt="" width={20} height={20} />
          <h1 className="text-base">{title}</h1>
        </header>
        <Separator className="h-1 bg-gradient-to-r from-white via-blue-200 to-white" />
        <main className="flex min-h-[220px] flex-col items-center justify-center gap-4">
          <Link
            to={link}
            className="relative box-border flex flex-col items-center rounded-lg bg-blue-50 p-4"
          >
            <img src={icon} alt="" width={50} height={50} />

            <div className="absolute bottom-[-8px] right-[-16px] flex h-8 w-8 items-center justify-center rounded-full border border-blue-200 bg-white p-2 shadow-lg">
              <span className="text-xs font-semibold text-blue-400">{qtd}</span>
            </div>
          </Link>

          <div className="flex flex-col items-center gap-4">
            <h1 className="text-base font-bold">{description}</h1>
            <div className="flex gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="h-[34px] cursor-pointer rounded border border-blue-300 bg-white px-2 py-1 text-blue-500 hover:bg-blue-500 hover:text-white">
                    Criar Relatório
                  </div>
                </DialogTrigger>

                <DialogContent className="item-center borde flex w-full max-w-[840px] flex-col justify-center gap-0 rounded-xl border-8 border-blue-200 bg-white p-0">
                  <NewReportFormGet />
                </DialogContent>
              </Dialog>
              <Link
                to={link}
                className="h-[34px] rounded border border-blue-300 bg-white px-2 py-1 text-blue-500 hover:bg-blue-500 hover:text-white"
              >
                Gerenciar
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
