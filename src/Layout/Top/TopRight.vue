<template>
<div class='topright'>
    <i class="iconfont icon-sousuoxiao" @click="change"></i>
    <div id="inp" v-if="showinp"><input type="text" value="umi ui" id="input"></div>
    <a href="https://pro.ant.design/docs/getting-started/" target="_blank"><i class="iconfont icon-wenhao"></i></a>
    <el-badge :value="12">
        <i class="iconfont icon-xiaoxizhongxin"></i>
  </el-badge>
    <Logout></Logout>
</div>
</template>
<script setup>
import Logout from './Logout.vue'
import {ref,nextTick} from 'vue'
let showinp = ref(false)
const change = ()=>{
    //改变搜索框的显示隐藏
    showinp.value = !showinp.value
    if(showinp.value){
        nextTick(()=>{
            //表单自动聚焦
        const inp = document.getElementById('input')
        inp.focus()
    })
    }
}
</script>
<style scoped lang='scss'>
.topright{
    height: 48px;
    display: flex;
    align-items: center;
    i{
        color: #fff;
        cursor: pointer;
        margin-left: 20px;
        display: inline-block;
        height: 48px;
        line-height: 48px;
        width: 30px;
        text-align: center;
    }
    #inp{
        margin: 0 8px;
        #input{
            outline: none;
            border:none
        }
    }
}
i:hover{
    background: #252a3d;
}
</style>
