/**
 * arguments.callee 指向的就是函数的引用，在立即执行函数中可能会用到
 */
var num = (function(n){
  if(n===1){
    return 1;
  }
  // 立即执行函数没有名字，只能使用arguments.callee
  return n*arguments.callee(n-1);
})(20)
/**
 * caller 是函数自己的属性。function.caller 代表了函数的被调用者。没鸟用
 */
function demo(){
  console.log(demo.caller); // [Function test];
}
function test(){
  demo();
  console.log('hahha');
}
test();