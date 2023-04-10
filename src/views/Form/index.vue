<template>
  <!-- 环形图组件 -->
  <div class="pieChartRadius">
    <div class="boxImage" ref="bodyImage" style="display:block">
      <div class="flexbox align-items-center">
        <!-- 环形图容器 -->
        <div>
          <div id="main" ref="main" class="echartsStyle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "pieChartRadius",
  props: {
    valBox: Object
  },
  data() {
    return {
      pieVal: { //环形图模拟数据
        title: "员工占比", //中间title文字
        subTitle: "75人", //中间底部文字
        pieList: [
          //环形图数据
          { name: "正式员工", value: 25 },
          { name: "试用期员工", value: 28 },
          { name: "实习期员工", value: 29 },
          { name: "其他", value: 2 },
          { name: "后厨", value: 3 }
        ],
        colorList: [
          //环形图颜色
          "#ffb22b",
          "#1779ee",
          "#29e2b0",
          "#7b8c74",
          "#1DB6C5",
          "#fcc525",
          "#fb9712",
          "#26c6da",
          "#1e88e5",
          "#eeeeee"
        ],
        afterSeries: [], //绘制环形饼图的数据
        nameList: [],
        totalNum: 0,
      }
    };
  },
  computed: {},
  filters: {},
  watch: {},
  created() {},
  mounted() {
    // console.log("NDD打印-传递来的饼图数据");
    // console.log(this.valBox);
    // if (this.valBox.chartVal) {
    //   this.pieVal = this.valBox.chartVal;
    //   this.phontoImage();
    // }
    this.dataProcessing();
  },
  methods: {
    dataProcessing() {
      this.pieVal.pieList.forEach((item, index) => {
        let seriesVal = {
          type: "bar",
          data: [0, 0, 2],
          coordinateSystem: "polar",
          barMaxWidth: 25, //圆环的宽度
          roundCap: true,
          name: "正式员工",
          color: "#ffb22b",
          stack: "a"
        };
        seriesVal.data[2] = Number(item.value);
        seriesVal.name = item.name;
        seriesVal.color = this.pieVal.colorList[index];
        this.pieVal.totalNum += Number(item.value);
        this.pieVal.nameList.push(item.name); //获取名称数组
        this.pieVal.afterSeries.push(seriesVal); //获取绘制环形饼图数组
      });
      this.phontoImage();
    },
    //扇形图1
    phontoImage() {
      console.log(this.pieVal);
      var echarts = require("echarts");
      var elementResizeDetectorMaker = require("element-resize-detector"); //引入 监听dom元素尺寸变化的依赖
      var erd = elementResizeDetectorMaker();
      var worldMapContainer = this.$refs.main; //获取 图标容器dom元素
      var that = this;
      //用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
      var resizeWorldMapContainer = function() {
        worldMapContainer.style.width = worldMapContainer.scrollWidth + "px";
        worldMapContainer.style.height = worldMapContainer.clientHeight + "px";
      };
      //设置容器高宽

      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(worldMapContainer);

      myChart.on("click", function(params) {
      });

      let BtVal = this.pieVal; //获取点击切换饼图传递的参数
      myChart.setOption({
        title: [
          {
            text: BtVal.title,
            subtext: BtVal.subTitle,
            textStyle: {
              fontSize: 16,
              color: "black"
            },
            subtextStyle: {
              fontSize: 14,
              color: "#ff873b"
            },
            textAlign: "center",
            x: "48%",
            y: "36%"
          }
        ],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>人数：{c}"
        },
        angleAxis: {
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          min: 0,
          max: BtVal.totalNum, //一圈的刻度值
          startAngle: 180 //初始角度
        },
        radiusAxis: {
          type: "category",
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          data: ["1", "2", "3", "4"], //代表层级
          z: 10
        },
        polar: {
          center: ["50%", "40%"], //圆环-图形位置
          radius: "100%" //图形大小 值可设置超过100%
        },
        series: BtVal.afterSeries,
        legend: {
          show: true,
          icon: "rect",
          itemWidth: 20,
          itemHeight: 20,
          bottom: 30,
          left: "center",
          data: BtVal.nameList,
          formatter: function(name) {
            // 获取legend显示内容
            let data = BtVal.pieList;
            let total = 0;
            let tarValue = 0;
            for (let i = 0, l = data.length; i < l; i++) {
              total += data[i].value;
              if (data[i].name == name) {
                tarValue = data[i].value;
              }
            }
            let p = ((tarValue / total) * 100).toFixed(2);
            if (total == 0) {
              p = 0;
            }
            return name + " " + " " + p + "%";
          }
        }
      });
      erd.listenTo(worldMapContainer, function(element) {
        that.$nextTick(function() {
          myChart.resize();
        });
      });
    }
  }
};
</script>

<style scoped>
.boxImage {
  padding: 10px;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
}
.align-items-center {
  -webkit-box-align: center !important;
  -ms-flex-align: center !important;
  align-items: center !important;
  min-height: 54px;
}
.echartsStyle {
  width: 440px;
  height: 500px;
}
.pieChartRadius {
  position: relative;
  border-top: 0;
  margin-bottom: 30px;
  width: 100%;
  background: #ffffff;
  border-radius: 0;
  padding: 0px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  border: 1px solid #dce3e6;
  border-radius: 4px;
  -webkit-box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
}
</style>