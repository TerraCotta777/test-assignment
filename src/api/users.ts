import { Profile } from '@/types/profileTypes'
import api from './axios'

export async function fetchUsers(): Promise<Profile[]> {
  const { data } = await api.get('/user')
  return data
}

export async function fetchUserBySlug(slug: string): Promise<Profile> {
  const { data } = await api.get(`/user/${slug}`)
  return data
}
