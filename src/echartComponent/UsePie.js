import {ref,reactive} from 'vue'
import getPie from "@/http/api/getPie"
export default function(){
    //默认高亮的下标
let showIdx = ref(0)
//定义类型列表
let type = ref(['销售类型占比','线上','门店'])
let pieData = reactive({})
let datas = ref([])
let total = ref(0)
//点击切换高亮并显示对应数据
const changeTab = (idx)=>{
    total.value = 0
    showIdx.value = idx
    if(idx == 0){
        datas.value = pieData.allData
    }else if(idx == 1){
        datas.value = pieData.lineData
    }else{
        datas.value = pieData.store
    }
    datas.value.forEach(item=>{
        total.value += item.value
    })
}
//请求饼状图接口数据
getPie("/pie").then(res=>{
    datas.value = res.all
    pieData.allData = res.all
    pieData.lineData = res.offline
    pieData.store = res.shop

    datas.value.forEach(item=>{
        total.value += item.value
    })
})
return {
    showIdx,type,pieData,datas,total,changeTab
}
}