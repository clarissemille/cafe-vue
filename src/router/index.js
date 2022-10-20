

import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ContactPage from '../views/ContactPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutPage.vue')
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router