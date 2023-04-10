<template>
<div class='index'>
    <ItemBar></ItemBar>
   <div class="index1">
    <div class="left">
    <div class="title">
        <el-link :type="show1" @click="showInfo">销售额</el-link>
    <el-link :type="show2" @click="changeData">访问量</el-link>
    </div>
    <EchartBar :xAxis="xAxis1" :xData="xData1"></EchartBar>
   </div>
    <div class="right">
        <div class="pieBox">
            <div class="pie_top">
                <div class="l">销售额类别占比</div>
                <div class="r">
                    <span :class="showIdx == index?'active':''" @click="changeTab(index)" v-for="(item,index) in type" :key='index'>{{item}}</span>
                </div>
            </div>
            <Pie :data="datas"></Pie>
        <div class="content">
        <div>销售额</div>
        <div class="total">{{total}}</div>
      </div>
        </div>
    </div>
   </div>
</div>
</template>
<script setup>
// import EchartBar from '@/echartComponent/EchartBar.vue'
// import Pie from '@/echartComponent/Pie.vue'
import ItemBar from "./ItemBar.vue"
//柱状图封装的hooks
import useBar from "@/echartComponent/UseBar"
//饼状图封装的hooks
import usePie from "@/echartComponent/UsePie"
//引入hooks的变量和方法
const {show1,show2,xAxis1,xData1,state,changeData,showInfo} = useBar()
const {showIdx,type,pieData,datas,total,changeTab} = usePie()


</script>
<style scoped lang='scss'>
.index{
    padding: 0 20px;
}
.index1{
    margin-top: 20px;
    background: #fff;
    display: flex;
    .title{
    padding: 10px;
}
.el-link{
    margin-left: 40px;
}
.right{
    display: flex;
    .pieBox{
        position: relative;
        .pie_top{
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid rgba(0,0,0,.06);
            padding: 15px 0;
            align-items: center;
            .r{
                span{
                    border:1px solid #d9d9d9;
                    padding: 6px 12px;
                    font-size: 14px;
                    cursor: pointer;
                }
                .active{
                    color: rgb(24 144 255);
                    border-color: rgb(24 144 255);
                }
            }
        }
        .content{
            width: 92px;
            position: absolute;
            top: 218px;
            left:258px;
            text-align: center;
            .total{
                font-size: 30px;
                font-weight: bold;
            }
        }
    }
}
}
</style>
