'use client'

import styles from './ProfilePage.module.scss'
import { useProfile } from '@/hooks/useProfile'
import { Button } from '@/components/common'
import { UserAvatar } from '@/components/userAvatar/UserAvatar'
import Image from 'next/image'
import PencilIcon from '@/assets/pen-solid.svg'
import LogoutIcon from '@/assets/sign-out-alt-solid.svg'
import { useAuth } from '@/hooks/useAuth'
import { ProtectedRoute } from '@/components/layouts'
import { updateProfile } from '@/api/profile'
import { EditProfileModal } from '@/components/editProfileModal/EditProfileModal'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ProfilePage() {
  const { profile, isLoading, isError, mutate } = useProfile()
  const { logout } = useAuth()
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const router = useRouter()

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading profile</div>
  if (!profile) return null

  const handleProfileUpdate = async (data: {
    name: string
    slug: string
    description: string
  }) => {
    await updateProfile(data)
    await mutate()
  }

  const handleLogout = () => {
    logout()
    router.push('/auth/login')
  }

  return (
    <ProtectedRoute>
      <div className={styles.wrapper}>
        <div
          className={styles.coverContainer}
          style={{
            backgroundImage: profile.cover
              ? `url(${profile.cover.url})`
              : 'none',
          }}
        ></div>

        <div className={styles.container}>
          <div className={styles.avatarContainer}>
            <UserAvatar user={profile} size="lg" className={styles.avatar} />
          </div>

          <div className={styles.infoSection}>
            <div className={styles.userInfo}>
              <h2 className={styles.username}>{profile.name}</h2>
              <p className={styles.userEmail}>{profile.email}</p>
            </div>

            <Button
              variant="secondary"
              className={styles.editButton}
              icon={<Image src={PencilIcon} alt="редактировать" />}
              onClick={() => setIsEditModalOpen(true)}
            >
              Редактировать
            </Button>
          </div>

          {profile.description && (
            <p className={styles.description}>{profile.description}</p>
          )}

          <Button
            variant="secondary"
            className={styles.logoutButton}
            icon={<Image src={LogoutIcon} alt="выйти" />}
            onClick={handleLogout}
          >
            Выйти
          </Button>
        </div>
        <EditProfileModal
          profile={profile}
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onSubmit={handleProfileUpdate}
        />
      </div>
    </ProtectedRoute>
  )
}
