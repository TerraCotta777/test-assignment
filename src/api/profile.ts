import api from './axios'

export async function fetchProfile() {
  const response = await api.get('/profile')
  return response.data
}
