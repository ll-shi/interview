import Module from './module.js'
import forEachValue from '../utils.js'
class ModuleCollection{
  constructor(rawRootModule){
    this.register([],rawRootModule);
  }
  register(path,rawModule){
    const newModule = new Module(rawModule);
    if(path.length === 0){
      this.root = newModule;
    }else{
      const parent = this.getModule(path.slice(0,-1));
      const moduleName = path[path.length - 1];
      parent._children[moduleName] = newModule;
    }
    // 如果当前模块存在子模块
    if(rawModule.modules){
      // 拿到子模块
      const modules = rawModule.modules;
      // 注册子模块
      forEachValue(modules,(childModule,moduleName)=>{
        this.register(path.concat(moduleName),childModule)
      })
    }
  }
  getModule(path){
    return path.reduce((module,key)=>module.getChild(key),this.root);
  }
  getNameSpace(path){
    let module = this.root;
    return path.reduce((namespace, key) => {
      module = module.getChild(key);
      return namespace + (module.namespaced ? key + '/' : '');
    }, '');
  }
}
export default ModuleCollection