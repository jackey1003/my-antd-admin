import service from "../request";
//请求首页数据接口
export default function getIndex(url,data){
    return new Promise((resolve,reject)=>{
        service.post(url,data).then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })
}