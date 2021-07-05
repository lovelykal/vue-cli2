import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 基础路由
const constantRouters = [
  {
    path: '/',
    name: 'HelloWorld',
    component: () => import('@/components/HelloWorld')
  },
  {
    path: '/first-step',
    name: 'FirstStep',
    component: () => import('@/views/first-step')
  },

  {
    path: '*',
    component: () => import('@/views/exception/404')
  }
]

export default new Router({
  // mode: 'history',
  routes: constantRouters
})
