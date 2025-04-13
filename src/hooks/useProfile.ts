import useSWR from 'swr'
import { fetchProfile } from '@/api/profile'

export function useProfile() {
  const { data, error, isLoading, mutate } = useSWR('profile', fetchProfile)

  return {
    profile: data,
    isLoading,
    isError: error,
    mutate,
  }
}
