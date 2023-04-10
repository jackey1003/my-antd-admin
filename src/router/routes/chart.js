let chartRouter = {
    path: 'chart',
    meta: { token: true,name:[{name:'图形编辑器'}] },
    name: 'chart',
    component: () => import('@/views/Chart')
  }
  export default chartRouter