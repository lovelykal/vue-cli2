import axios from 'axios'

const token = 111 // 代替token

const service = axios.create({
  baseURl: '/api',
  timeout: 10000
})

const ACCESS_TOKEN = 'authorization' // Access-Token

// 请求拦截器
service.interceptors.request.use(
  // 发送请求前配置
  config => {
    if (token) {
      config.header[ACCESS_TOKEN] = token
    }
    return config
  },
  error => {
    console.error(error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  // 处理相应数据
  response => {
    const res = response.data
    if (response.headers[ACCESS_TOKEN]) {

    }
    // 请求失败则抛出错误
    if (res.code !== 200) {
      throw new Error(res.message)
    }
  }
)

export { service as axios }
