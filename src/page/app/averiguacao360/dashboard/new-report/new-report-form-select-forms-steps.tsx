import { ArrowDown } from 'lucide-react'
import { useEffect, useState } from 'react'

import { FormSwitch } from '@/components/form-switch'

const collectionForms = [
  {
    id: '1',
    name: 'form1_Cliente_Segurado',
    label: 'Segurado',
    description:
      'Informações sobre a parte segurada, incluindo nº processo, natureza do sinistro, CNPJ e nome do cliente.',
  },
  {
    id: '2',
    name: 'form2_Caracteristica_Sinistro',
    label: 'Característica do Sinistro',
    description:
      'Detalhes sobre a natureza e extensão do sinistro, incluindo data, hora e qualquer dano observado.',
  },
  {
    id: '3',
    name: 'form3_Cronologia_Sinistro',
    label: 'Cronologia do Sinistro',
    description:
      'Sequência temporal dos eventos relacionados ao sinistro, destacando a ordem e os horários das atividades relevantes.',
  },
  {
    id: '4',
    name: 'form4_Do_Carregamento',
    label: 'Do Carregamento',
    description:
      'Detalhes sobre o processo de carregamento, incluindo local, responsáveis e métodos utilizados.',
  },
  {
    id: '5',
    name: 'form5_Motorista',
    label: 'Motorista',
    description:
      'Informações sobre o condutor envolvido, incluindo nome, licença, histórico e quaisquer observações pertinentes.',
  },
  {
    id: '6',
    name: 'form6_Ajudantes',
    label: 'Ajudantes',
    description:
      'Detalhes sobre qualquer pessoa auxiliando no processo, incluindo identificação, papel e envolvimento.',
  },
  {
    id: '7',
    name: 'form7_Veiculo_Transportador',
    label: 'Veículo Transportador',
    description:
      'Informações sobre o veículo utilizado para transportar a carga, incluindo placa, modelo e condição.',
  },
  {
    id: '8',
    name: 'form8_Orgao_Policial',
    label: 'Órgão Policial',
    description:
      'Registro de qualquer envolvimento das autoridades policiais, incluindo relatórios e documentos fornecidos.',
  },
  {
    id: '9',
    name: 'form9_Gerenciamento_Risco_Veiculo',
    label: 'Gerenciamento de Risco – Veículo',
    description:
      'Avaliação das medidas de segurança tomadas em relação ao veículo envolvido no sinistro.',
  },
  {
    id: '10',
    name: 'form10_Sistemas_Protecao_Carregamento',
    label: 'Sistemas Protecionais do Carregamento',
    description:
      'Descrição dos sistemas de segurança implementados durante o carregamento da carga.',
  },
  {
    id: '11',
    name: 'form11_Declaracao_Motorista_Ajudante',
    label: 'Declaração do Motorista e Ajudante(s)',
    description:
      'Relatos formais do condutor e outros envolvidos, descrevendo sua perspectiva sobre os eventos.',
  },
  {
    id: '12',
    name: 'form12_Gerenciamento_Risco_Deposito',
    label: 'Gerenciamento de Risco – Depósito',
    description:
      'Avaliação das medidas de segurança no local de armazenamento ou depósito da carga.',
  },
  {
    id: '13',
    name: 'form13_Locais_Evento',
    label: 'Locais do Evento',
    description:
      'Mapeamento e descrição dos locais relacionados ao sinistro, incluindo coordenadas geográficas se aplicável.',
  },
  {
    id: '14',
    name: 'form14_Resumo_Averiguacoes',
    label: 'Das Averiguações',
    description:
      'Resultados e conclusões preliminares de todas as investigações realizadas até o momento.',
  },
  {
    id: '15',
    name: 'form15_Recuperacao_Carga',
    label: 'Recuperação da Carga',
    description:
      'Estratégias e ações empreendidas para recuperar a carga perdida ou danificada.',
  },
  {
    id: '16',
    name: 'form16_Anexos_Fotograficos',
    label: 'Anexos Fotográficos',
    description:
      'Registro visual através de fotografias que documentam o sinistro, locais e evidências relevantes.',
  },
  {
    id: '17',
    name: 'form17_Conclusao',
    label: 'Conclusão',
    description:
      'Resumo geral das descobertas e recomendações para a resolução do sinistro.',
  },
]

export function NewReportFormSelectFormsSteps() {
  const [isScrollable, setIsScrollable] = useState(false)

  useEffect(() => {
    const container = document.getElementById('scroll-container')
    const checkScroll = () => {
      if (container) {
        setIsScrollable(
          container.scrollHeight - container.scrollTop > container.clientHeight,
        )
      }
    }

    if (container) {
      container.addEventListener('scroll', checkScroll)
    }
    checkScroll() // Verifique a rolagem inicial

    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScroll)
      }
    }
  }, [])

  return (
    <div className="rounded-lg border border-blue-100 p-4 shadow-input-form ">
      <div className="">
        <div className="pb-4">
          <h1 className="text-base font-medium text-blue-950">
            Formulários vinculados ao relatório
          </h1>
          <span className="text-xs text-muted-foreground">
            Escolha os formulários necessários para a geração do relatório.
          </span>
        </div>
        <div
          id="scroll-container"
          className=" max-h-[300px] space-y-2 overflow-y-auto"
        >
          {collectionForms.map((form, index) => (
            <FormSwitch key={index} {...form} />
          ))}
        </div>
        <div className="flex h-2 w-full items-center justify-center text-blue-200 ">
          {isScrollable && <ArrowDown className="animate-bounce" size={20} />}
        </div>
      </div>
    </div>
  )
}
