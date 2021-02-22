import { createRouter, createWebHistory } from 'vue-router'
import Create from '../views/Create'
import RecipesList from '../views/RecipesList'
import Details from '../views/Details'
import Update from '../views/Update'
import NotFound from '../views/NotFound'

const routes = [
  {
    path: '/',
    redirect: '/recipes',
  },
  {
    path: '/recipes',
    name: 'RecipesList',
    component: RecipesList,
  },
  {
    path: '/recipes/create',
    name: 'Create',
    component: Create,
  },
  {
    path: '/recipes/:id',
    name: 'Details',
    component: Details,
  },
  {
    path: '/recipes/:id/update',
    name: 'Update',
    component: Update,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
