<template>
  <div class="recipe">
    <router-link
      class="details-link"
      :to="{ name: 'Details', params: { id: recipe.id } }"
    >
      <img class="img" :src="recipe.image" :alt="recipe.name" />
      <h3 class="title">{{ recipe.name }}</h3>
    </router-link>
    <p class="description">
      {{ recipe.description.substring(0, 200) + '...' }}
    </p>
    <div class=" d-flex">
      <router-link :to="{ name: 'Update', params: { id: recipe.id } }">
        <button class="btn card-btn">Update</button>
      </router-link>
      <button @click="deleteThisRecipe" class="btn card-btn">Delete</button>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('recipes')

export default {
  props: ['recipe'],
  methods: {
    ...mapActions(['deleteRecipe', 'fetchRecipes']),
    deleteThisRecipe() {
      this.deleteRecipe({
        id: this.recipe.id,
      })
      this.fetchRecipes()
    },
  },
}
</script>

<style scoped>
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
.d-flex {
  display: flex;
}
.recipe .title {
  color: #ff8800;
  font-size: 25px;
}
.details-link {
  text-decoration: none;
}
.card-btn {
  margin: 10px;
  cursor: pointer;
}
.recipe:hover {
  box-shadow: 5px 10px 15px #a7a2a2;
}
.img {
  height: 20vh;
}
</style>
