'use client'

import { useState } from 'react'
import styles from './LoginForm.module.scss'
import { Button, Form, Input } from '@/components/common'
import Image from 'next/image'
import MailIcon from '@/assets/envelope.svg'
import LockIcon from '@/assets/lock.svg'
import PasswordInput from '../passwordInput/PasswordInput'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAuth } from '@/hooks/useAuth'
import { AuthData } from '@/types/authTypes'

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<Omit<AuthData, 'name'>>({ mode: 'all' })
  const router = useRouter()
  const [errorResponse, setErrorResponse] = useState('')
  const { loginUser } = useAuth()

  const onSubmit: SubmitHandler<Omit<AuthData, 'name'>> = async (data) => {
    try {
      await loginUser(data)
      router.push('/profile')
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const errorMessage =
          err.response?.data.message || 'Произошла ошибка при входе'
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
        placeholder="Email"
        leftIcon={<Image src={MailIcon} alt="почта" />}
        {...register('email', {
          required: 'Некорректный email адрес',
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
        {...register('password', { required: 'Введите пароль' })}
        errorMessage={errors.password?.message}
      />

      <Button
        type="submit"
        className={styles.button}
        icon={<Image src={LockIcon} alt="замок" />}
        disabled={!isValid || isSubmitting}
      >
        Войти
      </Button>
    </Form>
  )
}
