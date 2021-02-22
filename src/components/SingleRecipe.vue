<template>
  <router-link
    class="details-link"
    :to="{ name: 'Details', params: { id: recipe.id } }"
  >
    <div class="recipe">
      <img class="img" :src="recipe.image" :alt="recipe.name" />
      <h3 class="title">{{ recipe.name }}</h3>
      <p class="description">{{ snippet }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['recipe'],
  computed: {
    snippet() {
      return this.recipe.description.substring(0, 200) + '...'
    },
  },
}
</script>

<style>
.recipe {
  margin: 20px auto;
  height: auto;
  min-width: 300px;
  max-width: 500px;
  background: #ffebde;
  border-radius: 20px;
  box-shadow: 5px 10px 15px #ccc;
  padding: 30px;
  transition-duration: 0.8px;
}
.recipe .description {
  color: #4e2906;
}
.recipe .title {
  color: #ff8800;
  font-size: 25px;
}
.details-link {
  text-decoration: none;
}
.recipe:hover {
  box-shadow: 5px 10px 15px #a7a2a2;
}
.img {
  height: 20vh;
}
</style>
