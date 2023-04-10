<template>
  <div class="chart">
    <div class="left" ref="moveRef">
      <div class="iconbox" ref="handleRef" v-drag>
        <img
          src="https://img1.baidu.com/it/u=13076881,1714669717&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500"
          alt=""
        />
        <span>飞书</span>
      </div>
      <div class="iconbox">
        <img
          src="https://img2.baidu.com/it/u=3888226172,3966533838&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500"
          alt=""
        />
        <span>抖音</span>
      </div>
    </div>
    <div class="content">
      <div>
        <div class="item"></div>
      </div>
    </div>
    <div class="right">
      <el-tabs type="border-card">
        <el-tab-pane label="APP数据">User</el-tab-pane>
        <el-tab-pane label="连接">Config</el-tab-pane>
        <el-tab-pane label="指令">Role</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script setup>
import { useDraggable, useWindowSize } from "@vueuse/core";
import { ref, onMounted } from "vue";
const vDrag = {
  mounted: (el) => {
    el.style.cursor = "grab";
    el.onmousedown = (e) => {
      document.onmousemove = function (e) {
        e.preventDefault();
        // 移动时禁用默认事件 否则拖动的时候会有将元素拖动出来的效果// 计算偏移距离 鼠标x - 元素x
        let left = e.clientX - el.offsetLeft;
        let sider = document.querySelector(".iconbox");
        //不能将类型“HTMLElement | null”分配给类型“HTMLElement” 这里可以使用断言
        sider.style.width = el.offsetLeft + left + "px";
        //元素和屏幕的左边距
      };
      document.onmouseup = function () {
        //按压时间结束的时候 要禁用掉down的监听事件 否则会一直执行
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };
  },
};
</script>
<style scoped lang="scss">
.chart {
  width: 95%;
  height: 500px;
  background: #fff;
  margin: 80px auto;
  border: 2px solid #efefef;
  display: flex;
  .left,
  .right {
    width: 25%;
    img {
      width: 50px;
      border-radius: 10px;
    }
  }
  .left {
    display: flex;
    justify-content: space-around;
  }
  .iconbox {
    width: 70px;
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    height: 80px;
    cursor: pointer;
  }
  .iconbox:hover {
    background: #ccc;
    border-radius: 10px;
  }
  .content {
    width: 50%;
    border-left: 2px solid #efefef;
    padding-top: 20px;
    .item {
      width: 50px;
      height: 50px;
      background: #ccc;
      border-radius: 6px;
      margin: 0 auto;
    }
  }
  .right {
    .el-tabs {
      height: 100%;
    }
  }
}
</style>
