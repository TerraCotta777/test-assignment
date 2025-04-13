'use client'

import { PageTitle } from '@/components/common'
import styles from './SignUp.module.scss'
import Footer from '@/components/footer/Footer'
import SignUpForm from '@/components/signUpForm/SignUpForm'

export default function SignUpPage() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <PageTitle
            title="Регистрация в Yoldi Agency"
            className={styles.title}
          />
          <SignUpForm />
        </div>
      </div>
      <Footer url="/auth/login" linkText="Войти" text="Уже есть аккаунт?" />
    </>
  )
}
