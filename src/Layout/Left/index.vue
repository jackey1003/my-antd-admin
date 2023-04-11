<template>
  <div class="left">
    <el-menu :default-active="defaultPath" class="el-menu-vertical-demo" :collapse-transition="false" :router="true" :collapse="!show" :style="{width:show?'200px':'64px'}" >
      <NavBar v-for="(item,index) in navList" :key="index" :items="item" :show-text="show"></NavBar>
    </el-menu>
    <div class="nav_footer" @click="changeIcon" >
            <i class='iconfont icon-shousuo' v-if="show"></i>
            <i class='iconfont icon-zhankai' v-else ></i>
        </div>
  </div>
</template>
<script setup>
import NavBar from "./NavBar.vue";
import { ref,watch } from "vue";
import {useRoute} from 'vue-router'
import {useStore} from "vuex"
const route = useRoute()
const store = useStore()
//定义侧边导航栏项
// let list = [
//   { name: "Dashboard",path:'',icon:true,children:[
//     {name: "分析页", path: "/index"},
//     {name: "监控页", path: "/watch"},
//     {name: "工作台", path: "/work"},
//   ] },
//   { name: "表单页", path: "/form",icon:true },
//   { name: "列表页", path: "/list",icon:true },
//   { name: "详情页", path: "/detail",icon:true },
//   { name: "结果页", path: "/result",icon:true },
//   { name: "异常页", path: "/error",icon:true },
//   { name: "个人页", path: "",icon:true,children:[
//     {name:'个人中心',path:'/center'},
//     {name:'个人设置',path:'/update'},
//   ]
//  },
//   {name:'图形编辑器',path:'/chart',icon:true}
// ];

//通过后端动态生成侧边栏导航
let navList = ref(store.state.routeList)

//图标切换
let show = ref(true)
const changeIcon = ()=>{
  show.value = !show.value
}
//默认激活nav项
let defaultPath = ref('/index')
//监视路由变化
watch(()=>route,(newval)=>{
  //如果不是首页
  if(newval.fullPath != '/index'){
    defaultPath.value = newval.fullPath
  }else{
    defaultPath.value = '/index'
  }
},{deep:true,immediate:true})
</script>
<style scoped lang='scss'>
.left {
  height: 100%;
}
.el-menu {
  position: relative;
  height: calc(100% - 100px);
  overflow-y: auto;
  overflow-x: hidden;
}
.nav_footer{
    width: 100%;
    height: 46px;
    border-top: 1px solid rgba(0,0,0,.06);
    background: #fff;
    line-height: 46px;
    cursor: pointer;
    i{
      margin-left: 20px;
    }
  }
  .nav_footer:hover i{
    color: rgb(24 144 255);
  }
</style>
