<template>
  <header>
    <div class="header-container">
      <h1 class="header-text text-3xl font-medium">Pokedex</h1>
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
        <input class="search-input" type="text" placeholder="Поиск" />
        <button class="search-button">Найти</button>
      </div>
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
