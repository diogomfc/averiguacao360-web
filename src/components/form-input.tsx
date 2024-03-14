import { useMask } from '@react-input/mask'
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

export interface FormInputProps {
  name: string
  label: string
  description?: string
  placeholder?: string
  rightIcon?: ReactNode
  leftIcon?: ReactNode
  disabled?: boolean
}

export function FormInput({
  name,
  label,
  description,
  placeholder,
  rightIcon,
  leftIcon,
}: FormInputProps) {
  const { control } = useFormContext()

  const inputRefCnpj = useMask({
    mask: '__.___.___/____-__',
    replacement: { _: /\d/ },
  })

  const inputRefCelular = useMask({
    mask: '(__) _____-____',
    replacement: { _: /\d/ },
  })

  const inputRefTelefone = useMask({
    mask: '(__) ____-____',
    replacement: { _: /\d/ },
  })

  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="grid grid-cols-4 items-center gap-4 ">
            <div className="col-span-2 flex h-[60px] flex-col">
              <FormLabel className="text-base font-medium text-primary">
                {label}
              </FormLabel>
              <FormDescription className="text-xs text-muted-foreground">
                {description}
              </FormDescription>
            </div>
            <div className="col-span-2 ">
              <FormControl className="">
                <>
                  <div className="flex items-center ">
                    <Input
                      placeholder={placeholder}
                      {...field}
                      ref={
                        name === 'cnpj'
                          ? inputRefCnpj
                          : name === 'celular'
                            ? inputRefCelular
                            : name === 'telefone'
                              ? inputRefTelefone
                              : null
                      }
                      className={` ${
                        leftIcon && 'pl-10'
                      }  shadow-input-form hover:shadow-input-form-hover group border bg-white first:h-12 hover:border-blue-400 hover:bg-white hover:outline-none focus:border-blue-400 ${
                        field.value
                          ? 'border-blue-400 text-blue-950'
                          : 'border-blue-200 text-gray-100'
                      } focus:shadow-input-form-hover placeholder:opacity-20 focus:bg-white
                      focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-50 focus-visible:ring-opacity-50`}
                    />

                    {leftIcon && (
                      <div className={`absolute pl-4`}>{leftIcon}</div>
                    )}

                    {rightIcon && (
                      <div className="absolute right-16 text-gray-100">
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
