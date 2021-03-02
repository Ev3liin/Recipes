<template>
  <div class="create">
    <form class="form" @submit.prevent="handleSubmit">
      <button @click="back" class="btn">Go Back</button>
      <label class="label">Title:</label>
      <input class="input" v-model="name" type="text" required />
      <label class="label">Description:</label>
      <textarea class="textarea" v-model="description" required></textarea>
      <label class="label">Image:</label>
      <input class="input" type="file" @change="onFileSelected" />
      <label class="label">Time to prepare:</label>
      <input class="input" v-model="prepare" type="number" />
      <button class="btn">Submit</button>
    </form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState: recipesMapState, mapActions } = createNamespacedHelpers('recipes')
const { mapState: usersMapState } = createNamespacedHelpers('users')

export default {
  data() {
    return {
      name: '',
      description: '',
      prepare: null,
      image: null,
    }
  },
  computed: {
    ...usersMapState({
      login: state => state.isLoggedIn,
    }),
    ...recipesMapState({
      recipe: state => state.recipe,
    }),
  },
  watch: {
    recipe() {
      if (this.$route.params.id) {
        this.name = this.recipe.name
        this.description = this.recipe.description
        this.prepare = this.recipe.time_to_prepare
      }
    },
    $route() {
      if (this.$route.fullPath === '/recipes/create') {
        ;(this.name = ''), (this.description = ''), (this.prepare = null)
      }
    },
  },
  mounted() {
    if (this.$route.params.id) {
      this.getRecipe(this.$route.params.id)
    }
  },
  methods: {
    ...mapActions(['addRecipe', 'getRecipe', 'updateRecipe']),
    back() {
      this.$router.go(-1)
    },

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

    checkImage() {
      let image
      this.image ? (image = this.image) : (image = this.recipe.image)
      return image
    },

    handleSubmit() {
      if (this.$route.params.id) {
        this.updateRecipe({
          id: this.$route.params.id,
          recipe: {
            name: this.name,
            description: this.description,
            time_to_prepare: this.prepare,
            image: this.checkImage(),
          },
        })
        this.$router.push({ name: 'Details' })
      } else {
        this.addRecipe({
          id: Math.floor(Math.random() * 10000),
          name: this.name,
          description: this.description,
          time_to_prepare: this.prepare,
          image: this.image,
        })
        this.$router.push({ name: 'RecipesList' })
      }
    },
  },
}
</script>
