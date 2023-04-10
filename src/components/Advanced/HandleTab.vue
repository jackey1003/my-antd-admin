<template>
<div class='handleTab'>
    <div class="tab">
        <el-tabs v-model="activeName">
    <el-tab-pane label="操作日志一" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="操作日志一" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="操作日志一" name="third">角色管理</el-tab-pane>
  </el-tabs>
    </div>
</div>
</template>
<script setup>
import {ref} from "vue"
let activeName = ref('first')
</script>
<style scoped lang='scss'>
.handleTab{
    padding: 20px;
    padding-top: 0;
    .tab{
        background-color: #fff;
        padding: 15px 20px;
    }
}
</style>
