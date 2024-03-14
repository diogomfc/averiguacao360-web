import { RelatorioFiltrado } from '@/types/typesAll'

export function countStatusSteps(
  relatorios: RelatorioFiltrado[],
): Record<string, Record<string, number>> {
  const countStatusStepsRelatorio: Record<string, Record<string, number>> = {}

  // Iterar sobre cada relatório
  relatorios.forEach((relatorio) => {
    const contadorPorStatus: Record<string, number> = {}

    // Verificar se relatorio.formularios e relatorio.formularios.etapas não são undefined
    if (relatorio.formularios && relatorio.formularios.etapas) {
      Object.values(relatorio.formularios.etapas).forEach((etapa) => {
        // Verificar se etapa.status está definido
        if (etapa.status) {
          // Incrementar o contador para o status atual
          contadorPorStatus[etapa.status] =
            (contadorPorStatus[etapa.status] || 0) + 1
        }
      })
    }

    // Armazenar a contagem de etapas para o ID do relatório atual
    countStatusStepsRelatorio[relatorio.id] = contadorPorStatus
  })

  return countStatusStepsRelatorio
}
