import axios from 'axios'

// 创建axios实例
const request = axios.create({
  baseURL: '/wwww/api/', // base_urlapi的
  timeout: 15000 // 请求超时时间
})
export default request
