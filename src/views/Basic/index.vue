<template>
  <div class="basic">
    
      <div class="header">
        <div class="title">
          基础详情页<a-switch :checked="!loading" @change="onChange" />
        </div>
      </div>
      <a-skeleton active :loading="loading" :paragraph="{ rows: 4 }" avatar title>
      <div class="container">
        <el-descriptions title="退款申请">
          <el-descriptions-item label="取货单号:"
            >1000000000</el-descriptions-item
          >
          <el-descriptions-item label="状态:">已取货</el-descriptions-item>
          <el-descriptions-item label="销售单号:"
            >1234123421</el-descriptions-item
          >
          <el-descriptions-item label="子订单:">
            <el-tag size="small">3214321432</el-tag>
          </el-descriptions-item>
        </el-descriptions>
        <div class="userInfo">
          <el-descriptions title="用户信息">
            <el-descriptions-item label="用户姓名:"
              >付小小</el-descriptions-item
            >
            <el-descriptions-item label="联系电话:"
              >18100000000</el-descriptions-item
            >
            <el-descriptions-item label="常用快递:"
              >菜鸟仓储</el-descriptions-item
            >
            <el-descriptions-item label="取货地址:">
              浙江省杭州市西湖区万塘路18号
            </el-descriptions-item>
            <el-descriptions-item label="备注:"> 无 </el-descriptions-item>
          </el-descriptions>
        </div>
        <div class="goods">
          <div class="goods_title">退货商品</div>
          <el-table :data="tableData" style="width: 90%" :stripe="true">
            <el-table-column prop="id" label="商品编号" />
            <el-table-column prop="name" label="商品名称" />
            <el-table-column prop="code" label="商品条码" />
            <el-table-column prop="price" label="单价" />
            <el-table-column prop="num" label="数量(件)" />
            <el-table-column prop="total" label="金额" />
          </el-table>
        </div>
        <div class="goods">
          <div class="goods_title">退货进度</div>
          <el-table :data="tableData" style="width: 90%" :stripe="true">
            <el-table-column prop="id" label="商品编号" />
            <el-table-column prop="name" label="商品名称" />
            <el-table-column prop="code" label="商品条码" />
            <el-table-column prop="price" label="单价" />
            <el-table-column prop="num" label="数量(件)" />
            <el-table-column prop="total" label="金额" />
          </el-table>
        </div>
        <div style="height: 40px"></div>
      </div>
    </a-skeleton>
  </div>
</template>
<script setup>
import { ref } from "vue";
import getGoods from "@/http/api/getGoods";
let tableData = ref([]);
const loading = ref(true);
//请求接口获取退货商品列表
getGoods("/return").then((res) => {
  tableData.value = res.returnList;
});
const onChange = (checked) => {
  loading.value = !checked;
};
setTimeout(() => {
  loading.value = false
}, 1500);
</script>
<style scoped lang="scss">
.basic {
  .header {
    width: 100%;
    background-color: #fff;
    padding: 12px 24px;
    .title {
      color: rgba(0, 0, 0, 0.85);
      font-weight: 600;
      font-size: 20px;
    }
  }
  .container {
    background-color: #fff;
    margin: 24px;
    padding: 20px;
    .userInfo {
      border-top: 1px solid rgba(0, 0, 0, 0.06);
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);
      padding: 20px 0;
    }
    .goods {
      padding-top: 30px;
      .goods_title {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
