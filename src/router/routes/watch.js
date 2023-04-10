let watchRouter = {
    path: 'watch',
    name: 'watch',
    meta: { token: true,name:[{name:'Dashboard'},{name:'监控页'}] },
    component: () => import('@/views/Watch')
  }
  export default watchRouter