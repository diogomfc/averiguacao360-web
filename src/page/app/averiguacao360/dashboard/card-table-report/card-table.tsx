import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Separator } from '@/components/ui/separator'

export interface CardTableReportProps {
  title: string
  description: string
  icon: string
  qtd?: number
  link: string
  children: React.ReactNode
}

export function CardTableReport({
  title,
  description,
  icon,
  link,
  children,
}: CardTableReportProps) {
  return (
    <div className="rounded-md border border-blue-200">
      <div className="item-center borde flex flex-col justify-center rounded-md border-8 border-blue-100 bg-white">
        <header className="flex items-center justify-between gap-2 bg-blue-100/50 px-4 py-2">
          <div className="flex items-center gap-2">
            <img src={icon} alt="" width={20} height={20} />
            <div className="flex flex-col">
              <h1 className="text-base">{title}</h1>
              <span className="text-[10px]  text-muted-foreground">
                {description}
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <Link
              to={link}
              className="flex items-center gap-1 text-sm text-primary hover:text-blue-400"
            >
              <span>Ver mais</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </header>
        <Separator className="h-1 bg-gradient-to-r from-white via-blue-200 to-white" />
        <main className="flex min-h-[220px] flex-col  items-center">
          {children}
        </main>
      </div>
    </div>
  )
}
