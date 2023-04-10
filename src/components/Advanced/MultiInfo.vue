<template>
  <div class="multi">
    <div class="content">
      <div class="top">多层级信息组</div>
      <div class="item_1" v-for="(item, index) in 3" :key="index">
        <el-descriptions title="组名称">
          <el-descriptions-item label="用户名"
            >kooriookami</el-descriptions-item
          >
          <el-descriptions-item label="手机号"
            >18100000000</el-descriptions-item
          >
          <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
          <el-descriptions-item label="备注">
            <el-tag size="small">学校</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="联系地址"
            >江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item
          >
        </el-descriptions>
      </div>
      <div style="height: 30px"></div>
    </div>
    <div class="noData">
      <div class="no_content">
        <div class="call">用户近半年来电记录</div>
        <div class="empty">
            <el-empty :image-size="80" description="暂无数据"></el-empty>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
<style scoped lang='scss'>
.multi {
  padding: 20px;
  padding-top: 0;
  .content {
    background-color: #fff;
    padding: 0 20px;
    border: 1px solid rgba(0, 0, 0, 0.06);
    border-radius: 2px;
    .top {
      padding: 10px 24px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);
      background: rgb(250, 250, 250);
    }
    .item_1 {
      padding: 20px;
      padding-bottom: 15px;
      border: 1px solid rgba(0, 0, 0, 0.06);
      border-top: none;
    }
  }
  .noData {
    margin-top: 20px;
    .no_content {
      background-color: #fff;
    //   padding-top: 5px;
      .call {
        border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        padding: 15px 20px;
      }
    }
  }
}
</style>
