function insetF2A(first,allType){
  let result = [];
  allType.map(value => {
    result.push(first+value); // 插入到字符串首位置
    getOtherType(first,value,result); // 插入到其他位置
  });
  return [...new Set(result)]; // 解决多个type之间造成去重；bd,db,当第一位位b都可以组成bdb
}
function getOtherType(first,word,res){
  word.split('').map( (v,i) => {
    let newWord;
    first !== v && 
    (newWord = word.substring(0,i+1)+first+word.substring(i+1),
    res.push(newWord)); //解决单个type造成的去重，bbd
  })
}
function getAllType(word){
  let result = [];
  let next = () => {
    let first = word[0];
    let allType = getAllType(word.substring(1));
    return insetF2A(first,allType);
  }
  return word.length > 1 ? next() : (result.push(word),result);
}
let res = getAllType('bbb');
let res1 = getAllType('abbd');
console.log(res);
console.log(res1);