import { InputHTMLAttributes, ReactNode, useState } from 'react'
import Image from 'next/image'
import EyeIcon from '@/assets/eye-solid.svg'
import EyeSlashIcon from '@/assets/eye-slash.svg'
import { Input } from '../common'
import styles from './PasswordInput.module.scss'

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactNode
}

const Eye = () => <Image src={EyeIcon} alt="глаз" />
const EyeOff = () => <Image src={EyeSlashIcon} alt="глаз зачеркнутый" />

const PasswordInput = (props: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const toggleVisibility = () => setShowPassword((prev) => !prev)

  return (
    <Input
      {...props}
      type={showPassword ? 'text' : 'password'}
      leftIcon={props.leftIcon}
      rightIcon={
        <button
          type="button"
          onClick={toggleVisibility}
          tabIndex={-1}
          className={styles.button}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? <EyeOff /> : <Eye />}
        </button>
      }
    />
  )
}

export default PasswordInput
