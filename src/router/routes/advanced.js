let advancedRouter = {
    path: 'advanced',
    meta: { token: true,name:[{name:'详情页'},{name:'高级详情页'}] },
    name: 'advanced',
    component: () => import('@/views/Advanced')
  }
  export default advancedRouter