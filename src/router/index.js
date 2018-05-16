import Vue from 'vue'
import Router from 'vue-router'
import test from '@/components/test'
import index from '@/components/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name: 'index',
      component: index
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
