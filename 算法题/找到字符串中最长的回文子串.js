function filterRes(res){
  // 取出最长回文
}
function isHui(str){
  // 判断是否是回文
  
}
function getStr(str,res=[]){
  let flag = isHui(str);
  flag && (res.push(str));
  let next = () => {
    let strArr = str.split('');
    strArr.map((v,i)=>{
      i > 0 && getStr(str.substring(i-1,i),res)
    });
    strArr.map((v,i)=>{
      getStr(str.substring(i+1),res);
    })
  } 
  return str.length > 1 ? next() : (res.push(str),res); 
}
