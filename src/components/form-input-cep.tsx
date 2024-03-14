import { useMask } from '@react-input/mask'
import { Sparkles } from 'lucide-react'
import { ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

export interface InputCep {
  name: string
  placeholder?: string
  rightIcon?: ReactNode
}

export interface InputAddressNumber {
  name: string
  placeholder?: string
  rightIcon?: ReactNode
}

export interface FormAddressProps {
  nameCep: string
  nameNumero: string
  label?: string
  description?: string
  placeholder?: string
  rightIcon?: string
  isOpenCep?: boolean
  endereco?: string
  numero?: string
  bairro?: string
  cidade?: string
  uf?: string
  complemento?: string
}

function FormInputCep({ name, placeholder, rightIcon }: InputCep) {
  const { control } = useFormContext()

  const cepRef = useMask({
    mask: '_____-___',
    replacement: { _: /\d/ },
  })

  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="">
            <div className="col-span-3">
              <FormControl className="">
                <>
                  <div className="relative flex items-center">
                    <Input
                      placeholder={placeholder}
                      {...field}
                      ref={cepRef}
                      className={`shadow-input-form hover:shadow-input-form-hover h-12 border bg-white px-4 hover:border-blue-400 hover:bg-white hover:outline-none focus:border-blue-400 ${
                        field.value ? 'border-blue-400' : 'border-blue-200'
                      } focus:shadow-input-form-hover placeholder:opacity-20 focus:bg-white
                      focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-50 focus-visible:ring-opacity-50`}
                    />
                    {rightIcon && (
                      <div className="absolute right-4 text-gray-100">
                        {rightIcon}
                      </div>
                    )}
                  </div>
                </>
              </FormControl>
              <div className="p-1">
                <FormMessage className="text-xs" />
              </div>
            </div>
          </FormItem>
        )}
      />
    </>
  )
}

function FormInputAddressNumber({ name, placeholder }: InputAddressNumber) {
  const { control } = useFormContext()

  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="">
            <div className="">
              <FormControl className="">
                <>
                  <div className="flex items-center">
                    <Input
                      placeholder={placeholder}
                      {...field}
                      className={`shadow-input-form hover:shadow-input-form-hover h-12 border bg-white px-4 hover:border-blue-400 hover:bg-white hover:outline-none focus:border-blue-400 ${
                        field.value ? 'border-blue-400' : 'border-blue-200'
                      } focus:shadow-input-form-hover placeholder:opacity-20 focus:bg-white
                      focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-50 focus-visible:ring-opacity-50`}
                    />
                  </div>
                </>
              </FormControl>
              <div className="p-1">
                <FormMessage className="text-xs" />
              </div>
            </div>
          </FormItem>
        )}
      />
    </>
  )
}

export function FormAddress({
  nameCep,
  nameNumero,
  label,
  description,
  isOpenCep,
  endereco,
  numero,
  bairro,
  cidade,
  uf,
}: FormAddressProps) {
  return (
    <div className="grid grid-cols-10 gap-4 ">
      <div className="col-span-5 flex flex-col ">
        <FormLabel className="text-base font-medium text-blue-400">
          {label}
        </FormLabel>
        <FormDescription className="text-xs text-muted-foreground">
          {description}
        </FormDescription>
      </div>

      <div className="col-span-5 pt-2">
        <div className="grid grid-cols-5 ">
          <div className="col-span-3 pr-2">
            <FormInputCep
              name={nameCep}
              placeholder="Cep"
              rightIcon={
                <Sparkles
                  size={20}
                  className="text-blue-400/70"
                  strokeWidth={1.5}
                />
              }
            />
          </div>

          <div className="col-span-2 ">
            <FormInputAddressNumber name={nameNumero} placeholder="Número" />
          </div>

          {isOpenCep && (
            <div className="col-span-5 ">
              <div className="flex flex-col rounded-sm border border-blue-400 bg-blue-400/10">
                <div className="flex flex-col gap-2 px-4 py-2">
                  <div className="text-xs text-blue-700">
                    <span className="font-semibold"> Endereço:</span>
                    <div className="flex gap-1">
                      <span>{endereco}</span>
                      <span>nº {numero}</span>
                    </div>
                    <div className="flex gap-1">
                      <span>{cidade}</span> - <span>{uf}</span>
                    </div>
                    <div className="flex gap-1">
                      <span>{bairro}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
