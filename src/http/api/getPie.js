import service from "../request";
//请求饼状图数据接口
export default function getPie(url,data){
    return new Promise((resolve,reject)=>{
        service.post(url,data).then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })
}