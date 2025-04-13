import api from './axios'

export async function login({
  email,
  password,
}: {
  email: string
  password: string
}) {
  console.log('here')
  const response = await api.post('/auth/login', { email, password })
  return response.data
}

export async function signUp({
  name,
  email,
  password,
}: {
  name: string
  email: string
  password: string
}) {
  const response = await api.post('/auth/sign-up', { name, email, password })
  return response.data
}
