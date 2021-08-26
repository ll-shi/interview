/**
 * 渲染函数render接收参数：
 *  1）createElement,返回值是一个vnode
 *  2）如果组件是函数式组件会额外接收一个content参数，为函数式组件提供上下文信息。
 *  createElement函数参数：
 *  1）父标签名称string，或者组件对象
 *  2) 与模版中attribute对应的数据对象，是可选的。
 *  3）子节点 string 或者 array
 *  注意点：所有render函数中的vnode节点必须是唯一的，也就是说不能把一个通过createElement创建的函数使用两次。
 *  可以通过工厂函数来实现创建多个相同节点
 *  Array.apply(null,{length:20}).map(()=>createElement('p','hi'))
 */