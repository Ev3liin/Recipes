<template>
  <div class="list">
    <div v-for="recipe in recipes" :key="recipe.id">
      <SingleRecipe :recipe="recipe" />
    </div>
  </div>
</template>

<script>
import SingleRecipe from './SingleRecipe'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('recipes')

export default {
  components: { SingleRecipe },
  computed: {
    ...mapState({
      recipes: state => state.recipes,
    }),
  },
  methods: {
    ...mapActions(['fetchRecipes']),
  },
  mounted() {
    this.fetchRecipes()
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
