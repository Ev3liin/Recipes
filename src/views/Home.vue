<template>
  <div class="home">
    <RecipeList :recipes="recipes" />
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import RecipeList from '../components/RecipeList'

export default {
  name: 'Home',
  components: { RecipeList },
  setup() {
    const store = useStore()

    const recipes = computed(() => {
      if (store.state.recipes.length == 0) {
        store.dispatch('fetchRecipes')
        return store.state.recipes
      } else {
        return store.state.recipes
      }
    })

    return { recipes }
  },
}
</script>
