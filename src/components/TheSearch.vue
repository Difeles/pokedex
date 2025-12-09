<script setup>
import { onMounted, ref } from 'vue'
import { usePokemonStore } from '@/stores/pokemon'
import { storeToRefs } from 'pinia'

const store = usePokemonStore()
const { allPokemonList, pokemonList, isSearch } = storeToRefs(store)

onMounted(() => {
  store.loadAllPokemonList()
})

const search = ref(null)
const find = async () => {
  isSearch.value = true
  pokemonList.value = await store.getDetails(
    allPokemonList.value.filter((pokemon) => {
      return pokemon.name.startsWith(search.value.value)
    }),
  )
}
</script>

<template>
  <div class="search-container">
    <svg
      class="search-icon"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-width="2"
        d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
      />
    </svg>
    <input ref="search" class="search-input" type="text" placeholder="Поиск" />
    <button class="search-button" @click="find">Найти</button>
  </div>
</template>
<style>
.search-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 360px;
  height: 40px;
  border: 2px solid var(--color-text);
  border-radius: 8px;
}
.search-input {
  width: 100%;
  margin-right: 10px;
}
.search-input:focus {
  outline: none;
}
.search-icon {
  color: var(--color-text);
  width: 20px;
  height: 20px;
  margin: 0 8px;
}
.search-button {
  background-color: rgb(58, 58, 58);
  color: white;
  border-radius: 6px;
  padding: 2px 12px;
  margin-right: 6px;
}
.search-button:hover {
  background-color: rgb(36, 36, 36);
}
</style>
