<script setup>
import TheSearch from './TheSearch.vue'
</script>

<template>
  <header>
    <div class="header-container">
      <h1 class="header-text text-3xl font-medium">Pokedex</h1>
      <TheSearch></TheSearch>
    </div>
  </header>
</template>

<style>
.header-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.header-text {
  padding-right: 40px;
}
</style>
