import { fetchUserBySlug } from '@/api/users'
import useSWR from 'swr'

export function useUser(slug: string) {
  const { data, error, isLoading } = useSWR(slug ? ['user', slug] : null, () =>
    fetchUserBySlug(slug),
  )

  return {
    user: data,
    isLoading,
    isError: error,
  }
}
