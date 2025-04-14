'use client'

import { useUser } from '@/hooks/useUser'
import { UserProfile } from '@/components/userProfile/UserProfile'
import { use } from 'react'

export default function UserPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = use(params)
  const { user, isLoading, isError } = useUser(resolvedParams.slug)

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading user profile</div>
  if (!user) return null

  return <UserProfile profile={user} />
}
