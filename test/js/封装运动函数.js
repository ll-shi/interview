// 只要算出item距离wrapper左侧的距离，大于1/2wrapper就是在右侧，小于1/2在左侧。注意需要加上一个1/2item.width
/**
 * 
 * @param {*} start item的left 
 * @param {*} end   偏移距离，有正有负。负代表左运动，正代表右移动
 * @param {*} dom   运动的dom元素
 * @param {*} porp  dom元素移动属性
 */
function move(start,end,dom,porp){
  let dis = 0;
  let speed = 5;
  // 根据end来确定方向
  speed = end > 0 ? speed : -speed;
  const t = setInterval(()=>{
    dis += speed;
    dom[prop] = start + dis;
    // 当dis的绝对值>end的绝对值。直接相加
    if(Math.abs(dis) > Math.abs(end)){
      dom[prop] = start + end;
      // 最后清空定时器
      clearInterval(t);
    }
  },2000)
}
function scroll(i,e){
  // this表示vm
  if(this.move){
    // 滑动的时候就不用运动
    return ;
  }
  // 点击的时候添加运动效果
  this.index = i;
  const {wrapper} = this.$refs;
  const itemWidth = e.target.offsetWidth;
  // getBoundingClientRect()接口获取位置信息。具有element的left,right,top,bottom四个属性。
  const itemleft = e.target.getBoundingClientRect().left;
  const wrapperWidth = wrapper.offsetWidth;
  move(wrapper.scrollLeft,itemleft + itemWidth/2 - wrapperWidth/2,wrapper,scrollLeft);
  // 移动之后请求数据。
  
}