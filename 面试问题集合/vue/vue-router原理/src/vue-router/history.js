/**
 * 历史记录对象,根据history来决定需要展示的组件。相当$route
 */
class History{
  constructor(){
    this.current = {
      path:null
    };
  }
}

export default History;