import { createRouter, createWebHistory } from 'vue-router'
import Create from '../views/Create'
import RecipesList from '../views/RecipesList'
import Details from '../views/Details'

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
    props: true,
  },
  {
    path: '/notFound(.*)',
    component: null,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
