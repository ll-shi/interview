function addEvent(elem,type,handle){
  if(elem.addEventListenter){
    elem.addEventListenter(type,handle,false); // false代表取消事件捕获
  }else if(elem.attachEvent){
    elem.attachEvent('on'+type,function(){
      handle.call(elem);
    });
  }else{
    elem['on'+type] = handle;
  }
}