<template>
  <div class="advanced">
    <div class="header">
      <div class="title">
        <div class="bill">单号：234231029431</div>
        <div class="btn">
          <el-button>操作一</el-button>
          <el-button>操作二</el-button>
          <el-dropdown>
            <el-button>...</el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>选项一</el-dropdown-item>
                <el-dropdown-item>选项二</el-dropdown-item>
                <el-dropdown-item>选项三</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>

          <el-button type="primary">主操作</el-button>
        </div>
      </div>
      <div class="list">
        <div class="list_left">
          <el-descriptions column="2">
            <el-descriptions-item label="创建人：">曲丽丽</el-descriptions-item>
            <el-descriptions-item label="订购产品："
              >XX服务</el-descriptions-item
            >
            <el-descriptions-item label="创建时间：">
              2017-07-07</el-descriptions-item
            >
            <el-descriptions-item label="关联单据：">
              <a href="" style="color:#1890ff;text-decoration:none">12421</a>
            </el-descriptions-item>
            <el-descriptions-item label="生产日期："
              >2017-07-07~2017-08-08</el-descriptions-item
            >
            <el-descriptions-item label="备注："
              >请于两个工作日内确认</el-descriptions-item
            >
          </el-descriptions>
        </div>
        <div class="list_right">
          <div class="li1">
            <div>状态</div>
            <div class="bold">待审批</div>
          </div>
          <div class="li2">
            <div>订单金额</div>
            <div class="bold">￥568.08</div>
          </div>
        </div>
      </div>
      <el-tabs  class="demo-tabs" v-model="activeName" :stretch="true">
    <el-tab-pane label="详情" name="first"></el-tab-pane>
    <el-tab-pane label="规则" name="second"></el-tab-pane>
  </el-tabs>
    </div>
    <TableList></TableList>
    <MultiInfo></MultiInfo>
    <HandleTab></HandleTab>
  </div>
  <div style="height:60px"></div>
</template>
<script setup>
import { ref } from 'vue'
import TableList from '@/components/Advanced/TableList.vue';
import MultiInfo from '@/components/Advanced/MultiInfo.vue';
import HandleTab from "@/components/Advanced/HandleTab.vue"
const activeName = ref('first')
</script>
<style scoped lang='scss'>
.advanced {
  .header {
    width: 100%;
    background-color: #fff;
    padding: 12px 24px;
    padding-bottom: 0;
    .list {
      display: flex;
      padding: 15px 0;
      justify-content: space-between;
      .list_left {
        width: 50%;
      }
      .list_right {
        display: flex;
        padding-right: 30px;
        text-align: right;
        .li1 {
          padding: 0 30px;
        }
        .bold {
          color: rgba(0, 0, 0, 0.85);
          font-size: 24px;
          margin-top: 15px;
        }
      }
    }
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .bill {
        color: rgba(0, 0, 0, 0.85);
        font-weight: 600;
        font-size: 20px;
      }
      .el-button {
        margin: 0;
        border-radius: 0;
      }
    }
    .el-tabs{
        width: 100px;
    }
  }
}
</style>
