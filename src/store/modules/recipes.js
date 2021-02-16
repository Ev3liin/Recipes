export default {
  namespaced: true,
  state: {
    recipes: [],
  },
  getters: {
    getRecipeById: state => id => {
      return state.recipes.find(recipe => recipe.id === id)
    },
  },
  mutations: {
    SET_RECIPES(state, recipes) {
      state.recipes = recipes
    },
    ADD_RECIPE(state, recipe) {
      state.recipes.push(recipe)
      console.log('added', state.recipes)
    },
  },
  actions: {
    async fetchRecipes({ commit }) {
      const res = await fetch('http://localhost:3000/recipes')
      commit('SET_RECIPES', await res.json())
    },
    addRecipe({ commit }, recipe) {
      commit('ADD_RECIPE', recipe)
    },
  },
}
