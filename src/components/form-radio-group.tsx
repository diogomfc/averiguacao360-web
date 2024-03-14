import { useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export interface FormRadioGroupProps {
  name: string
  label: string
  description?: string
  options: { value: string; label: string }[]
}

export function FormRadioGroup({
  name,
  label,
  description,
  options,
}: FormRadioGroupProps) {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="grid grid-cols-4 gap-4 ">
          <div className="col-span-2 flex flex-col pt-4 ">
            <FormLabel className="text-base font-medium text-primary">
              {label}
            </FormLabel>
            <FormDescription className="text-xs text-muted-foreground">
              {description}
            </FormDescription>
          </div>
          <div className="col-span-2 pb-2 ">
            <div
              className={`shadow-input-form h-auto rounded-md border-[1px] p-4  hover:border-blue-400 ${
                field.value ? 'border-blue-400' : 'border-blue-200'
              }`}
            >
              <FormControl className="">
                <RadioGroup
                  onValueChange={field.onChange}
                  // defaultValue={field.value}
                  value={field.value}
                  className=""
                >
                  {options.map((option) => (
                    <FormItem
                      className="flex items-center space-x-3 space-y-0"
                      key={option.value}
                    >
                      <FormControl>
                        <RadioGroupItem
                          value={option.value}
                          className="border-blue-100 hover:border-blue-600 focus:border-blue-600 "
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-normal text-muted-foreground">
                        {option.label}
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <div className="pl-1">
              <FormMessage className="text-xs " />
            </div>
          </div>
        </FormItem>
      )}
    />
  )
}
