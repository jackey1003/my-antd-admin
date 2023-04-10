<template>
  <div class="layout">
    <Top></Top>
    <div class="bottom">
      <Left></Left>
      <div class="routerbar">
        <RouteTag></RouteTag>
        <div class="breadCrumb">
          <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="(item, index) in crumbList"
          :key="index"
          :to="item.path"
        >{{item.name}}
        </el-breadcrumb-item>
      </el-breadcrumb>
        </div>
        <router-view v-slot="{ Component }" v-if="isKeepAlive">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
        <router-view v-else></router-view>
      </div>
    </div>
  </div>
</template>
<script setup>
import Top from "./Top/index.vue";
import Left from "./Left/index.vue";
import RouteTag from "./Right/RouteTag.vue";
import { watch, ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
//默认的面包屑列表
let crumbList = ref([
  { name: "Dashboard", path: "/index" }
]);
//默认所有组件不需要缓存
let isKeepAlive = ref(false);
//监视路由判断该路由是否需要缓存
watch(
  () => route,
  (newval) => {
    if (newval.meta.keepAlive) {
      isKeepAlive.value = true;
    }
    //如果不是默认的分析页
    if (newval.fullPath !== "/index") {
      //每次路由变化都重置一遍列表
      if (newval.meta.name[0].name == "Dashboard") {
        crumbList.value = [];
      } else {
        crumbList.value = [{ name: "Dashboard", path: "/index" }];
      }
      crumbList.value.push(...newval.meta.name);
    } else {
      //如果是默认页
      crumbList.value = [
        { name: "Dashboard" },
        { name: "分析页" },
      ];
    }
  },
  { deep: true, immediate: true }
);
</script>
<style scoped lang='scss'>
.layout {
  height: 100%;
  overflow: hidden;
  .bottom {
    display: flex;
    height: 100%;
  }
  .routerbar {
    flex: 1;
    background: rgb(240 242 245);
    overflow: auto;
    .breadCrumb{
      background-color: #fff;
      padding: 12px 24px;
      color: rgba(0,0,0,.45);
    }
  }
}
</style>
