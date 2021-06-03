/**
 * 创建vue组件的方式
 * 1）直接编写.vue文件
 * 2）通过工厂函数的方式来注册全局组件
 * 3）通过new Vue(config)构造函数来注册局部组件 --经典使用场景：vue项目中main.js中
 *  new Vue({
 *   render: h => h(App),
 *   router,
 * }).$mount('#app') 创建一个vue局部组件挂载在id为app的dom上。
 */