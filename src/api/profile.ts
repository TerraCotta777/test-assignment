import api from './axios'

interface UpdateProfileData {
  name?: string
  slug?: string
  description?: string
  imageId?: string
  coverId?: string
  password?: string
}

export async function fetchProfile() {
  const response = await api.get('/profile')
  return response.data
}

export async function updateProfile(data: UpdateProfileData) {
  const response = await api.patch('/profile', data)
  return response.data
}
