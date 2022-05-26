import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 10000,
  withCredentials: true,
})

// http request 请求拦截器
service.interceptors.request.use(
  (config) => {
    (config.headers as any)['Content-Type'] = 'application/json;charset=UTF-8';
    (config.headers as any)['Accept-Token'] = '';
    (config.headers as any)['User-Time'] = Date.parse(new Date().toString());
    const AccessToken = localStorage.getItem('Geek-Token')
    if (AccessToken) {
      (config.headers as any)['Token'] = AccessToken;
    }
    return config
  },
  (error) => {
    console.log('请求失败')
    return Promise.reject(error)
  }
)

// http response 响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data
    // 响应逻辑判断处理
    
    return res;
  },
  (err) => {
    if (err && err.response && err.response.status) {
      switch (err.response.status) {
        case 400:
          err.message = "错误请求";
          break;
        case 401:
          err.message = "未授权，请重新登录";
          break;
        case 403:
          err.message = "拒绝访问，请重新登录";
          break;
        case 404:
          err.message = "请求错误,未找到该资源";
          break;
        case 405:
          err.message = "请求方法未允许";
          break;
        case 408:
          err.message = "请求超时";
          break;
        case 500:
          err.message = "服务器端出错";
          break;
        case 501:
          err.message = "网络未实现";
          break;
        case 502:
          err.message = "网络错误";
          break;
        case 503:
          err.message = "服务不可用";
          break;
        case 504:
          err.message = "网络超时";
          break;
        case 505:
          err.message = "http版本不支持该请求";
          break;
        default:
          err.message = "连接错误";
      }
    }

  
    console.log(err.response.data.message,err.message)

    return Promise.reject(err)
  }
);




export default service