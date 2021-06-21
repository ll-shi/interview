import History from './history.js';
import install from './install.js';
class VueRouter{
  constructor(options){
    this.routeMap = this.createRouteMap(options.routes || []);
    this.mode = options.mode || 'hash';
    this.history = new History();
    this.init();
  }
  createRouteMap(routes){
    const routeMap = {};
    routes.map(route => {
      routeMap[route.path] = route.component; 
    })
    return routeMap;
  }
  init(){
    const hashMode = () => {
      // url#后面的值就是hash值
      location.hash = location.hash || '/';
      document.addEventListener('DOMContentLoaded',() => {
        // 解决第一次进入组件的问题。
        this.history.current.path = location.hash.slice(1);
      })
      // 解决前进后退显示组件问题
      window.addEventListener('hashchange',() => {
        this.history.current.path = location.hash.slice(1);
      })
    };
    const historyMode = () => {
      document.addEventListener('DOMContentLoaded',() => {
        this.history.current.path = location.pathname;
      })
      window.addEventListener('popstate',() => {
        this.history.current.path = location.pathname;
      })
    }
    this.mode === 'hash' ? hashMode() : historyMode();
  }
}
VueRouter.install = install;
export default VueRouter;