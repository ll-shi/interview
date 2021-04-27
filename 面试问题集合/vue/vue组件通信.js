/**
 * 在子组件中访问父组件上的属性。
 * 1）通过$root属性，相当一个全局的store一样。
 * 2）通过在子组件上定义ref，然后在父组件上定义this.$refs['ref名']
 * 3）通过在父组件中提供provide，然后在子组件中inject
 * - 父子组件通信
 * 1）使用props接收属性，然后v-on，来监听$emit()触发的自定义事件来通信。
 * - 非父子组件通信
 * - 事件总线
 * ！相当一个全局的仓库，任何组件都可以去这个仓库发送或者监听事件。
 * ！！初始化事件总线 vue.prototype.$eventBus = new Vue();
 * !!!向eventBus发送事件,this.eventBus.$emit(事件名，value) 
 * !!!监听事件总线方法，this.eventBus.$on(事件名,cb)
 * 
 */