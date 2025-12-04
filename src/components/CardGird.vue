<script setup>
import { ref } from 'vue'
import CardComponent from './CardComponent.vue'

const id = ref([1, 2, 3, 4, 5, 6])
</script>

<template>
  <div class="mt-6 grid gap-x-6 gap-y-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    <CardComponent v-bind:key="value" v-for="value in id"></CardComponent>
  </div>
</template>
