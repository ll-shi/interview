/**
 * 组件循环使用场景：文件管理系统，评论
 * 注意点：容易导致循环依赖错误
 * 解决方案：
 * 1）全局注册
 * 2）使用webpack的异步import {
 *    components: {
 *      '组件名': () => import('路径名')
 *    }
 * }
 * 3）使用钩子函数 beforeCrate:function(){
 *      this.$options.components['组件名'] = require('路径')；
 *   }
 */