/**
 * 把查询参数转换成对象的方式
 * @param {*} url 
 * @returns 
 */
function param2Obj(url) {
  const search = url.split('?')[1];
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
            decodeURIComponent(search)
              .replace(/"/g, '\\"')
              .replace(/&/g, '","')
              .replace(/=/g, '":"')
              .replace(/\+/g, ' ') +
          '"}'
  )
}
// let url = 'https://www.google.com/search?q=tentcent&oq=tentcent&aqs=chrome..69i57j0i10l9.4958j0j7&sourceid=chrome&ie=UTF-8';
// 简单的事件数据埋点
function buryPoint(vue,options={}){
  if(!options || !options.url){
    throw '埋点接口地址(url)未配置'
  }
  const method = options.method ?? 'get';
  let durationRoute = options.durationRoute || null;
  const router = options.router;
  const sign = options.sign;
  // 创建vue全局自定义指令，通过自定义指令来实现埋点
  vue.directive('bPoint',function(el,binding){
    el.onclick = function(){
      // 绑定必须要是对象类型。
      if(binding.value['params'] && Object.prototype.toString.call(binding.value['params']) !== '[object Object]'){
        throw 'params必须为一个对象'
      }
    }
    let params = binding.value['params'] ?? {}; 
  })
}