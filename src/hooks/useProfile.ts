import useSWR from 'swr'
import { fetchProfile } from '@/api/profile'

const description =
  'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста или продемонстрировать типографику в деле.'
export function useProfile() {
  const { data, error, isLoading, mutate } = useSWR('profile', fetchProfile)

  return {
    profile: { ...data, description },
    isLoading,
    isError: error,
    mutate,
  }
}
