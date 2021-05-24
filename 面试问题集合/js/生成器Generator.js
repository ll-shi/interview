/**
 * 生成器注意点：
 * 1）生成器函数内部可以调用其他生成器函数，但是需要加上*
 * 2）不能跟async连用。不能同时生成一个生成器跟一个promise.
 * 3）yield关键字只能在生成器函数内部使用
 * 生成器函数与普通函数的区别
 * 1）调用普通函数之后，函数体会立即执行。
 * 2）调用生成器函数之后，函数体不会立即执行，生成器函数体只是为了给生成器每次迭代提供数据。
 * 3）每次调用生成器对象的next方法，将导致生成器函数运行到yield位置
 */
function* createIterator(arr){
  for(const item of arr){
    console.log(item);
    yield item;
  }
}
let arr = [1,3,4,2,59,9];
let Iterator = createIterator(arr);
let first = Iterator.next();
function* part(){
  yield 'a';
  yield 'b';
}
function* real(){
  yield* part();
  yield 1;
  yield 3;
}
let arr1 = [...real()];
console.log(arr1);
console.log(first);