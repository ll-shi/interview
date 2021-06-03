/**
 * 通过Promise的resolve方法来进行一个路由的懒加载（已决状态传送的数据就为组件）
 * 通过vue的异步组件和webpack的代码分割功能。
 * const foo = Promise.resolved({组件本身});
 * 通过import方法导入组件。
 */