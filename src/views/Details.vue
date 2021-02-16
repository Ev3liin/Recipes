<template>
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
</template>

<script>
export default {
  data() {
    return {
      recipe: {},
    }
  },
  mounted() {
    fetch(`http://localhost:3000/recipes/${this.$route.params.id}`)
      .then(res => res.json())
      .then(data => (this.recipe = data))
      .catch(err => console.log(err.message))
  },
}
</script>

<style></style>
