/**
 * 导航守卫种类：
 * 1）全局守卫 router.beforeEach router.afterEach router.beforeResolve
 * 2）路由独享守卫 在路由内进行配置
 * 3）组件守卫 
 * 导航的完整过程 （从当前组件到目标组件的一个过程）
 * 1）在失活的组件里调用beforeRouterLeave
 * 2）调用全局的beforeEach守卫
 * 3）在重用组件里调用beforeRouterUpdata
 * 4）在配置路由里调用beforeEnter
 * 5）解析异步路由组件
 * 6）在激活的组件中调用beforeRouterEnter
 * 7）调用全局的beforeResolve
 * 8）导航被确认 
 * 9）调用全局的afterEach
 */