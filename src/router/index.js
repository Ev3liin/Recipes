import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Create from '../views/Create'
import Details from '../views/Details'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
