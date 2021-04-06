var wrapper = document.querySelector('.wrapper');
wrapper.onclick = function(e){
  var event = e ?? window.event; // IE中事件对象是window.event
  var target = event.target ?? event.srcElement; // IE上只有srcElement
}