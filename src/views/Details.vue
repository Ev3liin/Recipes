<template>
  <div v-if="recipe" class="recipe details">
    <h2 class="title">{{ recipe.name }}</h2>
    <div class="d-flex">
      <img class="img" :src="recipe.image" :alt="recipe.name" />
      <div>
        <p class="description-p">{{ recipe.description }}</p>
        <p class="description-p ">
          Time to Prepare: {{ recipe.time_to_prepare }} minutes
        </p>
      </div>
    </div>
    <router-link
      class="update-link"
      :to="{ name: 'Update', params: { id: recipe.id } }"
    >
      <span class="btn btn-update">Update Recipe</span>
    </router-link>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('recipes')

export default {
  computed: {
    ...mapState({
      recipe: state => state.recipe,
    }),
  },
  mounted() {
    this.getRecipe(this.$route.params.id)
  },
  methods: {
    ...mapActions(['getRecipe']),
  },
}
</script>

<style>
.details {
  width: 1000px !important;
}
.update-link {
  text-decoration: none;
}
</style>
