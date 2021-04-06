/**
 * 查看滚动条的距离。
 * 1）window.pageXOffset
 * 2) window.pageYOffset
 * 缺点：不兼容ie8，以及ie8以下
 * 兼容性方法
 * 1) document.body.scrollLeft,document.body.scrollTop.
 * 2) document.documentElement.scrollLeft,document.documentElement.scrollTop
 */
// 封装兼容性获取滚动条写法
function getScrollOffset(){
  if(window.pageXOffset){
    return {
      x:window.pageXOffset,
      y:window.pageYOffset
    };
  }
  return {
    x:document.body.scrollLeft + document.documentElement.scrollLeft,
    y:document.body.scrollTop + document.documentElement.scrollTop
  };
}
/**
 * 封装兼容性获取浏览器视口大小的方法
 */
function getViewPort(){
  if(window.innerWidth){
    return {
      w:window.innerWidth,
      h:window.innerHeight
    }
  }else if(document.compatMode === 'BackCompat'){
    // 怪异模式
    return {
      w:document.body.clientWidth,
      h:document.body.clientHeight
    }
  }else{
    return {
      w:document.documentElement.clientWidth,
      h:document.documentElement.clientHeight
    }
  }
}
