'use client'

import Link from 'next/link'
import styles from './Header.module.scss'
import Image from 'next/image'
import LogoImg from '@/assets/logo.svg'
import { Button } from '../common'
// import { useAuth } from '@/shared/hooks/useAuth'

export default function Header() {
  //   const { user } = useAuth()

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoWrapper}>
        <Image src={LogoImg} alt="logo" className={styles.logo} />
        <span className={styles.logoText}>
          Разрабатываем и запускаем сложные веб проекты
        </span>
      </Link>

      <div className={styles.right}>
        {false ? (
          <Link href="/profile" className={styles.profile}>
            <span className={styles.name}>Ariel</span>
            <div className={styles.avatar}>A</div>
          </Link>
        ) : (
          <Link href="/login" className={styles.loginButton}>
            <Button variant="secondary" type="button">
              Войти
            </Button>
          </Link>
        )}
      </div>
    </header>
  )
}
