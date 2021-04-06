/**
 * 事件处理模型
 * 1）事件冒泡
 * 2）事件捕获
 * - 取消事件冒泡
 * 1）标准写法 e.stopPropragation()
 * 2) ie独有 e.cancelBubble = ture
 */
// 兼容性取消事件冒泡
function stopBubble(event){
  if(event.stopPropragation){
    event.stopPropragation()
  }else{
    event.cancelBubble = true;
  }
}

/**
 * 默认事件例子
 * 1）右键弹出菜单
 * 2）a标签跳转
 * 3）表单提交
 * - 阻止默认事件方法
 * 1）return false 以对象属性的方式注册的事件才生效
 * 2）e.preventDefault()
 * 3)e.returnValue = false (兼容IE)
 */
// 兼容性阻止默认事件
function cancelHandler(event){
  if(event.preventDefault){
    event.preventDefault();
  }else{
    event.returnValue = false;
  }
}