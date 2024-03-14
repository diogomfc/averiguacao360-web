import { InputHTMLAttributes } from 'react'
import { FieldValues, Path, UseFormRegister } from 'react-hook-form'

export type TextInputInputProps = InputHTMLAttributes<HTMLInputElement>

interface TextInputRootProps<T extends FieldValues>
  extends TextInputInputProps {
  alert?: string
  label?: string
  name: Path<T>
  register: UseFormRegister<T>
  required?: boolean
}

export function TextInput<T extends FieldValues>({
  alert,
  label,
  name,
  register,
  required,
  ...props
}: TextInputRootProps<T>) {
  return (
    <div className="relative">
      <input
        className={`
       peer  h-[64px] w-full cursor-default rounded-sm border border-blue-200 bg-white px-5 pt-3 text-base font-medium text-blue-950 placeholder-transparent  hover:shadow-input-form-login 
       focus:border-blue-400 focus:shadow-input-form-login focus:outline-none  ${alert ? 'border-red-500 bg-red-500/10  focus:border-red-500 focus:shadow-red-500/20' : ' '}
       ${props.value ? ' ' : 'border border-blue-200'}
       `}
        {...props}
        {...register(name, { required })}
      />
      {alert && (
        <span className="absolute  left-5  top-2 text-[12px] text-red-500">
          {alert}
        </span>
      )}
      {!alert && (
        <label
          className={`
         ${
           props.value
             ? ' absolute left-5 top-2 text-[12px] text-blue-400'
             : ' absolute left-5 top-2 text-[12px] text-blue-500 transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-[16px] peer-placeholder-shown:font-light peer-placeholder-shown:text-blue-950 peer-focus:top-2 peer-focus:text-[12px] peer-focus:text-blue-950 '
         }
      
        `}
        >
          {label}
        </label>
      )}
    </div>
  )
}
