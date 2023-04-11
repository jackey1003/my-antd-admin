<template>
<div class='routetag'>
    <div :class=" item.actived?'active item':'item'" v-for="(item,index) in list" :key="index" @click="goPage(item)"><span>{{item.name}}</span>
        <i v-if="item.path != '/index'" @click.stop="deleteItem(item,index)"><el-icon><Delete /></el-icon></i>
    </div>
</div>
</template>
<script setup>
import {ref,watch} from 'vue'
import {useRoute,useRouter} from 'vue-router'
import { Delete } from '@element-plus/icons-vue'
const route = useRoute()
const router = useRouter()
//路由标签默认的列表
let sessionTag = JSON.parse(sessionStorage.getItem('routeTag'))
let list = ref(sessionTag || [{name:'分析页',path:'/index',actived:true}])
//添加路由标签的方法
const addItem = (obj)=>{
    //遍历查找原列表有没有该项
   const idx = list.value.findIndex((item,index)=>{
        return item.name == obj.name
    })
    if(idx == -1){
        for(let i = 0;i < list.value.length;i++){
        //把所有标签的激活标识关闭
        list.value[i].actived = false
    }   
        obj.actived = true
        //如果没有该标签就添加进去
        list.value.push(obj)
    }else{
        for(let i = 0;i < list.value.length;i++){
        //把所有标签的激活标识关闭
        list.value[i].actived = false
    }   //打开对应标签的激活标识
        list.value[idx].actived = true
    }
}
//监视路由变化动态添加列表
watch(()=>route,(newval)=>{
    //如果不是分析页
    if(newval.fullPath != '/index'){
        addItem({name:newval.meta.name[newval.meta.name.length-1].name,path:newval.fullPath})
    }else{
        list.value.forEach(item=>{
            if(item.path == '/index'){
                item.actived = true
            }else{
                item.actived = false
            }
        })
    }
    sessionStorage.setItem('routeTag',JSON.stringify(list.value))
},{deep:true,immediate:true})
//点击跳转相应路由
const goPage = (val)=>{
    router.push(val.path)
}
//点击删除图标
const deleteItem = (obj,idx)=>{
    sessionStorage.setItem('routeTag',JSON.stringify(list.value))
    //有高亮
    if(obj.actived){
        //删除自己
        list.value.splice(idx,1)    
        //给最后一项高亮
        list.value[list.value.length-1].actived =true
        //跳转到最后一项的路由页面
        router.push(list.value[list.value.length-1].path)
    }else{
        list.value.splice(idx,1)
    }
}
</script>
<style scoped lang='scss'>
.routetag{
    display: flex;
    height: 34px;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #d8dce5;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
    // position: absolute;
    .item{
    cursor: pointer;
    height: 26px;
    border: 1px solid #d8dce5;
    color: #495060;
    background: #fff;
    padding: 0 8px;
    font-size: 12px;
    margin-left: 5px;
    margin-top: 4px;
    display: flex;
    align-items: center;
    span{
        margin-right: 6px;
    }
    }
    i:hover{
        background-color: #b4bccc;
    color: #fff;
    }
    .active{
        background-color: #42b983;
    color: #fff;
    border-color: #42b983;
    }
}
</style>
