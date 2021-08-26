/**
 * 参数必传跟可选问题
 */
function testArgs(...args){
  // 参数2可选
  let arg1,arg2,arg3;
  args.length < 3 ? [arg1,arg3] = args : [arg1,arg2,arg3] = args; 
  console.log(arg1,arg2,arg3);
}
testArgs(1,3)