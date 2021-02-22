import { createStore } from 'vuex'
import recipesModule from './modules/recipes'

export default createStore({
  modules: {
    recipes: recipesModule,
  },
})
