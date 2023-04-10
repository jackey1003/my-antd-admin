<template>
<div class="box">
    <div class='password'>
    <i class="iconfont icon-mima"></i>
    <input :type="show?'password':'text'" placeholder="密码:ant.design" @blur="checkP" v-model="password">
    <i class="iconfont icon-bukejian" v-if="show" @click="changeShow"></i>
    <i class="iconfont icon-kejian" v-else @click="changeShow"></i>
    
</div>
<div class="tip">{{msg}}</div>
</div>
</template>
<script setup>
import {ref} from 'vue'
//默认显示不可见的标识
let show = ref(true)
//点击图标改变图标显示和切换密码框
const changeShow = ()=>{
    show.value = !show.value
}
//通过emit向父组件传值
const getSon = defineEmits(['sendMsg'])
let msg = ref('')
let password = ref('ant.design')
//密码框失焦校验方法
const checkP = ()=>{
    if(!password.value){
        msg.value = '密码是必填项!'
        document.getElementsByClassName('password')[0].classList.add('password1')
    }else{
        msg.value = ''
        document.getElementsByClassName('password')[0].classList.remove('password1')
    }
}
getSon('sendMsg',password.value)
</script>
<style scoped lang='scss'>
.box{
    position: relative;
    width: 100%;
    .tip{
    position: absolute;
    top: 32px;
    color: var(--el-color-danger);
    font-size: 12px;
    }
}
.password{
    width: 100%;
    padding: 3px 10px;
    background-color: #fff;
    display: flex;
    border: 1px solid #d9d9d9;
    color: rgb(168 171 178);
    border-radius: var(--el-input-border-radius,var(--el-border-radius-base));
    transition: var(--el-transition-box-shadow);
    input{
        width: 100%;
        outline: none;
        border: none;
        color: #606266;
        background: none;
    }
    i{
        cursor: pointer;
    }
    ::placeholder{
        color: rgb(168 171 178);
    }
    .icon-mima{
        margin-right: 10px;
    }
}
.password1{
    box-shadow: 0 0 0 1px var(--el-color-danger) inset;
}
</style>
