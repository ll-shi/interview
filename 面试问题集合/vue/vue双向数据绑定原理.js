/**
 * vue双向数据绑定原理
 * 在创建vm对象的时候会进行一个初始化，初始化会对传入options中的data进行一个代理。
 * 通过Object.defineProperty中定义的属性set方法进行一个数据拦截，对data中数据进行修改，并且在修改完之后调用渲染节点的方法对节点进行一个重新渲染。
 * 然后就是使用Object.defineProperty()通过第三个参数配置对象中的value属性对数组的原型上的方法进行了一个重新封装。然后
 * 调用数组的一些方法也可以达到响应式的一个效果。
 */
function render(){

}
 