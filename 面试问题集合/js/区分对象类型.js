/**
 * 区分对象类型
 * 1）判断对象的构造函数 obj.constructor
 * 2）obj instanceof Array 能判断数组，不能判断对象
 * 3）Object.prototype.toString.call(obj);  [object Object]对象 [object Array]
 */