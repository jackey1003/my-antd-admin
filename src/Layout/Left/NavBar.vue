<template>
<div class='navbar'>
    <!-- 嵌套路由 -->
    <el-sub-menu :index="items.path" v-if="items.children">
          <template #title>
            <i class='iconfont' :class="getIcon(items.name)"></i>
            <span v-if="showText">{{items.name}}</span>
          </template>
          <NavBar v-for="(i,idx) in items.children" :key="idx" :items="i"></NavBar>
        </el-sub-menu>
        <!-- 没嵌套的路由 -->
        <el-menu-item :index="items.path" v-else>
            <i class='iconfont' :class="getIcon(items.name)"></i>
          <span v-if="showText">{{items.name}}</span>
        </el-menu-item>
</div>
</template>
<script setup>
import {getIcon} from './getIcon.js'
defineProps({
    items:{
        type:Object
    },
    showText: {
      type:Boolean,
      default:true
    }
})
</script>
<style  lang='scss'>
.navbar{
  i{
    margin-right: 30px;
  }
  .el-sub-menu .el-sub-menu__icon-arrow{
  right: 12px!important;
}
}
</style>
