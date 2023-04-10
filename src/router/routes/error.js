let errorRouter = {
    path: 'error',
    meta: { token: true,name:[{name:'异常页'}] },
    name: 'error',
    component: () => import('@/views/Error')
  }
  export default errorRouter