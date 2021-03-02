<template>
  <div v-if="recipe" class="recipe details">
    <h2 class="title">{{ recipe.name }}</h2>
    <div class="d-flex">
      <img class="img" :src="recipe.image" :alt="recipe.name" />
      <div>
        <p class="description-p">{{ recipe.description }}</p>
        <p class="description-p ">Time to Prepare: {{ recipe.time_to_prepare }} minutes</p>
      </div>
    </div>
    <div v-if="login" class="flex">
      <router-link class="update-link" :to="{ name: 'Update', params: { id: recipe.id } }">
        <span class="btn">Update Recipe</span>
      </router-link>
      <router-link class="update-link" :to="{ name: 'RecipesList' }">
        <span class="btn" @click="deleted">Delete</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState: recipesMapState, mapActions } = createNamespacedHelpers('recipes')
const { mapState: usersMapState } = createNamespacedHelpers('users')

export default {
  computed: {
    ...recipesMapState({
      recipe: state => state.recipe,
    }),
    ...usersMapState({
      login: state => state.isLoggedIn,
    }),
  },
  mounted() {
    this.getRecipe(this.$route.params.id)
  },
  methods: {
    ...mapActions(['getRecipe', 'deleteRecipe']),
    deleted() {
      this.deleteRecipe({
        id: this.$route.params.id,
      })
    },
  },
}
</script>

<style scoped>
.flex {
  display: flex;
}
.details {
  margin: 20px auto;
  height: auto;
  background: #ffebde;
  border-radius: 20px;
  box-shadow: 5px 10px 15px #ccc;
  padding: 30px;
  transition-duration: 0.8px;
  max-width: 1000px;
}
.img {
  max-height: 40vh;
  margin: 20px;
}
.btn {
  margin: 10px;
  padding: 10px;
  color: #fff;
  background: #ff8800;
  cursor: pointer;
}
.update-link {
  text-decoration: none;
}
</style>
