import axios from 'axios'

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  timeout: 10000,
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error: ', error.response?.data || error.message)
    throw error
  },
)

export default api
