let basicRouter = {
    path: 'basic',
    meta: { token: true,name:[{name:'详情页'},{name:'基础详情页'}] },
    name: 'basic',
    component: () => import('@/views/Basic')
  }
  export default basicRouter