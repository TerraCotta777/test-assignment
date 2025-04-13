'use client'
import styles from './Button.module.scss'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  icon?: ReactNode
  disabled?: boolean
}

export function Button({
  children,
  className,
  variant = 'primary',
  icon,
  disabled = false,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={clsx(styles.button, styles[variant], className)}
      disabled={disabled}
      {...rest}
    >
      {variant === 'secondary' && icon && (
        <div className={styles.icon}>{icon}</div>
      )}
      {children}
    </button>
  )
}
