export default {
  namespaced: true,
  state: {
    recipes: [],
    recipe: null,
  },
  getters: {},
  mutations: {
    SET_RECIPES(state, recipes) {
      state.recipes = recipes
    },
    GET_RECIPE(state, recipe) {
      state.recipe = recipe
    },
  },
  actions: {
    async fetchRecipes({ commit }) {
      const res = await fetch('http://localhost:3000/recipes')
      commit('SET_RECIPES', await res.json())
    },
    async addRecipe(_, recipe) {
      fetch('http://localhost:3000/recipes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(recipe),
      })
    },
    async updateRecipe(_, { id, recipe }) {
      fetch(`http://localhost:3000/recipes/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(recipe),
      })
    },
    async getRecipe({ commit }, productId) {
      const res = await fetch(`http://localhost:3000/recipes/${productId}`)
      commit('GET_RECIPE', await res.json())
    },
    async deleteRecipe({ commit }, { id, recipe }) {
      fetch(`http://localhost:3000/recipes/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(recipe),
      })
    },
  },
}
