/**
 * ios中只识别 ‘/’不识别 ‘-’
 * 安卓都可以识别
 * date.valueOf()返回当前事件的毫秒数。
 */
function createDate(date){
  return new Date(date.replace('/-/g','/'))
}
// 例子，活动倒计时

function countTime(startTime = new Date().valueOf(),endTime){
  
}
