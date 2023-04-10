let indexRouter = {
    path: 'index',
    name: 'index',
    meta: { token: true, name: [{ name: 'Dashboard' }, { name: '分析页' }],keepAlive:true },
    component: () => import('@/views/Index')
}
export default indexRouter