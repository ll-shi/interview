import Vue from 'vue';
import VueRouter from './vue-router';
import Home from './views/Home.vue'
Vue.use(VueRouter);
let routes = [
  {
    path:'/',
    component: Home, 
  },
  {
    path:'/about',
    component: () => import('./views/about.vue')
  },
  {
    path:'/activity',
    component: () => import('./views/activity.vue')
  },
  {
    path:'/classes',
    component: () => import('./views/classes.vue')
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