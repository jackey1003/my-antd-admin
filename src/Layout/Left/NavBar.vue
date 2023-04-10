<template>
<div class='navbar'>
    <!-- 嵌套路由 -->
    <el-sub-menu :index="items.path" v-if="items.children">
          <template #title>
            <i class='iconfont' :class="getIcon(items.name)"></i>
            <span>{{items.name}}</span>
          </template>
          <NavBar v-for="(i,idx) in items.children" :key="idx" :items="i"></NavBar>
        </el-sub-menu>
        <!-- 没嵌套的路由 -->
        <el-menu-item :index="items.path" v-else>
            <i class='iconfont' :class="getIcon(items.name)"></i>
          <span>{{items.name}}</span>
        </el-menu-item>
</div>
</template>
<script setup>
import {getIcon} from './getIcon.js'
defineProps({
    items:{
        type:Object
    }
})
</script>
<style scoped lang='scss'>
.navbar{
  i{
    margin-right: 30px;
  }
}
</style>
