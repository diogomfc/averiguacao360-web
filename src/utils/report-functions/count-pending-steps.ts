import { RelatorioFiltrado, StatusFormulario } from '@/types/typesAll'

export function countPendingSteps(
  relatorios: RelatorioFiltrado[],
): Record<string, number> {
  const countStatusPendingStepReport: Record<string, number> = {}

  // Verificar se relatorios não é undefined
  if (relatorios) {
    relatorios.forEach((relatorio) => {
      // Usar o método reduce para calcular o total de etapas pendentes
      const totalPendentes = relatorio.formularios?.etapas
        ? Object.values(relatorio.formularios.etapas).reduce((total, etapa) => {
            // Incrementar o total se o status da etapa for pendente
            return etapa.status === StatusFormulario.Pendente
              ? total + 1
              : total
          }, 0)
        : 0

      // Armazenar a contagem de etapas pendentes para o ID do relatório atual
      countStatusPendingStepReport[relatorio.id] = totalPendentes
    })
  }

  return countStatusPendingStepReport
}
