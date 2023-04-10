import { createStore } from 'vuex'
import getRoute from "@/http/api/getRoute"
//引入路由实例对象
import router from '@/router';
import importRoute from '@/router/autoImportRoute';
//遍历后端返回的权限列表获取对应路径的一维数组
function getRouteList(arr, emptyArr = []) {
  arr.forEach(item => {
    if (item.children) {
      getRouteList(item.children, emptyArr)
    } else {
      emptyArr.push(item.path)
    }
  });
  return emptyArr
}
export default createStore({
  state: {
    routeList: JSON.parse(sessionStorage.getItem("routeList")) || [],
    isRefresh:false
  },
  getters: {
  },
  mutations: {
    changeRouteList(state, list) {
      state.routeList = list
    },
    changeIsRefresh(state){
      state.isRefresh = true
    }
  },
  actions: {
    asyncChangeRouteList({ commit }, data) {
       return new Promise((resolve, reject) => {
          getRoute("/getLimits", data).then(res => {
            commit("changeRouteList", res.routeList)
            commit("changeIsRefresh")
            sessionStorage.setItem("routeList", JSON.stringify(res.routeList))
            sessionStorage.setItem('token',res.token)
            //获取写好的路由表消息
            let routeArr = importRoute()       
  
            const routePath = getRouteList(res.routeList)
            //把获取的路由列表和权限列表一一比对
            const isRouteList = routeArr.filter(ele => {
              return routePath.includes("/"+ele.path)
            })
            isRouteList.forEach(i => {
              router.addRoute("Layout", i)
            })
            resolve('路由创建成功')
          })
        })
    }
  },
  modules: {
  }
})
