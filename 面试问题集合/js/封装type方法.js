// 区别数据类型
/**
 * typeof 操作符只有6种数据类型
 * 1）underfined
 * 2) string
 * 3) number
 * 4) boolean
 * 5) object （null,数组和对象）
 * 6) function
 */
function type(obj){
  var res = typeof obj;
  if(!obj){
    return 'null';
  }else if(res == 'object'){
    // 注意点 '/'需要进行一个转译处理
    return Object.prototype.toString.call(obj).match(/\[object (.*)\]/)[1];
  }else{
    return res;
  }
}
var ret = type([]);
console.log(ret);
console.log(type(123));
console.log(type(true));