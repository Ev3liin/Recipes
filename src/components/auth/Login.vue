<template>
  <form class="form" @submit.prevent="handleLogin">
    <label class="label">Email:</label>
    <input class="input" v-model="email" type="email" required />
    <label class="label">Password:</label>
    <input class="input" v-model="password" type="password" required />
    <button class="btn">Login</button>
  </form>
  <p class="redirect">Don't have an account yet? <router-link class="btn redirect-link" :to="{ name: 'Signup' }">Sign Up</router-link></p>
  <!-- <div v-if="login">{{ name }}</div>
  <div class="error" v-if="check">{{ check }}</div> -->
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapActions } = createNamespacedHelpers('users')

export default {
  data() {
    return {
      email: '',
      password: '',
      name: '',
      check: '',
    }
  },
  computed: {
    ...mapState({
      users: state => state.users,
      login: state => state.isLoggedIn,
    }),
    ...mapGetters(['findCurrentUser']),
  },
  mounted() {
    this.getAllUsers()
  },
  methods: {
    ...mapActions(['getAllUsers', 'logged']),
    handleLogin() {
      let user = this.findCurrentUser(this.email)
      if (user === undefined) {
        this.check = ''
      } else {
        if (user.email === this.email && user.password === this.password) {
          this.logged()
          this.$router.push({ name: 'RecipesList' })
        } else {
          this.check = 'The email address or password is incorrect. Please retry...'
        }
      }
    },
  },
}
</script>

<style scoped>
.error {
  color: #db2d2d;
  margin-top: 20px;
}
.redirect {
  margin-top: 50px;
}
.redirect-link {
  text-decoration: none;
  width: 100px;
  margin: 10px auto;
}
</style>
