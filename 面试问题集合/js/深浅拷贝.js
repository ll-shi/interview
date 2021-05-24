/**
 * -浅拷贝
 * 1）最简单方法使用 Object.assign({},target);
 * 2) 使用for-in循环枚举对象属性，然后添加到新对象中去
 * -深拷贝
 * 1) 最简单方法 JSON.parse(JSON.stringify(target))
 * 2）使用递归
 */
// 区分普通数据类型跟对象类型
function type(obj){
  let res = typeof obj;
  !obj ? res = null : res === 'object' && 
    (res = Object.prototype.toString.call(obj).match(/\[object (.*)\]/)[1]);
  return res;
}
function cloneObject(source,target,deep){
  console.log('开始克隆对象');
  for(const [key,value] of Object.entries(source)){
    target[key] = typeof value === 'object' && deep ? clone(value,deep) : value;
  }
}
function cloneArray(source,target,deep){
  console.log('开始克隆数组');
  source.reduce((target,cur) => {
    let item = typeof cur === 'object' && deep ? clone(cur,deep) : cur;
    target.push(item);
    return target;
  },target)
}
function clone(source,deep=true){
  let target;
  if(type(source) === 'Object'){
    cloneObject(source,target={},deep);
  };
  if(type(source) === 'Array'){
    cloneArray(source,target=[],deep);
  }
  return target;
}
// console.log(type(1),type({}),type([]),type(true));
let people = {name:'llshi'};
let arr = [1,3,people,['a','b']];
let secondArray = clone(arr);
console.log(secondArray,arr===secondArray,people === secondArray[2]);