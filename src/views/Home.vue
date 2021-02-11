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
      return store.state.recipes
    })

    return { recipes }
  },
}
</script>
