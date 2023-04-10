let formRouter = {
    path: 'form',
    name: 'form',
    meta: { token: true,name:[{name:'表单页'}] },
    component: () => import('@/views/Form')
  }
  export default formRouter