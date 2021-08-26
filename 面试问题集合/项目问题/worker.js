// onmessage = function(e) {
//   console.log('Message received from main script');
//   var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
//   console.log('Posting message back to main script');
//   postMessage(workerResult);
// }
// js脚本会运行在worker内部，所以可以直接调用onmessage,跟postMessage。
var count = 0;
var runTime;
var startTime = Date.now();
setInterval(()=>{
  runTime = Date.now();
  count++;
  console.log('worker任务：',count + '--延时:',runTime - (startTime+1000));
  startTime = Date.now();
},1000)