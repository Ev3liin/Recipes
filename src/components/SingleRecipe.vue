<template>
  <router-link :to="{ name: 'Details', params: { id: recipe.id } }">
    <div class="recipe">
      <img class="img" :src="recipe.image" :alt="recipe.name" />
      <h3>{{ recipe.name }}</h3>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['recipe'],
}
</script>

<style>
.recipe {
  margin: 20px auto;
  height: auto;
  min-width: 300px;
  background: #ffebde;
  border-radius: 20px;
  box-shadow: 5px 10px 15px #ccc;
  padding: 30px;
  transition-duration: 0.8px;
}
.recipe:hover {
  box-shadow: 5px 10px 15px #a7a2a2;
}
.img {
  height: 20vh;
}
</style>
