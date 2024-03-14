import { useFormContext } from 'react-hook-form'
import { NumericFormat } from 'react-number-format'

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

  disabled?: boolean
}

export function FormInputMoney({
  name,
  label,
  description,
  placeholder,
}: FormInputProps) {
  const { control } = useFormContext()

  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="grid grid-cols-4 items-center gap-4 ">
            <div className="col-span-2 flex h-[60px] flex-col">
              <FormLabel className="text-base font-medium text-blue-400">
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
                    <NumericFormat
                      thousandSeparator={'.'}
                      decimalSeparator={','}
                      prefix={'R$ '}
                      customInput={Input}
                      placeholder={placeholder}
                      {...field}
                      className={`shadow-input-form hover:shadow-input-form-hover group border bg-white first:h-12 hover:border-blue-400 hover:bg-white hover:outline-none focus:border-blue-400 ${
                        field.value
                          ? 'border-blue-400 text-blue-700'
                          : 'border-blue-200 text-gray-100'
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
