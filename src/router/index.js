import { createRouter, createWebHistory } from 'vue-router'
// import Create from '../views/Create'
import RecipesList from '../views/RecipesList'
import Details from '../views/Details'
import Form from '../components/Form'
import Login from '../components/auth/Login'
import Signup from '../components/auth/Signup'
// import Update from '../views/Update'
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
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/recipes/create',
    name: 'Create',
    component: Form,
  },
  {
    path: '/recipes/:id',
    name: 'Details',
    component: Details,
  },
  {
    path: '/recipes/:id/update',
    name: 'Update',
    component: Form,
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
