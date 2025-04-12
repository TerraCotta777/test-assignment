import { InputHTMLAttributes, ReactNode } from 'react'
import styles from './Input.module.scss'
import clsx from 'clsx'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  error?: string
}

export function Input({
  leftIcon,
  rightIcon,
  error,
  className,
  ...rest
}: InputProps) {
  return (
    <div
      className={clsx(styles.inputWrapper, {
        [styles.withLeftIcon]: !!leftIcon,
        [styles.withRightIcon]: !!rightIcon,
      })}
    >
      {leftIcon && <div className={styles.leftIcon}>{leftIcon}</div>}
      <input className={clsx(styles.input, className)} {...rest} />
      {rightIcon && <div className={styles.rightIcon}>{rightIcon}</div>}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}
