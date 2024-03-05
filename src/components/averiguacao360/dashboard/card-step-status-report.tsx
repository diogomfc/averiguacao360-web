import { Link } from 'react-router-dom'

export interface CardStepStatusReportProps {
  description: string
  status: 'Revisao' | 'Aprovado' | 'Emitido' | 'Corrigir'

  qtd: number
  link: string
}

export function CardStepStatusReport({
  description,
  status,
  qtd,
  link,
}: CardStepStatusReportProps) {
  return (
    <div className="rounded-md border border-blue-200">
      <div className="item-center flex flex-col justify-center rounded-md border-8 border-blue-100 bg-white">
        <main className="flex min-h-[280px] flex-col items-center gap-4  pt-4">
          <div className="flex flex-col items-center justify-center pt-2">
            {status === 'Aprovado' && (
              <>
                <img
                  src="averiguacao360/imgs/img-status-report-aprovados.svg"
                  className="absolute"
                  height={180}
                  width={180}
                  alt="Status Report aprovado"
                />
                <div className="relative top-8 flex h-[80px] w-[80px] items-center justify-center rounded-full border border-blue-100 bg-white p-[2px] shadow-sm shadow-[#20A6B9]">
                  <span className="text-3xl font-semibold text-[#20A6B9]">
                    {qtd}
                  </span>
                </div>
              </>
            )}
            {status === 'Corrigir' && (
              <>
                <img
                  src="averiguacao360/imgs/img-status-report-correcao.svg"
                  className="absolute"
                  height={180}
                  width={180}
                  alt="Status Report correção"
                />
                <div className="relative top-8 flex h-[80px] w-[80px] items-center justify-center rounded-full border border-blue-100 bg-white p-[2px] shadow-sm shadow-red-500">
                  <span className="text-3xl font-semibold text-[#A32833]">
                    {qtd}
                  </span>
                </div>
              </>
            )}
            {status === 'Revisao' && (
              <>
                <img
                  src="averiguacao360/imgs/img-status-report-revisao.svg"
                  className="absolute"
                  height={180}
                  width={180}
                  alt="Reports em revisao"
                />
                <div className="relative top-8 flex h-[80px] w-[80px] items-center justify-center rounded-full border border-blue-100 bg-white p-[2px] shadow-sm shadow-[#FFA000]">
                  <span className="text-3xl font-semibold text-[#FFA000]">
                    {qtd}
                  </span>
                </div>
              </>
            )}
            {status === 'Emitido' && (
              <>
                <img
                  src="averiguacao360/imgs/img-status-report-emitidos.svg"
                  className="absolute"
                  height={180}
                  width={180}
                  alt="Status Report Emitido"
                />
                <div className="relative top-8 flex h-[80px] w-[80px] items-center justify-center rounded-full border border-blue-100 bg-white p-[2px] shadow-sm shadow-blue-300">
                  <span className="text-3xl font-semibold text-primary">
                    {qtd}
                  </span>
                </div>
              </>
            )}
          </div>
          <div className="flex flex-col items-center justify-center gap-4 pt-8">
            <span className="flex  h-[60px] w-[200px] items-center justify-center  text-center text-base font-bold">
              {description}
            </span>
            <Link
              to={link}
              className={`rounded border bg-white px-2 py-1 hover:text-white ${
                status === 'Aprovado'
                  ? ' border-[#20A6B9] text-[#20A6B9] hover:bg-[#20A6B9]'
                  : status === 'Revisao'
                    ? 'border-[#FFA000] text-[#FFA000]  hover:bg-[#FFA000]'
                    : status === 'Corrigir'
                      ? 'border-red-500 text-red-500 hover:bg-red-500'
                      : 'border-blue-300 text-blue-500 hover:bg-blue-500'
              }`}
            >
              <span>Gerenciar</span>
            </Link>
          </div>
        </main>
      </div>
    </div>
  )
}
