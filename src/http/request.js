import axios from "axios";
//创建axios实例
const service = axios.create({
  baseURL:
    "https://www.fastmock.site/mock/f1a9c475ee4e9d1a0aa5a49ffd098b4f/admin",
  timeout: 6000,
});
//请求拦截
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return console.log(err);
  }
);
//响应拦截
service.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return console.log(err);
  }
);
//导出请求实例
export default service;
