<template>
  <div class="create">
    <form class="form" @submit.prevent="handleUpdate">
      <button @click="back" class="btn">Go Back</button>
      <label class="label">Title:</label>
      <input class="input" v-model="name" type="text" required />
      <label class="label">Description:</label>
      <textarea class="textarea" v-model="description" required></textarea>
      <label class="label">Image:</label>
      <input class="input" type="file" @change="onFileSelected" />
      <label class="label">Time to prepare:</label>
      <input class="input" v-model="prepare" type="number" />
      <button class="btn">Update Recipe</button>
    </form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('recipes')

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
    ...mapState({
      recipe: state => state.recipe,
    }),
  },
  watch: {
    recipe() {
      this.name = this.recipe.name
      this.description = this.recipe.description
    },
  },
  mounted() {
    this.getRecipe(this.$route.params.id)
  },
  methods: {
    ...mapActions(['getRecipe', 'updateRecipe']),

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

    checkPrepare() {
      let prepare
      this.prepare
        ? (prepare = this.prepare)
        : (prepare = this.recipe.time_to_prepare)
      return prepare
    },

    checkImage() {
      let image
      this.image ? (image = this.image) : (image = this.recipe.image)
      return image
    },

    handleUpdate() {
      this.updateRecipe({
        id: this.$route.params.id,
        recipe: {
          name: this.name,
          description: this.description,
          time_to_prepare: this.checkPrepare(),
          image: this.checkImage(),
        },
      })

      this.$router.push({ name: 'Details' })
    },
  },
}
</script>
