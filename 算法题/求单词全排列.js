function insetF2A(first,allType){
  let result = [];
  allType.map(value => {
    result.push(first+value); // 插入到字符串首位置
    getOtherRes(first,value,result); // 插入到其他位置
  });
  return result;
}
function getOtherRes(first,word,res){
  word.split('').map( (v,i) => {
    let newWord = word.substring(0,i+1)+first+word.substring(i+1);
    first !== v && res.push(newWord); //进行了一个去重
  })
}
function getAllType(word){
  let result = []
  let next = () => {
    let first = word[0];
    let res = getAllType(word.substring(1));
    return insetF2A(first,res);
  }
  return word.length > 1 ? next() : (result.push(word),result);
}
let res = getAllType('bbb');
let res1 = getAllType('abc');
console.log(res);
console.log(res1);