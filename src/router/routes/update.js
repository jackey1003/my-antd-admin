let updateRouter = {
    path: 'update',
    meta: { token: true,name:[{name:'个人页'},{name:'个人设置'}] },
    name: 'update',
    component: () => import('@/views/Update')
  }
  export default updateRouter