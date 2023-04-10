import { createRouter, createWebHistory } from 'vue-router'
//导入自动引入路由文件的插件
import importRoute from "./autoImportRoute"
const routeArr = importRoute()
const routes = [
  {
    path: '/login',
    name: 'login',
    meta: { token: false },
    component: () => import(/* webpackChunkName: "login" */ '../views/Login/AsycLogin.vue')
  },
  {
    path: '/',
    name: 'Layout',
    redirect: '/index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Layout" */ '@/Layout/index'),
    children: []
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
