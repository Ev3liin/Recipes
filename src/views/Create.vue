<template>
  <div class="create">
    <form class="form" @submit.prevent="handleSubmit">
      <label class="label">Title:</label>
      <input class="input" v-model="name" type="text" required />
      <label class="label">Description:</label>
      <textarea class="textarea" v-model="description" required></textarea>
      <label class="label">Image:</label>
      <input class="input" type="file" @change="onFileSelected" />
      <label class="label">Time to prepare:</label>
      <input class="input" v-model="prepare" type="number" required />
      <button class="btn">Add Post</button>
    </form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('recipes')

export default {
  data() {
    return {
      name: '',
      description: '',
      prepare: null,
      image: null,
    }
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
    ...mapActions(['addRecipe']),
    handleSubmit() {
      this.addRecipe({
        id: Math.floor(Math.random() * 10000),
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

<style>
.form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
.input,
.textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  outline: none;
  border: 1px solid #eee;
}
.textarea {
  height: 160px;
}
.label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}
.label::before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1.5deg);
}
.btn {
  display: block;
  margin-top: 30px;
  background: #ff8800;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
  outline: none;
}
</style>
