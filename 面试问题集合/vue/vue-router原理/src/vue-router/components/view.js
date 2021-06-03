export default {
  functional: true,
  render(h,{parent}){
    const routerMap = parent.$router.routeMap;
    const path = parent.$route.path;
    return h(routerMap[path]); 
  }
}