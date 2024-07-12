'use client'

import Button from '@/components/ui/Button'
import InputText from '@/components/ui/InputText'
import LinkButton from '@/components/ui/LinkButton'
import React from 'react'
import { FieldValues, useForm } from 'react-hook-form'

const HomePage = () => {
  const { register, handleSubmit } = useForm<FieldValues>()

  return (
    <div>
      <Button>Test Button</Button>
      <LinkButton href='#'>Test Link</LinkButton>
      <InputText register={register} registerLabel='test' placeholder='Testeando' />
    </div>
  )
}

export default HomePage