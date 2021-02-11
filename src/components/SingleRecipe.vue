<template>
  <div class="recipe">
    <router-link :to="{ name: 'Details', params: { id: recipe.id } }">
      <img class="img" :src="recipe.image" :alt="recipe.name" />
      <h3>{{ recipe.name }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  props: ['recipe'],
  setup(props) {
    const snippet = computed(() => {
      return props.recipe.description.substring(0, 100) + '...'
    })
    return { snippet }
  },
}
</script>

<style>
.img {
  height: 20vh;
}
</style>
