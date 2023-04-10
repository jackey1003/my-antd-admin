import service from "../request";
//请求权限路由接口
export default function getRoute(url,data){
    return new Promise((resolve,inject)=>{
        service.post(url,data).then(res=>{
            resolve(res)
        }).catch(err=>{
            console.log(err);
        })
    })
}