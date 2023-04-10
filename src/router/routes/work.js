let workRouter = {
    path: 'work',
    name: 'work',
    meta: { token: true,name:[{name:'Dashboard'},{name:'工作台'}] },
    component: () => import('@/views/Work')
  }
  export default workRouter