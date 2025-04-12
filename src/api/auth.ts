import api from './axios'

export async function login({
  email,
  password,
}: {
  email: string
  password: string
}) {
  console.log(api.defaults.baseURL)
  const response = await api.post('/auth/login', { email, password })
  console.log(response.data)
  return response.data
}
