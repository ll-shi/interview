function getWBC(container,results){
  let containerTotal = container[0] * container.length;
  container.map(v=>{
    containerTotal -= v;
  })
  results.push(containerTotal);
}
function getIndex(height){
  let left=0,right,isFindeLeft = false;
  let res = [];
  let findRight = (index,value) => {
    index - left > 1 && index < height.length -1 && (
      right = index,
      value >= height[index-1] && value > height[index+1] ? (res.push(right),left=right) : right++
    );
  };
  let findLeft = (index,value) => {
    height[left] > value ? (isFindeLeft = true,res.push(left)) : left++;
  }
  height.map((value,i) => {
    let next = () => {
      isFindeLeft ? findRight(i,value) : findLeft(i,value);
    };
    i > 0 && next();
  });
  res.length > 2 && filterIndex(res,height);
  return res;
}
function getFilterList(arr){
  let min = getMin(arr);
  let max = getMax(arr);
}
function filterIndex(Indexs,height){
  // 解决index不准确问题
  let prev=0,next=2,cur = 1;
  while(prev < Indexs.length && Indexs.length > 2){
    if(height[Indexs[cur]] < height[Indexs[prev]] && height[Indexs[cur]] < height[Indexs[next]]){
      Indexs.splice(cur,1);
      prev++;
      cur = prev+1;
      next = prev+2;
    }else{
      prev++,next++,cur++;
    }
 }
}
function resetContainer(container){
  let newContainer = [];
  container = newContainer;
}
function initCByIndex(lIndex,rIndex,container,height){
  container = height.slice(lIndex,rIndex+1);
  return simplyContainer(container);
}
function simplyContainer(container){
  let rightIndex = container.length-1;
  left = container[0];
  let right = container[rightIndex];
  left = right = right > left ? left : right;
  container = container.map((v,i)=>{
    v = v > left ? left : v;
    return v;
  })
  return container;
}
function getAllContainer(height){
  height.push(0); //解决后面历史问题。
  let results = [];
  let container = [];
  let Indexs = getIndex(height);
  let flag = Indexs.length > 1;
  flag && Indexs.map((index,i) => {
    i > 0 && (()=>{
      let simplyContainer = initCByIndex(Indexs[i-1],Indexs[i],container,height);
      getWBC(simplyContainer,results);
      resetContainer(container);
    })();
  });
  return results.reduce((prev,cur) => prev + cur,0);
}
let height1 = [0,1,2,0,3,0,1,2,0,0,4,2,1,2,5,0,1,2,0,2];
let height2 = [0,1,0,2,1,0,1,3,2,1,2,1];
let height3 = [4,2,0,3,2,5];
let height4 = [5,8,9,4,9,6,1,4];
let height5 = [2,8,5,5,6,1,7,4,5];
let height6 = [6,4,2,0,3,2,0,3,1,4,5,3,2,7,5,3,0,1,2,1,3,4,6,8,1,3];
let res = getAllContainer(height6);
console.log(res);