function Cury(fn,...args){
  let argsLen = fn.length;
  let flag = args.length < argsLen;
  let step = function(...arg){
    args = [...args,...arg];
    console.log(args);
    let flag = args.length < argsLen;
    flag ? console.log('参数不够可以继续柯里化') : console.log('柯里化完成');
    return Cury(fn,...args);
  };
  return flag ? step : fn(...args);
}
function add(a,b,c,d){
  return a+b+c+d;
}
let fn = Cury(add,1,2);
let fina = fn(3);
let result = fina(4);
console.log(result);
