import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL + '/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['X-API-KEY'] = token
    }

    config.timeout = 10000

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

api.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          if (!['/auth/login', '/auth/sign-up'].includes(error.config.url)) {
            localStorage.removeItem('token')
            window.location.href = '/auth/login'
          }
          break
        case 404:
          window.location.href = '/404'
          break
        case 500:
          console.error('Server Error:', error.response.data)
          if (!error.config._retry) {
            error.config._retry = true
            try {
              return await api(error.config)
            } catch (retryError) {
              window.location.href = '/error'
              return Promise.reject(retryError)
            }
          }
          window.location.href = '/error'
          break
      }
    }

    return Promise.reject(error)
  },
)

export default api
