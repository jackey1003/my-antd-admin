<template>
  <div class="tableList">
    <div class="progress">
      <div class="p_top">流程进度</div>
      <div class="line">
        <el-progress :percentage="100" :format="format" />
      </div>
    </div>
    <div class="userInfo">
      <div class="user_title">用户信息</div>
      <div class="desc">
        <el-descriptions>
        <el-descriptions-item label="用户姓名:">付小小</el-descriptions-item>
        <el-descriptions-item label="会员卡号:">32943898021309809423</el-descriptions-item>
        <el-descriptions-item label="身份证:">3321944288191034921</el-descriptions-item>
        <el-descriptions-item label="联系方式:">
          18112345678
        </el-descriptions-item>
        <el-descriptions-item label="联系地址:"
          >江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item
        >
      </el-descriptions>
      </div>
      <div class="infoGroup">
        <el-descriptions title="信息组:">
        <el-descriptions-item label="某某数据:">725</el-descriptions-item>
        <el-descriptions-item label="该数据更新时间:" >2017-08-08</el-descriptions-item>
        <el-descriptions-item label="某某数据:">725</el-descriptions-item>
        <el-descriptions-item label="该数据更新时间:">
          2017-08-08
        </el-descriptions-item>
      </el-descriptions>
      <div>信息组</div>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
<style scoped lang='scss'>
.tableList {
  padding: 20px;
  padding-bottom:0;
  .progress {
    background-color: #fff;
    .p_top {
      padding: 20px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    }
    .line {
      padding: 15px 20px;
    }
  }
  .userInfo {
    margin-top: 20px;
    padding: 15px 20px;
    background-color: #fff;
    .user_title {
      padding-bottom: 20px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    }
    .desc{
        padding: 20px 0;
    }
  }
}
</style>
