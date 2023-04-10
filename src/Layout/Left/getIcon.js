let iconList = [
    { name: "Dashboard", icon:'icon-dashboard'},
    { name: "表单页", icon:'icon-yduibianxie' },
    { name: "列表页", icon:'icon-dasuolvetuliebiao' },
    { name: "详情页",icon:'icon-chakan' },
    { name: "结果页", icon:'icon-tijianjieguo' },
    { name: "异常页", icon:'icon-yichang' },
    { name: "个人页", icon:'icon-geren' },
    {name:'图形编辑器',icon:'icon-bianji'}
  ]
export function getIcon(str){
   for(let i = 0;i<iconList.length;i++){
        if(iconList[i].name == str){
            return iconList[i].icon
        }
   }
}