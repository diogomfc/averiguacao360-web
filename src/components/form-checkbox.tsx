/* eslint-disable @typescript-eslint/no-explicit-any */
import { Contact2, Mail, PhoneCall } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { Checkbox } from './ui/checkbox'

interface FormCheckBoxProps {
  forName: string
  disabled?: boolean
  checked?: boolean
  users: {
    id: string
    nome: string
    email: string
    funcao: string
    telefone: string
    avatar: string
  }
}

export function FormCheckBox({ forName, disabled, users }: FormCheckBoxProps) {
  const { control } = useFormContext()

  const handleCheckedChange = (field: any, checked: boolean) => {
    if (checked) {
      field.onChange([...field.value, users.id])
    } else {
      field.onChange(field.value?.filter((value: string) => value !== users.id))
    }
  }

  return (
    <FormField
      control={control}
      name={forName}
      render={({ field }) => (
        <FormItem
          key={users.id}
          className={`hover:shadow-input-form-hover flex flex-row items-center justify-between rounded-lg border border-blue-100 bg-white  pr-3  hover:border-blue-300 ${
            field.value?.includes(users.id) ? 'border-blue-300' : ''
          } `}
        >
          <div
            onClick={() =>
              handleCheckedChange(field, !field.value?.includes(users.id))
            }
            className={`group flex w-full cursor-pointer items-center gap-4 space-y-0.5 p-3  ${
              field.value?.includes(users.id)
                ? 'opacity-100'
                : 'opacity-80 hover:opacity-100'
            }`}
          >
            <Avatar>
              {users.avatar && (
                <AvatarImage
                  src={`http://localhost:3333/images/avatar/${users.avatar}`}
                  alt="Avatar"
                />
              )}
              <AvatarFallback title={users.nome} className="cursor-pointer">
                {users.nome.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col justify-center gap-2 ">
              <FormLabel
                className={`cursor-pointer text-base  font-medium group-hover:text-primary  ${
                  field.value?.includes(users.id)
                    ? 'text-primary'
                    : 'text-slate-400 '
                } `}
              >
                {users.nome}
                <>
                  <span className="sr-only pl-2 font-mono text-xs">
                    {users.id}
                  </span>
                  <FormMessage />
                </>
              </FormLabel>
              <FormDescription className={`flex gap-4 pb-2`}>
                <div className="flex items-center gap-2">
                  <Contact2 size={16} />
                  <span>{users.funcao}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>{users.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall size={16} />
                  <span>{users.telefone}</span>
                </div>
              </FormDescription>
            </div>
          </div>
          <FormControl className="">
            <div className="flex items-center pb-2 ">
              <Checkbox
                checked={field.value?.includes(users.id)}
                onCheckedChange={(checked) =>
                  handleCheckedChange(field, checked as boolean)
                }
                disabled={disabled}
              />
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  )
}
