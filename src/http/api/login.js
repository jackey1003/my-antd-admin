import service from "../request";
//请求登录接口
export default function loginReq(url,data){
    return new Promise((resolve,inject)=>{
        service.post(url,data).then(res=>{
            resolve(res)
        }).catch(err=>{
            console.log(err);
        })
    })
}