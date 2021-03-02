export default {
  namespaced: true,
  state: {
    users: [],
    user: null,
    isLoggedIn: false,
  },
  getters: {
    findCurrentUser: state => email => {
      return state.users.find(user => user.email === email)
    },
  },
  mutations: {
    GET_USER(state, user) {
      state.user = user
    },
    GET_ALL_USERS(state, users) {
      state.users = users
    },
    LOGGED_IN(state) {
      localStorage.setItem('isLoggedIn', true)
      state.isLoggedIn = true
    },
    LOG_OUT(state) {
      localStorage.setItem('isLoggedIn', false)
      state.isLoggedIn = false
    },
  },
  actions: {
    async addUser(_, user) {
      fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      })
    },
    async getAllUsers({ commit }) {
      const res = await fetch(`http://localhost:3000/users`)
      commit('GET_ALL_USERS', await res.json())
    },
    logged({ commit }) {
      commit('LOGGED_IN')
    },
    logout({ commit }) {
      commit('LOG_OUT')
    },
  },
}
