import { createStore } from 'vuex'

export default createStore({
  state: {
    recipes: [
      {
        name: 'Burger',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus consequuntur iure, officiis eum doloremque est aperiam rerum, minima voluptatem harum eveniet in modi tenetur eius vero? Impedit cupiditate error placeat.',
        time_to_prepare: 50,
        image: require('../assets/burger.jpg'),
        id: 1,
      },
      {
        name: 'Spaghetti',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus consequuntur iure, officiis eum doloremque est aperiam rerum, minima voluptatem harum eveniet in modi tenetur eius vero? Impedit cupiditate error placeat.',
        time_to_prepare: 50,
        image: require('../assets/spaghetti.jpg'),
        id: 2,
      },
      {
        name: 'Sweets',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus consequuntur iure, officiis eum doloremque est aperiam rerum, minima voluptatem harum eveniet in modi tenetur eius vero? Impedit cupiditate error placeat.',
        time_to_prepare: 50,
        image: require('../assets/sweets.jpg'),
        id: 3,
      },
    ],
  },
  mutations: {
    addRecipe(state, recipe) {
      state.recipes.push(recipe)
    },
  },
  actions: {},
  getters: {
    getbyId(state) {
      return id => state.recipes.find(recipe => recipe.id === id)
    },
  },
  modules: {},
})
