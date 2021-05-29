/**
 * Object.freeze使用场景。
 * - 适合展示类场景。如果数据属性需要改变，可以重新替换成一个新的Object.freeze()对象。
 * 对象解冻
 * 可以使用Object.assign({},freezeObj)
 * Object.freeze()能优化vue性能原因：
 * 1）在vue的observe源码中如果对象的属性描述符对象不可以被修改就会直接返回。
 * 不会对代理对象的属性描述符做修改，从而也不能有响应式效果。从而达到节省性能的效果 
 */

// vue中observer源码
function defineReactive(obj,key,val,coustomSetter,shallow){
  // 省略部分代码
  let property = Object.getOwnPropertyDescriptor(obj,key);
  if(property && property.configurable === false){
    return; //所以使用Object.freeze()能够提升vue性能，减少了observer的开销。
  }
  //
}
