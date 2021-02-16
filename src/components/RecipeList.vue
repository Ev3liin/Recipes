<template>
  <div v-if="recipes.length" class="list">
    <div v-for="recipe in recipes" :key="recipe.id">
      <SingleRecipe :recipe="recipe" />
    </div>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script>
import SingleRecipe from './SingleRecipe'
export default {
  components: { SingleRecipe },
  data() {
    return {
      recipes: [],
    }
  },
  mounted() {
    if (this.recipes.length == 0) {
      this.$store.dispatch('recipes/fetchRecipes')
      return (this.recipes = this.$store.state.recipes.recipes)
    } else {
      return (this.recipes = this.$store.state.recipes.recipes)
    }
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
