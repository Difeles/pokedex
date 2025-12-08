<script setup>
import IconPokeball from './icons/IconPokeball.vue'
const props = defineProps(['name', 'sprite', 'color', 'typeList'])
</script>

<template>
  <div class="card rounded-2xl" :style="{ backgroundColor: props.color }">
    <IconPokeball class="background-image" />
    <div class="card-inner">
      <div class="info-container">
        <h2 class="name text-xl">{{ props.name }}</h2>
        <div class="badge" :key="type" v-for="type in props.typeList">
          <p>{{ type }}</p>
        </div>
      </div>
      <div class="image-container">
        <img class="image" :src="props.sprite" loading="lazy" :alt="props.name" />
      </div>
    </div>
  </div>
</template>

<style>
.card {
  position: relative;
  color: #fff;
  overflow: hidden;
  height: 200px;
}
.card-inner {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 15px 15px 30px;
  height: 100%;
}
.info-container {
  width: 80px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.name {
  margin-bottom: 5px;
}
.badge {
  border-radius: 25px;
  background-color: #ffffff35;
  width: fit-content;
  padding: 2px 20px;
}
.image-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.image {
  width: 120px;
  height: 120px;
  z-index: 1;
}
.background-image {
  position: absolute;
  bottom: 10px;
  right: 10px;
  height: 170px;
  width: 170px;
  opacity: 0.15;
  transform: translate(20%, 20%);
}
</style>
