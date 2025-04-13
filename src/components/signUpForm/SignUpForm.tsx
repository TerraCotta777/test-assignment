'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import styles from './SignUp.module.scss'
import { Button, Form, Input } from '@/components/common'
import Image from 'next/image'
import UserIcon from '@/assets/user.svg'
import MailIcon from '@/assets/envelope.svg'
import LockIcon from '@/assets/lock.svg'
import PasswordInput from '../passwordInput/PasswordInput'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import axios from 'axios'
import { useAuth } from '@/hooks/useAuth'
import { AuthData } from '@/types/authTypes'

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<AuthData>({ mode: 'onBlur' })
  const router = useRouter()
  const [errorResponse, setErrorResponse] = useState('')
  const { signUpUser } = useAuth()

  const onSubmit: SubmitHandler<AuthData> = async (data) => {
    try {
      await signUpUser(data)
      router.push('/profile')
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const errorMessage =
          err.response?.data.message || 'Произошла ошибка при регистрации'
        setErrorResponse(errorMessage)
      } else {
        setErrorResponse('Произошла ошибка при входе')
      }
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {errorResponse && <p className={styles.error}>{errorResponse}</p>}
      <Input
        type="text"
        placeholder="Имя"
        leftIcon={<Image src={UserIcon} alt="человек" />}
        {...register('name', { required: 'Имя обязательно' })}
        errorMessage={errors.name?.message}
      />

      <Input
        type="text"
        placeholder="E-mail"
        leftIcon={<Image src={MailIcon} alt="почта" />}
        {...register('email', {
          required: 'E-mail обязателен',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Некорректный email адрес',
          },
        })}
        errorMessage={errors.email?.message}
      />

      <PasswordInput
        placeholder="Пароль"
        leftIcon={<Image src={LockIcon} alt="замок" />}
        {...register('password', { required: 'Пароль обязателен' })}
        errorMessage={errors.password?.message}
      />

      <Button
        type="submit"
        className={styles.button}
        icon={<Image src={LockIcon} alt="замок" />}
        disabled={!isValid || isSubmitting}
      >
        Создать аккаунт
      </Button>
    </Form>
  )
}
