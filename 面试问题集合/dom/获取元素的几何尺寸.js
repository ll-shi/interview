/**
 * 获取元素的几何尺寸大小方法
 * 1）dom.getBoundingClientRect 不兼容老版ie，没有width，height属性
 * 2) dom.offsetWidth，dom.offsetHeight
 * 3) 
 * 查看元素的位置
 * 1) dom.offsetLeft,dom.offsetTop(注意点，默认是相对定位父级的位置，没有就相对文档)
 * - 让滚动条滚动的三个方法
 * 1）window.scroll()
 * 2)window.scrollTo() 具体位置，跟1相同
 * 3)window.scrollBy() 累加效果
 */