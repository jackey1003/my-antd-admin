let centerRouter = {
    path: 'center',
    meta: { token: true,name:[{name:'个人页'},{name:'个人中心'}] },
    name: 'center',
    component: () => import('@/views/Center')
  }
  export default centerRouter