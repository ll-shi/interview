/**
 * Element 继承了Node。Node是父类
 * Element,Text,Comment都是继承与Node
 */
/**
 * 节点属性
 * 1) nodeName 节点名称
 * 2) nodeValue 只有文本节点跟属性节点才有。
 * 3) nodeType 节点类型
 * 4) attribute
 * -节点类型
 * 1）元素节点  节点值 1
 * 2）属性节点 （属性节点就是元素节点就是由元素中attribue构成的节点）节点值 2
 * 3）注释节点  节点值 8
 * 4）文档节点（也就是document）
 * 5) 文本节点 节点值 3
 */
// 返回元素的第n层祖先元素节点
function nParent(ele,n){
  while(ele,n){
    ele = ele.parentElement;
    n--;
  }
  return ele;
}