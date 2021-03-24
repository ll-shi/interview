// 在axios拦截器中加入token刷新逻辑
const options = {
  baseURL: 'http://api.llshi.example.com'
};
const instance = axios.create(options);
instance.defaults.timeout = 2500;
// 为instance添加拦截器
instance.interceptors.request.use(function(config){
  return config;
},function(error){
  return Promise.reject(error);
})
// 添加响应拦截器
instance.interceptors.response.use(function(res){
  return res;
},function(error){
  // 对响应错误做点什么
  console.log(error);
  if(error.response.status === 401){
    // 401表示没有权限，access-token过期
    if(!new RegExp('login','g').test(window.location.href)){
      // 需要重新去请求token,返回重新请求的结果
      return requestAgain(error);
    }else{
      //登陆页面
      console.log('登陆过期，请重新登陆');
    }
  }
  // 其他情况
  return Promise.reject(error.response);
})
function requestAgain(error){

}