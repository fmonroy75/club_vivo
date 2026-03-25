import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Pricing from '../views/Pricing.vue'
import Contact from '../views/Contact.vue'

const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },

  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing
  },

  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },

  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue') // Lazy-loaded admin page
  }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
