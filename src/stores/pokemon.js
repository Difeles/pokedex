import { defineStore } from 'pinia'
import { usePokemon } from '@/composables/usePokemon'
import { ref } from 'vue'

const { fetchPokemonList, fetchPokemonDetails } = usePokemon()

export const usePokemonStore = defineStore('pokemon', () => {
  const error = ref(null)
  const loading = ref(false)
  const pokemonList = ref([])
  const allPokemonList = ref([])
  const limit = ref(20)
  const offset = ref(0)
  const isSearch = ref(false)

  const loadAllPokemonList = async () => {
    const data = await fetchPokemonList(151, 0)
    allPokemonList.value = data
  }

  const loadPokemonList = async () => {
    if (isSearch.value) return
    if (offset.value >= 151) return
    loading.value = true
    error.value = null

    try {
      if (offset.value > 131) {
        limit.value = 151 - offset.value
      }
      const data = await fetchPokemonList(limit.value, offset.value)
      pokemonList.value = pokemonList.value.concat(await getDetails(data))
      offset.value = offset.value + 20
    } catch (err) {
      error.value = err.response?.data?.message || err.message || 'Неизвестная ошибка'
      throw err
    } finally {
      loading.value = false
    }
  }

  const getDetails = async (pokemonArray) => {
    return await Promise.all(
      pokemonArray.map(async (pokemon) => {
        const id = pokemon.url.split('/').slice(-2, -1)[0]
        const pokemonData = await fetchPokemonDetails(id)

        return {
          id: Number(id),
          ...pokemon,
          sprite: getSpriteUrl(id),
          pokemonData,
          color: getColor(pokemonData.types[0]?.type.name),
          types: getTypesList(pokemonData.types),
        }
      }),
    )
  }

  return {
    error,
    loading,
    pokemonList,
    allPokemonList,
    loadPokemonList,
    loadAllPokemonList,
    getDetails,
    isSearch,
  }
})

const getSpriteUrl = (id) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
}

const pokemonTypeColors = {
  normal: '#c1c1c1ff',
  fire: '#FD6565',
  water: '#6AB7F5',
  electric: '#edd854ff',
  grass: '#84d060ff',
  ice: '#81cde4ff',
  fighting: '#F18F7A',
  poison: '#cf9bffff',
  ground: '#F4C47A',
  flying: '#C7B8FF',
  psychic: '#FF9AC7',
  bug: '#a9cb87ff',
  rock: '#D8BFA3',
  ghost: '#C0A8E6',
  dragon: '#A68EFF',
  dark: '#A89A91',
  steel: '#E0E0E0',
  fairy: '#ffaae3ff',
}

const getColor = (type) => {
  return pokemonTypeColors[type]
}

const getTypesList = (array) => {
  const typesList = []
  array.forEach((element) => {
    typesList.push(element.type.name)
  })
  return typesList
}
