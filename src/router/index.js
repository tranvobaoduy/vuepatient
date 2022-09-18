import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import chidinh from '@/views/chidinh.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/chidinh',
    name: 'chidinh',
    component: chidinh,
    meta: { allowAnonymous: true, title: "Danh sach chi dinh" },
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router

