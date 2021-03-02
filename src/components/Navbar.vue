<template>
  <header class="header">
    <router-link class="logo" :to="{ name: 'RecipesList' }">Recipes</router-link>
    <nav class="d-flex">
      <router-link :to="{ name: 'RecipesList' }">Recipes List</router-link>
      <div v-if="login" class="d-flex">
        <router-link :to="{ name: 'Create' }">Create Recipe</router-link>
        <button @click="logedout" class="btn log-btn">log out</button>
      </div>
      <div v-else>
        <router-link :to="{ name: 'Login' }">Log in</router-link>
        <router-link :to="{ name: 'Signup' }">Sign up</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('users')

export default {
  computed: {
    ...mapState({
      login: state => state.isLoggedIn,
    }),
  },
  methods: {
    ...mapActions(['logout']),
    logedout() {
      this.logout()
      this.$router.push({ name: 'RecipesList' })
    },
  },
}
</script>

<style>
.d-flex {
  display: flex;
  align-items: center;
}
.log-btn {
  margin: 0 0 0 15px;
  padding: 3px;
  font-size: 16px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.logo {
  color: #dfdfdf !important;
  font-size: 48px;
  font-weight: bold !important;
}

.header a {
  color: #bbb;
  text-decoration: none;
  margin-left: 20px;
}
.header a.router-link-active {
  color: #ff8800;
  font-weight: bold;
}
</style>
