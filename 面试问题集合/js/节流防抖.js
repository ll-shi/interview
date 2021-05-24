/**
 * 防抖节流首先是把一个函数变成一个可以防抖，节流功能的函数。
 * 防抖就相当做电梯
 * 节流就相当做高铁
 * 应用场景：防抖：防止表单的重复提交，判断元素是否滑到底部。
 * 节流：枪的子弹发射。
 */
function dou(cb,duration=3000){
  var timer;
  let fn = function(...args){
    timer && clearTimeout(timer);
    timer = setTimeout(()=>{
      cb(...args);
    },duration); 
  }
  return fn;
}
// 标准的一个锁机制
function jie(cb,duration = 3000,immediately = true){
  //是否第一次立即执行一次
  var lock = true;
  var t;
  var flag;
  var fn = function(...args){
    lock && (lock = false,setTimeout(()=>{
      cb(...args);
      lock = true;
    },duration));
  }
  var fnIm = function(...args){
    flag = !t || Date.now() - t >= duration;
    flag && cb(...args);
    t = Date.now();//上次执行的时间戳
  }
  return immediately ? fnIm : fn;
}