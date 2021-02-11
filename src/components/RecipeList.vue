<template>
  <div v-for="recipe in recipes" :key="recipe.id">
    <SingleRecipe :recipe="recipe" />
  </div>
</template>

<script>
import SingleRecipe from './SingleRecipe'

export default {
  props: ['recipes'],
  components: { SingleRecipe },
}
</script>

<style></style>
