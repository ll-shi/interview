function Cury(fn,...args){
  let argsLen = fn.length;
  if(args.length< argsLen){
    console.log('参数不够,可以继续柯里化');
    return function(...arg){
      args = [...args,...arg];
      console.log(args);
      return Cury(fn,...args);
    }
  }else{
    console.log('柯里化完成');
    return function(){
      return fn(...args)
    }
  }
}
function add(a,b,c,d){
  return a+b+c+d;
}
let fn = Cury(add,1,2,3);
let fina = fn(4);
let result = fina();
console.log(result);
