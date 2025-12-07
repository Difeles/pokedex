import api from './useApi'

export function usePokemon() {
  const fetchPokemonList = async (limit = 20, offset = 0) => {
    const { data } = await api.get(`/pokemon?limit=${limit}&offset=${offset}`)
    return data.results
  }

  const fetchPokemonDetails = async (id) => {
    const { data } = await api.get(`/pokemon/${id}`)
    return data
  }

  return { fetchPokemonList, fetchPokemonDetails }
}
