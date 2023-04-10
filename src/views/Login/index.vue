<template>
  <div class="login">
    <div class="form">
      <div class="title">
        <img src="https://preview.pro.ant.design/logo.svg" alt="" />
        <h2>Ant Design</h2>
      </div>
      <div class="text">Ant Design 是西湖区最具影响力的 Web 设计规范</div>
      <el-tabs class="demo-tabs" v-model="activeName" :stretch="true">
        <el-tab-pane label="账号密码登录" name="first"
          ><Input v-bind="{activeName:activeName}"></Input
        ></el-tab-pane>
        <el-tab-pane label="手机号登录" name="second"
          ><Phone></Phone
        ></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script setup>
import Input from "./Input.vue";
import Phone from "./Phone.vue";
import { ref } from "vue";
//默认第一项显示
const activeName = ref("first");
</script>
<style scoped lang="scss">
.login {
  position: relative;
  background-color: rgb(240 242 245);
  background-image: url("https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg");
  background-position: center 110px;
  background-repeat: no-repeat;
  background-size: 100%;
  height: 100%;

  .text {
    margin-bottom: 60px;
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
    text-align: center;
  }
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 44px;
    height: 44px;
    vertical-align: middle;
  }
  h2 {
    text-align: center;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    font-size: 33px;
    margin-left: 20px;
  }
  .form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.ul div:hover {
  color: #1890ff;
}
</style>
