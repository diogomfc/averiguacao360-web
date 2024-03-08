export type RelatorioStatus =
  | 'Formalizando'
  | 'Recuperado'
  | 'Irreversivel'
  | 'Revisao'
  | 'Aprovado'
  | 'Emitido'
  | 'Corrigir'

interface RelatorioStatusProps {
  status: RelatorioStatus
}

export function RelatorioStatusIcon({ status }: RelatorioStatusProps) {
  const statusIcons: { [key in RelatorioStatus]: string } = {
    Formalizando: 'icon-relatorio.svg',
    Revisao: 'icon-relatorio-revisao.svg',
    Aprovado: 'icon-relatorio-aprovado.svg',
    Corrigir: 'icon-relatorio-correcao.svg',
    Recuperado: 'icon-relatorio-recuperado.svg',
    Irreversivel: 'icon-relatorio-irreversivel.svg',
    Emitido: '',
  }

  const iconSrc = statusIcons[status]
  if (iconSrc) {
    return (
      <img
        src={`averiguacao360/icons/${iconSrc}`}
        alt={status}
        width={16}
        height={16}
      />
    )
  }

  return null
}
