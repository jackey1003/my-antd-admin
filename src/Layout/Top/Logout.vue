<template>
  <div>
    <el-dropdown  @command="changemenu">
      <span class="el-dropdown-link">
        <div class="logout">
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
            alt=""
          />
          <span>Serati Ma</span>
        </div>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :icon="User" command="1">个人中心</el-dropdown-item>
          <el-dropdown-item :icon="Setting" command="2">
            个人设置
          </el-dropdown-item>
          <el-dropdown-item :icon="SwitchButton" command="3">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script setup>
import {useRouter} from "vue-router"
import {
    User,
    Setting,
    SwitchButton,
} from "@element-plus/icons-vue";
const router = useRouter()
const changemenu = (val)=>{
    if(val == 1){
      router.push('/center')
    }
    if(val == 2){
      router.push('/update')
    }
    //点击退出登录
    if(val == 3){
        //清除本地存储
        sessionStorage.clear()
        localStorage.clear()
        //跳转登录页面
        router.replace('/login')
    }
}
</script>
<style scoped lang='scss'>
.logout {
  height: 48px;
  padding: 0 15px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }
  span {
    color: #fff;
    margin-left: 8px;
  }
}
.logout:hover {
  background: #252a3d;
}
</style>
