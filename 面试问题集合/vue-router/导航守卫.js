/**
 * 导航守卫
 * 全局前置守卫  router.beforeEach 可以中断当前导航，开启一个新的导航。回调接收三个参数
 * （to,from,next）
 * 全局后置守卫 router.afterEach 回调函数接收两个参数 （to,from）
 * 后置守卫不会改变导航本身
 * 路由独享守卫beforeEnter
 * - 组件内守卫
 * 1）beforeRouterEnter
 * 2) beforeRouterUpdate
 * 3) beforeRouterLeave
 * -完整的导航解析流程(从组件到组件)
 * 1）导航被触发
 * 2）在失活的组件中调用beforeRouterLeave守卫
 * 3）调用全局的beforeEach
 * 4）如果是重用组件，在重用的组件中调用beforeRouterUpdate守卫
 * 5）在路由配置里调用beforeEnter
 * 6) 解析异步路由组件
 * 7）在被激活的组件中调用beforeRouterEnter
 * 8) 调用全局的beforeResolve
 * 9）导航被确认
 * 10）调用全局的afterEach
 * 11) 调用组件的beforeRouterEnter传入next的回调函数
 */
