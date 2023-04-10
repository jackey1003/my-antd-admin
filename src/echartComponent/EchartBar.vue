<template>
<div id='echart'>
</div>
</template>
<script setup>
import { watch,onMounted,nextTick,getCurrentInstance } from 'vue'
//引入echarts
const echarts = require('echarts')
//获取当前实例
const {ctx} = getCurrentInstance()
//动态渲染图表数据
defineProps({
    xAxis:{
        type:Array,
        default:()=>{
            return ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        }
    },
    xData:{
        type:Object,
        default:()=>{
            return{
                name:'销量',
                type:'bar',
                data:[5, 20, 36, 10, 10, 20]
            }
        }
    }
})

//监视实例的ctx对象
watch(()=>ctx.xData,(newval)=>{
    getEchart()
})

//创建统计图实例方法
const getEchart = ()=>{
        // 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('echart'));

// 指定图表的配置项和数据
var option = {
  tooltip: {},
  legend: {
    data: ['销售量']
  },
  xAxis: {
    data: ctx.xAxis
  },
  yAxis: {},
  series: [
    {
      name: ctx.xData.name,
      type: ctx.xData.type,
      data: ctx.xData.data
    }
  ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
}
</script>
<style scoped lang='scss'>
#echart{
    width: 600px;
    height: 400px;
}
</style>
