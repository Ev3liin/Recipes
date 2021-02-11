<template>
  <div>
    <!-- <p>{{ recipe.name }}</p> -->
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  props: ['id'],
  setup(props) {
    const store = useStore()
    const recipe = computed(() => {
      return store.getters.getById(props.id)
    })

    console.log(recipe)
    return { recipe }
  },
}
</script>

<style></style>
