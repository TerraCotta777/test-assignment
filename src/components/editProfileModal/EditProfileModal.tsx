'use client'

import { useState } from 'react'
import styles from './EditProfileModal.module.scss'
import { Button, Input } from '@/components/common'
import { useForm } from 'react-hook-form'
import { Profile } from '@/types/profileTypes'
import { useMediaQuery } from '@/hooks/useMediaQuery'

interface EditProfileModalProps {
  profile: Profile
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: EditProfileData) => Promise<void>
}

interface EditProfileData {
  name: string
  slug: string
  description: string
}

export function EditProfileModal({
  profile,
  isOpen,
  onClose,
  onSubmit,
}: EditProfileModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const isMobile = useMediaQuery('(max-width: 767px)')

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<EditProfileData>({
    defaultValues: {
      name: profile.name,
      slug: profile.slug,
      description: profile.description || '',
    },
  })

  const handleFormSubmit = async (data: EditProfileData) => {
    try {
      setIsLoading(true)
      await onSubmit(data)
      onClose()
    } catch (error) {
      console.error('Failed to update profile:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={isMobile ? undefined : onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>Редактировать профиль</h2>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className={styles.fields}>
            <Input
              label="Имя"
              {...register('name', { required: 'Имя обязательно' })}
              errorMessage={errors.name?.message}
            />
            <div className={styles.slugWrapper}>
              <Input
                label="Адрес профиля"
                prefix="example.com/"
                {...register('slug', { required: 'Адрес профиля обязателен' })}
                errorMessage={errors.slug?.message}
              />
            </div>
            <Input
              label="Описание"
              {...register('description')}
              className={styles.description}
              textarea
            />
          </div>
          <div className={styles.buttons}>
            <Button
              type="button"
              variant="secondary"
              onClick={onClose}
              className={styles.cancelButton}
            >
              Отмена
            </Button>
            <Button
              type="submit"
              disabled={isLoading || !isValid}
              className={styles.saveButton}
            >
              Сохранить
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
