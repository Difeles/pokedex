<template>
  <div class="card rounded-xl">
    <div class="card-inner">
      <h2 class="text-xl">Charmander</h2>
      <div class="badge">
        <p>Fire</p>
      </div>
      <div class="image-container">
        <img
          class="image"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
          alt=""
        />
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
