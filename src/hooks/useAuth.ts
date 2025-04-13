import useSWR from 'swr'
import { login, signUp } from '@/api/auth'
import { AuthData, AuthResponse } from '@/types/authTypes'

export function useAuth() {
  const {
    data: token,
    error,
    mutate,
    isLoading,
  } = useSWR<string | null>('token', {
    fetcher: () => localStorage.getItem('token'),
    fallbackData: null,
  })

  const isAuthenticated = !!token

  const loginUser = async (data: Omit<AuthData, 'name'>) => {
    try {
      const response: AuthResponse = await login(data)
      const newToken = response.value
      localStorage.setItem('token', newToken)
      await mutate(newToken)
      return response
    } catch (error) {
      throw error
    }
  }

  const signUpUser = async (data: AuthData) => {
    try {
      const response: AuthResponse = await signUp(data)
      const newToken = response.value
      localStorage.setItem('token', newToken)
      await mutate(newToken)
      return response
    } catch (error) {
      throw error
    }
  }

  const logout = async () => {
    localStorage.removeItem('token')
    await mutate(null)
  }

  return {
    token,
    isLoading,
    isError: error,
    loginUser,
    signUpUser,
    isAuthenticated,
    logout,
  }
}
