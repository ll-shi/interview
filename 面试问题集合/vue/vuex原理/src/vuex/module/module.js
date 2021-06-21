import forEachValue from '../utils.js'
class Module{
  constructor(rawModule){
    this._rawModule = rawModule || {};
    this._children = rawModule.modules || {};
    this.state = rawModule.state || {};
  }
  getChild(key){
    return this._children[key];
  }
  forEachChild(cb){
    forEachValue(this._children,cb);
  }
  forEachGetter(cb){
    if(this._rawModule.getters){
      forEachValue(this._rawModule.getters,cb);
    }
  }
  forEachMutation(cb){
    if(this._rawModule.mutations){
      forEachValue(this._rawModule.mutations,cb);
    }
  }
  forEachAction(cb){
    if(this._rawModule.actions){
      forEachValue(this._rawModule.actions,cb);
    }
  }
}
export default Module;