'use client'
import { ReactNode } from 'react'
import styles from './Form.module.scss'

interface FormProps {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
  children: ReactNode
}

export const Form = ({ onSubmit, children }: FormProps) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {children}
    </form>
  )
}
