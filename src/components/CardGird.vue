<script setup>
import { ref, onMounted } from 'vue'
import CardComponent from './CardComponent.vue'
import { usePokemonStore } from '@/stores/pokemon'
import { storeToRefs } from 'pinia'

const store = usePokemonStore()
const { error, loading, pokemonList } = storeToRefs(store)

onMounted(async () => {
  store.loadPokemonList()
})
</script>

<template>
  <div class="mt-6 grid gap-x-6 gap-y-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    <CardComponent
      v-bind:key="pokemon.name"
      v-for="pokemon in pokemonList"
      :name="pokemon.name"
      :sprite="pokemon.sprite"
    ></CardComponent>
  </div>
</template>
