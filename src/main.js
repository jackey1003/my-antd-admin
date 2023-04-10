import { createApp } from "vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//引入公共样式
import "@/style/common.scss";
//引入字体图标
import "@/style/iconfont.css";
//引入路由模块文件
import "@/router/router";
//引入自动导入组件插件
import autoImportObj from "@/echartComponent/autoImport";
import VueSignaturePad from "vue-signature-pad";
import VXETable from "vxe-table";
import "vxe-table/lib/style.css";
function useTable(app) {
  app.use(VXETable);
  // 给 vue 实例挂载内部对象，例如：
  // app.config.globalProperties.$XModal = VXETable.modal
  // app.config.globalProperties.$XPrint = VXETable.print
  // app.config.globalProperties.$XSaveFile = VXETable.saveFile
  // app.config.globalProperties.$XReadFile = VXETable.readFile
}
const app = createApp(App);
app.use(autoImportObj); //注册自动导入组件插件
app.use(useTable)
app.use(store); //注册vuex插件
app.use(VueSignaturePad);
app.use(router); //注册路由插件
app.mount("#app"); //挂载到app节点
app.use(Antd);
