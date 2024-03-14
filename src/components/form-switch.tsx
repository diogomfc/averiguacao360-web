import { ClipboardPenLine } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Switch } from '@/components/ui/switch'

interface FormSwitchProps {
  name: string
  label: string
  description: string
  disabled?: boolean
  checked?: boolean
}

export function FormSwitch({
  label,
  description,
  name,
  disabled,
}: FormSwitchProps) {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem
          className={`flex flex-row items-center justify-between rounded-lg border border-blue-100 bg-white pr-3  hover:border-blue-300  hover:shadow-input-form-hover ${
            field.value ? 'border-blue-300' : ''
          } `}
        >
          <div
            onClick={() => field.onChange(!field.value)}
            className={`group  w-full cursor-pointer gap-2 space-y-0.5 p-3 ${
              field.value ? 'opacity-100' : 'opacity-80 hover:opacity-100'
            }`}
          >
            <FormLabel
              className={`flex cursor-pointer items-center gap-2 text-base font-medium text-primary group-hover:text-primary ${
                field.value ? '' : 'text-muted-foreground'
              }`}
            >
              <ClipboardPenLine size={20} />
              {label}
            </FormLabel>
            <FormDescription className="text-xs text-muted-foreground">
              {description}
            </FormDescription>
          </div>
          <FormControl>
            <Switch
              checked={field.value}
              onCheckedChange={field.onChange}
              disabled={disabled}
              className=""
            />
          </FormControl>
        </FormItem>
      )}
    />
  )
}
