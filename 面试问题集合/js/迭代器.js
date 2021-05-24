/**
 * 迭代跟遍历对区别:
 * 遍历：强调把整个数据依次全部取出。
 * 迭代：强调的是依次取数据，并不保证取多少。
 * 迭代器规范：
 * 1）如果一个对象有next方法，并且这个方法返回一个对象。
 * 2）对象必须是{value:值，done:是否迭代完成}的格式。
 * 可迭代规范：
 * 如果一个对象有具有Symbol.iterator.并且属性是一个迭代器的创造函数，那么这个对象就是可迭代的。（该对象是一个可迭代对象）
 */
let arr = [1,3,4,6,90];
// 创建一个迭代器
const iterator = {
  i:0,
  next(){
    let result = {value: arr[this.i],done:this.i>=arr.length};
    this.i++;
    return result;
  }
}
// 上面iterator就是一个生成器
// 取出迭代器中的值
let data = iterator.next();
while(!data.done){
  console.log(data.value);//
  data = iterator.next();
}
// 创建一个可迭代对象
let obj = {
  name:'llshi',
  school:'qinhua',
  [Symbol.iterator](){
    let result = {};
    let i = 0;
    let keys = Object.keys(this);
    result.next = ()=>{
      const result = {};
      result.value = {
        propertyName:keys[i],
        propertyValue:this[keys[i]]
      };
      result.done = i >= keys.length;
      i++;
      return result;
    }
    return result;
  }
}
for(let item of obj){
  console.log(item);
}