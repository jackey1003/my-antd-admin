let resultRouter = {
    path: 'result',
    meta: { token: true,name:[{name:'结果页'}] },
    name: 'result',
    component: () => import('@/views/Result')
  }
  export default resultRouter