<template>
  <div class="content">
    <div class="item">
      <div class="top">
        <div class="p">
          <span>总销售额</span>
          <el-tooltip
            class="box-item"
            effect="dark"
            content="指标说明"
            placement="top-start"
          >
            <i class="iconfont icon-wenhao"></i>
          </el-tooltip>
        </div>
        <h2>￥126,560</h2>
      </div>
      <div class="bottom">
        <span>日销售额 ￥12,423</span>
      </div>
    </div>
    <div class="item">
      <div class="top">
        <div class="p">
          <span>访问量</span>
          <el-tooltip
            class="box-item"
            effect="dark"
            content="指标说明"
            placement="top-start"
          >
            <i class="iconfont icon-wenhao"></i>
          </el-tooltip>
        </div>
        <h2>8,846</h2>
      </div>
      <div class="bottom">
        <span>日访问量 1,234</span>
      </div>
    </div>
    <div class="item">
      <div class="top">
        <div class="p">
          <span>支付笔数</span>
          <el-tooltip
            class="box-item"
            effect="dark"
            content="指标说明"
            placement="top-start"
          >
            <i class="iconfont icon-wenhao"></i>
          </el-tooltip>
        </div>
        <h2>6,560</h2>
      </div>
      <div class="bottom">
        <span>转化率 60%</span>
      </div>
    </div>
    <div class="item">
      <div class="top">
        <div class="p">
          <span>运营活动效果</span>
          <el-tooltip
            class="box-item"
            effect="dark"
            content="指标说明"
            placement="top-start"
          >
            <i class="iconfont icon-wenhao"></i>
          </el-tooltip>
        </div>
        <h2>78%</h2>
      </div>
      <div class="bottom">
        <span>周同比 12% &emsp;日同比 11%</span>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
<style scoped lang='scss'>
.content {
  display: flex;
  height: 180px;
  margin-top: 20px;
  justify-content: space-between;
  .item {
    width: 23%;
    height: 180px;
    padding: 0 20px;
    background: #fff;
    .top {
      height: 130px;
      h2 {
        color: rgba(0, 0, 0, 0.85);
        font-size: 30px;
        font-weight: 300;
      }
      .p {
        padding-top: 20px;
        color: rgba(0, 0, 0, 0.45);
        display: flex;
        justify-content: space-between;
        align-items: center;
        i {
          cursor: pointer;
        }
      }
    }
    .bottom {
      text-align: center;
      display: flex;
      align-items: center;
      border-top: 1px solid #f0f0f0;
      span {
        padding: 10px 0;
      }
    }
  }
}
</style>
