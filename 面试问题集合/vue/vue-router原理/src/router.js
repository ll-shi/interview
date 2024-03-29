import Vue from 'vue';
import VueRouter from './vue-router';
import Home from './views/Home'
Vue.use(VueRouter);
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
})