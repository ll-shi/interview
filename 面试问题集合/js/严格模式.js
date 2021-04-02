/**
 * 严格模式 因为大多数浏览器都是基于es3和es5的新增语法使用。如果es3跟es5产生的部分就使用es3的标准，使用严格模式后
 * 如果产生冲突就使用es5的一个标准。
 * -严格模式启动
 * 1）全局严格模式 写在全局代码的最顶部
 * 2）局部严格模式 写在局部代码的最顶部
 * 3) 字符串启动　"use strict"
 * - 特点
 * 1）简单来说就是更严格了
 */

// 启用全局严格模式
// "use strict"; 
var name = 'llshi';
// name = 'llshi'; 严格模式下会报错。
function test(){
  "use strict"; // 在局部代码块的最顶端使用 ‘use strict’
  console.log('hahaha');
}
/**
 * with的作用。会改变作用域链。with里面的对象会添加到作用域链的最顶端。
 * 但是在严格模式下不能使用
 */
with({name:'hwt'}){
  console.log(name);// hwt
}
