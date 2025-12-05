import { ref } from 'vue'
import api from './useApi'

export function usePokemon() {
  const loading = ref(false)
  const error = ref(null)

  const fetchPokemonList = async (limit = 20, offset = 0) => {
    loading.value = true
    try {
      const { data } = await api.get(`/pokemon?limit=${limit}&offset=${offset}`)
      return data.results
    } catch (err) {
      error.value = err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  const fetchPokemonDetails = async (id) => {
    loading.value = true
    try {
      const { data } = await api.get(`/pokemon/${id}/`)
      return data
    } catch (err) {
      error.value = err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  return { loading, error, fetchPokemonList, fetchPokemonDetails }
}
