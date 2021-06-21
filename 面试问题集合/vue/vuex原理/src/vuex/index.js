import applyMixin from './mixin.js'
import ModuleCollection from './module/moduleCollection.js'
import {forEachValue,isObject} from './utils.js'
let Vue;
function install(_Vue){
  Vue = _Vue;
  applyMixin(Vue);
}
/**
 * getters相当store的可计算属性
 */
class Store{
  constructor(options){
    // this._vm = new Vue({
    //   data:{
    //     state:options.state || {}
    //   }
    // });
    this._wrapperGetters = {};
    this._makeLocalGetterCache = {};
    // this.state = this._vm.state;
    this._modules = new ModuleCollection(options);
    this._mutations = {};
    this._commiting = false;
    this._actions = {};
    const store = this;
    this._strict == !!options.strict;
    const state = this._modules.root.state;
    installModule(this,state,[],this._modules.root)//安装模块。
    resetStoreVM(this,state);
  }
  // state设置成可计算属性。
  get state(){
    return this._vm.state;
  }
  commit(_type,_payload){
    const {type,payload} = unifyObjectStyle(_type,_payload);
    const entry = this._mutations[type];//入口函数数组
    this._withCommit(()=>{
      entry.forEach(handler => handler(payload));
    })
  }
  _withCommit(fn){
    const commiting = this._commiting;
    this._commiting = true;
    fn();
    this._commiting = commiting;
  }
  dispatch(_type,_payload){
    const {type,payload} = unifyObjectStyle(_type,_payload);
    const entry = this._action[type];
    if(!entry){
      return;
    }
    const result = entry.length > 1 ?
    Promise.all(entry.map(handle => handle(payload)))
    : entry[0](payload);
    return result;
  }
}
// 获取嵌套state
function getNestedState(rootState,path){
  return path.reduce((state,path) => state[path],rootState);
}
// 安装模块
function installModule(store,rootState,path,module){
  // 安装模块中的state，getters，等
  const isRoot = path.length === 0;
  const namespace = store._modules.getNameSpace(path);
  const local = makeLocalContext(store,namespace,path);
  if(!isRoot){
    const parentState = getNestedState(rootState,path.slice(0,-1));
    const moduleName = path[path.length - 1];
    // 挂载子模块
    parentState[moduleName] = module.state;
  }
  module.forEachMutation((mutationFn,mutationName)=>{
    const type = namespace + mutationName;
    registerMutation(store,type,mutationFn,local);
  })
  // 注册getter
  module.forEachGetter((getterFn,getterName)=>{
    const type = namespace + getterName;
    registerGetter(store,type,getterFn,local);
  })
  module.forEachChild((childModule,moduleName) => {
    installModule(store,rootState,path.concat(moduleName),childModule);
  })
}
function registerGetter(store,type,getter,local){
  store._wrapperGetters[type] = function(store){
    let result = getter(local.state,local.getters,store.state,store.getters)
    // console.log(result);
    return result;
  }
}
function registerMutation(store,type,handle,local){
  const entry = store._mutations[type] || (store._mutations[type]=[]);
  entry.push(function(payload){
    handle.call(store,local.state,payload);
  });
}
function resetStoreVM(store,state){
  store.getters = {};
  const computed = {};
  const wrapperGetters = store._wrapperGetters;
  forEachValue(wrapperGetters,(getterFn,getterName) => {
    computed[getterName] = function(){
      getterFn(store);
    };
    // 优化效果。
    Object.defineProperty(store.getters,getterName,{
      get(){
        return getterFn(store);
      },
      enumerable:true
    })
  })
  store._vm = new Vue({
    data:{
      state,
    },
    computed
  })
}
function makeLocalContext(store,namespace,path){
  // 生成本地数据上下文
  const noNamespace = namespace === '';
  const local = {};
  Object.defineProperties(local,{
    state:{
      get:()=>getNestedState(store.state,path),
      enumerable:true
    },
    getters:{
      get:()=> noNamespace ? store.getters : () => makeLocalGetters(store,namespace) 
    }
  })
  return local;
}
function makeLocalGetters(store,namespace){
  if(!store._makeLocalGetterCache[namespace]){
    const splitPos = namespace.length;
    const getterProxy = {};
    for(const [getterName,value] of Object.entries(store.getters)){
      if(getterName.slice(0,splitPos) !== namespace){
        return;
      }
      const localType = getterName.slice(splitPos);
      Object.defineProperty(getterProxy,localType,{
        get:()=> store.getters[getterName],
        enumerable:true
      })
    }
  store._makeLocalGetterCache[namespace] = getterProxy;
  }
  return store._makeLocalGetterCache[namespace];
}
function unifyObjectStyle(type,payload){
  // 统一对象风格
  if(isObject(type)){
    payload = type;
    type = type.type;
  }
  return {
    type,
    payload
  }
}
// 导出的对象就是Vuex
export default {
  Store,
  install
}