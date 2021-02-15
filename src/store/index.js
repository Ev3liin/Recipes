import { createStore } from 'vuex'

export default createStore({
  state: {
    recipes: [],
  },
  mutations: {
    SET_RECIPES(state, recipes) {
      state.recipes = recipes
    },
    ADD_RECIPE(state, recipe) {
      state.recipes.push(recipe)
    },
  },
  actions: {
    fetchRecipes({ commit }) {
      fetch('http://localhost:3000/recipes')
        .then(res => res.json())
        .then(data => commit('SET_RECIPES', data))
        .catch(err => console.log(err.message))
    },
  },
  getters: {
    getRecipeById: state => id => {
      return state.recipes.find(recipe => recipe.id === id)
    },
  },
  modules: {},
})
