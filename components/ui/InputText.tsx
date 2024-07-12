import React, { ComponentProps } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

interface InputTextProps {
  register: UseFormRegister<FieldValues>
  registerLabel: string
}

const InputText: React.FC<InputTextProps & ComponentProps<'input'>> = ({ register, registerLabel, className, ...props }) => {
  return (
    <input
      className={twMerge('bg-dark-3 hover:bg-dark-4/85 focus:bg-dark-4/85 placeholder:text-text-3 transition-colors px-3 py-2 rounded-md border-none outline-none', className)}
      {...register(registerLabel)}
      type='text' 
      {...props} 
    />
  )
}

export default InputText