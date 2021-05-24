// 使用reduce
function flat(arr){
  return arr.reduce((result,item)=>{
    return result.concat(Array.isArray(item) ? flat(item) : item);
  },[])
}
// 使用拓展运算符
function flat(arr){
  while(arr.some(item => Array.isArray(item))){
    arr = [].concat(...arr);
  }
  return arr;
}
// 使用toString
function flat(arr){
  return arr.toString().split(',').map(item => +item);
}
// 使用generator,返回一个迭代器
function flat(arr){
  function* flatHelper(arr){
    for(const item of arr){
      if(Array.isArray(item)){
        yield* flatHelper(item);
      }else{
        yield item;
      }
    }
  }
  return [...flatHelper(arr)];
}

let arr = [1,2,3,[1,3,[1,3]]];
let result = flat(arr);
console.log(result);