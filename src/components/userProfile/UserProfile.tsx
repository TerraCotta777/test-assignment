import { Profile } from '@/types/profileTypes'
import styles from './UserProfile.module.scss'
import { Button } from '../common'
import Image from 'next/image'
import PencilIcon from '@/assets/pen-solid.svg'
import LogoutIcon from '@/assets/sign-out-alt-solid.svg'
import { UserAvatar } from '../userAvatar/UserAvatar'

interface UserProfileProps {
  profile: Profile
  isEditable?: boolean
  onEdit?: () => void
  onLogout?: () => void
}

export function UserProfile({
  profile,
  isEditable,
  onEdit,
  onLogout,
}: UserProfileProps) {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.coverContainer}
        style={{
          backgroundImage: profile.cover ? `url(${profile.cover.url})` : 'none',
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

          {isEditable && onEdit && (
            <Button
              variant="secondary"
              className={styles.editButton}
              icon={<Image src={PencilIcon} alt="редактировать" />}
              onClick={onEdit}
            >
              Редактировать
            </Button>
          )}
        </div>

        {profile.description && (
          <p className={styles.description}>{profile.description}</p>
        )}

        {isEditable && onLogout && (
          <Button
            variant="secondary"
            className={styles.logoutButton}
            icon={<Image src={LogoutIcon} alt="выйти" />}
            onClick={onLogout}
          >
            Выйти
          </Button>
        )}
      </div>
    </div>
  )
}
