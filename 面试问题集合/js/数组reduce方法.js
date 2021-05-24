// 手写简易版reduce方法
function myReduce(cb,initValue){
  let result;
  let i;
  Array.isArray(this) && (()=>{
    result = initValue;
    for(i = 0; i < this.length; i++){
      result = cb(result,this[i]);
    }
  })();
  return result;
}
// 使用reduce方法统计数组中每个元素出现的次数
function count(arr){
  return arr.reduce((result,item) => {
    item in result ? result[item]++ : result[item] = 1;
    return result;
  },{})
}
// 统计字符串中字母出现的次数
function countStr(str){
  return str.split('').reduce((result,i) => {
    i in result ? result[i]++ : result[i] = 1;
    return result;
  },{})
}
// 通过属性对Object进行分类
function groupByProperty(objArr,property){
  let key;
  return objArr.reduce((result,obj) => {
    key = obj[property];
    !result[key] && (result[key] = []); 
    result[key].push(obj); 
    return result;
  },{})
}
// 使用reduce对数组进行一个去重

var arr = ['abc','llshi','wthe','abc','llshi'];
let result = count(arr);
console.log(result);
let test = [1,2,3,4,5];
let res = myReduce.call(test,(result,i)=> result + i,0);
console.log(res);
let strRes = countStr('llshi');
console.log(strRes);
let people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];
let groupedPeople = groupByProperty(people, 'age');
console.log(groupedPeople);

