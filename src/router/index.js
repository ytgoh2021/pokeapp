import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import SearchView from '../views/SearchView'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },{
    path: '/search',
    name: 'SearchView',
    component: SearchView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router