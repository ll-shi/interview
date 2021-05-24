// 可以用在多个filter
function pipe(...args){
  args = [...args];
  return function(val){
    return args.reduce((result,func)=>{
      return func(result);
    },val)
  }
}