'use client'

import { useProfile } from '@/hooks/useProfile'
import { useAuth } from '@/hooks/useAuth'
import { ProtectedRoute } from '@/components/layouts'
import { updateProfile } from '@/api/profile'
import { EditProfileModal } from '@/components/editProfileModal/EditProfileModal'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { UserProfile } from '@/components/userProfile/UserProfile'

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
      <UserProfile
        profile={profile}
        isEditable
        onEdit={() => setIsEditModalOpen(true)}
        onLogout={handleLogout}
      />
      <EditProfileModal
        profile={profile}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSubmit={handleProfileUpdate}
      />
    </ProtectedRoute>
  )
}
