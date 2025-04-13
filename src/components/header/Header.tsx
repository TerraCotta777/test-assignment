'use client'

import Link from 'next/link'
import styles from './Header.module.scss'
import Image from 'next/image'
import LogoImg from '@/assets/logo.svg'
import { Button } from '../common'
import { useProfile } from '@/hooks/useProfile'

export default function Header() {
  const { profile } = useProfile()

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoWrapper}>
        <Image src={LogoImg} alt="logo" className={styles.logo} />
        <span className={styles.logoText}>
          Разрабатываем и запускаем сложные веб проекты
        </span>
      </Link>

      <div className={styles.right}>
        {profile ? (
          <Link href="/profile" className={styles.profile}>
            <span className={styles.name}>{profile.name}</span>
            <div className={styles.avatar}>{profile.name[0]}</div>
          </Link>
        ) : (
          <Link href="/auth/login">
            <Button
              variant="secondary"
              type="button"
              className={styles.loginButton}
            >
              Войти
            </Button>
          </Link>
        )}
      </div>
    </header>
  )
}
