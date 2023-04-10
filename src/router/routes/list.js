let listRouter = {
    path: 'list',
    name: 'list',
    meta: { token: true,name:[{name:'列表页'}] },
    component: () => import('@/views/List')
  }
  export default listRouter