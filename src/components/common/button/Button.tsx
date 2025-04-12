'use client'
import styles from './Button.module.scss'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  icon?: ReactNode
}

export function Button({
  children,
  className,
  variant = 'primary',
  icon,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={clsx(styles.button, styles[variant], className)}
      disabled={variant === 'primary' ? true : rest.disabled}
      {...rest}
    >
      {variant === 'secondary' && icon && (
        <div className={styles.icon}>{icon}</div>
      )}
      {children}
    </button>
  )
}
