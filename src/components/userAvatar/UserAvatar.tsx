'use client'

import Image from 'next/image'
import styles from './UserAvatar.module.scss'
import clsx from 'clsx'
import { Profile } from '@/types/profileTypes'

interface UserAvatarProps {
  user: Profile
  size?: 'sm' | 'lg'
  className?: string
}

export function UserAvatar({ user, size = 'sm', className }: UserAvatarProps) {
  return (
    <div className={clsx(styles.avatar, styles[size], className)}>
      {user.image ? (
        <Image
          src={user.image.url}
          alt={user.name}
          width={size === 'lg' ? 100 : 50}
          height={size === 'lg' ? 100 : 50}
          className={styles.image}
        />
      ) : (
        <div className={styles.placeholder}>{user.name[0].toUpperCase()}</div>
      )}
    </div>
  )
}
