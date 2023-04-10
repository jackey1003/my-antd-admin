import { ref, reactive } from 'vue'
import getIndex from '@/http/api/analyse'
export default function () {
    let show1 = ref('primary')
    let show2 = ref('info')
    //定义储存请求的x轴数据的列表
    let xAxis1 = ref('')
    //定义储存请求的数据
    let xData1 = ref('')
    let state = reactive({})
    //请求接口数据
    getIndex('/index').then(res => {
        xAxis1.value = res.sell.xAxis
        xData1.value = res.sell.xData
        state.xAxis2 = res.visit.xAxis
        state.xData2 = res.visit.xData
    })
        //点击切换显示的数据
    const changeData = () => {
        xAxis1.value = state.xAxis2
        xData1.value = state.xData2
        show2.value = 'primary'
        show1.value = 'info'
    }
    const showInfo = () => {
        getIndex('/index').then(res => {
            xAxis1.value = res.sell.xAxis
            xData1.value = res.sell.xData
            state.xAxis2 = res.visit.xAxis
            state.xData2 = res.visit.xData

            show2.value = 'info'
            show1.value = 'primary'
        })
    }
    return {
        show1,show2,xAxis1,xData1,state,changeData,showInfo
    }
}