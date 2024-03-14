import { Sparkles } from 'lucide-react'

import { FormInput } from '@/components/form-input'
import { FormRadioGroup } from '@/components/form-radio-group'

export enum Natureza_Sinistro {
  Roubo = 'Roubo',
  Furto = 'Furto',
  Apreensão = 'Apreensão',
  Outros = 'Outros',
}

export function NewReportFormBaseInfo() {
  return (
    <div className="rounded-lg border border-blue-100 px-4 py-2 shadow-input-form">
      <FormInput
        name="numero_processo"
        label="Número do processo"
        description="Insira o número do processo gerado pela torre de operações"
        placeholder="Número do processo"
      />
      <FormRadioGroup
        name="natureza_sinistro"
        label="Natureza do Sinistro"
        description="Selecione a natureza do sinistro"
        options={Object.keys(Natureza_Sinistro).map((key) => ({
          value: key,
          label: key,
        }))}
      />
      <FormInput
        name="cnpj"
        label="CNPJ"
        description="Insira o CNPJ do segurado"
        placeholder="CNPJ"
        rightIcon={
          <Sparkles size={20} className="text-blue-400/70" strokeWidth={1.5} />
        }
      />
      <FormInput
        name="cliente"
        label="Segurado"
        description="Insira o nome completo do cliente segurado"
        placeholder="Segurado"
      />
    </div>
  )
}
