<template>
  <div class="inp">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      class="demo-ruleForm"
    >
      <el-form-item prop="phone">
        <el-input
          :prefix-icon="Iphone"
          v-model.number="ruleForm.phone"
          type="text"
          placeholder="请输入手机号"
        />
      </el-form-item>
      <el-form-item prop="checknum" class="checkbox">
        <el-input
          :prefix-icon="Lock"
          class="check"
          v-model="ruleForm.checknum"
          type="password"
          autocomplete="off"
          placeholder="请输入验证码"
        /><el-button
          type="default"
          class="btn"
          :loading="load"
          @click="onLoading"
          >获取验证码</el-button
        >
      </el-form-item>
      <div class="remember">
        <el-checkbox v-model="checked1" label="记住密码" size="large" />
        <span>忘记密码</span>
      </div>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm(ruleFormRef)"
          class="el-button1"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import loginReq from "@/http/api/login";
import { useRouter } from "vue-router";
import { Iphone, Lock } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import { message } from "ant-design-vue";
//多选框选中状态
const checked1 = ref(true);
const ruleFormRef = ref();
const router = useRouter();
//手机号的校验
const validatePass = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("手机号是必填项!"));
  }
  if (!/\d{11}/.test(value)) {
    callback(new Error("手机号格式错误!"));
  }
};
//表单的默认数据
const ruleForm = reactive({
  phone: "",
  checknum: "",
});
//手机号的校验规则
const rules = reactive({
  phone: [{ validator: validatePass, trigger: "change" }],
  // checknum: [{ validator: validatePass2, trigger: "blur" }],
});
//按钮加载的标识
let load = ref(false);
//点击发送验证码
//给一个空字符串
var res = "";
function code() {
  function random(max, min) {
    return Math.round(Math.random() * (max - min) + min);
  }
  var str = "1234567890qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM";
  //循环4次，得到4个字符
  for (var i = 0; i < 4; i++) {
    //将得到的结果给字符串，调用随机函数，0最小数，62表示数字加字母的总数
    res += str[random(0, 62)];
  }
  return res;
}
code();
const onLoading = () => {
  res = "";
  code();
  load.value = true;
  setTimeout(() => {
    message.success({
      content: () => `验证码发送成功!验证码为${res}`,
    });
    load.value = false;
  }, 3000);
};
//点击登录触发的方法
const submitForm = (formEl) => {
  //发送请求校验账号密码
  loginReq("login", formEl).then((res) => {
    if (ruleForm.phone == "" && ruleForm.checknum != res) return;
    sessionStorage.setItem("token", res.token);
    router.replace("/");
  });
};
</script>
<style scoped lang="scss">
.inp {
  width: 328px;
  .check {
    width: 200px;
    margin-right: 28px;
  }
  .btn {
    width: 100px;
    height: 40px;
  }
}
.el-input {
  height: 40px;
}
.el-button1 {
  width: 100%;
  height: 40px;
}
.remember {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -10px;
  margin-bottom: 5px;
  span {
    color: #1890ff;
    cursor: pointer;
    font-size: 14px;
  }
}
</style>
