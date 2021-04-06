// 区分原因：在进行拖拽的时候会触发click事件
var firstTime = 0,
    lastTime = 0,
    key = false;
document.onmousedown = function(){
  firstTime = new Date().getTime();
}
document.onmouseup = function(){
  lastTime = new Date().getTime();
  if(lastTime - firstTime < 300){
    key = true;
  }
}
document.onclick = function(){
  if(key){
    console.log('fafa');
    key = false;
  }
}