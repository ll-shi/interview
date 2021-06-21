function vuexInit(){
  const options = this.$options;
  if(options.store){
    this.$store = options.store;
  }else{
    if(options.parent && options.parent.$store){
      this.$store = options.parent.$store;
    }
  }
}
function applyMixin(Vue){
  // 使用了全局混入，直接影响所有vm实例。
  Vue.mixin({
    beforeCreate:vuexInit
  })
  // 钩子函数混入，会以数组的形式调用方法。
}
export default applyMixin