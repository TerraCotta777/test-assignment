import { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react'
import styles from './Input.module.scss'
import clsx from 'clsx'

interface BaseInputProps {
  label?: string
  errorMessage?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  prefix?: string
  textarea?: boolean
}

interface InputProps
  extends BaseInputProps,
    InputHTMLAttributes<HTMLInputElement> {
  textarea?: false
}

interface TextareaProps
  extends BaseInputProps,
    TextareaHTMLAttributes<HTMLTextAreaElement> {
  textarea: true
}

type Props = InputProps | TextareaProps

export function Input({
  label,
  errorMessage,
  leftIcon,
  rightIcon,
  className,
  prefix,
  textarea,
  ...rest
}: Props) {
  return (
    <div className={styles.inputContainer}>
      {label && <label className={styles.label}>{label}</label>}
      <div
        className={clsx(styles.inputWrapper, {
          [styles.withLeftIcon]: !!leftIcon,
          [styles.withRightIcon]: !!rightIcon,
          [styles.withPrefix]: !!prefix,
        })}
      >
        {prefix && <div className={styles.prefix}>{prefix}</div>}
        {leftIcon && <div className={styles.leftIcon}>{leftIcon}</div>}
        {textarea ? (
          <textarea
            className={clsx(styles.input, styles.textarea, className)}
            {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            className={clsx(
              styles.input,
              errorMessage && styles.error,
              className,
            )}
            {...(rest as InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
        {rightIcon && <div className={styles.rightIcon}>{rightIcon}</div>}
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      </div>
    </div>
  )
}
