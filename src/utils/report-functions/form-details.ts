import { RelatorioFiltrado } from '@/types/typesAll'

export interface FormDetails {
  id: string
  name: string
  label?: string
  status: string
  description?: string
}

// Objeto de mapeamento
const formLabelsAndDescriptions: Record<
  string,
  { label: string; description: string }
> = {
  form1_Cliente_Segurado: {
    label: 'Segurado',
    description:
      'Informações sobre a parte segurada, incluindo nº processo, natureza do sinistro, CNPJ e nome do cliente.',
  },
  form2_Caracteristica_Sinistro: {
    label: 'Característica do Sinistro',
    description:
      'Detalhes sobre a natureza e extensão do sinistro, incluindo data, hora e qualquer dano observado.',
  },
  form3_Cronologia_Sinistro: {
    label: 'Cronologia do Sinistro',
    description:
      'Sequência temporal dos eventos relacionados ao sinistro, destacando a ordem e os horários das atividades relevantes.',
  },
  form4_Do_Carregamento: {
    label: 'Do Carregamento',
    description:
      'Detalhes sobre o processo de carregamento, incluindo local, responsáveis e métodos utilizados.',
  },
  form5_Motorista: {
    label: 'Motorista',
    description:
      'Informações sobre o condutor envolvido, incluindo nome, licença, histórico e quaisquer observações pertinentes.',
  },
  form6_Ajudantes: {
    label: 'Ajudantes',
    description:
      'Detalhes sobre qualquer pessoa auxiliando no processo, incluindo identificação, papel e envolvimento.',
  },
  form7_Veiculo_Transportador: {
    label: 'Veículo Transportador',
    description:
      'Informações sobre o veículo utilizado para transportar a carga, incluindo placa, modelo e condição.',
  },
  form8_Orgao_Policial: {
    label: 'Órgão Policial',
    description:
      'Registro de qualquer envolvimento das autoridades policiais, incluindo relatórios e documentos fornecidos.',
  },
  form9_Gerenciamento_Risco_Veiculo: {
    label: 'Gerenciamento de Risco – Veículo',
    description:
      'Avaliação das medidas de segurança tomadas em relação ao veículo envolvido no sinistro.',
  },
  form10_Sistemas_Protecao_Carregamento: {
    label: 'Sistemas de Proteção do Carregamento',
    description:
      'Descrição dos sistemas de segurança implementados durante o carregamento da carga.',
  },
  form11_Declaracao_Motorista_Ajudante: {
    label: 'Declaração do Motorista e Ajudante',
    description:
      'Relatos formais do condutor e outros envolvidos, descrevendo sua perspectiva sobre os eventos.',
  },
  form12_Gerenciamento_Risco_Deposito: {
    label: 'Gerenciamento de Risco – Depósito',
    description:
      'Avaliação das medidas de segurança tomadas em relação ao depósito envolvido no sinistro.',
  },
  form13_Locais_Evento: {
    label: 'Locais do Evento',
    description:
      'Mapeamento e descrição dos locais relacionados ao sinistro, incluindo coordenadas geográficas se aplicável.',
  },
  form14_Resumo_Averiguacoes: {
    label: 'Resumo das Averiguações',
    description:
      'Resultados e conclusões preliminares de todas as investigações realizadas até o momento.',
  },
  form15_Recuperacao_Carga: {
    label: 'Recuperação da Carga',
    description:
      'Estratégias e ações empreendidas para recuperar a carga perdida ou danificada.',
  },
  form16_Anexos_Fotograficos: {
    label: 'Anexos Fotográficos',
    description:
      'Fotografias e imagens relacionadas ao sinistro, incluindo qualquer dano observado.',
  },
  form17_Conclusao: {
    label: 'Conclusão',
    description:
      'Resumo geral das descobertas e recomendações para a resolução do sinistro.',
  },
}

export function formDetails(relatorios: RelatorioFiltrado[]): FormDetails[] {
  const formDetails: FormDetails[] = []

  // Iterar sobre cada relatório
  relatorios.forEach((relatorio) => {
    // Verificar se relatorio.formularios e relatorio.formularios.etapas não são undefined
    if (relatorio.formularios && relatorio.formularios.etapas) {
      Object.entries(relatorio.formularios.etapas).forEach(
        ([formName, etapa], index) => {
          // Verificar se etapa.status existe
          if (etapa.status) {
            // Adicionar detalhes do formulário ao array formDetails
            formDetails.push({
              id: (index + 1).toString(),
              name: formName,
              label: formLabelsAndDescriptions[formName]?.label || '',
              status: etapa.status,
              description:
                formLabelsAndDescriptions[formName]?.description || '',
            })
          }
        },
      )
    }
  })

  return formDetails
}
