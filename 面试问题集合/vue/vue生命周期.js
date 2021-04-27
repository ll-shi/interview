/**
 * vm对象(VUE实例)从开始创建，初始化数据，编译模版，挂在dom，渲染，更行节点，销毁这一系列过程，我们管这叫做vue的生命周期
 * - vue生命周期8个阶段
 * 1）beforeCreated 在这之前会进行一个init Event&lifecycle (初始化事件跟生命周期)el属性没有建立，data属性也没有。基本什么事情都做不了
 * 2）created  会进行一个init injection(注入依赖) 这个阶段元素是否有一个挂载点，如果没有就通过 $mount(el)来判断是否有挂载点。如果有挂载点
 * 就检测是否有一个templat选项，然后进行一个编译。然后执行beforeMount钩子函数
 * 3)beforeMount 之后监测el对应的dom元素是否已经加载到文档流中，然后执行mounted
 * 4)mounted 监测数据，如果数据更新，就执行beforeUpdate
 * 5)beforeUpdated
 * 6)updated
 * 7)beforeDestroy
 * 8)destroyed
 */