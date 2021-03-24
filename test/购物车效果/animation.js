import Vue from 'vue';
import temp from './index.vue';
// temp为构造函数提供一个模版
const Animation = Vue.extend(temp);
const carAnimation = function({startX,startY,endX,endY,src,width,height}){
  const carVm = new Animation({
    // options
    el: document.createElement('div'),
    data(){
      return {
        moveX:startX,
        moveY:startY,
        sx:1,
        sy:1,
        opacity:1,
        exist:true,
        src,
        width,
        height,
      }
    }
  });
  document.body.appendChildren(carVm.$el);
  // 可以用vm的$el获取到el节点。
  setTimeout(()=>{
    carVm.moveX = endX;
    carVm.moveY = endY;
    carVm.sx = 0.1;
    carVm.sy = 0.1;
    carVm.opacity = 0;
  })
  // 使用定时器删除动画组件
  setTimeout(()=>{
    carVm.exist = false;
  },1000);
}
