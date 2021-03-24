// 获取随机验证码
function getCaptcha(number){
  let strArr = `0123456789qwertyuiopasdfghjklzxcvbnQWERTYUIOPASDFGHJKLZXCVBNM`.split('');
  strArr.sort(() => Math.random() - 0.5);
  return strArr.join('').substring(0,number);
}
let code = getCaptcha(4);
console.log(code);
