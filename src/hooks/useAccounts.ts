import { fetchUsers } from '@/api/users'
import useSWR from 'swr'

export function useAccounts() {
  const { data, error, isLoading } = useSWR('accounts', fetchUsers)

  return {
    accounts: data,
    isLoading,
    isError: error,
  }
}
