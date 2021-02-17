<template>
  <div class="create">
    <form class="form" @submit.prevent="handleUpdate">
      <label class="label">Title:</label>
      <input class="input" v-model="name" type="text" required />
      <label class="label">Description:</label>
      <textarea class="textarea" v-model="description" required></textarea>
      <label class="label">Image:</label>
      <input class="input" type="file" @change="onFileSelected" />
      <label class="label">Time to prepare:</label>
      <input class="input" v-model="prepare" type="number" required />
      <button class="btn">Update Recipe</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      name: '',
      description: '',
      prepare: null,
      image: null,
    }
  },
  computed: {
    recipe() {
      return this.$store.state.recipes.recipe
    },
    // val() {
    //   const val = {
    //     name: (this.name = recipe.name),
    //     description: (this.description = recipe.description),
    //     image: (this.image = recipe.image),
    //     prepare: (this.prepare = recipe.prepare),
    //   }
    // },
  },
  mounted() {
    this.$store.dispatch('recipes/getRecipe', this.id)
  },
  methods: {
    onFileSelected(e) {
      const file = e.target.files[0]
      if (!file.type.includes('image/')) {
        alert('Please select an image file')
        return
      }
      if (typeof FileReader === 'function') {
        const reader = new FileReader()
        reader.onload = event => {
          this.image = event.target.result
        }
        reader.readAsDataURL(file)
      } else {
        alert('Sorry, this file is not supported')
      }
    },
    handleUpdate() {
      this.$store.dispatch('recipes/updateRecipe', this.id, {
        name: this.name,
        description: this.description,
        time_to_prepare: this.prepare,
        image: this.image,
      })
      this.$router.push({ name: 'RecipesList' })
    },
  },
}
</script>
