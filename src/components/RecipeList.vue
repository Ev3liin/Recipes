<template>
  <div class="list">
    <div v-for="recipe in recipes" :key="recipe.id">
      <SingleRecipe :recipe="recipe" />
    </div>
  </div>
</template>

<script>
import SingleRecipe from './SingleRecipe'
export default {
  components: { SingleRecipe },
  computed: {
    recipes() {
      return this.$store.state.recipes.recipes
    },
  },
  mounted() {
    this.$store.dispatch('recipes/fetchRecipes')
  },
}
</script>

<style>
.list {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
