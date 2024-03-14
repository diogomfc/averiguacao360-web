import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { format } from 'date-fns'
import { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { getAllUsersProfile } from '@/api/get-all-users'
import { getCNPJData } from '@/api/get-cnpj'
import { getProfile } from '@/api/get-profile'
import { registerNewReport } from '@/api/register-new-report'
import { Form } from '@/components/ui/form'

import { NewReportDialog } from './new-report-dialog'
import { NewReportFormBaseInfo } from './new-report-form-base-info'
import { NewReportFormSelectFormsSteps } from './new-report-form-select-forms-steps'
import { NewReportFormSelectUsersGroup } from './new-report-form-select-users-group'
import { NewReportSubmitSuccessful } from './new-report-submit-successful'
import { NewReportSubmitting } from './new-report-submitting'

export type FormsSteps = {
  form1_Cliente_Segurado: boolean
  form2_Caracteristica_Sinistro: boolean
  form3_Cronologia_Sinistro: boolean
  form4_Do_Carregamento: boolean
  form5_Motorista: boolean
  form6_Ajudantes: boolean
  form7_Veiculo_Transportador: boolean
  form8_Orgao_Policial: boolean
  form9_Gerenciamento_Risco_Veiculo: boolean
  form10_Sistemas_Protecao_Carregamento: boolean
  form11_Declaracao_Motorista_Ajudante: boolean
  form12_Gerenciamento_Risco_Deposito: boolean
  form13_Locais_Evento: boolean
  form14_Resumo_Averiguacoes: boolean
  form15_Recuperacao_Carga: boolean
  form16_Anexos_Fotograficos: boolean
  form17_Conclusao: boolean
}

const newReportSchema = z
  .object({
    numero_processo: z.string().min(8, {
      message: 'Informe o Nº do processo gerado pela torre de operações.',
    }),
    natureza_sinistro: z.enum(['Roubo', 'Furto', 'Apreensão', 'Outros'], {
      required_error: 'Selecione a natureza do sinistro.',
    }),
    cnpj: z.string().min(8, {
      message: 'O campo CNPJ é obrigatório',
    }),
    cliente: z.string().min(8, {
      message: 'Favor informar o nome do cliente segurado.',
    }),
    form1_Cliente_Segurado: z.boolean(),
    form2_Caracteristica_Sinistro: z.boolean(),
    form3_Cronologia_Sinistro: z.boolean(),
    form4_Do_Carregamento: z.boolean(),
    form5_Motorista: z.boolean(),
    form6_Ajudantes: z.boolean(),
    form7_Veiculo_Transportador: z.boolean(),
    form8_Orgao_Policial: z.boolean(),
    form9_Gerenciamento_Risco_Veiculo: z.boolean(),
    form10_Sistemas_Protecao_Carregamento: z.boolean(),
    form11_Declaracao_Motorista_Ajudante: z.boolean(),
    form12_Gerenciamento_Risco_Deposito: z.boolean(),
    form13_Locais_Evento: z.boolean(),
    form14_Resumo_Averiguacoes: z.boolean(),
    form15_Recuperacao_Carga: z.boolean(),
    form16_Anexos_Fotograficos: z.boolean(),
    form17_Conclusao: z.boolean(),
    usuarios_permitidos: z
      .array(z.string())
      .refine((value) => value.some((item) => item), {
        message: 'Selecione pelo menos um analista no grupo',
      }),
  })
  .required()

export type NewReportSchema = z.infer<typeof newReportSchema>

const defaultFormValues = {
  numero_processo: '',
  cnpj: '',
  cliente: '',
  form1_Cliente_Segurado: true,
  form2_Caracteristica_Sinistro: false,
  form3_Cronologia_Sinistro: false,
  form4_Do_Carregamento: false,
  form5_Motorista: false,
  form6_Ajudantes: false,
  form7_Veiculo_Transportador: false,
  form8_Orgao_Policial: false,
  form9_Gerenciamento_Risco_Veiculo: false,
  form10_Sistemas_Protecao_Carregamento: false,
  form11_Declaracao_Motorista_Ajudante: false,
  form12_Gerenciamento_Risco_Deposito: false,
  form13_Locais_Evento: false,
  form14_Resumo_Averiguacoes: false,
  form15_Recuperacao_Carga: false,
  form16_Anexos_Fotograficos: false,
  form17_Conclusao: true,
  usuarios_permitidos: [],
}

// extração dos formulários selecionados de forma dinâmica
const createFormSelected = (formValues: FormsSteps) => {
  const formSelected = Object.keys(formValues)
    .filter(
      (key) => key.startsWith('form') && formValues[key as keyof FormsSteps],
    )
    .map((key) => {
      const formNumberMatch = key.match(/\d+/)
      const formNumber = formNumberMatch ? parseInt(formNumberMatch[0], 10) : 0
      const formName = key
        .replace(/_/g, ' ')
        .replace('form', '')
        .replace(/\d+/g, '')
        .trim()
      return {
        idFormName: key,
        NumberForm: formNumber,
        formName,
      }
    })

  return { formSelected }
}

const extractSelectedForms = (values: FormsSteps) => {
  return createFormSelected(values)
}

// components render
const componentsFormsSteps = [
  {
    label: 'Informações básicas',
    Component: <NewReportFormBaseInfo />,
    fields: ['numero_processo', 'natureza_sinistro', 'cnpj', 'cliente'],
  },
  {
    label: 'Formulários do relatório',
    Component: <NewReportFormSelectFormsSteps />,
    fields: [
      'formularios_selecionados',
      ...Object.keys(defaultFormValues).filter((key) => key.startsWith('form')),
    ],
  },
  {
    label: 'Grupo investigativo',
    Component: <NewReportFormSelectUsersGroup />,
    fields: ['usuarios_permitidos'],
  },
].map((step) => ({ ...step, hasError: false }))

export function NewReportFormGet() {
  const queryClient = useQueryClient()

  // Obtemos os dados do perfil dos usuários através do hook useQuery
  const { data: profileAllUsers } = useQuery({
    queryKey: ['profileAllUsers'],
    queryFn: getAllUsersProfile,
    staleTime: Infinity,
  })

  // Obtemos os dados do perfil do usuário através do hook useQuery
  const { data: profile } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
    staleTime: Infinity,
  })

  // Obtemos os dados do formulário através do hook useForm
  const methods = useForm<NewReportSchema>({
    resolver: zodResolver(newReportSchema),
    criteriaMode: 'all',
    mode: 'all',
    defaultValues: defaultFormValues,
  })

  // Registro de novo relatório
  const { mutateAsync: registerNewReportMutation } = useMutation({
    mutationFn: registerNewReport,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['relatorios'],
      })
    },
  })

  // Busca no profileUsers os id dos usuários selecionados
  const idUserPermitidos = methods.getValues('usuarios_permitidos')
  const idObjects = idUserPermitidos.map((id) => ({ id }))
  const profileAllUsersSelected = profileAllUsers?.filter((user) =>
    idObjects.some((id) => id.id === user.id),
  )

  // Busca de CNPJ
  const { watch, setValue } = methods
  const cnpj = watch('cnpj')
  const cnpjRef = useRef(cnpj)

  useEffect(() => {
    const fetchCNPJData = async () => {
      try {
        const data = await getCNPJData({ cnpj })
        if (cnpjRef.current === cnpj) {
          setValue('cliente', data?.razao_social || '')
        }
      } catch (error) {
        console.error('Erro ao obter dados do CNPJ:', error)
      }
    }

    cnpjRef.current = cnpj

    if (cnpj) {
      fetchCNPJData()
    } else {
      setValue('cliente', '')
    }
  }, [cnpj, setValue])

  if (methods.formState.isSubmitting) {
    return <NewReportSubmitting />
  }

  // Verifica se o formulário foi submetido com sucesso e retorna o componente de sucesso
  if (methods.formState.isSubmitSuccessful) {
    const { formSelected } = extractSelectedForms(methods.getValues())

    // Ordena formSelected por NumberForm
    const newFormSelected = formSelected.sort(
      (a, b) => a.NumberForm - b.NumberForm,
    )

    return (
      <>
        <NewReportSubmitSuccessful
          linkPushReport={() => {}}
          numero_processo={methods.getValues('numero_processo')}
          cliente={methods.getValues('cliente')}
          data_entrada={format(new Date(), 'dd/MM/yy HH:mm:ss')}
          usuario_responsavel={{
            id: profile?.id || '',
            nome: profile?.nome || '',
            email: profile?.email || '',
            telefone: profile?.telefone || '',
            avatar: profile?.avatar || '',
            funcao: profile?.funcao || '',
            criado_em: profile?.criado_em || '',
          }}
          usuarios_permitidos={
            profileAllUsersSelected?.map((user) => ({
              id: user.id,
              nome: user.nome,
              email: user.email,
              telefone: user.telefone,
              avatar: user.avatar,
              funcao: user.funcao,
              criado_em: user?.criado_em,
            })) || []
          }
          formularios_selecionados={newFormSelected.map((form, index) => {
            return {
              idFormName: form.idFormName,
              formName: form.formName,
              step: index + 1,
            }
          })}
        />
      </>
    )
  }

  async function onSubmit(data: NewReportSchema) {
    const { formSelected } = extractSelectedForms(data)
    const idFormSelected = formSelected.map((form) => form.idFormName)

    try {
      await registerNewReportMutation({
        numero_processo: data.numero_processo,
        natureza_sinistro: data.natureza_sinistro,
        cnpj: data.cnpj,
        cliente: data.cliente,
        usuarios_permitidos: idUserPermitidos,
        formularios_selecionados: idFormSelected,
      })
    } catch (error) {
      console.error('Erro ao registrar novo relatório:', error)
    }
  }

  return (
    <Form {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="">
        <NewReportDialog formsSteps={componentsFormsSteps} />
      </form>
    </Form>
  )
}
