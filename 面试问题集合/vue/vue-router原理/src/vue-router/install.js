import Link from './components/link.js';
import View from './components/view.js';
export default function(Vue){
  Vue.mixin({
    beforeCreate(){
      if(this.$options.router){
        this._router = this.$options.router;
        Vue.util.defineReactive(this, '_route', this._router.history.current)
      }
    }
  });
  Object.defineProperty(Vue.prototype,'$router',{
    get(){
      return this.$root._router;
    }
  });
  Object.defineProperty(Vue.prototype,'$route',{
    get(){
      return this.$root._route;
    }
  });
  Vue.component('router-link',Link);
  Vue.component('router-view',View);
}