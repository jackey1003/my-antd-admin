let autoImportObj = {
    install(Vue){
          // 1：自动获取到  EchartComponent 写的.vue文件
         //require.context('路径',布尔值，正则) =》返回值 webpack 实例
         //提供两个api 
         //1webpackObj. keys() =>数组=》数组的值就是文件路径
         //2 webpackObj('文件路径').default
        let webpackObj = require.context('./',true,/.vue/)
        webpackObj.keys().forEach(item => {
                            //组件名       //组件路径                   //该模块的vue对象
        Vue.component(item.replace('./','').replace('.vue',''),webpackObj(item).default)
        });
    }
}
export default autoImportObj