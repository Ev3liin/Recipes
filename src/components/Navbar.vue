<template>
  <header class="header">
    <router-link class="logo" :to="{ name: 'RecipesList' }">Recipes</router-link>
    <nav>
      <router-link :to="{ name: 'RecipesList' }">Recipes List</router-link>
      <router-link @click="clear" :to="{ name: 'Create' }">Create Recipe</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    clear() {
      this.$emit('clearForm')
    },
  },
}
</script>

<style>
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
