import { Link } from 'react-router-dom'

import { Separator } from '@/components/ui/separator'

export interface CardStatusReportProps {
  title: string
  icon: string
  children: React.ReactNode
}

export interface ItemCardStatusProps {
  qtd: number
  statusConclusao: 'Recuperado' | 'Irreversivel'
  description: string
  link: string
}

export function CardStatusReport({
  title,
  icon,
  children,
}: CardStatusReportProps) {
  return (
    <div className="rounded-md border border-blue-200">
      <div className="item-center borde flex flex-col justify-center rounded-md border-8 border-blue-100 bg-white">
        <header className="flex items-center gap-2 bg-blue-100/50 p-4">
          <img src={icon} width={20} height={20} alt="" />
          <h1 className="text-base">{title}</h1>
        </header>
        <Separator className="h-1 bg-gradient-to-r from-white via-blue-200 to-white" />
        <main className="flex min-h-[220px] flex-col items-center justify-center gap-2">
          {children}
        </main>
      </div>
    </div>
  )
}

export function ItemCardStatus({
  qtd,
  statusConclusao,
  link,
  description,
}: ItemCardStatusProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex h-full w-full flex-col items-center justify-center  text-xl font-bold">
        <img
          src={
            statusConclusao === 'Irreversivel'
              ? 'averiguacao360/imgs/img-status-report-irreversivel.svg'
              : 'averiguacao360/imgs/img-status-report-recuperado.svg'
          }
          width={95}
          height={95}
          alt="Status Report"
          className=""
        />
        <span
          className={` absolute top-[34px] ${
            statusConclusao === 'Recuperado'
              ? 'text-green-500 '
              : 'text-red-500 '
          }`}
        >
          {qtd}
        </span>
      </div>
      <div className="flex flex-col items-center gap-5 ">
        <span className="text-base font-bold">{description}</span>
        <Link
          to={link}
          className={`rounded border px-2 py-1 ${
            statusConclusao === 'Recuperado'
              ? ' border-green-500 text-green-500  hover:bg-green-500/10 '
              : 'border-red-500 text-red-500 hover:bg-red-500/10'
          }`}
        >
          Acessar
        </Link>
      </div>
    </div>
  )
}
