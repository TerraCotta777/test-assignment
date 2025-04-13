'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import styles from './SignUp.module.scss'
import { signUp } from '@/api/auth'
import { Button, Form, Input } from '@/components/common'
import Image from 'next/image'
import UserIcon from '@/assets/user.svg'
import MailIcon from '@/assets/envelope.svg'
import LockIcon from '@/assets/lock.svg'
import PasswordInput from '../passwordInput/PasswordInput'

interface SignUpFormValues {
  name: string
  email: string
  password: string
}

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignUpFormValues>()
  //   const router = useRouter()

  console.log('errors', isValid)
  const onSubmit: SubmitHandler<SignUpFormValues> = async (data) => {
    try {
      const res = await signUp(data)
      const token = res.value
      localStorage.setItem('token', token)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        placeholder="Имя"
        leftIcon={<Image src={UserIcon} alt="человек" />}
        {...register('name')}
        errorMessage={errors.name?.message}
      />
      {errors.name && (
        <span className={styles.error}>{errors.name.message}</span>
      )}

      <Input
        type="text"
        placeholder="E-mail"
        leftIcon={<Image src={MailIcon} alt="почта" />}
        {...register('email')}
        errorMessage={errors.email?.message}
      />
      {errors.email && (
        <span className={styles.error}>{errors.email.message}</span>
      )}

      <PasswordInput
        placeholder="Пароль"
        leftIcon={<Image src={LockIcon} alt="замок" />}
        {...register('password')}
      />
      {errors.password && (
        <span className={styles.error}>{errors.password.message}</span>
      )}

      <Button
        type="submit"
        className={styles.button}
        icon={<Image src={LockIcon} alt="замок" />}
        disabled={!isValid}
      >
        Создать аккаунт
      </Button>
    </Form>
  )
}
