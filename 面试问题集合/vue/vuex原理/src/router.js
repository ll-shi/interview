import VueRouter from '../../vue-router原理/src/vue-router'
import Vue from 'vue'
import Home from './views/Home.vue'
Vue.use(VueRouter)
let routes = [
  {
    path:'/',
    component: Home, 
  },
  {
    path:'/about',
    component: () => import('./views/about')
  },
  {
    path:'/activity',
    component: () => import('./views/activity')
  },
  {
    path:'/classes',
    component: () => import('./views/classes')
  },
  {
    path:'/students',
    component: () => import('./views/students.vue')
  }
];
export default new VueRouter({
  routes,
  mode:'history'
});