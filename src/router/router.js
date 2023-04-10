import router from './index'
import store from '@/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
//全局前置守卫
router.beforeEach((to,from,next)=>{
    //开启进度条
    NProgress.start();
    if(to.fullPath !=='/login'){
        //如果是内部页面且已登录就放行
        if(sessionStorage.getItem('token')){
            if(!store.state.isRefresh){
                store.dispatch('asyncChangeRouteList',{username:'admin',password:'ant.design'}).then(res=>{
                    next(to.fullPath)
                })
              }else{
                next()
              }
        }else{
            //否则跳转到登录页
            next('/login')
        }
    }else{
        //如果是外部页面就直接访问
        next()
    }
})

//全局后置守卫
router.afterEach((to,from)=>{
    //关闭进度条
    NProgress.done();
})