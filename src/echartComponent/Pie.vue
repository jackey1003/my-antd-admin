<template>
    <div id='pie'>
    </div>
    </template>
    <script setup>
    import { onMounted,watch } from 'vue'
    //引入echarts
    const echarts = require('echarts')
    //动态渲染图表数据
   const props = defineProps({
        data:{
          type:Array,
          default:()=>[]
        }
    })
    
    //创建统计图实例方法
    const getEchart = ()=>{
            // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('pie'));
    
    // 指定图表的配置项和数据
    var option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    show:false,
    top: '2%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: true,
      
      emphasis: {
        label: {
          show: true,
          fontSize: '20',
          fontWeight: 'bold'
        }
      },
      data: props.data
    }
  ]
};
    
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    }
    //监视props的变化创建图表实例
    watch(()=>props.data,(newval)=>{
      getEchart()
    })
    onMounted(()=>{
      getEchart()
    })
    </script>
    <style scoped lang='scss'>
    #pie{
        width: 600px;
        height: 400px;
    }
    </style>
    