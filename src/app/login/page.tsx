'use client'

import { PageTitle } from '@/components/common'
import LoginForm from '@/components/loginForm/LoginForm'

export default function LoginPage() {
  return (
    <div>
      <PageTitle title="Вход в Yoldi Agency" />
      <LoginForm />
    </div>
  )
}
