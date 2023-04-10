<template>
  <div class="top">
    <div class="top_left">
      <img
        src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
        alt=""
      />
      <h2>Ant Design Pro</h2>
      
    </div>
    <div class="top_right">
      <TopRight></TopRight>
    </div>
  </div>
</template>
<script setup>
import TopRight from "./TopRight.vue";

</script>
<style scoped lang='scss'>
.top {
  background-color: #001529;
  height: 48px;
  display: flex;
  justify-content: space-between;
  color: #fff;
  .top_left {
    padding: 0 20px;
    display: flex;
    height: 48px;
    align-items: center;
    img {
      width: 28px;
      height: 28px;
    }
    h2 {
      margin: 0 12px;
      font-size: 18px;
      font-weight: 600;
    }
  }
}
</style>
