<template>
  <div class="recipe">
    <router-link class="details-link" :to="{ name: 'Details', params: { id: recipe.id } }">
      <img class="img" :src="recipe.image" :alt="recipe.name" />
      <h3 class="title">{{ recipe.name }}</h3>
    </router-link>
    <p class="description">
      {{ recipe.description.substring(0, 200) + '...' }}
    </p>
    <div v-if="login" class=" d-flex">
      <router-link class="link" :to="{ name: 'Update', params: { id: recipe.id } }">
        <button class="btn">Update</button>
      </router-link>
      <button @click="deleteThisRecipe" class="btn">Delete</button>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('recipes')
const { mapState: usersMapState } = createNamespacedHelpers('users')

export default {
  props: ['recipe'],
  computed: {
    ...usersMapState({
      login: state => state.isLoggedIn,
    }),
  },
  methods: {
    ...mapActions(['deleteRecipe', 'fetchRecipes']),
    deleteThisRecipe() {
      this.deleteRecipe({
        id: this.recipe.id,
      })
      this.fetchRecipes()
    },
    tt() {
      console.log(this.login)
    },
  },
}
</script>

<style scoped>
.link {
  text-decoration: none;
}
.recipe {
  margin: 20px auto;
  height: 400px;
  min-width: 300px;
  max-width: 500px;
  background: #ffebde;
  border-radius: 20px;
  box-shadow: 5px 10px 15px #ccc;
  padding: 30px;
  transition-duration: 0.8px;
}
.recipe .description {
  color: #4e2906;
}
.d-flex {
  display: flex;
}
.recipe .title {
  color: #ff8800;
  font-size: 25px;
}
.details-link {
  text-decoration: none;
}

.btn {
  margin: 10px;
  padding: 10px;
  color: #fff;
  background: #ff8800;
  border: none;
  cursor: pointer;
}
.recipe:hover {
  box-shadow: 5px 10px 15px #a7a2a2;
}
.img {
  height: 20vh;
}
</style>
