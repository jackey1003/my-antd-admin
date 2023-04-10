<template>
<div class='inp'>
    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        class="demo-ruleForm"
      >
        <el-form-item prop="username">
          <el-input :prefix-icon="UserFilled"
            v-model="ruleForm.username"
            type="text"
            placeholder="用户名:user or admin"
          />
        </el-form-item>
        <el-form-item prop="password">
          <Password @sendMsg="getChild"></Password>
        </el-form-item>
        <div class="remember">
        <el-checkbox v-model="checked1" label="记住密码" size="large" />
        <span>忘记密码</span>
        </div>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
</div>
</template>
<script setup>
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import loginReq from '@/http/api/login'
import {useRouter} from 'vue-router'
import { UserFilled, Lock,View } from '@element-plus/icons-vue'
import Password from "./Password.vue";
import { useAttrs } from "vue";
const $attrs = useAttrs()
console.log(Object.values($attrs));
const store = useStore()
const checked1 = ref(true)
const ruleFormRef = ref();
const router = useRouter()
const validatePass = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("用户名是必填项!"));
  }
};
const ruleForm = reactive({
  username: "admin",
  password: "",
});

const rules = reactive({
    username: [{ validator: validatePass, trigger: "blur" }],
});
//通过自定义事件获取子组件的值
const getChild = (val)=>{
  ruleForm.password = val
}
const submitForm = (formEl) => {
  //发送请求校验账号密码
    // loginReq('login',formEl).then(res=>{
    //     if(ruleForm.username == 'admin' || ruleForm.username == 'admin' && ruleForm.password == 'ant.design'){
    //       sessionStorage.setItem('token',res.token)
    //       router.replace('/')
    //     }
    // })
    store.dispatch('asyncChangeRouteList',ruleForm).then(res=>{
      router.push('/')
    })
};
</script>
<style scoped lang='scss'>
.inp {
    width: 328px;
    .remember{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top:-10px;
      margin-bottom: 5px;
      span{
        color: #1890ff;
        cursor: pointer;
        font-size: 14px;
      }
    }
  }
.el-input{
  height: 40px;
}
.el-button{
    width: 100%;
    height: 40px;
}
</style>
