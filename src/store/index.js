import { createStore } from 'vuex'
import recipesModule from './modules/recipes'
import authModule from './modules/auth'

export default createStore({
  modules: {
    recipes: recipesModule,
    users: authModule,
  },
})
