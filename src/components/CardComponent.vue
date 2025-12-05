<script setup>
const props = defineProps(['name', 'sprite'])
</script>

<template>
  <div class="card rounded-xl">
    <div class="card-inner">
      <h2 class="text-xl">{{ props.name }}</h2>
      <div class="badge">
        <p>Fire</p>
      </div>
      <div class="image-container">
        <img class="image" :src="props.sprite" alt="" />
      </div>
    </div>
  </div>
</template>

<style>
.card {
  color: #fff;
  background-color: #fd6565;
}
.card-inner {
  padding: 40px 30px;
}
.badge {
  border-radius: 25px;
  background-color: #ff8383;
  width: fit-content;
  padding: 2px 20px;
}
.image-container {
  display: flex;
  justify-content: flex-end;
}
.image {
  width: 120px;
}
</style>
