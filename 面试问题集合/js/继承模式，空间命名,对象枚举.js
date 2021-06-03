/**
 * 单继承
 * 1）传统方式：原型链继承  弊端：会把不想继承的也给继承过来。很影响效率。 所以很快被毙掉。
 * 2）借用构造函数。 改变this指向。可以理解成一种继承，并不会继承到原型链上。好处当别人的方法涵盖了你的代码的时候使用call来改变this可以减少
 * 代码的冗余。
 * 3）共享原型 让多个function同时继承一个原型对象。 弊端：修改一个function的原型，其他function也会受影响。
 * 4）圣杯模式 
 * 多继承：mixin模式
 * 其实是构造函数的继承
 */
// 圣杯模式
function inherit(origin,target){
  var Fn = function(){};
  Fn.prototype = origin.prototype;
  target.prototype = new Fn();
  target.prototype.constructor = target;
}
// 圣杯高大上写法，使用闭包的特点，避免多次声明f函数。
var inherit = (function(){
  var f = function(){};
  return function(origin,target){
    f.prototype = origin.prototype;
    target.prototype = new f();
    target.prototype.constructor = target;
  }
})()
// 传统方式
function inherit(origin,target){
  target.prototype = new origin();
}
/**
 * 对象枚举（或者说是对象的遍历）
 * 1）利用for-in循环，但是会遍历到原型上的属性
 * 2）hasOwnProperty(prop)判断对象上是否包含该属性，配合for-in进行一个对象的枚举
 */
/**
 * A instanceof B 判断A的原型链上有没有B的原型
 */
function Person(name,age){
  this.name = name;
  this.age = age;
}
// 创建子类
function superClass(){
  superClass.prototype = {
    // 定义父类上的方法
  }
}
function subClass(){
  // 也可以达到圣杯模式继承的效果。
  subClass.prototype = Object.create(superClass.prototype,Object.getOwnPropertyDescriptors({
    // 定义方法或者属性
  }))
}
var person = new Person('llshi',1);
person instanceof Person; // true
