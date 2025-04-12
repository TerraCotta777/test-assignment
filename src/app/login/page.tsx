'use client'

import { PageTitle } from '@/components/common'
import LoginForm from '@/components/loginForm/LoginForm'
import styles from './LoginPage.module.scss'
import Footer from '@/components/footer/Footer'

export default function LoginPage() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <PageTitle title="Вход в Yoldi Agency" className={styles.title} />
          <LoginForm />
        </div>
      </div>
      <Footer
        url="/auth/sign-up"
        linkText="Зарегистрироваться"
        text="Еще нет аккаунта?"
      />
    </>
  )
}
