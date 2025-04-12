'use client'

import { ChangeEvent, useState } from 'react'
import styles from './LoginForm.module.scss'
import { login } from '@/api/auth'
import { Button, Input } from '@/components/common'
import Image from 'next/image'
import MailIcon from '@/assets/envelope.svg'
import LockIcon from '@/assets/lock.svg'
import PasswordInput from '../passwordInput/PasswordInput'
// import { useRouter } from 'next/router'

export default function LoginForm() {
  //   const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      const res = await login({ email, password })
      const token = res.value

      localStorage.setItem('token', token)

      //   router.push('/profile')
    } catch (err) {
      console.error(err)
      setError('Неверный email или пароль')
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.field}>
        <Input
          type="email"
          placeholder="Email"
          leftIcon={<Image src={MailIcon} alt="почта" />}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          required
        />
      </div>

      <div className={styles.field}>
        <PasswordInput
          placeholder="Пароль"
          leftIcon={<Image src={LockIcon} alt="замок" />}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      {error && <p className={styles.error}>{error}</p>}

      <Button
        type="submit"
        variant="secondary"
        icon={<Image src={LockIcon} alt="замок" />}
      >
        Войти
      </Button>
    </form>
  )
}
