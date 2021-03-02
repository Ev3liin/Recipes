<template>
  <div>
    <form class="form" @submit.prevent="handleCreate">
      <label class="label">FirstName:</label>
      <input class="input" v-model="firstName" type="text" required />
      <label class="label">LastName:</label>
      <input class="input" v-model="lastName" type="text" required />
      <label class="label">Email:</label>
      <input class="input" :class="{ error: checkEmail }" v-model="email" type="email" required />
      <div v-if="checkEmail">
        <p>{{ checkEmail }}</p>
        <router-link class="redirect-link" :to="{ name: 'Login' }">Login</router-link>
      </div>
      <label class="label">Add Password:</label>
      <input class="input" v-model="password" type="password" required />
      <label class="label">Confirm Password:</label>
      <input class="input" :class="{ error: ckeckPassword }" v-model="passwordConfirm" type="password" required />
      <button class="btn">Create Account</button>
    </form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapActions } = createNamespacedHelpers('users')

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: '',
      ckeckPassword: '',
      checkEmail: '',
    }
  },
  computed: {
    ...mapState({
      users: state => state.users,
    }),
    ...mapGetters(['findCurrentUser']),
  },
  mounted() {
    this.getAllUsers()
  },
  methods: {
    ...mapActions(['addUser', 'getAllUsers']),
    handleCreate() {
      let user = this.findCurrentUser(this.email)
      if (user !== undefined) {
        this.checkEmail = 'This email is already taken'
        this.password !== this.passwordConfirm ? (this.ckeckPassword = 'Error') : (this.ckeckPassword = '')
      } else {
        if (this.password !== this.passwordConfirm) {
          this.ckeckPassword = 'Error'
        } else {
          this.ckeckPassword = ''
          this.addUser({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
          })
          this.$router.push({ name: 'Login' })
        }
      }
    },
  },
}
</script>

<style scoped>
.error {
  border: 1px solid #db2d2d;
}
.redirect-link {
  text-decoration: none;
  width: 100px;
  background: #ff8800;
  color: #fff;
  padding: 2px;
}
</style>
