import useSWR from 'swr'
import { fetchProfile } from '@/api/profile'
import { useAuth } from './useAuth'

export function useProfile() {
  const { isAuthenticated } = useAuth()
  const { data, error, isLoading, mutate } = useSWR(
    isAuthenticated ? 'profile' : null,
    fetchProfile,
  )

  return {
    profile: data,
    isLoading,
    isError: error,
    mutate,
  }
}
