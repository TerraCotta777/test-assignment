import { InputHTMLAttributes, ReactNode } from 'react'
import styles from './Input.module.scss'
import clsx from 'clsx'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  error?: string
}

export function Input({
  errorMessage,
  leftIcon,
  rightIcon,
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
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  )
}
