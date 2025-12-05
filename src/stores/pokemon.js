import { defineStore } from 'pinia'
import { usePokemon } from '@/composables/usePokemon'
import { ref } from 'vue'

const { fetchPokemonList } = usePokemon()

export const usePokemonStore = defineStore('pokemon', () => {
  const error = ref(null)
  const loading = ref(false)
  const pokemonList = ref([])

  const loadPokemonList = async (limit = 20, offset = 0) => {
    loading.value = true
    error.value = null

    try {
      const data = await fetchPokemonList(limit, offset)
      pokemonList.value = data.map((pokemon) => ({
        ...pokemon,
        sprite: getSpriteUrl(pokemon.url),
      }))
    } catch (err) {
      error.value = err.response?.data?.message || err.message || 'Неизвестная ошибка'
      throw err
    } finally {
      loading.value = false
    }
  }

  return { error, loading, pokemonList, loadPokemonList }
})

const getSpriteUrl = (url) => {
  const id = url.split('/').slice(-2, -1)[0]
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
}
