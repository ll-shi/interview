/**
 * 字节一面
 * 求二叉树所有根到叶子路径组成数字之和
*/
let root = {
  val:1,
  left:{
    val:2,
    left:{
      val:4,
      left:null,
      right:null,
    },
    right:{
      val:5,
      left:null,
      right:null,
    },
  },
  right:{
    val:3,
    left:null,
    right:null,
  }
}
function add(root,initStr='',nums=[]){
  let next = ()=>{
    let str = initStr + root.val;
    !root.left && !root.right && nums.push(+str);
    root.left && add(root.left,str,nums);
    root.right && add(root.right,str,nums);
  }
  root && next();
  console.log(nums);
  return nums.reduce((prev,cur) => prev + cur,0);
}
let result = add(root);
console.log(result);